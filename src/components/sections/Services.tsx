"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";
import { SERVICES, whatsappUrl } from "@/lib/site";
import { trackWhatsAppClick, trackServiceView } from "@/lib/track";

/**
 * Serviços — 2 cards horizontais (não grade de 3+ idênticos).
 *
 * Cada serviço tem uma mensagem de WhatsApp pré-preenchida específica,
 * facilitando o tracking de qual oferta converteu.
 */
export function Services() {
  const { ref, revealed } = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="servicos"
      className={`relative bg-[var(--color-sand-50)] py-24 md:py-32 lg:py-40 transition-all duration-1000 ease-out ${
        revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-14">
        <SectionHeading
          eyebrow="Como atendo"
          title="Dois jeitos de cuidar de você."
          subtitle="Consultório ou onde estiver — a abordagem clínica é a mesma. Você escolhe o formato que cabe na sua rotina."
          className="max-w-[44ch] mb-14 md:mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={i}
              onClick={() => {
                trackServiceView(service.title);
                trackWhatsAppClick(`service-${service.id}`);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
  onClick,
}: {
  service: (typeof SERVICES)[number];
  index: number;
  onClick: () => void;
}) {
  const isPhoto = service.image.includes("rosana");

  return (
    <article className="group relative flex flex-col bg-[var(--color-sand-100)] rounded-[4px] overflow-hidden transition-transform duration-500 ease-out hover:-translate-y-1 shadow-[0_2px_12px_rgba(32,81,62,0.04)] hover:shadow-[0_12px_36px_rgba(32,81,62,0.10)]">
      {/* Imagem do serviço */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-sand-200)]">
        {isPhoto ? (
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          // Card "domiciliar" — sem foto real. Cor sólida + ornamento botânico
          <div className="absolute inset-0 bg-[var(--color-moss-700)] flex items-center justify-center overflow-hidden">
            <Image
              src={service.image}
              alt=""
              aria-hidden="true"
              width={900}
              height={400}
              className="w-[130%] h-auto opacity-30 invert pointer-events-none select-none"
            />
          </div>
        )}

        {/* Selo numérico */}
        <span className="absolute top-4 left-4 md:top-5 md:left-5 font-display text-[0.74rem] tracking-[0.28em] uppercase bg-[var(--color-sand-50)]/95 backdrop-blur-sm text-[var(--color-moss-800)] px-3 py-1.5 rounded-full font-semibold">
          {String(index + 1).padStart(2, "0")} · {service.id === "consultorio" ? "Presencial" : "Domiciliar"}
        </span>
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col flex-1 p-7 md:p-9 lg:p-10">
        <h3 className="font-display text-[1.4rem] md:text-[1.65rem] leading-[1.15] text-[var(--color-ink-900)] text-balance">
          {service.title}
        </h3>
        <p className="mt-4 text-[0.98rem] md:text-[1.05rem] leading-[1.6] text-[var(--color-ink-700)] text-pretty flex-1">
          {service.description}
        </p>
        <div className="mt-7">
          <LinkButton
            href={whatsappUrl(service.whatsappPrompt)}
            external
            variant="ghost"
            size="md"
            onClick={onClick}
            icon={<ArrowRight />}
          >
            Saiba mais no WhatsApp
          </LinkButton>
        </div>
      </div>
    </article>
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
      className="transition-transform duration-300 group-hover:translate-x-0.5"
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
