"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE } from "@/lib/site";
import { trackWhatsAppClick } from "@/lib/track";

/**
 * ContactForm — mini-seção standalone entre FAQ e ContactCTA.
 *
 * Dá uma via alternativa de contato pra quem prefere escrever com calma
 * em vez de abrir o WhatsApp direto. Não tem backend: ao enviar, monta
 * uma mensagem formatada e abre o WhatsApp com tudo pré-preenchido —
 * mesmo padrão zero-infra usado no resto do site (whatsappUrl helper).
 */
export function ContactForm() {
  const { ref, revealed } = useReveal<HTMLElement>();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const lines = [
      `Olá Rosana! Meu nome é ${name}.`,
      `Telefone: ${phone}`,
      subject ? `Assunto: ${subject}` : null,
      "",
      message,
    ].filter((line) => line !== null);

    const text = encodeURIComponent(lines.join("\n"));
    const number = SITE.phone.replace(/\D/g, "");

    trackWhatsAppClick("contact-form");
    window.open(`https://wa.me/${number}?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <section
      ref={ref}
      id="fale-comigo"
      className={`relative bg-[var(--color-sand-100)] py-24 md:py-32 lg:py-36 transition-all duration-1000 ease-out ${
        revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-14">
        <SectionHeading
          eyebrow="Fale comigo"
          title="Prefere escrever primeiro?"
          subtitle="Preencha os campos abaixo e eu recebo tudo direto no WhatsApp — sem burocracia, sem formulário perdido."
          align="center"
          className="mx-auto items-center text-center mb-14 md:mb-16 max-w-[52ch]"
        />

        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-[640px] bg-[var(--color-sand-50)] rounded-[3px] p-7 md:p-10 shadow-[0_2px_12px_rgba(32,81,62,0.06)]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="Nome" htmlFor="cf-name">
              <input
                id="cf-name"
                type="text"
                required
                autoComplete="name"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
              />
            </Field>

            <Field label="Telefone / WhatsApp" htmlFor="cf-phone">
              <input
                id="cf-phone"
                type="tel"
                required
                autoComplete="tel"
                placeholder="(83) 9 0000-0000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={inputClass}
              />
            </Field>
          </div>

          <div className="mt-5">
            <Field label="Assunto (opcional)" htmlFor="cf-subject">
              <input
                id="cf-subject"
                type="text"
                placeholder="Consulta no consultório, atendimento domiciliar..."
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className={inputClass}
              />
            </Field>
          </div>

          <div className="mt-5">
            <Field label="Mensagem" htmlFor="cf-message">
              <textarea
                id="cf-message"
                required
                rows={5}
                placeholder="Conte um pouco do que você está buscando."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${inputClass} resize-y`}
              />
            </Field>
          </div>

          <button
            type="submit"
            className="mt-7 inline-flex items-center justify-center gap-2.5 h-12 px-7 rounded-full font-medium tracking-wide text-[0.95rem] bg-[var(--color-moss-700)] text-[var(--color-sand-50)] transition-all duration-300 hover:bg-[var(--color-moss-800)] hover:-translate-y-0.5 shadow-[0_1px_2px_rgba(32,81,62,0.2)] hover:shadow-[0_8px_24px_rgba(32,81,62,0.25)]"
          >
            <WhatsAppIcon />
            Enviar pelo WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}

const inputClass =
  "w-full rounded-[2px] border border-[var(--color-moss-200)] bg-[var(--color-sand-50)] px-4 py-2.5 text-[0.98rem] text-[var(--color-ink-900)] placeholder:text-[var(--color-ink-500)]/60 transition-colors focus:outline-none focus:border-[var(--color-moss-500)]";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={htmlFor}
        className="text-[0.85rem] font-medium text-[var(--color-ink-900)]"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  );
}
