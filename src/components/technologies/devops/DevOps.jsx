import React, { useRef, useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Skill from '../../skill/Skill';

const DevOps = () => {
    const ddropDownRef = useRef(null);
    const [disActive, dsetIsActive] = useState(false);
    const fonClick = () => dsetIsActive(!disActive);

    return (
        <div className="skills-cards">
            <button onClick={fonClick} className="skills-drop-button">
                <div className="skills-title">
                    <h3 className="secondary">DevOps</h3>
                    <p className="skills-subtitle">
                        Integração entre desenvolvimento e infraestrutura para produção de serviços
                    </p>
                </div>
                <MdOutlineKeyboardArrowDown
                    className={`${disActive ? 'button-inactive' : 'button-active'}`}
                    color="#e8f1f2"
                    size={30}
                />
            </button>
            <div className="skills-divisor"></div>
            <nav ref={ddropDownRef} className={`menu ${disActive ? 'inactive' : 'active'}`}>
                <ul className={`skills-dropdown ${disActive ? 'transition-active' : 'transition-inactive'}`}>
                    <li>
                        <Skill
                            title="Docker"
                            img="https://cdn-icons-png.flaticon.com/512/919/919853.png"
                            description="Containerização de aplicações"
                        />
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default DevOps;
