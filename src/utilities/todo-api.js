import * as sendRequest from './send-request';
import axios from 'axios';

const BASE_URL = '/api/todo';

export function newEntry(data){
    return sendRequest.sendPostRequest(`${BASE_URL}/newentry`, data)
}

export async function getToDoList(){
    return sendRequest.sendGetRequest(`${BASE_URL}/getall`)
}

export function editToDoList(data){
    console.log('api!!',data);
    return sendRequest.sendPostRequest(`${BASE_URL}/edit`, data)
}

export function getToDoById(id){
    return sendRequest.sendPostRequest(`${BASE_URL}/getbyid`, id)
}

export function deleteItem(id){
    console.log('API page');
    return sendRequest.sendPostRequest(`${BASE_URL}/remove`, id)
}