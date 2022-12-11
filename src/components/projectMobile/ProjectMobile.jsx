/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import './ProjectMobile.css';
import { ImArrowRight2 } from 'react-icons/im';

const Project = ({ img, title, description, link }) => {
    return (
        <div className="card-project">
            <div className="image">
                <img src={img} alt={title} />
            </div>

            <div className="info">
                <h2>{title}</h2>
                <br />
                <p className="secondary">{description}</p>
                <a href={link} className="centered" target="_blank" rel="noreferrer">
                    <button className="button-43" role="button">
                        <p className="centered">
                            Acessar Projeto <ImArrowRight2 className="margin-icon" size={18} />
                        </p>
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Project;
