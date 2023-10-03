import React from 'react';

// FEEDBACK 
function FeedBack() {

    return (
        <div className='feedback'>
            <h3>FeedBack Form</h3>
            
            <form>

                <input type="text" name="Name" placeholder='Name' />
                <input type="email" name="Email" placeholder='Email' />
                <input type="phone" name="Phone" placeholder='Phone' />
                <textarea placeholder='Message' cols={1} rows={1} />
                <input type="submit" className='Button1' />
            </form>
        </div>
    );
}

export default FeedBack;