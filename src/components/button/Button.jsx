/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import './Button.css';

const Button = ({ title }) => {
    return (
        // eslint-disable-next-line jsx-a11y/no-redundant-roles
        <a
            href="https://drive.google.com/file/d/1cLd9U3HhYOC6yOyf3ZE7iq73Nyj2M29q/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
        >
            <button className="button-46 " role="button">
                <p className="hero glitch layers btn-title secondary" data-text="Download CSV">
                    <span>{title}</span>
                </p>
            </button>
        </a>
    );
};

export default Button;
