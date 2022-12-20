import React from 'react';
import { Container } from './style';
import { RiMenu3Fill } from 'react-icons/ri';
import { MdOpenInNew } from 'react-icons/md';

export function Navbar({ setMenuIsVisible }) {
    return (
        <Container>
            <div>
                <h1 className="primary">
                    Pedro <span className="secondary">20.06 LTS</span>
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
                    <a href="#contacts" className="secondary">
                        Contatos
                    </a>
                    <a href="https://resume.io/r/CXkGXKu00" target="_blank" rel="noreferrer" className="secondary">
                        {' '}
                        Currículo
                        <MdOpenInNew className="icon" size={13} />
                    </a>
                </nav>
                <section>
                    <RiMenu3Fill size={30} onClick={() => setMenuIsVisible(true)} className="mobile secondary" />
                </section>
            </section>
        </Container>
    );
}
