import React from "react";
import './navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src="" alt="" />
            <div className="desktopMenu">
                <Link to="home" className="desktopMenuListItem" smooth={true} duration={500}>Home</Link>
                <Link to="intro" className="desktopMenuListItem" smooth={true} duration={500}>About</Link>
                <Link to="works" className="desktopMenuListItem" smooth={true} duration={500}>Projects</Link>
            </div>
        </nav>
    )
}

export default Navbar;
