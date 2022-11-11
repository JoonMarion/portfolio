import React from 'react';
import MiniCard from '../miniCard/MiniCard';
import './CardContent.css';
const CardContent = () => {
    return (
        <div className="container">
            <div className="card">
                <div className="avatarCard">
                    <MiniCard />
                </div>
            </div>
        </div>
    );
};

export default CardContent;
