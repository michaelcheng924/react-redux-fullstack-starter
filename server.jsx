import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { RoutingContext, match } from 'react-router';
import createLocation from 'history/lib/createLocation';
import routes from 'routes';
import { makeStore } from 'helpers';
import { Provider } from 'react-redux';
import { setSteps } from 'actions/CourseActions';

const steps = [
    {
        id: '1',
        name: 'ACT Basics',
        isExpanded: true,
        isCompleted: false,
        modules: [
        {
            id: '1-1',
            name: 'Overview / Format',
            url: '1-1-overview-format',
            isCompleted: true
        }, {
            id: '1-2',
            name: 'Read, Read, Read',
            url: '1-2-read',
            isCompleted: true
        }
        ]
    },
    {
        id: '2',
        name: 'Materials Needed',
        isExpanded: true,
        isCompleted: true,
        modules: [
        {
            id: '2-1',
            name: 'For the Test',
            url: '2-1-materials-for-test',
            isCompleted: true
        }, {
            id: '2-2',
            name: 'For Preparing',
            url: '2-2-materials-for-preparing',
            isCompleted: false
        }
        ]
    }
];

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res) => {
    const location = createLocation(req.url);
    const store = makeStore();

    match({ routes, location }, (err, redirectLocation, renderProps) => {
        if (err) {
            console.log(err);
            return res.status(500).end('Internal server error');
        }

        if (!renderProps) {
            return res.status(404).end('Not found.');
        }

        const InitialComponent = (
            <Provider store={store}>
                <RoutingContext {...renderProps} />
            </Provider>
        );

        store.dispatch(setSteps(steps));
        const initialState = store.getState();

        const componentHTML = renderToString(InitialComponent);

        const HTML = `
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8">
                    <title>Best ACT Prep</title>

                    <script>
                        window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
                    </script>
                </head>
                <body>
                    <div id="app">${componentHTML}</div>
                    <script src="/bundle.js"></script>
                </body>
            </html>
        `;

        res.end(HTML);
    });
});

export default app;
