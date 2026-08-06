# Site Praiana

Site institucional da Viação Praiana, feito em React + Vite.

## Rodar local

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

A pasta `dist/` pode ser publicada em qualquer hospedagem estática (Netlify, Vercel, Cloudflare Pages, ou o próprio servidor do domínio praiana.com.br).

## Páginas

- `/` — Home
- `/horarios` — Consulta de linhas e horários
- `/contato` — Agências e atendimento
- `/fretamento` — Orçamento de fretamento

## Links externos mantidos

- Compra Web (TDMax)
- Próximas partidas (Mobilibus)

## Observação sobre horários

Os horários em `src/data/lines.ts` são uma base estruturada (com filtro correto por linha). Vale validar/atualizar com a operação antes do go-live.
