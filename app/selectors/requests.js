import { createSelector } from 'reselect';

export const requestsSelector = state => state.requests;

export const errorMessageSelector = createSelector(
    requestsSelector,
    requests => requests.errorMessage
);

export const requestsListSelector = createSelector(
    requestsSelector,
    requests => requests.list
);
