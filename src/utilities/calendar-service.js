import * as calendarAPI from './calendar-api.js';

export async function newEntry(data){
    const entry = await calendarAPI.newEntry(data);
    return entry;
}

export async function update(data){
    const entry = await calendarAPI.update(data);
    return entry;
}

export async function findByDate(data){

    const entry = await calendarAPI.findByDate(data);
    return entry;
}

export async function findByDate1(data){
    console.log('UUUUUUHHHHHHHHH??????',data);
    // const entry = await calendarAPI.findByDate(data);
    // return entry;
}

export async function findById(data){
    const entry = await calendarAPI.findById(data);
    return entry;
}

export async function findAll(){
    const entry = await calendarAPI.findAll();
    return entry;
}

export async function remove(data){
    const entry = await calendarAPI.remove(data);
    return entry;
}

export async function edit(data){
    const entry = await calendarAPI.edit(data);
    return entry;
}