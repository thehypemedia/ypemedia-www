# ypemedia.com

Sklep z produktami cyfrowymi YPE Media (Social Template Kit Vol. 1 z 34 projektami, Product Photo Prompt System, The Creator Bundle) plus darmowy edytor online i freebie Creator Starter Pack. Wygląd przeniesiony 1:1 ze strony Soft Spot z Manusa: te same kolory, fonty (DM Sans, Instrument Serif) i ta sama rzeźba 3D w Three.js.

Układ jak auto-mate.space: statyczny Next.js, każdy push na `main` buduje stronę i wysyła ją po FTP na Hostingera.

## Uruchomienie lokalnie

```
cd web
npm install
npm run dev        # http://localhost:3000
npm run build      # statyczna strona w web/out
```

## Gdzie co jest

- `web/src/data/tresc.ts`: wszystkie teksty strony, FAQ, stopka
- `web/src/data/handel.ts`: produkty, ceny i linki do Polara
- `web/src/app/`: strony (`page.tsx` to strona główna, `terms`, `privacy`, `thank-you`)
- `web/src/components/BloomSculpture.tsx`: rzeźba 3D (kod z Soft Spot)
- `web/src/app/globals.css`: style; pierwsza część to CSS Soft Spot bez zmian, niżej dodatki YPE
- `web/public/editor/index.html`: edytor online; projekty F (reklamy 4:5), S (stories 9:16) i C (creator: cytaty, statystyki, karuzele, social plates) siedzą w `<script id="slides">`
- `web/src/app/free/`: strona freebie (Creator Starter Pack), formularz wysyła do webhooka n8n z `tresc.ts` → `freebie.webhook`
- `marketing/`: workflow n8n do wysyłki freebie i playbook z tekstami postów
- `web/public/templates/`, `web/public/products/`: podglądy szablonów i okładki produktów
- `llms.txt`, `ai/*.json`, `sitemap.xml`, dane strukturalne: generują się same z `src/data`, więc cena zmieniona w `handel.ts` zmienia się wszędzie

## Co trzeba uzupełnić

1. **Linki Polara**: załóż 3 produkty na swoim koncie Polar i wklej linki checkout w `handel.ts` (pole `link`). Pusty link pokazuje „Launching soon”. Jako adres po zakupie ustaw `https://ypemedia.com/thank-you/`.
2. **Sekrety FTP** w GitHubie (Settings → Secrets and variables → Actions): `FTP_SERWER`, `FTP_LOGIN`, `FTP_HASLO`. Najlepiej osobne konto FTP tylko dla ypemedia.com (Hostinger → Files → FTP Accounts, katalog `domains/ypemedia.com/public_html`). Workflow wysyła pliki do `/`, czyli zakłada takie osobne konto. Przy głównym koncie FTP zmień w `deploy.yml` cel na `/public_html/`.
3. **E-mail** `hello@ypemedia.com`: załóż skrzynkę albo zmień adres w `tresc.ts`.
4. **Social media**: ikony w stopce są na razie bez linków.
5. **Treści prawne** (`terms`, `privacy`): szkic do przejrzenia.

## Wdrażanie

Push na `main` → GitHub Actions buduje `web/out` i wysyła go na Hostingera (`mirror --delete`, więc nie wgrywaj niczego ręcznie przez File Manager).
