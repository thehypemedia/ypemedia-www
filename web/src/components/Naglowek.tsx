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
      <div className="availability"><span aria-hidden="true" />{naglowek.status}</div>
    </div>
  );
}
