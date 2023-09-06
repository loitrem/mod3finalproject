import * as groupsAPI from './usergroups-api.js';

export async function add(data){
    const entry = await groupsAPI.add(data);
    return entry;
}

export async function remove(data){
    const entry = await groupsAPI.remove(data);
    return entry;
}

export async function findAll(){
    const entry = await groupsAPI.findAll();
    return entry;
}
