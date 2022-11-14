import React from 'react';
import './Button.css';

const Button = ({ title }) => {
    return (
        // eslint-disable-next-line jsx-a11y/no-redundant-roles
        <button class="button-33" role="button">
            {title}
        </button>
    );
};

export default Button;
