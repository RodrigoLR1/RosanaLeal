import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

/**
 * Footer — compacto, encerra a página em moss-900 (continuidade do CTA
 * em moss-700, escurece mais um tom para o "fim de página").
 *
 * Sem links fake de "termos" / "privacidade" que não existem.
 * Apenas o que é real: logo, credenciais, Instagram, copyright.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-moss-950)] text-[var(--color-sand-50)]/80 py-12 md:py-14">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-x-10 items-start">
          {/* Logo + assinatura */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 brightness-0 invert opacity-90">
              <Image
                src="/images/logo-rl.png"
                alt=""
                fill
                sizes="40px"
                className="object-contain"
              />
            </div>
            <div className="leading-tight">
              <p className="font-display text-[0.98rem] text-[var(--color-sand-50)]">
                Rosana Leal Rodrigues
              </p>
              <p className="text-[0.62rem] tracking-[0.22em] uppercase font-medium text-[var(--color-moss-300)]">
                Nutrição & Saúde
              </p>
            </div>
          </div>

          {/* Credenciais */}
          <div className="text-[0.85rem] leading-[1.7]">
            <p>
              {/* [a confirmar com Rosana] */}
              {SITE.credentials.crfPB}
              <span className="opacity-50"> · </span>
              {SITE.credentials.crn6}
            </p>
            <p className="mt-1.5 opacity-70">
              {SITE.address.city}, {SITE.address.state}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:items-end gap-2 text-[0.85rem]">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-sand-50)] transition-colors"
            >
              Instagram · {SITE.instagramHandle}
            </a>
            <Link
              href="#hero"
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              Voltar ao topo ↑
            </Link>
          </div>
        </div>

        {/* Linha de copyright */}
        <div className="mt-10 pt-6 border-t border-[var(--color-moss-700)]/40 flex flex-col md:flex-row md:items-center justify-between gap-3 text-[0.74rem] text-[var(--color-sand-50)]/50">
          <p>
            © {year} Rosana Leal Rodrigues. Todos os direitos reservados.
          </p>
          <p className="text-[0.7rem] opacity-70">
            Site desenvolvido com cuidado clínico.
          </p>
        </div>
      </div>
    </footer>
  );
}
