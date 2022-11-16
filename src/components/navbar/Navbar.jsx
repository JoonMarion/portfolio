import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <section className="navigation">
            <nav className="navbar">
                <ul className="nav-list">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Projects</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>
            </nav>
        </section>
    );
};

export default Navbar;
