"use client";

import Image from "next/image";
import { LinkButton } from "@/components/ui/Button";
import { ScriptWord } from "@/components/ui/ScriptWord";
import { SITE, whatsappUrl } from "@/lib/site";
import { trackWhatsAppClick } from "@/lib/track";

/**
 * Hero editorial v2 — fundo claro, composição calculada.
 *
 * Estratégia: branco quente (sand-50) como dominante; o verde-musgo
 * aparece com intenção, em pontos de força (palavra-acento "saúde",
 * CTA primário, filete de credenciais, monograma decorativo).
 *
 * Foto em contêiner intencional com:
 *   - retângulo "passe-partout" sand-100 deslocado atrás (sombra editorial);
 *   - filete vertical moss-700 à esquerda da foto (assinatura);
 *   - número de capítulo "01" gigante atrás em sand-200 (marca-d'água);
 *   - legenda vertical lateral com formação dela.
 *
 * "Saúde" volta como detalhe elegante — uma única palavra em script,
 * em proporção com a Tenor Sans, em moss-700.
 */
export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-[var(--color-sand-50)] text-[var(--color-ink-900)]"
    >
      {/* Ramo vertical — canto inferior esquerdo, ornamentação botânica */}
      <Image
        src="/images/branch-vertical.png"
        alt=""
        aria-hidden="true"
        width={300}
        height={800}
        priority={false}
        className="pointer-events-none select-none absolute -left-4 md:-left-6 bottom-0 hidden md:block w-32 lg:w-44 h-auto opacity-30 animate-float-soft z-0"
      />

      <div className="relative mx-auto max-w-[1320px] grid grid-cols-1 lg:grid-cols-12 gap-y-14 lg:gap-x-12 px-6 md:px-10 lg:px-14 pt-32 md:pt-36 pb-20 lg:pb-28">
        {/* ============== Esquerda: tipografia (7 cols) ============== */}
        <div className="lg:col-span-7 flex flex-col justify-center relative z-10">
          {/* Folha-solo flutuando à esquerda do sobre-título — pontuação botânica */}
          <Image
            src="/images/leaf-solo.png"
            alt=""
            aria-hidden="true"
            width={120}
            height={240}
            priority={false}
            className="pointer-events-none select-none hidden md:block absolute -left-3 -top-8 w-10 lg:w-12 h-auto opacity-35 animate-float-soft"
            style={{ animationDelay: "1.5s" } as React.CSSProperties}
          />

          {/* Sobre-título com filete */}
          <p
            className="animate-reveal-up flex items-center gap-3 text-[0.7rem] md:text-[0.74rem] tracking-[0.32em] uppercase font-medium text-[var(--color-moss-700)] mb-8"
          >
            <span className="inline-block w-10 h-px bg-[var(--color-moss-500)]" />
            Farmacêutica · Nutricionista Clínica
          </p>

          {/* Headline — display calmo, "saúde" em script comportado */}
          <h1 className="font-display text-balance leading-[1.02] text-[var(--color-ink-900)]">
            <span
              className="block animate-reveal-clip text-[clamp(2.2rem,5.4vw,4.25rem)]"
            >
              Cuidar da sua{" "}
              <ScriptWord className="text-[var(--color-moss-700)] text-[clamp(2.8rem,7.2vw,5.5rem)] leading-[0.85] align-baseline pr-1">
                saúde
              </ScriptWord>
            </span>
            <span
              className="block animate-reveal-clip mt-2 md:mt-3 text-[clamp(2.2rem,5.4vw,4.25rem)]"
              style={{ animationDelay: "150ms" }}
            >
              vai além de remédio
            </span>
            <span
              className="block animate-reveal-clip text-[clamp(2.2rem,5.4vw,4.25rem)] text-[var(--color-ink-700)]"
              style={{ animationDelay: "250ms" }}
            >
              ou de fazer dieta.
            </span>
          </h1>

          {/* Sub */}
          <p
            className="animate-reveal-up mt-7 md:mt-9 max-w-[54ch] text-pretty text-[1.05rem] md:text-[1.15rem] leading-[1.65] text-[var(--color-ink-700)]"
            style={{ animationDelay: "450ms" }}
          >
            Atendimento clínico que entende como{" "}
            <span className="text-[var(--color-ink-900)] font-medium">
              medicamentos, alimentação e corpo
            </span>{" "}
            conversam entre si — para o seu equilíbrio de verdade.
          </p>

          {/* CTAs */}
          <div
            className="animate-reveal-up mt-9 md:mt-11 flex flex-wrap items-center gap-3 md:gap-4"
            style={{ animationDelay: "600ms" }}
          >
            <LinkButton
              href="#servicos"
              variant="primary"
              size="lg"
              icon={<ArrowDown />}
            >
              Conhecer os serviços
            </LinkButton>
            <LinkButton
              href={whatsappUrl()}
              external
              variant="ghost"
              size="lg"
              icon={<WhatsAppIcon />}
              onClick={() => trackWhatsAppClick("hero")}
            >
              Falar no WhatsApp
            </LinkButton>
          </div>

          {/* Linha de credenciais — centralizada no mobile, editorial no desktop */}
          <div
            className="animate-reveal-up mt-14 md:mt-20 flex items-center justify-center md:justify-start gap-4 relative"
            style={{ animationDelay: "800ms" }}
          >
            {/* Hairline editorial — só aparece no desktop */}
            <span
              aria-hidden
              className="hidden md:block animate-draw-line h-px bg-[var(--color-moss-700)]/40 w-20"
            />
            <p className="text-[0.66rem] md:text-[0.7rem] tracking-[0.28em] uppercase text-[var(--color-moss-700)] font-medium whitespace-nowrap">
              {SITE.credentials.crfPB} · {SITE.credentials.crn6}
            </p>
            {/* Ramo pequeno após a linha de credenciais — assinatura discreta */}
            <Image
              src="/images/branch-small.png"
              alt=""
              aria-hidden="true"
              width={140}
              height={180}
              priority={false}
              className="pointer-events-none select-none hidden md:block w-10 h-auto opacity-35 ml-2"
            />
          </div>
        </div>

        {/* ============== Direita: foto em contêiner intencional (5 cols) ============== */}
        <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-[480px] aspect-[4/5]">
            {/* Ramo botânico horizontal — sangra acima e à direita da foto,
                como uma assinatura editorial. Z=0 para ficar atrás do passe-partout. */}
            <Image
              src="/images/branch-horizontal.png"
              alt=""
              aria-hidden="true"
              width={900}
              height={400}
              priority={false}
              className="pointer-events-none select-none absolute -top-20 md:-top-28 -right-10 md:-right-20 w-[115%] md:w-[125%] h-auto opacity-30 z-0"
            />

            {/* Passe-partout — retângulo sand-100 deslocado atrás da foto */}
            <div
              aria-hidden
              className="absolute inset-0 translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 bg-[var(--color-sand-100)] rounded-[2px]"
            />

            {/* Filete vertical moss-700 — assinatura */}
            <div
              aria-hidden
              className="absolute -left-4 md:-left-6 top-12 bottom-12 w-px bg-[var(--color-moss-700)]/70"
            />

            {/* Foto em moldura */}
            <div
              className="relative h-full w-full overflow-hidden rounded-[2px] bg-[var(--color-sand-100)] animate-reveal-up"
              style={{ animationDelay: "350ms", animationDuration: "1200ms" }}
            >
              <Image
                src="/images/rosana-hero.png"
                alt="Rosana Leal Rodrigues, farmacêutica e nutricionista clínica, em retrato profissional"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 480px"
                className="object-cover object-top"
              />
            </div>

            {/* Legenda lateral vertical — crédito de revista.
                Usa writing-mode (CSS nativo) em vez de rotate+translate —
                posicionamento previsível e não escapa do contêiner. */}
            <p
              aria-hidden
              className="hidden md:block absolute top-10 -right-7 lg:-right-9 text-[0.62rem] tracking-[0.32em] uppercase text-[var(--color-moss-700)]/70 whitespace-nowrap font-medium"
              style={{ writingMode: "vertical-rl" }}
            >
              Rosana Leal Rodrigues · Campina Grande-PB
            </p>

            {/* Tag "Agenda aberta" — discreta, no rodapé da foto */}
            <div
              className="absolute bottom-4 left-4 md:bottom-5 md:left-5 flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[var(--color-sand-50)]/95 backdrop-blur-sm border border-[var(--color-moss-200)] animate-reveal-up shadow-[0_4px_12px_rgba(32,81,62,0.08)]"
              style={{ animationDelay: "1000ms", animationDuration: "800ms" }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-leaf)] opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-leaf)]" />
              </span>
              <span className="text-[0.65rem] tracking-[0.18em] uppercase text-[var(--color-moss-800)] font-semibold">
                Agenda aberta
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Filete inferior — encerramento do hero */}
      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-[1320px] h-px bg-gradient-to-r from-transparent via-[var(--color-moss-300)] to-transparent"
      />
    </section>
  );
}

/* ---------- Ícones inline ---------- */

function ArrowDown() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 3v10M3.5 8.5L8 13l4.5-4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.6 2.32A7.85 7.85 0 0 0 8 0C3.58 0 0 3.58 0 8c0 1.4.36 2.77 1.05 3.98L0 16l4.13-1.08A8.06 8.06 0 0 0 8 16c4.42 0 8-3.58 8-8 0-2.13-.83-4.14-2.4-5.68zM8 14.7a6.66 6.66 0 0 1-3.4-.93l-.24-.14-2.46.65.66-2.4-.16-.25A6.66 6.66 0 1 1 14.66 8 6.67 6.67 0 0 1 8 14.7zm3.66-5a6.83 6.83 0 0 1-1.07-.5c-.13-.06-.22-.1-.31.06s-.36.5-.44.6c-.08.1-.16.11-.3.04a4.33 4.33 0 0 1-2.13-1.87c-.16-.27.16-.25.46-.85.05-.1.02-.18 0-.25-.02-.07-.31-.75-.43-1.03-.11-.27-.23-.23-.31-.23H6.85a.55.55 0 0 0-.4.18c-.13.15-.5.5-.5 1.2 0 .72.51 1.4.58 1.5.07.1 1 1.53 2.43 2.15.34.15.61.24.82.31.34.11.66.1.9.06.27-.04.84-.34.96-.67.12-.34.12-.62.08-.68-.03-.06-.13-.1-.27-.16z" />
    </svg>
  );
}
