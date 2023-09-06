import * as groupsAPI from './groups-api.js';

export async function add(data){
    const entry = await groupsAPI.add(data);
    return entry;
}

export async function remove(data){
    const entry = await groupsAPI.remove(data);
    return entry;
}
