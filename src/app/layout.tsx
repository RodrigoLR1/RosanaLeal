import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, Tenor_Sans, Pinyon_Script } from "next/font/google";
import { Analytics } from "@/components/analytics/Analytics";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const tenor = Tenor_Sans({
  variable: "--font-tenor",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const pinyon = Pinyon_Script({
  variable: "--font-pinyon",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://rosanalealnutri.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Rosana Leal Rodrigues · Farmacêutica e Nutricionista Clínica em Campina Grande",
    template: "%s · Rosana Leal Rodrigues",
  },
  description:
    "Atendimento clínico em nutrição com olhar farmacêutico. Especialista em interação medicamento × alimentação para quem busca equilíbrio de verdade. Consulta no consultório ou domiciliar em Campina Grande-PB.",
  keywords: [
    "nutricionista Campina Grande",
    "nutricionista clínica",
    "farmacêutica e nutricionista",
    "atendimento nutricional domiciliar",
    "interação medicamento nutriente",
    "nutrição funcional Campina Grande",
    "Rosana Leal Rodrigues",
    "nutrifarma",
    "consulta nutricional Paraíba",
  ],
  authors: [{ name: "Rosana Leal Rodrigues" }],
  creator: "Rosana Leal Rodrigues",
  publisher: "Rosana Leal Rodrigues",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Rosana Leal Rodrigues · Nutrição e Saúde",
    title:
      "Rosana Leal Rodrigues · Farmacêutica e Nutricionista Clínica em Campina Grande",
    description:
      "Atendimento clínico em nutrição com olhar farmacêutico. Quem entende como medicamentos, alimentação e corpo conversam.",
    // Next 16 auto-detecta `src/app/opengraph-image.tsx` e injeta o
    // preview gerado dinamicamente — não precisamos especificar `images`
    // aqui. Mantido vazio para evitar fallback estático conflitante.
  },
  twitter: {
    card: "summary_large_image",
    title: "Rosana Leal Rodrigues · Farmacêutica e Nutricionista Clínica",
    description:
      "Atendimento clínico em nutrição com olhar farmacêutico em Campina Grande-PB.",
    // Auto-detectada via `twitter-image` (fallback para opengraph-image).
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "health",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f3ec" },
    { media: "(prefers-color-scheme: dark)", color: "#20513e" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${beVietnam.variable} ${tenor.variable} ${pinyon.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-sand-50 text-ink-900">
        <JsonLd />
        {/* Skip link — invisível até receber foco. Permite que usuários de
            teclado pulem direto para o conteúdo principal sem tabular por
            toda a TopBar. */}
        <a
          href="#hero"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-3 focus-visible:left-3 focus-visible:z-[100] focus-visible:px-4 focus-visible:py-2.5 focus-visible:bg-[var(--color-moss-700)] focus-visible:text-[var(--color-sand-50)] focus-visible:rounded-full focus-visible:text-sm focus-visible:font-medium focus-visible:shadow-lg"
        >
          Pular para o conteúdo
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
