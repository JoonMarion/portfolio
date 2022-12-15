import React from 'react';
import './Footer.css';

const Contacts = () => {
    return (
        <>
            <div className="contacts-container" id="contacts">
                <div className="footer-background">
                    <div className="center-divisor centered">
                        <div className="divisor"></div>
                    </div>
                    <div className="contacts-content">
                        <div className="copyright">
                            <p className="copyright-text secondary">
                                © 2022{' '}
                                <a href="/" className="link-hover">
                                    João Mariano
                                </a>
                                . All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contacts;
