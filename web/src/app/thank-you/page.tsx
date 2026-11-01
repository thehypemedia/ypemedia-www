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
        <p>Open START-HERE.pdf from your download. It links the Figma file, explains the Canva import and the After Effects project. Make your own copy before you edit anything.</p>
        <h2>Kit owners: add the prompts for $9</h2>
        <p>The Product Photo Prompt System gives you 48 product photo prompts and 10 motion prompts that leave room for your headline, built for the same layouts. As a Template Kit owner you get it for $9 instead of $19 with code <b>KITOWNER</b>.</p>
        <p><a className="cta-big" href="https://buy.polar.sh/polar_cl_YBOKErzHkpcbiYBoKKq5S7egDm7NtFjmy7LQK2mSX5k?discount_code=KITOWNER">Add the Prompt System for $9 <span aria-hidden="true">↗</span></a></p>
      </article>
      <Stopka />
    </main>
  );
}
