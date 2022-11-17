import React from 'react';
import './Project.css';

const Project = ({ img, title, description, link }) => {
    return (
        <a href={link} className="project-card" target="_blank" rel="noreferrer">
            <img className="project-card-image" src={img} alt={title} />
            <div className="project-card-content">
                <h3 className="primary link-hover">{title}</h3>
                <p className="card-text secondary">{description}</p>
            </div>
        </a>
    );
};

export default Project;
