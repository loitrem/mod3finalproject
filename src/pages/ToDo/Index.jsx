import React, {useState, useEffect, useContext}from 'react'
import {getToDoList, deleteItem} from '../../utilities/todo-service'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import ToDoEdit from './ToDoEdit'
import ToDoAdd from './ToDoAdd'
import * as todoService from '../../utilities/todo-service';

function Index() {

    const[todo,setToDo]=useState([])
    const navigate = useNavigate();
    let data = null
    const location = useLocation();


    useEffect(()=>{
        let todoList = [] 
        data = getToDoList()
        data.then(results =>{
            results.map((current)=>{
                todoList.push(current)
                setToDo(todoList.slice(0,todoList.length).reverse())
                console.log('do i ever go');
            })
        })
        
    },[])

    const handleDel = async(e)=>{

        await todoService.deleteItem({id: e.target.id.value})
        console.log(e.target.id.value);
    }

    return (
        <div className='todoListWrapper'>
            <h1>To Do List</h1>
            <div className="todoAdd">
                <ToDoAdd/>
            </div>
            
            <br/>
            <div className="todoList">
                
                {todo?todo.map((current, i)=>{
                    // console.log('CURRENT DATE TEST', new Date(Date.parse(current.date)).toDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}));
                    return (
                        <div key={i} className="todoListCell">
                            <div className="todoListTitle">
                                <div className="title">{current.title}</div> 
                                <div className="titleDate">{new Date(Date.parse(current.date)).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}</div>
                            </div>
                                <div className='hideWrapper'>

                                    <div className="todoListDetails">
                                        {current.details}
                                </div>
                                <div className="todoListButton">
                                    <div className="todoLeftButton">
                                    <form className='todoBtnForm'>
                                        <button className='todoListBtn' onClick={()=>{
                                            navigate(`/todo/edit/${current._id}`)
                                        }}>Edit</button>
                                        </form>
                                    </div>
                                    <div className="todoRightButton">
                                        <form className='todoBtnForm' onSubmit={handleDel}>
                                            <input name='id' type="hidden" value={current._id}/>
                                            <button className='todoListBtn'>Delete</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    )
                }):''}
                    
            </div>
        </div>
    )
}

export default Index