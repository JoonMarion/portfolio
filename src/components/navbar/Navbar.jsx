import React, { useState } from 'react';
import './Navbar.css';
import { HeaderStyled, MenuContentStyled, MenuIconStyled, MenuStyled } from './style';
import menu from '../../assets/menu.svg';

const Navbar = () => {
    const [show, setShow] = useState(false);

    const toggleMenu = () => {
        setShow(!show);
    };

    return (
        <HeaderStyled>
            <MenuContentStyled>
                <MenuIconStyled onClick={toggleMenu} src={menu} width="24px" />
            </MenuContentStyled>

            <MenuStyled show={show}>
                <li>
                    <a href="#home">Início</a>
                </li>
                <li>
                    <a href="#projects">Tecnologias</a>
                </li>
                <li>
                    <a href="#projects">Projetos</a>
                </li>
                <li>
                    <a href="#movies">Contatos</a>
                </li>
            </MenuStyled>
        </HeaderStyled>
    );
};

export default Navbar;
