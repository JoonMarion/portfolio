import React from 'react';
import MiniCard from '../miniCard/MiniCard';
import './CardContent.css';

const CardContent = () => {
    return (
        <div className="card">
            <div className="avatar-card secondary">
                <div className="text-content">
                    &emsp;&emsp;Olá pessoal, meu nome é João Mariano. Sou de Castanhal, Pará. Eu nasci e cresci aqui.
                    Atualmente sou estagiário na equipe de desenvolvimento da Sea Telecom e estudante de Engenharia de
                    Software na Universidade do Estado do Pará. Desde criança sou um entusiasta de tudo que envolve
                    tecnologia, de hardware a software, e hoje, trabalhando como desenvolvedor, tenho plena certeza do
                    meu destino e do meu futuro na carreira de desenvolvimento. Eu amo codificar!
                    <br /> <br />
                    &emsp;&emsp;Desenvolvi vários sistemas de gestão na empresa onde trabalho, a maioria deles em
                    Django, criei imagens docker e estão todos em containers, no servidor da empresa. Criando um pequeno
                    ecossistema de microsserviços. Tive experiência com desenvolvimento ágil. Fiz vários cursos de
                    aperfeiçoamento pessoal e profissional. Entre as tecnologias com as quais tive mais contato estão
                    React JS, Django, JavaScript, Python, HTML e CSS.{' '}
                </div>
            </div>
            <div className="card-content">
                <MiniCard />
            </div>
        </div>
    );
};

export default CardContent;
