import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {remove} from '../../utilities/calendar-service'


function CalendarDelete() {

    const id = useParams()
    const navigate = useNavigate();

    const runDel = async() => {
        await remove(id)
        navigate(`/`)
    }
        
        // 
    return (
        <div>
            <form>
                <label htmlFor="">Are you sure?</label>
                <button onClick={(()=>{
                    runDel()
                    navigate(`/`)
                })}>Yes</button>
                <button onClick={(()=>{
                    navigate(`/`)
                })}>No</button>
            </form>
        </div>
    )
}


export default CalendarDelete