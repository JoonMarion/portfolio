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
                            &emsp;&emsp;Desde muito jovem, sou apaixonado por tecnologia, tanto no que diz respeito ao
                            hardware quanto ao software. Desde cedo, tive uma familiaridade com o computador, já que meu
                            pai precisava usá-lo para trabalhar em sua microempresa de comunicação visual. Eu adorava
                            desmontar, montar, descobrir funcionalidades, jogar e personalizar o computador. Essa
                            experiência me permitiu aprender sobre os componentes do computador, suas funções
                            específicas e desenvolver habilidades analíticas para resolver problemas.
                        </p>
                        <br />
                        <h3>Primeiro contato com a programação</h3>
                        <p className="secondary">
                            &emsp;&emsp;Tive meu primeiro contato com a programação durante a faculdade, na disciplina
                            de Programação Estruturada, ministrada pelo professor Thiago Conte, utilizando a linguagem
                            C. Aprendi sobre lógica de programação, estruturas condicionais e loops. A partir desse
                            momento, todas as dúvidas sobre meu futuro foram esclarecidas, e tive a certeza do que
                            queria para o resto da minha vida. Fiquei verdadeiramente encantado pela lógica e pela
                            resolução de problemas que a programação proporciona.
                        </p>
                        <br />
                        <h3>Qual meu foco no desenvolvimento?</h3>
                        <p className="secondary">
                            &emsp;&emsp;Por um tempo, eu não tinha ideia de qual caminho seguir dentro da programação.
                            No entanto, ao trabalhar em uma empresa e desenvolver vários sistemas web bem-sucedidos,
                            tive a certeza de qual área escolher. Atualmente, meu foco principal é o desenvolvimento
                            web. Dedico grande parte do meu tempo a cursos, bootcamps, projetos e aprimoramento pessoal
                            nessa área. Você pode conferir alguns dos projetos que desenvolvi e meu progresso de
                            atividades no meu{' '}
                            <a
                                className="link-hover"
                                href="https://github.com/JoonMarion"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>{' '}
                            .
                        </p>
                        <br />
                        <h3>Experiência</h3>
                        <p className="secondary">
                            &emsp;&emsp;Ao longo da minha trajetória, desenvolvi sistemas de gestão e controle que
                            resultaram na otimização de processos, principalmente utilizando Django. Além disso, adquiri
                            experiência na criação e manipulação de imagens e contêineres Docker para fazer o deploy dos
                            sistemas no servidor da empresa, criando um ambiente de microsserviços. Também fui
                            responsável pela criação da documentação dos sistemas da empresa, incluindo diagramas, casos
                            de uso e manuais do usuário, visando facilitar a manutenção. Trabalhei com metodologias
                            ágeis e boas práticas de Engenharia de Software. Além disso, participei de bootcamps para
                            aprimoramento pessoal e profissional. Durante minha jornada, tive mais contato com
                            tecnologias como React, Django, JavaScript, TypeScript, Python, HTML, CSS, Docker, bancos de
                            dados MySQL e MongoDB.
                        </p>
                        <br />
                        <h3>Programação Competitiva</h3>
                        <p className="secondary">
                            &emsp;&emsp;Sou entusiasta de algoritmos e ciências exatas, com uma paixão pela tecnologia e
                            matemática. Minha dedicação e esforço nessa área me levaram a me destacar na renomada
                            competição{' '}
                            <a
                                className="link-hover"
                                href="https://maratonasbc2022.ufms.br/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Maratona de Programação
                            </a>
                            , onde minha equipe foi a melhor do estado do Pará e se classificou para a final brasileira.
                        </p>
                        <p className="secondary">
                            &emsp;&emsp;Atualmente, estou me aprimorando ainda mais na área da programação competitiva,
                            pois acredito que é uma excelente forma de desenvolver habilidades algorítmicas e melhorar
                            minha capacidade de resolver problemas complexos. Estou frequentando um curso específico de
                            programação competitiva, onde aprofundo meus conhecimentos em algoritmos e estruturas de
                            dados utilizando a linguagem C++.
                        </p>
                        <p className="secondary">
                            Além de estudar e praticar regularmente, também participo de contests, competições online
                            que simulam desafios da programação competitiva. Isso me permite testar minha capacidade em
                            um ambiente competitivo e me desafiar constantemente a encontrar soluções mais eficientes.
                        </p>
                        <p className="secondary">
                            Tenho como objetivo evoluir continuamente na área da programação competitiva, buscando
                            aprimorar minhas habilidades algorítmicas, aprender novos conceitos e técnicas, e conquistar
                            resultados cada vez melhores em competições. Acredito que essa jornada me proporcionará uma
                            base sólida de conhecimento e expertise, que poderei aplicar não apenas em competições, mas
                            também em projetos de desenvolvimento de software desafiadores.
                        </p>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default CardContent;
