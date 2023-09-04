import * as todoAPI from './todo-api.js';

export async function newEntry(data){
    const entry = await todoAPI.newEntry(data);
    return entry;
}

export async function getToDoList(data){
    const entry = await todoAPI.getToDoList(data);
    return entry;
}

export async function editToDoList(data){
    const entry = await todoAPI.editToDoList(data);
    return entry;
}

export async function getToDoById(id){
    const entry = await todoAPI.getToDoById(id);
    return entry;
}

export async function deleteItem(id){
    const entry = await todoAPI.deleteItem(id);
    return entry;
}

