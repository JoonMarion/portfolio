import React from 'react';
import './SocialNetworks.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const SocialNetworks = () => {
    return (
        <div className="networks-wrapper">
            <div className="social-icons">
                <a href="/">
                    <FaLinkedin size={35} className="social-icon secondary" />
                </a>
            </div>
            <div className="social-icons">
                <a href="/">
                    <FaGithub size={35} className="social-icon secondary" />
                </a>
            </div>
            <div className="social-icons">
                <a href="/">
                    <SiGmail size={35} className="social-icon secondary" />
                </a>
            </div>
        </div>
    );
};

export default SocialNetworks;
