import { Map, List, fromJS } from 'immutable';

const defaultState = List();

export default function productReducer(state = defaultState, action) {
    switch(action.type) {
        case 'SET_PRODUCTS':
            state = fromJS(action.products);
            return state;
        default:
            return state;
    }
}
