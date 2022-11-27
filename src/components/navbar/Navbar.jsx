import React from 'react';
import { Container } from './style';
import { RiMenu3Fill } from 'react-icons/ri';

export function Navbar({ setMenuIsVisible }) {
    return (
        <Container>
            <div>
                <h1 className="primary">
                    Marian<span className="secondary">.io</span>
                </h1>
            </div>
            <section>
                <nav>
                    <a href="#home" className="secondary">
                        Início
                    </a>
                    <a href="#projects" className="secondary">
                        Projetos
                    </a>
                    <a href="#skills" className="secondary">
                        Skills
                    </a>
                    <a href="#movies" className="secondary">
                        Contatos
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1cLd9U3HhYOC6yOyf3ZE7iq73Nyj2M29q/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                        className="secondary"
                    >
                        {' '}
                        Currículo
                    </a>
                </nav>
            </section>

            <section>
                <RiMenu3Fill size={30} onClick={() => setMenuIsVisible(true)} className="mobile" />
            </section>
        </Container>
    );
}
