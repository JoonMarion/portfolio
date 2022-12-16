/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Modal from 'react-modal';
import './Modal.css';
import { IoClose } from 'react-icons/io5';
import { AiFillFileText } from 'react-icons/ai';
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
        <div>
            <div className="button-43-wrapper">
                <button className="button-43" role="button" onClick={openModal}>
                    <p className="button-43-content">
                        Sobre Mim <AiFillFileText className="margin-icon" size={18} />
                    </p>
                </button>
            </div>

            <Modal
                closeTimeoutMS={500}
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Sobre mim"
                style={{
                    overlay: {
                        backgroundColor: '#0d1117',
                    },

                    content: {
                        marginTop: '3rem',
                        border: 'none',
                        background: '#0d1117',
                        WebkitOverflowScrolling: 'touch',
                        outline: 'none',
                        overflow: 'auto',
                        width: '100vw',
                    },
                }}
            >
                <div className="close-modal-button">
                    <IoClose size={35} onClick={() => closeModal(false)} color="white" />
                </div>
                <h2 className="centered">Sobre mim</h2>
                <br />
                <div className="centered">
                    <div className="modal-content-wrapper">
                        <h3>Início de tudo</h3>
                        <p className="secondary">
                            &emsp;&emsp;Desde muito novo sou aficionado por tecnologia, do hardware ao software. Meu pai
                            sempre precisou utilizar computador para trabalhar (possui uma microempresa de comunicação
                            visual), portanto, desde muito novo eu tenho certa intimidade com o computador propriamente
                            dito. Gostava de desmontar, montar, descobrir funcionalidades, jogar, personalizar, etc. Com
                            isso, aprendi sobre os componentes do computador e suas determinadas funções, além da
                            familiaridade com a forma intuitiva de tratar a resolução de problemas por meio do
                            desenvolvimento da capacidade analítica.
                        </p>
                        <br />
                        <h3>Primeiro contato com a programação</h3>
                        <p className="secondary">
                            &emsp;&emsp;Meu primeiro contato com a programação foi na faculdade, na matéria de
                            Programação Estruturada, ministrada pelo professor Thiago Conte, na linguagem C. Lógica de
                            programação, estruturas condicionais e laços de repetição. A partir daí todas as dúvidas
                            acerca do meu futuro foram sanadas, passei a ter certeza do que queria para o resto da minha
                            vida, fiquei realmente encantado pela lógica e a resolução de problemas atrelada a
                            programação.
                        </p>
                        <br />
                        <h3>Qual meu foco no desenvolvimento?</h3>
                        <p className="secondary">
                            &emsp;&emsp;Até certo tempo atrás eu não fazia ideia de qual caminho seguir dentro da
                            programação, no entanto, dentro da empresa que performei, após desenvolver vários sistemas
                            web que tiveram êxito no objetivo, tive a plena certeza de qual área escolher. Tendo foco
                            total em desenvolvimento web, atualmente, realizo cursos, bootcamps, projetos e dedico
                            grande parte do meu tempo para me aperfeiçoar na área. Visite meu{' '}
                            <a
                                className="link-hover"
                                href="https://github.com/JoonMarion"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>{' '}
                            para ver alguns projetos que desenvolvi e meu progresso de atividades.
                        </p>
                        <br />
                        <h3>Experiência</h3>
                        <p className="secondary">
                            &emsp;&emsp;Desenvolvi vários sistemas de gestão e controle, que resultaram na otimização de
                            processos, a maioria deles em Django. Ademais, tive experiência com criação de imagens e
                            manipulação de containers Docker, para realização de deploy no servidor da empresa, criando
                            um pequeno ambiente de microsserviços. Além disso, tive contato com a criação de
                            documentação dos sistemas da empresa (diagramas, casos de uso, manual de usuário, etc) para
                            facilitar a manutenibilidade. Tive experiência com desenvolvimento ágil e boas práticas de
                            Engenharia de Software. Fiz bootcamps de aperfeiçoamento pessoal e profissional. Dentre as
                            tecnologias com as quais tive mais contato estão: React JS, Django, JavaScript, Python,
                            HTML, CSS, Docker e os bancos MySQL e MongoDB.
                        </p>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default CardContent;
