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
        src="/images/branch-vertical.png"
        alt=""
        aria-hidden="true"
        width={400}
        height={1000}
        priority={false}
        className="pointer-events-none select-none absolute -top-10 -right-10 w-72 h-auto opacity-[0.08] invert hidden md:block"
      />
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
              {/* [a confirmar com Rosana] — endereço real */}
              <span className="block">{SITE.address.street}</span>
              <span className="block">
                {SITE.address.city} · {SITE.address.state}
              </span>
            </InfoBlock>

            <InfoBlock label="Atendimento">
              {/* [a confirmar com Rosana] — horários reais */}
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
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M13.6 2.32A7.85 7.85 0 0 0 8 0C3.58 0 0 3.58 0 8c0 1.4.36 2.77 1.05 3.98L0 16l4.13-1.08A8.06 8.06 0 0 0 8 16c4.42 0 8-3.58 8-8 0-2.13-.83-4.14-2.4-5.68zM8 14.7a6.66 6.66 0 0 1-3.4-.93l-.24-.14-2.46.65.66-2.4-.16-.25A6.66 6.66 0 1 1 14.66 8 6.67 6.67 0 0 1 8 14.7zm3.66-5a6.83 6.83 0 0 1-1.07-.5c-.13-.06-.22-.1-.31.06s-.36.5-.44.6c-.08.1-.16.11-.3.04a4.33 4.33 0 0 1-2.13-1.87c-.16-.27.16-.25.46-.85.05-.1.02-.18 0-.25-.02-.07-.31-.75-.43-1.03-.11-.27-.23-.23-.31-.23H6.85a.55.55 0 0 0-.4.18c-.13.15-.5.5-.5 1.2 0 .72.51 1.4.58 1.5.07.1 1 1.53 2.43 2.15.34.15.61.24.82.31.34.11.66.1.9.06.27-.04.84-.34.96-.67.12-.34.12-.62.08-.68-.03-.06-.13-.1-.27-.16z" />
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
