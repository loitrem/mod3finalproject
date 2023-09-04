import React, {useState, useEffect, useContext}from 'react'
import {getToDoList, deleteItem} from '../../utilities/todo-service'
import { useNavigate, useParams  } from 'react-router-dom'


function Index() {

    const[todo,setToDo]=useState([])

    let data = null

    useEffect(()=>{
        let todoList = [] 
        data = getToDoList()
        console.log('CHECK ME', data);
        data.then(results =>{
            results.map((current)=>{
                // if (first){
                todoList.push(current)
                setToDo(todoList.slice(0,todoList.length).reverse())
                console.log('do i ever go');
            })
        })
        
    },[])

        const navigate = useNavigate();

    return (
        <div className='todoListWrapper'>
            <h1>To Do List</h1>
            <div className="todoList">
                {todo?todo.map((current, i)=>{
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
                                        <button className='todoListBtn' onClick={()=>{
                                            
                                            // handleSubmit(current._id)
                                            navigate(`/todo/edit/${current._id}`)
                                        }}>Edit</button>
                                    </div>
                                    <div className="todoRightButton">
                                        <button className='todoListBtn' onClick={()=>{
                                            navigate(`/todo`)
                                            deleteItem(current._id)
                                        }}>Delete</button>
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