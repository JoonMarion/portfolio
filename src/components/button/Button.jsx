import React from 'react';
import './Button.css';

const Button = ({ title }) => {
    return (
        // eslint-disable-next-line jsx-a11y/no-redundant-roles
        <button className="button-82-pushable" role="button">
            <span className="button-82-shadow"></span>
            <span className="button-82-edge"></span>
            <span className="button-82-front text">{title}</span>
        </button>
    );
};

export default Button;
