// YPE Media · Creator Starter Pack, darmowa wysyłka linku przez Google Apps Script.
// Arkusz Google + Twój Gmail, zero serwerów, zero opłat (limit MailApp: 100 maili dziennie na koncie Gmail).
//
// Instalacja (5 minut):
// 1. Załóż arkusz Google „YPE-FreePack-Leads”. W pierwszym wierszu wpisz: date | email | name | engaged | source | lang
// 2. Rozszerzenia → Apps Script, usuń przykładowy kod, wklej ten plik, zapisz.
// 3. Wdróż → Nowe wdrożenie → typ: Aplikacja internetowa → Wykonaj jako: Ja → Dostęp: Każdy → Wdróż.
//    Przy pierwszym uruchomieniu Google poprosi o zgody (arkusz + wysyłka maila), potwierdź.
// 4. Skopiuj adres aplikacji (kończy się na /exec) i wklej w web/src/data/tresc.ts → freebie.webhook. Push na main.
// 5. Test: ypemedia.com/free, wpisz swój mail. Wpis pojawi się w arkuszu, mail przyjdzie z Twojego Gmaila.
// Po każdej zmianie kodu: Wdróż → Zarządzaj wdrożeniami → edytuj → Nowa wersja.

var UNLOCK_LINK = 'https://ypemedia.com/editor/?unlock=creator-starter-7f3a';
var FROM_NAME = 'YPE Media';
var REPLY_TO = 'info@ypemedia.com';

function doPost(e) {
  var p = (e && e.parameter) || {};
  var email = String(p.email || '').trim().toLowerCase();
  var name = String(p.name || '').trim();
  var engaged = String(p.engaged || '') === 'true';
  var source = String(p.source || 'site').slice(0, 40);
  var lang = String(p.lang || '').slice(0, 20);
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return odpowiedz({ ok: false, error: 'invalid email' });

  var arkusz = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var dane = arkusz.getDataRange().getValues();
  var znany = false;
  for (var i = 1; i < dane.length; i++) if (String(dane[i][1]).toLowerCase() === email) { znany = true; break; }
  arkusz.appendRow([new Date(), email, name, engaged, source, lang]);

  try {
    MailApp.sendEmail({
      to: email,
      name: FROM_NAME,
      replyTo: REPLY_TO,
      subject: 'Your Creator Starter Pack unlock link',
      htmlBody: tresc(name || 'there'),
      body: 'Hi ' + (name || 'there') + ', your six free designs are ready. Open this link once: ' + UNLOCK_LINK + ' (YPE Media team)'
    });
  } catch (err) {
    // np. limit 100 maili/dzień; lead i tak jest w arkuszu, strona pokazuje link od razu
  }
  return odpowiedz({ ok: true, known: znany });
}

function doGet() { return odpowiedz({ ok: true, hint: 'POST only' }); }

function odpowiedz(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function tresc(imie) {
  return '<div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;padding:32px 24px;color:#542f28;background:#f5f1e9">'
    + '<p style="font-size:11px;letter-spacing:2px;color:#95725c;margin:0 0 24px">YPE MEDIA · CREATOR STARTER PACK</p>'
    + '<h1 style="font-family:Georgia,serif;font-weight:400;font-size:34px;line-height:1.05;margin:0 0 18px">Hi ' + imie + ', your six designs are ready</h1>'
    + '<p style="font-size:15px;line-height:1.7;margin:0 0 26px">Open the link below once and the Creator Starter Pack stays unlocked in your browser: a quote card, a stat post, a socials plate, a carousel cover and ending, and a text hook. Full size, no watermark, every platform.</p>'
    + '<p style="margin:0 0 30px"><a href="' + UNLOCK_LINK + '" style="display:inline-block;background:#542f28;color:#f5f1e9;text-decoration:none;padding:16px 28px;border-radius:40px;font-size:15px">Unlock my free pack</a></p>'
    + '<p style="font-size:13px;line-height:1.7;color:#8b7566;margin:0 0 26px">Tip: the designs are 4:5, the size LinkedIn uses for image posts. Export the carousel slides as PNG, drop them into one PDF and post it as a document.</p>'
    + '<p style="font-size:13px;line-height:1.7;margin:0 0 6px">Want all 34 designs plus the Figma, Canva and After Effects files? <a href="https://ypemedia.com/#shop" style="color:#e17145">The Template Kit is $29</a>.</p>'
    + '<p style="font-size:13px;line-height:1.7;margin:26px 0 0">YPE Media team<br><a href="https://ypemedia.com" style="color:#95725c">ypemedia.com</a></p>'
    + '<p style="font-size:11px;color:#a28c7a;margin:30px 0 0">You asked for this link at ypemedia.com/free. If it wasn\'t you, just ignore this email.</p>'
    + '</div>';
}
