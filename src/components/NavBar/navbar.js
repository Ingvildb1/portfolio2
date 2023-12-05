import React from "react";
import './navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src="" alt="" />
            <div className="desktopMenu">
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">About</Link>
                <Link className="desktopMenuListItem">Portfolio</Link>
            </div>
            
        </nav>
    )
}

export default Navbar;