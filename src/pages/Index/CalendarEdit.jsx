import React, {useState, useEffect} from 'react'
import { findById, update } from '../../utilities/calendar-service';
import { getUser } from '../../utilities/users-service';
import { useNavigate, useParams   } from 'react-router-dom'

function CalendarEdit() {
    const [date, setDate] = useState(new Date())
    const [info,setInfo]=useState('')
    const id = useParams()
    const navigate = useNavigate();

    useEffect(()=>{
        findById(id)
        .then(results =>{
            setInfo(results)
            
                setInfo(results);
            })
    },[])

    const handleChange = (e) =>{
        setInfo({...info, [e.target.name]: e.target.value})
    }

    const handleSubmit = async(e) => {
        const user = getUser()

        e.preventDefault()
        const data = {
            id:id.id,
            name: user.name,
            title: info.title,
            time: info.time,
            details: info.details,
            date: date.toDateString(),
        }


        await update(data)
        navigate('/')

    }
    return (
        <div className='calendarAddWrapper'>
            <div className="calendarAdd">
                <form onSubmit={handleSubmit}>
                    <input type="text" name='title' defaultValue={info.title || ''} onChange={handleChange} required/>
                    <input type="time" name='time' defaultValue={info.time || ''} onChange={handleChange} required/>
                    <textarea name="details" id="" cols="30" rows="10" defaultValue={info.details || ''} onChange={handleChange}></textarea>
                    <button>submit</button>
                </form>
            </div>
        </div>
    )
}

export default CalendarEdit