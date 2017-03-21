import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from 'app/routes';
import { makeStore } from 'app/helpers';
import { Provider } from 'react-redux';
import 'app/css/master.scss';

const history = createBrowserHistory();

let initialState = window.__INITIAL_STATE__;

const store = makeStore(initialState, true);

render(
    <Provider store={store}>
        <Router children={routes} history={history} />
    </Provider>,
    document.getElementById('app'));
