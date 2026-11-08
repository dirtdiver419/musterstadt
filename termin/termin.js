/* KTS 4.1 – Kommunaler Terminserver, Datenzentrale Rheinland-Mitte */
(function () {
'use strict';
var P = new URLSearchParams(location.search);
var L = P.get('L') === 'en' ? 'en' : 'de';
var HERKUNFT = (location.origin && location.origin !== 'null') ? location.origin : '*';
var CFG = {heute: '2009-10-12', flackern: true, minMs: 8000, maxMs: 22000, fensterMs: P.get('zeit') === 'lang' ? 0 : 1500, warteSek: 60, gesperrt: false, vormerkSek: 300};

/* ---------- Texte ---------- */
var T = {
  de: {untertitel: 'Kommunaler Terminserver', sprache: 'Deutsch | <a href="#" data-l="en">English</a>', zurueck: 'Zurück zu', schritte: ['Behörde', 'Anliegen', 'Termin', 'Ihre Daten', 'Bestätigung'],
    wartung: 'Hinweis: Wegen Wartungsarbeiten steht der KTS mittwochs von 8:00 bis 12:00 Uhr nur eingeschränkt zur Verfügung.', laeuftAb: 'Ihre Vormerkung läuft ab in ', abgelaufen: 'Ihre Vormerkung ist abgelaufen. Der Termin wurde wieder freigegeben.', ohneAblauf: 'Barrierearme Bedienung: Ihre Vormerkung gilt bis zum Abschluss der Buchung.', verlaengern: 'Vormerkung verlängern', verlaengert: 'Ihre Vormerkung wurde um 5 Minuten verlängert.', warnung: 'Ihre Vormerkung läuft in einer Minute ab. Sie können sie verlängern.',
    behoerdeWaehlen: 'Bitte wählen Sie die Behörde', dienstWaehlen: 'Bitte wählen Sie Ihr Anliegen', einAnliegen: 'Pro Termin kann nur ein Anliegen für eine Person bearbeitet werden. Für jedes weitere Anliegen buchen Sie bitte einen eigenen Termin.',
    terminWaehlen: 'Bitte wählen Sie einen Termin', keineTermine: 'Derzeit sind keine freien Termine verfügbar. Termine werden acht Wochen im Voraus freigeschaltet. Kurzfristig frei werdende Termine erscheinen automatisch im Kalender.',
    voll: 'ausgebucht', zu: 'geschlossen', vorbei: '–', frei: 'frei', tage: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'], tageLang: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
    ansageFrei: 'Termin frei: ', ansageWeg: 'Der Termin wurde vergeben.', telefonisch: 'Kein passender Termin? Sie können Ihren Termin auch telefonisch vereinbaren:', anrufen: 'Jetzt anrufen',
    datenTitel: 'Ihre Daten', vorgemerkt: 'Der Termin wird für 5 Minuten für Sie vorgemerkt.', anrede: 'Anrede', vorname: 'Vorname', nachname: 'Nachname *', email: 'E-Mail', telefonNr: 'Telefon', pflicht: '* Pflichtfeld',
    datenschutz: 'Ich habe die Hinweise zur Datenverarbeitung gelesen und bin einverstanden. *', buchen: 'Termin verbindlich buchen', zurueckKnopf: '« Zurück', fehlend: 'Bitte füllen Sie alle Pflichtfelder aus und bestätigen Sie die Hinweise zur Datenverarbeitung.',
    bestTitel: 'Ihre Terminbestätigung', bestNr: 'Buchungsnummer', bestBeh: 'Behörde', bestDienst: 'Anliegen', bestDatum: 'Datum', bestZeit: 'Uhrzeit', bestOrt: 'Ort', bestName: 'Name', bestUhr: ' Uhr', bestWeg: 'Buchungsweg', wegOnline: 'online', wegTelefon: 'telefonisch',
    mitbringen: 'Bitte bringen Sie mit', hinweiseBest: 'Bitte erscheinen Sie 10 Minuten vor Ihrem Termin und halten Sie diese Buchungsnummer bereit. Bei Verspätung verfällt der Termin.', mailStoerung: 'Der Versand der Bestätigungs-E-Mail ist derzeit gestört. Bitte drucken Sie diese Seite aus.',
    drucken: 'Bestätigung drucken', stornieren: 'Termin stornieren', neu: 'Neuen Termin buchen', stornoFrage: 'Möchten Sie diesen Termin wirklich stornieren?', storniert: 'Ihr Termin wurde storniert. Der Termin steht anderen Bürgerinnen und Bürgern wieder zur Verfügung.',
    ungueltig: 'Diese Buchungsbestätigung ist ungültig oder wurde verändert.', fuss: 'KTS 4.1 · Datenzentrale Rheinland-Mitte im Auftrag der Stadt Musterstadt und des Kreises Muster · Fiktives Satireprojekt, es werden keine Daten gespeichert. Inhalte mit Unterstützung eines KI-Sprachmodells (Claude, Anthropic) erstellt.',
    zeitAus: 'Barrierearme Bedienung: Mehr Zeit für die Terminauswahl', zeitAn: 'Barrierearme Bedienung ist aktiv: Freie Termine bleiben sichtbar, bis Sie sie auswählen. (ausschalten)', telLink: 'Telefonische Terminvereinbarung', zeitAnsage: 'Barrierearme Bedienung aktiviert. Freie Termine bleiben sichtbar, bis Sie sie auswählen.'},
  en: {untertitel: 'Municipal Appointment Server', sprache: '<a href="#" data-l="de">Deutsch</a> | English', zurueck: 'Back to', schritte: ['Authority', 'Service', 'Appointment', 'Your details', 'Confirmation'],
    wartung: 'Note: Due to maintenance, KTS is only partially available on Wednesdays from 8:00 to 12:00.', laeuftAb: 'Your reservation expires in ', abgelaufen: 'Your reservation has expired. The appointment has been released.', ohneAblauf: 'Accessible mode: your reservation is kept until you complete the booking.', verlaengern: 'Extend reservation', verlaengert: 'Your reservation has been extended by 5 minutes.', warnung: 'Your reservation expires in one minute. You can extend it.',
    behoerdeWaehlen: 'Please select the authority', dienstWaehlen: 'Please select your service', einAnliegen: 'Each appointment covers one service for one person. Please book a separate appointment for each further service.',
    terminWaehlen: 'Please select an appointment', keineTermine: 'There are currently no free appointments. Appointments are released eight weeks in advance. Appointments that become available at short notice will appear in the calendar automatically.',
    voll: 'fully booked', zu: 'closed', vorbei: '–', frei: 'free', tage: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], tageLang: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    ansageFrei: 'Appointment available: ', ansageWeg: 'The appointment has been taken.', telefonisch: 'No suitable appointment? You can also book your appointment by telephone:', anrufen: 'Call now',
    datenTitel: 'Your details', vorgemerkt: 'The appointment is reserved for you for 5 minutes.', anrede: 'Title', vorname: 'First name', nachname: 'Last name *', email: 'E-mail', telefonNr: 'Telephone', pflicht: '* required',
    datenschutz: 'I have read and accept the information on data processing. *', buchen: 'Book appointment', zurueckKnopf: '« Back', fehlend: 'Please fill in all required fields and accept the information on data processing.',
    bestTitel: 'Your appointment confirmation', bestNr: 'Booking number', bestBeh: 'Authority', bestDienst: 'Service', bestDatum: 'Date', bestZeit: 'Time', bestOrt: 'Location', bestName: 'Name', bestUhr: '', bestWeg: 'Booked', wegOnline: 'online', wegTelefon: 'by telephone',
    mitbringen: 'Please bring (as stated by the authority, in German)', hinweiseBest: 'Please arrive 10 minutes before your appointment and keep this booking number ready. If you are late, the appointment will be cancelled.', mailStoerung: 'Sending of the confirmation e-mail is currently disrupted. Please print this page.',
    drucken: 'Print confirmation', stornieren: 'Cancel appointment', neu: 'Book a new appointment', stornoFrage: 'Do you really want to cancel this appointment?', storniert: 'Your appointment has been cancelled.',
    ungueltig: 'This booking confirmation is invalid or has been modified.', fuss: 'KTS 4.1 · Datenzentrale Rheinland-Mitte on behalf of the City of Musterstadt and the District of Muster · Fictional satire project, no data is stored. Content created with the assistance of an AI language model (Claude, Anthropic).',
    zeitAus: 'Accessible mode: more time to select appointments', zeitAn: 'Accessible mode is on: free appointments stay visible until you select them. (turn off)', telLink: 'Book by telephone', zeitAnsage: 'Accessible mode on. Free appointments stay visible until you select them.'}
};
function t(k) { return T[L][k]; }

/* ---------- Behörden und Anliegen ---------- */
var VORM = [[8, 0, 11, 45]], NACHM = [[8, 0, 11, 45], [14, 0, 17, 45]];
var KREIS = {1: [[7, 30, 11, 45]], 2: [[7, 30, 11, 45]], 3: [[7, 30, 11, 45]], 4: [[7, 30, 11, 45], [14, 0, 17, 15]], 5: [[7, 30, 11, 45]]};
var AUSWEIS = 'gültiger Personalausweis oder Reisepass';
var BEH = {
  'ms-ba': {code: 'BA', name: {de: 'Stadt Musterstadt – Bürgeramt', en: 'City of Musterstadt – Citizens’ Office (Bürgeramt)'}, ort: 'Neues Rathaus, Erdgeschoss, Schalter 1–6, Rathausplatz 1, 43999 Musterstadt', zeiten: {1: VORM, 2: VORM, 4: NACHM, 5: VORM}, tel: '(0 12 34) 5 67-1 15', zurueck: ['www.stadt-musterstadt.de', '../index.html'],
    dienste: [['anmeldung', 'Anmeldung einer Wohnung', 'Registration of residence (Anmeldung)', [AUSWEIS, 'vollständig ausgefüllter Meldeschein']],
      ['meldeb', 'Meldebescheinigung', 'Certificate of registration (Meldebescheinigung)', [AUSWEIS]],
      ['perso', 'Personalausweis beantragen', 'Identity card (Personalausweis)', ['bisheriger Ausweis oder Geburtsurkunde', 'ein biometrietaugliches Lichtbild']],
      ['pass', 'Reisepass beantragen', 'Passport (Reisepass)', ['bisheriger Pass oder Personalausweis', 'ein biometrietaugliches Lichtbild']],
      ['fuehrung', 'Führungszeugnis', 'Certificate of conduct (Führungszeugnis)', [AUSWEIS]],
      ['beglaub', 'Beglaubigungen', 'Certification of copies (Beglaubigung)', ['Original und Kopie des Dokuments', AUSWEIS]],
      ['negativ', 'Negativattest (allgemein)', 'Negative certificate (Negativattest)', ['vollständig ausgefülltes Formular B (Vordruck 17/b)', 'Meldebescheinigung (nicht älter als drei Monate)', 'Vorgangsnummer', 'Nachweis über die Zahlung der Verwaltungsgebühr', AUSWEIS]],
      ['lohnst', 'Lohnsteuerkarte 2010 (Ersatz)', 'Tax card 2010 (replacement)', [AUSWEIS]]]},
  'ms-sa': {code: 'SA', name: {de: 'Stadt Musterstadt – Standesamt', en: 'City of Musterstadt – Registry Office (Standesamt)'}, ort: 'Neues Rathaus, Raum 130, Rathausplatz 1, 43999 Musterstadt', zeiten: {1: VORM, 2: VORM, 4: [[14, 0, 17, 45]], 5: VORM}, tel: '(0 12 34) 5 67-3 50', zurueck: ['www.stadt-musterstadt.de', '../index.html'],
    dienste: [['ehe', 'Anmeldung zur Eheschließung', 'Notice of marriage', ['Personalausweise oder Reisepässe', 'beglaubigte Abschriften aus dem Geburtenregister', 'erweiterte Meldebescheinigungen']],
      ['urkunde', 'Personenstandsurkunden', 'Civil status certificates', [AUSWEIS]]]},
  'kr-zul': {code: 'ZU', name: {de: 'Kreis Muster – Zulassungsstelle', en: 'District of Muster – Vehicle Registration (Zulassungsstelle)'}, ort: 'Kreishaus, Erdgeschoss, Am Kreishaus 1, 43999 Musterstadt', zeiten: KREIS, tel: '(0 12 34) 9 80-3 33', zurueck: ['www.kreis-muster.de', '../kreis/index.html'],
    dienste: [['neu', 'Neuzulassung', 'New registration', ['Zulassungsbescheinigung Teil II', 'eVB-Nummer der Kfz-Versicherung', 'Personalausweis mit aktueller Anschrift oder Reisepass mit Meldebescheinigung', 'Einzugsermächtigung für die Kfz-Steuer', 'bei Neufahrzeugen: Übereinstimmungsbescheinigung (COC)', 'Zahlung nur mit EC-Karte']],
      ['umschr', 'Umschreibung / Halterwechsel', 'Change of owner', ['Zulassungsbescheinigung Teil I und II', 'eVB-Nummer', 'Personalausweis mit aktueller Anschrift', 'Nachweis über die Hauptuntersuchung', 'Einzugsermächtigung für die Kfz-Steuer', 'Zahlung nur mit EC-Karte']],
      ['abm', 'Außerbetriebsetzung', 'Deregistration', ['Zulassungsbescheinigung Teil I und II', 'Kennzeichenschilder', 'ggf. Verwertungsnachweis', 'Zahlung nur mit EC-Karte']],
      ['wk', 'Zulassung mit Wunschkennzeichen', 'Registration with personalised plate', ['Reservierungsnummer des Wunschkennzeichens', 'alle Unterlagen wie bei der Neuzulassung', 'Zahlung nur mit EC-Karte']]]},
  'kr-fs': {code: 'FS', name: {de: 'Kreis Muster – Führerscheinstelle', en: 'District of Muster – Driving Licence Office (Führerscheinstelle)'}, ort: 'Kreishaus, Erdgeschoss, Am Kreishaus 1, 43999 Musterstadt', zeiten: KREIS, tel: '(0 12 34) 9 80-3 40', zurueck: ['www.kreis-muster.de', '../kreis/index.html'],
    dienste: [['umtausch', 'Umtausch in den EU-Kartenführerschein', 'Exchange for EU card licence', [AUSWEIS, 'bisheriger Führerschein', 'ein biometrietaugliches Lichtbild']],
      ['ersatz', 'Ersatzführerschein', 'Replacement licence', [AUSWEIS, 'ein biometrietaugliches Lichtbild']]]}
};
var CODE2BEH = {}; Object.keys(BEH).forEach(function (k) { CODE2BEH[BEH[k].code] = k; });
function dienst(bk, dk) { var d = null; (BEH[bk] ? BEH[bk].dienste : []).forEach(function (x) { if (x[0] === dk) d = x; }); return d; }

/* ---------- Hilfsfunktionen ---------- */
function $(id) { return document.getElementById(id); }
function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]; }); }
function d0(iso) { var p = iso.split('-'); return new Date(Date.UTC(+p[0], +p[1] - 1, +p[2])); }
function iso(d) { return d.getUTCFullYear() + '-' + ('0' + (d.getUTCMonth() + 1)).slice(-2) + '-' + ('0' + d.getUTCDate()).slice(-2); }
function plus(d, n) { return new Date(d.getTime() + n * 86400000); }
function deDatum(isoStr, lang) { var d = d0(isoStr); return T[lang || L].tageLang[d.getUTCDay()] + ', ' + ('0' + d.getUTCDate()).slice(-2) + '.' + ('0' + (d.getUTCMonth() + 1)).slice(-2) + '.' + d.getUTCFullYear(); }
/* Feiertage NRW (gesetzlich) und rheinische Gepflogenheiten der Verwaltung */
function ostern(j) {
  var a = j % 19, b = Math.floor(j / 100), c = j % 100, d = Math.floor(b / 4), e = b % 4, f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3),
    h = (19 * a + b - d - g + 15) % 30, i = Math.floor(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7, m = Math.floor((a + 11 * h + 22 * l) / 451);
  return new Date(Date.UTC(j, Math.floor((h + l - 7 * m + 114) / 31) - 1, ((h + l - 7 * m + 114) % 31) + 1));
}
var SONDER = {'ms-ba': {'2009-10-21': ['geschlossen (interne Schulung)', 'closed (internal training)']}};
function besonderheit(bk, isoStr) {
  var j = +isoStr.slice(0, 4), o = ostern(j), md = isoStr.slice(5), f = {};
  f[iso(plus(o, -2))] = 'Karfreitag'; f[iso(plus(o, 1))] = 'Ostermontag'; f[iso(plus(o, 39))] = 'Christi Himmelfahrt'; f[iso(plus(o, 50))] = 'Pfingstmontag'; f[iso(plus(o, 60))] = 'Fronleichnam';
  var fest = {'01-01': 'Neujahr', '05-01': 'Tag der Arbeit', '10-03': 'Tag der Deutschen Einheit', '11-01': 'Allerheiligen', '12-25': '1. Weihnachtstag', '12-26': '2. Weihnachtstag'};
  if (f[isoStr] || fest[md]) return {zu: true, text: [ 'Feiertag: ' + (f[isoStr] || fest[md]), 'Public holiday: ' + (f[isoStr] || fest[md]) ]};
  if (md === '12-24') return {zu: true, text: ['Heiligabend: geschlossen', 'Christmas Eve: closed']};
  if (md === '12-31') return {zu: true, text: ['Silvester: geschlossen', 'New Year’s Eve: closed']};
  if (isoStr === iso(plus(o, -48))) return {zu: true, text: ['Rosenmontag: geschlossen', 'Rosenmontag (carnival): closed']};
  if (isoStr === iso(plus(o, -52))) return {bis: '11:00', text: ['Weiberfastnacht: ab 11:11 Uhr geschlossen', 'Weiberfastnacht (carnival): closed from 11:11']};
  if (SONDER[bk] && SONDER[bk][isoStr]) return {zu: true, text: SONDER[bk][isoStr]};
  return null;
}
function zeitenAm(bk, isoStr) {
  var r = BEH[bk].zeiten[d0(isoStr).getUTCDay()] || [], z = [], bes = besonderheit(bk, isoStr);
  if (bes && bes.zu) return [];
  r.forEach(function (b) { for (var m = b[0] * 60 + b[1]; m <= b[2] * 60 + b[3]; m += 15) z.push(('0' + Math.floor(m / 60)).slice(-2) + ':' + ('0' + m % 60).slice(-2)); });
  if (bes && bes.bis) z = z.filter(function (x) { return x < bes.bis; });
  return z;
}
function offeneTage(bk) { var h = d0(CFG.heute), t2 = []; for (var i = 1; i <= 56; i++) { var d = iso(plus(h, i)); if (zeitenAm(bk, d).length) t2.push(d); } return t2; }
function melde(typ, daten) {
  if (window.parent === window) return;
  var n = {quelle: 'termin', typ: typ}; for (var k in daten || {}) n[k] = daten[k];
  window.parent.postMessage(n, HERKUNFT);
}
function ansage(text) { var a = $('ansage'); a.textContent = ''; setTimeout(function () { a.textContent = text; }, 50); }

/* ---------- Buchungsnummer mit Prüfziffer ---------- */
function pruefziffer(s) { var h = 0; for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 97; return ('0' + h).slice(-2); }
function nummer(bk, datum, zeit) {
  var kern = BEH[bk].code + '-' + datum.slice(2).replace(/-/g, '') + '-' + zeit.replace(':', '') + '-' + (100 + Math.floor(Math.random() * 900));
  return kern + '-' + pruefziffer(kern);
}
function pruefe(nr) {
  var m = /^([A-Z]{2})-(\d{6})-(\d{4})-(\d{3})-(\d{2})$/.exec(String(nr || '').trim().toUpperCase());
  if (!m || pruefziffer(m[1] + '-' + m[2] + '-' + m[3] + '-' + m[4]) !== m[5] || !CODE2BEH[m[1]]) return {gueltig: false};
  return {gueltig: true, behoerde: CODE2BEH[m[1]], datum: '20' + m[2].slice(0, 2) + '-' + m[2].slice(2, 4) + '-' + m[2].slice(4, 6), zeit: m[3].slice(0, 2) + ':' + m[3].slice(2)};
}

/* ---------- Zustand ---------- */
var Z = {schritt: 'behoerde', bk: null, dk: null, wahl: null, slot: null, slotTimer: null, flackerTimer: null, ausstehend: []};

function kopf() {
  $('t-untertitel').textContent = t('untertitel');
  $('t-sprache').innerHTML = t('sprache');
  $('t-behoerdelink').innerHTML = '<a href="../index.html">' + (L === 'en' ? 'City of Musterstadt' : 'Stadt Musterstadt') + '</a> · <a href="../kreis/index.html">' + (L === 'en' ? 'District of Muster' : 'Kreis Muster') + '</a>';
  var idx = {behoerde: 0, dienst: 1, kalender: 2, daten: 3, fertig: 4}[Z.schritt];
  $('schritte').innerHTML = t('schritte').map(function (s, i) { return '<li class="' + (i === idx ? 'aktiv' : i < idx ? 'erledigt' : '') + '">' + (i + 1) + '. ' + s + '</li>'; }).join('');
  $('t-fuss').textContent = t('fuss');
  $('t-zeitlink').textContent = CFG.fensterMs === 0 ? t('zeitAn') : t('zeitAus');
  $('t-telefonlink').textContent = t('telLink');
  document.documentElement.lang = L;
}
function zeige() {
  kopf();
  var h = '';
  if (Z.schritt === 'behoerde') {
    h = '<div class="hinweis">' + t('wartung') + '</div><h1>' + t('behoerdeWaehlen') + '</h1>' + Object.keys(BEH).map(function (k) { return '<button class="wahl" data-beh="' + k + '"><b>' + BEH[k].name[L] + '</b><br><span class="klein">' + BEH[k].ort + '</span></button>'; }).join('');
  } else if (Z.schritt === 'dienst') {
    h = '<h1>' + t('dienstWaehlen') + '</h1><p class="klein">' + BEH[Z.bk].name[L] + '</p>' +
      BEH[Z.bk].dienste.map(function (d) { return '<button class="wahl" data-dienst="' + d[0] + '"><b>' + (L === 'en' ? d[2] : d[1]) + '</b></button>'; }).join('') +
      '<div class="hinweis">' + t('einAnliegen') + '</div><p><button class="leise" data-zu="behoerde">' + t('zurueckKnopf') + '</button></p>';
  } else if (Z.schritt === 'kalender') {
    h = '<h1>' + t('terminWaehlen') + '</h1><p class="klein">' + BEH[Z.bk].name[L] + ' · ' + (L === 'en' ? dienst(Z.bk, Z.dk)[2] : dienst(Z.bk, Z.dk)[1]) + '</p>' +
      '<div class="hinweis">' + t('keineTermine') + '</div>' + kalender() +
      '<p>' + t('telefonisch') + ' <b>' + BEH[Z.bk].tel + '</b> <button class="leise" data-anruf="1">☎ ' + t('anrufen') + '</button></p>' +
      '<p><button class="leise" data-zu="dienst">' + t('zurueckKnopf') + '</button></p>';
  } else if (Z.schritt === 'daten') {
    h = '<h1>' + t('datenTitel') + '</h1><div class="gut">' + deDatum(Z.wahl.datum) + ', ' + Z.wahl.zeit + t('bestUhr') + ' · ' + BEH[Z.bk].name[L] + '<br>' + t('vorgemerkt') + '<br><b id="countdown"></b> <button type="button" class="leise" id="verlaengern">' + t('verlaengern') + '</button></div>' +
      '<form id="datenform"><table class="form"><tr><td><label for="f-anrede">' + t('anrede') + '</label></td><td><select id="f-anrede"><option></option><option>Frau</option><option>Herr</option></select></td></tr>' +
      '<tr><td><label for="f-vorname">' + t('vorname') + '</label></td><td><input id="f-vorname" size="30" autocomplete="given-name"></td></tr>' +
      '<tr><td><label for="f-nachname">' + t('nachname') + '</label></td><td><input id="f-nachname" size="30" autocomplete="family-name" required></td></tr>' +
      '<tr><td><label for="f-mail">' + t('email') + '</label></td><td><input id="f-mail" size="30"></td></tr>' +
      '<tr><td><label for="f-tel">' + t('telefonNr') + '</label></td><td><input id="f-tel" size="20"></td></tr>' +
      '<tr><td></td><td><label><input type="checkbox" id="f-ds"> ' + t('datenschutz') + '</label></td></tr></table>' +
      '<p class="klein">' + t('pflicht') + '</p><div id="f-fehler"></div><p><button type="button" class="leise" data-zu="kalender">' + t('zurueckKnopf') + '</button> <button type="submit" class="knopf">' + t('buchen') + '</button></p></form>';
  }
  if (Z.schritt !== 'fertig') $('inhalt').innerHTML = h;
  if (Z.schritt === 'kalender') { starteFlackern(); Z.ausstehend.splice(0).forEach(function (s) { zeigeSlot(s.datum, s.zeit, s.dauerMs); }); } else stoppeFlackern();
  var f = $('datenform'); if (f) f.onsubmit = function (e) { e.preventDefault(); buchenOnline(); };
  clearInterval(Z.uhr);
  if (Z.schritt === 'daten') {
    if (CFG.fensterMs === 0) { $('countdown').textContent = t('ohneAblauf'); $('verlaengern').style.display = 'none'; }
    else {
      Z.ende = Date.now() + CFG.vormerkSek * 1000; Z.gewarnt = false;
      $('verlaengern').onclick = function () { Z.ende = Date.now() + CFG.vormerkSek * 1000; Z.gewarnt = false; ansage(t('verlaengert')); melde('vormerkung_verlaengert'); };
      var tick = function () {
        var rest = Math.max(0, Math.round((Z.ende - Date.now()) / 1000));
        if (rest <= 60 && !Z.gewarnt && CFG.vormerkSek > 60) { Z.gewarnt = true; ansage(t('warnung')); }
        if ($('countdown')) $('countdown').textContent = t('laeuftAb') + Math.floor(rest / 60) + ':' + ('0' + rest % 60).slice(-2);
        if (rest <= 0 && Z.schritt === 'daten') { clearInterval(Z.uhr); melde('vormerkung_abgelaufen', {datum: Z.wahl.datum, zeit: Z.wahl.zeit}); Z.schritt = 'kalender'; zeige(); $('inhalt').insertAdjacentHTML('afterbegin', '<div class="fehler">' + t('abgelaufen') + '</div>'); ansage(t('abgelaufen')); }
      };
      tick(); Z.uhr = setInterval(tick, 1000);
    }
  }
}

function kalender() {
  var h0 = d0(CFG.heute), mo = plus(h0, -((h0.getUTCDay() + 6) % 7)), h = '<table class="kal"><tr>' + [1, 2, 3, 4, 5].map(function (i) { return '<th>' + T[L].tageLang[i] + '</th>'; }).join('') + '</tr>';
  for (var w = 0; w < 9; w++) {
    h += '<tr>';
    for (var i = 0; i < 5; i++) {
      var d = plus(mo, w * 7 + i), s = iso(d), dm = ('0' + d.getUTCDate()).slice(-2) + '.' + ('0' + (d.getUTCMonth() + 1)).slice(-2) + '.';
      var cls, txt;
      if (d <= h0 || d > plus(h0, 56)) { cls = 'zu'; txt = t('vorbei'); }
      else if (!zeitenAm(Z.bk, s).length) { var bz = besonderheit(Z.bk, s); cls = 'zu'; txt = bz ? bz.text[L === 'en' ? 1 : 0] : t('zu'); }
      else { var bt = besonderheit(Z.bk, s); cls = 'voll'; txt = t('voll') + (bt ? '<br><span class="klein">' + bt.text[L === 'en' ? 1 : 0] + '</span>' : ''); }
      h += '<td id="tag-' + s + '" class="' + cls + '"><span class="tag">' + dm + '</span><span class="st">' + txt + '</span></td>';
    }
    h += '</tr>';
  }
  return h + '</table>';
}

/* ---------- Flackernde Termine ---------- */
function starteFlackern() {
  stoppeFlackern();
  if (!CFG.flackern || CFG.gesperrt) return;
  Z.flackerTimer = setTimeout(function () {
    if (Z.schritt === 'kalender' && !Z.slot) {
      var tage = offeneTage(Z.bk), d = tage[Math.floor(Math.random() * tage.length)], z = zeitenAm(Z.bk, d);
      zeigeSlot(d, z[Math.floor(Math.random() * z.length)], CFG.fensterMs);
    }
    starteFlackern();
  }, CFG.minMs + Math.random() * (CFG.maxMs - CFG.minMs));
}
function stoppeFlackern() { clearTimeout(Z.flackerTimer); }
function zeigeSlot(datum, zeit, dauerMs) {
  var zelle = $('tag-' + datum);
  if (Z.schritt !== 'kalender' || !zelle || Z.slot || CFG.gesperrt) return;
  if (zeitenAm(Z.bk, datum).indexOf(zeit) < 0) { melde('slot_abgelehnt', {datum: datum, zeit: zeit, grund: 'geschlossen'}); return; }
  Z.slot = {datum: datum, zeit: zeit, zelle: zelle, alt: zelle.className, altHtml: zelle.innerHTML};
  zelle.className = 'frei';
  zelle.innerHTML = '<span class="tag">' + zelle.querySelector('.tag').textContent + '</span><button class="slot" data-slot="1">' + zeit + ' ' + t('frei') + '</button>';
  ansage(t('ansageFrei') + deDatum(datum) + ', ' + zeit + t('bestUhr'));
  melde('slot_erschienen', {behoerde: Z.bk, dienst: Z.dk, datum: datum, zeit: zeit});
  var ms = dauerMs === undefined ? CFG.fensterMs : dauerMs;
  if (ms > 0) Z.slotTimer = setTimeout(function () { entferneSlot(true); }, ms);
}
function entferneSlot(verpasst) {
  clearTimeout(Z.slotTimer);
  if (!Z.slot) return;
  if (Z.slot.zelle && document.body.contains(Z.slot.zelle)) { Z.slot.zelle.className = Z.slot.alt; Z.slot.zelle.innerHTML = Z.slot.altHtml; }
  if (verpasst) { ansage(t('ansageWeg')); melde('slot_verpasst', {datum: Z.slot.datum, zeit: Z.slot.zeit}); }
  Z.slot = null;
}

/* ---------- Buchung ---------- */
function buchenOnline() {
  var nn = $('f-nachname').value.trim();
  if (!nn || !$('f-ds').checked) { $('f-fehler').innerHTML = '<div class="fehler">' + t('fehlend') + '</div>'; return; }
  abschliessen({a: $('f-anrede').value, v: $('f-vorname').value.trim(), nn: nn}, 'online');
}
function abschliessen(person, weg) {
  var nr = nummer(Z.bk, Z.wahl.datum, Z.wahl.zeit);
  var b = {b: Z.bk, d: Z.dk, n: nr, a: person.a || '', v: person.v || '', nn: person.nn, w: weg};
  melde('gebucht', {behoerde: Z.bk, dienst: Z.dk, datum: Z.wahl.datum, zeit: Z.wahl.zeit, buchungsnummer: nr, weg: weg});
  var kodiert = btoa(unescape(encodeURIComponent(JSON.stringify(b)))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  P.set('b', kodiert); P.delete('behoerde'); history.replaceState(null, '', '?' + P.toString());
  bestaetigung(b);
}
function bestaetigung(b) {
  clearInterval(Z.uhr);
  var p = pruefe(b.n), d = dienst(b.b, b.d);
  Z.schritt = 'fertig'; Z.bk = BEH[b.b] ? b.b : null; kopf();
  if (!p.gueltig || p.behoerde !== b.b || !d) { $('inhalt').innerHTML = '<div class="fehler">' + t('ungueltig') + '</div><p><a href="index.html">' + t('neu') + '</a></p>'; melde('bestaetigung_ungueltig'); return; }
  var name = [b.a, b.v, b.nn].filter(Boolean).map(esc).join(' ');
  $('inhalt').innerHTML = '<h1>' + t('bestTitel') + '</h1><div class="bestaetigung">' +
    '<p>' + t('bestNr') + ':<br><span class="nr">' + esc(b.n) + '</span></p><table>' +
    '<tr><td>' + t('bestBeh') + ':</td><td><b>' + BEH[b.b].name[L] + '</b></td></tr>' +
    '<tr><td>' + t('bestDienst') + ':</td><td>' + (L === 'en' ? d[2] : d[1]) + '</td></tr>' +
    '<tr><td>' + t('bestDatum') + ':</td><td><b>' + deDatum(p.datum) + '</b></td></tr>' +
    '<tr><td>' + t('bestZeit') + ':</td><td><b>' + p.zeit + t('bestUhr') + '</b></td></tr>' +
    '<tr><td>' + t('bestOrt') + ':</td><td>' + BEH[b.b].ort + '</td></tr>' +
    '<tr><td>' + t('bestName') + ':</td><td>' + name + '</td></tr>' +
    '<tr><td>' + t('bestWeg') + ':</td><td>' + (b.w === 'telefon' ? t('wegTelefon') : t('wegOnline')) + '</td></tr></table>' +
    '<h2>' + t('mitbringen') + '</h2><ul>' + d[3].map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>' +
    '<p>' + t('hinweiseBest') + '</p></div>' +
    '<div class="hinweis nodruck">' + t('mailStoerung') + '</div>' +
    '<p class="nodruck"><button class="knopf" onclick="window.print()">' + t('drucken') + '</button> <button class="leise" data-storno="1">' + t('stornieren') + '</button> <a href="index.html' + (L === 'en' ? '?L=en' : '') + '">' + t('neu') + '</a></p>';
  melde('bestaetigung_angezeigt', {behoerde: b.b, dienst: b.d, datum: p.datum, zeit: p.zeit, buchungsnummer: b.n, weg: b.w});
}

/* ---------- Telefonische Terminvergabe (simuliert, es wird nie wirklich gewählt) ---------- */
var TEL = {timer: [], ton: null, laut: true};
function telText(k) {
  var de = {verbinde: 'Verbindung wird hergestellt …', menue: 'Herzlich willkommen beim Kommunalen Terminservice. Für das Bürgeramt der Stadt Musterstadt drücken Sie die 1. Für das Standesamt die 2. Für die Zulassungsstelle des Kreises Muster die 3. Für die Führerscheinstelle die 4.',
    warte: 'Alle Plätze sind besetzt. Bitte haben Sie einen Moment Geduld.', position: 'Sie sind Anrufer Nummer ', wichtig: 'Ihr Anruf ist uns wichtig. Bitte legen Sie nicht auf.', online: 'Wussten Sie schon? Viele Termine können Sie auch bequem online buchen.',
    agent: 'Kommunaler Terminservice, Sie sprechen mit Frau Kaya. Was kann ich für Sie tun?', angebot: 'Da hätte ich folgende Termine für Sie. Lassen Sie sich ruhig Zeit.', name: 'Auf welchen Namen darf ich den Termin eintragen?', fertig: 'Ihr Termin ist eingetragen. Ihre Buchungsnummer lautet ', tschuess: ' Ich zeige Ihnen gleich die Bestätigung. Auf Wiederhören!',
    keine: 'Es tut mir leid, im Moment habe ich leider gar keine Termine. Versuchen Sie es bitte später noch einmal. Auf Wiederhören!', auflegen: 'Auflegen', tonAus: 'Ton aus', tonAn: 'Ton an', ok: 'OK', titel: 'Telefonische Terminvereinbarung', hinweis: 'Simulierter Anruf. Es wird keine echte Verbindung hergestellt.'};
  var en = {verbinde: 'Connecting …', menue: 'Welcome to the Municipal Appointment Service. For the Citizens’ Office of the City of Musterstadt, press 1. For the Registry Office, press 2. For the Vehicle Registration of the District of Muster, press 3. For the Driving Licence Office, press 4.',
    warte: 'All lines are busy. Please hold.', position: 'You are caller number ', wichtig: 'Your call is important to us. Please do not hang up.', online: 'Did you know? Many appointments can also be booked online.',
    agent: 'Municipal Appointment Service, this is Ms Kaya speaking. How can I help you?', angebot: 'I could offer you the following appointments. Take your time.', name: 'Under which name may I book the appointment?', fertig: 'Your appointment is booked. Your booking number is ', tschuess: ' I will show you the confirmation now. Goodbye!',
    keine: 'I am sorry, at the moment I have no appointments at all. Please try again later. Goodbye!', auflegen: 'Hang up', tonAus: 'Sound off', tonAn: 'Sound on', ok: 'OK', titel: 'Book by telephone', hinweis: 'Simulated call. No real connection is made.'};
  return (L === 'en' ? en : de)[k];
}
function telSag(text, knoepfe) {
  var p = $('tel-protokoll'); if (!p) return;
  p.insertAdjacentHTML('beforeend', '<p>' + text + '</p>'); p.scrollTop = p.scrollHeight; ansage(text.replace(/<[^>]+>/g, ''));
  $('tel-knoepfe').innerHTML = knoepfe || '';
  var erster = $('tel-knoepfe').querySelector('button,input'); if (erster) erster.focus();
}
function telNach(ms, fn) { TEL.timer.push(setTimeout(fn, ms)); }
function telMelodie(an) {
  if (TEL.ton) { try { TEL.ton.close(); } catch (e) {} TEL.ton = null; }
  if (!an || !TEL.laut) return;
  try {
    var ctx = new (window.AudioContext || window.webkitAudioContext)(), g = ctx.createGain(); g.gain.value = 0.04; g.connect(ctx.destination);
    var noten = [523, 659, 784, 659, 587, 698, 880, 698, 523, 659, 784, 1047, 988, 784, 659, 587], t0 = ctx.currentTime;
    for (var r = 0; r < 40; r++) noten.forEach(function (f, i) { var o = ctx.createOscillator(); o.type = 'square'; o.frequency.value = f; o.connect(g); var s = t0 + (r * noten.length + i) * 0.28; o.start(s); o.stop(s + 0.24); });
    TEL.ton = ctx;
  } catch (e) {}
}
function telefonAuf() {
  stoppeFlackern(); entferneSlot(false);
  var box = $('telefon'); box.hidden = false;
  box.innerHTML = '<div class="box" role="dialog" aria-modal="true" aria-labelledby="tel-titel"><b id="tel-titel">☎ ' + telText('titel') + '</b><div class="anzeige" id="tel-anzeige">' + (Z.bk ? BEH[Z.bk].tel : '(0 12 34) 5 67-1 15') + '</div>' +
    '<div class="protokoll" id="tel-protokoll" aria-live="off"></div><div id="tel-knoepfe"></div>' +
    '<p style="margin-top:10px"><button class="leise" id="tel-ton">' + telText('tonAus') + '</button> <button class="leise" id="tel-auf" style="background:#c0392b;color:#fff;border-color:#922">' + telText('auflegen') + '</button></p><p class="klein">' + telText('hinweis') + '</p></div>';
  $('tel-auf').onclick = function () { telefonZu(false); };
  $('tel-ton').onclick = function () { TEL.laut = !TEL.laut; this.textContent = TEL.laut ? telText('tonAus') : telText('tonAn'); telMelodie(TEL.laut && TEL.inWarteschleife); };
  melde('anruf_begonnen', {behoerde: Z.bk});
  telSag(telText('verbinde'));
  telNach(1800, function () { Z.bk ? telWarte() : telMenue(); });
}
function telMenue() {
  var ks = Object.keys(BEH);
  telSag(telText('menue'), ks.map(function (k, i) { return '<button class="leise" data-telbeh="' + k + '">' + (i + 1) + '</button> '; }).join(''));
}
function telWarte() {
  TEL.inWarteschleife = true; telMelodie(true);
  var pos = 7, schritt = Math.max(1000, CFG.warteSek * 1000 / pos);
  telSag(telText('warte') + ' ' + telText('position') + pos + '.');
  (function weiter() {
    telNach(schritt, function () {
      pos--;
      if (pos <= 0) { TEL.inWarteschleife = false; telMelodie(false); telAgent(); return; }
      telSag([telText('wichtig'), telText('online'), telText('position') + pos + '.'][pos % 3]);
      $('tel-anzeige').textContent = (Z.bk ? BEH[Z.bk].tel : '') + '  ⏳ ' + pos;
      weiter();
    });
  })();
}
function telAgent() {
  if (CFG.gesperrt) { telSag(telText('keine')); telNach(4000, function () { telefonZu(false); }); return; }
  if (!Z.dk) { telSag(telText('agent'), BEH[Z.bk].dienste.map(function (d) { return '<button class="wahl" data-teldienst="' + d[0] + '">' + (L === 'en' ? d[2] : d[1]) + '</button>'; }).join('')); return; }
  telAngebot();
}
function telAngebot() {
  var tage = offeneTage(Z.bk).filter(function (d) { return d0(d) >= plus(d0(CFG.heute), 14); }), ang = [];
  [0, 4, 9].forEach(function (i, j) { var d = tage[Math.min(i, tage.length - 1)], z = zeitenAm(Z.bk, d); ang.push([d, z[(3 + j * 5) % z.length]]); });
  telSag(telText('angebot'), ang.map(function (a) { return '<button class="wahl" data-telslot="' + a[0] + '|' + a[1] + '">' + deDatum(a[0]) + ', ' + a[1] + T[L].bestUhr + '</button>'; }).join(''));
}
function telName() {
  telSag(telText('name'), '<label class="sr" for="tel-name">' + t('nachname') + '</label><input id="tel-name" size="24" placeholder="' + t('nachname').replace(' *', '') + '"> <button class="knopf" id="tel-ok">' + telText('ok') + '</button>');
  $('tel-ok').onclick = function () {
    var n = $('tel-name').value.trim(); if (!n) return;
    var nr = nummer(Z.bk, Z.wahl.datum, Z.wahl.zeit);
    telSag(esc(telText('fertig')) + '<b>' + nr.split('').join(' ') + '</b>.' + esc(telText('tschuess')));
    telNach(5000, function () {
      telefonZu(true);
      var b = {b: Z.bk, d: Z.dk, n: nr, nn: n, w: 'telefon'};
      melde('gebucht', {behoerde: Z.bk, dienst: Z.dk, datum: Z.wahl.datum, zeit: Z.wahl.zeit, buchungsnummer: nr, weg: 'telefon'});
      var kodiert = btoa(unescape(encodeURIComponent(JSON.stringify(b)))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
      P.set('b', kodiert); P.delete('behoerde'); history.replaceState(null, '', '?' + P.toString());
      bestaetigung(b);
    });
  };
}
function telefonZu(erfolg) {
  TEL.timer.forEach(clearTimeout); TEL.timer = []; TEL.inWarteschleife = false; telMelodie(false);
  $('telefon').hidden = true; $('telefon').innerHTML = '';
  melde('anruf_beendet', {erfolgreich: !!erfolg});
  if (!erfolg && Z.schritt === 'kalender') starteFlackern();
}

/* ---------- Ereignisse ---------- */
document.addEventListener('click', function (e) {
  var el = e.target.closest('[data-beh],[data-dienst],[data-zu],[data-slot],[data-anruf],[data-storno],[data-l],[data-telbeh],[data-teldienst],[data-telslot],#t-zeitlink,#t-telefonlink');
  if (!el) return;
  if (el.tagName === 'A') e.preventDefault();
  if (el.dataset.beh) { Z.bk = el.dataset.beh; Z.schritt = 'dienst'; melde('behoerde_gewaehlt', {behoerde: Z.bk}); zeige(); }
  else if (el.dataset.dienst) { Z.dk = el.dataset.dienst; Z.schritt = 'kalender'; melde('dienst_gewaehlt', {behoerde: Z.bk, dienst: Z.dk}); zeige(); }
  else if (el.dataset.zu) { entferneSlot(false); if (el.dataset.zu === 'behoerde') { Z.bk = null; Z.dk = null; } if (el.dataset.zu === 'dienst') Z.dk = null; Z.schritt = el.dataset.zu; melde('zurueck', {schritt: Z.schritt}); zeige(); }
  else if (el.dataset.slot) { if (!Z.slot) return; Z.wahl = {datum: Z.slot.datum, zeit: Z.slot.zeit}; clearTimeout(Z.slotTimer); Z.slot = null; Z.schritt = 'daten'; melde('slot_gewaehlt', {behoerde: Z.bk, dienst: Z.dk, datum: Z.wahl.datum, zeit: Z.wahl.zeit}); zeige(); var f = $('f-nachname'); if (f) f.focus(); }
  else if (el.dataset.anruf || el.id === 't-telefonlink') telefonAuf();
  else if (el.dataset.storno) { if (confirm(t('stornoFrage'))) { var b = P.get('b'); P.delete('b'); history.replaceState(null, '', '?' + P.toString()); $('inhalt').innerHTML = '<div class="gut">' + t('storniert') + '</div><p><a href="index.html">' + t('neu') + '</a></p>'; melde('storniert'); } }
  else if (el.dataset.l) { L = el.dataset.l; if (L === 'en') P.set('L', 'en'); else P.delete('L'); history.replaceState(null, '', '?' + P.toString()); if (Z.schritt === 'fertig') bestaetigung(lies()); else zeige(); }
  else if (el.id === 't-zeitlink') { CFG.fensterMs = CFG.fensterMs === 0 ? 1500 : 0; if (CFG.fensterMs === 0) { P.set('zeit', 'lang'); ansage(t('zeitAnsage')); } else P.delete('zeit'); history.replaceState(null, '', '?' + P.toString()); melde('barrierearm', {an: CFG.fensterMs === 0}); kopf(); }
  else if (el.dataset.telbeh) { Z.bk = el.dataset.telbeh; $('tel-anzeige').textContent = BEH[Z.bk].tel; telWarte(); }
  else if (el.dataset.teldienst) { Z.dk = el.dataset.teldienst; telAngebot(); }
  else if (el.dataset.telslot) { var s = el.dataset.telslot.split('|'); Z.wahl = {datum: s[0], zeit: s[1]}; telName(); }
});
document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !$('telefon').hidden) telefonZu(false); });

/* ---------- Befehle ---------- */
window.addEventListener('message', function (e) {
  if (e.source !== window.parent || window.parent === window) return;
  if (HERKUNFT !== '*' && e.origin !== HERKUNFT) return;
  var m = e.data || {};
  switch (m.befehl) {
    case 'datum': if (/^\d{4}-\d\d-\d\d$/.test(m.datum)) { CFG.heute = m.datum; if (Z.schritt === 'kalender') zeige(); } break;
    case 'slot': (function () { var s = {datum: m.datum, zeit: m.zeit, dauerMs: m.dauerMs}; setTimeout(function () { if (Z.schritt === 'kalender') zeigeSlot(s.datum, s.zeit, s.dauerMs); else Z.ausstehend.push(s); }, m.nachMs || 0); })(); break;
    case 'flackern': CFG.flackern = m.an !== false; if (m.minMs) CFG.minMs = m.minMs; if (m.maxMs) CFG.maxMs = m.maxMs; if (Z.schritt === 'kalender') starteFlackern(); break;
    case 'zeitfenster': CFG.fensterMs = Math.max(0, +m.ms || 0); kopf(); break;
    case 'warteschleife': CFG.warteSek = Math.max(5, +m.sekunden || 60); break;
    case 'vormerkung': CFG.vormerkSek = Math.max(10, +m.sekunden || 300); break;
    case 'sperren': CFG.gesperrt = !!m.an; if (CFG.gesperrt) entferneSlot(false); if (Z.schritt === 'kalender') starteFlackern(); break;
    case 'sprache': L = m.L === 'en' ? 'en' : 'de'; zeige(); break;
    case 'oeffne': if (BEH[m.behoerde]) { Z.bk = m.behoerde; Z.dk = dienst(m.behoerde, m.dienst) ? m.dienst : null; Z.schritt = Z.dk ? 'kalender' : 'dienst'; zeige(); } break;
  }
});

/* ---------- Start ---------- */
function lies() { try { return JSON.parse(decodeURIComponent(escape(atob(P.get('b').replace(/-/g, '+').replace(/_/g, '/'))))); } catch (e) { return {}; } }
window.KTS = {pruefe: pruefe};
if (P.get('b')) bestaetigung(lies());
else { if (BEH[P.get('behoerde')]) { Z.bk = P.get('behoerde'); Z.schritt = 'dienst'; } zeige(); }
melde('portal_geladen', {behoerde: Z.bk});
})();
