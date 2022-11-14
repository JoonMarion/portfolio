import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <section className="navbar">
            <nav className="circle">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Downloads</a>
                    </li>
                    <li>
                        <a href="/">More</a>
                    </li>
                    <li>
                        <a href="/">Nice staff</a>
                    </li>
                </ul>
            </nav>
        </section>
    );
};

export default Navbar;
