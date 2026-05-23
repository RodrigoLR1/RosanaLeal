"use client";

import { useEffect, useRef, useState } from "react";

/**
 * useReveal — hook que adiciona a classe de revelação quando o elemento
 * entra no viewport. IntersectionObserver com threshold configurável.
 *
 * Respeita `prefers-reduced-motion`: se o usuário pediu pra reduzir motion,
 * o elemento já começa revelado (sem animação de entrada).
 *
 * Uso:
 *   const { ref, revealed } = useReveal();
 *   return <section ref={ref} className={revealed ? "animate-reveal-up" : "opacity-0"}>
 */
export function useReveal<T extends HTMLElement = HTMLElement>(
  options: { threshold?: number; rootMargin?: string } = {},
) {
  const { threshold = 0.15, rootMargin = "0px 0px -10% 0px" } = options;
  const ref = useRef<T>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setRevealed(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, revealed };
}
