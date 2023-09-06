import * as sendRequest from './send-request';

const BASE_URL = '/api/usergroups';

export function add(data){
    return sendRequest.sendPostRequest(`${BASE_URL}/add`, data)
}

export function remove(data){
    return sendRequest.sendPostRequest(`${BASE_URL}/remove`, data)
}

export function findAll(){
    return sendRequest.sendGetRequest(`${BASE_URL}/findall`)
}

export function addUser(){
    return sendRequest.sendGetRequest(`${BASE_URL}/adduser`)
}