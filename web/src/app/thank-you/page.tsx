import type { Metadata } from "next";
import Naglowek from "@/components/Naglowek";
import Stopka from "@/components/Stopka";

export const metadata: Metadata = { title: "Thank you", alternates: { canonical: "/thank-you/" }, robots: { index: false } };

export default function Strona() {
  return (
    <main className="page">
      <div className="simple-top"><Naglowek /></div>
      <article className="prose">
        <div className="eyebrow"><span className="eyebrow-line" /> ORDER CONFIRMED</div>
        <h1>Thank you. <em>Go make something good.</em></h1>
        <p>Your files and links are on their way to your inbox from Polar. If nothing arrives within ten minutes, check spam or write to <a href="mailto:info@ypemedia.com">info@ypemedia.com</a>.</p>
        <p>Bought the Template Kit or the Bundle? The same email contains a licence key. Paste it into the <a href="/editor/">online editor</a> to unlock all 18 designs, full size downloads and more AI backgrounds.</p>
        <h2>Where to start</h2>
        <p>Open the Start here page in the Figma file, or the Adobe Express link, and make your own copy before you edit anything.</p>
      </article>
      <Stopka />
    </main>
  );
}
