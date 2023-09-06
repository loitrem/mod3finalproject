import * as sendRequest from './send-request';

const BASE_URL = '/api/groups';

export function add(data){
    return sendRequest.sendPostRequest(`${BASE_URL}/add`, data)
}

export function remove(data){
    return sendRequest.sendPostRequest(`${BASE_URL}/remove`, data)
}