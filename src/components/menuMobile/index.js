/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container } from './styles';
import { IoClose } from 'react-icons/io5';
import { useEffect } from 'react';

export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
    useEffect(() => {
        document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
    }, [menuIsVisible]);

    return (
        <Container isVisible={menuIsVisible}>
            <IoClose size={45} onClick={() => setMenuIsVisible(false)} />
            <nav>
                <a href="#home" className="secondary" onClick={() => setMenuIsVisible(false)}>
                    Início
                </a>

                <a href="#projects" className="secondary" onClick={() => setMenuIsVisible(false)}>
                    Projetos
                </a>

                <a href="#skills" className="secondary" onClick={() => setMenuIsVisible(false)}>
                    Skills
                </a>

                <a href="#movies" className="secondary" onClick={() => setMenuIsVisible(false)}>
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
        </Container>
    );
}
