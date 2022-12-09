import React, { useRef, useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Skill from '../../skill/Skill';

const Tools = () => {
    const fdropDownRef = useRef(null);
    const [fisActive, fsetIsActive] = useState(false);
    const fonClick = () => fsetIsActive(!fisActive);

    return (
        <div className="skills-cards">
            <button onClick={fonClick} className="skills-drop-button">
                <div className="skills-title">
                    <h2 className="secondary">Ferramentas</h2>
                    <p className="skills-subtitle">Ferramentas que auxiliam no desenvolvimento</p>
                </div>
                <div>
                    <MdOutlineKeyboardArrowDown
                        className={`${fisActive ? 'button-inactive' : 'button-active'}`}
                        color="#e8f1f2"
                        size={30}
                    />
                </div>
            </button>
            <div className="skills-divisor"></div>
            <nav ref={fdropDownRef} className={`menu ${fisActive ? 'inactive' : 'active'}`}>
                <ul className={`skills-dropdown ${fisActive ? 'transition-active' : 'transition-inactive'}`}>
                    <li>
                        <Skill
                            title="Git"
                            img="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
                            description="Ferramenta para controle de versionamento de código"
                        />
                    </li>
                    <li>
                        <Skill
                            title="Astah UML"
                            img="https://astah.change-vision.com/ja/Resources/Images/logos/edition/uml_astah.png"
                            description="Ferramenta de modelagem de soluções de software"
                        />
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Tools;
