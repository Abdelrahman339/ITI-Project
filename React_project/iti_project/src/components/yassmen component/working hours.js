import React from 'react';

function WorkingHours() {

    return (
        <>
            <h3>Working Hours </h3>
            <p className='Days'>
                Monday To Friday
            </p>
            <p>
                8:00am to 10:00pm(Breakfast)
                11:00am to 10:00pm(Lunch/Diner)
            </p>
            <p  className='Days'>
                Saturday & Sunday
            </p>
            <p>
                10:00am to 11:00pm(Brunch)
                11:00am to 12:00pm(Lunch/Dinner)
            </p>
        </>
    );
}

export default WorkingHours;