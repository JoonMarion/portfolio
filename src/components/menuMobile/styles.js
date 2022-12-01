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
<<<<<<< HEAD
    background: rgb(119, 190, 169, 0.7);
=======
    background: rgba(9, 20, 26, 0.8);
>>>>>>> 60f52e0b994b4e6cbc4701e396ac5eca4b6a752a
    opacity: 0;
    pointer-events: none;
    transform: translateX(50px);
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
        color: black;
        &:hover {
            color: rgb(82, 97, 117);
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
