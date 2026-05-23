"use client";

import { useEffect, useState } from "react";
import { whatsappUrl } from "@/lib/site";
import { trackWhatsAppClick } from "@/lib/track";

/**
 * Botão WhatsApp flutuante — bottom-right, discreto, surge após
 * 1 viewport de scroll. Aria-label completo. Tooltip "Falar com a
 * Rosana" no hover.
 */
export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={[
        "fixed z-40 bottom-5 right-5 md:bottom-7 md:right-7 transition-all duration-500 ease-out",
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-3 pointer-events-none",
      ].join(" ")}
    >
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick("float")}
        aria-label="Falar com a Rosana pelo WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 md:w-15 md:h-15 rounded-full bg-[var(--color-moss-700)] text-[var(--color-sand-50)] shadow-[0_8px_24px_rgba(32,81,62,0.35)] hover:bg-[var(--color-moss-800)] hover:-translate-y-0.5 transition-all duration-300"
      >
        {/* Ping sutil — só uma vez ao aparecer */}
        <span
          aria-hidden
          className="absolute inset-0 rounded-full bg-[var(--color-moss-500)] animate-ping opacity-25"
        />
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="relative"
        >
          <path d="M20.4 3.5A11.78 11.78 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.6-8.5zM12 22.05a10 10 0 0 1-5.1-1.4l-.37-.22-3.7.97 1-3.6-.24-.38A10 10 0 1 1 22 12a10 10 0 0 1-10 10.05zm5.5-7.5c-.3-.16-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.16-.2.3-.78.97-.96 1.18-.18.2-.36.22-.66.07a8.18 8.18 0 0 1-4.13-3.62c-.31-.54.31-.5.9-1.68.1-.2.05-.37 0-.52-.05-.16-.68-1.65-.94-2.27-.25-.6-.5-.5-.68-.5h-.58c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.45 1.06 2.85 1.2 3.06.16.2 2.1 3.2 5.06 4.49.7.3 1.26.48 1.7.62.71.22 1.36.2 1.87.12.57-.08 1.78-.72 2.04-1.42.25-.7.25-1.3.18-1.42-.07-.13-.27-.2-.57-.34z" />
        </svg>

        {/* Tooltip */}
        <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap text-[0.78rem] tracking-wide bg-[var(--color-moss-900)] text-[var(--color-sand-50)] px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Falar com a Rosana
        </span>
      </a>
    </div>
  );
}
