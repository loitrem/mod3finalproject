import React from 'react'
import DisplayCalendar from './DisplayCalendar';

function Index() {

    return (
        <div>
            <h1 className="header"></h1>
            <div className="calendar-container">
                <DisplayCalendar/>
            </div>
            <div className="text-center">
            </div>
        </div>
    )
}

export default Index