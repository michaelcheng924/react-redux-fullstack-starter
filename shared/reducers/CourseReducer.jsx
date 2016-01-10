import { Map, List } from 'immutable';

const defaultState = Map({
    steps: List()
});

export default function courseReducer(state = defaultState, action) {
    switch(action.type) {
        default:
            return state;
    }
}
