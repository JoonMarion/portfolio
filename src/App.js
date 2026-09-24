import { useEffect, useState } from 'react';
import { FiArrowDownRight, FiArrowRight, FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from 'react-icons/fi';
import portrait from './assets/me.jpg';
import agriAraujo from './assets/agriaraujo.jpeg';
import scheduling from './assets/SistemaAgendamento.jpeg';
import finances from './assets/finance-manage.jpeg';
import pokedex from './assets/pokedex.png';
import quiz from './assets/dev-quiz.jpeg';
import calculator from './assets/calculator.jpeg';
import instagram from './assets/instagram-login-clone.png';
import './App.css';

const resumeUrl = `${process.env.PUBLIC_URL}/Curriculo_Joao_Mariano.pdf`;

const projects = [
    { number: '01', title: 'AgriAraújo', category: 'Sistema de gestão', description: 'Uma operação inteira em um só lugar: clientes, estoque, compras, vendas, caixa, notas fiscais e relatórios.', image: agriAraujo, imageAlt: 'Tela do sistema de gestão AgriAraújo', tags: ['Django', 'Python', 'MySQL', 'Bootstrap'], featured: true },
    { number: '02', title: 'Sistema de Agendamento', category: 'Produto web', description: 'Agenda, clientes, equipe e caixa conectados em uma interface para simplificar a rotina do negócio.', image: scheduling, imageAlt: 'Tela do sistema de agendamento', tags: ['Django', 'Python', 'Bootstrap'], featured: true },
    { number: '03', title: 'Controle de Finanças', category: 'Projeto de estudo', description: 'Controle de entradas e saídas com categorias, totais e dados salvos no navegador.', image: finances, imageAlt: 'Interface do controle de finanças', tags: ['React', 'Styled Components', 'LocalStorage'], url: 'https://financemanage.netlify.app/' },
    { number: '04', title: 'Pokédex', category: 'Projeto de estudo', description: 'Exploração da PokéAPI com paginação e interface construída em JavaScript puro.', image: pokedex, imageAlt: 'Interface da Pokédex', tags: ['JavaScript', 'HTML', 'CSS', 'API'], url: 'https://joonmarion.github.io/pokedex/' },
    { number: '05', title: 'Quiz de Programação', category: 'Projeto de estudo', description: 'Um quiz interativo para testar conhecimentos de desenvolvimento.', image: quiz, imageAlt: 'Interface do quiz de programação', tags: ['React', 'Context API', 'CSS'], url: 'https://dev-js-quiz.netlify.app/' },
    { number: '06', title: 'Calculadora', category: 'Projeto de estudo', description: 'Uma calculadora feita para praticar componentes, estado e interações em React.', image: calculator, imageAlt: 'Interface da calculadora', tags: ['React', 'Styled Components'], url: 'https://reactcalculatorjs.netlify.app/' },
    { number: '07', title: 'Instagram Login Clone', category: 'Projeto de estudo', description: 'Estudo de layout responsivo e Flexbox a partir de uma tela de login conhecida.', image: instagram, imageAlt: 'Interface do clone da tela de login do Instagram', tags: ['HTML', 'CSS', 'Flexbox'], url: 'https://joonmarion.github.io/login-instagram/' },
];

const experience = [
    { period: '2025 — atual', role: 'Desenvolvedor Web', company: 'IntGest Inteligência e Gestão Tecnológica', details: 'Sistemas governamentais, documentos orçamentários, webhooks, tarefas assíncronas e atualizações em tempo real.' },
    { period: '2024 — 2025', role: 'Desenvolvedor Web', company: 'Mindz', details: 'Aplicações com Django, JavaScript e HTMX; otimização de consultas, autenticação, testes e Docker.' },
    { period: '2023 — 2024', role: 'Desenvolvedor Front-end', company: 'Brio Solução Digital', details: 'Evolução da plataforma Gaminífica com React e TypeScript, em colaboração com a equipe de back-end.' },
    { period: '2022', role: 'Desenvolvedor Web', company: 'Sea Telecom', details: 'Sistemas de controle completos, do desenho à produção, com Django, JavaScript e documentação técnica.' },
];

function SectionHeading({ index, eyebrow, title, description }) {
    return (
        <div className="section-heading">
            <div className="section-heading__label"><span>{index}</span>{eyebrow}</div>
            <div className="section-heading__main">
                <h2>{title}</h2>
                {description && <p>{description}</p>}
            </div>
        </div>
    );
}

function ProjectCard({ project }) {
    const content = (
        <>
            <div className="project-card__image">
                <img src={project.image} alt={project.imageAlt} loading="lazy" />
                <span className="project-card__image-index">/{project.number}</span>
                {project.url && <span className="project-card__image-arrow" aria-hidden="true"><FiArrowUpRight /></span>}
            </div>
            <div className="project-card__body">
                <div className="project-card__meta"><span>{project.category}</span><span>{project.number} / 07</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-card__footer">
                    <div className="project-card__tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                    <span className="project-card__action">{project.url ? 'Ver projeto' : 'Projeto privado'} {project.url && <FiArrowUpRight aria-hidden="true" />}</span>
                </div>
            </div>
        </>
    );

    return project.url ? (
        <a className={`project-card ${project.featured ? 'project-card--featured' : ''}`} href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Abrir ${project.title} em uma nova aba`}>{content}</a>
    ) : (
        <article className={`project-card ${project.featured ? 'project-card--featured' : ''}`}>{content}</article>
    );
}

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const closeOnEscape = (event) => { if (event.key === 'Escape') setMenuOpen(false); };
        window.addEventListener('keydown', closeOnEscape);
        return () => window.removeEventListener('keydown', closeOnEscape);
    }, []);

    const closeMenu = () => setMenuOpen(false);

    return (
        <div className="site-shell" id="inicio">
            <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
            <header className="site-header">
                <a className="brand" href="#inicio" onClick={closeMenu} aria-label="João Mariano, início">
                    <span className="brand__mark">JM<span>.</span></span>
                    <span className="brand__name">JOÃO MARIANO <small>DESENVOLVEDOR WEB</small></span>
                </a>
                <nav className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`} id="primary-navigation" aria-label="Navegação principal">
                    <a href="#projetos" onClick={closeMenu}>Projetos</a>
                    <a href="#experiencia" onClick={closeMenu}>Experiência</a>
                    <a href="#sobre" onClick={closeMenu}>Sobre</a>
                    <a href="#contato" onClick={closeMenu}>Contato</a>
                    <a className="site-nav__resume" href={resumeUrl} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Currículo <FiArrowUpRight aria-hidden="true" /></a>
                </nav>
                <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(value => !value)}>{menuOpen ? <FiX /> : <FiMenu />}</button>
            </header>

            <main id="conteudo">
                <section className="hero" aria-labelledby="hero-title">
                    <div className="hero__image" aria-hidden="true"><img src={portrait} alt="" fetchPriority="high" /></div>
                    <div className="hero__grain" aria-hidden="true" />
                    <div className="hero__inner page-container">
                        <div className="hero__copy">
                            <p className="eyebrow hero__eyebrow"><span className="status-dot" /> DESENVOLVEDOR FULL STACK · FORTALEZA, BR</p>
                            <h1 id="hero-title">Código com<br /><em>propósito.</em><br />Impacto real<span className="hero__period">.</span></h1>
                            <p className="hero__intro">Sou João Mariano. Transformo processos complexos em experiências digitais claras, eficientes e prontas para o mundo real.</p>
                            <div className="hero__actions">
                                <a className="button button--lime" href="#projetos">Explorar projetos <FiArrowDownRight aria-hidden="true" /></a>
                                <a className="button button--outline" href="#contato">Vamos conversar <FiArrowUpRight aria-hidden="true" /></a>
                            </div>
                        </div>
                        <div className="hero__bottom">
                            <span>01 / 04 &nbsp; PORTFÓLIO 2026</span>
                            <a href="#projetos">SCROLL PARA EXPLORAR <FiArrowDownRight aria-hidden="true" /></a>
                            <span>DESIGN &amp; ENGENHARIA</span>
                        </div>
                    </div>
                    <span className="hero__vertical" aria-hidden="true">JOÃO MARIANO / FULL STACK DEVELOPER</span>
                </section>

                <div className="proof-strip" aria-label="Resumo profissional">
                    <div className="page-container proof-strip__inner">
                        <div><strong>Desde 2022</strong><span>construindo para a web</span></div>
                        <div><strong>Full stack</strong><span>do produto à produção</span></div>
                        <div><strong>UEPA</strong><span>Engenharia de Software</span></div>
                        <div><strong>Finalista SBC</strong><span>Maratona de Programação 2023</span></div>
                    </div>
                </div>

                <section className="section projects-section page-container" id="projetos" aria-labelledby="projects-title">
                    <SectionHeading index="01 /" eyebrow="TRABALHOS SELECIONADOS" title={<span id="projects-title">Projetos que saem<br /><em>do papel.</em></span>} description="Soluções de gestão e experimentos que mostram como penso, construo e evoluo produtos digitais." />
                    <div className="projects-intro"><span>PROJETOS REAIS</span><span>01 — 02</span></div>
                    <div className="project-grid project-grid--featured">{projects.filter(project => project.featured).map(project => <ProjectCard key={project.number} project={project} />)}</div>
                    <div className="projects-intro projects-intro--study"><span>EXPLORAÇÕES &amp; ESTUDOS</span><span>03 — 07</span></div>
                    <div className="project-grid project-grid--study">{projects.filter(project => !project.featured).map(project => <ProjectCard key={project.number} project={project} />)}</div>
                </section>

                <section className="section experience-section" id="experiencia" aria-labelledby="experience-title">
                    <div className="page-container">
                        <SectionHeading index="02 /" eyebrow="TRAJETÓRIA" title={<span id="experience-title">Experiência que<br /><em>vira entrega.</em></span>} description="De interfaces a sistemas completos: uma trajetória construída com produto, engenharia e colaboração." />
                        <div className="experience-layout">
                            <div className="experience-aside">
                                <span className="eyebrow">MINHA LINHA DO TEMPO</span>
                                <p>Construindo software útil, com atenção ao que acontece antes e depois do deploy.</p>
                                <a className="text-link" href={resumeUrl} target="_blank" rel="noopener noreferrer">Ver currículo completo <FiArrowUpRight aria-hidden="true" /></a>
                            </div>
                            <div className="timeline">
                                {experience.map((job, index) => (
                                    <article className="timeline__item" key={job.company}>
                                        <span className="timeline__index">0{index + 1}</span>
                                        <div><span className="timeline__period">{job.period}</span><h3>{job.role}</h3><p className="timeline__company">{job.company}</p><p className="timeline__details">{job.details}</p></div>
                                        <FiArrowUpRight className="timeline__arrow" aria-hidden="true" />
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section about-section page-container" id="sobre" aria-labelledby="about-title">
                    <SectionHeading index="03 /" eyebrow="POR TRÁS DO CÓDIGO" title={<span id="about-title">Curiosidade técnica.<br /><em>Olhar de produto.</em></span>} />
                    <div className="about-grid">
                        <div className="about-statement"><span className="about-asterisk">✳</span><p>Gosto de entender o problema por inteiro, encontrar a solução certa e cuidar dos detalhes que fazem a diferença no uso diário.</p></div>
                        <div className="about-details">
                            <p>Sou graduado em Engenharia de Software pela Universidade do Estado do Pará. Minha atuação passa por desenvolvimento full stack, arquitetura de aplicações, integrações e qualidade de software.</p>
                            <p>Hoje trabalho principalmente com Python e Django, criando sistemas de gestão, fluxos assíncronos e interfaces que tornam processos complexos mais simples para as pessoas.</p>
                            <div className="about-note"><span>ALÉM DO TRABALHO</span><p>Fui finalista da Maratona SBC de Programação em 2023. Resolver problemas continua sendo uma das partes que mais gosto do desenvolvimento.</p></div>
                        </div>
                    </div>
                    <div className="stack-block">
                        <span className="eyebrow">TECNOLOGIAS &amp; PRÁTICAS</span>
                        <div className="stack-list">{['Python', 'Django', 'Django REST Framework', 'JavaScript', 'TypeScript', 'React', 'HTMX', 'Celery', 'MySQL', 'Docker', 'Git', 'Testes automatizados'].map(item => <span key={item}>{item}</span>)}</div>
                    </div>
                </section>

                <section className="contact-section" id="contato" aria-labelledby="contact-title">
                    <div className="page-container contact-section__inner">
                        <p className="eyebrow"><span className="status-dot" /> 04 / VAMOS CONVERSAR</p>
                        <h2 id="contact-title">Tem uma ideia?<br /><em>Vamos fazer</em><br />acontecer<span>.</span></h2>
                        <div className="contact-section__bottom">
                            <a className="contact-email" href="mailto:marianojoao52@gmail.com?subject=Vamos%20conversar%2C%20Jo%C3%A3o">marianojoao52@gmail.com <FiArrowUpRight aria-hidden="true" /></a>
                            <p>Fortaleza, Ceará · Brasil<br />Aberto a boas conversas e novos desafios.</p>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="site-footer">
                <div className="page-container site-footer__inner">
                    <a className="footer-logo" href="#inicio" aria-label="Voltar ao início">JM<span>.</span></a>
                    <span>© {new Date().getFullYear()} João Mariano</span>
                    <div className="footer-links">
                        <a href="https://www.linkedin.com/in/joaomariano-dev/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
                        <a href="https://github.com/JoonMarion" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub /></a>
                        <a href="mailto:marianojoao52@gmail.com" aria-label="Enviar e-mail"><FiMail /></a>
                        <a className="footer-back" href="#inicio">Voltar ao topo <FiArrowRight aria-hidden="true" /></a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
