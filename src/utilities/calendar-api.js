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

export function findById(data){
    return sendRequest.sendPostRequest(`${BASE_URL}/findbyid`, data)
}

export function findAll(){
    return sendRequest.sendGetRequest(`${BASE_URL}/findall`)
}

export function remove(data){
    return sendRequest.sendPostRequest(`${BASE_URL}/remove`, data)
}

export function edit(data){
    return sendRequest.sendPostRequest(`${BASE_URL}/edit`, data)
}