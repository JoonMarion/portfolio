import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <p className="footer-text">
                © 2022{' '}
                <a href="/" className="link-hover">
                    João Mariano
                </a>
                . All rights reserved.
            </p>
        </div>
    );
};

export default Footer;
