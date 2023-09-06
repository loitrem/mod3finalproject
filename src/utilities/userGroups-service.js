import * as userGroupsAPI from './userGroups-api.js';

export async function newEntry(data){
    const entry = await todoAPI.newEntry(data);
    return entry;
}