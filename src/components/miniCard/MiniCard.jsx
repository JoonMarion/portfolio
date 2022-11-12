import React from 'react';
import './MiniCard.css';

const MiniCard = () => {
    return (
        <div className="mini-card-container">
            <div className="mini-card">
                <img
                    src="https://api.readyplayer.me/v1/avatars/636e4c2ebc1838ec3914de2d.png?cacheControl=true&uat=2022-11-11T13:21:27.603Z"
                    alt="Avatar João Mariano"
                />
            </div>
        </div>
    );
};

export default MiniCard;
