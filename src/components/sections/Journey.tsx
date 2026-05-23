"use client";

import { useReveal } from "@/hooks/useReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JOURNEY } from "@/lib/site";

/**
 * Jornada — 4 passos numerados conectados por linha horizontal sutil.
 *
 * Reduz a fricção do "como funciona": o visitante precisa saber em quantos
 * minutos/dias consegue resultado, e o que ele tem que entregar de input.
 * Sem círculos coloridos, sem arrows agressivos. Linha horizontal fina
 * conecta as etapas como uma régua editorial.
 */
export function Journey() {
  const { ref, revealed } = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="jornada"
      className={`relative bg-[var(--color-sand-100)] py-24 md:py-32 lg:py-36 transition-all duration-1000 ease-out ${
        revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-14">
        <SectionHeading
          eyebrow="Como funciona"
          title="Quatro passos. Sem mistério, sem promessa milagrosa."
          subtitle="Do primeiro contato ao acompanhamento contínuo — tudo em ritmo humano."
          className="max-w-[50ch] mb-16 md:mb-24"
        />

        {/* Grid editorial — sem linha conectora.
            Cada passo: chip de progresso "01 / 04" + número display grande,
            filete curto, título e descrição. */}
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 md:gap-y-14 gap-x-8 lg:gap-x-10">
          {JOURNEY.map((item, i) => (
            <li
              key={item.step}
              className="relative flex flex-col"
              style={
                {
                  // Pequeno escalonamento na revelação — entra no viewport com ritmo
                  "--journey-delay": `${i * 80}ms`,
                } as React.CSSProperties
              }
            >
              {/* Chip de progresso "01 / 04" — discreto */}
              <span className="text-[0.66rem] md:text-[0.7rem] tracking-[0.28em] uppercase font-medium text-[var(--color-moss-600)] mb-3">
                {item.step}
                <span className="text-[var(--color-moss-400)]"> / 04</span>
              </span>

              {/* Número display protagonista */}
              <span className="font-display text-[3rem] md:text-[3.6rem] lg:text-[4rem] leading-[0.9] text-[var(--color-moss-700)] tracking-tight">
                {item.step}
              </span>

              {/* Filete curto — assinatura editorial sob o número */}
              <span
                aria-hidden
                className="block h-px w-10 bg-[var(--color-moss-500)]/60 mt-4 md:mt-5"
              />

              {/* Título */}
              <h3 className="mt-6 font-display text-[1.25rem] md:text-[1.4rem] text-[var(--color-ink-900)] leading-tight">
                {item.title}
              </h3>

              {/* Descrição */}
              <p className="mt-3 text-[0.95rem] md:text-[1.02rem] leading-[1.6] text-[var(--color-ink-700)] text-pretty max-w-[30ch]">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
