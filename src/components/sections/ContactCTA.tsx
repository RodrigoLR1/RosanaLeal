"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";
import { ScriptWord } from "@/components/ui/ScriptWord";
import { LinkButton } from "@/components/ui/Button";
import { SITE, whatsappUrl } from "@/lib/site";
import { trackWhatsAppClick } from "@/lib/track";

/**
 * ContactCTA — encerramento de peso.
 *
 * Fundo moss-700 drenched: a segunda (e última) vez que o verde escuro
 * carrega a tela inteira. Emoldura a página com a Seção 2 (Diferencial),
 * marcando os dois momentos cruciais: "preste atenção" no início, "fale
 * comigo agora" no fim.
 *
 * Layout: WhatsApp grande clicável à esquerda; endereço, horários e
 * Instagram à direita.
 */
export function ContactCTA() {
  const { ref, revealed } = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="contato"
      className="relative isolate overflow-hidden bg-[var(--color-moss-700)] text-[var(--color-sand-50)] py-24 md:py-32 lg:py-40"
    >
      {/* Textura botânica ao fundo */}
      <Image
        src="/images/branch-horizontal.png"
        alt=""
        aria-hidden="true"
        width={1600}
        height={700}
        priority={false}
        className="pointer-events-none select-none absolute -bottom-12 -left-20 w-[110%] h-auto opacity-[0.06] invert"
      />

      <div
        className={`relative mx-auto max-w-[1200px] px-6 md:px-10 lg:px-14 transition-all duration-1000 ease-out ${
          revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Eyebrow */}
        <p className="flex items-center gap-3 text-[0.7rem] md:text-[0.74rem] tracking-[0.32em] uppercase font-medium text-[var(--color-moss-200)] mb-7">
          <span className="inline-block w-10 h-px bg-[var(--color-moss-300)]" />
          Vamos conversar
        </p>

        {/* Headline com palavra em script */}
        <h2 className="font-display text-balance leading-[1.05] text-[clamp(2.2rem,5.4vw,4rem)] text-[var(--color-sand-50)] max-w-[20ch]">
          Faça escolhas que te façam{" "}
          <ScriptWord className="text-[var(--color-moss-200)] text-[clamp(2.8rem,6.6vw,5rem)] leading-[0.85]">
            bem
          </ScriptWord>{" "}
          de verdade.
        </h2>

        <div className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-y-14 lg:gap-x-16">
          {/* ============== Esquerda — WhatsApp grande ============== */}
          <div className="flex flex-col">
            <p className="text-[0.66rem] tracking-[0.32em] uppercase text-[var(--color-moss-200)] mb-4 font-medium">
              Falar agora
            </p>

            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("contact-cta")}
              className="font-display text-[clamp(2rem,5vw,3.4rem)] leading-[0.95] text-[var(--color-sand-50)] hover:text-[var(--color-moss-100)] transition-colors group flex items-baseline gap-3 md:gap-4 tracking-tight"
            >
              {SITE.phoneDisplay}
              <ArrowOut className="text-[var(--color-moss-200)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <p className="mt-4 text-[0.98rem] md:text-[1.05rem] leading-[1.6] text-[var(--color-sand-50)]/70 max-w-[40ch]">
              Resposta em até 2h em horário comercial. Atendimento humano — quem
              responde sou eu mesma.
            </p>

            <div className="mt-8">
              <LinkButton
                href={whatsappUrl()}
                external
                variant="gold"
                size="lg"
                icon={<WhatsAppIcon />}
                onClick={() => trackWhatsAppClick("contact-cta-button")}
              >
                Abrir WhatsApp
              </LinkButton>
            </div>
          </div>

          {/* ============== Direita — endereço, horários, Instagram ============== */}
          <div className="flex flex-col gap-8 lg:border-l lg:border-[var(--color-moss-500)]/40 lg:pl-12">
            <InfoBlock label="Consultório">
              <span className="block">{SITE.address.street}</span>
              <span className="block">
                {SITE.address.city} · {SITE.address.state}
              </span>
            </InfoBlock>

            <InfoBlock label="Atendimento">
              <span className="block">{SITE.hours}</span>
              <span className="block opacity-70 text-[0.92rem] mt-1">
                Atendimento domiciliar mediante agendamento.
              </span>
            </InfoBlock>

            <InfoBlock label="Instagram">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--color-sand-50)] hover:text-[var(--color-moss-100)] transition-colors"
              >
                {SITE.instagramHandle}
                <InstagramIcon />
              </a>
            </InfoBlock>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-[0.62rem] tracking-[0.28em] uppercase text-[var(--color-moss-200)] font-medium mb-2.5">
        {label}
      </p>
      <div className="font-display text-[1.05rem] md:text-[1.15rem] leading-[1.5] text-[var(--color-sand-50)]/90">
        {children}
      </div>
    </div>
  );
}

function ArrowOut({ className }: { className?: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M6 16L16 6M9 6h7v7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}
