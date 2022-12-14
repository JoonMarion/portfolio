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
            <div className="centered">
                <button className="button-43" role="button" onClick={openModal}>
                    <p className="centered">
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
                        backgroundImage: 'url("https://readyplayer.me/images/home/bg-noise.png")',
                        backgroundRepeat: 'reapeat-y',
                        backgroundColor: 'rgba(19, 41, 61, 0.8)',
                    },
                    content: {
                        marginTop: '3rem',
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
                    <IoClose size={35} onClick={() => closeModal(false)} color="white" />
                </div>
                <h2 className="primary centered">Sobre mim</h2>
                <br />
                <h3>Início de tudo</h3>
                <p>
                    &emsp;&emsp;Desde muito novo eu sou apaixonado por tecnologia, do hardware ao software. Meu pai
                    sempre precisou utilizar computador para trabalhar, então, desde muito novo eu tenho certa
                    intimidade com o computador. Gostava de desmontar e montar, descobrir funcionalidades, jogar, etc.
                    Com isso, aprendi sobre os componentes do computador e suas funções, além da familiaridade e a forma
                    intuitiva de tratar a tecnologia.
                </p>
                <br />
                <h3>Primeiro contato com a programação</h3>
                <p>
                    &emsp;&emsp;Meu primeiro contato com a programação foi na faculdade, na matéria de Programação
                    Estruturada, que foi ministrada pelo professor Thiago Conte, na linguagem C, onde vimos lógica de
                    programação, estruturas condicionais e laços de repetição. A partir daí passei a ter certeza do que
                    queria para o resto da minha vida, fiquei realmente encantado pela lógica e a resolução de problemas
                    atrelada a programação.
                </p>
                <br />
                <h3>Qual meu foco no desenvolvimento?</h3>
                <p>
                    &emsp;&emsp;Até certo tempo atrás eu não fazia ideia de qual caminho seguir dentro da programação,
                    no entanto, dentro da empresa que performei, consegui me encontrar. Tendo foco total em
                    desenvolvimento web, atualmente, realizo cursos, bootcamps, realizo projetos e dedico grande parte
                    do meu tempo para me aperfeiçoar na área. Visite meu GitHub para ver alguns projetos que desenvolvi
                    e meu progresso de atividades.
                </p>
                <br />
                <h3>Experiência</h3>
                <p>
                    &emsp;&emsp;Desenvolvi vários sistemas de gestão na empresa onde estagio, a maioria deles em Django.
                    Ademais, tive experiência com criação de imagens Docker, manipulação de containers Docker, onde foi
                    realizado o deploy no servidor da empresa. Dessa forma, criando um pequeno ambiente de
                    microsserviços. Além disso, tive contato com a criação de documentação dos sistemas da empresa
                    (diagramas, casos de uso, manual de usuário, etc) para facilitar a manutenibilidade. Tive
                    experiência com desenvolvimento ágil. Fiz bootcamps de aperfeiçoamento pessoal e profissional.
                    Dentre as tecnologias com as quais tive mais contato estão: React JS, Django, JavaScript, Python,
                    HTML, CSS e Docker.
                </p>
            </Modal>
        </div>
    );
};

export default CardContent;
