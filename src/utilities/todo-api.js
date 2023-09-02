import axios from "axios";

const BASE_URL = '/api/todo';

export async function newEntry(data){
    return await axios.post(`${BASE_URL}/newentry`, data)
}
