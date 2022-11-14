import React from 'react';
import './SocialNetworks.css';
import { FaLinkedin, FaGithub, FaMailBulk } from 'react-icons/fa';

const SocialNetworks = () => {
    return (
        <div className="networks-wrapper">
            <li>
                <a href="/">
                    <FaLinkedin />
                </a>
            </li>
            <li>
                <a href="/">
                    <FaGithub />
                </a>
            </li>
            <li>
                <a href="/">
                    <FaMailBulk />
                </a>
            </li>
        </div>
    );
};

export default SocialNetworks;
