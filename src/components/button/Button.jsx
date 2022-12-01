/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import './Button.css';
import { FaGithub } from 'react-icons/fa';
import { GoLogoGithub } from 'react-icons/go';

const Button = ({ title }) => {
    return (
        // eslint-disable-next-line jsx-a11y/no-redundant-roles
        <a href="https://github.com/JoonMarion" target="_blank" rel="noreferrer">
            <button className="button-46 " role="button">
                <p className="hero glitch layers btn-title secondary" data-text="Download CSV">
                    <div class="github-logo">
                        <FaGithub size={25} style={{ marginRight: 3 }} />
                        <GoLogoGithub size={40} />
                    </div>

                    <span>{title}</span>
                </p>
            </button>
        </a>
    );
};

export default Button;
