import styled from 'styled-components';

export const HeaderStyled = styled.header`
    width: 100%;
    background-color: #0e171e;
    z-index: 999;
    position: fixed;
`;

export const MenuContentStyled = styled.div`
    position: absolute;
    z-index: 4;
    width: 100%;
    padding: 10px;
    background-color: #0e171e;
    overflow: hidden;
    display: none;
    height: 40px;

    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        position: fixed;
    }
`;
export const MenuIconStyled = styled.img`
    position: absolute;
    margin-right: 10px;
    right: 0;
    cursor: pointer;
`;
export const MenuStyled = styled.ul`
    list-style: none;
    right: 0;
    margin: 0;
    padding: 0 10%;
    overflow: hidden;
    font-size: 1rem;
    display: flex;
    justify-content: space-around;
    li a {
        display: block;
        color: #f1ffff;
        text-align: center;
        padding: 16px;
        outline: none;
        text-decoration: none;
    }
    li a:hover {
        cursor: pointer;
        color: #05c6ee;
    }

    @media (max-width: 768px) {
        display: ${({ show }) => (show ? 'block' : 'none')};
        position: fixed;
        z-index: 4;
        background-color: #0e171e;
        top: 40px;
        overflow: hidden;
        height: 250px;
        width: 50%;
        padding: 0;
        li {
            width: 100%;
        }
        li:hover {
            cursor: pointer;

            a {
                color: #05c6ee;
            }
        }
    }
`;
