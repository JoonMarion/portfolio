import React from 'react';
import './MainSkills.css';
import FrontEnd from './../frontEnd/FrontEnd';
import BackEnd from './../backEnd/BackEnd';
import DevOps from './../devops/DevOps';

const MainSkills = () => {
    const Skills = '<Skills />';
    return (
        <div className="skills-container" id="skills">
            <div className="centered skills-title">
                <h2 className="content-title">{Skills}</h2>
            </div>
            <div className="skills-content">
                <FrontEnd />
                <BackEnd />
                <DevOps />
            </div>
        </div>
    );
};

export default MainSkills;
