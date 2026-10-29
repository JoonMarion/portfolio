import catalog from './projects.json';

const presentation = {
    'agriaraujo-crm': {
        category: 'Gestão agrícola',
        context: 'Comércio de pimenta-do-reino',
        tags: ['Django', 'HTMX', 'PostgreSQL'],
        headline: 'Da entrega ao acerto, clareza em cada movimento.',
        galleryLabels: ['Visão geral', 'Histórico do produtor', 'Caixa'],
        platform: 'Web responsiva e PWA',
    },
    articula: {
        category: 'Agenda e colaboração',
        context: 'Gabinetes e equipes políticas',
        tags: ['React', 'Django', 'PostgreSQL'],
        headline: 'Uma agenda compartilhada. Uma equipe alinhada.',
        galleryLabels: ['Relatórios', 'Calendário', 'Agenda diária'],
        platform: 'Web responsiva e PWA',
    },
    'meu-ponto': {
        category: 'Aluguéis e localização',
        context: 'Gestão de espaços alugáveis',
        tags: ['React', 'Django', 'Leaflet'],
        headline: 'Cada ponto no mapa, conectado ao seu financeiro.',
        galleryLabels: ['Mapa de pontos', 'Aluguéis', 'Cobranças'],
        platform: 'Web responsiva e PWA',
    },
    'resale-manager': {
        category: 'Gestão de revendas',
        context: 'Revenda independente',
        tags: ['Django', 'HTMX', 'Tailwind CSS'],
        headline: 'O negócio na palma da mão, da venda à reposição.',
        galleryLabels: ['Painel financeiro', 'Vendas', 'Estoque'],
        platform: 'Web responsiva',
    },
};

export const projectHref = slug => `#/projetos/${encodeURIComponent(slug)}`;

export const projects = catalog.map((source, index) => {
    const asset = image => ({
        ...image,
        src: `${process.env.PUBLIC_URL || ''}/projects/${source.slug}/${image.src}`,
    });
    const assets = {
        cover: asset(source.assets.cover),
        desktop: source.assets.desktop.map(asset),
        mobile: source.assets.mobile.map(asset),
    };
    return {
        ...source,
        ...presentation[source.slug],
        number: String(index + 1).padStart(2, '0'),
        title: source.name,
        description: source.shortDescription,
        image: assets.cover.src,
        imageAlt: assets.cover.alt,
        assets,
    };
});

export const projectCount = String(projects.length).padStart(2, '0');

export function projectSlugFromHash(hash) {
    if (!hash.startsWith('#/projetos/')) return null;
    try {
        return decodeURIComponent(hash.slice('#/projetos/'.length).replace(/\/$/, ''));
    } catch {
        return '';
    }
}

export function formatProjectDate(creationDate) {
    return new Intl.DateTimeFormat('pt-BR', { month: 'long', year: 'numeric', timeZone: 'UTC' })
        .format(new Date(`${creationDate.value.slice(0, 7)}-01T12:00:00Z`));
}
