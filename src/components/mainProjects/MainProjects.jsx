/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import './MainProjects.css';
import ProjectsMobile from '../projectsMobile/ProjectsMobile';
import ProjectsDesktop from '../projectsDesktop/ProjectsDesktop';

const MainProjects = () => {
    var text = '<Projetos />';
    return (
        <div className="projects-container" id="projects">
            <div className="session-title">
                <h2 className="content-title">{text}</h2>
                <p className="tertiary">Alguns Projetos Web para Acessar</p>
            </div>
            <div className="projects-desktop">
                <ProjectsDesktop />
            </div>
            <div className="projects-mobile">
                <ProjectsMobile />
            </div>
        </div>
    );
};

export default MainProjects;
