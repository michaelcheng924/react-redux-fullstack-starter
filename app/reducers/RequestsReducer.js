import { SET_ERROR_MESSAGE } from 'app/actions/RequestFormActionTypes';
import { addRequest, removeRequest, getRequests } from 'app/api/requests';

const defaultState = {
    errorMessage: null,
    list: []
};

export default function requestsReducer(state = defaultState, { type, payload }) {
    switch(type) {
        case addRequest.SUCCESS:
        case removeRequest.SUCCESS:
        case getRequests.SUCCESS:
            return {
                ...state,
                list: payload.requests
            };
        case SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: payload.message
            };
        default:
            return state;
    }
}
