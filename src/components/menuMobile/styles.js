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
    background: #0d1117;
    opacity: 0;
    pointer-events: none;
    transform: translateY(-500px);
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
        font-size: 1.5rem;
        position: relative;
        &:before {
            content: '';
            border-radius: 50px;
            bottom: 0px;
            position: absolute;
            width: 0%;
            height: 2px;
            background: #b7cccf;
            transition: 0.2s;
        }
        &:hover {
            &:before {
                width: 100%;
            }
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
