import * as sendRequest from './send-request';

const BASE_URL = '/api/usergroups';

export function newEntry(data){
    return sendRequest.sendPostRequest(`${BASE_URL}/newentry`, data)
}