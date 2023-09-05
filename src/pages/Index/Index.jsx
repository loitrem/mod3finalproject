import React, {useState} from 'react'
import Calendar from 'react-calendar'; 

function Index() {
    const [date, setDate] = useState(new Date())
    const [time,setTime]=useState('')
 
    const sub = (e) => {
        setTime(e.target.value)
        e.preventDefault()
  
    }
    console.log('TIME',time);
    return (
        <div>
            <h1 className="header">React Calendar</h1>
            <div className="calendar-container">
                <Calendar onChange={setDate} value={date}/>
            </div>
            <div className="text-center">

                <form >
                    <div className="date"><label htmlFor="">date</label>{date.toDateString()}</div>
                    <input type="text" name='title'/>
                    <input type="time" name='time'  onChange={sub}/>
                    <button>submit</button>
                </form>

            </div>
        </div>
    )
}

export default Index