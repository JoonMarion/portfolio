import React, { useRef, useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Skill from '../../skill/Skill';

const Languages = () => {
    const fdropDownRef = useRef(null);
    const [fisActive, fsetIsActive] = useState(false);
    const fonClick = () => fsetIsActive(!fisActive);

    return (
        <div className="skills-cards">
            <button onClick={fonClick} className="skills-drop-button">
                <div className="skills-title">
                    <h3 className="secondary">Linguagens de programação base</h3>
                    <p className="skills-subtitle">Primeiras linguagens de programação que tive contato</p>
                </div>
                <MdOutlineKeyboardArrowDown
                    className={`${fisActive ? 'button-inactive' : 'button-active'}`}
                    color="#e8f1f2"
                    size={30}
                />
            </button>
            <div className="skills-divisor"></div>
            <nav ref={fdropDownRef} className={`menu ${fisActive ? 'inactive' : 'active'}`}>
                <ul className={`skills-dropdown ${fisActive ? 'transition-active' : 'transition-inactive'}`}>
                    <li>
                        <Skill
                            title="C"
                            img="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png"
                            description="Linguagem de programação de propósito geral"
                        />
                    </li>
                    <li>
                        <Skill
                            title="Java"
                            img="https://logospng.org/download/java/logo-java-512.png"
                            description="Linguagem de programação de propósito geral"
                        />
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Languages;
