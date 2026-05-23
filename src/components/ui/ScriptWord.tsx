import type { ReactNode } from "react";

/**
 * Wrapper para palavras-chave em script (Pinyon Script).
 * Usar com extrema parcimônia — 1 a 3 palavras por seção.
 * Vem com um pequeno tracking negativo para acomodar a curva da fonte.
 */
export function ScriptWord({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`font-script font-normal ${className}`}>{children}</span>
  );
}
