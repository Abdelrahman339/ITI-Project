import React from "react";
import { Nav, NavLink } from 'react-router-dom'
import Nav_bar_menu from "./nav_bar_menu"
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
                    <li><NavLink class="Table-Booking" to="/Table-Booking" style={{ color: "orange", border: "1px solid white", borderRadius: "6px", padding: "10px" }}>Table-Booking</NavLink></li>
                </ul>
                <Nav_bar_menu/>
            </div>

        </div>
    )
}

export default Navbar;