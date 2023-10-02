import React from 'react';
function feedback() {
    return (
        <div class="feedback" id='feedback'>
            <h2>Feedback</h2>
            <form action="" />
            <input type="text" placeholder="Name" /><br />
            <input type="text" placeholder="Email" /><br />
            <input type="text" placeholder="Phone" /><br />
            <input type="text" placeholder="Message" /><br />
            <button onclick="showAlert()">submit</button>
        </div>
    )
}
export default feedback;