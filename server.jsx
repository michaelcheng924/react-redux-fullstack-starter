import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { RoutingContext, match } from 'react-router';
import createLocation from 'history/lib/createLocation';
import routes from 'routes';
import { makeStore } from 'helpers';
import { Provider } from 'react-redux';
import { setItems } from 'actions/ProductsActions';

const items = [{
    id: 1,
    name: 'iPad',
    price: '289.00',
    description: 'Lorem ipsum dolor sit amet, vidit insolens ea mei, usu in affert dolorum. Iuvaret inermis voluptatibus sea id. Homero utamur pro ei, no wisi atqui neglegentur est. No tacimates delicata qui.'
}, {
    id: 2,
    name: 'MacBook Pro',
    price: '1,199.00',
    description: 'At sed audiam dolores hendrerit. Te vix dissentiunt consectetuer, id ius error invenire efficiantur. Te sit magna ubique probatus. Atqui doming eam ne. Illud voluptua iracundia cum ad, nec eu lorem platonem accommodare.'
}];

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

        store.dispatch(setItems(items));
        const initialState = store.getState();

        const componentHTML = renderToString(InitialComponent);

        const HTML = `
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8">
                    <title>React Redux Fullstack Starter</title>

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
