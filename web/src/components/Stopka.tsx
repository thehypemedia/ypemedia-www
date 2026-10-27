import Link from "next/link";
import Spark from "./Spark";
import { stopka } from "@/data/tresc";

export default function Stopka() {
  return (
    <footer className="site-bottom">
      <div className="footer-bottom">
        <div className="footer-bottom-main">
          <p className="bottom-manifesto">
            {stopka.manifest} <em>{stopka.manifestKursywa}</em>
          </p>
          <nav className="display-navigation" aria-label="Site">
            {stopka.nawigacja.map((n) => (
              <Link key={n.etykieta} href={n.href}>{n.etykieta}</Link>
            ))}
          </nav>
          <div className="socials-new" aria-label="Social platforms">
            <span role="img" aria-label="Instagram"><img src="/instagram.svg" alt="" width="20" height="20" /></span>
            <span role="img" aria-label="LinkedIn"><img src="/linkedin.svg" alt="" width="20" height="20" /></span>
            <span role="img" aria-label="TikTok"><img src="/tiktok.svg" alt="" width="20" height="20" /></span>
          </div>
        </div>
        <div className="footer-fineprint">
          <span>{stopka.drobny[0]}</span>
          <span className="fineprint-center">{stopka.drobny[1]}</span>
          <span className="legal">
            {stopka.prawne.map((p) => (
              <Link key={p.href} href={p.href}>{p.etykieta.toUpperCase()}</Link>
            ))}
            <Spark />
          </span>
        </div>
      </div>
    </footer>
  );
}
