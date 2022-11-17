import React from 'react';
import './SocialNetworks.css';
import { FaLinkedin, FaGithub, FaMailBulk } from 'react-icons/fa';

const SocialNetworks = () => {
    return (
        <div className="networks-wrapper">
            <li className="social-icons">
                <a href="/">
                    <FaLinkedin className="social-icon" />
                </a>
            </li>
            <li className="social-icons">
                <a href="/">
                    <FaGithub className="social-icon" />
                </a>
            </li>
            <li className="social-icons">
                <a href="/">
                    <FaMailBulk className="social-icon" />
                </a>
            </li>
        </div>
    );
};

export default SocialNetworks;
