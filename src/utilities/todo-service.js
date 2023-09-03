import * as todoAPI from './todo-api.js';

export async function newEntry(data){
    const entry = await todoAPI.newEntry(data);
    return entry;
}

export async function getToDoList(data){
    const entry = await todoAPI.getToDoList(data);
    return entry;
}
