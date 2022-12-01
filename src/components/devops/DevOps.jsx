import React, { useRef, useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Skill from './../skill/Skill';

const DevOps = () => {
    const ddropDownRef = useRef(null);
    const [disActive, dsetIsActive] = useState(false);
    const fonClick = () => dsetIsActive(!disActive);

    return (
        <div className="skills-cards">
            <button onClick={fonClick} className="skills-drop-button">
                <h3 className="secondary">DevOps</h3>
                <MdOutlineKeyboardArrowDown
                    className={`menu ${disActive ? 'button-active' : 'button-inactive'}`}
                    color="#e8f1f2"
                    size={30}
                />
            </button>
            <div className="skills-divisor"></div>
            <nav ref={ddropDownRef} className={`menu ${disActive ? 'active' : 'inactive'}`}>
                <ul className={`skills-dropdown ${disActive ? 'transition-active' : 'transition-inactive'}`}>
                    <li>
                        <Skill
                            title="Docker"
                            img="https://cdn-icons-png.flaticon.com/512/919/919853.png"
                            description="Containerização de aplicações"
                        />
                    </li>
                    <li>
                        <Skill
                            title="Git"
                            img="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
                            description="Versionamento de código"
                        />
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default DevOps;
