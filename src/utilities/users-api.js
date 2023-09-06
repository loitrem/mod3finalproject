import * as sendRequest from './send-request';
const BASE_URL = '/api/users';

export function signUp(userData) {
    return sendRequest.sendPostRequest(`${BASE_URL}/signup`, userData);
}

export function login(credentials) {
    return sendRequest.sendPostRequest(`${BASE_URL}/login`, credentials);
}

export function getAllUsers() {
    return sendRequest.sendGetRequest(`${BASE_URL}/getallusers`);
}
