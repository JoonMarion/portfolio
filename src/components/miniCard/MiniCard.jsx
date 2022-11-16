import React from 'react';
import { animated } from 'react-spring';
import { use3dEffect } from 'use-3d-effect';
import './MiniCard.css';
import './Glitch.css';
import Avatar from '../../assets/avatar.png';
import Button from '../button/Button';

const MiniCard = () => {
    const ref = React.useRef(null);
    const { style, ...mouseHandlers } = use3dEffect(ref);
    return (
        <div className="mini-card-container">
            <animated.div
                ref={ref}
                style={{
                    color: 'white',
                    ...style,
                }}
                {...mouseHandlers}
                className="mini-card"
            >
                <div className="mini-card-image">
                    <img src={Avatar} alt="Avatar João Mariano" />
                </div>
                <div className="mini-card-content">
                    <h2 className="hero glitch layers" data-text="Username">
                        <span>Username</span>
                    </h2>
                    <br />
                    <p className="hero glitch layers" data-text="Username">
                        <span>João Mariano</span>
                    </p>
                    <br />
                    <br />
                    <h2 className="hero glitch layers" data-text="Registered on">
                        <span>Registered on</span>
                    </h2>
                    <br />
                    <p className="hero glitch layers" data-text="20 june, 2001">
                        <span>20 june, 2001</span>
                    </p>
                    <br />
                    <br />
                    <h2 className="hero glitch layers" data-text="Class">
                        <span>Class</span>
                    </h2>
                    <br />
                    <p className="hero glitch layers" data-text="20 june, 2001">
                        <span>Web Developer</span>
                    </p>
                </div>
            </animated.div>

            <div className="centered">
                <Button title="Download CSV"></Button>
            </div>
        </div>
    );
};

export default MiniCard;
