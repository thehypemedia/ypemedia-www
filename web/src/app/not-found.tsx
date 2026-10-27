import Link from "next/link";
import Naglowek from "@/components/Naglowek";
import Stopka from "@/components/Stopka";

export default function NieZnaleziono() {
  return (
    <main className="page">
      <div className="simple-top"><Naglowek /></div>
      <article className="prose">
        <div className="eyebrow"><span className="eyebrow-line" /> 404</div>
        <h1>Nothing here. <em>Yet.</em></h1>
        <p><Link href="/">Back to the shop</Link></p>
      </article>
      <Stopka />
    </main>
  );
}
