"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/site";
import { TestimonialDeck } from "./TestimonialDeck";

/**
 * Depoimentos — prova social.
 *
 * Mobile: deck de cards com swipe (TestimonialDeck) — 1 card em destaque,
 * 2 atrás sugerindo profundidade, arrasto pra trocar.
 * Desktop (md+): janela de 3 cards visíveis com setas pra deslizar pelos
 * 7 depoimentos. Dots indicam a posição da janela.
 *
 * Estrutura pronta para receber depoimentos reais. Se não houver material,
 * basta retirar o <Testimonials /> do page.tsx e a seção some sem deixar
 * buraco.
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

        {/* Mobile — deck de cards com swipe */}
        <TestimonialDeck items={TESTIMONIALS} />

        {/* Desktop — janela de 3 cards + setas pra navegar */}
        <TestimonialDesktopCarousel />
      </div>
    </section>
  );
}

/* ============== Desktop Carousel ============== */

const VISIBLE = 3;

function TestimonialDesktopCarousel() {
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, TESTIMONIALS.length - VISIBLE);
  const canPrev = index > 0;
  const canNext = index < maxIndex;

  const visibleItems = TESTIMONIALS.slice(index, index + VISIBLE);

  return (
    <div
      className="hidden md:block"
      role="group"
      aria-roledescription="carousel"
      aria-label="Depoimentos de pacientes"
    >
      {/* Grid das 3 cards visíveis */}
      <ul className="grid grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {visibleItems.map((t, i) => (
          <li
            key={`${index}-${i}`}
            className="relative flex flex-col bg-[var(--color-sand-50)] rounded-[3px] p-7 md:p-9 lg:p-10 shadow-[0_2px_12px_rgba(32,81,62,0.04)] animate-reveal-up"
            style={{ animationDelay: `${i * 80}ms` }}
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

            <footer className="mt-7 pt-5 border-t border-[var(--color-moss-200)] flex items-baseline gap-2 flex-wrap">
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

      {/* Setas + dots */}
      <div className="mt-10 flex items-center justify-center gap-5">
        <button
          type="button"
          aria-label="Depoimentos anteriores"
          disabled={!canPrev}
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-[var(--color-moss-300)]/60 text-[var(--color-moss-700)] transition-all duration-300 hover:bg-[var(--color-moss-100)] hover:border-[var(--color-moss-500)] disabled:opacity-25 disabled:pointer-events-none"
        >
          <ArrowLeft />
        </button>

        <ul className="flex items-center gap-2" role="tablist">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <li key={i}>
              <button
                type="button"
                role="tab"
                aria-label={`Mostrar depoimentos a partir do ${i + 1}`}
                aria-selected={i === index}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-8 bg-[var(--color-moss-700)]"
                    : "w-1.5 bg-[var(--color-moss-300)] hover:bg-[var(--color-moss-500)]"
                }`}
              />
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="Próximos depoimentos"
          disabled={!canNext}
          onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-[var(--color-moss-300)]/60 text-[var(--color-moss-700)] transition-all duration-300 hover:bg-[var(--color-moss-100)] hover:border-[var(--color-moss-500)] disabled:opacity-25 disabled:pointer-events-none"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}

/* ============== Ícones ============== */

function ArrowLeft() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M11.5 7h-9M6.5 3l-4 4 4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.5 7h9M7.5 3l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
