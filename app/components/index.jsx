import { Provider } from 'react-redux';
import { makeStore } from 'app/helpers';
import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from 'app/components/App';

import 'app/css/master.scss';

injectTapEventPlugin();

const initialState = window.__INITIAL_STATE__;

const store = makeStore(initialState, true);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'));
