"use client";

import { useReveal } from "@/hooks/useReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { LinkButton } from "@/components/ui/Button";
import { FAQ as FAQ_ITEMS, whatsappUrl } from "@/lib/site";
import { trackWhatsAppClick } from "@/lib/track";

/**
 * FAQ — elimina objeções antes do CTA final.
 *
 * Padrão TOC editorial: headline à esquerda, accordion à direita.
 * Track de `faq_open` automático via Accordion.
 *
 * Conteúdo: 6 perguntas em src/lib/site.ts — preço, convênio, idade,
 * domiciliar, exames, prazo do plano. Algumas com placeholder
 * `[a confirmar com Rosana]`.
 */
export function FAQ() {
  const { ref, revealed } = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="faq"
      className={`relative bg-[var(--color-sand-50)] py-24 md:py-32 lg:py-40 transition-all duration-1000 ease-out ${
        revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16">
          {/* Coluna esquerda — heading + CTA secundário */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <SectionHeading
                eyebrow="Perguntas frequentes"
                title="Ainda em dúvida? Comece por aqui."
                subtitle="As perguntas mais comuns de quem chega pela primeira vez. Se a sua não estiver na lista, fale comigo no WhatsApp."
                className="max-w-[36ch] mb-8"
              />

              <LinkButton
                href={whatsappUrl("Olá Rosana! Tenho uma dúvida que não está no FAQ do site.")}
                external
                variant="ghost"
                size="md"
                onClick={() => trackWhatsAppClick("faq")}
                icon={<ArrowRight />}
              >
                Tirar dúvida no WhatsApp
              </LinkButton>
            </div>
          </div>

          {/* Coluna direita — accordion */}
          <div className="lg:col-span-7">
            <Accordion items={FAQ_ITEMS.map((f) => ({ question: f.question, answer: f.answer }))} />
          </div>
        </div>
      </div>
    </section>
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
