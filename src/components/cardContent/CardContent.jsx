import React from 'react';
import MiniCard from '../miniCard/MiniCard';
import './CardContent.css';

const CardContent = () => {
    return (
        <div className="container">
            <div className="card">
                <div className="avatar-card">
                    <h1>Teste</h1>
                </div>
                <div className="content-card">
                    <MiniCard />
                </div>
            </div>
        </div>
    );
};

export default CardContent;
