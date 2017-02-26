import { createStore, combineReducers } from 'redux';
import * as reducers from 'reducers';

export function makeStore(state, isClient) {
    const reducer = combineReducers(reducers);
    return isClient
        ? createStore(
            reducer,
            state,
            window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
        : createStore(reducer, state);
}