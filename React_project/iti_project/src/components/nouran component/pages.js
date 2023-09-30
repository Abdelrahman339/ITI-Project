import React from 'react';
function pages() {
    return (
        <div className="parent">
            <div className="heading_pages">
                <h1>Delightful</h1>
                <h3>experience</h3>
            </div>
            <div className="img1">
                <img src={require("./images/delightful-experience/pic1 DE.png")} alt=""/>
                    <div className="card">
                        <p>BIBIMBAB DISH</p>
                        <p className="price">19$</p>
                        <button className="button">click here</button>
                    </div>
            </div>
            <div className="img2">
                <img src={require("./images/delightful-experience/pic2 DE.png")} alt=""/>
                    <div className="card">
                        <p>PALEO BEEF DISH</p>
                        <p className="price">32$</p>
                        <button className="button">click here</button>
                    </div>
            </div>
            <div className="img3">
                <img src={require("./images/delightful-experience/pic3 DE.png")} alt=""/>
                    <div className="card">
                        <p>ITALIAN SOURCE MUSHROOM</p>
                        <p className="price">30$</p>
                        <button className="button">click here</button>
                    </div>
            </div>
            <div className="img4">
                <img src={require("./images/delightful-experience/pic4 DE.png")} alt=""/>
                    <div className="card">
                        <p>SPRING ROLLS</p>
                        <p className="price">12$</p>
                        <button className="button">click here</button>
                    </div>
            </div>
            <div className="img5">
                <img src={require("./images/delightful-experience/pic5 DE.png")} alt=""/>
                    <div className="card">
                        <p>CORTIGIANO DISH</p>
                        <p className="price">29$</p>
                        <button className="button">click here</button>
                    </div>
            </div>
            <div className="img6">
                <img src={require("./images/delightful-experience/pic6 DE.png")} alt=""/>
                    <div className="card">
                        <p>GREEN CURRY DISH</p>
                        <p className="price">15$</p>
                        <button className="button">click here</button>
                    </div>
            </div>
            <div className="img7">
                <img src={require("./images/delightful-experience/pic7 DE.png")} alt=""/>
                    <div className="card">
                        <p>INDIAN DISH</p>
                        <p className="price">20$</p>
                        <button className="button">click here</button>
                    </div>
            </div>
            <div className="img8">
                <img src={require("./images/delightful-experience/pic8 DE.png")} alt=""/>
                    <div className="card">
                        <p>PICCATA</p>
                        <p className="price">16$</p>
                        <button className="button">click here</button>
                    </div>
            </div>
            <div className="side-img">
                <img src="" alt=""/>
            </div>
        </div>
    );
}
export default pages;