import React from 'react';
import './Skill.css';

const Skill = ({ img, title, description }) => {
    return (
        <div className="skill-card">
            <div>
                <img className="skill-card-image" src={img} alt={title} />
            </div>
            <div className="skill-card-content">
                <h3 className="primary skill-title">{title}</h3>
                <p className="skill-desc secondary">{description}</p>
            </div>
        </div>
    );
};

export default Skill;
