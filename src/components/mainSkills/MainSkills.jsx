import React from 'react';
import './MainSkills.css';
import FrontEnd from '../technologies/frontEnd/FrontEnd';
import BackEnd from '../technologies/backEnd/BackEnd';
import DevOps from '../technologies/devops/DevOps';
import Tools from '../technologies/tools/Tools';
import Languages from '../technologies/languages/Languages';

const MainSkills = () => {
    const Skills = 'Skills';
    return (
        <div className="skills-container" id="skills">
            <div className="centered session-title">
                <h2 className="content-title">{Skills}</h2>
                <p className="secondary">Minhas Habilidades</p>
            </div>
            <div className="skills-content">
                <FrontEnd />
                <BackEnd />
                <DevOps />
                <Languages />
                <Tools />
            </div>
        </div>
    );
};

export default MainSkills;
