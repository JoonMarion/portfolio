/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import './MainProjects.css';
import Carousel from './../carousel/Carousel';

const MainProjects = () => {
    var text = '<Projetos />';
    return (
        <div className="projects-container" id="projects">
            <div className="projects-title">
                <h2 className="content-title">{text}</h2>
                <p className="tertiary">Alguns projetos web para acessar</p>
            </div>
            <div className="projects-content">
                <Carousel />
            </div>
        </div>
    );
};

export default MainProjects;
