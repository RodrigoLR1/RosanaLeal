import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

/**
 * Footer — encerra a página em luz, não em escuridão.
 *
 * Decisão de design: depois do ContactCTA em moss-700 (drenched), o footer
 * volta ao sand-100 (papel quente). Isso evita o "duplo verde escuro" que
 * deixava o final pesado. O footer recupera a paleta editorial do resto
 * do site e fecha o documento com calma.
 *
 * Estrutura editorial:
 *   ── filete moss-700 (assinatura)
 *   [Identidade — logo + nome]
 *   [Credenciais · Localização]
 *   [Instagram · Voltar ao topo]
 *   ── filete moss-200
 *   © linha discreta
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[var(--color-sand-100)] text-[var(--color-ink-700)]">
      {/* Filete moss-700 no topo — assinatura editorial que conecta ao resto do site */}
      <div
        aria-hidden
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--color-moss-700)]/40 to-transparent"
      />

      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-14 pt-16 md:pt-20 pb-10 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-x-10">
          {/* ============== Identidade (5 cols) ============== */}
          <div className="md:col-span-5 flex flex-col">
            <div className="flex items-center gap-3.5">
              <div className="relative w-12 h-12 shrink-0">
                <Image
                  src="/images/logo-rl.png"
                  alt=""
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div className="leading-tight">
                <p className="font-display text-[1.05rem] md:text-[1.15rem] text-[var(--color-moss-900)]">
                  Rosana Leal Rodrigues
                </p>
                <p className="text-[0.66rem] tracking-[0.26em] uppercase font-medium text-[var(--color-moss-600)] mt-1">
                  Nutrição & Saúde
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-[36ch] text-[0.92rem] leading-[1.6] text-[var(--color-ink-700)]/85">
              Atendimento clínico que entende como medicamentos, alimentação e
              corpo conversam.
            </p>
          </div>

          {/* ============== Credenciais (4 cols) ============== */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <p className="text-[0.62rem] tracking-[0.28em] uppercase font-medium text-[var(--color-moss-600)]">
              Credenciais
            </p>
            <div className="text-[0.92rem] leading-[1.7] text-[var(--color-ink-700)]">
              <p>
                {/* [a confirmar com Rosana] */}
                {SITE.credentials.crfPB}
                <span className="opacity-40 mx-1.5">·</span>
                {SITE.credentials.crn6}
              </p>
              <p className="mt-1 text-[var(--color-ink-500)]">
                {SITE.address.city} · {SITE.address.state}
              </p>
            </div>
          </div>

          {/* ============== Conexão (3 cols) ============== */}
          <div className="md:col-span-3 flex flex-col gap-3 md:items-end">
            <p className="text-[0.62rem] tracking-[0.28em] uppercase font-medium text-[var(--color-moss-600)]">
              Conexão
            </p>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[0.92rem] text-[var(--color-moss-800)] hover:text-[var(--color-moss-600)] transition-colors"
            >
              <InstagramIcon />
              {SITE.instagramHandle}
            </a>
            <Link
              href="#hero"
              className="inline-flex items-center gap-1.5 text-[0.85rem] text-[var(--color-ink-700)]/70 hover:text-[var(--color-moss-700)] transition-colors group"
            >
              Voltar ao topo
              <ArrowUp className="transition-transform duration-300 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Linha de copyright — discreta, com filete sutil */}
        <div className="mt-14 md:mt-16 pt-6 border-t border-[var(--color-moss-700)]/15 flex flex-col md:flex-row md:items-center justify-between gap-2.5 text-[0.74rem] text-[var(--color-ink-500)]">
          <p>
            © {year} Rosana Leal Rodrigues. Todos os direitos reservados.
          </p>
          <p className="opacity-80 italic">
            Site feito com cuidado clínico.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Ícones inline ---------- */

function InstagramIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function ArrowUp({ className }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M6 9.5V2.5M3 5.5L6 2.5L9 5.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
