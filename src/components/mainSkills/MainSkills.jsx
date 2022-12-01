import React from 'react';
import './MainSkills.css';
import FrontEnd from './../frontEnd/FrontEnd';
import BackEnd from './../backEnd/BackEnd';
import DevOps from './../devops/DevOps';

const MainSkills = () => {
    const Skills = '<Skills />';
    return (
        <div className="skills-container" id="skills">
<<<<<<< HEAD
            <div className="centered skills-title">
                <h2 className="content-title">{Skills}</h2>
            </div>
            <div className="skills-content">
                <FrontEnd />
                <BackEnd />
                <DevOps />
            </div>
=======
            <div className="skills-title title">
                <h2> Principais skills</h2>
            </div>
            <div className="skills-content">
                <div className="skills-cards">
                    <Skill
                        title="JavaScript"
                        img="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                        description="Linguagem de programação essencial para desenvolvimento Front-end"
                    />
                    <Skill
                        title="TypeScript"
                        img="https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png"
                        description="Linguagem de programação que adiciona tipagem estática ao JavaScript"
                    />
                    <Skill
                        title="Python"
                        img="https://assets.stickpng.com/images/5848152fcef1014c0b5e4967.png"
                        description="Linguagem de programação de alto nível e simplificada, fortemente recomendada para ciência de dados"
                    />
                    <Skill
                        title="React"
                        img="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
                        description="Biblioteca JavaScript para construção de interfaces de usuário"
                    />
                    <Skill
                        title="StyledComponents"
                        img="https://cdn.sanity.io/images/djtlwm1o/production/cd48e3fba521deb47078ea36b7073e2f0e511af7-257x286.png"
                        description="Biblioteca JavaScript que permite escrever CSS dentro de JavaScript, para criar componentes estilizados"
                    />
                    <Skill
                        title="Django"
                        img="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/django-icon.png"
                        description="Framework para desenvolvimento web escrito em Python"
                    />
                    <Skill
                        title="Bootstrap"
                        img="https://getbootstrap.com.br/docs/4.1/assets/img/bootstrap-stack.png"
                        description="Framework Front-end que fornece estruturas CSS para desenvolvimento de sites responsivos"
                    />
                    <Skill
                        title="Docker"
                        img="https://cdn-icons-png.flaticon.com/512/919/919853.png"
                        description="Ferramenta que permite a criação e o gerenciamento de ambientes isolados"
                    />
                </div>
            </div>
>>>>>>> 60f52e0b994b4e6cbc4701e396ac5eca4b6a752a
        </div>
    );
};

export default MainSkills;
