import React, { useRef, useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Skill from './../skill/Skill';

const FrontEnd = () => {
    const fdropDownRef = useRef(null);
    const [fisActive, fsetIsActive] = useState(false);
    const fonClick = () => fsetIsActive(!fisActive);

    return (
        <div className="skills-cards">
            <button onClick={fonClick} className="skills-drop-button">
                <h3 className="secondary">Front-End</h3>
                <MdOutlineKeyboardArrowDown
                    className={`menu ${fisActive ? 'button-active' : 'button-inactive'}`}
                    color="#e8f1f2"
                    size={30}
                />
            </button>
            <div className="skills-divisor"></div>
            <nav ref={fdropDownRef} className={`menu ${fisActive ? 'active' : 'inactive'}`}>
                <ul className={`skills-dropdown ${fisActive ? 'transition-active' : 'transition-inactive'}`}>
                    <li>
                        <Skill
                            title="JavaScript"
                            img="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                            description="Front-end e Back-end"
                        />
                    </li>
                    <li>
                        <Skill
                            title="TypeScript"
                            img="https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png"
                            description="Front-end e Back-end"
                        />
                    </li>
                    <li>
                        <Skill
                            title="React"
                            img="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
                            description="Biblioteca Front-end"
                        />
                    </li>
                    <li>
                        <Skill
                            title="StyledComponents"
                            img="https://cdn.sanity.io/images/djtlwm1o/production/cd48e3fba521deb47078ea36b7073e2f0e511af7-257x286.png"
                            description="CSS no JS"
                        />
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default FrontEnd;
