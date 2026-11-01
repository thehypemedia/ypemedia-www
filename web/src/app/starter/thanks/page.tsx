import type { Metadata } from "next";
import Naglowek from "@/components/Naglowek";
import Stopka from "@/components/Stopka";

const KIT = "https://buy.polar.sh/polar_cl_9ofk2oVshYsus6kVQ85apnF1iwl1Ov80Y66IP4AbTXN?discount_code=STARTER15";

export const metadata: Metadata = { title: "Your Starter Pack is on its way", alternates: { canonical: "/starter/thanks/" }, robots: { index: false } };

export default function Strona() {
  return (
    <main className="page">
      <div className="simple-top"><Naglowek /></div>
      <article className="prose">
        <div className="eyebrow"><span className="eyebrow-line" /> STARTER PACK</div>
        <h1>It&apos;s in your <em>inbox.</em></h1>
        <p>Polar is sending your download link right now. If it doesn&apos;t arrive within ten minutes, check spam or write to <a href="mailto:info@ypemedia.com">info@ypemedia.com</a>.</p>
        <h2>Try it while you wait</h2>
        <p>Open the <a href="/editor/">free post editor</a>, pick one of the 3 free designs, drop in your product photo and switch between Instagram, TikTok, X and Shorts.</p>
        <h2>Your 15% code</h2>
        <p>Use <b>STARTER15</b> for 15% off the Template Kit: all 18 designs, full size downloads without watermark, Figma, Canva and After Effects files.</p>
        <p><a className="cta-big" href={KIT}>Get the Template Kit with 15% off <span aria-hidden="true">↗</span></a></p>
      </article>
      <Stopka />
    </main>
  );
}
