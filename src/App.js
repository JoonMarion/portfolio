import { useEffect, useRef, useState } from 'react';
import { FiArrowDownRight, FiArrowLeft, FiArrowRight, FiArrowUpRight, FiCode, FiFileText, FiGithub, FiGrid, FiHome, FiLayers, FiLinkedin, FiMail, FiSend, FiUser } from 'react-icons/fi';
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

const navigation = [
    { id: 'inicio', label: 'Início', Icon: FiHome },
    { id: 'projetos', label: 'Projetos', Icon: FiGrid },
    { id: 'experiencia', label: 'Experiência', Icon: FiLayers },
    { id: 'sobre', label: 'Sobre', Icon: FiUser },
    { id: 'contato', label: 'Contato', Icon: FiSend },
];

function SideNavigation({ activeSection }) {
    return (
        <aside className="navigation-rail">
            <a className="navigation-rail__brand" href="#inicio" aria-label="João Mariano, voltar ao início">JM<span>.</span></a>
            <nav className="navigation-rail__links" aria-label="Navegação principal">
                {navigation.map(({ id, label, Icon }) => (
                    <a key={id} href={`#${id}`} className={activeSection === id ? 'is-active' : ''} aria-label={label} aria-current={activeSection === id ? 'location' : undefined}>
                        <Icon aria-hidden="true" /><span>{label}</span>
                    </a>
                ))}
            </nav>
            <div className="navigation-rail__external">
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer" aria-label="Abrir currículo em PDF"><FiFileText aria-hidden="true" /><span className="sr-only">Currículo</span></a>
                <a href="https://github.com/JoonMarion" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub aria-hidden="true" /><span className="sr-only">GitHub</span></a>
                <a href="https://www.linkedin.com/in/joaomariano-dev/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin aria-hidden="true" /><span className="sr-only">LinkedIn</span></a>
            </div>
        </aside>
    );
}

function SectionHeading({ index, eyebrow, title, description }) {
    return (
        <div className="section-heading" data-reveal>
            <div className="section-heading__label"><span>{index}</span>{eyebrow}</div>
            <div className="section-heading__main">
                <h2>{title}</h2>
                {description && <p>{description}</p>}
            </div>
        </div>
    );
}

function ProjectCard({ project, active }) {
    return (
        <article className="project-card">
            <div className="project-card__image">
                <div className="project-card__chrome" aria-hidden="true"><span /><span /><span /><small>preview / {project.number}</small></div>
                <img src={project.image} alt={project.imageAlt} loading={active ? 'eager' : 'lazy'} />
                <span className="project-card__image-index">/{project.number}</span>
                {project.url && <span className="project-card__image-arrow" aria-hidden="true"><FiArrowUpRight /></span>}
            </div>
            <div className="project-card__body">
                <div className="project-card__meta"><span>{project.category}</span><span>{project.number} / 07</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-card__footer">
                    <div className="project-card__tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                    {project.url ? (
                        <a className="project-card__action" href={project.url} target="_blank" rel="noopener noreferrer" tabIndex={active ? 0 : -1} aria-label={`Abrir ${project.title} em uma nova aba`}>Ver projeto <FiArrowUpRight aria-hidden="true" /></a>
                    ) : <span className="project-card__action project-card__action--private">Projeto privado</span>}
                </div>
            </div>
        </article>
    );
}

function ProjectCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const touchStart = useRef(null);
    const total = projects.length;
    const current = projects[activeIndex];
    const goTo = index => setActiveIndex((index + total) % total);

    const handleTouchStart = event => { touchStart.current = event.touches[0].clientX; };
    const handleTouchEnd = event => {
        if (touchStart.current === null) return;
        const distance = event.changedTouches[0].clientX - touchStart.current;
        if (Math.abs(distance) > 45) goTo(activeIndex + (distance < 0 ? 1 : -1));
        touchStart.current = null;
    };
    const handleKeyDown = event => {
        if (event.key === 'ArrowRight') { event.preventDefault(); goTo(activeIndex + 1); }
        if (event.key === 'ArrowLeft') { event.preventDefault(); goTo(activeIndex - 1); }
    };

    return (
        <div className="project-carousel" aria-label="Carrossel 3D de projetos" onKeyDown={handleKeyDown}>
            <div className="project-carousel__topline"><span>EXPLORAR PROJETOS / 01—07</span><span>Arraste ou use as setas <FiArrowRight aria-hidden="true" /></span></div>
            <div className="project-carousel__viewport" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                <div className="project-carousel__orbit" aria-hidden="true" />
                {projects.map((project, index) => {
                    let offset = index - activeIndex;
                    if (offset > total / 2) offset -= total;
                    if (offset < -total / 2) offset += total;
                    const distance = Math.abs(offset);
                    const active = offset === 0;
                    return (
                        <div
                            key={project.number}
                            className={`project-carousel__slot ${active ? 'is-active' : distance === 1 ? 'is-neighbor' : 'is-distant'}`}
                            aria-hidden={!active}
                            style={{
                                '--carousel-x': `${offset * 70}%`,
                                '--carousel-z': `${active ? 110 : distance === 1 ? -90 : -240}px`,
                                '--carousel-rotation': `${offset * -28}deg`,
                                '--carousel-scale': active ? 1 : distance === 1 ? 0.79 : 0.62,
                                '--carousel-opacity': active ? 1 : distance === 1 ? 0.82 : 0,
                                zIndex: 10 - distance,
                            }}
                            onClick={event => {
                                if (active) return;
                                event.preventDefault();
                                goTo(index);
                            }}
                        >
                            <ProjectCard project={project} active={active} />
                        </div>
                    );
                })}
            </div>
            <div className="project-carousel__controls">
                <button type="button" className="project-carousel__arrow" aria-label="Projeto anterior" onClick={() => goTo(activeIndex - 1)}><FiArrowLeft aria-hidden="true" /></button>
                <div className="project-carousel__readout" aria-live="polite" aria-atomic="true">
                    <strong>{current.number} <span>/ 07</span></strong>
                    <span>{current.title} · {current.featured ? 'Sistema real' : 'Projeto de estudo'}</span>
                </div>
                <button type="button" className="project-carousel__arrow" aria-label="Próximo projeto" onClick={() => goTo(activeIndex + 1)}><FiArrowRight aria-hidden="true" /></button>
            </div>
            <div className="project-carousel__pagination" aria-label="Escolher projeto">
                {projects.map((project, index) => (
                    <button key={project.number} type="button" className={index === activeIndex ? 'is-active' : ''} aria-label={`Mostrar projeto ${project.number}: ${project.title}`} aria-current={index === activeIndex ? 'true' : undefined} onClick={() => goTo(index)}><span /></button>
                ))}
            </div>
        </div>
    );
}

const capabilities = [
    { number: '01 / FRONT-END', Icon: FiGrid, title: 'Interfaces com intenção', detail: 'React, TypeScript e atenção a cada interação, estado e detalhe visual.' },
    { number: '02 / BACK-END', Icon: FiCode, title: 'Lógica que sustenta', detail: 'Python, Django e integrações para transformar fluxos complexos em software confiável.' },
    { number: '03 / ENTREGA', Icon: FiLayers, title: 'Do código à produção', detail: 'Testes, Docker e colaboração para fazer a solução funcionar no mundo real.' },
];

function CapabilityCard({ item }) {
    const cardRef = useRef(null);
    const onMove = event => {
        if (event.pointerType === 'touch' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const rect = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        cardRef.current?.style.setProperty('--rotate-y', `${x * 9}deg`);
        cardRef.current?.style.setProperty('--rotate-x', `${-y * 9}deg`);
        cardRef.current?.style.setProperty('--shine-x', `${(x + 0.5) * 100}%`);
        cardRef.current?.style.setProperty('--shine-y', `${(y + 0.5) * 100}%`);
    };
    const onLeave = () => {
        cardRef.current?.style.setProperty('--rotate-y', '0deg');
        cardRef.current?.style.setProperty('--rotate-x', '0deg');
    };
    return (
        <article className="capability-card" ref={cardRef} onPointerMove={onMove} onPointerLeave={onLeave}>
            <div className="capability-card__top"><span>{item.number}</span><item.Icon aria-hidden="true" /></div>
            <div><h3>{item.title}</h3><p>{item.detail}</p></div>
        </article>
    );
}

function App() {
    const [activeSection, setActiveSection] = useState('inicio');
    const portraitRef = useRef(null);

    useEffect(() => {
        let frame;
        const updateActiveSection = () => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(() => {
                const marker = window.scrollY + window.innerHeight * 0.36;
                const current = [...navigation].reverse().find(({ id }) => {
                    const section = document.getElementById(id);
                    return section && section.offsetTop <= marker;
                });
                setActiveSection(current?.id || 'inicio');
            });
        };
        updateActiveSection();
        window.addEventListener('scroll', updateActiveSection, { passive: true });
        window.addEventListener('resize', updateActiveSection);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('scroll', updateActiveSection);
            window.removeEventListener('resize', updateActiveSection);
        };
    }, []);

    useEffect(() => {
        const targets = document.querySelectorAll('[data-reveal]');
        if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            targets.forEach(target => target.classList.add('is-visible'));
            return;
        }
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
        targets.forEach(target => observer.observe(target));
        return () => observer.disconnect();
    }, []);

    const movePortrait = event => {
        if (!portraitRef.current || event.pointerType === 'touch' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        portraitRef.current.style.setProperty('--pointer-x', `${x * 10}px`);
        portraitRef.current.style.setProperty('--tilt-y', `${x * 6}deg`);
        portraitRef.current.style.setProperty('--tilt-x', `${-y * 4}deg`);
    };

    const resetPortrait = () => {
        portraitRef.current?.style.setProperty('--pointer-x', '0px');
        portraitRef.current?.style.setProperty('--tilt-y', '0deg');
        portraitRef.current?.style.setProperty('--tilt-x', '0deg');
    };

    return (
        <div className="site-shell" id="inicio">
            <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
            <SideNavigation activeSection={activeSection} />
            <header className="site-header">
                <a className="brand" href="#inicio" aria-label="João Mariano, início">
                    <span className="brand__mark">JM<span>.</span></span>
                    <span className="brand__name">JOÃO MARIANO <small>DESENVOLVEDOR FULL STACK</small></span>
                </a>
                <div className="site-header__right"><span className="site-header__signal"><i /> PORTFÓLIO / 2026</span><a href={resumeUrl} target="_blank" rel="noopener noreferrer">Currículo <FiArrowUpRight aria-hidden="true" /></a></div>
            </header>

            <main id="conteudo">
                <section className="hero" aria-labelledby="hero-title" onPointerMove={movePortrait} onPointerLeave={resetPortrait}>
                    <div className="hero__grid" aria-hidden="true" />
                    <div className="hero__visual" ref={portraitRef} aria-hidden="true">
                        <div className="hero__halo" />
                        <div className="hero__portrait-reveal">
                            <div className="hero__portrait-float"><img src={portrait} alt="" fetchPriority="high" /></div>
                        </div>
                        <div className="hero__visual-tag"><span className="hero__visual-tag-icon"><FiCode /></span><span>UI × ENGINEERING<small>PRECISION IN EVERY PIXEL</small></span></div>
                    </div>
                    <div className="hero__inner page-container">
                        <div className="hero__copy">
                            <p className="eyebrow hero__eyebrow"><span className="status-dot" /> JOÃO MARIANO / FULL STACK DEVELOPER</p>
                            <h1 id="hero-title">Lógica sólida<span className="hero__period">.</span><br /><span className="hero__gradient-text">Interfaces vivas.</span></h1>
                            <p className="hero__intro">Transformo problemas complexos em experiências digitais claras e marcantes — do React na interface ao Django que sustenta tudo.</p>
                            <div className="hero__actions">
                                <a className="button button--accent" href="#projetos">Explorar projetos <FiArrowDownRight aria-hidden="true" /></a>
                                <a className="button button--outline" href="#contato">Vamos conversar <FiArrowUpRight aria-hidden="true" /></a>
                            </div>
                        </div>
                        <div className="hero__bottom">
                            <span>01 / 04 &nbsp; SISTEMA INICIADO</span>
                            <a href="#projetos">DESLIZE PARA EXPLORAR <FiArrowDownRight aria-hidden="true" /></a>
                            <span>FORTALEZA, BRASIL &nbsp; / &nbsp; 03°43′ S</span>
                        </div>
                    </div>
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
                    <SectionHeading index="01 /" eyebrow="TRABALHOS SELECIONADOS" title={<span id="projects-title">Ideias que viraram<br /><em>software.</em></span>} description="Soluções de gestão e experimentos que mostram como penso, construo e evoluo produtos digitais." />
                    <ProjectCarousel />
                </section>

                <section className="section experience-section" id="experiencia" aria-labelledby="experience-title">
                    <div className="page-container">
                        <SectionHeading index="02 /" eyebrow="TRAJETÓRIA" title={<span id="experience-title">Código em produção.<br /><em>Experiência real.</em></span>} description="De interfaces a sistemas completos: uma trajetória construída com produto, engenharia e colaboração." />
                        <div className="experience-layout">
                            <div className="experience-aside">
                                <span className="eyebrow">MINHA LINHA DO TEMPO</span>
                                <p>Construindo software útil, com atenção ao que acontece antes e depois do deploy.</p>
                                <a className="text-link" href={resumeUrl} target="_blank" rel="noopener noreferrer">Ver currículo completo <FiArrowUpRight aria-hidden="true" /></a>
                            </div>
                            <div className="timeline">
                                {experience.map((job, index) => (
                                    <article className="timeline__item" key={job.company} data-reveal>
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
                    <SectionHeading index="03 /" eyebrow="POR TRÁS DO CÓDIGO" title={<span id="about-title">Engenharia com<br /><em>olhar de produto.</em></span>} />
                    <div className="about-grid">
                        <div className="about-statement"><span className="about-asterisk">✳</span><p>Gosto de entender o problema por inteiro, encontrar a solução certa e cuidar dos detalhes que fazem a diferença no uso diário.</p></div>
                        <div className="about-details">
                            <p>Sou graduado em Engenharia de Software pela Universidade do Estado do Pará. Minha atuação passa por desenvolvimento full stack, arquitetura de aplicações, integrações e qualidade de software.</p>
                            <p>Hoje trabalho principalmente com Python e Django, criando sistemas de gestão, fluxos assíncronos e interfaces que tornam processos complexos mais simples para as pessoas.</p>
                            <div className="about-note"><span>ALÉM DO TRABALHO</span><p>Fui finalista da Maratona SBC de Programação em 2023. Resolver problemas continua sendo uma das partes que mais gosto do desenvolvimento.</p></div>
                        </div>
                    </div>
                    <div className="capability-grid" aria-label="Áreas de atuação">
                        {capabilities.map(item => <CapabilityCard key={item.number} item={item} />)}
                    </div>
                    <div className="stack-block">
                        <span className="eyebrow">TECNOLOGIAS &amp; PRÁTICAS</span>
                        <div className="stack-list">{['Python', 'Django', 'Django REST Framework', 'JavaScript', 'TypeScript', 'React', 'HTMX', 'Celery', 'MySQL', 'Docker', 'Git', 'Testes automatizados'].map(item => <span key={item}>{item}</span>)}</div>
                    </div>
                </section>

                <section className="contact-section" id="contato" aria-labelledby="contact-title">
                    <div className="page-container contact-section__inner">
                        <p className="eyebrow"><span className="status-dot" /> 04 / VAMOS CONVERSAR</p>
                        <h2 id="contact-title">Vamos construir<br /><em>algo incrível</em><br />juntos<span>.</span></h2>
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
