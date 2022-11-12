import React from 'react';
import MiniCard from '../miniCard/MiniCard';
import './CardContent.css';
import WalkingAvatar from '../../assets/walking-avatar.png';

const CardContent = () => {
    return (
        <div className="container">
            <div className="card">
                <div className="avatar-card">
                    <img src={WalkingAvatar} alt="" />
                </div>
                <div className="content-card">
                    <MiniCard />
                </div>
            </div>
        </div>
    );
};

export default CardContent;
