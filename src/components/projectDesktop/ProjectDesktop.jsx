/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import './ProjectDesktop.css';
import { ImArrowRight2 } from 'react-icons/im';

const Project = ({ img, title, description, link }) => {
    return (
        <div className="card-desktop-project">
            <div className="image-desktop">
                <img src={img} alt={title} />
            </div>

            <div className="info-desktop">
                <h2 className="projects-desktop-title">{title}</h2>
                <br />
                <p className="secondary">{description}</p>
            </div>
            <div className="projects-desktop-button">
                <a href={link} className="centered projects2-button" target="_blank" rel="noreferrer">
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
