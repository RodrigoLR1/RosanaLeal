"use client";

import { useState, useId } from "react";
import type { ReactNode } from "react";
import { trackFaqOpen } from "@/lib/track";

/**
 * Accordion — componente acessível para FAQ.
 *
 * - aria-expanded e aria-controls completos
 * - animação de altura suave via grid-template-rows (sem JS de medir altura)
 * - chevron rotaciona; sem +/- (mais elegante)
 * - dispara `trackFaqOpen(question)` quando abre
 */
export type AccordionItem = {
  question: string;
  answer: ReactNode;
};

export function Accordion({ items }: { items: AccordionItem[] }) {
  return (
    <div className="divide-y divide-[var(--color-moss-200)]/60">
      {items.map((item, i) => (
        <AccordionRow key={i} item={item} />
      ))}
    </div>
  );
}

function AccordionRow({ item }: { item: AccordionItem }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const panelId = `accordion-panel-${id}`;
  const buttonId = `accordion-button-${id}`;

  const toggle = () => {
    const next = !open;
    setOpen(next);
    if (next) trackFaqOpen(item.question);
  };

  return (
    <div className="group">
      <button
        type="button"
        id={buttonId}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={toggle}
        className="flex w-full items-center justify-between gap-4 py-5 md:py-6 text-left transition-colors hover:text-[var(--color-moss-700)]"
      >
        <span className="font-display text-[1.05rem] md:text-[1.18rem] text-[var(--color-ink-900)] leading-snug">
          {item.question}
        </span>
        <Chevron open={open} />
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="grid transition-[grid-template-rows] duration-500 ease-out"
        style={{
          gridTemplateRows: open ? "1fr" : "0fr",
        }}
      >
        <div className="overflow-hidden">
          <div className="pb-6 md:pb-8 pr-10 text-[0.98rem] md:text-[1.05rem] leading-[1.65] text-[var(--color-ink-700)] text-pretty">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 transition-transform duration-400 ease-out text-[var(--color-moss-600)] ${
        open ? "rotate-180" : ""
      }`}
    >
      <path
        d="M4 6.5L9 11.5L14 6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
