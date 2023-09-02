import { useState } from 'react';
import * as todoService from '../../utilities/todo-service';


function ToDo() {

    const [todo, setToDo]=useState('')

    const handleChange = (e) => {
        setToDo({
            ...todo,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = async(e) => {

        // Prevent form from being submitted to the server
        e.preventDefault();

        try{
            await todoService.newEntry(...todo);

        } catch (err){
            console.log(err);
        }
    }

    return (
        <div>
            <div className='form-container' onSubmit={handleSubmit}>
                <form autoComplete='off'>
                    <label>Title</label>
                    <input
                        type='text'
                        name='title'
                        onChange={handleChange}
                        required
                    />
                    <label>Details</label>
                    <input
                        type='text'
                        name='details'
                        onChange={handleChange}
                        required
                    />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default ToDo
