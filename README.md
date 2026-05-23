# Nutrifarma — Rosana Leal Rodrigues

Landing page one-pager para Rosana Leal Rodrigues, **Farmacêutica e Nutricionista Clínica em Campina Grande-PB**. Construída como vitrine institucional com WhatsApp como canal de conversão.

> Documentação estratégica: [`PRODUCT.md`](./PRODUCT.md) · Sistema visual: [`DESIGN.md`](./DESIGN.md)

---

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript 5**
- **Tailwind v4** (config via `@theme` em `globals.css`, sem `tailwind.config.ts`)
- Fontes: Be Vietnam Pro · Tenor Sans · Pinyon Script (via `next/font/google`)

---

## Quick start

```bash
npm install
cp .env.example .env.local   # opcional — só se for plugar tracking
npm run dev                  # http://localhost:3000
```

Outros scripts:

```bash
npm run build       # build de produção
npm start           # serve o build
npx tsc --noEmit    # typecheck sem emitir arquivos
```

---

## Estrutura

```
src/
├── app/
│   ├── layout.tsx            # fontes, metadata SEO, JSON-LD, Analytics
│   ├── page.tsx              # compõe todas as seções na ordem narrativa
│   ├── globals.css           # tokens OKLCH, animações, base
│   ├── sitemap.ts            # /sitemap.xml dinâmico
│   ├── robots.ts             # /robots.txt dinâmico
│   ├── manifest.ts           # PWA manifest
│   ├── opengraph-image.tsx   # OG preview 1200×630 dinâmico
│   ├── icon.tsx              # favicon 64×64
│   └── apple-icon.tsx        # apple touch icon 180×180
├── components/
│   ├── layout/               # TopBar, Footer, WhatsAppFloat
│   ├── sections/             # Hero, Differential, Services, Journey, About, Testimonials, FAQ, ContactCTA
│   ├── ui/                   # Button, Accordion, ScriptWord, SectionHeading
│   ├── seo/                  # JsonLd (LocalBusiness + MedicalBusiness + Person)
│   └── analytics/            # Analytics (Pixel + Ads + GA, condicional por env)
├── hooks/
│   └── useReveal.ts          # IntersectionObserver para fade-in nas seções
└── lib/
    ├── site.ts               # SITE config + SERVICES, JOURNEY, FAQ, TESTIMONIALS
    └── track.ts              # helpers de tracking (trackWhatsAppClick, etc.)

public/
├── images/                   # fotos da Rosana, logo, ornamentos botânicos
└── ornaments/PROMPTS.md      # prompts para gerar mais ornamentos via IA
```

---

## Conteúdo a confirmar com a Rosana

Buscar por `[a confirmar com Rosana]` no projeto para ver tudo que está pendente:

```bash
grep -r "a confirmar com Rosana" src/
```

Resumo:
- Números reais de **CRF-PB** e **CRN-6**
- **Anos de prática** exato (atualmente: 12+)
- **Endereço** completo do consultório + CEP
- **Horários** reais de atendimento
- **Valor** da consulta (se exibir publicamente)
- Política de **convênio**
- **Raio** do atendimento domiciliar + se cobra valor extra
- **Depoimentos** reais (texto + nome com sobrenome abreviado)
- Campos da **pós-graduação**
- **Email** profissional
- **Domínio** definitivo

Esses campos vivem em:
- `src/lib/site.ts` (a maioria — CRF, CRN, telefone, FAQ, depoimentos)
- `src/components/sections/About.tsx` (bio)
- `src/components/sections/ContactCTA.tsx` (endereço, horários)

---

## Tracking (em STANDBY)

A infraestrutura está plantada mas **dormente** — os scripts só são injetados quando as variáveis de ambiente existirem. Quando a cliente decidir rodar campanhas:

1. **Meta Pixel:**
   - Criar Pixel em [business.facebook.com](https://business.facebook.com) → Eventos → Pixels
   - Copiar o ID e setar em `NEXT_PUBLIC_META_PIXEL_ID`

2. **Google Ads:**
   - Criar conta em [ads.google.com](https://ads.google.com)
   - Ferramentas → Conversões → Nova conversão → "Lead"
   - Copiar `AW-XXXXXX` em `NEXT_PUBLIC_GOOGLE_ADS_ID`
   - Copiar `conversion label` em `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL`

3. **Google Analytics 4:**
   - Criar property em [analytics.google.com](https://analytics.google.com)
   - Copiar `G-XXXXXX` em `NEXT_PUBLIC_GA_ID`

Eventos disparados automaticamente:
- `whatsapp_click` — em todos os botões de WhatsApp (com `source` = hero/about/contact-cta/etc.)
- `service_view` — quando alguém clica num card de serviço
- `faq_open` — ao abrir uma pergunta do FAQ
- `Lead` (Pixel) — alias do `whatsapp_click`, conta como conversão

---

## Deploy

### Vercel (recomendado)

1. Push do repositório para GitHub
2. [vercel.com/new](https://vercel.com/new) → importar o repo
3. **Environment Variables** → colar o conteúdo do `.env.local` (se houver)
4. Deploy

Domínio custom: Vercel → Project → Settings → Domains. Apontar o registrador (Registro.br, GoDaddy, etc.) para os nameservers da Vercel.

### Outros (Netlify, Railway, Cloud Run)

Build estático: `npm run build` → pasta `.next/`. Funciona em qualquer host Node 18+.

---

## Acessibilidade

- Texto base 17-19px (público 35-65 anos)
- Contraste WCAG AA validado nos pares verde/areia
- `prefers-reduced-motion` respeitado em todas as animações
- Alvos de toque ≥44px
- Foco visível em todos os interativos
- Alt-text descritivo nas fotos da Rosana
- HTML semântico (`<section>`, `<article>`, `<blockquote>`, `<nav>`, etc.)
- `lang="pt-BR"` na root
