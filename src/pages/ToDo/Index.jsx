import React, {useState, useEffect}from 'react'
import {getToDoList} from '../../utilities/todo-service'
import { useNavigate } from 'react-router-dom'

function Index() {

    const[todo,setTodo]=useState([])

    let data = null

    useEffect(()=>{
        let todoList = [] 
        data = getToDoList()
        console.log('CHECK ME', data);
        data.then(results =>{
            results.map((current)=>{
                // if (first){
                todoList.push(current)
                setTodo(todoList.slice(0,todoList.length).reverse())
                console.log('do i ever go');
            })
        })
        
    },[])

        const navigate = useNavigate();
  
        const handleSubmit = async(e) => {
            console.log('todo',todo);
            const currentDate = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) ; 
            console.log(currentDate);
            // Prevent form from being submitted to the server
            e.preventDefault();
    
            try{ 
                const data = {...todo}
            } catch (err){
                console.log(err);
            }
            navigate('/todo')
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
                                        <button className='todoListBtn' value={current._id}>Edit</button>
                                    </div>
                                    <div className="todoRightButton">
                                        <button className='todoListBtn'>Delete</button>
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