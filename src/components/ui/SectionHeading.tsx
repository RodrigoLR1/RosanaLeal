import type { ReactNode } from "react";

type Variant = "light" | "dark";

/**
 * SectionHeading — padrão de cabeçalho de seção reutilizado por todas
 * as seções (exceto Hero, que tem headline própria).
 *
 * Estrutura:
 *   [filete] SOBRE-TÍTULO em UPPERCASE com tracking aberto
 *   Headline display grande em Tenor Sans
 *   Sub-headline opcional em corpo legível
 *
 * Variant `light` = sobre fundos sand. Variant `dark` = sobre moss drenched.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  variant = "light",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  variant?: Variant;
  className?: string;
}) {
  const eyebrowColor =
    variant === "dark"
      ? "text-[var(--color-moss-200)]"
      : "text-[var(--color-moss-700)]";
  const eyebrowLine =
    variant === "dark" ? "bg-[var(--color-moss-300)]" : "bg-[var(--color-moss-500)]";
  const titleColor =
    variant === "dark" ? "text-[var(--color-sand-50)]" : "text-[var(--color-ink-900)]";
  const subtitleColor =
    variant === "dark"
      ? "text-[var(--color-sand-50)]/75"
      : "text-[var(--color-ink-700)]";
  const alignClass = align === "center" ? "items-center text-center" : "items-start";

  return (
    <div className={`flex flex-col ${alignClass} ${className}`}>
      {eyebrow && (
        <p
          className={`flex items-center gap-3 text-[0.7rem] md:text-[0.74rem] tracking-[0.32em] uppercase font-medium ${eyebrowColor} mb-6`}
        >
          <span className={`inline-block w-10 h-px ${eyebrowLine}`} />
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-balance leading-[1.05] text-[clamp(2rem,4.5vw,3.4rem)] ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 md:mt-6 max-w-[60ch] text-pretty text-[1.02rem] md:text-[1.1rem] leading-[1.6] ${subtitleColor}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
