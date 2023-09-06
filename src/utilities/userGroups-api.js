import * as sendRequest from './send-request';

const BASE_URL = '/api/groups';

export function add(data){
    return sendRequest.sendPostRequest(`${BASE_URL}/add`, data)
}