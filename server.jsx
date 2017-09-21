import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { RoutingContext, match } from 'react-router';
import createLocation from 'history/lib/createLocation';
import { makeStore } from 'app/helpers';
import serverRoutes from 'app/server/routes';
import App from 'app/components/App';

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/appname');

var app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
serverRoutes(app);

app.use((req, res) => {
    const store = makeStore();
    const context = {}

    const componentHTML = ReactDOMServer.renderToString(
        <StaticRouter
            location={req.url}
            context={context}
        >
            <Provider store={store}>
                <App/>
            </Provider>
        </StaticRouter>
    );

    const initialState = store.getState();

    const HTML = `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <title>React Redux Fullstack Starter</title>

                <link rel="stylesheet" href="/styles.css">
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

    if (context.url) {
        res.writeHead(301, {
            Location: context.url
        });
        res.end()
    } else {
        res.write(HTML)
        res.end()
    }
});

export default app;
