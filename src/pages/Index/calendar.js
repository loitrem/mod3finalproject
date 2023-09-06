
function calendar() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();

    let day=[]
    let currdate=''

    
    // Array of month names
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    
    // Function to generate the calendar
    const manipulate = () => {
    
        // Get the first day of the month
        let dayone = new Date(year, month, 1).getDay();
    
        // Get the last date of the month
        let lastdate = new Date(year, month + 1, 0).getDate();
    
        // Get the day of the last date of the month
        let dayend = new Date(year, month, lastdate).getDay();
    
        // Get the last date of the previous month
        let monthlastdate = new Date(year, month, 0).getDate();
    
        // Variable to store the generated calendar HTML
        let lit = "";
    
        // Loop to add the last dates of the previous month
        for (let i = dayone; i > 0; i--) {
            day.push(monthlastdate - i + 1)
        }
    
        // Loop to add the dates of the current month
        for (let i = 1; i <= lastdate; i++) {
    
            // Check if the current date is today
            let isToday = i === date.getDate()
                && month === new Date().getMonth()
                && year === new Date().getFullYear()
                ? "active"
                : "";
                day.push(isToday)
        }
    
        // Loop to add the first dates of the next month
        for (let i = dayend; i < 6; i++) {
            day.push(i - dayend + 1)
        }
    
        // Update the text of the current date element
        // with the formatted current month and year
        currdate=`${months[month]} ${year}`;

    }
    
    manipulate();
    
  
    return (
        <div className="calendarWrapper">
            <div className="calendar-container">
                <header className="calendar-header">
                    <p className="calendar-current-date">{currdate}</p>
                    <div className="calendar-navigation">
                        <span id="calendar-prev"
                            className="material-symbols-rounded">
                            chevron_left
                            onClick={() => {
    
                                // Check if the icon is "calendar-prev"
                                // or "calendar-next"
                                month -= 1

                                // Check if the month is out of range
                                if (month < 0 || month > 11) {

                                    // Set the date to the first day of the
                                    // month with the new year
                                    date = new Date(year, month, new Date().getDate());

                                    // Set the year to the new year
                                    year = date.getFullYear();

                                    // Set the month to the new month
                                    month = date.getMonth();
                                }

                                else {

                                    // Set the date to the current date
                                    date = new Date();
                                }

                                // Call the manipulate function to
                                // update the calendar display
                                manipulate();
                            }}
                        </span>
                        <span id="calendar-next"
                            className="material-symbols-rounded">
                            chevron_right
                            onClick={() => {
    
                                // Check if the icon is "calendar-prev"
                                // or "calendar-next"
                                month += 1

                                // Check if the month is out of range
                                if (month < 0 || month > 11) {

                                    // Set the date to the first day of the
                                    // month with the new year
                                    date = new Date(year, month, new Date().getDate());

                                    // Set the year to the new year
                                    year = date.getFullYear();

                                    // Set the month to the new month
                                    month = date.getMonth();
                                }

                                else {

                                    // Set the date to the current date
                                    date = new Date();
                                }

                                // Call the manipulate function to
                                // update the calendar display
                                manipulate();
                            }}
                        </span>
                    </div>
                </header>
    
                <div className="calendar-body">
                    <ul className="calendar-weekdays">
                        <li>Sun</li>
                        <li>Mon</li>
                        <li>Tue</li>
                        <li>Wed</li>
                        <li>Thu</li>
                        <li>Fri</li>
                        <li>Sat</li>
                    </ul>
                    <ul className="calendar-dates">{day.map(async(current,i)=>{
                        <li key={i}>{current}</li>
                    })}</ul>
                </div>
            </div>
        </div>
    )

}

export default calendar