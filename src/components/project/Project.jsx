import React from 'react';
import './Project.css';

const Project = ({ img, title, description, link }) => {
    return (
        <a href={link} className="project-card">
            <img src={img} alt={title} />
            <div className="project-card-content">
                <h3>{title}</h3>
                <p className="card-text">{description}</p>
            </div>
        </a>
    );
};

export default Project;
