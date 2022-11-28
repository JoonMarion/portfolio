import MiniCard from '../miniCard/MiniCard';
import './CardContent.css';
import Modal from '../modal/Modal';
import SocialNetworks from '../socialNetworks/SocialNetworks';

const CardContent = () => {
    return (
        <div className="main-content">
            <h1>Bem-vindo ao meu portfólio!</h1>
            <br />
            <div className="card">
                <div className="card-content">
                    <MiniCard />
                </div>
                <div className="avatar-card secondary">
                    <div className="text-content">
                        <p>
                            &emsp;&emsp;Olá, meu nome é João Mariano. Sou de Castanhal, no estado do Pará, lugar onde
                            nasci e cresci. Atualmente sou estagiário na equipe de desenvolvimento da empresa Sea
                            Telecom e acadêmico de Engenharia de Software na Universidade do Estado do Pará. Desde
                            criança sou entusiasta de tudo que envolva tecnologia, do hardware ao software.&nbsp;
                            <Modal />
                        </p>
                        <br />
                        <div className="social-networks">
                            <SocialNetworks />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardContent;
