import React, {useState, useEffect, useContext}from 'react'
import {getToDoList, deleteItem} from '../../utilities/todo-service'
import { useNavigate, useParams  } from 'react-router-dom'
import ToDoDelete from './ToDoDelete'


function Index() {

    const[todo,setToDo]=useState([])
    const navigate = useNavigate();
    let data = null
    let refresh = false
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
        
    },[refresh])

    const handleDel = (id)=>{

        // console.log('ID TO DELETE', id);
        // deleteItem({'id':id})
        <ToDoDelete id={id} />
    }


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
                                            // console.log('id!!', {id: current._id});
                                            // deleteItem({id: current._id})
                                            // handleSubmit(current._id)
                                            navigate(`/todo/delete/${current._id}`)
                                            refresh = true
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