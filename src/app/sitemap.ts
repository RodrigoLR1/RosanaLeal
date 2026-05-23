import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/**
 * Sitemap dinâmico — Next gera o XML em /sitemap.xml automaticamente.
 *
 * Por ora só temos a home (one-pager com âncoras). Quando adicionarmos
 * páginas (blog, post-individual, etc.), basta empurrar mais entradas
 * aqui que o sitemap atualiza em tempo de build.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
