import styled, { css } from 'styled-components';

export const Container = styled.section`
    position: fixed;
    backdrop-filter: blur(3px);
    width: 100%;
    height: 100%;
    font-size: 0.9rem;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(9, 20, 26, 0.8);
    background: linear-gradient(34deg, rgba(9, 20, 26, 0.8) ; 0%, rgba(17, 18, 17, 0.95) 95%);
    opacity: 0;
    pointer-events: none;
    transform: translateX(-50px);
    transition: 0.5s;
    > svg {
        position: absolute;
        top: 1rem;
        right: 1rem;
        transform: rotate(45deg);
        transition: 0.5s;
        cursor: pointer;
    }
    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 2rem;
        transform: scale(0.7);
        transition: 0.5s;
    }
    a {
        color: #f1ffff;
        &:hover {
            color: #05c6ee;
        }
    }
    ${({ isVisible }) =>
        isVisible &&
        css`
            opacity: 1;
            pointer-events: auto;
            transform: translateX(0px);
            > svg {
                transform: rotate(0deg);
            }
            nav {
                transform: scale(1);
            }
        `}
`;
