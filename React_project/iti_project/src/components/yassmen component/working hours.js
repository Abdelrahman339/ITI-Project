import React from 'react';


// Working Hours
function WorkingHours() {

    return (
        <div className='Wh'>
            <h3>Working Hours </h3>
            <p className='Days'>
                Monday To Friday
            </p>
            <p>
                8:00am to 10:00pm(Breakfast)
                <br/>
                11:00am to 10:00pm(Lunch/Diner)
            </p>
            <p className='Days'>
                Saturday & Sunday
            </p>
            <p>
                10:00am to 11:00pm(Brunch)
                <br/>
                11:00am to 12:00pm(Lunch/Dinner)
            </p>
        </div>
    );
}

export default WorkingHours;