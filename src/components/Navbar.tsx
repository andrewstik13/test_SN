import React from "react";

export function Navbar() {
    return <nav className='app-nav'>
        <div className='item'>
            <a>Profile</a>
        </div>
        <div className='item'>
            <a>Messages</a>
        </div>
        <div className='item'>
            <a>News</a>
        </div>
        <div className='item'>
            <a>Settings</a>
        </div>
    </nav>
}