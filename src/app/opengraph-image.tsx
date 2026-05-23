import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

/**
 * Open Graph image — preview que aparece quando alguém compartilha
 * o link no WhatsApp, Instagram, Facebook, Twitter, LinkedIn, etc.
 *
 * Gerada server-side via `next/og` (Edge Runtime). 1200×630 = especificação
 * Open Graph oficial (também válida para Twitter Cards `summary_large_image`).
 *
 * O design espelha a marca: fundo moss-950 com gradiente sutil, monograma
 * "RL" decorativo, nome + cargo, e linha de credenciais como assinatura.
 */
export const runtime = "edge";
export const alt = "Rosana Leal Rodrigues · Farmacêutica e Nutricionista Clínica em Campina Grande-PB";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(ellipse 80% 60% at 20% 30%, #2c5b48 0%, transparent 60%), radial-gradient(ellipse 60% 70% at 90% 80%, #1a3d2e 0%, transparent 50%), #20513e",
          color: "#f7f3ec",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* Topo — eyebrow + monograma decorativo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              fontSize: 18,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              fontWeight: 500,
              color: "#c9d4cc",
            }}
          >
            <span
              style={{
                display: "block",
                width: 56,
                height: 1,
                background: "#a4b5a8",
              }}
            />
            Farmacêutica · Nutricionista Clínica
          </div>

          {/* Monograma "RL" decorativo */}
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontStyle: "italic",
              color: "#c9d4cc",
              letterSpacing: "-0.04em",
              fontWeight: 400,
            }}
          >
            RL
          </div>
        </div>

        {/* Meio — headline grande */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 88,
              lineHeight: 1.02,
              letterSpacing: "-0.015em",
              maxWidth: "13ch",
              color: "#f7f3ec",
            }}
          >
            Rosana Leal Rodrigues
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 28,
              lineHeight: 1.45,
              color: "#dde4df",
              maxWidth: "44ch",
              fontStyle: "italic",
              opacity: 0.88,
            }}
          >
            Atendimento clínico que entende como medicamentos, alimentação e
            corpo conversam entre si.
          </div>
        </div>

        {/* Base — credenciais + URL */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 24,
            borderTop: "1px solid rgba(199, 175, 117, 0.4)",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 16,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "#c7af75",
              fontWeight: 500,
            }}
          >
            {SITE.credentials.yearsOfPractice}+ anos · {SITE.credentials.crfPB} · {SITE.credentials.crn6}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 16,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#a4b5a8",
            }}
          >
            {SITE.url.replace("https://", "")}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
