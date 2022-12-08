/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import './ProjectsDesktop.css';
import ProjectDesktop from '../projectDesktop/ProjectDesktop';
import FinanceManage from '../../assets/finance-manage.jpeg';
import Pokedex from '../../assets/pokedex.png';
import DevQuiz from '../../assets/dev-quiz.jpeg';
import Calculator from '../../assets/calculator.jpeg';
import InstagramLogin from '../../assets/instagram-login-clone.png';
import NetflixClone from '../../assets/netflix-clone.png';

const ProjectsDesktop = () => {
    return (
        <div className="projects-desktop-content">
            <ProjectDesktop
                title="Controle de Finanças"
                img={FinanceManage}
                description="Sistema web para controle de finanças feito em React JS. Os dados ficam salvos no localstorage do seu navegador. Utilizando conceitos dos React Hooks."
                link="https://financemanage.netlify.app/"
            />
            <ProjectDesktop
                title="Pokédex"
                img={Pokedex}
                description="Pokédex com paginação feita com JavaScript puro. Estudo de consumo de API, consumindo dados da PokeAPI."
                link="https://joonmarion.github.io/pokedex/"
            />
            <ProjectDesktop
                title="Quiz de Programação"
                img={DevQuiz}
                description="Um quiz para desenvolvedores feito em React JS."
                link="https://dev-js-quiz.netlify.app/"
            />
            <ProjectDesktop
                title="Calculadora"
                img={Calculator}
                description="Calculadora feita em React JS e StyledComponents."
                link="https://reactcalculatorjs.netlify.app/"
            />
            <ProjectDesktop
                title="Instagram Login Clone"
                img={InstagramLogin}
                description="Clone da tela de login do Instagram feita com HTML e CSS. Estudo de responsividade e Flexbox."
                link="https://joonmarion.github.io/login-instagram/"
            />
            <ProjectDesktop
                title="Clone Netflix"
                img={NetflixClone}
                description="Clone da tela da Netflix feita com HTML, CSS e JavaScript. Estudo de responsividade e Flexbox"
                link="https://joonmarion.github.io/netflix-clone/"
            />
        </div>
    );
};

export default ProjectsDesktop;
