import React from 'react'
import DisplayCalendar from './DisplayCalendar';
import ToDoIndex from '../ToDo/Index'
import { useEffect } from 'react';
import confused from '../../images/confused.png'

function Index() {


    useEffect(()=>{

    },[])


    return (
        <div className='mainWrapper'>
            <div className="main">
                <div className="mainTitleWrapper">
                    <div className="left">
                        <div className="leftInner">
                            <img src={confused} alt=""  className='confusedImg'/>
                        </div>
                    </div>
                    <div className="right">
                        <div className="mainTitle">What Was I doing Again?!</div>
                    <   div className="secondTitle">DIGITAL PANNER</div>
                    </div>
                    
                </div>
                
                <div className="plannerWrapper">
                    <div className="planner">
                        <DisplayCalendar/>
                    </div>
                </div>
                <div className="todoWrapper">
                    <div className="todo">
                        <ToDoIndex/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index