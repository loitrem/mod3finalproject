import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import * as todoService from '../../utilities/todo-service';
import { getToken } from '../../utilities/users-service';


function ToDoAdd() {

    const navigate = useNavigate();

    const [todo, setToDo]=useState('')

    const handleChange = (e) => {
        setToDo({
            ...todo,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = async(e) => {
        console.log('todo',todo);
        const currentDate = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) ; 
        console.log(currentDate);
        // Prevent form from being submitted to the server
        e.preventDefault();

        try{ 
            const token = getToken();
            const data = {...todo,
            date: currentDate,
            name: token ? JSON.parse(atob(token.split('.')[1])).user : null
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
                        value={todo.title || ''}
                        onChange={handleChange}
                        required
                    />
                    <label className='todoLabel'>Details</label>
                    <input
                        className='todoInput'
                        type='text'
                        name='details'
                        value={todo.details || ''}
                        onChange={handleChange}
                    />
                    <button className='todoSubmit' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default ToDoAdd
