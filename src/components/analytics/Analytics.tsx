import Script from "next/script";

/**
 * Tracking unificado — Meta Pixel + Google Ads (gtag) + Google Analytics.
 * Lê IDs do .env.local; se a env var não estiver setada, o respectivo
 * snippet é silenciosamente omitido. Assim você publica o site mesmo
 * sem os IDs, e plugando depois funciona sozinho.
 *
 * .env.local esperado:
 *   NEXT_PUBLIC_META_PIXEL_ID=000000000000000
 *   NEXT_PUBLIC_GOOGLE_ADS_ID=AW-000000000
 *   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
 *   NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=abc123def
 *
 * Eventos disparados pelo site (ver src/lib/track.ts):
 *   - whatsapp_click  → Meta: Lead · Ads: conversão
 *   - service_view    → Meta: ViewContent
 *   - faq_open        → GA: faq_open
 *   - scroll_75       → GA: scroll
 */
export function Analytics() {
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <>
      {/* Google Tag (gtag.js) — cobre GA4 + Google Ads */}
      {(googleAdsId || gaId) && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId || gaId}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              ${gaId ? `gtag('config', '${gaId}', { anonymize_ip: true });` : ""}
              ${googleAdsId ? `gtag('config', '${googleAdsId}');` : ""}
            `}
          </Script>
        </>
      )}

      {/* Meta (Facebook) Pixel */}
      {metaPixelId && (
        <>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
              n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
              document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${metaPixelId}');
              fbq('track', 'PageView');
            `}
          </Script>
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              alt=""
              src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
            />
          </noscript>
        </>
      )}
    </>
  );
}
