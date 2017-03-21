import { CHANGE_SELECTED_USER } from 'app/actions/UsersActionTypes';
import { addUser, getUsers, removeUser } from 'app/api/users';

const defaultState = {
    selectedUser: '',
    list: []
};

export default function usersReducer(state = defaultState, { type, payload }) {
    switch(type) {
        case addUser.SUCCESS:
        case getUsers.SUCCESS:
        case removeUser.SUCCESS:
            return {
                ...state,
                list: payload.users
            };
        case CHANGE_SELECTED_USER:
            return {
                ...state,
                selectedUser: payload.email
            };
        default:
            return state;
    }
}
