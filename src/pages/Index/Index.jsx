import React, {useState,useEffect} from 'react'
import Calendar from 'react-calendar'; 
import { findByDate } from '../../utilities/calendar-service';
import { getUser } from '../../utilities/users-service';
import { useNavigate } from 'react-router-dom'

function Index() {
    const [date, setDate] = useState(new Date())
    // const [title,setTitle]=useState('')
    // const [time,setTime]=useState('')
    // const [details,setDetals]=useState('')
    const [info,setInfo]=useState('')
    const navigate = useNavigate();

    useEffect(()=>{
        handleChange()
    },[date])


    const handleChange = async() =>{

        setInfo(await findByDate({date: date.toDateString()}))
        // console.log('DBINFO',dbInfo);
        
    }
    console.log('DBINFO222',info);


    return (
        <div>
            <h1 className="header">React Calendar</h1>
            <div className="calendar-container">
                <Calendar onChange={setDate} value={date}/>
            </div>
            <div className="text-center">
                <div className="date"><label htmlFor="">date</label>{date.toDateString()}</div>
                <br/>
                <button onClick={()=>{
                    navigate(`/calendar/add/${date.toDateString()}`)
                }}>Add Event</button>
                <br/>
                {info?info.map((current,i)=>{
                    console.log('Current DB Info',current);
                    return(
                    <div className="display" key={i}>
                    <div className="title"><label>Title: </label>{current.title}</div> <br/>
                    <div className="time"><label>Time: </label>{current.time}</div> <br/>
                    <div className="details"><label>Detais: </label>{current.details}</div>
                    <button onClick={()=>{
                    navigate(`/calendar/edit/${current._id}`)
                }}>Edit Event</button>
                    </div>
                    )
                }):''}
            </div>
        </div>
    )
}

export default Index