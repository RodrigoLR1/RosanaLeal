"use client";

import { useReveal } from "@/hooks/useReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/site";

/**
 * Depoimentos — prova social. 3 cards em grid, sem foto de paciente
 * (privacidade), apenas inicial + sobrenome abreviado.
 *
 * Conteúdo atualmente PLACEHOLDER — [a confirmar com Rosana]. A estrutura
 * está pronta para receber depoimentos reais. Se ela não tiver material
 * por enquanto, basta retirar o <Testimonials /> do page.tsx e a seção
 * some sem deixar buraco.
 */
export function Testimonials() {
  const { ref, revealed } = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="depoimentos"
      className={`relative bg-[var(--color-sand-100)] py-24 md:py-32 lg:py-36 transition-all duration-1000 ease-out ${
        revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-14">
        <SectionHeading
          eyebrow="Quem já passou por aqui"
          title="O que pacientes contam."
          subtitle="Histórias reais, contadas com a permissão delas. Nomes preservados."
          align="center"
          className="mx-auto items-center text-center mb-16 md:mb-20 max-w-[44ch]"
        />

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {TESTIMONIALS.map((t, i) => (
            <li
              key={i}
              className="relative flex flex-col bg-[var(--color-sand-50)] rounded-[3px] p-7 md:p-9 lg:p-10 shadow-[0_2px_12px_rgba(32,81,62,0.04)]"
            >
              {/* Aspas decorativas */}
              <span
                aria-hidden
                className="absolute top-4 left-6 md:top-6 md:left-8 font-display text-[3rem] md:text-[3.5rem] leading-none text-[var(--color-moss-300)] select-none"
              >
                &ldquo;
              </span>

              <blockquote className="relative pt-8 md:pt-10 flex-1">
                <p className="font-display italic text-[1.02rem] md:text-[1.1rem] leading-[1.55] text-[var(--color-ink-900)] text-pretty">
                  {t.quote}
                </p>
              </blockquote>

              <footer className="mt-7 pt-5 border-t border-[var(--color-moss-200)] flex items-baseline gap-2">
                <cite className="not-italic text-[0.95rem] font-medium text-[var(--color-moss-800)]">
                  — {t.author}
                </cite>
                <span className="text-[0.78rem] text-[var(--color-ink-500)]">
                  · {t.context}
                </span>
              </footer>
            </li>
          ))}
        </ul>

        {/* Aviso discreto no rodapé — sumir quando depoimentos forem reais */}
        <p className="mt-12 text-center text-[0.7rem] tracking-[0.18em] uppercase text-[var(--color-moss-500)]/70">
          {/* [a confirmar com Rosana] — substituir por depoimentos reais */}
        </p>
      </div>
    </section>
  );
}
