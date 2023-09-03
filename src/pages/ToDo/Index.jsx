import React, {useState, useEffect}from 'react'
import {getToDoList} from '../../utilities/todo-service'

function Index() {

    const[todo,setTodo]=useState([])
    const[cell, setCell]=useState('show')
    const [hover, setHover] = useState(false);

    let styleChange;

    const handleMouseEnter = () => {
        setHover(true);
        styleChange='red'
        console.log('EARLIER STYLE', styleChange);
    };
  
    const handleMouseLeave = () => {
      setHover(false);
    };

    let first = false
    let data = null
   
    useEffect(()=>{
        let todoList = [] 
        setTodo()
        data = getToDoList()
        data.then(results =>{
            results.map((current)=>{
                // if (first){
                    todoList.push(current)
                console.log('+++++++++++++++',todoList.slice(0,todoList.length).reverse());
                setTodo(todoList.slice(0,todoList.length).reverse())
                console.log('do i ever go');

            })
        })
        
    },[hover])


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
                                    {console.log('STYLE HERE',styleChange)}
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