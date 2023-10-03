import React from 'react';
import FeedBack from './feedback';
import WorkingHours from './working hours';
import Location from './location';
import CoptyRight from './copyRight';

function Footer() {

    return (
        <div className='Footer'>

            <Location />
            <WorkingHours />
            <FeedBack />
            <CoptyRight />
        </div>
    );
}

export default Footer;