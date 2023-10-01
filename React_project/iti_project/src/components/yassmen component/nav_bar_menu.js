import React, { Component } from "react";
import { Nav, NavLink } from 'react-router-dom'
import Navbar from "./navbar";
class Nav_bar_menu extends React.Component {
    state = {
        clicked: false
    }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <>
            <div className={this.state.clicked? "navbar-active" : "navbar"}><Navbar/></div>
                <div className="menu_icons" onClick={this.handleClick}>
                    <NavLink to="#" > <i id="bar" className={this.state.clicked ? "fa-solid fa-bars" : "fa-solid fa-times"}></i></NavLink>
                </div>
            </>
        )
    }
}

export default Nav_bar_menu;