import React from 'react';
import Modal from 'react-modal';
import './Modal.css';

const CardContent = () => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#9c9386';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <a href="#home" className="primary link-hover" onClick={openModal}>
                Ler mais...
            </a>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'transparent',
                        backdropFilter: 'blur(5px)',
                    },
                    content: {
                        marginTop: '3rem',
                        position: 'absolute',
                        top: '40px',
                        left: '40px',
                        right: '40px',
                        bottom: '40px',
                        border: 'none',
                        background: 'rgba(9, 20, 26)',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '1rem',
                        outline: 'none',
                        padding: '20px',
                    },
                }}
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Sobre mim</h2>

                <div>I am a modal</div>

                <p>
                    &emsp;&emsp;Olá, meu nobre! Meu nome é João Mariano. Sou de Castanhal - Pará, lugar onde nasci e
                    cresci. Atualmente sou estagiário na equipe de desenvolvimento da empresa Sea Telecom e acadêmico de
                    Engenharia de Software na Universidade do Estado do Pará. Desde criança sou entusiasta de tudo que
                    envolva tecnologia, do hardware ao software, e hoje, trabalhando como desenvolvedor, tenho plena
                    certeza do meu futuro na carreira de desenvolvimento. Codar é minha paixão!
                    <br />
                    <br />
                    &emsp;&emsp;Desenvolvi vários sistemas de gestão na empresa onde trabalho, a maioria deles em
                    Django, criei imagens docker e estão todos em containers, no servidor da empresa. Criando assim um
                    pequeno ambiente de microsserviços. Tive experiência com desenvolvimento ágil. Fiz bootcamps de
                    aperfeiçoamento pessoal e profissional. Dentre as tecnologias com as quais tive mais contato estão:
                    React JS, Django, JavaScript, Python, HTML, CSS e Docker.
                </p>

                <button onClick={closeModal}>close</button>
            </Modal>
        </>
    );
};

export default CardContent;
