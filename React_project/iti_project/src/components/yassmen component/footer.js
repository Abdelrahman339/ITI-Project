import React from 'react';
import FeedBack from './feedback';
import WorkingHours from './working hours';
import Location from './location';
import CoptyRight from './copyRight';
import Leftphoto from './leftphoto';
import Rightphoto from './rightphoto';
// FOOTER COMPONENT
function Footer() {

    return (
        <div className='Footer'>
            <div className='Left-Photo'>
            <Leftphoto />
            </div>
            <Location />
            <WorkingHours />
            <FeedBack />
            <div className='Right-photo'>
            <Rightphoto />
            </div>
            <CoptyRight />
        </div>
    );
}
export default Footer;