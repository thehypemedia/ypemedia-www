import type { Metadata } from "next";
import Naglowek from "@/components/Naglowek";
import Stopka from "@/components/Stopka";

const LINK = "https://buy.polar.sh/polar_cl_ky4WuEypggTQqMTE8QonVYGhuw5Twy2WHrJ1a2xcm7Y";

export const metadata: Metadata = {
  title: "Free Starter Pack · safe zones cheat sheet and AI product photo prompts",
  description: "Free PDF for e-commerce brands: safe zone cheat sheet for Instagram, Facebook, TikTok, X and YouTube Shorts, 10 AI product photo prompts that leave room for your headline, and 3 free designs in the browser editor.",
  alternates: { canonical: "/starter/" },
  openGraph: { images: ["/starter/cover.webp"] },
};

export default function Strona() {
  return (
    <main className="page">
      <div className="simple-top"><Naglowek /></div>
      <section className="starter">
        <div className="starter-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> FREE STARTER PACK</div>
          <h1>Post <em>smarter,</em><br />for free</h1>
          <p className="starter-lead">One PDF for brands that post every week. Know exactly where your text is safe on every platform, and get product photos that leave room for your headline.</p>
          <ul>
            <li><b>Safe zones</b>Cheat sheet for 9 placements: Instagram, Facebook, TikTok, X and YouTube Shorts</li>
            <li><b>10 prompts</b>AI product photo prompts for skincare, food, fashion, tech, jewelry, home, supplements and fitness</li>
            <li><b>3 free designs</b>Ready to edit in the browser editor, no account needed</li>
            <li><b>15% off</b>A code for the full Template Kit, inside the PDF</li>
          </ul>
          <a className="cta-big" href={LINK}>Get the free PDF <span aria-hidden="true">↗</span></a>
          <p className="hero-note"><span aria-hidden="true" />Free, no card. Sent to your inbox by Polar</p>
        </div>
        <div className="starter-pages" aria-hidden="true">
          <img src="/starter/pg2.webp" alt="" width="794" height="1123" />
          <img src="/starter/pg3.webp" alt="" width="794" height="1123" />
        </div>
      </section>
      <Stopka />
    </main>
  );
}
