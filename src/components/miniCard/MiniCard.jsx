import React from 'react';
import { animated } from 'react-spring';
import { use3dEffect } from 'use-3d-effect';
import './MiniCard.css';
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
                    <img className="avatar-img" src={Avatar} alt="Avatar João Mariano" />
                </div>
                <div className="mini-card-content">
                    <div className="content-text secondary">
                        <p className="mini-card-text">
                            &#123;"desenvolvedor":
                            <br />
                            &emsp;&#123;
                            <br />
                            &emsp;&emsp;<span className="key">"nome"</span>: <span className="value">"João"</span>,
                            <br />
                            &emsp;&emsp;<span className="key">"sobrenome"</span>:{' '}
                            <span className="value">"Mariano"</span>
                            ,
                            <br />
                            &emsp;&emsp;<span className="key">"idade"</span>: <span className="number-value">21</span>
                            ,
                            <br />
                            &emsp;&emsp;<span className="key">"classe"</span>:{' '}
                            <span className="value">"Front-end"</span>
                            ,
                            <br />
                            &emsp;&#125;,
                            <br />
                            &#125;,
                        </p>
                    </div>
                </div>
            </animated.div>

            <div className="centered">
                <Button title="Currículo"></Button>
            </div>
        </div>
    );
};

export default MiniCard;
