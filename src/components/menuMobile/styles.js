import styled, { css } from 'styled-components';

export const Container = styled.section`
    position: absolute;
    backdrop-filter: blur(3px);
    width: 50%;
    height: 300px;
    font-size: 0.825rem;
    border-radius: 0 0 0 1rem;
    top: 0;
    right: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(9, 20, 26, 0.8);
    background: linear-gradient(34deg, rgba(9, 20, 26, 0.8) ; 0%, rgba(17, 18, 17, 0.95) 95%);
    opacity: 0;
    pointer-events: none;
    transform: translateX(50px);
    transition: 0.5s;
    > svg {
        position: absolute;
        top: 1rem;
        right: 1rem;
        transform: rotate(45deg);
        transition: 0.7s;
        cursor: pointer;
    }
    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 2rem;
        transform: scale(0.7);
        transition: 0.7s;
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
            transform: translateY(0px);
            > svg {
                transform: rotate(0deg);
            }
            nav {
                transform: scale(1);
            }
        `}
`;
