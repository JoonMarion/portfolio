import React from 'react';
import MiniCard from '../miniCard/MiniCard';
import './CardContent.css';

const CardContent = () => {
    return (
        <div className="card">
            <div className="avatar-card secondary">
                <div className="text-content">
                    <p>
                        &emsp;&emsp;Olá, meu nobre! Meu nome é João Mariano. Sou de Castanhal - Pará, lugar onde nasci e
                        cresci. Atualmente sou estagiário na equipe de desenvolvimento na empresa Sea Telecom e
                        acadêmico de Engenharia de Software na Universidade do Estado do Pará. Desde criança sou
                        entusiasta de tudo que envolve tecnologia, do hardware ao software, e hoje, trabalhando como
                        desenvolvedor, tenho plena certeza do meu futuro na carreira de desenvolvimento. Codar é minha
                        paixão!
                        <br /> <br />
                        &emsp;&emsp;Desenvolvi vários sistemas de gestão na empresa onde trabalho, a maioria deles em
                        Django, criei imagens docker e estão todos em containers, no servidor da empresa. Criando assim
                        um pequeno ambiente de microsserviços. Tive experiência com desenvolvimento ágil. Fiz bootcamps
                        de aperfeiçoamento pessoal e profissional. Dentre as tecnologias com as quais tive mais contato
                        estão React JS, Django, JavaScript, Python, HTML e CSS.{' '}
                    </p>
                </div>
            </div>
            <div className="card-content">
                <MiniCard />
            </div>
        </div>
    );
};

export default CardContent;
