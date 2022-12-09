import { useRef } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import './ProjectsMobile.css';
import ProjectMobile from '../projectMobile/ProjectMobile';
import FinanceManage from '../../assets/finance-manage.jpeg';
import Pokedex from '../../assets/pokedex.png';
import DevQuiz from '../../assets/dev-quiz.jpeg';
import Calculator from '../../assets/calculator.jpeg';
import InstagramLogin from '../../assets/instagram-login-clone.png';

const Carouselzin = () => {
    const carousel = useRef(null);

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };

    return (
        <div className="carousel-container">
            <div className="carousel-button">
                <SlArrowLeft className="icon" onClick={handleLeftClick} size={30} color="white" />
            </div>

            <div className="carousel" ref={carousel}>
                <ProjectMobile
                    title="Controle de Finanças"
                    img={FinanceManage}
                    description="Sistema web para controle de finanças feito em React JS e StyledComponents. Os dados ficam salvos no localStorage do seu navegador. Utilizando conceitos dos React Hooks."
                    link="https://financemanage.netlify.app/"
                />
                <ProjectMobile
                    title="Pokédex"
                    img={Pokedex}
                    description="Pokédex com paginação feita com JavaScript puro. Estudo de consumo de API, consumindo dados da PokeAPI."
                    link="https://joonmarion.github.io/pokedex/"
                />
                <ProjectMobile
                    title="Quiz de Programação"
                    img={DevQuiz}
                    description="Um quiz para desenvolvedores feito em React JS."
                    link="https://dev-js-quiz.netlify.app/"
                />
                <ProjectMobile
                    title="Calculadora"
                    img={Calculator}
                    description="Calculadora feita em React JS e StyledComponents."
                    link="https://reactcalculatorjs.netlify.app/"
                />
                <ProjectMobile
                    title="Instagram Login Clone"
                    img={InstagramLogin}
                    description="Clone da tela de login do Instagram feita com HTML e CSS. Estudo de responsividade e Flexbox."
                    link="https://joonmarion.github.io/login-instagram/"
                />
            </div>

            <div className="carousel-button">
                <SlArrowRight className="icon" onClick={handleRightClick} size={30} color="white" />
            </div>
        </div>
    );
};

export default Carouselzin;
