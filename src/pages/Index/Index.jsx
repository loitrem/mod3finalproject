import React, {useState} from 'react'
import Calendar from 'react-calendar'; 
import { findByDate } from '../../utilities/calendar-service';
import { getUser } from '../../utilities/users-service';

function Index() {
    const [date, setDate] = useState(new Date())
    // const [title,setTitle]=useState('')
    // const [time,setTime]=useState('')
    // const [details,setDetals]=useState('')
    const [info,setInfo]=useState('')
    let calendarData
    const handleChange = async(e,data) =>{
        e.preventDefault();
        calendarData = await findByDate(data);
    }

    // const handleSubmit = async(e) => {
    //     const user = getUser()
    //     console.log(user);
    //     e.preventDefault()
    //     const data = {
    //         name: user,
    //         title: info.title,
    //         time: info.time,
    //         details: info.details,
    //         date: date.toDateString(),
    //     }
    //     console.log(data);
    //     await newEntry(data)

    // }
    // console.log('TIME',time);
    // new Date(Date.parse(current.date)).toDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
    return (
        <div>
            <h1 className="header">React Calendar</h1>
            <div className="calendar-container">
                <Calendar onChange={(e)=>{
                    handleChange(e,date.toDateString())
                }} value={date}/>
                {setDate(date)}
            </div>
            <div className="text-center">
                <div className="date"><label htmlFor="">date</label>{date.toDateString()}
                <br/>
                {calendarData}
                </div>
            </div>
        </div>
    )
}

export default Index