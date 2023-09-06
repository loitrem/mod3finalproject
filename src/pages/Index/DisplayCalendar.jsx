import React, { useState,useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { newEntry, findByDate, remove, findAll } from '../../utilities/calendar-service';
import { getUser } from '../../utilities/users-service';

function DisplayCalendar() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [eventName, setEventName] = useState("");
    const [events, setEvents] = useState([]);
    const [allDates, setAllDates] = useState(null)
    let className = ""

    useEffect(()=>{
        let calendarList=[]
        let data = findAll()
    
        data.then(results =>{
            results.map((current)=>{
                // if (first){
                    calendarList.push(current)
                setAllDates(calendarList)
                setEvents(calendarList)
            })
        })
    },[])

    const Date_Click_Fun = (date) => {
        setSelectedDate(date);
    };

    const Event_Data_Update = (event) => {
        setEventName(event.target.value);
    };

    const Create_Event_Fun = async() => {
        
        if (selectedDate && eventName) {
            const user = getUser()
            const newEvent = {
                time: new Date().getTime(),
                date: new Date(selectedDate),
                title: eventName,
            };
            const addEvent = {
                name: user.name,
                time: new Date().getTime(),
                date: new Date(selectedDate),
                title: eventName,
            }

            await newEntry(addEvent)

            setEvents([...events, newEvent]);
            setSelectedDate(null);
            setEventName("");
            setSelectedDate(newEvent.date);
        }
    };

    const Update_Event_Fun = (eventId, newName) => {
        const updated_Events = events.map((event) => {
            if (event.time === eventId) {
                return {
                    ...event,
                    title: newName,
                };
            }
            return event;
        });
        setEvents(updated_Events);
    };

    const Delete_Event_Fun = (eventId) => {
        const updated_Events = events.filter((event) => event.time !== eventId);
        setEvents(updated_Events);
    };

    return (
        <>
            <div className="container">
                <div className="calendar-container">
                    {allDates?<Calendar
                    
                        value={selectedDate}
                        onChange={Date_Click_Fun}
                        tileClassName={({ date }) =>
                            // setLabel(date)
                            allDates?allDates.map((current)=>{
                                // console.log('CURRENT???',events);
                                new Date(selectedDate).toDateString() && new Date(date).toDateString() === new Date(selectedDate).toDateString()&&new Date(current.date).toDateString()===date.toDateString()
                                    ? className="selected event-marked"
                                    : events.some(
                                        (event) =>
                                            event.date ===
                                            date.toDateString(),
                                    )
                                    ? className = "event-marked"
                                    : className = ""
                                    // console.log('CLASSNAME!!!!!',className);
                                    return className
                            }): ''
                        
                        }
                    />:''}{" "}
                </div>
                <div className="event-container">
                    {" "}
                    {selectedDate && (
                        <div className="event-form">
                            <h2> Create Event </h2>{" "}
                            <p>
                                {" "}
                                Selected Date: {selectedDate.toDateString()}{" "}
                            </p>{" "}
                            <input
                                type="text"
                                placeholder="Event Name"
                                value={eventName}
                                onChange={Event_Data_Update}
                            />{" "}
                            <button
                                className="create-btn"
                                onClick={Create_Event_Fun}
                            >
                                Click Here to Add Event{" "}
                            </button>{" "}
                        </div>
                    )}
                    {events.length > 0 && selectedDate && (
                        <div className="event-list">
                            <h2> My Created Event List </h2>{" "}
                            <div className="event-cards">
                                {" "}
                                {events.map((event) => {
                                    
                                    return (
                                new Date(event.date).toDateString() ===
                                    new Date(selectedDate).toDateString() ? (
                                        <div
                                            key={event.time}
                                            className="event-card"
                                        >
                                            <div className="event-card-header">
                                                <span className="event-date">
                                                    {" "}
                                                    {new Date(event.date).toDateString()}{" "}
                                                </span>{" "}
                                                <div className="event-actions">
                                                    <button
                                                        className="update-btn"
                                                        onClick={() =>
                                                            Update_Event_Fun(
                                                                event.time,
                                                                prompt(
                                                                    "ENTER NEW TITLE",
                                                                ),
                                                            )
                                                        }
                                                    >
                                                        Update Event{" "}
                                                    </button>{" "}
                                                    <button
                                                        className="delete-btn"
                                                        onClick={() =>
                                                            Delete_Event_Fun(
                                                                event.time,
                                                            )
                                                        }
                                                    >
                                                        Delete Event{" "}
                                                    </button>{" "}
                                                </div>{" "}
                                            </div>{" "}
                                            <div className="event-card-body">
                                                <p className="event-title">
                                                    {" "}
                                                    {event.title}{" "}
                                                </p>{" "}
                                            </div>{" "}
                                        </div>
                                    ) : null)},
                                )}{" "}
                            </div>{" "}
                        </div>
                    )}{" "}
                </div>{" "}
            </div>{" "}
        </>
    );
};

export default DisplayCalendar