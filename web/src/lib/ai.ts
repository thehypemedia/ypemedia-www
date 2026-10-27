import { marka, faq } from "@/data/tresc";
import { produkty } from "@/data/handel";

export const dzis = () => new Date().toISOString().slice(0, 10);

export const summary = () => ({
  name: marka.nazwa,
  url: `${marka.domena}/`,
  description: marka.opis,
  language: "en",
  contact: marka.email,
  datePublished: marka.datePublished,
  dateModified: dzis(),
});

export const service = () => ({
  provider: marka.nazwa,
  checkout: "Polar (merchant of record)",
  products: produkty.map((p) => ({
    sku: p.sku,
    name: p.nazwa,
    price: p.cena,
    regularPrice: p.cenaPrzed ?? p.cena,
    currency: p.waluta,
    billing: "one-off",
    description: p.krotko,
    includes: p.zawartosc,
    available: Boolean(p.link),
  })),
  licence: "Own brand and client work allowed. No resale or redistribution of files.",
  dateModified: dzis(),
});

export const faqJson = () => ({ faq: faq.map((f) => ({ question: f.q, answer: f.a })), dateModified: dzis() });

export const llms = () => `# ${marka.nazwa}

> ${marka.opis}

Updated: ${dzis()}

## Products

${produkty.map((p) => `- [${p.nazwa}](${marka.domena}/#shop): ${p.krotko} Includes: ${p.zawartosc.join("; ")}. Price: ${p.cena} ${p.waluta}${p.cenaPrzed ? ` (instead of ${p.cenaPrzed} ${p.waluta})` : ""}, one-off.`).join("\n")}

## Key facts

- Checkout and delivery run through Polar (merchant of record).
- Licence: own brand and client work allowed; reselling or sharing the files is not.

## FAQ

${faq.map((f) => `- ${f.q} ${f.a}`).join("\n")}

## Pages

- [Home](${marka.domena}/)
- [Terms](${marka.domena}/terms/)
- [Privacy](${marka.domena}/privacy/)
- Contact: ${marka.email}
`;
