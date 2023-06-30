import React from 'react';
import './SocialNetworks.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiTwotoneMail } from 'react-icons/ai';

const SocialNetworks = ({ size, style }) => {
    return (
        <div className="networks-wrapper" style={style}>
            <a href="https://www.linkedin.com/in/joaomariano-dev/" target="_blank" rel="noreferrer">
                <div className="social-icons centered">
                    <FaLinkedin size={size} className="social-icon secondary" />
                </div>
            </a>
            <a href="https://github.com/JoonMarion" target="_blank" rel="noreferrer">
                <div className="social-icons centered">
                    <FaGithub size={size} className="social-icon secondary" />
                </div>
            </a>
            <a
                href="https://mail.google.com/mail/u/0/?fs=1&to=marianojoao52@gmail.com&su=Ol%C3%A1,+Jo%C3%A3o!&body=Vamos+conversar!&tf=cm"
                target="_blank"
                rel="noreferrer"
                className="social-tag-a"
            >
                <div className="social-icons centered">
                    <AiTwotoneMail size={size} className="social-icon secondary" />
                </div>
            </a>
        </div>
    );
};

export default SocialNetworks;
