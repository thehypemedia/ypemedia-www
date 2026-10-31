import type { Metadata } from "next";
import Naglowek from "@/components/Naglowek";
import Stopka from "@/components/Stopka";
import FormularzFreebie from "@/components/FormularzFreebie";
import { freebie, szablony } from "@/data/tresc";

export const metadata: Metadata = {
  title: "Free Creator Starter Pack: 6 social templates",
  description: "Six free creator templates in full size: quote card, stat post, socials plate, carousel cover and ending, text hook. For LinkedIn, Instagram, TikTok and more.",
  alternates: { canonical: "/free/" },
  openGraph: { title: "Free Creator Starter Pack · YPE Media", description: "Six creator templates, full size, no watermark. Quote, stats, carousel, socials.", images: ["/og-image.png"] },
};

export default function Strona() {
  const darmowe = szablony.filter((s) => s.darmowy);
  return (
    <main className="page">
      <div className="simple-top"><Naglowek /></div>
      <section className="freebie" aria-labelledby="freebie-title">
        <div>
          <div className="eyebrow"><span className="eyebrow-line" /> {freebie.eyebrow}</div>
          <h1 id="freebie-title">{freebie.tytul} <em>{freebie.tytulKursywa}</em></h1>
          <p className="freebie-intro">{freebie.intro}</p>
          <ul>
            {freebie.punkty.map(([b, t]) => <li key={b}><b>{b}</b>{t}</li>)}
          </ul>
        </div>
        <FormularzFreebie />
      </section>
      <section className="freebie-gallery" aria-label="The six free designs">
        <div className="gallery-label">WHAT YOU GET · CREATOR 4:5, FITS EVERY PLATFORM</div>
        <div className="gallery gallery-stories">
          {darmowe.map((s) => (
            <figure key={s.id}>
              <img src={`/templates/${s.id}.webp`} alt={`${s.nazwa} free social media template`} loading="lazy" width="720" height="900" />
              <figcaption>{s.id.toUpperCase()} &nbsp;{s.nazwa}</figcaption>
            </figure>
          ))}
        </div>
        <p className="gallery-note">Want the other 28 designs, the Figma, Canva and After Effects files and full size everything? <a href="/#shop">The Template Kit is $29</a></p>
      </section>
      <Stopka />
    </main>
  );
}
