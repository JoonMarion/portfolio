import React from 'react';
import './Footer.css';
import { FaWhatsapp } from 'react-icons/fa';
import SocialNetworks from '../socialNetworks/SocialNetworks';

const Contacts = () => {
    return (
        <>
            <div className="contacts-container title" id="contacts">
                <div className="footer-background">
                    <div className="divisor"></div>
                    <div className="background"></div>

                    <div className="contacts-content title">
                        <div className="footer-content">
                            {' '}
                            <div className="contacts-info">
                                <p>Email: marianojoao52@gmail.com</p>
                                <br />
                                <p>
                                    Número: (91) 98843-2057 <FaWhatsapp size={13} />
                                </p>
                                <br />
                                <p>Local: Castanhal, Pará</p>
                                <br />
                                <p>Endereço: Rua Francisco Magalhães, número 1577</p>
                            </div>
                            <div className="contacts-social">
                                <SocialNetworks />
                            </div>
                        </div>

                        <div className="copyright">
                            <p className="copyright-text tertiary">
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
