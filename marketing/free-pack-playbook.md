# Creator Starter Pack: freebie i dystrybucja

Freebie = 6 projektów z nowej puli Creator (C01 Quote editorial, C05 Big number, C09 Find me on, C12 Carousel cover, C15 Carousel CTA, C16 Text hook) odblokowanych w pełnym rozmiarze, bez znaku wodnego.

Link odblokowujący: `https://ypemedia.com/editor/?unlock=creator-starter-7f3a`
(otwarty raz zapisuje się w przeglądarce odbiorcy; zmiana tokena: `CREATOR_TOKEN` w `web/public/editor/index.html` i `linkOdblokowania` w `web/src/data/tresc.ts` oraz w workflow n8n).

## Jak to działa

1. Post na LinkedIn / Instagramie: „polub, zaobserwuj, skomentuj PACK”.
2. W odpowiedzi na komentarz albo w DM wysyłasz `https://ypemedia.com/free/?src=li` (`src=ig` dla Instagrama, `src=tt` dla TikToka; parametr trafia do arkusza).
3. Osoba zostawia maila na `/free/`, formularz uderza w webhook n8n.
4. n8n wysyła maila z linkiem odblokowującym (Gmail) i dopisuje lead do arkusza Google.

Dzięki temu masz listę mailową, a nie tylko komentarze.

## Uruchomienie n8n (ok. 10 minut)

1. n8n → Import from file → `marketing/n8n-free-pack.json`.
2. Node **Gmail: send unlock link**: podepnij credential Gmail (konto, z którego wysyłasz ypemedia; adres Reply-To już ustawiony na info@ypemedia.com).
3. Node **Google Sheets: log lead**: załóż arkusz „YPE-FreePack-Leads” z zakładką `Leads` i nagłówkami `date | email | name | engaged | source | lang`, wklej jego ID w `documentId`, podepnij credential.
4. Node **Webhook**: w opcjach jest już `Allowed Origins: https://ypemedia.com`. Skopiuj Production URL (kończy się na `/webhook/ype-free-pack`).
5. Wklej ten URL w `web/src/data/tresc.ts` → `freebie.webhook`, push na `main`. Dopóki pole jest puste, strona pokazuje przycisk „Email us for the link” (ręczna wysyłka).
6. Aktywuj workflow. Test: wejdź na ypemedia.com/free, wpisz swój mail.

Opcjonalnie: dodaj drugi mail po 3 dniach (Wait node → Gmail) z pytaniem „co zrobiłaś z szablonami?” i linkiem do Template Kit za 29 USD.

## Instagram (pełna automatyzacja, oficjalnie)

Na Instagramie komentarz → DM działa oficjalnie przez ManyChat (darmowy plan wystarcza): trigger „komentarz ze słowem PACK pod postem” → DM z linkiem `https://ypemedia.com/free/?src=ig`. Nie wymaga n8n.

## LinkedIn (półautomat, bez ryzyka dla konta)

LinkedIn nie udostępnia API do komentarzy pod postami prywatnymi. Opcje:
- ręcznie: odpowiadasz pod komentarzem jednym zdaniem z linkiem (szablon niżej). 20 komentarzy to 5 minut, a odpowiedzi pod postem dodatkowo nakręcają zasięg;
- automat: n8n + Unipile (ok. 55 USD/mies., nieoficjalne API, umiarkowane ryzyko) albo PhantomBuster (eksport komentujących → Message Sender, limit ok. 10 DM/h). Gotowe szablony: n8n.io/workflows/7844 (Unipile + NocoDB) i phantombuster.com „turn LinkedIn posts into lead magnets”.

## Teksty postów (EN, LinkedIn)

**Post 1, karuzela z 6 projektami (okładka: C12, ostatni slajd: C15)**

> I made 6 social templates for creators and I'm giving them away.
>
> Quote card. Big-number stat. "Find me on" plate. Carousel cover and ending. Text hook.
>
> They work in your browser, no Canva account, no Figma. Pick LinkedIn, Instagram, TikTok or Shorts and the layout snaps to that platform's safe zone.
>
> Want them in full size, no watermark?
>
> 1. Like this post
> 2. Follow YPE Media
> 3. Comment "PACK" and I'll send you the link
>
> (No card. One email with the link, that's it.)

**Post 2, pojedyncza grafika (C05 z liczbą „2.52% vs 1.98%”)**

> Text-only posts on LinkedIn: 1.98% engagement.
> Image posts: 2.77%. Carousels: 2.52% and the most comments of any format.
> (Taplio, 219k posts, March 2026)
>
> The post you spent 40 minutes writing deserves a visual.
> I made 6 free templates so it takes 4 minutes instead. Comment "PACK" for the link.

**Odpowiedź pod komentarzem (kopiuj-wklej)**

> Here you go: ypemedia.com/free/?src=li  Open the link, leave your email, the unlock arrives in a minute. Enjoy

**DM (gdy ktoś nie jest w kontaktach)**

> Hi! You asked for the Creator Starter Pack. Grab it here: ypemedia.com/free/?src=li  Six designs, full size, free. If you post one, tag YPE Media, I'd love to see it.

Podpis zawsze „YPE Media team”, nigdy imieniem i nazwiskiem.

## Co dalej (upsell)

- Mail nr 2 po 3 dniach: pokaż C07 (wykres) i C11 (contact card) z napisem „in the Kit”, link do sklepu.
- Co 2 tygodnie nowy post „PACK” z innym projektem na okładce (C01, C16, C09 rotacyjnie).
- Wyniki w arkuszu: kolumna `source` pokazuje, która platforma daje leady.
