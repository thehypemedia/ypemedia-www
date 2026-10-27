import type { Metadata } from "next";
import Naglowek from "@/components/Naglowek";
import Stopka from "@/components/Stopka";

export const metadata: Metadata = { title: "Terms", alternates: { canonical: "/terms/" }, robots: { index: true } };

export default function Strona() {
  return (
    <main className="page">
      <div className="simple-top"><Naglowek /></div>
      <article className="prose">
        <p className="note">DRAFT FOR REVIEW · LAST UPDATED 26 OCTOBER 2026</p>
        <h1>Terms</h1>
        <h2>Who sells</h2>
        <p>Orders are processed by Polar, which acts as merchant of record and handles payment, invoices and sales tax. YPE Media provides the digital products.</p>
        <h2>What you get</h2>
        <p>A personal, non-transferable licence to use the templates, prompts and guides for your own brand and for client work. You may not resell, share or redistribute the files, links or prompts, alone or as part of another product.</p>
        <h2>Delivery</h2>
        <p>Products are delivered digitally straight after payment. Example images are placeholders and are not licensed for use as your own product photos.</p>
        <h2>Refunds</h2>
        <p>Digital files cannot be returned once accessed. If a product does not work as described, contact us within 14 days and we will fix it or refund you.</p>
        <h2>Contact</h2>
        <p><a href="mailto:hello@ypemedia.com">hello@ypemedia.com</a></p>
      </article>
      <Stopka />
    </main>
  );
}
