/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Skill from './../skill/Skill';

const backEnd = () => {
    const bdropDownRef = useRef(null);
    const [bisActive, bsetIsActive] = useState(false);
    const bonClick = () => bsetIsActive(!bisActive);

    return (
        <div className="skills-cards">
            <button onClick={bonClick} className="skills-drop-button">
                <h3 className="secondary">Back-End</h3>
                <MdOutlineKeyboardArrowDown
                    className={`menu ${bisActive ? 'button-active' : 'button-inactive'}`}
                    size={30}
                    color="#e8f1f2"
                />
            </button>
            <div className="skills-divisor"></div>
            <nav ref={bdropDownRef} className={`menu ${bisActive ? 'bactive' : ''}`}>
                <ul className="skills-dropdown">
                    <li>
                        <Skill
                            title="Python"
                            img="https://assets.stickpng.com/images/5848152fcef1014c0b5e4967.png"
                            description="Back-end"
                        />
                    </li>
                    <li>
                        <Skill
                            title="Django"
                            img="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/django-icon.png"
                            description="Framework web em Python"
                        />
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default backEnd;
