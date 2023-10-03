import React, { Component } from "react";
import { Nav, NavLink } from 'react-router-dom'


// NAVBAR MENU

class Nav_bar_menu extends React.Component {
    state = {
        clicked: false
    }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    };
    render() {
        return (
            <>
                <div className={this.state.clicked ? "navbar-active" : "navbar"} id="Home">
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/Menu">Menu</NavLink></li>
                        <li><NavLink to="/About">About US</NavLink></li>
                        <li><NavLink to="/Pages">Pages</NavLink></li>
                        <li><NavLink to="/Special">Special-Recipes</NavLink></li>
                        <li><NavLink to="/App">Apps</NavLink></li>
                        <li><NavLink to="/Table-Booking">Table-Booking</NavLink></li>
                    </ul>
                    <div className="menu_icons" onClick={this.handleClick}>
                        <NavLink to="#" > <i id="bar" className={this.state.clicked ? "fa-solid fa-times" : "fa-solid fa-bars"}></i></NavLink>
                    </div>
                </div>
            </>
        )
    }
}

export default Nav_bar_menu;