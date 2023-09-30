import React from "react";
import {Nav, NavLink} from 'react-router-dom'
function Navbar() {
    return (
        <div>

            <div class="navbar" id="Home">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/Menu">Menu</NavLink></li>
                    <li><NavLink to="/Pages">Pages</NavLink></li>
                    <li><NavLink to="/About">About US</NavLink></li>
                    <li><NavLink to="/Special">Special-Recipes</NavLink></li>
                    <li><NavLink to="/Delivery">Delivery</NavLink></li>
                    <li><NavLink to="/Form">Form</NavLink></li>
                    <li><NavLink class="Table-Booking" to="/Table-Booking">Table-Booking</NavLink></li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar;