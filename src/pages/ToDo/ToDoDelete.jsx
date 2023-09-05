import React, {useEffect} from 'react'
import { useNavigate, useParams  } from 'react-router-dom'
import * as todoService from '../../utilities/todo-service';
import ToDoIndex from './Index'

function ToDoDelete() {

    const id = useParams()
    console.log('testtesttest',id);
    const navigate = useNavigate();

    const runDel = async() => {
        await todoService.deleteItem(id)
        navigate(`/todo`)
    }
        
        // 
    return (
        <div>
            <form>
                <label htmlFor="">Are you sure?</label>
                <button onClick={(()=>{
                    runDel()
                    navigate(`/todo`)
                })}>Yes</button>
                <button onClick={(()=>{
                    navigate(`/todo`)
                })}>No</button>
            </form>
        </div>
    )
}

export default ToDoDelete