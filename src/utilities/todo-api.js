import sendRequest from './send-request';

const BASE_URL = '/api/todo';

export function newEntry(data){
    return sendRequest(`${BASE_URL}/newentry`, 'POST', data)
}

export function getToDoList(){
    return sendRequest(`${BASE_URL}/getall`, 'GET')
}

export function editToDoList(data){
    console.log('api!!',data);
    return sendRequest(`${BASE_URL}/edit`, 'POST', data)
}

export function getToDoById(id){
    return sendRequest(`${BASE_URL}/getbyid`, 'POST', id)
}

export function deleteItem(id){
    console.log('API page');
    return sendRequest(`${BASE_URL}/remove`, 'POST', id)
}