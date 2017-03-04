import $ from 'jquery';

export function createClient({ actionTypePrefix, requestType, url }) {
    const SUCCESS = `${actionTypePrefix}_SUCCESS`;

    return {
        SUCCESS,
        request: dispatch => data => {
            return $.ajax({
                url,
                contentType: 'application/json',
                data: JSON.stringify(data),
                type: requestType,
                success(response) {
                    dispatch({
                        type: SUCCESS,
                        payload: response
                    });
                }
            })
        }
    };
}