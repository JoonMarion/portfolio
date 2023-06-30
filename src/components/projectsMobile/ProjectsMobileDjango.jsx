import { useRef } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import './ProjectsMobile.css';
import ProjectMobile from '../projectMobile/ProjectMobile';
import Agriaraujo from '../../assets/agriaraujo.jpeg';
import Sistemaagendamento from '../../assets/SistemaAgendamento.jpeg';

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

    const AgriAraujo = ['Django', 'Python', 'VPN', 'MySQL', 'Bootstrap', 'Generic Views'];
    const SistemaAgendamento = ['Django', 'Python', 'Generic Views', 'Bootstrap'];

    return (
        <div className="carousel-container">
            <div className="carousel-button">
                <SlArrowLeft className="icon" onClick={handleLeftClick} size={30} color="white" />
            </div>

            <div className="carousel" ref={carousel}>
                <ProjectMobile
                    title="AgriAraujo Grãos e Produtos Agrícolas Ltda"
                    img={Agriaraujo}
                    description="Sistema de controle de clientes, estoque, vendas, compras, caixa, geração de nota fiscal e relatórios."
                    tecnologies={AgriAraujo}
                />
                <ProjectMobile
                    title="Sistema de Agendamento"
                    img={Sistemaagendamento}
                    description="Sistema de controle de agenda, clientes, caixa e funcionários."
                    tecnologies={SistemaAgendamento}
                />
            </div>

            <div className="carousel-button">
                <SlArrowRight className="icon" onClick={handleRightClick} size={30} color="white" />
            </div>
        </div>
    );
};

export default Carouselzin;
