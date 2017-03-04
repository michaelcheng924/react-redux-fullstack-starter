import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from 'reducers';

export function makeStore(state, isClient) {
    const reducer = combineReducers(reducers);
    return isClient
        ? createStore(
            reducer,
            state,
            compose(
                applyMiddleware(thunk),
                window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
            )
        )
        : createStore(
            reducer,
            state,
            applyMiddleware(thunk)
        );
}