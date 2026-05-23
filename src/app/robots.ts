import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/**
 * robots.txt dinâmico — Next gera em /robots.txt automaticamente.
 *
 * Permite indexação completa e aponta para o sitemap.
 * Quando houver área administrativa ou rotas privadas no futuro,
 * adicionar `disallow: ["/admin", "/api"]` etc.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
