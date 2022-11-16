import React from 'react';
import './Button.css';

const Button = ({ title }) => {
    return (
        // eslint-disable-next-line jsx-a11y/no-redundant-roles
        <button className="button-46 " role="button">
            <a
                href="https://drive.google.com/file/d/1cLd9U3HhYOC6yOyf3ZE7iq73Nyj2M29q/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
            >
                <p className="hero glitch layers btn-title" data-text="Download CSV">
                    <span>{title}</span>
                </p>
            </a>
        </button>
    );
};

export default Button;
