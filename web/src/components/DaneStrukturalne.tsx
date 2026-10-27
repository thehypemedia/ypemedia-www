import { marka, faq } from "@/data/tresc";
import { produkty } from "@/data/handel";

const dateModified = new Date().toISOString().slice(0, 10);

export default function DaneStrukturalne({ zFaq = false }: { zFaq?: boolean }) {
  const graph: object[] = [
    {
      "@type": "Organization",
      "@id": `${marka.domena}/#organizacja`,
      name: marka.nazwa,
      url: `${marka.domena}/`,
      email: marka.email,
      logo: `${marka.domena}/icon-v1.png`,
      description: marka.opis,
    },
    {
      "@type": "WebSite",
      "@id": `${marka.domena}/#serwis`,
      url: `${marka.domena}/`,
      name: marka.nazwa,
      publisher: { "@id": `${marka.domena}/#organizacja` },
      inLanguage: "en",
      datePublished: marka.datePublished,
      dateModified,
    },
    ...produkty.map((p) => ({
      "@type": "Product",
      "@id": `${marka.domena}/#${p.sku}`,
      name: `YPE ${p.nazwa}`,
      description: p.krotko,
      image: `${marka.domena}${p.okladka}`,
      brand: { "@id": `${marka.domena}/#organizacja` },
      offers: {
        "@type": "Offer",
        price: p.cena.toFixed(2),
        priceCurrency: p.waluta,
        availability: p.link ? "https://schema.org/InStock" : "https://schema.org/PreOrder",
        url: p.link || `${marka.domena}/#shop`,
      },
    })),
  ];
  if (zFaq) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${marka.domena}/#faq`,
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }}
    />
  );
}
