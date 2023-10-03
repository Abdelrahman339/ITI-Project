import React from 'react';

const Menu = () => {
    return (
        <div id='menu'>
            <div className="container6">
                <div className="image">
                    <img src={require("../images/amazing-delicious/amazing delicious 1.png")} alt="Drinks" />
                </div>
                <div className="text">
                    <div className="menu-item">
                        <h1>Drinks</h1>
                        <p>Menu item 1........$10.99</p>
                        <p>Menu item 2........$12.99</p>
                        <p>Menu item 3........$9.99</p>
                        <p>Menu item 4........$11.99</p>
                        <p>Menu item 5........$13.99</p>
                    </div>
                </div>
            </div>
            <br />
            <div className="container7">
                <div className="text2">
                    <div className="menu-item">
                        <h1>Main Course</h1>
                        <p>Menu item 1........$10.99</p>
                        <p>Menu item 2........$12.99</p>
                        <p>Menu item 3........$9.99</p>
                        <p>Menu item 4........$11.99</p>
                        <p>Menu item 5........$13.99</p>
                    </div>
                </div>
                <div className="image2">
                    <img src={require("../images/amazing-delicious/amazing delicious 2.png")} alt="Main Course" />
                </div>
            </div>
            <br />
            <div className="container3">
                <div className="image3">
                    <img src={require("../images/amazing-delicious/amazing delicious 3.png")} alt="Desserts" />
                </div>
                <div className="text3">
                    <div className="menu-item">
                        <h1>Desserts</h1>
                        <p>Menu item 1........$10.99</p>
                        <p>Menu item 2........$12.99</p>
                        <p>Menu item 3........$9.99</p>
                        <p>Menu item 4........$11.99</p>
                        <p>Menu item 5........$13.99</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;