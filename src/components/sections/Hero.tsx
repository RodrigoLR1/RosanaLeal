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
          </div>
        </div>

        {/* ============== Direita: foto em contêiner intencional (5 cols) ============== */}
        <div className="lg:col-span-5 relative flex flex-col items-center justify-center lg:justify-end">
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
              className="hidden lg:block absolute top-10 -right-7 lg:-right-9 text-[0.62rem] tracking-[0.32em] uppercase text-[var(--color-moss-700)]/70 whitespace-nowrap font-medium"
              style={{ writingMode: "vertical-rl" }}
            >
              Rosana Leal Rodrigues · Campina Grande-PB
            </p>

          </div>

          {/* Legenda horizontal — mobile + tablet, centralizada abaixo da foto */}
          <p
            aria-hidden
            className="lg:hidden mt-8 flex items-center justify-center gap-3 text-[0.6rem] tracking-[0.28em] uppercase text-[var(--color-moss-700)]/70 font-medium whitespace-nowrap"
          >
            <span className="h-px w-6 bg-[var(--color-moss-700)]/30" />
            Rosana Leal Rodrigues · Campina Grande-PB
            <span className="h-px w-6 bg-[var(--color-moss-700)]/30" />
          </p>
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
      width="18"
      height="18"
      viewBox="0 0 448 512"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  );
}
