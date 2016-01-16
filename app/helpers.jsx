import { createStore, combineReducers } from 'redux';
import * as reducers from 'reducers';

export function makeStore(state) {
    const reducer = combineReducers(reducers);
    return createStore(reducer, state);
}