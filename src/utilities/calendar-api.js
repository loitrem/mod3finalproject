import * as sendRequest from './send-request';

const BASE_URL = '/api/calendar';

export function newEntry(data){
    return sendRequest.sendPostRequest(`${BASE_URL}/newentry`, data)
}

export function update(data){
    return sendRequest.sendPostRequest(`${BASE_URL}/update`, data)
}

export function findByDate(data){
    return sendRequest.sendPostRequest(`${BASE_URL}/findbydate`, data)
}