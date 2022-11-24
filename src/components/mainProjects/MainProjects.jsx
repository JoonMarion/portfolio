import React from 'react';
import './MainProjects.css';
import ScrollContainer from 'react-indiana-drag-scroll';
import DevQuiz from '../../assets/dev-quiz.jpeg';
import FinanceManage from '../../assets/finance-manage.jpeg';
import Pokedex from '../../assets/pokedex.png';
import Calculator from '../../assets/calculator.jpeg';
import Project from '../project/Project';
import InstagramLogin from '../../assets/instagram-login-clone.png';

const MainProjects = () => {
    return (
        <>
            <div className="container">
                <div className="projects-title">
                    <h2>Alguns projetos</h2>
                    <h2>
                        Visite meu{' '}
                        <a href="https://github.com/JoonMarion" target="_blank" rel="noreferrer" className="link-hover">
                            GitHub
                        </a>{' '}
                        para ver mais...
                    </h2>
                </div>
                <ScrollContainer className="scroll-container">
                    <Project
                        title="Dev Quiz"
                        img={DevQuiz}
                        description="A quiz for developers to test their knowledge"
                        link="https://dev-js-quiz.netlify.app/"
                    />
                    <Project
                        title="Finance Manage"
                        img={FinanceManage}
                        description="A web system to manage your earnings and expenses"
                        link="https://financemanage.netlify.app/"
                    />
                    <Project
                        title="Pokedex"
                        img={Pokedex}
                        description="Pokedex with Vanilla JavaScript"
                        link="https://joonmarion.github.io/pokedex/"
                    />
                    <Project
                        title="Instagram Login Clone"
                        img={InstagramLogin}
                        description="Instagram login screen clone"
                        link="https://joonmarion.github.io/login-instagram/"
                    />
                    <Project
                        title="Calculator"
                        img={Calculator}
                        description="Calculator with React"
                        link="https://reactcalculatorjs.netlify.app/"
                    />
                </ScrollContainer>
            </div>
        </>
    );
};

export default MainProjects;
