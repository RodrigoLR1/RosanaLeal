# Prompts para gerar ornamentos botânicos da Rosana

Aqui ficam os prompts otimizados para gerar os 4 ornamentos que o site espera.
Quando os arquivos chegarem, salve nesta pasta com os nomes indicados e o
Hero vai puxá-los automaticamente.

## Arquivos que o site espera

| Nome do arquivo | Onde aparece | Proporção sugerida |
|---|---|---|
| `branch-vertical.png` | Canto inferior esquerdo do Hero | retrato 3:4 (ex: 600×800) |
| `branch-horizontal.png` | Atrás da foto da Rosana, sangrando à direita | paisagem 16:9 ou 2:1 (ex: 1200×600) |
| `branch-small.png` | Pontuação ao lado da linha de credenciais | quadrado 1:1 ou retrato curto (ex: 400×500) |
| `leaf-solo.png` | Detalhe ao lado do "FARMACÊUTICA · NUTRICIONISTA" | quadrado 1:1 (ex: 300×300) |

**Crítico para todos os arquivos:**
- **Fundo 100% transparente** (PNG com canal alfa)
- Cor verde escuro `#20513E` ou preto que dá pra colorir depois via CSS
- Sem texto, sem assinatura, sem marca de água
- Traço fino e elegante (line-art delicado, NÃO traço grosso)

---

## 🥇 Recomendado: Recraft.ai

**Por que Recraft:** gera SVG vetorial nativo, com fundo transparente nativo,
estilo "vector art" e "line art" são exatamente o que precisamos. Plano grátis
dá ~50 imagens/dia. Sai pronto pra usar no site sem tratamento.

**URL:** https://www.recraft.ai

**Configurações:**
- Style: **Vector Illustration → Line Art** (ou "Engraving")
- Background: **Transparent**
- Size: ver tabela acima
- Cor: monochrome, hex `#20513E`

### Prompt 1 — `branch-vertical.png`

```
A delicate single botanical branch growing vertically, drawn in fine line art style, monochromatic dark sage green color (#20513E), with 5 to 6 pairs of small simple oval leaves arranged opposite to each other along a slightly curved central stem, elegant and minimalist, similar to a refined wedding invitation ornament or a luxury perfume bottle illustration, very thin even line weight, no shading, no fill, no background, isolated on transparent background, hand-drawn organic feel but balanced and symmetric, botanical illustration style of a high-end apothecary brand
```

### Prompt 2 — `branch-horizontal.png`

```
A delicate single botanical branch laying horizontally, drawn in fine line art style, monochromatic dark sage green color (#20513E), with 6 to 8 small simple oval leaves arranged alternating along a gently curving stem that flows from left to right, the rightmost leaf curling slightly upward like a natural tip, elegant and minimalist, similar to an art-nouveau ornament or luxury botanical brand decoration, very thin even line weight, no shading, no fill, no background, isolated on transparent background, refined and symmetric composition
```

### Prompt 3 — `branch-small.png`

```
A very small delicate botanical sprig with only 3 to 4 oval leaves on a short stem, line art style, monochromatic dark sage green color (#20513E), elegant and minimalist, like a tiny ornament from a luxury wedding stationery, very thin line weight, no shading, no fill, no background, transparent background, balanced composition, refined botanical illustration
```

### Prompt 4 — `leaf-solo.png`

```
A single elegant oval leaf with a short stem, line art style, monochromatic dark sage green color (#20513E), drawn with one fine continuous line and one subtle central vein, minimalist botanical illustration, like a delicate ornament from a luxury apothecary label, very thin line weight, no shading, no fill, no background, transparent background, balanced and refined
```

---

## Alternativa 1: ChatGPT (DALL-E 3)

**Como usar:** cole o prompt direto no ChatGPT pedindo a imagem.
**Limitação:** DALL-E 3 não exporta SVG. Vai vir PNG. E o fundo transparente
exige você pedir explicitamente — ainda assim às vezes vem com fundo branco
que precisa ser removido (use https://www.remove.bg ou Photoshop).

### Prompt 1 — `branch-vertical.png`

```
Generate an image: a delicate botanical branch growing vertically, line art illustration in dark sage green (#20513E) on a fully transparent background, with 5 pairs of small oval leaves arranged opposite each other along a softly curved stem. Style: elegant minimalist botanical illustration, like a luxury wedding invitation ornament or an art-nouveau decoration. Very thin even line weight, no fill, no shading, no text, isolated subject. Aspect ratio 3:4. Transparent PNG output, no background color, no white box around the artwork.
```

### Prompt 2 — `branch-horizontal.png`

```
Generate an image: a delicate botanical branch laying horizontally, line art illustration in dark sage green (#20513E) on a fully transparent background, with 6 to 8 small oval leaves alternating along a gently curving stem flowing left to right. The rightmost tip should curl gently upward. Style: elegant minimalist art-nouveau ornament. Very thin even line weight, no fill, no shading, no text, isolated subject. Aspect ratio 16:9. Transparent PNG output, no background color.
```

### Prompt 3 — `branch-small.png`

```
Generate an image: a tiny delicate botanical sprig with only 3 small oval leaves on a short stem, line art illustration in dark sage green (#20513E) on a fully transparent background. Style: elegant minimalist ornament, like a corner detail from luxury stationery. Very thin even line weight, no fill, no shading, no text. Square format. Transparent PNG, no white background.
```

### Prompt 4 — `leaf-solo.png`

```
Generate an image: a single elegant oval leaf with a short stem, line art in dark sage green (#20513E) on a fully transparent background, drawn with one fine continuous outline and one subtle central vein. Style: minimalist botanical ornament from a luxury apothecary label. Very thin line weight, no fill, no shading, no text. Square format. Transparent PNG.
```

---

## Alternativa 2: Midjourney

**Como usar:** cole o prompt no Discord/web do Midjourney. Sempre inclua os
parâmetros `--no` para excluir elementos indesejados e `--ar` para a proporção.

### Prompt 1 — `branch-vertical.png`

```
delicate botanical branch, vertical orientation, line art illustration, monochromatic dark sage green #20513E, 5 pairs of small oval leaves opposite arrangement on a gently curved central stem, art-nouveau ornament style, luxury wedding stationery, very thin even line weight, refined minimalist botanical illustration --no fill shading color background text white box --ar 3:4 --style raw --v 6.1
```

### Prompt 2 — `branch-horizontal.png`

```
delicate botanical branch, horizontal orientation, line art illustration, monochromatic dark sage green #20513E, 7 small oval leaves alternating along a gently curving stem flowing left to right, rightmost leaf curling upward, art-nouveau ornament, refined minimalist, very thin line weight --no fill shading color background text white box --ar 16:9 --style raw --v 6.1
```

### Prompt 3 — `branch-small.png`

```
tiny botanical sprig, 3 small oval leaves on a short stem, line art, monochromatic dark sage green #20513E, luxury stationery corner ornament, very thin elegant line, minimalist --no fill shading color background text --ar 1:1 --style raw --v 6.1
```

### Prompt 4 — `leaf-solo.png`

```
single elegant oval leaf with short stem, line art, monochromatic dark sage green #20513E, one continuous fine outline plus subtle central vein, luxury apothecary label ornament, minimalist --no fill shading color background text --ar 1:1 --style raw --v 6.1
```

---

## Como integrar de volta no site

1. Salve os 4 arquivos nesta pasta (`public/ornaments/`) com os nomes exatos da tabela.
2. Me avisa quando estiverem prontos — eu troco os 4 `{/* TODO */}` do `Hero.tsx`
   por `<Image src="/ornaments/..." />` com os tamanhos/opacidades certos.
3. Se o fundo não vier transparente, use https://www.remove.bg (grátis até 720p)
   ou se preferir mando trabalhar via CSS `mix-blend-mode: multiply` para sumir
   o branco (funciona pra fundos quase-brancos).

---

## Bibliotecas alternativas (assets prontos, grátis)

Se você preferir pegar pronto em vez de gerar:

- **SVG Repo** — https://www.svgrepo.com/collection/botany-3/ (CC0/MIT)
- **Phosphor Icons** — https://phosphoricons.com (busca: leaf, plant) (MIT)
- **Streamline** — https://www.streamlinehq.com (free + paid, line-art consistente)
- **Noun Project** — https://thenounproject.com (busca: "botanical line art")

Aviso: assets externos vão exigir ajuste de cor e proporção para encaixar com
a paleta `#20513E` da marca dela.
