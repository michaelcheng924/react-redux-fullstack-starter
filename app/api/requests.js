import { createClient } from 'app/api/utils';

export const addRequest = createClient({
    actionTypePrefix: 'requests:addRequest',
    requestType: 'POST',
    url: 'api/requests'
});

export const getRequests = createClient({
    actionTypePrefix: 'requests:getRequest',
    requestType: 'GET',
    url: 'api/requests'
});

export const removeRequest = createClient({
    actionTypePrefix: 'requests:removeRequest',
    requestType: 'DELETE',
    url: 'api/requests'
});
