import React from 'react';
import CardContent from '../cardContent/CardContent';
import './MainContent.css';

const MainContent = () => {
    return (
        <div className="main-content">
            <h1>Bem-vindo ao meu portfólio!</h1>
            <br />
            <CardContent />
        </div>
    );
};

export default MainContent;
