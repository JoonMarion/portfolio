import React from 'react';
import './MainSkills.css';
import Skill from '../skill/Skill';

const MainSkills = () => {
    return (
        <>
            <div className="skills-container" id="skills">
                <div className="skills-title">
                    <h2>Skills</h2>
                </div>
                <div className="skills-content">
                    <div className="skills-cards">
                        <Skill
                            title="JavaScript"
                            img="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                            description="Front-end e Back-end"
                        />
                        <Skill
                            title="TypeScript"
                            img="https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png"
                            description="Front-end e Back-end"
                        />
                        <Skill
                            title="Python"
                            img="https://assets.stickpng.com/images/5848152fcef1014c0b5e4967.png"
                            description="Back-end"
                        />
                        <Skill
                            title="React"
                            img="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
                            description="Biblioteca Front-end"
                        />
                        <Skill
                            title="StyledComponents"
                            img="https://cdn.sanity.io/images/djtlwm1o/production/cd48e3fba521deb47078ea36b7073e2f0e511af7-257x286.png"
                            description="CSS no JS"
                        />
                        <Skill
                            title="Django"
                            img="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/django-icon.png"
                            description="Framework web em Python"
                        />
                        <Skill
                            title="Bootstrap"
                            img="https://getbootstrap.com.br/docs/4.1/assets/img/bootstrap-stack.png"
                            description="Framework CSS"
                        />
                        <Skill
                            title="Git"
                            img="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
                            description="Versionamento de código"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainSkills;
