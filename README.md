# Workbook Pro Campus Júnior

Apresentação digital do Colégio Pro Campus Júnior. O projeto reúne conteúdo institucional e educacional em uma página navegável, com versões em português e inglês e opção de exportação em PDF.

**[Abrir demonstração](https://workbook-pro-campus.vercel.app/)**

## O que foi desenvolvido

- Interface web responsiva, organizada em seções e com navegação lateral.
- Alternância de idioma no conteúdo da apresentação.
- Componentes para textos, imagens, linha do tempo e gráficos.
- Rota de API para gerar uma versão em PDF.

## Tecnologias e estrutura

Next.js, React, TypeScript e Tailwind CSS. A interface fica em `app/page.tsx` e nos componentes em `components/workbook/`; a exportação fica em `app/api/pdf/route.ts`. A geração local usa Puppeteer e `pdf-lib`; no ambiente de produção, a rota se conecta ao Browserless.

## Executar localmente

Requer Node.js e npm.

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`. A navegação e a troca de idioma podem ser verificadas na interface. A rota de PDF em produção requer `BROWSERLESS_TOKEN` e usa `NEXT_PUBLIC_SITE_URL` para apontar para o endereço publicado; não inclua credenciais no repositório.

## Contexto

Este repositório mostra a implementação web de uma apresentação do colégio. Para avaliar o resultado, comece pela [demonstração](https://workbook-pro-campus.vercel.app/) e depois veja a [página principal](app/page.tsx) e a [rota de PDF](app/api/pdf/route.ts).
