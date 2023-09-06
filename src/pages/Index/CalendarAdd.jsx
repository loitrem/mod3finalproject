import React, {useState, useEffect} from 'react'
import { newEntry } from '../../utilities/calendar-service';
import { getUser } from '../../utilities/users-service';
import { useNavigate, useParams   } from 'react-router-dom'

function CalendarAdd() {
    const [date, setDate] = useState(null)

    const [info,setInfo]=useState('')
    const navigate = useNavigate();
    
    const newDate = useParams()

    const handleChange = (e) =>{
        setInfo({...info, [e.target.name]: e.target.value})
    }

    useEffect(()=>{
        
        setDate(newDate)
        // console.log('IM A DATE DAMMIT',date.date);
    },[date])


    const handleSubmit = async(e) => {
        const user = getUser()
        console.log(user);
        e.preventDefault()
        const data = {
            name: user,
            title: info.title,
            time: info.time,
            details: info.details,
            date: date.date,
        }
        console.log(data);
        await newEntry(data)
        navigate('/')
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