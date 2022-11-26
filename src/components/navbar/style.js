import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    background: rgba(9, 20, 26, 0.8);
    padding: 14.5px 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > section {
        display: flex;
        gap: 2rem;
        &:last-child {
            gap: 1rem;
        }
        > img {
            width: 230px;
            @media (max-width: 500px) {
                width: 120px;
            }
        }
        > nav {
            list-style: none;
            display: flex;
            gap: 1rem;
            a {
                font-size: 16px;
                position: relative;
                &:before {
                    content: '';
                    border-radius: 50px;
                    bottom: 0px;
                    position: absolute;
                    width: 0%;
                    height: 2px;
                    background: #05c6ee;
                    transition: 0.3s;
                }
                &:hover {
                    &:before {
                        width: 100%;
                    }
                }
            }
        }
        .mobile {
            display: none;
        }
        @media (max-width: 900px) {
            .mobile {
                display: initial;
            }
            > nav {
                display: none;
            }
        }
    }
    @media (max-width: 700px) {
        padding: 14.5px 16px;
    }
`;
