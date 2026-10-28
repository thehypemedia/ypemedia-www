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
    sku: "ype-ad-kit-vol-1",
    nazwa: "Ad Kit Vol. 1",
    krotko: "18 editable ad templates for Canva, CapCut, Figma, After Effects and Adobe Express.",
    cena: 29,
    waluta: "USD",
    okladka: "/products/cover-ad-kit.webp",
    zawartosc: [
      "12 feed templates, 1080 x 1350",
      "6 story and Reels templates, 1080 x 1920",
      "Canva, CapCut, Figma, Adobe Express versions",
      "After Effects project with animations",
      "Examples for 8 product categories",
    ],
    link: "https://buy.polar.sh/polar_cl_9ofk2oVshYsus6kVQ85apnF1iwl1Ov80Y66IP4AbTXN",
  },
  {
    sku: "ype-ai-ad-prompt-system",
    nazwa: "AI Ad Prompt System",
    krotko: "Product photo prompts that leave room for your headline.",
    cena: 19,
    waluta: "USD",
    okladka: "/products/cover-prompt-system.webp",
    zawartosc: [
      "48 product photo prompts, 6 shot types",
      "10 motion prompts for Reels and TikTok",
      "19-page PDF guide with examples",
      "CSV and JSON for Notion or Airtable",
    ],
    link: "https://buy.polar.sh/polar_cl_YBOKErzHkpcbiYBoKKq5S7egDm7NtFjmy7LQK2mSX5k",
  },
  {
    sku: "ype-ad-bundle",
    nazwa: "The Ad Bundle",
    krotko: "Both products. Make the photo, drop it in, post.",
    cena: 34,
    cenaPrzed: 48,
    waluta: "USD",
    okladka: "/products/cover-bundle.webp",
    zawartosc: [
      "Ad Kit Vol. 1",
      "AI Ad Prompt System",
      "Free updates to both products",
    ],
    link: "https://buy.polar.sh/polar_cl_LrMFeHMA5PAtGFdXogduSJvLnnbp9O6kCCUS03YQMCH",
    wyroznienie: "Best value",
  },
];

export const cena = (p: Produkt) => `$${p.cena}`;
