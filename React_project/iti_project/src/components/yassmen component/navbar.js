import React from "react";

function Navbar() {
    return (
        <div>

            <div class="navbar" id="Home">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/Menu">Menu</a></li>
                    <li><a href="/Pages">Pages</a></li>
                    <li><a href="/About">About US</a></li>
                    <li><a href="/Special">Special-Recipes</a></li>
                    <li><a href="/Delivery">Delivery</a></li>
                    <li><a href="/Form">Form</a></li>
                    <li><a class="Table-Booking" href="/Table-Booking">Table-Booking</a></li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar;