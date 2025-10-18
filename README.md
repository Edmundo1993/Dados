# Kwenda Solutions — Análise de Dados & Power BI

Site estático para apresentação de serviços (Power BI, Automação e Análise Financeira).

## Estrutura
```
.
├── index.html
├── pages/
│   └── thanks.html
└── assets/
    ├── styles.css
    ├── script.js
    └── favicon.png
```

## Como publicar no GitHub Pages
1. Crie um repositório público no GitHub (ex.: `kwenda-solutions-site`).
2. Envie estes arquivos para a branch `main`.
3. No GitHub, vá em **Settings → Pages**:
   - **Build and deployment**: `Deploy from a branch`
   - **Branch**: `main` / `/ (root)`
4. O site ficará disponível em: `https://SEU_USUARIO.github.io/NOME_DO_REPO/`

> Dica: atualize os links absolutos se desejar usar domínio próprio.

## Formulário
- O formulário usa [FormSubmit](https://formsubmit.co/). O fluxo é controlado via JavaScript:
  - Envia os dados (POST)
  - Abre o WhatsApp com mensagem pré-formatada
  - Redireciona para `pages/thanks.html`

Se preferir mudar o e-mail, altere o atributo `action` no `form` em `index.html`.
