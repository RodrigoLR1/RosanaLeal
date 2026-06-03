"use client";

import { useEffect, useRef, useState } from "react";
import type { TESTIMONIALS } from "@/lib/site";

type Testimonial = (typeof TESTIMONIALS)[number];

/**
 * TestimonialDeck — deck de cards com swipe (mobile only).
 *
 * Padrão "baralho na mesa": apenas o card front é visível em destaque, com
 * 2 cards atrás em opacidade/scale decrescente sugerindo profundidade. O
 * usuário arrasta horizontalmente pra trocar.
 *
 * Decisões:
 *   - Sem loop — para no último card (com damping/resistência nos extremos).
 *   - Pointer Events nativos (cobre touch + mouse + caneta).
 *   - touch-action: pan-y no card — não bloqueia scroll vertical da página.
 *   - prefers-reduced-motion: fade simples em vez de translate+rotate.
 */
export function TestimonialDeck({ items }: { items: readonly Testimonial[] }) {
  const [active, setActive] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);
  const startTimeRef = useRef(0);
  const isDraggingRef = useRef(false);

  const total = items.length;
  const canGoBack = active > 0;
  const canGoForward = active < total - 1;

  // Detecta prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  // ============== Pointer handlers ==============

  function onPointerDown(e: React.PointerEvent<HTMLElement>) {
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    startTimeRef.current = performance.now();
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }

  function onPointerMove(e: React.PointerEvent<HTMLElement>) {
    if (!isDraggingRef.current) return;
    const raw = e.clientX - startXRef.current;
    // Damping nos extremos: arrastar contra o limite tem resistência
    const blocked =
      (raw > 0 && !canGoBack) || (raw < 0 && !canGoForward);
    setDragX(blocked ? raw * 0.3 : raw);
  }

  function commit(deltaX: number) {
    const containerWidth = containerRef.current?.offsetWidth ?? 320;
    const elapsed = Math.max(performance.now() - startTimeRef.current, 1);
    const velocity = Math.abs(deltaX) / elapsed; // px/ms
    const passedDistance = Math.abs(deltaX) > containerWidth * 0.25;
    const passedVelocity = velocity > 0.5;
    const shouldAdvance = passedDistance || passedVelocity;

    if (shouldAdvance) {
      if (deltaX < 0 && canGoForward) setActive((i) => i + 1);
      else if (deltaX > 0 && canGoBack) setActive((i) => i - 1);
    }
    setDragX(0);
  }

  function onPointerUp(e: React.PointerEvent<HTMLElement>) {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    const deltaX = e.clientX - startXRef.current;
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    commit(deltaX);
  }

  function onPointerCancel() {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setDragX(0);
  }

  // ============== Keyboard ==============

  function onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowLeft" && canGoBack) {
      e.preventDefault();
      setActive((i) => i - 1);
    } else if (e.key === "ArrowRight" && canGoForward) {
      e.preventDefault();
      setActive((i) => i + 1);
    }
  }

  return (
    <div
      ref={containerRef}
      role="group"
      aria-roledescription="carousel"
      aria-label="Depoimentos de pacientes"
      tabIndex={0}
      onKeyDown={onKeyDown}
      className="relative md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-moss-500)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-sand-100)] rounded-[3px]"
    >
      {/* ============== Stack de cards ============== */}
      <div className="relative h-[360px] sm:h-[380px]">
        {items.map((t, i) => {
          const offset = i - active;
          // Cards passados saem do DOM (já foram visualizados)
          if (offset < 0) return null;
          // Cards muito profundos não renderizam (otimização)
          if (offset > 2) return null;

          const isFront = offset === 0;
          const style = getStackStyle(offset, isFront ? dragX : 0, reducedMotion);

          return (
            <article
              key={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`Depoimento ${i + 1} de ${total}`}
              aria-hidden={!isFront}
              style={style}
              onPointerDown={isFront ? onPointerDown : undefined}
              onPointerMove={isFront ? onPointerMove : undefined}
              onPointerUp={isFront ? onPointerUp : undefined}
              onPointerCancel={isFront ? onPointerCancel : undefined}
              className="absolute inset-0 bg-[var(--color-sand-50)] rounded-[3px] p-7 shadow-[0_8px_24px_rgba(32,81,62,0.12)] flex flex-col select-none"
            >
              {/* Aspas decorativas */}
              <span
                aria-hidden
                className="absolute top-4 left-6 font-display text-[3rem] leading-none text-[var(--color-moss-300)]"
              >
                &ldquo;
              </span>

              <blockquote className="relative pt-9 flex-1">
                <p className="font-display italic text-[1.05rem] leading-[1.55] text-[var(--color-ink-900)] text-pretty">
                  {t.quote}
                </p>
              </blockquote>

              <footer className="mt-6 pt-5 border-t border-[var(--color-moss-200)] flex items-baseline gap-2">
                <cite className="not-italic text-[0.95rem] font-medium text-[var(--color-moss-800)]">
                  — {t.author}
                </cite>
                <span className="text-[0.78rem] text-[var(--color-ink-500)]">
                  · {t.context}
                </span>
              </footer>
            </article>
          );
        })}
      </div>

      {/* ============== Setas + pontinhos ============== */}
      <div className="mt-8 flex items-center justify-center gap-5">
        <button
          type="button"
          aria-label="Depoimento anterior"
          disabled={!canGoBack}
          onClick={() => setActive((i) => Math.max(0, i - 1))}
          className="w-9 h-9 flex items-center justify-center rounded-full border border-[var(--color-moss-300)]/60 text-[var(--color-moss-700)] transition-all duration-300 hover:bg-[var(--color-moss-100)] disabled:opacity-30 disabled:pointer-events-none"
        >
          <ArrowLeft />
        </button>

        <ul className="flex items-center gap-2" role="tablist">
          {items.map((_, i) => (
            <li key={i}>
              <button
                type="button"
                role="tab"
                aria-label={`Ir para depoimento ${i + 1}`}
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-7 bg-[var(--color-moss-700)]"
                    : "w-1.5 bg-[var(--color-moss-300)] hover:bg-[var(--color-moss-500)]"
                }`}
              />
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="Próximo depoimento"
          disabled={!canGoForward}
          onClick={() => setActive((i) => Math.min(total - 1, i + 1))}
          className="w-9 h-9 flex items-center justify-center rounded-full border border-[var(--color-moss-300)]/60 text-[var(--color-moss-700)] transition-all duration-300 hover:bg-[var(--color-moss-100)] disabled:opacity-30 disabled:pointer-events-none"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}

/* ============== Helpers ============== */

/**
 * Calcula o style de cada card baseado no offset (0=front, 1=atrás, 2=deeper)
 * e o dragX do card front. Cards de trás "sobem" conforme o front é arrastado,
 * sugerindo que vão assumir o protagonismo.
 */
function getStackStyle(
  offset: number,
  dragX: number,
  reducedMotion: boolean,
): React.CSSProperties {
  // Em reduced motion, sem transform fluido — só fade entre cards
  if (reducedMotion) {
    return {
      opacity: offset === 0 ? 1 : 0,
      transform: "none",
      transition: "opacity 200ms ease",
      zIndex: 30 - offset,
      pointerEvents: offset === 0 ? "auto" : "none",
      touchAction: "pan-y",
      willChange: "opacity",
    };
  }

  if (offset === 0) {
    const rotation = (dragX / 20).toFixed(2); // até ~5deg
    const isDragging = dragX !== 0;
    return {
      transform: `translateX(${dragX}px) rotate(${rotation}deg)`,
      transition: isDragging
        ? "none"
        : "transform 400ms var(--ease-out-expo)",
      zIndex: 30,
      cursor: isDragging ? "grabbing" : "grab",
      touchAction: "pan-y",
      willChange: "transform",
    };
  }

  // Cards de trás reagem ao drag: aproximam-se da posição front
  const eased = Math.min(Math.abs(dragX) / 200, 1);
  const baseScale = 1 - offset * 0.04;
  const baseTranslateY = offset * 10;
  const baseOpacity = 1 - offset * 0.18;

  const scale = baseScale + eased * 0.04;
  const translateY = baseTranslateY - eased * 10;
  const opacity = baseOpacity + eased * 0.18;

  return {
    transform: `translateY(${translateY}px) scale(${scale})`,
    opacity,
    transition: "transform 300ms var(--ease-out-expo), opacity 300ms ease",
    zIndex: 30 - offset,
    pointerEvents: "none",
    touchAction: "none",
    willChange: "transform, opacity",
  };
}

/* ============== Ícones ============== */

function ArrowLeft() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M11.5 7h-9M6.5 3l-4 4 4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.5 7h9M7.5 3l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
