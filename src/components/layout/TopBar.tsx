"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

const NAV = [
  { href: "#diferencial", label: "Diferencial" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export function TopBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-out",
        scrolled
          ? "bg-[var(--color-sand-50)]/85 backdrop-blur-md border-b border-[var(--color-moss-200)]/50 shadow-[0_1px_0_rgba(32,81,62,0.04)]"
          : "bg-[var(--color-sand-50)]/0 border-b border-transparent",
      ].join(" ")}
    >
      <div className="mx-auto max-w-[1320px] flex items-center justify-between px-6 md:px-10 lg:px-14 h-[68px] md:h-[76px]">
        {/* Logo + nome */}
        <Link
          href="#hero"
          className="flex items-center gap-3 group"
          aria-label={SITE.brand}
        >
          <div className="relative w-11 h-11 md:w-13 md:h-13">
            <Image
              src="/images/logo-rl.png"
              alt=""
              fill
              sizes="52px"
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-[0.95rem] md:text-base tracking-[0.01em] text-[var(--color-moss-900)]">
              Rosana Leal Rodrigues
            </span>
            <span className="text-[0.62rem] md:text-[0.66rem] tracking-[0.22em] uppercase font-medium text-[var(--color-moss-600)]">
              Nutrição & Saúde
            </span>
          </div>
        </Link>

        {/* Nav desktop */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Navegação principal"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-[0.88rem] tracking-wide rounded-full transition-colors duration-300 text-[var(--color-ink-700)] hover:text-[var(--color-moss-700)] hover:bg-[var(--color-moss-100)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Hambúrguer mobile */}
        <button
          type="button"
          onClick={() => setOpen((s) => !s)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="md:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5 rounded-full transition-colors text-[var(--color-moss-900)] hover:bg-[var(--color-moss-100)]"
        >
          <span
            className={[
              "block h-px w-5 bg-current transition-transform duration-300",
              open ? "translate-y-[3px] rotate-45" : "",
            ].join(" ")}
          />
          <span
            className={[
              "block h-px w-5 bg-current transition-transform duration-300",
              open ? "-translate-y-[3px] -rotate-45" : "",
            ].join(" ")}
          />
        </button>
      </div>

      {/* Drawer mobile */}
      <div
        id="mobile-nav"
        className={[
          "md:hidden overflow-hidden transition-[max-height] duration-500 ease-out bg-[var(--color-sand-50)]/95 backdrop-blur-md",
          open ? "max-h-96 border-t border-[var(--color-moss-200)]/40" : "max-h-0",
        ].join(" ")}
      >
        <nav
          className="flex flex-col px-6 py-4 gap-1"
          aria-label="Navegação móvel"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-3 px-2 border-b text-base tracking-wide text-[var(--color-ink-900)] border-[var(--color-moss-200)]/40"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
