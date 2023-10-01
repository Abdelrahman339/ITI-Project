import React from "react";
import { Nav, NavLink } from 'react-router-dom'
function Nav_bar_menu() {
    function menuClick() {
        
    }
    return (
        <>
            <div className="menu_icons">
                <NavLink to="#Facebook" ><button onClick={menuClick}><i className="fa-solid fa-bars"></i></button></NavLink>
            </div>

        </>
    )
}

export default Nav_bar_menu;