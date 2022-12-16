// import MiniCard from '../miniCard/MiniCard';
import './CardContent.css';
import Modal from '../modal/Modal';
import SocialNetworks from '../socialNetworks/SocialNetworks';
import { HiOutlineChevronDoubleDown } from 'react-icons/hi';

const CardContent = () => {
    return (
        <div className="main-content">
            <div className="card">
                <div className="avatar-card secondary">
                    <div className="text-content secondary">
                        <h1 className="my-name">João Pedro</h1>
                        <h2 className="first-about secondary">Desenvolvedor Web</h2>
                        <h2 className="first-about secondary">Engenharia de Software</h2>
                        <h2 className="first-about secondary">Entusiasta de tecnologia e ciências exatas</h2>
                        <Modal />
                        <div className="social-networks-wrapper">
                            <SocialNetworks size="25" style={{ justifyContent: 'space-evenly' }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="button-roll-down">
                <a href="#projects" className="secondary button-roll-down-content">
                    <div>Rolar para baixo &nbsp;</div>
                    <HiOutlineChevronDoubleDown size={20} />
                </a>
            </div>
        </div>
    );
};

export default CardContent;
