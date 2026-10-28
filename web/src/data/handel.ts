// Products and Polar checkout links. An empty `link` shows "Launching soon" instead of a dead button.
export type Produkt = {
  sku: string;
  nazwa: string;
  krotko: string;
  cena: number;
  cenaPrzed?: number;
  waluta: "USD";
  okladka: string;
  zawartosc: string[];
  link: string;
  wyroznienie?: string;
};

export const produkty: Produkt[] = [
  {
    sku: "ype-social-template-kit-vol-1",
    nazwa: "Social Template Kit Vol. 1",
    krotko: "18 editable templates for Instagram, Facebook, TikTok, X and YouTube Shorts.",
    cena: 29,
    waluta: "USD",
    okladka: "/products/cover-template-kit.webp",
    zawartosc: [
      "12 feed templates (4:5) and 6 story templates (9:16)",
      "Figma file and Canva templates",
      "After Effects project with animations",
      "Full access to the online editor, no watermark",
      "Examples for 8 product categories",
    ],
    link: "https://buy.polar.sh/polar_cl_9ofk2oVshYsus6kVQ85apnF1iwl1Ov80Y66IP4AbTXN",
  },
  {
    sku: "ype-product-photo-prompt-system",
    nazwa: "Product Photo Prompt System",
    krotko: "AI product photo prompts that leave room for your headline.",
    cena: 19,
    waluta: "USD",
    okladka: "/products/cover-prompt-system-v2.webp",
    zawartosc: [
      "48 product photo prompts, 6 shot types",
      "10 motion prompts for Reels and TikTok",
      "19-page PDF guide with examples",
      "CSV and JSON for Notion or Airtable",
    ],
    link: "https://buy.polar.sh/polar_cl_YBOKErzHkpcbiYBoKKq5S7egDm7NtFjmy7LQK2mSX5k",
  },
  {
    sku: "ype-creator-bundle",
    nazwa: "The Creator Bundle",
    krotko: "Both products. Make the photo, drop it in, post.",
    cena: 34,
    cenaPrzed: 48,
    waluta: "USD",
    okladka: "/products/cover-creator-bundle.webp",
    zawartosc: [
      "Social Template Kit Vol. 1",
      "Product Photo Prompt System",
      "Free updates to both products",
    ],
    link: "https://buy.polar.sh/polar_cl_LrMFeHMA5PAtGFdXogduSJvLnnbp9O6kCCUS03YQMCH",
    wyroznienie: "Best value",
  },
];

export const cena = (p: Produkt) => `$${p.cena}`;
