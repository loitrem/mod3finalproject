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

    const del = async(id)=>{

    }
    const handleChange = async() =>{

        setInfo(await findByDate({date: date.toDateString()}))

        
    }



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
                    let timeArr = current.time.split(':')
                    let amPm="AM"
                    if (Number(timeArr[0])>12){
                            timeArr[0] = Number(timeArr[0])-12
                            amPm = 'PM'
                    }
                    let newTime = timeArr[0]+':'+timeArr[1]+' '+amPm
                    console.log(newTime);
                    return(
                    <div className="display" key={i}>
                    <div className="title"><label>Title: </label>{current.title}</div> <br/>
                    <div className="time"><label>Time: </label>{newTime}</div> <br/>
                    <div className="details"><label>Details: </label>{current.details}</div>
                    <button onClick={()=>{
                    navigate(`/calendar/edit/${current._id}`)
                }}>Edit Event</button>
                <button onClick={()=>{
                    // navigate(`/calendar/delete/${current._id}`)
                    del(current._id)
                }}>Delete Event</button>
                    </div>
                    )
                }):''}
            </div>
        </div>
    )
}

export default Index