import React from 'react';
function Photos1() {
    return (
        <div className="Photos1">
            <img className='forward-img' src={require('./images/about-us/about us 1.png')} alt='' />
            <img className='backward-img' src={require('./images/about-us/about us 2.png')} alt=''/>
        </div>
    );
}
export default Photos1;