import React from 'react';
import './MiniCard.css';
import Avatar from '../../assets/avatar.png';
import Button from '../button/Button';

const MiniCard = () => {
    return (
        <div className="mini-card-container">
            <div className="mini-card">
                <img src={Avatar} alt="Avatar João Mariano" />
                <div className="mini-card-content">
                    <div>
                        <h2>Username</h2>
                        <p>João Mariano</p>
                    </div>
                    <div>
                        <h2>Registered on</h2>
                        <p>20 june, 2001</p>
                    </div>
                    <div>
                        <h2>Class</h2>
                        <p>Front-end Developer</p>
                    </div>
                </div>
            </div>

            <div className="centered">
                <Button title="Download CSV"></Button>
            </div>
        </div>
    );
};

export default MiniCard;
