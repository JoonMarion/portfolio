import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <section className="navbar">
            <nav className="circle">
                <ul>
                    <li>
                        <span>
                            <a href="/">Home</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <a href="/">About</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <a href="/">Downloads</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <a href="/">More</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <a href="/">Nice Staff</a>
                        </span>
                    </li>
                </ul>
            </nav>
        </section>
    );
};

export default Navbar;
