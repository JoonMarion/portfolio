/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Skill from '../../skill/Skill';

const backEnd = () => {
    const bdropDownRef = useRef(null);
    const [bisActive, bsetIsActive] = useState(false);
    const bonClick = () => bsetIsActive(!bisActive);

    return (
        <div className="skills-cards">
            <button onClick={bonClick} className="skills-drop-button">
                <div className="skills-title">
                    <h3 className="secondary">Back-End</h3>
                    <p className="skills-subtitle">Aqui é onde fica as regras de negócio do sistema</p>
                </div>
                <MdOutlineKeyboardArrowDown
                    className={`${bisActive ? 'button-inactive' : 'button-active'}`}
                    size={30}
                    color="#e8f1f2"
                />
            </button>
            <div className="skills-divisor"></div>
            <nav ref={bdropDownRef} className={`menu ${bisActive ? 'inactive' : 'active'}`}>
                <ul className="skills-dropdown">
                    <li>
                        <Skill
                            title="Python"
                            img="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png"
                            description="Linguagem de programação de alto nível"
                        />
                    </li>
                    <li>
                        <Skill
                            title="Django"
                            img="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/django-icon.png"
                            description="Framework para desenvolvimento web em Python"
                        />
                    </li>
                    <li>
                        <Skill
                            title="SQL"
                            img="https://www.freeiconspng.com/thumbs/sql-server-icon-png/sql-server-icon-png-29.png"
                            description="Linguagem padrão para banco de dados"
                        />
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default backEnd;
