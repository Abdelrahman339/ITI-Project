import React from 'react';
import FeedBack from './feedback';
import WorkingHours from './working hours';
import Location from './location';
import CoptyRight from './copyRight';
import Leftphoto from './leftphoto';
import  Rightphoto from './rightphoto';

function Footer() {

    return (
        <div className='Footer'>
            <Leftphoto/>
            <Location />
            <WorkingHours />
            <FeedBack />
            <Rightphoto/>
            <CoptyRight />
            <Rightphoto />
        </div>
    );
}

export default Footer;