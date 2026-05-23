/**
 * Helpers de tracking — usar em qualquer botão/interação relevante.
 *
 * Exemplo:
 *   import { trackWhatsAppClick } from "@/lib/track";
 *   <a onClick={() => trackWhatsAppClick("hero")} ...>
 */

type FbqArgs = ["track" | "trackCustom", string, Record<string, unknown>?];

declare global {
  interface Window {
    fbq?: (...args: FbqArgs) => void;
    gtag?: (
      command: "event" | "config" | "set",
      action: string,
      params?: Record<string, unknown>,
    ) => void;
    dataLayer?: unknown[];
  }
}

const isBrowser = () => typeof window !== "undefined";

export function trackWhatsAppClick(source: string) {
  if (!isBrowser()) return;
  // Meta: Lead
  window.fbq?.("track", "Lead", { source, content_category: "whatsapp" });
  // Google Ads: conversão (label preenchido via env var)
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const label = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;
  if (adsId && label) {
    window.gtag?.("event", "conversion", {
      send_to: `${adsId}/${label}`,
      event_category: "engagement",
      event_label: source,
    });
  }
  // GA4
  window.gtag?.("event", "whatsapp_click", { source });
}

export function trackServiceView(serviceName: string) {
  if (!isBrowser()) return;
  window.fbq?.("track", "ViewContent", { content_name: serviceName });
  window.gtag?.("event", "service_view", { service_name: serviceName });
}

export function trackFaqOpen(question: string) {
  if (!isBrowser()) return;
  window.gtag?.("event", "faq_open", { question });
}

export function trackScrollDepth(percent: number) {
  if (!isBrowser()) return;
  window.gtag?.("event", "scroll", { percent_scrolled: percent });
}
