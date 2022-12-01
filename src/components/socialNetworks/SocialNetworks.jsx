import React from 'react';
import './SocialNetworks.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

const SocialNetworks = () => {
    return (
        <div className="networks-wrapper">
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/joaomariano52/" target="_blank" rel="noreferrer">
                    <FaLinkedin size={30} className="social-icon secondary" />
                </a>
            </div>
            <div className="social-icons">
                <a
                    href="https://mail.google.com/mail/u/0/?fs=1&to=marianojoao52@gmail.com&su=Ol%C3%A1,+Jo%C3%A3o!&body=Vamos+conversar!&tf=cm"
                    target="_blank"
                    rel="noreferrer"
                >
                    <SiGmail size={30} className="social-icon secondary" />
                </a>
            </div>
            <div className="social-icons">
                <a href="https://github.com/JoonMarion" target="_blank" rel="noreferrer">
                    <FaGithub size={30} className="social-icon secondary" />
                </a>
            </div>
            <div className="social-icons">
                <a href="https://www.instagram.com/joonmarion/" target="_blank" rel="noreferrer">
                    <BsInstagram size={30} className="social-icon secondary" />
                </a>
            </div>
        </div>
    );
};

export default SocialNetworks;
