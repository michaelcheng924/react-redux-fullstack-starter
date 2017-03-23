import { SET_ERROR_MESSAGE } from 'app/actions/RequestFormActionTypes';

export function setErrorMessage(message) {
    return {
        type: SET_ERROR_MESSAGE,
        payload: {
            message
        }
    };
}
