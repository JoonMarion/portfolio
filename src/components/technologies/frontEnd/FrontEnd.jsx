import React, { useRef, useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Skill from '../../skill/Skill';
import './FrontEnd.css';

const FrontEnd = () => {
    const fdropDownRef = useRef(null);
    const [fisActive, fsetIsActive] = useState(false);
    const fonClick = () => fsetIsActive(!fisActive);

    return (
        <div className="skills-cards">
            <button onClick={fonClick} className="skills-drop-button">
                <h3 className="secondary">Front-End</h3>
                <MdOutlineKeyboardArrowDown
                    className={`${fisActive ? 'button-inactive' : 'button-active'}`}
                    color="#e8f1f2"
                    size={30}
                />
            </button>
            <div className="skills-divisor"></div>
            <nav ref={fdropDownRef} className={`front-end menu ${fisActive ? 'inactive' : 'active'}`}>
                <ul className={`skills-dropdown ${fisActive ? 'transition-active' : 'transition-inactive'}`}>
                    <li>
                        <Skill
                            title="HTML"
                            img="https://cdn-icons-png.flaticon.com/512/1532/1532556.png"
                            description="Linguagem de marcação utilizada para estruturar páginas web e seu conteúdo"
                        />
                    </li>
                    <li>
                        <Skill
                            title="CSS"
                            img="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
                            description="Linguagem de design gráfico utilizada para estilizar páginas web"
                        />
                    </li>
                    <li>
                        <Skill
                            title="JavaScript"
                            img="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                            description="Linguagem de programação que permite implementar itens complexos em páginas web"
                        />
                    </li>
                    <li>
                        <Skill
                            title="TypeScript"
                            img="https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png"
                            description="Superset de JavaScript que adiciona tipagem estática e outros recursos a linguagem"
                        />
                    </li>
                    <li>
                        <Skill
                            title="React"
                            img="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
                            description="Biblioteca JavaScript e TypeScript utilizada para criar interface de usuário"
                        />
                    </li>
                    <li>
                        <Skill
                            title="StyledComponents"
                            img="https://cdn.sanity.io/images/djtlwm1o/production/cd48e3fba521deb47078ea36b7073e2f0e511af7-257x286.png"
                            description="Biblioteca que permite escrever códigos CSS dentro do JavaScript"
                        />
                    </li>
                    <li>
                        <Skill
                            title="Bootstrap"
                            img="https://getbootstrap.com.br/docs/4.1/assets/img/bootstrap-stack.png"
                            description="Framework front-end que fornece estruturas de CSS"
                        />
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default FrontEnd;
