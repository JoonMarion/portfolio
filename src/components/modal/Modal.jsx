/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Modal from 'react-modal';
import './Modal.css';
import { IoClose } from 'react-icons/io5';
import { useEffect } from 'react';

const CardContent = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    function closeModal() {
        setIsOpen(false);
    }

    useEffect(() => {
        const body = document.querySelector('body');
        body.style.overflow = modalIsOpen ? 'hidden' : 'auto';
    }, [modalIsOpen]);

    return (
        <>
            <a className="primary link-hover" onClick={openModal}>
                Ler mais sobre mim...
            </a>

            <Modal
                closeTimeoutMS={500}
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Sobre mim"
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: 'url("https://readyplayer.me/images/home/bg-noise.png")',
                        backgroundRepeat: 'reapeat-y',
                        backgroundColor: 'rgb(50, 51, 62, 0.8)',
                    },
                    content: {
                        marginTop: '3rem',
                        position: 'absolute',
                        top: '3rem',
                        left: '5%',
                        right: '5%',
                        bottom: '3rem',
                        border: 'none',
                        background: 'rgba(9, 20, 26)',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '1rem',
                        outline: 'none',
                        padding: '2rem',
                        overflow: 'auto',
                    },
                }}
            >
                <div className="close-modal-button">
                    <IoClose size={35} onClick={() => closeModal(false)} />
                </div>
                <h2 className="primary centered">Sobre mim</h2>
                <br />
                <h3>Primeiro contato</h3>
                <p>
                    &emsp;&emsp;Desenvolvi vários sistemas de gestão na empresa onde trabalho, a maioria deles em
                    Django, criei imagens docker e estão todos em containers, no servidor da empresa. Criando assim um
                    pequeno ambiente de microsserviços. Tive experiência com desenvolvimento ágil. Fiz bootcamps de
                    aperfeiçoamento pessoal e profissional. Dentre as tecnologias com as quais tive mais contato estão:
                    React JS, Django, JavaScript, Python, HTML, CSS e Docker.
                </p>
                <br />
                <h3>Experiência</h3>
                <p>
                    &emsp;&emsp;Desenvolvi vários sistemas de gestão na empresa onde trabalho, a maioria deles em
                    Django, criei imagens docker e estão todos em containers, no servidor da empresa. Criando assim um
                    pequeno ambiente de microsserviços. Tive experiência com desenvolvimento ágil. Fiz bootcamps de
                    aperfeiçoamento pessoal e profissional. Dentre as tecnologias com as quais tive mais contato estão:
                    React JS, Django, JavaScript, Python, HTML, CSS e Docker.
                </p>
            </Modal>
        </>
    );
};

export default CardContent;
