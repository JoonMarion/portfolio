/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import './MainProjects.css';
import ProjectsMobile from '../projectsMobile/ProjectsMobile';
import ProjectsDesktop from '../projectsDesktop/ProjectsDesktop';
import ProjectsDjango from '../projectsDesktop/ProjectsDjango';
import ProjectsMobileDjango from '../projectsMobile/ProjectsMobileDjango';

const MainProjects = () => {
    return (
        <>
            <div className="projects-container" id="Freelance">
                <div className="session-title">
                    <h2 className="content-title">Sistemas de Controle</h2>
                    <p className="secondary">Veja exemplos</p>
                </div>
                <div className="projects-desktop">
                    <ProjectsDjango />
                </div>
                <div className="projects-mobile">
                    <ProjectsMobileDjango />
                </div>
            </div>
            <div className="projects-container" id="Estudo">
                <div className="session-title">
                    <h2 className="content-title">Projetos de Estudo</h2>
                    <p className="secondary">Sites para Acessar</p>
                </div>
                <div className="projects-desktop">
                    <ProjectsDesktop />
                </div>
                <div className="projects-mobile">
                    <ProjectsMobile />
                </div>
            </div>
        </>
    );
};

export default MainProjects;
