import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

export function Navbar() {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile"
                     className={(navData) => (navData.isActive ? s.activeLink : 'none')}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/dialogs"
                     className={(navData) => (navData.isActive ? s.activeLink : 'none')}>Messages</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/news"
                     className={(navData) => (navData.isActive ? s.activeLink : 'none')}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/settings"
                     className={(navData) => (navData.isActive ? s.activeLink : 'none')}>Settings</NavLink>
        </div>
    </nav>
}