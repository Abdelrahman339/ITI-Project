import React, { Component } from "react";
import { useState } from "react";
// import {NavLink } from 'react-router-dom'

// CopyRight
class DarkMode extends React.Component {
    state = {
        clicked: false
    }
    ChangeTheme = () => {
        this.setState({ clicked: !this.state.clicked })
    };

    render() {
        return (
            <div className="DarkMode" >
                <a href="#" onClick={this.ChangeTheme} >  <i className={this.state.clicked ? "fa-solid fa-toggle-off"
                : "fa-solid fa-toggle-on"} ></i>
                </a>

            </div>
        );
    }
}

export default DarkMode;