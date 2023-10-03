import React from 'react';
import Button from '../Abdelrahman_components/button'
function FeedBack() {

    return (
        <div>
            <h3>FeedBack Form</h3>
            <form>
                <input type="text" name="Name"placeholder='Name'/>
                <input type="email" name="Email"placeholder='Emial'/>
                <input type="phone" name="Phone"placeholder='Phone'/>
                <textarea placeholder='Message'/>
                
            </form>
            <Button/>
        </div>
    );
}

export default FeedBack;