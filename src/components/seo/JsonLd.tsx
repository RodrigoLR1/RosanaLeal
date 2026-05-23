import { SITE } from "@/lib/site";

/**
 * Schema.org JSON-LD — combina LocalBusiness, MedicalBusiness e Person.
 * Faz o Google entender quem é a Rosana, onde atende, qual a especialidade,
 * e habilita rich results (knowledge panel, mapa, telefone clicável no SERP).
 */
export function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "MedicalBusiness", "HealthAndBeautyBusiness"],
        "@id": `${SITE.url}#business`,
        name: SITE.brand,
        alternateName: "Nutrifarma Rosana",
        url: SITE.url,
        logo: `${SITE.url}/images/logo-rl.png`,
        image: `${SITE.url}/images/rosana-hero.png`,
        description: SITE.description,
        telephone: SITE.phone,
        priceRange: "$$",
        currenciesAccepted: "BRL",
        paymentAccepted: "Cash, Credit Card, Pix",
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE.address.street,
          addressLocality: SITE.address.city,
          addressRegion: SITE.address.state,
          addressCountry: SITE.address.country,
          postalCode: SITE.address.zip,
        },
        areaServed: {
          "@type": "City",
          name: "Campina Grande",
        },
        medicalSpecialty: ["Nutrition", "Pharmacy"],
        sameAs: [SITE.instagram],
        founder: { "@id": `${SITE.url}#person` },
        openingHours: "Mo-Fr 08:00-18:00",
      },
      {
        "@type": "Person",
        "@id": `${SITE.url}#person`,
        name: SITE.name,
        jobTitle: "Farmacêutica e Nutricionista Clínica",
        image: `${SITE.url}/images/rosana-hero.png`,
        url: SITE.url,
        sameAs: [SITE.instagram],
        worksFor: { "@id": `${SITE.url}#business` },
        knowsAbout: [
          "Nutrição Clínica",
          "Farmácia",
          "Interação medicamento-nutriente",
          "Nutrição funcional",
          "Atendimento domiciliar",
        ],
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "license",
            name: SITE.credentials.crfPB,
          },
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "license",
            name: SITE.credentials.crn6,
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}#website`,
        url: SITE.url,
        name: SITE.brand,
        inLanguage: "pt-BR",
        publisher: { "@id": `${SITE.url}#business` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
