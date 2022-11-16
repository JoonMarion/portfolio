import React from 'react';
import './MainProjects.css';
import ScrollContainer from 'react-indiana-drag-scroll';
import DevQuiz from '../../assets/dev-quiz.jpeg';
import FinanceManage from '../../assets/finance-manage.jpeg';
import Pokedex from '../../assets/pokedex.jpeg';
import Calculator from '../../assets/calculator.jpeg';
import Project from '../project/Project';

const MainProjects = () => {
    return (
        <>
            <div className="container">
                <div className="projects-title">
                    <h2>Some projects</h2>
                    <h2>
                        Visite my{' '}
                        <a href="https://github.com/JoonMarion" target="_blank" rel="noreferrer">
                            GitHub
                        </a>{' '}
                        for more...
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
