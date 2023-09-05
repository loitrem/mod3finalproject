import React, {useState} from 'react'
import { newEntry } from '../../utilities/calendar-service';
import { getUser } from '../../utilities/users-service';

function CalendarAdd() {
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
        const data = {
            name: user,
            title: info.title,
            time: info.time,
            details: info.details,
            date: date.toDateString(),
        }
        console.log(data);
        await newEntry(data)

    }
    return (
        <div className='calendarAddWrapper'>
            <div className="calendarAdd">
                <form onSubmit={handleSubmit}>
                    <input type="text" name='title' value={info.title || ''} onChange={handleChange} required/>
                    <input type="time" name='time' value={info.time || ''} onChange={handleChange} required/>
                    <textarea name="details" id="" cols="30" rows="10" value={info.details || ''} onChange={handleChange}>{info.details || ''}</textarea>
                    <button>submit</button>
                </form>
            </div>
        </div>
    )
}

export default CalendarAdd