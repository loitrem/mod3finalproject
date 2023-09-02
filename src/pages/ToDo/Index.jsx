import React, {useState, useEffect}from 'react'
import {getToDoList} from '../../utilities/todo-service'

function Index() {

    const[todo,setTodo]=useState([])
    const[cell, setCell]=useState('show')
    let first = false
    let data = null
   
    useEffect(()=>{
        let test = [] 
        setTodo()
        data = getToDoList()
        data.then(results =>{
            results.map((current)=>{
                // if (first){
                    test.push(current)
                    console.log('+++++++++++++++',test.slice(0,test.length).reverse());
                    setTodo(test.slice(0,test.length).reverse())
                    console.log('do i ever go');
                // } else {
                //     setTodo(current)
                //     first = true
                //     console.log('did this bottom go?');
                // }
                console.log('TEST',test);
                let testMe = new Date;

            })
        })
        
    },[])
    const hiddenToggle = () => {

        if (cell==='show'){
            setCell('hide')

        } else if (cell==='hide'){
            setCell('show')

        }
    }

    return (
        <div className='todoListWrapper'>
            <h1>To Do List</h1>
            
            <div className="todoList">
                {todo?todo.map((current, i)=>{
                    return (
                        <div key={i} className="todoListCell" onClick={hiddenToggle}>
                            <div className="todoListTitle">
                                <div className="title">{current.title}</div> 
                                <div className="titleDate">{new Date(Date.parse(current.date)).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}</div>
                            </div>
                                <div className={cell}>
                                    <div className="todoListDetails">
                                        {current.details}
                                </div>
                                <div className="todoListButton">
                                    <div className="todoLeftButton">
                                        <button className='todoListBtn'>Edit</button>
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