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
    const controleFinancas = ['React JS', 'StyledComponents', 'React Hooks', 'LocalStorage'];
    const pokedex = ['JavaScript', 'HTML', 'CSS', 'Consumo de API'];
    const quiz = ['React JS', 'Context API', 'React Hooks', 'CSS'];
    const calculator = ['React JS', 'StyledComponents', 'React Hooks'];
    const instagramLogin = ['HTML', 'CSS', 'Flexbox'];
    const netflix = ['HTML', 'CSS', 'Flexbox'];

    return (
        <div className="projects-desktop-content">
            <ProjectDesktop
                title="Controle de Finanças"
                img={FinanceManage}
                description="Sistema web para controle de finanças, controle de entradas, saídas e total com descrição de categoria."
                link="https://financemanage.netlify.app/"
                tecnologies={controleFinancas}
            />
            <ProjectDesktop
                title="Pokédex"
                img={Pokedex}
                description="Pokédex com paginação feita com JavaScript puro. Estudo de consumo e mapeamento de API, consumindo dados da PokeAPI."
                link="https://joonmarion.github.io/pokedex/"
                tecnologies={pokedex}
            />
            <ProjectDesktop
                title="Quiz de Programação"
                img={DevQuiz}
                description="Quiz para desenvolvedores."
                link="https://dev-js-quiz.netlify.app/"
                tecnologies={quiz}
            />
            <ProjectDesktop
                title="Calculadora"
                img={Calculator}
                description="Estudo de React Hooks."
                link="https://reactcalculatorjs.netlify.app/"
                tecnologies={calculator}
            />
            <ProjectDesktop
                title="Instagram Login Clone"
                img={InstagramLogin}
                description="Clone da tela de login do Instagram. Estudo de responsividade e Flexbox."
                link="https://joonmarion.github.io/login-instagram/"
                tecnologies={instagramLogin}
            />
            <ProjectDesktop
                title="Clone Netflix"
                img={NetflixClone}
                description="Clone da tela da Netflix. Estudo de responsividade e Flexbox"
                link="https://joonmarion.github.io/netflix-clone/"
                tecnologies={netflix}
            />
        </div>
    );
};

export default ProjectsDesktop;
