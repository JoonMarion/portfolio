import React from 'react';
import './Project.css';

const Project = ({ img, title, description, link }) => {
    return (
        <div className="project-card">
            <a href={link} target="_blank" rel="noreferrer">
                <div className="project-card-image">
                    <img className="project-card-img" src={img} alt={title} />
                </div>
                <div className="project-card-content">
                    <h3 className="primary link-hover">{title}</h3>
                    <p className="card-text secondary">{description}</p>
                </div>
            </a>
        </div>
    );
};

export default Project;
