import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { FiArrowDownRight, FiArrowLeft, FiArrowRight, FiArrowUpRight, FiCode, FiFileText, FiGithub, FiGrid, FiHome, FiLayers, FiLinkedin, FiMail, FiSend, FiUser } from 'react-icons/fi';
import portrait from './assets/me.jpg';
import { projects, projectCount, projectHref, projectSlugFromHash } from './data/projects';
import ProjectDetails, { ProjectNotFound } from './components/projectDetails/ProjectDetails';
import './App.css';

const resumeUrl = `${process.env.PUBLIC_URL}/Curriculo_Joao_Mariano.pdf`;

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
            <a className="project-card__image project-card__image--cover" href={projectHref(project.slug)} tabIndex={active ? 0 : -1} aria-label={`Ver detalhes de ${project.title}`}>
                <img src={project.image} alt={project.imageAlt} width={project.assets.cover.width} height={project.assets.cover.height} loading={active ? 'eager' : 'lazy'} />
                <span className="project-card__image-arrow" aria-hidden="true"><FiArrowRight /></span>
            </a>
            <div className="project-card__body">
                <div className="project-card__meta"><span>{project.category}</span><span>{project.number} / {projectCount}</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-card__footer">
                    <div className="project-card__tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                    <a className="project-card__action" href={projectHref(project.slug)} tabIndex={active ? 0 : -1} aria-label={`Conhecer o projeto ${project.title}`}>Ver detalhes <FiArrowRight aria-hidden="true" /></a>
                </div>
            </div>
        </article>
    );
}

function ProjectCarousel({ activeIndex, setActiveIndex }) {
    const viewportRef = useRef(null);
    const gesture = useRef(null);
    const suppressClick = useRef(false);
    const total = projects.length;
    const current = projects[activeIndex];
    const goTo = index => {
        setActiveIndex((index + total) % total);
        if (viewportRef.current?.contains(document.activeElement)) {
            viewportRef.current.focus({ preventScroll: true });
        }
    };

    const handlePointerDown = event => {
        suppressClick.current = false;
        if (!event.isPrimary || event.button !== 0 || event.target.closest('button, .project-card__action')) return;
        gesture.current = { id: event.pointerId, x: event.clientX, y: event.clientY, dragging: false };
    };
    const handlePointerMove = event => {
        const start = gesture.current;
        if (!start || start.id !== event.pointerId) return;
        const distance = event.clientX - start.x;
        const verticalDistance = event.clientY - start.y;
        if (!start.dragging) {
            if (Math.abs(verticalDistance) > 10 && Math.abs(verticalDistance) > Math.abs(distance)) {
                gesture.current = null;
                return;
            }
            if (Math.abs(distance) < 8 || Math.abs(distance) < Math.abs(verticalDistance) * 1.2) return;
            start.dragging = true;
            event.currentTarget.setPointerCapture(event.pointerId);
            event.currentTarget.dataset.dragging = 'true';
        }
        event.preventDefault();
        const drag = Math.max(-180, Math.min(180, distance * 0.7));
        event.currentTarget.style.setProperty('--carousel-drag', `${drag}px`);
    };
    const finishGesture = event => {
        const start = gesture.current;
        if (!start || start.id !== event.pointerId) return;
        gesture.current = null;
        const viewport = event.currentTarget;
        delete viewport.dataset.dragging;
        viewport.style.removeProperty('--carousel-drag');
        if (viewport.hasPointerCapture(event.pointerId)) viewport.releasePointerCapture(event.pointerId);
        suppressClick.current = start.dragging;
        const distance = event.clientX - start.x;
        if (event.type === 'pointerup' && start.dragging && Math.abs(distance) > 45) {
            goTo(activeIndex + (distance < 0 ? 1 : -1));
        }
    };
    const handleKeyDown = event => {
        if (event.key === 'ArrowRight') { event.preventDefault(); goTo(activeIndex + 1); }
        if (event.key === 'ArrowLeft') { event.preventDefault(); goTo(activeIndex - 1); }
    };

    return (
        <div className="project-carousel" role="region" aria-roledescription="carrossel" aria-label="Projetos selecionados" onKeyDown={handleKeyDown}>
            <div className="project-carousel__topline"><span>EXPLORAR PROJETOS / 01—{projectCount}</span><span>Arraste ou use as setas <FiArrowRight aria-hidden="true" /></span></div>
            <div
                className="project-carousel__viewport"
                ref={viewportRef}
                tabIndex={0}
                aria-label="Use as setas do teclado ou arraste para explorar os projetos"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={finishGesture}
                onPointerCancel={finishGesture}
                onLostPointerCapture={event => {
                    if (event.target === event.currentTarget) finishGesture(event);
                }}
                onDragStart={event => event.preventDefault()}
                onClickCapture={event => {
                    if (!suppressClick.current) return;
                    suppressClick.current = false;
                    event.preventDefault();
                    event.stopPropagation();
                }}
            >
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
                            role="group"
                            aria-roledescription="slide"
                            aria-label={`${project.number} de ${total}: ${project.title}`}
                            aria-hidden={!active}
                            style={{
                                '--carousel-x': `${offset * 100}%`,
                                '--carousel-gap': `${offset * 24}px`,
                                '--carousel-scale': active ? 1 : 0.92,
                                '--carousel-opacity': active ? 1 : distance === 1 ? 0.4 : 0,
                                zIndex: active ? 2 : 1,
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
                    <strong>{current.number} <span>/ {projectCount}</span></strong>
                    <span>{current.title} · Em produção</span>
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

function HomePage({ activeProject, setActiveProject }) {
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
                        <div className="hero__visual-tag"><span className="hero__visual-tag-icon"><FiCode /></span><span>DJANGO · REACT<small>SISTEMAS EM PRODUÇÃO</small></span></div>
                    </div>
                    <div className="hero__inner page-container">
                        <div className="hero__copy">
                            <p className="eyebrow hero__eyebrow"><span className="status-dot" /> JOÃO MARIANO / FULL STACK DEVELOPER</p>
                            <h1 id="hero-title">Lógica sólida<span className="hero__period">.</span><br /><span className="hero__gradient-text">Interfaces vivas.</span></h1>
                            <p className="hero__intro">Transformo problemas complexos em sistemas claros — do fluxo do negócio ao que precisa funcionar em produção.</p>
                            <div className="hero__actions">
                                <a className="button button--accent" href="#projetos">Explorar projetos <FiArrowDownRight aria-hidden="true" /></a>
                                <a className="button button--outline" href="#contato">Entrar em contato <FiArrowUpRight aria-hidden="true" /></a>
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
                    <SectionHeading index="01 /" eyebrow="PROJETOS EM PRODUÇÃO" title={<span id="projects-title">Projetos reais.<br /><em>Software em uso.</em></span>} description="Sistemas em uso por clientes reais. Conheça o contexto, as decisões e as interfaces de cada solução." />
                    <ProjectCarousel activeIndex={activeProject} setActiveIndex={setActiveProject} />
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
                        <h2 id="contact-title">O próximo<br /><em>passo</em><br />é um e-mail<span>.</span></h2>
                        <div className="contact-section__bottom">
                            <a className="contact-email" href="mailto:marianojoao52@gmail.com?subject=Vamos%20conversar%2C%20Jo%C3%A3o">marianojoao52@gmail.com <FiArrowUpRight aria-hidden="true" /></a>
                            <p>Fortaleza, Ceará · Brasil<br />Quanto mais contexto, melhor.</p>
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

const portfolioTitle = 'João Mariano — Desenvolvedor Full Stack';
const portfolioDescription = 'João Mariano é desenvolvedor web full stack. Conheça seus projetos, experiência com Python, Django e React e entre em contato.';

function App() {
    const [hash, setHash] = useState(() => window.location.hash);
    const [activeProject, setActiveProject] = useState(0);
    const previousPage = useRef({ initial: true, detail: false });
    const slug = projectSlugFromHash(hash);
    const projectIndex = projects.findIndex(item => item.slug === slug);
    const project = projects[projectIndex];

    useEffect(() => {
        const onHashChange = () => setHash(window.location.hash);
        window.addEventListener('hashchange', onHashChange);
        return () => window.removeEventListener('hashchange', onHashChange);
    }, []);

    useLayoutEffect(() => {
        const detail = slug !== null;
        const restoreHome = previousPage.current.initial || previousPage.current.detail;
        document.title = detail ? `${project?.name || 'Projeto não encontrado'} — João Mariano` : portfolioTitle;
        document.querySelector('meta[name="description"]')?.setAttribute('content', project?.shortDescription || portfolioDescription);
        if (project) setActiveProject(projectIndex);
        if (detail) {
            window.scrollTo({ top: 0, behavior: 'instant' });
            document.querySelector('[data-route-title]')?.focus({ preventScroll: true });
        } else if (restoreHome) {
            const target = hash ? hash.slice(1) : previousPage.current.detail ? 'projetos' : 'inicio';
            const section = document.getElementById(target);
            section?.scrollIntoView({ behavior: 'instant', block: 'start' });
            if (previousPage.current.detail) {
                const heading = section?.querySelector('h1, h2');
                heading?.setAttribute('tabindex', '-1');
                heading?.focus({ preventScroll: true });
            }
        }
        previousPage.current = { initial: false, detail };
    }, [hash, slug, project, projectIndex]);

    if (slug !== null) {
        const navigation = <SideNavigation activeSection="projetos" />;
        return project
            ? <ProjectDetails key={project.slug} project={project} nextProject={projects[(projectIndex + 1) % projects.length]} navigation={navigation} />
            : <ProjectNotFound navigation={navigation} />;
    }
    return <HomePage activeProject={activeProject} setActiveProject={setActiveProject} />;
}

export default App;
