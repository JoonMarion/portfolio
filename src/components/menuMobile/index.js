/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container } from './styles';
import { IoClose } from 'react-icons/io5';
import { useEffect } from 'react';
import { MdOpenInNew } from 'react-icons/md';

export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
    useEffect(() => {
        document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
    }, [menuIsVisible]);

    return (
        <Container isVisible={menuIsVisible}>
            <IoClose className="secondary" size={45} onClick={() => setMenuIsVisible(false)} />
            <nav className="content-subtitle">
                <a href="#home" className="secondary" onClick={() => setMenuIsVisible(false)}>
                    Início
                </a>

                <a href="#Freelance" className="secondary" onClick={() => setMenuIsVisible(false)}>
                    Freelance
                </a>

                <a href="#Estudo" className="secondary" onClick={() => setMenuIsVisible(false)}>
                    Estudo
                </a>

                <a href="#skills" className="secondary" onClick={() => setMenuIsVisible(false)}>
                    Skills
                </a>

                <a href="#contacts" className="secondary" onClick={() => setMenuIsVisible(false)}>
                    Contatos
                </a>

                <a href="https://resume.io/r/CXkGXKu00" target="_blank" rel="noreferrer" className="secondary">
                    {' '}
                    Currículo
                    <MdOpenInNew className="icon" size={13} />
                </a>
            </nav>
        </Container>
    );
}
