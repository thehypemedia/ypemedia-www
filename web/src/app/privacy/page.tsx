import type { Metadata } from "next";
import Naglowek from "@/components/Naglowek";
import Stopka from "@/components/Stopka";

export const metadata: Metadata = { title: "Privacy", alternates: { canonical: "/privacy/" }, robots: { index: true } };

export default function Strona() {
  return (
    <main className="page">
      <div className="simple-top"><Naglowek /></div>
      <article className="prose">
        <p className="note">DRAFT FOR REVIEW · LAST UPDATED 26 OCTOBER 2026</p>
        <h1>Privacy</h1>
        <h2>What we collect</h2>
        <p>This site does not use cookies for tracking. We use Cloudflare Web Analytics, which counts visits without cookies or personal profiles.</p>
        <h2>When you buy</h2>
        <p>Checkout runs on Polar. Polar receives your name, email and payment details to process the order and send your files. See the <a href="https://polar.sh/legal/privacy" target="_blank" rel="noopener">Polar privacy policy</a>.</p>
        <h2>Email</h2>
        <p>If you write to us, we keep your message only as long as we need it to help you.</p>
        <h2>Your rights</h2>
        <p>You can ask us to see, correct or delete your data at <a href="mailto:info@ypemedia.com">info@ypemedia.com</a>.</p>
      </article>
      <Stopka />
    </main>
  );
}
