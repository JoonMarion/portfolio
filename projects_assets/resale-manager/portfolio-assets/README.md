# Gestor de Revendas — material para portfólio

Sete imagens PNG e conteúdo público em português do Brasil, produzidos a partir da interface existente. Código de referência: `c266921c4b5081f46cf0a90338da576ad0693d48`. Data de referência dos dados fictícios: **2026-10-29**. Essa data não é a data de criação do projeto.

## Imagens e escolhas

- **desktop-01 / mobile-01 — painel financeiro:** evidencia os quatro indicadores, o lucro sobre vendas pagas e os gráficos que já existem na aplicação. Foi selecionado “Todo período” para apresentar seis meses de movimentação demonstrativa. No desktop aparecem o primeiro gráfico completo e o início do segundo; no celular o enquadramento inicial mostra os indicadores, o lucro e parte do primeiro gráfico, com continuação por rolagem.
- **desktop-02 / mobile-02 — vendas:** mostra os filtros de pagamento, os itens, os totais e as situações Pago/Aguardando. Demonstra o fluxo principal do negócio e o botão de nova venda.
- **desktop-03 / mobile-03 — estoque:** mostra três alertas reais calculados sobre os dados fictícios, quantidades, estoque mínimo e ações de entrada/saída. Demonstra como a operação de vendas se conecta à reposição.
- **cover-portfolio:** composição horizontal com o nome real do projeto e a descrição “Gestão de revendas”. O notebook contém uma captura adicional real do painel em 1024 × 680; o smartphone usa `mobile-02.png`. As telas são escaladas proporcionalmente, sem reconstrução de interface. O nome foi distribuído em duas linhas no sublinhado para manter 150 px. A descrição usa 70 px.

## Resoluções e tamanhos

| Arquivo | Resolução | Tamanho |
| --- | --- | --- |
| `cover/cover-portfolio.png` | 1920 × 1080 | 752,311 bytes (734.7 KiB) |
| `desktop/desktop-01.png` | 1920 × 1080 | 101,207 bytes (98.8 KiB) |
| `desktop/desktop-02.png` | 1920 × 1080 | 98,172 bytes (95.9 KiB) |
| `desktop/desktop-03.png` | 1920 × 1080 | 73,438 bytes (71.7 KiB) |
| `mobile/mobile-01.png` | 1080 × 1920 | 200,423 bytes (195.7 KiB) |
| `mobile/mobile-02.png` | 1080 × 1920 | 181,895 bytes (177.6 KiB) |
| `mobile/mobile-03.png` | 1080 × 1920 | 137,787 bytes (134.6 KiB) |

## Fidelidade, identidade e enquadramento

As seis capturas foram feitas pelo navegador com os templates, scripts, estilos e fontes originais. Nenhum componente, CSS, breakpoint ou arquivo de produção foi alterado. Não foram inseridas métricas, botões, gráficos ou interfaces fictícias.

- Desktop: viewport **1920 × 1080 CSS px**, escala **1**, captura exata do viewport, sem barras do navegador.
- Mobile: viewport **432 × 768 CSS px**, escala **2,5**, emulação de toque e `is_mobile=True`. Cada captura sai diretamente em **1080 × 1920**, sem redimensionamento ou margens.
- As seis telas usam tema claro, localidade `pt-BR`, fuso `America/Sao_Paulo` e posição de rolagem **0 px**.
- Aguardamos rede ociosa, carregamento da fonte Inter, imagens e animação original dos gráficos antes das capturas.
- Paleta verificada: verde `#16a34a`, fundo `#f8fafc`, cartões brancos e textos escuros. A capa usa variações suaves desses tons e a mesma fonte Inter.
- Não foi localizado logotipo próprio do software. O ícone genérico da tela de login não foi apresentado como marca oficial. O nome documentado do projeto é `resale_manager`; “Carla Variedades”, presente em alguns títulos, identifica a loja atendida, não um novo nome inventado para o software.

## Ferramentas e reprodução

Scripts e composição ficam em `tools/portfolio/`, separados da entrega. Playwright é apenas uma ferramenta de captura e não integra a stack pública do sistema. Pillow valida dimensões e gera a prévia reduzida. A capa é HTML/CSS renderizado no navegador, com screenshots incorporados sem edição de seu conteúdo. Não foi utilizada imagem generativa.

Com as dependências de `requirements.txt` instaladas no ambiente virtual, execute na raiz, em PowerShell:

```powershell
.\.venv\Scripts\python.exe -m pip install -r tools/portfolio/requirements-capture.txt
.\.venv\Scripts\python.exe -B tools/portfolio/capture.py --reference-date 2026-10-29
.\.venv\Scripts\python.exe -B tools/portfolio/validate.py
```

O script usa Google Chrome instalado, controlado pelo Playwright. Para outro canal instalado compatível, passe `--browser-channel chromium` ou `--browser-channel msedge` e instale previamente o navegador correspondente. Navegador utilizado nesta entrega: Chrome `156.0.8078.73`. Para atualizar os dados com a data local do dia, omita `--reference-date`. Como o dashboard usa a data real do servidor para encerrar o gráfico, uma reprodução futura pode acrescentar meses vazios ao histórico se mantiver a referência antiga.

`capture.py` abre um servidor exclusivo em uma porta livre de loopback e cria um SQLite novo em diretório temporário dentro de `build/portfolio/`. São gerados 14 clientes fictícios sem contatos/documentos, 12 produtos genéricos, 168 vendas e entradas de estoque compatíveis com o histórico. O cadastro demonstrativo usa senha aleatória mantida apenas na memória. Banco, sessões e servidor são encerrados/removidos ao terminar. Não são lidos registros de bases existentes. Não são enviados e-mails ou mensagens.

`capture_settings.py` fornece configurações isoladas antes de importar as configurações da aplicação, substituindo banco, mídia, e-mail e opções de ambiente apenas no processo demonstrativo. O arquivo `.env` não é alterado. O catálogo opcional permanece desligado nas capturas; sua implementação é descrita no JSON como condicional.

`cover.html` define a composição da capa. `content.py` contém o texto público e gera `project-info.json` e este README usando serialização JSON. Atualize esse arquivo se as funcionalidades mudarem; execute novamente a captura e a validação. O gerador sobrescreve apenas os arquivos da entrega e seus auxiliares próprios em `build/portfolio/`.

Prévia obrigatória de **320 × 180**: `build/portfolio/cover-preview-320x180.png`. O nome e a descrição foram conferidos visualmente nesse tamanho. A prévia, os screenshots auxiliares da capa, o HTML de revisão, o relatório de captura e as montagens de revisão ficam fora das sete imagens finais.

## Fontes do conteúdo

- `README.md`: necessidade real da revenda, público, prioridade de uso pelo celular e tecnologias documentadas para desenvolvimento/publicação.
- `CONTEXT_PROJECT.md`: nome do projeto, organização dos módulos, contexto e regras de negócio. Quando a documentação diverge, prevalece o código atual; por exemplo, os scripts e a fonte são locais, e produtos usam múltiplas categorias de catálogo.
- `resale_manager/settings.py`, `resale_manager/urls.py` e `requirements.txt`: módulos, autenticação, configuração de banco, dependências e middleware de arquivos estáticos.
- `templates/base.html`, `templates/dashboard/index.html`, `templates/sales/`, `templates/stock/`, `templates/products/`, `templates/catalog/` e `core/static/core/css/inter.css`: aparência, navegação, filtros, gráficos e fonte.
- `dashboard/views.py`, `sales/models.py`, `sales/views.py`, `products/models.py`, `stock/signals.py`, `stock/views.py`, `customers/`, `users/`, `catalog/views.py`, `catalog/models.py` e `catalog/cart.py`: funcionalidades realmente implementadas.
- `core/utils.py`: processamento de imagens com Pillow. `deploy/gunicorn.service`: execução WSGI com Gunicorn. Versões publicadas somente quando verificadas nos requisitos; ferramentas auxiliares não foram incluídas na stack do produto.

## Data de criação e incerteza

**Estimativa: 2 de maio de 2026**, precisão de dia, `isEstimated: true`.

O histórico local não é raso e contém 39 commits alcançáveis em HEAD. O primeiro commit raiz é `2ee82db30764866257e54684df01dc3f43224b01`, de **2026-05-02T13:37:35-03:00**, mensagem “first commit”, contendo inicialmente um README. No mesmo dia foram adicionados o contexto (`711fffd`) e o MVP (`d4d3290`). As migrações iniciais de produtos e vendas registram geração pelo Django em **2026-05-02 17:20 UTC**, evidência compatível com esse começo do histórico. Não há confirmação independente do primeiro dia de trabalho anterior ao Git, portanto a data é estimada. Não se usou data de clone, redesign, deploy ou geração das imagens.

Para conferir:

```powershell
git log --all --reverse --format="%h %aI %s"
git show 2ee82db --stat
git rev-parse --is-shallow-repository
```

## Contrato do JSON e uso no portfólio

`project-info.json` é UTF-8, JSON válido, contrato `schemaVersion: 1`, idioma `pt-BR`. Inclui identificação, categoria, descrição curta, apresentação, problema, público, criação estimada, funcionalidades, diferenciais, tecnologias com seu papel e sete referências de imagem com texto alternativo e dimensões.

Os caminhos em `assets.cover`, `assets.desktop` e `assets.mobile` são relativos à pasta do JSON. Copie a pasta inteira para os arquivos públicos do portfólio e resolva cada `src` a partir dessa pasta. Use `alt` nas imagens e `width`/`height` para reservar o espaço correto. A capa serve ao card; as outras seis imagens formam a galeria. `creationDate.isEstimated` deve ser respeitado ao exibir a data.

`links.demo` e `links.repository` são `null`: disponibilidade pública e autorização de divulgação não foram confirmadas. Não foram deduzidas URLs a partir de configurações ou remotos privados.

## Limitações reais

O layout é deliberadamente voltado ao celular. O `main` tem `max-w-lg` (512 CSS px) mesmo em desktop; por isso as imagens Full HD têm margens laterais amplas e a navegação permanece no rodapé. Isso preserva a interface implementada e não deve ser apresentado como um dashboard desktop expandido.

As imagens são recortes normais do viewport inicial, não capturas de página inteira. Listas continuam abaixo da dobra; no celular, a maior parte dos gráficos financeiros exige rolagem. O botão flutuante pode sobrepor parte da continuação da lista como na aplicação original. Não se ocultaram elementos para mudar essa apresentação.

O custo do dashboard usa o custo atual cadastrado no produto; não há snapshot histórico de custo em cada item vendido. A indicação de recuperação por e-mail descreve o fluxo implementado; nenhum provedor externo foi acionado nesta preparação. O catálogo depende de configuração opcional e não comprova pagamento online: o checkout registra o pedido e oferece um link de confirmação no WhatsApp.

Os nomes de clientes, produtos, valores e quantidades mostrados são dados demonstrativos criados para esta entrega. Não representam clientes, vendas, resultados ou métricas reais do negócio. O JSON não declara autoria individual exclusiva, tamanho de equipe ou ganhos sem evidência.


O nome exibido neste portfólio foi traduzido para **Gestor de Revendas**, por solicitação do autor. O identificador técnico e o nome registrado nas fontes históricas continuam sendo `resale_manager`. A capa foi recomposta a partir do HTML original, com o título traduzido e as mesmas capturas reais.
