import React from 'react';
import './MainProjects.css';
import DevQuiz from '../../assets/dev-quiz.jpeg';
import FinanceManage from '../../assets/finance-manage.jpeg';
import Pokedex from '../../assets/pokedex.jpeg';
import Calculator from '../../assets/calculator.jpeg';
import Project from '../project/Project';

const MainProjects = () => {
    return (
        <>
            <div className="container">
                <h2 className="projects-title">Projects</h2>
                <div className="row">
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
                </div>
            </div>
        </>
    );
};

export default MainProjects;
