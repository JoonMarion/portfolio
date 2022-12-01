import MiniCard from '../miniCard/MiniCard';
import './CardContent.css';
import Modal from '../modal/Modal';
import SocialNetworks from '../socialNetworks/SocialNetworks';

const CardContent = () => {
    return (
        <div className="main-content">
            <h1 className="content-title">Bem-vindo ao meu portfólio!</h1>
            <br />
            <div className="card">
                <div className="card-content">
                    <MiniCard />
                </div>
                <div className="avatar-card secondary">
                    <div className="text-content">
                        <p>
                            &emsp;&emsp;Olá, meu nome é João Mariano, tenho 21 anos. Sou desenvolvedor Front-end, acadêmico de
                            Engenharia de Software na Universidade do Estado do Pará e estagiário de desenvolvimento na
                            empresa Sea Telecom.&nbsp;
                            <Modal />
                        </p>
                    </div>

                    <div>
                        <div>
                            <p>&emsp;&emsp;Minhas redes:</p>
                            <br />
                        </div>
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
