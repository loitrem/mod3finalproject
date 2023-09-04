import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams  } from 'react-router-dom'
import * as todoService from '../../utilities/todo-service';
import { getToken } from '../../utilities/users-service';

function ToDoEdit() {

    const navigate = useNavigate();
    const [todo, setToDo]=useState('')
    const [info, setInfo]=useState('')
    const [title, setTitle]=useState('')
    const [details, setDetails]=useState('')
    const id = useParams()

console.log('ID IS = ', id);
    useEffect(()=>{
        const record = todoService.getToDoById(id)
        .then(results =>{
            setInfo(results)
            console.log('RESULTS!!!',results);
                
            })
        console.log('RECORD HOPEFULLY', record);
        setToDo();
        
    },[])

    console.log('TODO iS? = ', todo);
    // const handleChange = (e) => {

    //     setTitle(e.target.title.value)
    //     setDetails(e.target.details.value)
        
    // }

    const handleSubmit = async(e) => {


        console.log('todo',todo);
        const currentDate = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) ; 
        console.log(currentDate);
        // Prevent form from being submitted to the server
        e.preventDefault();

        try{ 
            const token = getToken();
            console.log('TOTO ASGINDGDSSD',e.target.title.value,e.target.details.value);
            const data = {
            name: token ? JSON.parse(atob(token.split('.')[1])).user.name : null,
            title: e.target.title.value,
            details: e.target.details.value,    
            date: currentDate
            }
            console.log('KDJSHFKJSDHFKJSDFHK', data);
            await todoService.newEntry(data);

        } catch (err){
            console.log(err);
        }
        navigate('/todo')
    }

    return (
        <div>
            <div className='todoFormWrapper' onSubmit={handleSubmit}>
                <form className='todoForm' autoComplete='off'>
                    <label className='todoLabel'>Title</label>
                    <input
                    className='todoInput'
                        type='text'
                        name='title'
                        defaultValue={info.title}
                        // onChange={handleChange}
                        required
                    />
                    <label className='todoLabel'>Details</label>
                    <input
                        className='todoInput'
                        type='text'
                        name='details'
                        defaultValue={info.details}
                        // onChange={handleChange}
                    />
                    <button className='todoSubmit' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
}


export default ToDoEdit