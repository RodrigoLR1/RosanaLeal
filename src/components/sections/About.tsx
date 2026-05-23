"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";
import { ScriptWord } from "@/components/ui/ScriptWord";
import { SITE, whatsappUrl } from "@/lib/site";
import { trackWhatsAppClick } from "@/lib/track";

/**
 * Sobre — humanização. Bio em 1ª pessoa, parágrafos curtos, foto íntima.
 *
 * Layout: foto na esquerda (vertical, ~3:4), texto na direita. Bloco de
 * credenciais discreto no rodapé da coluna de texto — não como medalha,
 * como assinatura.
 *
 * A foto aqui está em `.image-frame` (placeholder) porque o usuário disse
 * que vai mandar mais fotos. Quando chegar, basta substituir o div pelo
 * componente <Image>.
 */
export function About() {
  const { ref, revealed } = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="sobre"
      className={`relative bg-[var(--color-sand-50)] py-24 md:py-32 lg:py-40 transition-all duration-1000 ease-out ${
        revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {/* Ornamento botânico no canto superior direito — eco do logo */}
      <Image
        src="/images/branch-small.png"
        alt=""
        aria-hidden="true"
        width={140}
        height={180}
        priority={false}
        className="pointer-events-none select-none absolute top-12 right-6 md:top-20 md:right-14 w-14 md:w-20 h-auto opacity-30"
      />

      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-14">
          {/* ============== Foto (5 cols) — placeholder com image-frame ============== */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full max-w-[440px] mx-auto lg:mx-0">
              {/* Passe-partout deslocado atrás */}
              <div
                aria-hidden
                className="absolute inset-0 translate-x-3 translate-y-3 md:translate-x-5 md:translate-y-5 bg-[var(--color-moss-100)] rounded-[2px]"
              />

              {/* Filete vertical à esquerda — assinatura */}
              <div
                aria-hidden
                className="absolute -left-4 md:-left-6 top-10 bottom-10 w-px bg-[var(--color-moss-700)]/60"
              />

              {/* Image frame placeholder — substituir por <Image /> quando o asset chegar */}
              <div className="relative image-frame aspect-[3/4] rounded-[2px]">
                <div className="text-center px-6">
                  <p className="font-display text-[0.78rem] tracking-[0.28em] text-[var(--color-moss-700)]">
                    Foto pessoal
                  </p>
                  <p className="mt-2 text-[0.66rem] tracking-[0.2em] opacity-70">
                    a ser fornecida
                  </p>
                </div>
              </div>

              {/* Legenda lateral vertical — usa writing-mode (CSS nativo)
                  em vez de rotate+translate; posiciona ao lado direito do
                  retrato sem escapar do contêiner. */}
              <p
                aria-hidden
                className="hidden md:block absolute top-4 -right-7 lg:-right-9 text-[0.62rem] tracking-[0.32em] uppercase text-[var(--color-moss-700)]/70 whitespace-nowrap font-medium"
                style={{ writingMode: "vertical-rl" }}
              >
                {SITE.address.city}-{SITE.address.state} · {SITE.credentials.yearsOfPractice}+ anos
              </p>
            </div>
          </div>

          {/* ============== Bio (7 cols) ============== */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <SectionHeading
              eyebrow="Sobre"
              title={
                <>
                  Cuidado clínico,<br className="hidden md:block" /> olhar{" "}
                  <ScriptWord className="text-[var(--color-moss-700)] text-[clamp(2.8rem,5.8vw,4.2rem)] leading-[0.85] pr-1">
                    humano
                  </ScriptWord>
                  .
                </>
              }
              className="mb-8"
            />

            {/* Bio em 1ª pessoa — parágrafos curtos */}
            <div className="space-y-5 text-[1.02rem] md:text-[1.1rem] leading-[1.7] text-[var(--color-ink-700)] text-pretty max-w-[58ch]">
              {/* [a confirmar com Rosana] — copy abaixo é placeholder realista */}
              <p>
                Farmacêutica de formação, percebi cedo que o medicamento sozinho
                não conta a história inteira. A alimentação faz parte da equação,
                e quase sempre é a peça que está sendo ignorada.
              </p>
              <p>
                Por isso fiz a segunda graduação em Nutrição — para olhar o
                paciente por inteiro. <span className="text-[var(--color-ink-900)] font-medium">Há mais de {SITE.credentials.yearsOfPractice} anos</span>{" "}
                atendo pessoas que querem entender o próprio corpo de verdade, com
                método clínico e sem promessa milagrosa.
              </p>
              <p>
                Cada plano é desenhado a partir de uma conversa profunda e dos seus
                exames. Não tenho fórmula pronta — porque <em>você</em> não é
                fórmula pronta.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-9">
              <LinkButton
                href={whatsappUrl("Olá Rosana! Vim pelo site e quero agendar uma conversa.")}
                external
                variant="primary"
                size="md"
                onClick={() => trackWhatsAppClick("about")}
              >
                Marcar uma conversa
              </LinkButton>
            </div>

            {/* Credenciais — bloco discreto no rodapé */}
            <div className="mt-12 md:mt-16 pt-7 border-t border-[var(--color-moss-200)] flex flex-wrap items-center gap-x-8 gap-y-3">
              {/* [a confirmar com Rosana] — números reais de CRF e CRN */}
              <CredItem label="Farmacêutica" value={SITE.credentials.crfPB} />
              <CredItem label="Nutricionista Clínica" value={SITE.credentials.crn6} />
              <CredItem
                label="Pós-graduação"
                value="[campos a confirmar]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CredItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-[0.62rem] tracking-[0.22em] uppercase text-[var(--color-moss-600)] font-medium">
        {label}
      </span>
      <span className="font-display text-[0.95rem] md:text-[1.02rem] text-[var(--color-ink-900)] mt-0.5">
        {value}
      </span>
    </div>
  );
}
