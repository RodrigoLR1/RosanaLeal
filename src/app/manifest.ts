import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/**
 * Web App Manifest — habilita "Adicionar à tela inicial" no Android/iOS
 * e melhora o SEO em buscas mobile.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.brand,
    short_name: "Rosana Leal",
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f7f3ec",
    theme_color: "#20513e",
    lang: "pt-BR",
    icons: [
      {
        src: "/icon",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
