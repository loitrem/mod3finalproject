import * as calendarAPI from './calendar-api.js';

export async function newEntry(data){
    const entry = await calendarAPI.newEntry(data);
    return entry;
}