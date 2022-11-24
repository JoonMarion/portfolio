import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <section className="navigation">
            <nav className="navbar">
                <ul className="nav-list">
                    <li>
                        <a href="/">Sobre</a>
                    </li>
                    <li>
                        <a href="/">Projetos</a>
                    </li>
                    <li>
                        <a href="/">Contatos</a>
                    </li>
                </ul>
            </nav>
        </section>
    );
};

export default Navbar;
