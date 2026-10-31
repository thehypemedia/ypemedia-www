"use client";
import { useState } from "react";
import { freebie } from "@/data/tresc";

export default function FormularzFreebie() {
  const [stan, setStan] = useState<"idle" | "busy" | "ok" | "err">("idle");
  const skonfigurowany = /^https:\/\//.test(freebie.webhook);

  async function wyslij(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const dane = {
      email: (f.elements.namedItem("email") as HTMLInputElement).value.trim(),
      name: (f.elements.namedItem("name") as HTMLInputElement).value.trim(),
      engaged: (f.elements.namedItem("engaged") as HTMLInputElement).checked,
      source: typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("src") || "site" : "site",
      lang: typeof navigator !== "undefined" ? navigator.language : "",
    };
    if (!dane.email) return;
    setStan("busy");
    try {
      const r = await fetch(freebie.webhook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(dane) });
      if (!r.ok) throw new Error(String(r.status));
      setStan("ok");
      f.reset();
    } catch {
      setStan("err");
    }
  }

  return (
    <form className="freebie-form" onSubmit={wyslij}>
      <h2>Send me the <em>unlock link</em></h2>
      <p>One email with the link. Then one practical tip a week on posts that sell, unsubscribe any time.</p>
      <label htmlFor="fb-name">First name, optional</label>
      <input id="fb-name" name="name" type="text" autoComplete="given-name" placeholder="Alex" />
      <label htmlFor="fb-email">Email</label>
      <input id="fb-email" name="email" type="email" required autoComplete="email" placeholder="you@brand.com" />
      <label className="check"><input name="engaged" type="checkbox" /> I liked the post and I follow YPE Media. Not required, but it makes our day</label>
      {skonfigurowany ? (
        <button className="cta-big cta-light" type="submit" disabled={stan === "busy"}>{stan === "busy" ? "Sending…" : "Get the free pack"} <span aria-hidden="true">↗</span></button>
      ) : (
        <a className="cta-big cta-light" href="mailto:info@ypemedia.com?subject=FREE%20PACK">Email us for the link <span aria-hidden="true">↗</span></a>
      )}
      {stan === "ok" && <p className="freebie-msg">{freebie.dziekujemy}</p>}
      {stan === "err" && <p className="freebie-msg err">{freebie.fallback}</p>}
      {!skonfigurowany && <p className="freebie-msg">{freebie.fallback}</p>}
      <p className="freebie-fine">By sending you agree to our <a href="/privacy/">privacy policy</a>. We never share your address.</p>
    </form>
  );
}
