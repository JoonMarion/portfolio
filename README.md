# João Mariano

Portfólio de desenvolvedor full stack. O site apresenta sistemas que saem do fluxo do negócio e chegam em produção, junto com a trajetória, os projetos e um contato direto.

## O que tem no site

- **Início.** Lógica sólida, interfaces vivas.
- **Projetos.** Quatro sistemas em produção para clientes reais, em um carrossel com páginas de detalhes: Agriaraujo CRM, Articula, Meu Ponto e Gestor de Revendas.
- **Experiência.** Da interface ao sistema em produção, desde 2022.
- **Sobre.** Engenharia de Software pela UEPA, Python, Django e o que sustenta o produto no dia a dia.
- **Contato.** E-mail, com contexto.

## Stack

React. A página principal fica em `src/App.js`. O catálogo de projetos fica em `src/data/projects.json`, com a apresentação em `src/data/projects.js`. As páginas de detalhes ficam em `src/components/projectDetails/` e usam rotas no formato `#/projetos/<slug>`.

As imagens publicadas ficam em `public/projects/`. Os materiais originais dos projetos ficam em `projects_assets/`.

## Como rodar

```bash
npm install --legacy-peer-deps
npm run dev
```

Abre em [http://localhost:3000](http://localhost:3000).

```bash
npm run build
```

Gera a versão de produção em `build/`.

## Contato

- [marianojoao52@gmail.com](mailto:marianojoao52@gmail.com)
- [GitHub](https://github.com/JoonMarion)
- [LinkedIn](https://www.linkedin.com/in/joaomariano-dev/)
