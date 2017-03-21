import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from 'app/reducers';

export function makeStore(state, isClient) {
    const reducer = combineReducers(reducers);

    if (isClient && window && window.__REDUX_DEVTOOLS_EXTENSION__) {
        return createStore(
            reducer,
            state,
            compose(
                applyMiddleware(thunk),
                window.__REDUX_DEVTOOLS_EXTENSION__()
            )
        );
    }

    return createStore(
        reducer,
        state,
        applyMiddleware(thunk)
    );
}