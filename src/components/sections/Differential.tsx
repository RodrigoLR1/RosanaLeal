"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";
import { ScriptWord } from "@/components/ui/ScriptWord";

/**
 * Diferencial — o angle único dela.
 *
 * Background moss-700 drenched: a única seção (junto com Contato final)
 * que quebra o tom claro do site. Sinaliza "essa parte é diferente,
 * preste atenção". É aqui que a dupla formação aparece como vantagem
 * real, não como medalha.
 */
const ITEMS = [
  {
    label: "sua disposição",
    description:
      "níveis de energia, sono, qualidade da fadiga ao longo do dia",
  },
  {
    label: "sua absorção de nutrientes",
    description: "ferro, B12, magnésio, ácido fólico, cálcio — o que entra e o que se perde",
  },
  {
    label: "seu peso",
    description: "ganhos ou perdas que não fazem sentido com sua rotina",
  },
  {
    label: "seu humor",
    description: "ansiedade, oscilações, sintomas que parecem 'só psicológicos'",
  },
] as const;

export function Differential() {
  const { ref, revealed } = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="diferencial"
      className="relative isolate overflow-hidden bg-[var(--color-moss-700)] text-[var(--color-sand-50)] py-24 md:py-32 lg:py-40"
    >
      {/* Textura botânica ao fundo — branch-horizontal em opacidade muito baixa */}
      <Image
        src="/images/branch-horizontal.png"
        alt=""
        aria-hidden="true"
        width={1600}
        height={700}
        priority={false}
        className="pointer-events-none select-none absolute -bottom-16 -left-20 w-[120%] h-auto opacity-[0.08] invert"
      />
      <Image
        src="/images/branch-vertical.png"
        alt=""
        aria-hidden="true"
        width={400}
        height={1000}
        priority={false}
        className="pointer-events-none select-none absolute -top-10 -right-12 w-72 h-auto opacity-[0.10] invert hidden lg:block"
      />

      <div
        className={`relative mx-auto max-w-[1200px] px-6 md:px-10 lg:px-14 transition-all duration-1000 ease-out ${
          revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Eyebrow */}
        <p className="flex items-center gap-3 text-[0.7rem] md:text-[0.74rem] tracking-[0.32em] uppercase font-medium text-[var(--color-moss-200)] mb-7">
          <span className="inline-block w-10 h-px bg-[var(--color-moss-300)]" />
          O angle único
        </p>

        {/* Headline */}
        <h2 className="font-display text-balance leading-[1.03] text-[clamp(2.2rem,5vw,4rem)] text-[var(--color-sand-50)] max-w-[18ch]">
          O que ninguém{" "}
          <ScriptWord className="text-[var(--color-moss-200)] text-[clamp(2.8rem,6.2vw,5rem)] leading-[0.85]">
            te conta
          </ScriptWord>
          ...
        </h2>

        <p className="mt-7 md:mt-9 max-w-[58ch] text-pretty text-[1.05rem] md:text-[1.18rem] leading-[1.65] text-[var(--color-sand-50)]/85">
          Alguns medicamentos podem interferir no seu corpo de um jeito que você
          nem imagina:
        </p>

        {/* Lista editorial — sem cards, sem ícones com círculo cheio */}
        <ul className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-14 max-w-[1000px]">
          {ITEMS.map((item, i) => (
            <li
              key={item.label}
              className="flex gap-5 md:gap-6 border-t border-[var(--color-moss-500)]/40 pt-5 md:pt-7"
            >
              <span className="font-display text-[var(--color-moss-200)] text-[1.05rem] md:text-[1.18rem] tracking-wide shrink-0 pt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-[1.35rem] md:text-[1.7rem] text-[var(--color-sand-50)] leading-tight">
                  {item.label}
                </h3>
                <p className="mt-2 text-[0.98rem] md:text-[1.05rem] leading-[1.55] text-[var(--color-sand-50)]/70">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* Card de fechamento — sand-50 flutuante com a frase-âncora */}
        <div className="relative mt-16 md:mt-24 max-w-[820px]">
          <div
            aria-hidden
            className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-full h-full bg-[var(--color-moss-500)]/30 rounded-[3px]"
          />
          <div className="relative bg-[var(--color-sand-50)] text-[var(--color-ink-900)] rounded-[3px] p-7 md:p-10 lg:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.15)]">
            <p className="font-display text-[1.15rem] md:text-[1.4rem] lg:text-[1.55rem] leading-[1.4] text-balance">
              Sou uma das poucas profissionais de Campina Grande com{" "}
              <span className="text-[var(--color-moss-700)] font-medium">
                dupla formação
              </span>{" "}
              — Farmacêutica (CRF-PB) e Nutricionista Clínica (CRN-6). É essa
              visão integrada que aplico em cada consulta.
            </p>
            <p className="mt-5 text-[0.7rem] md:text-[0.74rem] tracking-[0.28em] uppercase font-medium text-[var(--color-moss-700)]">
              — Rosana Leal Rodrigues
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
