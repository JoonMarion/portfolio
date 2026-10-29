# Meu Ponto — material para portfólio

Entrega de sete PNGs e conteúdo público em português. As seis capturas foram feitas no aplicativo real, com API Django e banco local recém-criado. A capa é uma composição programática dessas capturas. Nenhum componente, estilo, breakpoint ou resposta da API foi substituído para produzir as imagens.

## Imagens e escolhas

| Arquivo                                                | Dimensões   |   Tamanho exato | Tamanho aproximado | Conteúdo e motivo                                                          |
| ------------------------------------------------------ | ----------- | --------------: | -----------------: | -------------------------------------------------------------------------- |
| [cover/cover-portfolio.png](cover/cover-portfolio.png) | 1920 × 1080 |   481,692 bytes |          470.4 KiB | Capa com nome, ícone oficial e telas reais em monitor e telefone.          |
| [desktop/desktop-01.png](desktop/desktop-01.png)       | 1920 × 1080 |   928,650 bytes |          906.9 KiB | Mapa, categorias e situações dos pontos, com lista lateral.                |
| [desktop/desktop-02.png](desktop/desktop-02.png)       | 1920 × 1080 |   112,170 bytes |          109.5 KiB | Seis aluguéis, clientes, valores e filtros em três colunas.                |
| [desktop/desktop-03.png](desktop/desktop-03.png)       | 1920 × 1080 |   148,613 bytes |          145.1 KiB | Resumo financeiro e três cobranças, incluindo pagamento parcial.           |
| [mobile/mobile-01.png](mobile/mobile-01.png)           | 1080 × 1920 | 1,088,341 bytes |         1062.8 KiB | Mapa responsivo com busca e localização, mantendo atribuição cartográfica. |
| [mobile/mobile-02.png](mobile/mobile-02.png)           | 1080 × 1920 |   355,537 bytes |          347.2 KiB | Pesquisa, filtros e primeiro cartão de aluguel no layout mobile.           |
| [mobile/mobile-03.png](mobile/mobile-03.png)           | 1080 × 1920 |   448,077 bytes |          437.6 KiB | Resumo financeiro e filtros na apresentação original para celular.         |

O mapa apresenta a relação entre local e situação do aluguel; a lista demonstra o gerenciamento de clientes, valores e períodos; as cobranças mostram a aplicação das regras financeiras. No celular, a terceira imagem prioriza o resumo e os filtros, que ocupam mais altura no layout original. A lista de cobranças aparece na captura desktop.

A capa usa o ícone oficial de `frontend/public/icon-512.png`, o nome real e somente a descrição **Aluguéis no mapa**. Exibe `desktop-03.png` no monitor e `mobile-01.png` no telefone, preservando integralmente as proporções e o conteúdo das telas. A paleta vem de `frontend/src/styles/index.css`: fundo `#f4f6f8`, verde `#0d5749` e verde escuro `#082e28`. O título tem 150px e a descrição 74px, em Segoe UI. Os dispositivos, sombras e fundo foram desenhados com Pillow; não há interfaces geradas por IA.

## Origem e enquadramento

- Código capturado: `1f855096e90d510a9a396660bda9b25ac4dfda0d`, versão mais recente de `origin/main` consultada para esta entrega. A versão principal local estava atrasada; a cópia isolada partiu de `origin/main` após `git fetch`.
- Data de referência dos dados: **2026-10-29**, em UTC, como nas regras financeiras da aplicação. A data de produção dos assets não é a data de criação do projeto.
- Navegador: **Chrome/156.0.8078.73**, controlado pelo Chrome DevTools Protocol, com idioma `pt-BR` e fuso `America/Sao_Paulo`.
- Desktop: viewport **1920 × 1080 CSS px**, escala **1**, captura do viewport, sem barras do navegador.
- Mobile: viewport **432 × 768 CSS px**, escala **2,5**, emulação mobile e toque. Exportação direta **1080 × 1920**, sem recorte, distorção, margens ou ampliação posterior. A largura de 432px é um viewport de telefone; também houve conferência adicional em **360 × 800**.
- Fontes e imagens foram aguardadas; no mapa, todos os tiles presentes precisaram concluir o carregamento. A automação verificou ausência de erro de interface, exceções de JavaScript, respostas HTTP com erro e rolagem horizontal nas três telas e larguras avaliadas.
- A rolagem foi feita pela página original. No mapa desktop, a página foi rolada 96px para manter a atribuição cartográfica visível acima da navegação inferior. No mapa mobile, o painel de busca começa a 16px do topo; nas outras duas telas, o título começa a 16px. Assim, o cabeçalho do aplicativo sai naturalmente dessas imagens. As barras e botões fixos mantêm seu comportamento original.

| Captura                  | Rota local       | Rolagem vertical (CSS px) |
| ------------------------ | ---------------- | ------------------------: |
| `desktop/desktop-01.png` | `/app/mapa`      |                        96 |
| `desktop/desktop-02.png` | `/app/alugueis`  |                         0 |
| `desktop/desktop-03.png` | `/app/cobrancas` |                         0 |
| `mobile/mobile-01.png`   | `/app/mapa`      |                       171 |
| `mobile/mobile-02.png`   | `/app/alugueis`  |                        81 |
| `mobile/mobile-03.png`   | `/app/cobrancas` |                        81 |

O ambiente temporário fica em `backups/portfolio/`, já coberto pelo ignore do repositório: código isolado, banco SQLite de demonstração, perfil do Chrome, sessão, relatórios e revisões. Nenhuma base existente, foto privada, variável de ambiente de produção ou serviço remoto foi alterado. As alterações de PWA que estavam em andamento foram preservadas.

Os 12 pontos e seis aluguéis são fictícios; nomes de estabelecimentos, valores e vínculos não representam clientes reais. Belém e seus bairros são apenas referências geográficas públicas. Não foram incluídos telefone, documento, e-mail de cliente ou foto pessoal. A senha local é aleatória a cada execução e nunca integra a entrega. Cobranças e pagamentos foram gerados pelos serviços reais do projeto. SQLite foi usado apenas nesta demonstração isolada; o banco do produto continua sendo PostgreSQL.

## Conteúdo público e fontes

`project-info.json` usa UTF-8, `schemaVersion: 1` e `language: pt-BR`. Inclui nome, slug, categoria, descrição curta, apresentação, problema, público, funcionalidades, diferenciais, data estimada, tecnologias com seus papéis, imagens com textos alternativos e links. Os caminhos de `assets` são relativos a esta pasta. Copie a pasta inteira para o local desejado no portfólio e resolva cada `src` a partir da URL do JSON; use `alt`, `width` e `height` nos elementos de imagem.

As fontes abaixo foram examinadas no commit capturado:

- `CONTEXT.md`, `README.md` e `docs/interface.md`: finalidade, público, identidade visual, estados das telas, limitações e decisões do produto.
- `frontend/src/app/App.tsx`, `AppShell.tsx` e `frontend/src/features/{places,rentals,charges,participants,shell}/`: rotas, navegação e funcionalidades implementadas.
- `frontend/src/styles/index.css`, `frontend/src/components/BrandMark.tsx` e `frontend/public/icon.svg`: cores, fonte do aparelho e símbolo oficial.
- `frontend/package.json`, `package-lock.json`, `vite.config.ts`, `frontend/src/sw.js`, `lib/api.ts`, `lib/session.ts` e imports dos componentes: uso real de React, TypeScript, Vite, Tailwind, formulários, cache, autenticação e PWA.
- `frontend/src/features/places/MapCanvas.tsx` e `AddressSearch.tsx`: Leaflet, OpenStreetMap e busca Photon. A atribuição cartográfica original foi preservada.
- `backend/requirements/`, `backend/config/settings/`, `backend/apps/{users,accounts,places,rentals}/`: API, PostgreSQL, autenticação, permissões, fotos e regras financeiras.
- `backend/tests/`, arquivos `*.test.*` do frontend e `.github/workflows/ci.yml`: testes e verificações automatizadas existentes.
- `compose.yaml`, Dockerfiles, `frontend/nginx.conf`, `backend/gunicorn.conf.py` e workflow de publicação: tecnologias de execução e automação.

Versões de tecnologias foram deixadas como `null`: intervalos de dependências e versões instaladas para captura não confirmam, por si só, a versão do ambiente publicado. Python/Pillow e Node/CDP empregados na produção destes assets não foram adicionados ao JSON como funcionalidades da aplicação. Python também é a linguagem efetiva do backend, com evidência independente da ferramenta de composição. Playwright não foi utilizado.

### Data de criação

`git log --reverse --format="%H %aI %s" origin/main` começa em **`f45b234`**, com data de autoria **2026-09-29T22:40:05-03:00** e mensagem `creating repo`. O README desse commit descreve a fase de definição do produto; os commits seguintes, ainda em 29/09, iniciam frontend e autenticação. A primeira decisão datada de `CONTEXT.md` também está em 29/09/2026.

Essas evidências sustentam **2026-09-29** como estimativa do início do projeto, com precisão de dia e `isEstimated: true`. O planejamento pode ser anterior ao histórico registrado; a data exata de criação não foi confirmada por uma fonte independente. Não foi usada a data de clone, redesign, deploy ou captura.

### Links e limites do conteúdo

`links.demo` e `links.repository` estão em `null`. A documentação e o remote Git indicam endereços candidatos, mas a consulta pública não conseguiu confirmar a disponibilidade do site nem a visibilidade pública do repositório. Acesso autenticado ao Git não comprova divulgação pública. Não foram publicados endereços operacionais a partir de arquivos privados.

O JSON não apresenta como disponíveis itens do backlog, como Pix integrado, relatórios exportáveis, notificações push, criação/edição offline ou renovação em um toque. A opção Pix existente registra a forma de um recebimento; não processa pagamentos. A leitura offline não inclui fotos nem tiles. As imagens não atestam instalação em aparelhos físicos nem uma execução PostgreSQL nesta sessão. O viewport exibe apenas uma parte de listas longas; barras fixas e rolagem são as do produto original.

## Reproduzir e atualizar

Os scripts estão em `scripts/portfolio/`, separados desta entrega. Requisitos: dependências usuais do projeto, Python com Pillow e Django, Node 24 ou compatível, Chrome e fontes Segoe UI do Windows. Em outro sistema, informe fontes licenciadas equivalentes por `--font-regular` e `--font-bold`; isso muda a tipografia da capa. A interface usa a fonte nativa definida no CSS.

1. Prepare um checkout limpo do commit desejado, sem `backend/.env`, por exemplo:

   ```powershell
   git worktree add --detach backups/portfolio/source-repro 1f855096e90d510a9a396660bda9b25ac4dfda0d
   Push-Location backups/portfolio/source-repro/frontend
   npm.cmd ci
   Pop-Location
   ```

2. Em um terminal na raiz, inicie a API de demonstração. O comando cria um banco **novo** em uma subpasta aleatória de `backups/portfolio/runtime/`; nunca migra o banco habitual da aplicação. Os dados se adaptam ao mês corrente, então valores de status/datas podem mudar em futuras capturas.

   ```powershell
   & backend/.venv/Scripts/python.exe -B scripts/portfolio/serve_demo.py --source backups/portfolio/source-repro --runtime backups/portfolio/runtime
   ```

3. Em outro terminal, inicie o frontend original com a API local:

   ```powershell
   Push-Location backups/portfolio/source-repro/frontend
   $env:VITE_API_BASE_URL='http://127.0.0.1:8068'
   node node_modules/vite/bin/vite.js --configLoader runner --host 127.0.0.1 --port 5178 --strictPort
   ```

4. Inicie um Chrome separado, com perfil próprio e depuração restrita ao computador local:

   ```powershell
   $portfolioProfile = Join-Path (Get-Location) 'backups/portfolio/chrome-profile'
   Start-Process -FilePath 'C:\Program Files\Google\Chrome\Application\chrome.exe' -ArgumentList @('--headless=new','--disable-gpu','--hide-scrollbars','--remote-debugging-port=9238',"--user-data-dir=$portfolioProfile",'about:blank') -WindowStyle Hidden
   ```

5. Capture as telas pela autenticação real e gere capa, JSON, documentação e validações:

   ```powershell
   node scripts/portfolio/capture.mjs . backups/portfolio/runtime
   & backend/.venv/Scripts/python.exe -B scripts/portfolio/build_assets.py --source backups/portfolio/source-repro
   & backend/.venv/Scripts/python.exe -B scripts/portfolio/build_assets.py --validate-only
   ```

   A automação autentica pelo formulário do aplicativo com a credencial temporária criada pelo seed. Não altera `fetch`, CSS ou componentes. Não use conta ou sessão de produção. Encerre os servidores e o Chrome isolado ao terminar; a API remove `session.json` ao sair normalmente. Perfis e bases temporários ficam fora da entrega e do Git.

6. Ao escolher outro commit, revise as evidências de `project_info.py` e este template antes de gerar o JSON. Atualize o commit documentado, seletores e descrições somente para refletir alterações reais. Os tamanhos e enquadramentos da tabela são atualizados automaticamente.

### Verificações da entrega

No commit capturado, foram executados os testes completos da aplicação: **146 testes do backend passaram e um foi pulado**, pois a verificação de trava de linha exige PostgreSQL; **92 testes do frontend passaram**. ESLint e TypeScript do frontend passaram. Os novos scripts passaram em Ruff, ESLint, checagem de sintaxe do Node e formatação; o JSON e a documentação passaram em Prettier. Essas conferências se referem à cópia limpa capturada, sem incorporar as alterações de PWA que estavam em andamento na pasta de trabalho.

Para conferir novamente os scripts, execute na raiz:

```powershell
& backend/.venv/Scripts/ruff.exe check scripts/portfolio
& backend/.venv/Scripts/ruff.exe format --check scripts/portfolio
& frontend/node_modules/.bin/eslint.cmd --config scripts/portfolio/eslint.config.mjs scripts/portfolio/*.mjs
& frontend/node_modules/.bin/prettier.cmd --check scripts/portfolio/*.mjs scripts/portfolio/README.template.md portfolio-assets/project-info.json portfolio-assets/README.md
node --check scripts/portfolio/capture.mjs
```

`build_assets.py --validate-only` abre os PNGs, verifica integridade e dimensões, exige exatamente sete imagens e nove arquivos finais, faz o parse do JSON, valida textos alternativos e correspondência dos caminhos, e procura informações indevidas básicas no conteúdo público. Gera hashes e tamanhos em `backups/portfolio/review/validation.json`. A inspeção visual humana complementa essas verificações, inclusive para privacidade.

A prévia obrigatória **320 × 180** fica em `backups/portfolio/review/cover-320x180.png`; o nome e a descrição foram conferidos nesse tamanho. A montagem de revisão está em `backups/portfolio/review/contact-sheet.jpg`, fora das sete imagens finais. Os detalhes de navegador, rolagem e ausência de falhas estão em `backups/portfolio/runtime/capture-report.json`. Atualizar as capturas exige acesso aos tiles públicos do mapa.
