import { Map, List, fromJS } from 'immutable';

const defaultState = Map({
    steps: List()
});

export default function courseReducer(state = defaultState, action) {
    switch(action.type) {
        case 'SET_STEPS':
            return state.set('steps', fromJS(action.steps));
        default:
            return state;
    }
}
