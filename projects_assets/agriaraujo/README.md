# Agriaraujo CRM — imagens para portfólio

Sete imagens finais, capturadas em **28/10/2026** a partir do código local da branch `production_v2`, revisão `57de844ded15`. A capa foi recomposta em **paisagem, 16:9**, conforme a orientação atualizada do usuário. Esta referência identifica a interface capturada, sem afirmar qual versão está implantada na VPS.

## Conteúdo

| Arquivo | Dimensões | Tamanho em bytes | Conteúdo e escolha |
| --- | --- | ---: | --- |
| [desktop-01.png](desktop/desktop-01.png) | 1920 × 1080 | 143.216 | Visão geral: saldo em kg, produtores, Caixa do dia, movimentos recentes e atalhos. Apresenta a operação de forma abrangente. |
| [desktop-02.png](desktop/desktop-02.png) | 1920 × 1080 | 124.440 | Histórico do produtor: entradas, saídas, saldo, A pagar, filtros, exportação e ações. Evidencia a principal operação do sistema. |
| [desktop-03.png](desktop/desktop-03.png) | 1920 × 1080 | 100.142 | Caixa: resumo diário, filtros e entradas com quantidade, preço, total e impressão. Mostra o módulo independente de compras à vista. |
| [mobile-01.png](mobile/mobile-01.png) | 1080 × 1920 | 159.257 | Visão geral no celular, com cards responsivos, identidade oficial e navegação inferior. |
| [mobile-02.png](mobile/mobile-02.png) | 1080 × 1920 | 97.171 | Histórico rolado até os registros: Entrada, Saída e valor restante A pagar no layout mobile real. |
| [mobile-03.png](mobile/mobile-03.png) | 1080 × 1920 | 130.217 | Caixa rolado até os registros: valores, datas, horários e impressão no layout mobile real. |
| [cover-portfolio.png](cover/cover-portfolio.png) | 1920 × 1080 | 1.182.275 | Capa simplificada para cards pequenos: logotipo oficial, nome e descrição ampliados, notebook e smartphone com telas reais. |

Tamanho conjunto dos sete PNGs: **1.936.718 bytes**, aproximadamente **1,85 MiB**.

## Conteúdo público para a página do projeto

[project-info.json](project-info.json) contém a apresentação pública em português: nome, categoria, descrição curta, sobre o projeto, necessidade atendida, público, funcionalidades, diferenciais, tecnologias e referências às sete imagens. Segue a estrutura definida em [docs/prompt-portfolio.md](../docs/prompt-portfolio.md), com `schemaVersion: 1` e `language: pt-BR`.

Os caminhos em `assets` são relativos a esta pasta. Ao integrar o arquivo ao portfólio, acrescente a URL base onde os arquivos forem hospedados. Os textos `alt` descrevem as capturas e as dimensões foram conferidas nos PNGs. As imagens permanecem as mesmas; os números demonstrativos nelas não são usados como resultados comerciais no conteúdo público.

### Data de criação e fontes

A data de criação foi registrada como **maio de 2023**, com `precision: "month"` e `isEstimated: true`. O primeiro commit do domínio agrícola encontrado na ancestralidade de `HEAD` é `e9d5954` (`first commit`), de **18/05/2023**, com o modelo `Transacao`, quantidades em kg e movimentos de Entrada/Saída. O histórico anterior começa no commit `a818df6`, de 03/01/2022, e contém uma aplicação de agendamento e clínica. Por isso, a raiz do Git não foi tratada como a criação do Agriaraujo, nem o dia do primeiro registro agrícola foi apresentado como data exata de concepção. A estimativa corresponde ao primeiro mês documentado desse domínio, sujeito à confirmação do autor.

Para conferir essas evidências, use `git show -s --format=fuller e9d5954`, `git show e9d5954:clientes/models.py` e `git log HEAD --reverse --date=short --format="%h %ad %s" -- clientes/models.py caixa/models.py`. Informações pessoais dos autores não foram incluídas no JSON.

As descrições foram verificadas em `README.md`, `docs/README.md`, `docs/operacao-simplificada-20261026.md`, nos models, views e serviços de `clientes` e `caixa`, em `core/exports.py`, `core/access.py`, `core/partials.py`, `core/pwa.py` e nos componentes de acesso e backup de `business`. Os recursos PWA descrevem instalação e uso conectado, sem prometer operação offline. As regras atuais do Caixa são à vista; o conteúdo não apresenta os acertos históricos desse módulo como um fluxo de novos pagamentos.

As tecnologias e versões foram conferidas em `requirements.txt`, `Dockerfile`, `core/settings.py`, `deploy/v2/compose.yml`, nos templates, no arquivo distribuído do HTMX e nos testes Django. Python 3.10.20 é a versão fixada para a imagem da aplicação. PostgreSQL e SQLite têm papéis distintos no texto; nenhuma versão única do banco foi presumida para todos os ambientes. Node.js, ferramentas de captura e bibliotecas apenas instaladas, sem uso confirmado na interface atual, não foram incluídos como parte da stack do sistema.

Os campos `links.demo` e `links.repository` permanecem `null`: não foi confirmada uma demonstração pública com dados fictícios nem a disponibilidade pública do repositório para divulgação. A aplicação autenticada do cliente não foi apresentada como ambiente de demonstração.

### Atualização do JSON

Revise os textos conforme o código evoluir, mantendo recursos planejados fora da lista de funcionalidades existentes. Verifique versões, confirme eventuais links públicos e preserve a marcação de estimativa da data até existir evidência mais precisa. Se trocar as imagens, atualize caminhos, descrições alternativas e dimensões.

Para validar a sintaxe:

```powershell
.\venv\Scripts\python.exe -m json.tool portfolio-assets/project-info.json > $null
```

## Projeto e identidade visual

O Agriaraujo CRM acompanha produtores, entregas e retiradas de pimenta-do-reino em kg, acertos em reais, entradas independentes no Caixa, notas e exportações. O repositório usa Django, templates renderizados no servidor, CSS próprio, JavaScript e HTMX. Há autenticação, controle de equipe, área Business com autorização adicional e recursos de PWA.

Foram preservados `static/css/app.css`, os templates, ícones e `static/image/agriaraujo-logo.png`. A paleta principal usa verde `#0b6f33`, verde profundo `#083f2b`, vermelho `#d93a2e` e fundo `#f5f6f2`. A pilha tipográfica original é `Inter`, `Segoe UI`, fontes do sistema; neste Windows, o navegador utiliza a fonte disponível dessa pilha, sem instalar nem substituir fontes da aplicação.

O dashboard existente apresenta cards e atividade recente; nenhum gráfico ou funcionalidade foi acrescentado para as imagens. Apenas a composição externa da capa foi desenhada.

## Dados e isolamento

O cenário contém **12 produtores, 96 movimentações e 8 entradas de Caixa**, todos fictícios, criados exclusivamente em `.local/portfolio-assets/demo.sqlite3`. Nomes de propriedades são ilustrativos; telefone e CPF permanecem vazios. O usuário demonstrativo tem senha inutilizável e e-mail reservado `example.invalid`, que não aparece nas capturas. Uma sessão Django local permite navegar pelas rotas autenticadas reais.

Nenhum `.env`, banco existente, dump, dado pessoal ou credencial de produção foi utilizado. As migrations foram aplicadas somente a esse novo SQLite. Código da aplicação, configurações de produção, legado e VPS não foram alterados. Chave temporária, sessão, banco, perfil Chrome e relatórios ficam em `.local`, ignorada pelo Git e fora dos arquivos finais.

## Ferramentas e fidelidade

- Python 3.10, Django 4.0.1 e Pillow 10.4.0, disponíveis em `venv`.
- Node.js 24 e Chrome headless, automatizado diretamente pelo Chrome DevTools Protocol. Não foi necessário instalar Playwright.
- Screenshots PNG nativos de viewport, sem barras do navegador, alteração de DOM, CSS injetado, zoom de página ou redimensionamento posterior.
- Desktop: viewport **1920 × 1080 CSS px**, escala de dispositivo **1**.
- Mobile: viewport **432 × 768 CSS px**, escala de dispositivo **2,5**, toque e agente mobile. O navegador entrega diretamente **1080 × 1920 px**, sem distorção ou margens artificiais.
- Capa: HTML/CSS/SVG em [scripts/portfolio/cover.html](../scripts/portfolio/cover.html), renderizado em **1920 × 1080, paisagem 16:9**. A composição tem apenas o logotipo oficial, o nome em 154 px e “CRM agrícola” em 72 px, com notebook e smartphone à direita. Os textos secundários foram removidos para leitura em cards pequenos. As imagens originais são usadas como texturas completas das telas, com sobreposição dos dispositivos e perspectiva apenas na composição. Não foi usada geração de imagem por IA.
- Pillow verifica formato, contagem, dimensões e opacidade, além de criar uma folha de revisão fora da entrega final.

O capturador espera o carregamento da página, das fontes e das imagens. A validação compara os bytes do CSS servido com o arquivo original do repositório, confere a navegação responsiva, ausência de transbordamento horizontal, menus fechados e ausência de erros JavaScript/HTTP.

## Como reproduzir

Pré-requisitos: Windows com Google Chrome, Node.js 22 ou superior com `WebSocket` global e o ambiente Python do projeto com `requirements.txt` instalado. Os comandos abaixo partem da raiz do repositório. Reserve as portas locais **8097** e **9237** para este trabalho.

1. Prepare a base demonstrativa e a sessão:

   ```powershell
   .\venv\Scripts\python.exe -B scripts/portfolio/prepare.py
   ```

   O script força SQLite no caminho exclusivo de portfólio, não carrega `.env` e mantém a mesma carga em reexecuções. Em outro dia, atualiza apenas as datas desse cenário sintético para manter a visão Hoje preenchida.

2. Em um terminal separado, mantenha o servidor local em execução:

   ```powershell
   .\venv\Scripts\python.exe -B scripts/portfolio/serve.py
   ```

3. Inicie um Chrome exclusivo, sem janela e sem extensões:

   ```powershell
   $portfolioProfile = Join-Path (Get-Location) '.local/portfolio-assets/chrome'
   Start-Process -FilePath 'C:\Program Files\Google\Chrome\Application\chrome.exe' -ArgumentList @('--headless=new', '--disable-gpu', '--disable-extensions', '--no-first-run', '--no-default-browser-check', '--hide-scrollbars', '--remote-debugging-port=9237', '--remote-debugging-address=127.0.0.1', '--remote-allow-origins=http://127.0.0.1:9237', "--user-data-dir=$portfolioProfile", 'about:blank') -WindowStyle Hidden
   ```

4. Capture as seis telas, renderize a capa e confira os resultados:

   ```powershell
   node scripts/portfolio/capture.mjs --cover
   .\venv\Scripts\python.exe -B scripts/portfolio/validate.py
   ```

   Para refazer somente a capa, use `node scripts/portfolio/capture.mjs --cover-only` e execute o validador novamente. Os sete arquivos finais são substituídos; banco e arquivos privados continuam em `.local`.

5. Ao terminar, interrompa o servidor com `Ctrl+C` e encerre o Chrome exclusivo:

   ```powershell
   node scripts/portfolio/close-browser.mjs
   ```

Os relatórios técnicos ficam em `.local/portfolio-assets/capture-report.json` e `validation.json`; a folha de revisão fica em `.local/portfolio-assets/preview.png`. Nenhum desses arquivos integra as sete imagens finais. Se as imagens forem atualizadas, confira também a tabela de tamanhos deste README.

## Responsividade e limites

O sistema possui responsividade funcional no viewport capturado: navegação inferior, cards e registros empilhados, sem rolagem horizontal. O histórico e o Caixa têm filtros e conteúdo acima das listas; por isso, as respectivas imagens mobile usam rolagem normal até os primeiros registros. O enquadramento e a posição da rolagem ficam registrados no relatório. As páginas continuam abaixo do viewport; estas são capturas de tela, não imagens da página inteira comprimidas.

A revisão cobriu as três telas no Chrome desktop e na emulação mobile. Não equivale a uma avaliação de todos os dispositivos, Safari ou funcionalidades de instalação PWA. A capa reduz naturalmente as interfaces dentro dos mockups; as seis capturas separadas preservam a resolução integral para leitura dos detalhes.

Os dados numéricos são exemplos demonstrativos calculados pela aplicação. Não representam métricas comerciais ou resultados reais. Variações de fonte instalada, versão do Chrome, data ou código podem produzir diferenças visuais ao reproduzir.
