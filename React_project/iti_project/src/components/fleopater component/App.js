import React from 'react';
function Mobile() {
    return (
        <div className="section9 App" >
            <div className="contineer">
                <div className="mobile_phone">
                    <img src={require('../images/mobileapp/mobile photo.png')} alt="" />
                </div>
                <div className="app">
                    <p className='happy'>happy to announce</p>
                    <p className='mobile'>
                        mobile app
                    </p>
                    <p className='os'>is available on every OS platform</p>
                    <div className='Apps_imgs'>
                        <img src={require('../images/mobileapp/google play.png')} alt="" />
                        <img src={require('../images/mobileapp/app store.png')} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mobile;