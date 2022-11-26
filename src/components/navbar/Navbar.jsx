import React from 'react';
import { Container } from './style';
import { RiMenu3Fill } from 'react-icons/ri';

export function Navbar({ setMenuIsVisible }) {

    return (
        <Container>
            <section>
                <nav>
                    <a href="#home" className="secondary">
                        Início
                    </a>
                    <a href="#projects" className="secondary">
                        Tecnologias
                    </a>
                    <a href="#projects" className="secondary">
                        Projetos
                    </a>
                    <a href="#movies" className="secondary">
                        Contatos
                    </a>
                </nav>
            </section>

            <section>
                <RiMenu3Fill onClick={() => setMenuIsVisible(true)} className="mobile" />
            </section>
        </Container>
    );
}
