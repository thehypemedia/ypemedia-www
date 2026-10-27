import type { Metadata } from "next";
import Naglowek from "@/components/Naglowek";
import Rzezba from "@/components/Rzezba";
import Stopka from "@/components/Stopka";
import PrzyciskZakupu from "@/components/PrzyciskZakupu";
import DaneStrukturalne from "@/components/DaneStrukturalne";
import { hero, sekcje, faq, szablony } from "@/data/tresc";
import { produkty, cena } from "@/data/handel";

export const metadata: Metadata = { alternates: { canonical: "/" } };

function Naglowek2({ eyebrow, tytul, kursywa, intro }: { eyebrow: string; tytul: string; kursywa: string; intro?: string }) {
  return (
    <div className="section-head">
      <div>
        <div className="eyebrow"><span className="eyebrow-line" /> {eyebrow}</div>
        <h2>{tytul} <em>{kursywa}</em></h2>
      </div>
      {intro && <p>{intro}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main className="page">
      <DaneStrukturalne zFaq />
      <section className="studio-footer hero-screen" aria-label="YPE Media">
        <Naglowek />
        <div className="studio-main">
          <div className="studio-story">
            <div className="eyebrow"><span className="eyebrow-line" /> {hero.eyebrow}</div>
            <h1>{hero.linia1}<br />{hero.linia2Prosto}<em>{hero.linia2Kursywa}</em></h1>
            <p className="studio-intro">{hero.intro[0]}<br />{hero.intro[1]}<br className="desktop-break" /> {hero.intro[2]}</p>
            <a className="conversation" href="#templates">
              <span className="conversation-icon" aria-hidden="true">↗</span>
              <div><span className="conversation-label">{hero.rozmowaEtykieta}</span><p>{hero.rozmowaTekst}</p></div>
            </a>
          </div>
          <div className="studio-art">
            <Rzezba />
          </div>
        </div>
      </section>

      <section className="section" id="shop">
        <Naglowek2 eyebrow={sekcje.produkty.eyebrow} tytul={sekcje.produkty.tytul} kursywa={sekcje.produkty.tytulKursywa} intro={sekcje.produkty.intro} />
        <div className="products">
          {produkty.map((p) => (
            <article className="product" key={p.sku}>
              <div className="product-cover">
                <img src={p.okladka} alt={`YPE ${p.nazwa} cover`} loading="lazy" width="1280" height="720" />
                {p.wyroznienie && <span className="product-flag">{p.wyroznienie.toUpperCase()}</span>}
              </div>
              <div className="product-row">
                <h3>{p.nazwa}</h3>
                <span className="price">{p.cenaPrzed && <s>${p.cenaPrzed}</s>}{cena(p)}</span>
              </div>
              <p className="product-lead">{p.krotko}</p>
              <ul>{p.zawartosc.map((z) => <li key={z}>{z}</li>)}</ul>
              <PrzyciskZakupu produkt={p} />
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="templates">
        <Naglowek2 eyebrow={sekcje.galeria.eyebrow} tytul={sekcje.galeria.tytul} kursywa={sekcje.galeria.tytulKursywa} intro={sekcje.galeria.intro} />
        <div className="gallery-label">FEED 4:5</div>
        <div className="gallery gallery-feed">
          {szablony.filter((s) => s.id.startsWith("f")).map((s) => (
            <figure key={s.id}>
              <img src={`/templates/${s.id}.webp`} alt={`${s.nazwa} ad template`} loading="lazy" width="720" height="900" />
              <figcaption>{s.id.toUpperCase()} &nbsp;{s.nazwa}</figcaption>
            </figure>
          ))}
        </div>
        <div className="gallery-label">STORIES & REELS 9:16</div>
        <div className="gallery gallery-stories">
          {szablony.filter((s) => s.id.startsWith("s")).map((s) => (
            <figure key={s.id}>
              <img src={`/templates/${s.id}.webp`} alt={`${s.nazwa} story template`} loading="lazy" width="720" height="1280" />
              <figcaption>{s.id.toUpperCase()} &nbsp;{s.nazwa}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section" id="how">
        <Naglowek2 eyebrow={sekcje.jak.eyebrow} tytul={sekcje.jak.tytul} kursywa={sekcje.jak.tytulKursywa} />
        <div className="steps">
          {sekcje.jak.kroki.map((k) => (
            <div className="step" key={k.nr}>
              <span className="step-nr">{k.nr}</span>
              <h3>{k.tytul}</h3>
              <p>{k.tekst}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="faq">
        <Naglowek2 eyebrow={sekcje.faq.eyebrow} tytul={sekcje.faq.tytul} kursywa={sekcje.faq.tytulKursywa} />
        <div className="faq">
          {faq.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <Stopka />
    </main>
  );
}
