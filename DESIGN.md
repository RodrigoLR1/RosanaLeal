# Design

## Color strategy

**Committed.** O verde-musgo carrega 40-60% da superfície — é a voz da marca, não enfeite. Não Restrained (vira genérico). Não Drenched (vira excesso para contexto clínico).

## Palette

Cor oficial da marca (fornecida pela cliente): `#20513E` ≡ `oklch(0.36 0.057 158)` → token `--color-moss-700`.

Todos os neutros têm chroma 0.006–0.018 puxado para o verde da marca. Nada de `#000` / `#fff` puros.

| Token | OKLCH | Uso |
|---|---|---|
| `--color-moss-950` | `0.16 0.025 158` | Fundo do hero, áreas dramáticas |
| `--color-moss-900` | `0.22 0.038 158` | Texto sobre claro, footers densos |
| `--color-moss-700` | `0.36 0.057 158` | **Marca · CTAs primários · barras drenched** |
| `--color-moss-500` | `0.52 0.072 160` | Acento (colarinho verde da blusa), hover |
| `--color-moss-200` | `0.87 0.025 158` | Hover suave, divisores |
| `--color-sand-50` | `0.97 0.008 85` | **Fundo neutro dominante** |
| `--color-sand-100` | `0.93 0.012 80` | Seções secundárias |
| `--color-ink-900` | `0.18 0.015 155` | Tipografia principal |
| `--color-leaf` | `0.62 0.13 145` | Highlights raros, foco |
| `--color-gold` | `0.78 0.07 82` | Linha de credenciais (assinatura tipográfica) |

## Typography

| Função | Fonte | Justificativa |
|---|---|---|
| Body / UI | **Be Vietnam Pro** (300-700) | Humanista, calma, levemente arredondada. Boa em 17-19px. Fora da reflex-reject list (Inter/DM Sans/Plus Jakarta). |
| Display | **Tenor Sans** | "Almost-serif" minimalista que ecoa o monograma RL sem cair em Fraunces/Cormorant/Playfair. |
| Script | **Pinyon Script** | Curva fina e elegante como a assinatura do logo "Rosana Leal Rodrigues". Uso parcimonioso — 1 a 3 palavras por seção. |

Escala fluida via `clamp()`. Body 17→19px (line-height 1.62). Headings com tracking ajustado por tamanho (mais apertado em display grande).

## Layout

- Assimétrico no hero — palavra display gigante sobreposta à foto sangrada.
- Spacing fluido `clamp()` — varia entre seções para criar respiração diferente.
- Sem container central genérico em tudo. Algumas seções full-width, outras max-width controlado.
- Cards usados só onde são a melhor afordância (serviços, depoimentos) — nunca como reflexo.

## Motion

- Entrada do hero: `reveal-clip` 1100ms `--ease-out-quint` na headline, fade-up stagger nos elementos seguintes.
- Sem parallax pesado, sem bounce, sem stagger barulhento.
- Curvas exponenciais: `ease-out-quart`, `ease-out-quint`, `ease-out-expo`.
- `prefers-reduced-motion: reduce` → desliga tudo via media query global.

## Imagery

- **Fotos profissionais da Rosana** em `public/images/` — `rosana-hero.png` é a peça central (gola alta branca, fundo cinza neutro).
- Logo `logo-rl.png` (monograma com folhagem + assinatura script).
- **Molduras visuais** (`.image-frame`) marcam onde imagens futuras serão dropadas — não cards vazios.
