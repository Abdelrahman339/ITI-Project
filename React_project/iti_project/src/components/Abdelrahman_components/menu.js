import React from 'react';
import Photos2 from './Photos2';

function Menu() {
    return (
        <div className='Menu' id='Menu'>
            <div className='Menu-heading'>
                <span>Amazing</span>
                <p>delicious</p>
            </div>
            <div className="menu-contanier">
                <div className="image">
                    <img src={require("../images/amazing-delicious/amazing delicious 1.png")} alt="Drinks" />
                </div>
                <div className="menu-card">
                    <div className='menu-para'>
                        <h1>Drinks</h1>
                        <p> <i class="fa-solid fa-wine-glass"></i> Menu item 1........................$10.99</p>
                        <p> <i class="fa-solid fa-wine-glass"></i> Menu item 2........................$12.99</p>
                        <p> <i class="fa-solid fa-wine-glass"></i> Menu item 3........................$9.99</p>
                        <p> <i class="fa-solid fa-wine-glass"></i> Menu item 4........................$11.99</p>
                        <p> <i class="fa-solid fa-wine-glass"></i> Menu item 5........................$13.99</p>
                    </div>
                </div>
            </div>
            <br />
            <div className="menu-contanier">
                <div className="menu-card-middle">
                    <div className='menu-para'>
                        <h1>Main Course</h1>
                        <p> <i class="fa-solid fa-pizza-slice"></i> Menu item 1.....................$10.99</p>
                        <p> <i class="fa-solid fa-pizza-slice"></i> Menu item 2.....................$12.99</p>
                        <p> <i class="fa-solid fa-pizza-slice"></i> Menu item 3.....................$9.99</p>
                        <p> <i class="fa-solid fa-pizza-slice"></i> Menu item 4.....................$11.99</p>
                        <p> <i class="fa-solid fa-pizza-slice"></i> Menu item 5.....................$13.99</p>
                    </div>
                </div>
                <div className="image2">
                    <img src={require("../images/amazing-delicious/amazing delicious 2.png")} alt="Main Course" />
                </div>
            </div>
            <br />
            <div className="menu-contanier">
                <div className="image3">
                    <img src={require("../images/amazing-delicious/amazing delicious 3.png")} alt="Desserts" />
                </div>
                <div className="menu-card">
                    <div className='menu-para'>
                        <h1>Desserts</h1>
                        <p> <i class="fa-solid fa-cookie-bite"></i> Menu item 1........................$10.99</p>
                        <p> <i class="fa-solid fa-cookie-bite"></i> Menu item 2........................$12.99</p>
                        <p> <i class="fa-solid fa-cookie-bite"></i> Menu item 3........................$9.99</p>
                        <p> <i class="fa-solid fa-cookie-bite"></i> Menu item 4........................$11.99</p>
                        <p> <i class="fa-solid fa-cookie-bite"></i> Menu item 5........................$13.99</p>
                    </div>
                </div>
            </div>
            <Photos2 />
        </div>
    );
};

export default Menu;