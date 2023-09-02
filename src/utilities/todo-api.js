import sendRequest from './send-request';

const BASE_URL = '/api/todo';

export function newEntry(data){
    return sendRequest(`${BASE_URL}/newentry`, 'POST', data)
}



export function getToDoList(){
    return sendRequest(`${BASE_URL}/getall`, 'GET')
}
