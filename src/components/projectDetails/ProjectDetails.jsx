import { useEffect, useRef, useState } from 'react';
import { FiArrowLeft, FiArrowRight, FiArrowUpRight, FiCheck, FiChevronDown, FiGrid, FiMaximize2, FiMonitor, FiSmartphone, FiX } from 'react-icons/fi';
import { formatProjectDate, projectCount, projectHref } from '../../data/projects';
import './ProjectDetails.css';

const technologyGroups = [
    ['frontend', 'Interface'],
    ['backend', 'Servidor e integrações'],
    ['database', 'Dados'],
    ['infrastructure', 'Infraestrutura'],
    ['testing', 'Qualidade'],
];

function DetailHeader() {
    return (
        <header className="case-header page-container">
            <a href="#inicio" className="case-header__brand" aria-label="João Mariano, voltar ao início">JM<span>.</span><small>JOÃO MARIANO<br />DESENVOLVEDOR FULL STACK</small></a>
            <a href="#projetos" className="case-header__back"><FiGrid aria-hidden="true" /><span>Todos os projetos</span><FiArrowUpRight aria-hidden="true" /></a>
        </header>
    );
}

function ImageDialog({ image, onClose }) {
    const dialogRef = useRef(null);
    useEffect(() => {
        const dialog = dialogRef.current;
        const previousOverflow = document.body.style.overflow;
        const opener = document.activeElement;
        document.body.style.overflow = 'hidden';
        dialog.showModal();
        return () => {
            dialog.close();
            document.body.style.overflow = previousOverflow;
            opener?.focus({ preventScroll: true });
        };
    }, []);

    return (
        <dialog className="case-image-dialog" ref={dialogRef} aria-labelledby="case-image-title" onCancel={event => { event.preventDefault(); onClose(); }} onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
            <div className="case-image-dialog__panel">
                <div className="case-image-dialog__header">
                    <div><span className="case-label">TELA EM DETALHE</span><h2 id="case-image-title">{image.label}</h2></div>
                    <button type="button" className="case-icon-button" aria-label="Fechar imagem ampliada" onClick={onClose}><FiX aria-hidden="true" /></button>
                </div>
                <img src={image.src} alt={image.alt} width={image.width} height={image.height} />
                <div className="case-image-dialog__footer"><p>{image.alt}</p><a href={image.src} target="_blank" rel="noopener noreferrer">Abrir imagem original <FiArrowUpRight aria-hidden="true" /></a></div>
            </div>
        </dialog>
    );
}

function ProjectGallery({ project }) {
    const [selected, setSelected] = useState(0);
    const [expanded, setExpanded] = useState(null);
    const desktop = project.assets.desktop[selected];
    const mobile = project.assets.mobile[selected];
    const label = project.galleryLabels[selected];
    const expand = (image, device) => setExpanded({ ...image, label: `${label} · ${device}` });

    return (
        <section className="case-section case-gallery" id="telas" aria-labelledby="case-gallery-title">
            <div className="case-section__heading"><span className="case-label">03 / O PRODUTO EM USO</span><h2 id="case-gallery-title">Da visão geral<br /><em>ao menor detalhe.</em></h2><p>Explore a mesma rotina no computador e no celular. Toque em uma tela para ver de perto.</p></div>
            <div className="case-gallery__tabs" role="group" aria-label="Selecionar tela do projeto">
                {project.galleryLabels.map((item, index) => <button key={item} type="button" aria-pressed={selected === index} onClick={() => setSelected(index)}><span>0{index + 1}</span>{item}</button>)}
            </div>
            <div className="case-gallery__stage">
                <figure className="case-gallery__desktop">
                    <figcaption><span><FiMonitor aria-hidden="true" /> COMPUTADOR</span><span>0{selected + 1} / 03</span></figcaption>
                    <button type="button" className="case-gallery__image-button" onClick={() => expand(desktop, 'Computador')} aria-label={`Ampliar ${label} no computador`}>
                        <img key={desktop.src} src={desktop.src} alt={desktop.alt} width={desktop.width} height={desktop.height} loading="lazy" />
                        <span className="case-gallery__zoom" aria-hidden="true"><FiMaximize2 /> Ampliar tela</span>
                    </button>
                </figure>
                <figure className="case-gallery__mobile">
                    <figcaption><FiSmartphone aria-hidden="true" /> CELULAR</figcaption>
                    <button type="button" className="case-gallery__image-button" onClick={() => expand(mobile, 'Celular')} aria-label={`Ampliar ${label} no celular`}>
                        <img key={mobile.src} src={mobile.src} alt={mobile.alt} width={mobile.width} height={mobile.height} loading="lazy" />
                        <span className="case-gallery__zoom" aria-hidden="true"><FiMaximize2 /></span>
                    </button>
                </figure>
            </div>
            <div className="case-gallery__caption"><span aria-live="polite">{label} <span>— Interfaces reais com dados demonstrativos.</span></span><div><button type="button" className="case-icon-button" aria-label="Tela anterior" onClick={() => setSelected((selected + 2) % 3)}><FiArrowLeft aria-hidden="true" /></button><button type="button" className="case-icon-button" aria-label="Próxima tela" onClick={() => setSelected((selected + 1) % 3)}><FiArrowRight aria-hidden="true" /></button></div></div>
            {expanded && <ImageDialog image={expanded} onClose={() => setExpanded(null)} />}
        </section>
    );
}

export default function ProjectDetails({ project, nextProject, navigation }) {
    return (
        <div className="site-shell project-page">
            {navigation}
            <a className="skip-link" href={projectHref(project.slug)} onClick={event => { event.preventDefault(); document.getElementById('case-content').focus(); }}>Pular para o conteúdo</a>
            <DetailHeader />
            <main className="page-container case-content" id="case-content" tabIndex={-1}>
                <section className="case-hero" aria-labelledby="case-title">
                    <a className="case-back-link" href="#projetos"><FiArrowLeft aria-hidden="true" /> Voltar aos projetos</a>
                    <div className="case-hero__intro">
                        <div><p className="case-label">{project.number} / {projectCount} <span>PROJETO EM DETALHE</span></p><h1 id="case-title" data-route-title tabIndex={-1}>{project.name}<span>.</span></h1></div>
                        <div className="case-hero__summary"><span className="case-status"><i /> EM PRODUÇÃO</span><p>{project.shortDescription}</p></div>
                    </div>
                    <dl className="case-facts"><div><dt>CONTEXTO</dt><dd>{project.context}</dd></div><div><dt>PLATAFORMA</dt><dd>{project.platform}</dd></div><div><dt>{project.creationDate.isEstimated ? 'INÍCIO ESTIMADO' : 'INÍCIO'}</dt><dd>{formatProjectDate(project.creationDate)}</dd></div></dl>
                    <figure className="case-cover"><img src={project.assets.cover.src} alt={project.assets.cover.alt} width={project.assets.cover.width} height={project.assets.cover.height} fetchPriority="high" /><figcaption><span>{project.category}</span><span>SOFTWARE PARA UMA ROTINA REAL</span></figcaption></figure>
                </section>

                <section className="case-section case-context" aria-labelledby="case-context-title">
                    <div className="case-section__heading"><span className="case-label">01 / CONTEXTO &amp; SOLUÇÃO</span><h2 id="case-context-title">{project.headline}</h2></div>
                    <div className="case-context__columns"><div className="case-context__problem"><h3>O ponto de partida</h3><p>{project.problem}</p><div className="case-audience"><span className="case-label">PENSADO PARA</span><ul>{project.audience.map(item => <li key={item}>{item}</li>)}</ul></div></div><div className="case-context__solution"><h3>A solução construída</h3>{project.about.split('\n\n').map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div></div>
                </section>

                <section className="case-section case-features" aria-labelledby="case-features-title">
                    <div className="case-section__heading"><span className="case-label">02 / FUNCIONALIDADES</span><h2 id="case-features-title">O que faz a rotina<br /><em>acontecer.</em></h2><p>Recursos conectados ao dia a dia de quem usa o sistema.</p></div>
                    <div className="case-features__list">{project.features.map((feature, index) => <details className="case-feature" key={feature.name} open={index === 0}><summary><span className="case-feature__number">{String(index + 1).padStart(2, '0')}</span><h3>{feature.name}</h3><FiChevronDown aria-hidden="true" /></summary><p>{feature.description}</p></details>)}</div>
                </section>

                <ProjectGallery key={project.slug} project={project} />

                <section className="case-section case-decisions" aria-labelledby="case-decisions-title">
                    <div className="case-section__heading"><span className="case-label">04 / ESCOLHAS DE PRODUTO</span><h2 id="case-decisions-title">Detalhes que fazem<br /><em>diferença no uso.</em></h2></div>
                    <ul>{project.highlights.map(item => <li key={item}><FiCheck aria-hidden="true" /><p>{item}</p></li>)}</ul>
                </section>

                <section className="case-section case-technology" aria-labelledby="case-tech-title">
                    <div className="case-section__heading"><span className="case-label">05 / POR TRÁS DA INTERFACE</span><h2 id="case-tech-title">A engenharia<br /><em>que sustenta.</em></h2><p>As tecnologias e o papel de cada uma na solução.</p></div>
                    <div className="case-technology__groups">{technologyGroups.map(([category, title], index) => {
                        const items = project.technologies.filter(item => item.category === category);
                        return items.length > 0 && <details key={category} open={index === 0}><summary><span>{title}</span><small>{String(items.length).padStart(2, '0')}</small><FiChevronDown aria-hidden="true" /></summary><dl>{items.map(item => <div key={item.name}><dt>{item.name}</dt><dd>{item.purpose}</dd></div>)}</dl></details>;
                    })}</div>
                </section>

                <a className="case-next" href={projectHref(nextProject.slug)}><div><span className="case-label">CONTINUE EXPLORANDO / {nextProject.number}</span><h2>{nextProject.name}<FiArrowRight aria-hidden="true" /></h2><p>{nextProject.category}</p></div><img src={nextProject.assets.cover.src} alt={nextProject.assets.cover.alt} width={nextProject.assets.cover.width} height={nextProject.assets.cover.height} loading="lazy" /></a>
                <div className="case-contact"><p>Sua operação também pode<br /><strong>virar um bom software.</strong></p><a href="#contato" className="button button--outline">Vamos conversar <FiArrowUpRight aria-hidden="true" /></a></div>
            </main>
            <footer className="case-footer page-container"><span>© {new Date().getFullYear()} João Mariano</span><a href="#projetos">Voltar aos projetos <FiArrowUpRight aria-hidden="true" /></a></footer>
        </div>
    );
}

export function ProjectNotFound({ navigation }) {
    return <div className="site-shell project-page">{navigation}<DetailHeader /><main className="case-not-found page-container"><span className="case-label">404 / PROJETO NÃO ENCONTRADO</span><h1 data-route-title tabIndex={-1}>Esse projeto<br />não está por aqui.</h1><p>Conheça os projetos disponíveis no portfólio.</p><a href="#projetos" className="button button--accent">Explorar projetos <FiArrowRight aria-hidden="true" /></a></main></div>;
}
