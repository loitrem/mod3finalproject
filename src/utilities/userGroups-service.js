import * as userGroupsAPI from './groups-api.js';

export async function add(data){
    const entry = await userGroupsAPI.add(data);
    return entry;
}