# Articula — materiais para portfólio

Sete imagens PNG e conteúdo público em português do Brasil, produzidos a partir da implementação existente. Revisão de referência: commit `8971881ecfd2`. Preparação em 29/10/2026; essa data não representa a criação do projeto.

## Imagens e escolhas

- **desktop-01 / mobile-01 — Relatórios:** mostram indicadores de execução e distribuição de compromissos por município. A versão desktop também enquadra os gráficos por tipo e status. Foram escolhidos para apresentar o acompanhamento analítico já implementado.
- **desktop-02 / mobile-02 — Calendário:** grade mensal no computador e navegação semanal com cards no celular. Demonstram a organização da agenda e a adaptação real entre os dispositivos.
- **desktop-03 / mobile-03 — Agenda:** no computador, a reunião selecionada está com o painel de detalhes aberto intencionalmente para mostrar descrição, contexto e participantes. No celular, a visão diária exibe indicadores e os dois compromissos completos. Demonstram a operação cotidiana do sistema.
- **cover-portfolio:** composição horizontal com símbolo oficial, nome, descrição curta “Agenda política”, calendário desktop e agenda mobile reais em molduras de monitor e smartphone. Nenhuma tela foi gerada por IA ou redesenhada.

| Arquivo | Resolução | Tamanho exato | Tamanho aproximado |
|---|---|---|---|
| [cover/cover-portfolio.png](cover/cover-portfolio.png) | 1920 × 1080 | 544.884 bytes | 532.1 KiB |
| [desktop/desktop-01.png](desktop/desktop-01.png) | 1920 × 1080 | 112.823 bytes | 110.2 KiB |
| [desktop/desktop-02.png](desktop/desktop-02.png) | 1920 × 1080 | 139.293 bytes | 136.0 KiB |
| [desktop/desktop-03.png](desktop/desktop-03.png) | 1920 × 1080 | 146.938 bytes | 143.5 KiB |
| [mobile/mobile-01.png](mobile/mobile-01.png) | 1080 × 1920 | 164.921 bytes | 161.1 KiB |
| [mobile/mobile-02.png](mobile/mobile-02.png) | 1080 × 1920 | 201.740 bytes | 197.0 KiB |
| [mobile/mobile-03.png](mobile/mobile-03.png) | 1080 × 1920 | 169.532 bytes | 165.6 KiB |

## Viewports, escala e enquadramento

- Desktop: **1920 × 1080 CSS px**, escala de dispositivo **1**; PNG nativo de 1920 × 1080.
- Mobile: **432 × 768 CSS px**, escala **2,5**, toque e emulação mobile ativos; PNG nativo de **1080 × 1920**, sem redimensionamento, distorção, recorte ou margens adicionadas. A proporção do viewport já é 9:16.
- Chromium, idioma `pt-BR`, fuso `America/Sao_Paulo`, tema claro disponível no próprio sistema. Data do navegador fixada em **29/10/2026, às 12h**, para estabilizar a agenda de demonstração; temporizadores continuam funcionando.
- Relatórios desktop: rolagem vertical de **120 CSS px** no contêiner principal. O enquadramento começa nos filtros e mostra os indicadores, o gráfico por cidade e os dois gráficos de distribuição completos; o título da página fica acima do viewport.
- Relatórios mobile: rolagem vertical de **422 CSS px** no mesmo contêiner. O enquadramento começa nos indicadores para incluir o gráfico por cidade, mantendo as barras de navegação originais. Título, filtros e botão de PDF ficam acima da área capturada.
- Calendário: outubro de 2026; desktop na grade mensal, mobile no modo semanal original, com quinta-feira, dia 29, selecionada. Sem rolagem.
- Agenda: dia 29/10/2026. Desktop com painel de detalhes da reunião “Planejamento das ações do gabinete”; mobile com a lista diária. Sem rolagem.
- Todas as capturas são do viewport, sem barras do navegador. Fontes e imagens aguardadas antes da captura; animações estabilizadas e ponteiro fora dos gráficos, sem tooltips.
- A prévia da capa em **320 × 180** e a montagem de revisão das seis capturas ficam em `build/portfolio-work/`, fora desta entrega. O título usa **156 px** e a descrição **72 px** na capa original. O símbolo vem de `frontend/public/articula-symbol.svg`; cores azul, grafite e fundos claros seguem a identidade do repositório. A tipografia usa a família de sistema, com Segoe UI nesta máquina.

## Dados de demonstração e isolamento

Foram criados **273 compromissos fictícios** entre junho e novembro de 2026 e **12 contatos fictícios**, com endereços reservados `example.com` e sem telefones. Nomes e dados não foram extraídos das bases existentes. Os números mostrados nos gráficos são exclusivamente demonstrativos, sem representar clientes, resultados ou uso real do produto.

O backend usa uma base SQLite exclusiva em `build/portfolio-work/presentation.sqlite3`, mídia própria, cache e camada de canais em memória. Não lê arquivos `.env`, não utiliza Redis externo nem credenciais de integrações. A conta local tem uma assinatura demonstrativa Profissional para exibir os recursos implementados desse plano; não há checkout ou cobrança. A senha é aleatória e fica somente na pasta temporária ignorada pelo Git. O navegador usa contextos efêmeros e não persiste sessões. Bots e scheduler não são iniciados. As requisições do navegador ficam restritas ao servidor local.

SQLite é uma ferramenta deste ambiente de demonstração; PostgreSQL é o banco da arquitetura de implantação documentada. Playwright, Sharp e Pillow são ferramentas de produção/validação destes materiais e não foram incluídos na stack pública por esse motivo.

## Como reproduzir ou atualizar

Os scripts ficam em `scripts/portfolio/`, separados dos arquivos finais. Requer Node.js compatível com o frontend, o ambiente Python em `backend/venv`, dependências do backend e do frontend instaladas e Chromium do Playwright. Na máquina desta entrega já estavam disponíveis Playwright **1.60.0**, Sharp **0.34.5**, Django **5.2.14** e Pillow **12.2.0**.

Em PowerShell, a partir da raiz do projeto:

```powershell
# Em uma instalação nova, preparar as dependências sem executar dev.ps1:
python -m venv backend/venv
.\backend\venv\Scripts\python.exe -m pip install -r backend/requirements.txt
npm.cmd ci --prefix frontend
npm.cmd install --prefix scripts/portfolio
.\scripts\portfolio\node_modules\.bin\playwright.cmd install chromium

# Capturar a aplicação, montar a capa e gerar/validar JSON e documentação:
node scripts/portfolio/generate.mjs
node scripts/portfolio/compose-cover.mjs
node scripts/portfolio/write-info.mjs
```

`generate.mjs` prepara a base isolada, inicia Django em loopback e Vite com o código e a configuração originais, ajustando apenas as portas e proxies da execução local. O Vite não carrega arquivos de ambiente. O login ocorre pelo formulário real; as consultas usam a API Django real, sem respostas mockadas. Os processos são encerrados ao concluir, inclusive em caso de erro. As portas locais usadas são 8765 e 5178 e devem estar livres.

Para repetir com a mesma base, execute os três scripts novamente. Para recriar os dados, encerre qualquer execução da captura e remova somente `build/portfolio-work/presentation.sqlite3` e `build/portfolio-work/credentials.json`, ambos descartáveis desta tarefa; o próximo comando recria o conjunto. Para mudar o dia demonstrado, atualize a âncora em `local_backend.py`, o relógio em `generate.mjs` e os textos/caminhos alternativos pertinentes em `write-info.mjs`, recriando a base isolada. Altere os textos públicos no objeto `info` de `write-info.mjs` e gere o JSON novamente para manter a reprodução consistente.

## Fontes e precisão do conteúdo

- `README.md` e `PRODUCT.md`: identidade, contexto político e público. O PRODUCT contém descrições de uma arquitetura anterior e itens de roadmap; não foi tratado como comprovação da implementação atual.
- `frontend/src/pages/agenda.tsx`, `calendario.tsx`, `novo.tsx`, `participantes.tsx`, `roles.tsx`, `relatorios.tsx`, componentes de compromissos e chat: funcionalidades, layouts e controles reais.
- `frontend/src/lib/relatoriosStats.ts`, `exportRelatoriosPdf.ts`, `paraMap.ts` e `frontend/src/data/para-municipios.json`: indicadores, gráficos, projeção geográfica e exportação.
- `frontend/src/styles.css`, `components/BrandLogo.tsx`, `assets/images/`, `frontend/public/`: paleta, temas, identidade e instalação PWA.
- `frontend/package.json`, `vite.config.ts`, `src/router.tsx`, hooks e serviços: React, TypeScript, Tailwind, TanStack, Radix, Vite e uso concreto das bibliotecas. Uma dependência sem uso comprovado não foi considerada uma tecnologia do sistema.
- `backend/requirements.txt`, `config/settings/base.py`, `production.py`, apps `accounts`, `appointments`, `participants`, `chat`, `notifications` e `subscriptions`: persistência, API, JWT, isolamento por gabinete, permissões, WebSocket, assinatura, regras e integrações.
- `backend/apps/subscriptions/report_features.py`, `chat_features.py` e `notification_channels.py`: disponibilidade de recursos por plano; o JSON respeita essas restrições.
- `deploy/DEPLOY.md` e scripts de implantação: papel de PostgreSQL, Redis, Nginx, Gunicorn e Daphne. Nenhum dado operacional privado foi incluído no JSON público.
- A implementação atual não comprova HTMX, Alpine, FullCalendar, Celery ou Twilio, apesar de menções antigas no PRODUCT; essas tecnologias não constam no JSON.

## Data de criação

O histórico local não é shallow. Na ancestralidade de HEAD, o commit raiz **bb3c2792dd6d41c3c7881c0385305fd98f596279**, de **13/05/2026 às 23:26:40 −03:00**, tem a mensagem “first commit” e adiciona apenas um README com o nome inicial “agenda-pro”. O PRODUCT aparece em **770ee1c**, de 14/05/2026, e a estrutura Django está registrada em **679537b**, também de 14/05/2026. Esses registros sustentam **maio de 2026 como estimativa** do início do projeto registrado, sem comprovar o dia exato em que o trabalho começou.

Por isso, `creationDate` usa `value: "2026-05"`, `precision: "month"` e `isEstimated: true`. Não se trata da data de clone, deploy, redesign ou captura. Há ainda uma raiz pertencente a arquivos de stash, de julho de 2026; ela não é o início do projeto e não substitui a raiz da ancestralidade de HEAD.

Comandos para revisar a evidência:

```powershell
git rev-parse --is-shallow-repository
git log --max-parents=0 --format="%h %aI %cI %s" HEAD
git show --stat bb3c279
git show bb3c279:README.md
git log --all --reverse --format="%h %aI %s"
```

## JSON e integração no portfólio

`project-info.json` é UTF-8, JSON estrito e segue `schemaVersion: 1`. Os textos descrevem nome, categoria, proposta, problema, público, funcionalidades, diferenciais e o papel de cada tecnologia, sem atribuir autoria individual não comprovada. As versões das tecnologias ficam nulas por não serem necessárias para a apresentação pública.

`assets.cover`, `assets.desktop` e `assets.mobile` têm exatamente sete referências, cada uma com `src`, `alt`, `width` e `height`. Os caminhos são relativos à pasta deste JSON. Copie a pasta inteira para o diretório de mídia do portfólio e prefixe os caminhos com a URL pública escolhida, preservando a estrutura. Use `assets.cover` no card e as outras seis imagens na galeria, aplicando os textos alternativos nos elementos de imagem. Ao apresentar a data, preserve a indicação de estimativa.

`links.demo` e `links.repository` são nulos. O domínio aparece nos metadados públicos do frontend, porém a verificação externa desta execução não conseguiu confirmar seu acesso; não foi tratado como demonstração pública verificada. A visibilidade pública do repositório também não foi confirmada. Nenhum link foi inferido de arquivos privados.

## Validação e limitações

O script valida exatamente sete PNGs, dimensões obrigatórias, JSON por parser, sete caminhos existentes, textos alternativos e ausência de overflow horizontal nos seis viewports. As capturas foram feitas sem erros JavaScript registrados. As seis screenshots preservam os componentes originais, sem alterações de CSS, breakpoints ou conteúdo do DOM. A capa usa exclusivamente os arquivos de captura como telas, com escala proporcional e leve perspectiva de apresentação.

A conferência visual inclui as seis telas e a prévia real da capa em 320 × 180. Nome e descrição curta devem continuar legíveis sem ampliar; qualquer alteração na composição exige repetir essa revisão. As capturas mostram recortes naturais do viewport, e não páginas completas: os relatórios possuem outros gráficos abaixo da área selecionada. A truncagem dos títulos na grade mensal é o comportamento original do calendário; os detalhes completos ficam no painel próprio.

A adaptação mobile funcionou em 432 × 768 CSS px, com navegação inferior e cards próprios, sem overflow horizontal nos enquadramentos testados. Os 12 rótulos de municípios ficam densos e parcialmente sobrepostos no gráfico mobile; essa limitação original foi preservada. Isso não constitui teste de todos os navegadores ou tamanhos de tela. Não foram testados pagamentos ou envios externos; a descrição dessas funcionalidades se baseia na implementação, não em transações ou mensagens disparadas durante esta tarefa. A PWA é apresentada como instalável em dispositivos compatíveis, sem promessa de funcionamento offline integral.

Somente estas sete imagens, este README e o JSON pertencem à entrega final. Base descartável, credencial aleatória, logs, diagnósticos, HTML da capa, montagem e prévia reduzida permanecem em `build/portfolio-work/`, ignorada pelo Git. Nenhum componente, configuração de produção ou base existente foi alterado.
