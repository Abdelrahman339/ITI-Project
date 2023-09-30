import React from "react";
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div>

            <div className="navbar" id="Home">
                <ul>
                    <li><NavLink to="/"exact activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/Menu"exact activeClassName="active">Menu</NavLink></li>
                    <li><NavLink to="/pages" exact activeClassName="active">Pages</NavLink></li>
                    <li><NavLink to="/about"exact activeClassName="active">About US</NavLink></li>
                    <li><NavLink to="/Special"exact activeClassName="active">Special-Recipes</NavLink></li>
                    <li><NavLink to="/Delivery"exact activeClassName="active">Delivery</NavLink></li>
                    <li><NavLink to="/Form"exact activeClassName="active">Form</NavLink></li>
                    <li><NavLink className="Table-Booking" to="/Table-Booking"exact activeClassName="active">Table-Booking</NavLink></li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar;