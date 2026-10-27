import type { Produkt } from "@/data/handel";

export default function PrzyciskZakupu({ produkt }: { produkt: Produkt }) {
  if (!produkt.link) {
    return <span className="buy buy-soon">Launching soon</span>;
  }
  return (
    <a className="buy buy-solid" href={produkt.link} target="_blank" rel="noopener">
      Get {produkt.nazwa} <span aria-hidden="true">↗</span>
    </a>
  );
}
