import MiniCard from '../miniCard/MiniCard';
import './CardContent.css';
import Modal from '../modal/Modal';
import SocialNetworks from '../socialNetworks/SocialNetworks';

const CardContent = () => {
    const text = '<BemVindo />';
    return (
        <div className="main-content">
            <h1 className="content-title centered secondary">{text}</h1>
            <br />
            <div className="card">
                <div className="avatar-card secondary">
                    <div className="text-content secondary">
                        <h1 className="my-name secondary">Hi, i'm João Mariano</h1>
                        <h2 className="first-about secondary">Desenvolvedor Web</h2>
                        <h2 className="first-about secondary">Acadêmico de Engenharia de Software</h2>
                        <h2 className="first-about secondary">Entusiasta de tecnologia e ciências exatas</h2>
                        <Modal />
                    </div>

                    <div className="social-networks">
                        <SocialNetworks />
                    </div>
                </div>
                <div className="card-content">
                    <MiniCard />
                </div>
            </div>
        </div>
    );
};

export default CardContent;
