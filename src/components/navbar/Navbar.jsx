import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        
        <div className="navbar">
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Projects</a>
            </li>
            <li>
                <a href="#">Contacs</a>
            </li>
        </div>
    );
};

export default Navbar;
