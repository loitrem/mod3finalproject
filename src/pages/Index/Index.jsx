import React, {useState} from 'react'
import Calendar from 'react-calendar'; 
import { newEntry } from '../../utilities/calendar-service';
import { getUser } from '../../utilities/users-service';

function Index() {
    const [date, setDate] = useState(new Date())
    // const [title,setTitle]=useState('')
    // const [time,setTime]=useState('')
    // const [details,setDetals]=useState('')
    const [info,setInfo]=useState('')

    const handleChange = (e) =>{
        setInfo({...info, [e.target.name]: e.target.value})
    }

    const handleSubmit = async(e) => {
        const user = getUser()
        console.log(user);
        e.preventDefault()
        const data = {...info,
            date: date.toDateString()}
        console.log(data);
        await newEntry(data)

    }
    // console.log('TIME',time);
    // new Date(Date.parse(current.date)).toDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
    return (
        <div>
            <h1 className="header">React Calendar</h1>
            <div className="calendar-container">
                <Calendar onChange={setDate} value={date}/>
            </div>
            <div className="text-center">

                <form onSubmit={handleSubmit}>
                    <div className="date"><label htmlFor="">date</label>{date.toDateString()}</div>
                    <input type="text" name='title' value={info.title || ''} onChange={handleChange} required/>
                    <input type="time" name='time' value={info.time || ''} onChange={handleChange} required/>
                    <textarea name="details" id="" cols="30" rows="10" value={info.details || ''} onChange={handleChange}>{info.details || ''}</textarea>
                    <button>submit</button>
                </form>

            </div>
        </div>
    )
}

export default Index