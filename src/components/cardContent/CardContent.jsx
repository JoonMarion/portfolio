import React from 'react';
import MiniCard from '../miniCard/MiniCard';
import './CardContent.css';
import Modal from '../modal/Modal';

const CardContent = () => {
    return (
        <div className="card">
            <div className="avatar-card secondary">
                <div className="text-content">
                    <p>
                        &emsp;&emsp;Olá, meu nobre! Meu nome é João Mariano. Sou de Castanhal - Pará, lugar onde nasci e
                        cresci. Atualmente sou estagiário na equipe de desenvolvimento da empresa Sea Telecom e
                        acadêmico de Engenharia de Software na Universidade do Estado do Pará. Desde criança sou
                        entusiasta de tudo que envolva tecnologia, do hardware ao software, e hoje, trabalhando como
                        desenvolvedor, tenho plena certeza do meu futuro na carreira de desenvolvimento. Codar é minha
                        paixão!&nbsp;
                        <Modal />
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
