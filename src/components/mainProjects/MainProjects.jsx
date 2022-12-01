/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import './MainProjects.css';
import ScrollContainer from 'react-indiana-drag-scroll';
import DevQuiz from '../../assets/dev-quiz.jpeg';
import FinanceManage from '../../assets/finance-manage.jpeg';
import Pokedex from '../../assets/pokedex.png';
import Calculator from '../../assets/calculator.jpeg';
import Project from '../project/Project';
import InstagramLogin from '../../assets/instagram-login-clone.png';
import { HiOutlineChevronDoubleRight } from 'react-icons/hi';
import Button from './../button/Button';

const MainProjects = () => {
    var text = '<Projetos />';
    return (
<<<<<<< HEAD
        <>
            <div className="projects-container" id="projects">
                <div className="projects-title">
                    <h2 className="content-title">{text}</h2>
                </div>
                <div className="drag-text">
                    <p>Arraste para ver mais </p>
                    <HiOutlineChevronDoubleRight size={20} />
                </div>
                <ScrollContainer className="scroll-container">
                    <Project
                        title="Controle de Finanças"
                        img={FinanceManage}
                        description="Sistema web para controle de finanças feito em React JS. Os dados ficam salvos no localstorage do seu navegador."
                        link="https://financemanage.netlify.app/"
                    />
                    <Project
                        title="Pokédex"
                        img={Pokedex}
                        description="Pokédex feito com JavaScript puro. Dados consumidos da API PokeAPI."
                        link="https://joonmarion.github.io/pokedex/"
                    />
                    <Project
                        title="Instagram Login Clone"
                        img={InstagramLogin}
                        description="Clone da tela de login do Instagram."
                        link="https://joonmarion.github.io/login-instagram/"
                    />
                    <Project
                        title="Calculadora"
                        img={Calculator}
                        description="Calculadora feita em React JS."
                        link="https://reactcalculatorjs.netlify.app/"
                    />
                    <Project
                        title="Quiz de Programação"
                        img={DevQuiz}
                        description="Um quiz para desenvolvedores feito em React JS."
                        link="https://dev-js-quiz.netlify.app/"
                    />
                </ScrollContainer>
                <div className="centered visit-github">
                    <p>Visite meu GitHub para ver todos os meus projetos...</p>
                    <Button title="@JoonMarion" />
                </div>
=======
        <div className="projects-container" id="projects">
            <div className="projects-title title">
                <h2>Projetos</h2>
                <p className="tertiary">
                    Visite meu{' '}
                    <a href="https://github.com/JoonMarion" target="_blank" rel="noreferrer" className="link-hover">
                        GitHub
                    </a>{' '}
                    para ver mais...
                </p>
>>>>>>> 60f52e0b994b4e6cbc4701e396ac5eca4b6a752a
            </div>
            <ScrollContainer className="scroll-container">
                <Project
                    title="Controle de Finanças"
                    img={FinanceManage}
                    description="Sistema web para controle de finanças feito em React JS. Os dados ficam salvos no localstorage do seu navegador."
                    link="https://financemanage.netlify.app/"
                />
                <Project
                    title="Pokédex"
                    img={Pokedex}
                    description="Pokédex feito com JavaScript puro. Dados consumidos da API PokeAPI."
                    link="https://joonmarion.github.io/pokedex/"
                />
                <Project
                    title="Instagram Login Clone"
                    img={InstagramLogin}
                    description="Clone da tela de login do Instagram."
                    link="https://joonmarion.github.io/login-instagram/"
                />
                <Project
                    title="Calculadora"
                    img={Calculator}
                    description="Calculadora feita em React JS."
                    link="https://reactcalculatorjs.netlify.app/"
                />
                <Project
                    title="Quiz de Programação"
                    img={DevQuiz}
                    description="Um quiz para desenvolvedores feito em React JS."
                    link="https://dev-js-quiz.netlify.app/"
                />
            </ScrollContainer>
        </div>
    );
};

export default MainProjects;
