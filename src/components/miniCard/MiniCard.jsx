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
                    <div className="info-content secondary">
                        <div className="content-text">
                            &#123;"developer":
                            <br />
                            &emsp;&#123;
                            <br />
                            &emsp;&emsp;<span className="key">"name"</span>: <span className="value">"João"</span>,
                            <br />
                            &emsp;&emsp;<span className="key">"lastName"</span>:{' '}
                            <span className="value">"Mariano"</span>
                            ,
                            <br />
                            &emsp;&emsp;<span className="key">"age"</span>: <span className="number-value">21</span>,
                            <br />
                            &emsp;&emsp;<span className="key">"server"</span>: <span className="value">"Brazil"</span>,
                            <br />
                            &emsp;&emsp;<span className="key">"class"</span>: <span className="value">"Front-end"</span>
                            ,
                            <br />
                            &emsp;&#125;,
                            <br />
                            &#125;,
                        </div>
                    </div>
                </div>
            </animated.div>

            <div className="centered">
                <Button title="Download CSV"></Button>
            </div>
        </div>
    );
};

export default MiniCard;
