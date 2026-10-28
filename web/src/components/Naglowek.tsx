import Link from "next/link";
import Spark from "./Spark";
import { naglowek } from "@/data/tresc";

export default function Naglowek() {
  return (
    <div className="studio-topline">
      <Link href="/" className="wordmark" aria-label="YPE Media, home">
        <Spark />
        <span>ype media<span className="wordmark-period">.</span></span>
      </Link>
      <div className="studio-descriptor">
        {naglowek.deskryptor.join(" ")}
      </div>
      <a className="availability top-cta" href="/editor/"><span aria-hidden="true" />FREE POST EDITOR <b>TRY IT ↗</b></a>
    </div>
  );
}
