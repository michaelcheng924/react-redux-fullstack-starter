import { createClient } from 'app/api/utils';

export const addUser = createClient({
    actionTypePrefix: 'users:addUser',
    requestType: 'POST',
    url: 'api/users'
});

export const getUsers = createClient({
    actionTypePrefix: 'users:getUser',
    requestType: 'GET',
    url: 'api/users'
});

export const removeUser = createClient({
    actionTypePrefix: 'users:removeUser',
    requestType: 'DELETE',
    url: 'api/users'
});
