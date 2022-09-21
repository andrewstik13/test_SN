import React from "react";
import s from "./Navbar.module.css"

export function Navbar() {
    return <nav className={s.nav}>
        <div className={s.item}>
            <a>Profile</a>
        </div>
        <div className={s.item}>
            <a>Messages</a>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <a>News</a>
        </div>
        <div className={s.item}>
            <a>Settings</a>
        </div>
    </nav>
}