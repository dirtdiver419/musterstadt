/* KommunalCMS 3.2 - Inhalte: Bürgerservice */
window.MS = window.MS || {};
MS.seiten = MS.seiten || {};
MS.ziele = MS.ziele || {};
MS.ziele.termin = ['Kommunaler Terminserver (KTS)', 'termin/index.html?behoerde=ms-ba'];
(function () {
var S = MS.seiten;
var u = function (id, extra) { return 'index.html?id=' + id + '&amp;L=0' + (extra || ''); };
var tel = function (d) { return '(0 12 34) 5 67-' + d; };

/* ---------- Zuständige Stellen ---------- */
var AMT = {
  ba: ['Bürgeramt', 'Renate Schuster und Team', 'Neues Rathaus, Erdgeschoss, Schalter 1–6', tel('3 00'), 210],
  st: ['Steueramt', 'Elke Busch', 'Neues Rathaus, Raum 118', tel('2 40'), 223],
  ka: ['Stadtkasse', 'Monika Esser (Kassenleiterin)', 'Neues Rathaus, Kassenhalle, Raum 115', tel('2 30'), 224],
  oa: ['Ordnungsamt', 'Bernd Krämer', 'Neues Rathaus, Raum 120', tel('3 20'), 230],
  fb: ['Fundbüro', 'Klaus Möller', 'Neues Rathaus, Raum 018', tel('3 40'), 236],
  ab: ['Abfallwirtschaft', 'Norbert Wirtz', 'Neues Rathaus, Raum 405', tel('6 60'), 241],
  sa: ['Standesamt', 'Brigitte Schuster', 'Neues Rathaus, Raum 130', tel('3 50'), 248],
  ja: ['Jugendamt, Kita-Verwaltung', 'Sandra Kemper', 'Neues Rathaus, Raum 220', tel('5 40'), 405],
  tb: ['Tiefbauamt', 'Dipl.-Ing. Hartmut Seifert', 'Neues Rathaus, Raum 410', tel('6 20'), 318],
  so: ['Amt für Soziales und Wohnen', 'Sachbearbeitung Wohnen', 'Neues Rathaus, Raum 228', tel('5 10'), 0],
  bau: ['Bauaufsicht', 'Rüdiger Hamacher', 'Neues Rathaus, Raum 402', tel('6 10'), 305],
  rat: ['Büro des Rates', 'Gisela Dahmen', 'Neues Rathaus, Raum 302', tel('1 01'), 124],
  kvet: ['Kreis Muster, Veterinär- und Lebensmittelüberwachung', 'Sachbearbeitung', 'Kreishaus, 2. OG, Am Kreishaus 1', '(0 12 34) 9 80-5 50', 'kreis'],
  kreis: ['Kreis Muster, Straßenverkehrsamt', 'Karin Zimmermann', 'Kreishaus, Am Kreishaus 1, Erdgeschoss', '(0 12 34) 9 80-3 30', 'kreis'],
  pol: ['Polizeiwache Musterstadt', 'Wachdienst', 'Bahnhofstraße 12', 'Notruf: 110', 0],
  ag: ['Amtsgericht Musterstadt', 'Rechtsantragstelle', 'Gerichtsstraße 4', 'siehe Aushang', 0]
};
MS.AMT = AMT;

function stelle(k) {
  var a = AMT[k];
  var name = a[4] === 'kreis' ? a[0] + ' <a href="' + u(925, '&amp;ziel=kreis') + '">(externer Link)</a>' : (a[4] ? '<a href="' + u(a[4]) + '">' + a[0] + '</a>' : a[0]);
  return '<table class="tab"><tr><th colspan="2">Zuständige Stelle</th></tr><tr><td width="110">Dienststelle</td><td>' + name + '</td></tr><tr><td>Ansprechpartner</td><td>' + a[1] + '</td></tr><tr><td>Anschrift</td><td>' + a[2] + '</td></tr><tr><td>Telefon</td><td>' + a[3] + '</td></tr></table>';
}

/* ---------- Formulare ---------- */
var FORM = {
  formb: ['B', 'Antrag auf Ausstellung eines Negativattestes (Formular B)', 'formular-b.pdf', '03/1998', '6 KB'],
  formb1: ['B-1', 'Antrag auf vorläufige Erteilung eines Ordnungsmerkmals', 'formular-b-1.pdf', '11/2001', '5 KB'],
  formb17a: ['17/a', 'Antrag auf Ausstellung eines Negativattestes (alte Fassung, nicht mehr verwenden)', 'formular-17a.pdf', '04/1991', '3 KB'],
  form0: ['0', 'Anforderung von Formularen per Post (für Bürgerinnen und Bürger ohne Internetzugang)', 'formularanforderung.pdf', '03/2007', '5 KB'],
  formbh: ['B-H', 'Ausfüllhinweise zu Vordruck 17/b (Formular B)', 'ausfuellhinweise-b.pdf', '06/1999', '4 KB'],
  meldeschein: ['1/a', 'Meldeschein (Anmeldung einer Wohnung)', 'meldeschein.pdf', '01/2007', '6 KB'],
  hund: ['23', 'Anmeldung eines Hundes zur Hundesteuer', 'hundesteuer-anmeldung.pdf', '01/2005', '6 KB'],
  hundab: ['23/a', 'Abmeldung eines Hundes von der Hundesteuer', 'hundesteuer-abmeldung.pdf', '01/2005', '6 KB'],
  sperr: ['41', 'Sperrmüllkarte', 'sperrmuellkarte.pdf', '01/2009', '5 KB'],
  sonder: ['32/c', 'Antrag auf Erteilung einer Sondernutzungserlaubnis', 'sondernutzung.pdf', '04/2006', '8 KB'],
  verlust: ['18', 'Verlustanzeige', 'verlustanzeige.pdf', '09/2003', '6 KB'],
  kita: ['51', 'Anmeldung für einen Platz in einer Kindertageseinrichtung', 'kita-anmeldung.pdf', '08/2008', '6 KB'],
  anregung: ['7', 'Anregung oder Beschwerde nach § 24 GO NRW', 'anregung-24-go.pdf', '02/2004', '5 KB'],
  gewerbe: ['GewA 1', 'Gewerbeanmeldung', 'gewerbeanmeldung.pdf', '01/2008', '8 KB'],
  lastschrift: ['9', 'Einzugsermächtigung Stadtkasse', 'einzugsermaechtigung.pdf', '05/2002', '6 KB'],
  bewohner: ['35', 'Antrag auf Bewohnerparkausweis', 'bewohnerparkausweis.pdf', '03/2004', '6 KB'],
  plakat: ['32/d', 'Antrag auf Plakatierungserlaubnis', 'plakatierung.pdf', '04/2006', '6 KB']
};
MS.FORM = FORM;
function formLink(k) {
  var f = FORM[k];
  return '<a href="pdf/' + f[2] + '" data-ereignis="pdf">' + f[1] + '</a> <span class="pdf">(PDF, ' + f[4] + ')</span>';
}
MS.formLink = formLink;

/* ---------- Dienstleistungen ---------- */
/* [id, Name, Stelle, Beschreibung, Unterlagen, Gebühr, Formulare, Hinweis, Termin, Verweis] */
var DL = [
 [2001, 'Abmeldung einer Wohnung', 'ba', 'Eine Abmeldung ist nur erforderlich, wenn Sie ins Ausland verziehen oder eine Nebenwohnung aufgeben. Bei einem Umzug innerhalb Deutschlands genügt die Anmeldung am neuen Wohnort.', ['Personalausweis oder Reisepass'], 'gebührenfrei', [], '', true],
 [2002, 'Anmeldung einer Wohnung', 'ba', 'Wer eine Wohnung bezieht, hat sich innerhalb einer Woche bei der Meldebehörde anzumelden. Die Anmeldung muss persönlich oder durch eine bevollmächtigte Person erfolgen.', ['Personalausweis oder Reisepass aller anzumeldenden Personen', 'vollständig ausgefüllter und unterschriebener Meldeschein'], 'gebührenfrei', ['meldeschein'], 'Der Meldeschein ist im Bürgeramt erhältlich. Der Download dient nur zur Ansicht.', true],
 [2003, 'Anregungen und Beschwerden (§ 24 GO NRW)', 'rat', 'Jede Person hat das Recht, sich einzeln oder in Gemeinschaft mit anderen schriftlich mit Anregungen oder Beschwerden in Angelegenheiten der Gemeinde an den Rat zu wenden. Anregungen werden im Ausschuss für Anregungen und Beschwerden beraten.', ['schriftliche Anregung oder Beschwerde mit Unterschrift'], 'gebührenfrei', ['anregung'], 'Für die Aufnahme in die Tagesordnung gelten die Fristen der <a href="' + u(126) + '">Geschäftsordnung des Rates</a>.', false],
 [2004, 'Attest, negatives (allgemein)', 'ba', 'Das Negativattest (Bescheinigung über die Nichterforderlichkeit einer Bescheinigung) bestätigt, dass für einen bestimmten Sachverhalt eine Bescheinigung der Stadt Musterstadt nicht erforderlich ist.', ['vollständig ausgefülltes Formular B (Vordruck 17/b)', 'Meldebescheinigung (nicht älter als drei Monate)', 'Vorgangsnummer', 'Nachweis über die Zahlung der Verwaltungsgebühr', 'gültiger Personalausweis oder Reisepass'], '7,50 € (Tarifstelle 14.3 der Verwaltungsgebührensatzung), zahlbar an der <a href="' + u(224) + '">Stadtkasse</a>', ['formb', 'formbh'], 'Die Vorgangsnummer wird nach Eingang des Antrags vergeben. Unvollständige Anträge können nicht bearbeitet werden.', true],
 [2005, 'Beglaubigungen', 'ba', 'Das Bürgeramt beglaubigt Abschriften, Kopien und Unterschriften, sofern das Dokument zur Vorlage bei einer Behörde bestimmt ist. Beglaubigungen von Urkunden zur Verwendung im Ausland erteilt die Bezirksregierung.', ['Original des Dokuments', 'Kopie des Dokuments', 'Personalausweis oder Reisepass'], '2,00 € je Seite, Unterschriftsbeglaubigung 5,00 €', [], '', true],
 [2006, 'Bauantrag', 'bau', 'Informationen zum Bauantrag und zu genehmigungsfreien Vorhaben finden Sie auf den Seiten der Bauaufsicht.', [], 'nach der Allgemeinen Verwaltungsgebührenordnung NRW', [], '', false, 305],
 [2007, 'Bewohnerparkausweis', 'oa', 'Bewohnerinnen und Bewohner der Bewohnerparkzonen A (Innenstadt) und B (Bahnhof) können einen Parkausweis beantragen. Ein Anspruch auf einen freien Parkplatz besteht nicht.', ['Fahrzeugschein', 'Personalausweis mit Hauptwohnsitz in der Zone'], '30,70 € pro Jahr', ['bewohner'], '', false],
 [2008, 'Eheschließung (Anmeldung)', 'sa', 'Die Eheschließung ist beim Standesamt des Wohnsitzes anzumelden. Die Anmeldung kann frühestens sechs Monate vor dem Hochzeitstermin erfolgen.', ['Personalausweise oder Reisepässe', 'beglaubigte Abschriften aus dem Geburtenregister', 'erweiterte Meldebescheinigungen'], '40,00 €, Trauung im Alten Rathaus außerhalb der Dienstzeit zuzüglich 50,00 €', [], 'Weitere Unterlagen können je nach Einzelfall erforderlich sein.', false, 248],
 [2009, 'Feuerwerk: Abbrennerlaubnis', 'oa', 'Das Abbrennen von Feuerwerkskörpern der Klasse II ist außerhalb des 31. Dezember und 1. Januar genehmigungspflichtig.', ['formloser Antrag mit Angabe von Ort, Datum und Uhrzeit', 'Zustimmung des Grundstückseigentümers'], '25,00 € bis 150,00 €', [], 'Anträge sind mindestens zwei Wochen vorher zu stellen.', false],
 [2010, 'Führungszeugnis', 'ba', 'Das Führungszeugnis wird beim Bürgeramt beantragt und vom Bundesamt für Justiz direkt an Sie oder an die Behörde versandt.', ['Personalausweis oder Reisepass'], '13,00 €', [], 'Die Bearbeitungszeit beim Bundesamt für Justiz beträgt etwa zwei Wochen.', true],
 [2011, 'Fundsachen', 'fb', 'Gefundene Gegenstände können im Fundbüro abgegeben werden. Verloren gegangene Gegenstände können Sie im Fundsachenverzeichnis suchen.', [], 'Aufbewahrungsgebühr nach der Fundsachensatzung', ['verlust'], '', false, 236],
 [2012, 'Geburtsurkunde', 'sa', 'Geburtsurkunden werden vom Standesamt des Geburtsortes ausgestellt.', ['Personalausweis oder Reisepass', 'bei Abholung durch Dritte: Vollmacht'], '10,00 €, jede weitere Urkunde 5,00 €', [], '', false],
 [2013, 'Gewerbeanmeldung', 'oa', 'Wer ein stehendes Gewerbe beginnt, hat dies gleichzeitig der zuständigen Behörde anzuzeigen.', ['Personalausweis oder Reisepass', 'bei erlaubnispflichtigen Gewerben: Erlaubnis', 'bei juristischen Personen: Handelsregisterauszug'], '26,00 €', ['gewerbe'], '', false],
 [2014, 'Grüngutannahme', 'ab', 'Grünschnitt aus Privatgärten kann am Wertstoffhof, Industriestraße 22, abgegeben werden.', [], 'bis 1 m³ gebührenfrei', [], 'Öffnungszeiten: Mi 14–18 Uhr, Sa 9–13 Uhr. Von November bis Februar nur samstags.', false],
 [2015, 'Haushaltsbescheinigung', 'ba', 'Haushaltsbescheinigungen werden insbesondere für den Bezug von Kindergeld benötigt.', ['Personalausweis oder Reisepass', 'Vordruck der Familienkasse'], 'gebührenfrei', [], '', true],
 [2016, 'Hundesteuer: An- und Abmeldung', 'st', 'Wer einen Hund in Musterstadt hält, hat ihn innerhalb von 14 Tagen nach Beginn der Haltung beim Steueramt anzumelden. Nach der Anmeldung erhalten Sie eine Hundesteuermarke.', ['Anmeldeformular', 'bei gefährlichen Hunden: Erlaubnis nach dem Landeshundegesetz NRW'], 'Hundesteuer nach der Hundesteuersatzung, siehe <a href="' + u(223) + '">Steuern &amp; Abgaben</a>', ['hund', 'hundab'], 'Die Hundesteuermarke ist außerhalb des Hauses gut sichtbar zu tragen.', false],
 [2017, 'Kinderreisepass', 'ba', 'Der Kinderreisepass wird für Kinder bis zum vollendeten 12. Lebensjahr ausgestellt.', ['Geburtsurkunde', 'biometrietaugliches Lichtbild', 'Zustimmung beider Sorgeberechtigten'], '13,00 €', [], '', true],
 [2018, 'Kindertagesstätte: Platzvergabe', 'ja', 'Die Anmeldung für einen Platz in einer städtischen Kindertageseinrichtung erfolgt zentral über die Kita-Verwaltung.', ['Anmeldeformular', 'Einkommensnachweis für die Festsetzung des Elternbeitrags'], 'Elternbeitrag nach Einkommen', ['kita'], 'Anmeldeschluss für das Kindergartenjahr ab 1. August ist der 31. Januar.', false, 405],
 [2019, 'Kirchenaustritt', 'ag', 'Für die Erklärung des Kirchenaustritts ist in Nordrhein-Westfalen das Amtsgericht zuständig, nicht die Stadtverwaltung.', ['Personalausweis oder Reisepass'], 'nach Landesrecht', [], '', false],
 [2020, 'Kraftfahrzeug-Zulassung', 'kreis', 'Für die Zulassung, Ummeldung und Abmeldung von Fahrzeugen ist das Straßenverkehrsamt des Kreises Muster zuständig.', [], 'nach der Gebührenordnung für Maßnahmen im Straßenverkehr', [], 'Das Kreishaus erreichen Sie mit der Buslinie 4, Haltestelle Kreishaus.', false],
 [2021, 'Lebensbescheinigung', 'ba', 'Lebensbescheinigungen werden für Rentenzwecke und für ausländische Versicherungsträger ausgestellt.', ['Personalausweis oder Reisepass', 'Vordruck des Versicherungsträgers'], 'für Rentenzwecke gebührenfrei', [], '', true],
 [2022, 'Lohnsteuerkarte 2010', 'ba', 'Die Lohnsteuerkarten 2010 werden bis zum 31.10.2009 an alle gemeldeten Arbeitnehmerinnen und Arbeitnehmer versandt. Ersatzkarten stellt das Bürgeramt aus. Änderungen der Steuerklasse nimmt das Finanzamt vor.', ['Personalausweis oder Reisepass'], 'Ersatzausstellung 5,00 €', [], '', true],
 [2023, 'Meldebescheinigung', 'ba', 'Die Meldebescheinigung bestätigt Ihre Anschrift. Die erweiterte Meldebescheinigung enthält zusätzlich frühere Anschriften und den Familienstand.', ['Personalausweis oder Reisepass'], 'einfach 5,00 €, erweitert 10,00 €', [], 'Für jedes Anliegen im Bürgeramt ist eine eigene Wartemarke zu ziehen.', true],
 [2024, 'Personalausweis', 'ba', 'Der Personalausweis wird für Personen ab 16 Jahren ausgestellt.', ['bisheriger Ausweis oder Geburtsurkunde', 'ein biometrietaugliches Lichtbild'], '8,00 €, vorläufiger Personalausweis 10,00 €', [], 'Ab dem 1. November 2010 wird der neue Personalausweis im Scheckkartenformat eingeführt. Bis dahin ausgestellte Ausweise bleiben gültig.', true],
 [2025, 'Plakatierungserlaubnis', 'oa', 'Das Anbringen von Plakaten im öffentlichen Straßenraum ist eine Sondernutzung und bedarf der Erlaubnis.', ['Antrag', 'Muster des Plakats'], 'nach der Sondernutzungssatzung', ['plakat'], 'An Bäumen, Lichtsignalanlagen und im Denkmalbereich Marktplatz ist Plakatierung nicht zulässig.', false],
 [2026, 'Reisepass', 'ba', 'Der elektronische Reisepass enthält ein biometrisches Lichtbild und zwei Fingerabdrücke.', ['bisheriger Pass oder Personalausweis', 'ein biometrietaugliches Lichtbild'], '59,00 €, Expressverfahren zuzüglich 32,00 €', [], 'Die Fingerabdrücke werden im Bürgeramt erfasst. Bitte erscheinen Sie persönlich.', true],
 [2027, 'Sondernutzungserlaubnis (Gehweg, Außengastronomie)', 'oa', 'Die Benutzung öffentlicher Straßen, Wege und Plätze über den Gemeingebrauch hinaus (zum Beispiel Tische und Stühle vor Gaststätten, Warenauslagen, Werbeaufsteller) bedarf einer Sondernutzungserlaubnis.', ['Antrag', 'maßstabsgerechte Lageskizze mit Angabe der Restgehwegbreite', 'Bestuhlungsplan', 'im Denkmalbereich Marktplatz: Zustimmung der Unteren Denkmalbehörde'], 'nach der Sondernutzungssatzung, je m² und angefangenem Monat', ['sonder'], 'Die verbleibende Gehwegbreite muss mindestens 1,50 m betragen. Für den Denkmalbereich Marktplatz gelten zusätzlich die Gestaltungsvorgaben der Denkmalbereichssatzung (Möblierung ausschließlich in Anthrazit, RAL 7016).', false],
 [2028, 'Sperrmüll', 'ab', 'Jeder Haushalt kann zweimal im Jahr Sperrmüll gebührenfrei abholen lassen.', [], 'zwei Abholungen pro Jahr gebührenfrei', ['sperr'], '', false, 243],
 [2029, 'Sterbeurkunde', 'sa', 'Sterbeurkunden werden vom Standesamt des Sterbeortes ausgestellt.', ['Personalausweis oder Reisepass'], '10,00 €, jede weitere Urkunde 5,00 €', [], '', false],
 [2030, 'Strafanzeige', 'pol', 'Strafanzeigen nimmt die Polizei entgegen. Die Stadtverwaltung kann keine Strafanzeigen aufnehmen.', [], '', [], 'Im Notfall wählen Sie bitte 110.', false],
 [2031, 'Vergnügungssteuer', 'st', 'Der Vergnügungssteuer unterliegen insbesondere Spielgeräte mit Gewinnmöglichkeit in Spielhallen und Gaststätten.', ['monatliche Steueranmeldung'], 'nach der Vergnügungssteuersatzung', [], '', false],
 [2032, 'Verlustanzeige', 'fb', 'Den Verlust von Gegenständen können Sie im Fundbüro anzeigen. Den Verlust von Ausweisdokumenten melden Sie bitte im Bürgeramt.', ['Personalausweis oder Reisepass'], 'gebührenfrei', ['verlust'], '', false],
 [2033, 'Wohnberechtigungsschein', 'so', 'Der Wohnberechtigungsschein berechtigt zum Bezug einer öffentlich geförderten Wohnung.', ['Einkommensnachweise aller Haushaltsmitglieder', 'Personalausweis oder Reisepass'], 'gebührenfrei', [], '', false],
 [2035, 'Tier gefunden', 'fb', 'Gefundene Tiere sind Fundsachen im Sinne des Bürgerlichen Gesetzbuches. Lebende Tiere können im Fundbüro jedoch nicht angenommen werden.', [], '', [], 'Für lebende Fundtiere wenden Sie sich bitte an das Ordnungsamt.', false, 2036],
 [2036, 'Fundtiere: Unterbringung', 'oa', 'Das Ordnungsamt nimmt Meldungen über Fundtiere entgegen. Für die Unterbringung und Versorgung von Fundtieren ist die Veterinär- und Lebensmittelüberwachung des Kreises Muster zuständig.', [], '', [], 'Bitte bringen Sie Fundtiere nicht ins Rathaus.', false],
 [2037, 'Laub auf Gehwegen und Straßen', 'ab', 'Laub aus Privatgärten gehört in die Biotonne oder kann am Wertstoffhof abgegeben werden. Für Laub von Straßenbäumen ist das Tiefbauamt im Rahmen der Straßenreinigung zuständig.', [], 'gebührenfrei', [], '', false, 2038],
 [2038, 'Straßenreinigung', 'tb', 'Die Stadt reinigt die Fahrbahnen der städtischen Straßen nach dem Reinigungsplan. Die Reinigung der Gehwege einschließlich der Beseitigung von Laub obliegt nach der Straßenreinigungssatzung den Anliegerinnen und Anliegern.', [], '', [], 'Verstöße gegen die Anliegerpflichten verfolgt das Ordnungsamt.', false, 2039],
 [2039, 'Anliegerpflichten (Gehwegreinigung, Winterdienst)', 'oa', 'Anliegerinnen und Anlieger sind verpflichtet, die Gehwege vor ihren Grundstücken sauber zu halten und im Winter zu räumen und zu streuen.', [], '', [], 'Fragen zur Entsorgung von Laub beantwortet die Abfallwirtschaft.', false, 2037],
 [2034, 'Wunschkennzeichen', 'kreis', 'Wunschkennzeichen können beim Straßenverkehrsamt des Kreises Muster reserviert werden.', [], 'nach der Gebührenordnung für Maßnahmen im Straßenverkehr', [], '', false]
];
MS.DL = DL;

DL.forEach(function (d) {
  MS.struktur.push([d[0], 204, d[1], {versteckt: true}]);
  S[d[0]] = {
    suchwoerter: d[1] + ' ' + d[3] + ' ' + d[4].join(' ') + ' ' + d[7],
    html: function () {
      var h = '<p>' + d[3] + '</p>';
      if (d[9]) h += '<p>» ' + MS.link(d[9], 'Weitere Informationen: ' + MS.knoten[d[9]].titel) + '</p>';
      if (d[4].length) h += '<h3 class="zw">Erforderliche Unterlagen</h3><ul>' + d[4].map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>';
      if (d[5]) h += '<h3 class="zw">Gebühren</h3><p>' + d[5] + '</p>';
      if (d[6].length) h += '<h3 class="zw">Formulare</h3><ul>' + d[6].map(function (k) { return '<li>' + formLink(k) + '</li>'; }).join('') + '</ul>';
      if (d[7]) h += '<h3 class="zw">Hinweise</h3><p>' + d[7] + '</p>';
      if (d[8]) h += '<div class="hinweis">Für diese Dienstleistung können Sie einen Termin über die <a href="' + u(219) + '">Online-Terminvereinbarung</a> vereinbaren. Ohne Termin ist mit Wartezeiten zu rechnen.</div>';
      h += stelle(d[2]);
      h += '<p><a href="' + u(204) + '">« Zurück zu den Dienstleistungen von A–Z</a></p>';
      return h;
    }
  };
});

S[204] = {html: function () {
  var sortiert = DL.slice().sort(function (a, b) { return a[1].localeCompare(b[1], 'de'); });
  var gruppen = {};
  sortiert.forEach(function (d) { var b = d[1].charAt(0).toUpperCase(); (gruppen[b] = gruppen[b] || []).push(d); });
  var abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(function (b) {
    return gruppen[b] ? '<a href="#buchstabe-' + b + '"><b>' + b + '</b></a>' : '<span style="color:#aaa">' + b + '</span>';
  }).join(' | ');
  return '<p>Hier finden Sie alle Dienstleistungen der Stadtverwaltung Musterstadt in alphabetischer Reihenfolge. Sollten Sie eine Leistung nicht finden, wenden Sie sich bitte an die Zentrale unter ' + tel('0') + '.</p>' +
    '<p style="font-size:12px;text-align:center;background:#eef1f5;padding:5px">' + abc + '</p>' +
    Object.keys(gruppen).map(function (b) {
      return '<h3 class="zw" id="buchstabe-' + b + '">' + b + '</h3><ul>' + gruppen[b].map(function (d) { return '<li>' + MS.link(d[0], d[1]) + '</li>'; }).join('') + '</ul>';
    }).join('');
}};

S[215] = {html: function () {
  var liste = Object.keys(FORM).map(function (k) { return FORM[k]; }).sort(function (a, b) { return a[1].localeCompare(b[1], 'de'); });
  return '<p>Hier können Sie häufig benötigte Formulare der Stadtverwaltung herunterladen. Zum Öffnen der Dateien benötigen Sie den kostenlosen Adobe Reader.</p>' +
    '<div class="hinweis"><b>Bitte beachten Sie:</b> Formulare sind in Druckbuchstaben und mit blauem Kugelschreiber auszufüllen. Ausdrucke müssen einseitig erfolgen. Formulare, die per E-Mail oder Telefax eingehen, können nicht bearbeitet werden.</div>' +
    '<table class="tab"><tr><th>Nr.</th><th>Bezeichnung</th><th>Stand</th><th>Datei</th></tr>' +
    liste.map(function (f) { return '<tr><td>' + f[0] + '</td><td>' + f[1] + '</td><td>' + f[3] + '</td><td><a href="pdf/' + f[2] + '" data-ereignis="pdf">PDF</a> <span class="pdf">' + f[4] + '</span></td></tr>'; }).join('') +
    '</table><p class="klein">Vordruck 17/a wird nicht mehr bearbeitet und ist durch Formular B ersetzt.</p><p class="klein">Weitere Formulare erhalten Sie in den zuständigen Fachämtern. Formulare des Kreises Muster finden Sie auf den Seiten des Kreises.</p>' +
    '<p><a href="http://get.adobe.com/de/reader/" onclick="alert(\'Sie verlassen nun das Internetangebot der Stadt Musterstadt.\');return false">Adobe Reader herunterladen</a></p>';
}};

/* ---------- Bürgerservice (Übersicht) ---------- */
S[200] = {html:
  '<p>Im Bürgerservice finden Sie alle Informationen, die Sie für Ihren Behördengang benötigen. Viele Anliegen können Sie bereits von zu Hause aus vorbereiten.</p>' +
  '<table class="tab"><tr><th>Ich möchte …</th><th>Hier finden Sie Hilfe</th></tr>' +
  '<tr><td>eine Frage haben</td><td><a href="' + u(206) + '">Häufig gestellte Fragen</a></td></tr>' +
  '<tr><td>wissen, wer zuständig ist</td><td><a href="' + u(204) + '">Dienstleistungen von A–Z</a></td></tr>' +
  '<tr><td>einen Termin vereinbaren</td><td><a href="' + u(219) + '">Online-Terminvereinbarung</a></td></tr>' +
  '<tr><td>ein Formular herunterladen</td><td><a href="' + u(215) + '">Formulare &amp; Downloads</a></td></tr>' +
  '<tr><td>eine Gebühr bezahlen</td><td><a href="' + u(224) + '">Stadtkasse</a></td></tr>' +
  '<tr><td>etwas Verlorenes wiederfinden</td><td><a href="' + u(236) + '">Fundbüro</a></td></tr>' +
  '<tr><td>wissen, wann die Tonne geleert wird</td><td><a href="' + u(242) + '">Abfallkalender 2009</a></td></tr></table>' +
  '<p>Für Kfz-Zulassung, Führerscheine, Naturschutz und Gesundheitsamt ist der <a href="' + u(925, '&amp;ziel=kreis') + '">Kreis Muster</a> zuständig.</p>'};

/* ---------- Bürgeramt ---------- */
S[210] = {suchwoerter: 'Wartemarke Termin Öffnungszeiten Mittagspause Schalter', html:
  '<p>Das Bürgeramt ist Ihre erste Anlaufstelle für Meldeangelegenheiten, Ausweise, Pässe, Beglaubigungen und Bescheinigungen.</p>' +
  '<table class="tab"><tr><th colspan="2">Öffnungszeiten</th></tr>' +
  '<tr><td>Montag</td><td>8:00–12:00 Uhr</td></tr><tr><td>Dienstag</td><td>8:00–12:00 Uhr</td></tr><tr><td>Mittwoch</td><td>geschlossen</td></tr>' +
  '<tr><td>Donnerstag</td><td>8:00–12:00 Uhr und 14:00–18:00 Uhr</td></tr><tr><td>Freitag</td><td>8:00–12:00 Uhr</td></tr></table>' +
  '<div class="hinweis">Bitte beachten Sie: Am Mittwoch, 21.10.2009 bleibt das Bürgeramt wegen einer internen Schulung geschlossen. Siehe <a href="' + u(1002) + '">Meldung</a>.</div>' +
  '<h3 class="zw">So läuft Ihr Besuch ab</h3>' +
  '<p>Bitte ziehen Sie am Automaten im Foyer eine Wartemarke. Ihre Nummer wird auf der Anzeige über den Schaltern aufgerufen. <b>Für jedes Anliegen ist eine eigene Wartemarke erforderlich.</b> Wartemarken werden bis 11:30 Uhr ausgegeben, donnerstags nachmittags bis 17:30 Uhr.</p>' +
  '<p>Kundinnen und Kunden mit Termin werden bevorzugt aufgerufen. Termine vereinbaren Sie über die <a href="' + u(219) + '">Online-Terminvereinbarung</a>.</p>' +
  '<p>Bitte halten Sie alle erforderlichen Unterlagen bereit. Welche Unterlagen Sie benötigen, erfahren Sie unter <a href="' + u(204) + '">Dienstleistungen von A–Z</a>. Unvollständige Anträge können leider nicht angenommen werden.</p>' +
  '<p>Zahlungen sind im Bürgeramt nur in bar oder mit EC-Karte möglich. Gebühren für einzelne Leistungen sind an der <a href="' + u(224) + '">Stadtkasse</a> zu entrichten.</p>' +
  '<h3 class="zw">Kontakt</h3><p>Neues Rathaus, Erdgeschoss, Schalter 1–6<br>Rathausplatz 1, 43999 Musterstadt<br>Telefon: ' + tel('3 00') + '<br>Telefax: ' + tel('3 99') + '</p>' +
  '<p class="klein">Telefonisch ist das Bürgeramt während der Öffnungszeiten nur eingeschränkt erreichbar. Antworten auf viele Fragen finden Sie unter <a href="' + u(206) + '">Häufig gestellte Fragen</a>.</p>'};

/* ---------- Online-Terminvereinbarung ---------- */
S[219] = {suchwoerter: 'Termin buchen Terminvereinbarung', html:
  '<p>Für Dienstleistungen des Bürgeramtes können Sie online einen Termin vereinbaren. Mit Termin entfällt die Wartezeit im Foyer.</p>' +
  '<p>Die Online-Terminvereinbarung wird im Auftrag der Stadt Musterstadt vom Kommunalen Terminserver (KTS) der Datenzentrale Rheinland-Mitte betrieben. Bitte beachten Sie die dort geltenden Nutzungs- und Datenschutzbedingungen.</p>' +
  '<div class="hinweis">Termine werden in der Regel acht Wochen im Voraus freigeschaltet. Kurzfristig frei werdende Termine stehen sofort wieder zur Verfügung.</div>' +
  '<p><a class="knopf" href="' + u(925, '&amp;ziel=termin') + '" data-ereignis="terminportal">Zur Online-Terminvereinbarung</a></p>' +
  '<p class="klein">Für Dienstleistungen des Kreises Muster (z. B. Kfz-Zulassung) vereinbaren Sie Termine bitte über die Internetseite des Kreises.</p>'};

/* ---------- Steuern & Abgaben ---------- */
S[223] = {suchwoerter: 'Hundesteuer Grundsteuer Gewerbesteuer Vergnügungssteuer Hebesatz', html:
  '<p>Das Steueramt der Stadt Musterstadt erhebt die Realsteuern (Grundsteuer und Gewerbesteuer) sowie die örtlichen Aufwand- und Verbrauchsteuern.</p>' +
  '<h3 class="zw">Hebesätze 2009</h3><table class="tab"><tr><th>Steuerart</th><th>Hebesatz</th></tr><tr><td>Grundsteuer A</td><td>220 v. H.</td></tr><tr><td>Grundsteuer B</td><td>413 v. H.</td></tr><tr><td>Gewerbesteuer</td><td>430 v. H.</td></tr></table>' +
  '<h3 class="zw">Hundesteuer</h3><table class="tab"><tr><th>Hundehaltung</th><th>Jahresbetrag</th></tr><tr><td>ein Hund</td><td>96,00 €</td></tr><tr><td>zwei Hunde, je Hund</td><td>120,00 €</td></tr><tr><td>drei oder mehr Hunde, je Hund</td><td>144,00 €</td></tr><tr><td>gefährlicher Hund im Sinne des Landeshundegesetzes NRW</td><td>600,00 €</td></tr></table>' +
  '<p>Ob ein Hund als gefährlich gilt, richtet sich nach dem Landeshundegesetz NRW und den dort genannten Rassen und deren Kreuzungen. Im Zweifelsfall entscheidet das <a href="' + u(230) + '">Ordnungsamt</a>. Die Anmeldung erfolgt mit dem Formular ' + MS.formLink('hund') + '.</p>' +
  '<h3 class="zw">Vergnügungssteuer</h3><p>Für Spielgeräte mit Gewinnmöglichkeit beträgt die Steuer 12 % des Einspielergebnisses je Gerät und Monat.</p>' +
  '<h3 class="zw">Ansprechpartnerin</h3><p>Elke Busch, Sachgebiet Hunde- und Vergnügungssteuer<br>Neues Rathaus, Raum 118<br>Telefon: ' + tel('2 40') + '</p>' +
  '<p>Grundsteuer und Gewerbesteuer: Telefon ' + tel('2 41') + '</p>'};

/* ---------- Stadtkasse ---------- */
S[224] = {suchwoerter: 'Kassenzeichen Einzahlung Haushaltsstelle Mahnung Barzahlung', html:
  '<p>Die Stadtkasse nimmt alle Zahlungen an die Stadt Musterstadt entgegen und leistet die Auszahlungen der Stadt.</p>' +
  '<table class="tab"><tr><th colspan="2">Öffnungszeiten der Kassenhalle</th></tr><tr><td>Montag</td><td>8:30–12:00 Uhr</td></tr><tr><td>Donnerstag</td><td>8:30–12:00 Uhr und 14:00–16:00 Uhr</td></tr><tr><td>Dienstag, Mittwoch, Freitag</td><td>geschlossen</td></tr></table>' +
  '<h3 class="zw">Zahlungen</h3><p>Bitte geben Sie bei jeder Zahlung das <b>Kassenzeichen</b> an, das auf Ihrem Bescheid oder Ihrer Rechnung vermerkt ist. Die Bankverbindung der Stadtkasse entnehmen Sie bitte Ihrem Bescheid.</p>' +
  '<p>Barzahlungen sind in der Kassenhalle möglich. Liegt Ihnen noch kein Bescheid vor, ist eine Einzahlung nur mit dem Einzahlungsschein der Stadtkasse unter Angabe der zutreffenden <b>Haushaltsstelle</b> möglich. Die Haushaltsstellen sind im <a href="' + u(131) + '">Haushaltsplan</a> der Stadt Musterstadt ausgewiesen. Die Mitarbeiterinnen und Mitarbeiter der Stadtkasse dürfen keine Auskünfte über Haushaltsstellen erteilen.</p>' +
  '<p>Sie können der Stadtkasse auch eine ' + MS.formLink('lastschrift') + ' erteilen.</p>' +
  '<h3 class="zw">Verwarnungsgelder</h3><p>Verwarnungsgelder des Kommunalen Ordnungsdienstes zahlen Sie bitte innerhalb einer Woche unter Angabe des Aktenzeichens.</p>' +
  '<h3 class="zw">Kontakt</h3><p>Monika Esser, Kassenleiterin<br>Neues Rathaus, Kassenhalle, Raum 115<br>Telefon: ' + tel('2 30') + '</p>'};

/* ---------- Ordnungsamt ---------- */
S[230] = {suchwoerter: 'Ordnungsdienst Knöllchen Sondernutzung Hunde Gaststätten Strafanzeige Polizei Lärm', html:
  '<p>Das Ordnungsamt sorgt für Sicherheit und Ordnung in Musterstadt. Zu den Aufgaben gehören unter anderem:</p>' +
  '<ul><li>Gewerbe- und Gaststättenangelegenheiten</li><li>Sondernutzungen im öffentlichen Straßenraum</li><li>Marktwesen und Veranstaltungen</li><li>Hundeangelegenheiten nach dem Landeshundegesetz NRW</li><li>Lärmschutz und Feuerwerk</li><li>Überwachung des ruhenden Verkehrs</li></ul>' +
  '<div class="hinweis">Für Strafanzeigen wenden Sie sich bitte an die Polizei. Polizeiwache Musterstadt, Bahnhofstraße 12. Im Notfall wählen Sie 110.</div>' +
  '<h3 class="zw">Kommunaler Ordnungsdienst</h3><p>Der Kommunale Ordnungsdienst (KOD) ist im Stadtgebiet unterwegs und kontrolliert die Einhaltung der ordnungsbehördlichen Verordnung, der Sondernutzungssatzung und der Parkregeln. Sie erreichen den KOD werktags von 7:00 bis 19:00 Uhr unter ' + tel('3 25') + '.</p>' +
  '<h3 class="zw">Sondernutzungen</h3><p>Tische und Stühle vor Gaststätten, Warenauslagen, Werbeaufsteller und Plakate im öffentlichen Raum bedürfen einer Erlaubnis. Siehe ' + '<a href="' + u(2027) + '">Sondernutzungserlaubnis</a>' + '.</p>' +
  '<h3 class="zw">Kontakt</h3><p>Bernd Krämer, Leiter des Ordnungsamtes<br>Neues Rathaus, Raum 120<br>Telefon: ' + tel('3 20') + '<br>Sprechzeiten: Mo, Di, Fr 8:00–12:00 Uhr, Do 14:00–18:00 Uhr</p>'};

/* ---------- Freiwillige Feuerwehr ---------- */
S[232] = {suchwoerter: 'Feuerwehr Einsatz Brüggemann Jugendfeuerwehr Martinsfeuer Rauchmelder', html:
  '<p>Die Freiwillige Feuerwehr Musterstadt besteht aus dem Löschzug Mitte und der Löschgruppe Oberkleeberg. Rund 90 ehrenamtliche Feuerwehrleute stehen rund um die Uhr für Sie bereit.</p>' +
  '<p><b>Notruf Feuerwehr und Rettungsdienst: 112</b></p>' +
  '<h3 class="zw">Einsätze 2009 (Auswahl)</h3><table class="tab"><tr><th>Datum</th><th>Einsatz</th><th>Ort</th></tr>' +
  '<tr><td>06.10.2009</td><td>Ölspur, ca. 400 m</td><td>Lindenstraße</td></tr>' +
  '<tr><td>21.09.2009</td><td>Brandmeldeanlage, Fehlalarm</td><td>Kreiskrankenhaus</td></tr>' +
  '<tr><td>02.09.2009</td><td>Katze auf Baum</td><td>Oberkleeberg, Dorfstraße</td></tr>' +
  '<tr><td>17.08.2009</td><td>Wespennest, keine Zuständigkeit</td><td>Gartenstraße</td></tr>' +
  '<tr><td>29.07.2009</td><td>Unwetter, Baum auf Fahrbahn</td><td>Auenweg</td></tr>' +
  '<tr><td>11.07.2009</td><td>Brandsicherheitswache Schützenfest</td><td>Festwiese</td></tr>' +
  '<tr><td>23.06.2009</td><td>Wasser im Keller</td><td>Altes Rathaus (Stadtarchiv)</td></tr>' +
  '<tr><td>08.06.2009</td><td>Person in Aufzug</td><td>Neues Rathaus</td></tr></table>' +
  '<h3 class="zw">Martinsfeuer</h3><p>Am 11.11.2009 entzündet die Feuerwehr das Martinsfeuer auf der Festwiese an der Muster. Siehe <a href="' + u(1001) + '">Laternenlauf</a>.</p>' +
  '<h3 class="zw">Rauchmelder retten Leben</h3><p>Die Feuerwehr Musterstadt empfiehlt die Installation von Rauchmeldern in allen Schlaf- und Kinderzimmern sowie Fluren.</p>' +
  '<h3 class="zw">Mitmachen</h3><p>Die Jugendfeuerwehr trifft sich jeden Freitag um 17:30 Uhr im Gerätehaus Mitte, Industriestraße 20. Interessierte ab 10 Jahren sind herzlich willkommen.</p>' +
  '<h3 class="zw">Kontakt</h3><p>Wehrführer Heinz-Josef Brüggemann<br>Feuerwehrgerätehaus Mitte, Industriestraße 20, 43999 Musterstadt</p>'};

/* ---------- Fundbüro ---------- */
S[236] = {suchwoerter: 'Fundsachen Fundsachenverzeichnis verloren gefunden Regenschirm', html: function () {
  return '<p>Im Fundbüro werden alle im Stadtgebiet gefundenen und abgegebenen Gegenstände aufbewahrt. Fundsachen werden sechs Monate aufbewahrt. Danach geht das Eigentum auf den Finder oder die Stadt über.</p>' +
    '<table class="tab"><tr><th colspan="2">Fundbüro</th></tr><tr><td>Ansprechpartner</td><td>Klaus Möller</td></tr><tr><td>Anschrift</td><td>Neues Rathaus, Raum 018, Erdgeschoss (Eingang Rückseite)</td></tr><tr><td>Sprechzeiten</td><td>Di und Fr 9:00–11:30 Uhr</td></tr><tr><td>Telefon</td><td>' + tel('3 40') + '</td></tr></table>' +
    '<p>Zur Abholung einer Fundsache bringen Sie bitte Ihren Personalausweis und einen Eigentumsnachweis mit. Fundsachen, die in Bussen gefunden werden, befinden sich bei den Verkehrsbetrieben. Verluste können Sie mit dem Formular ' + MS.formLink('verlust') + ' anzeigen.</p>' +
    '<h2>Fundsachenverzeichnis</h2><p>Stand: 09.10.2009. Aus Datenschutzgründen werden keine Angaben zu Inhalten von Geldbörsen und Taschen veröffentlicht.</p>' +
    '<p><label for="fundfilter">Suchen:</label> <input type="text" id="fundfilter" size="30" oninput="MS.fundFilter()"> <span id="fundanzahl" class="klein" aria-live="polite"></span></p>' +
    '<div tabindex="0" role="region" aria-label="Fundsachenverzeichnis" style="height:420px;overflow-y:scroll;border:1px solid #ccd5df"><table class="tab" id="fundtab" style="margin:0"><tr><th>Fund-Nr.</th><th>Datum</th><th>Gegenstand</th><th>Fundort</th></tr></table></div>';
}, init: function () {
  var seed = 4711;
  function r(n) { seed = (seed * 16807) % 2147483647; return seed % n; }
  var dinge = [['Regenschirm', 18], ['Taschenschirm', 8], ['Schlüsselbund', 9], ['Einzelner Schlüssel', 4], ['Handy', 5], ['Geldbörse', 5], ['Brille', 4], ['Sonnenbrille', 3], ['Handschuh, einzeln', 6], ['Mütze', 3], ['Schal', 3], ['Jacke', 3], ['Rucksack', 2], ['Fahrrad', 3], ['Kinderfahrrad', 1], ['Turnbeutel', 2], ['Schnuller', 2], ['Kuscheltier', 2], ['Armbanduhr', 1], ['Ring', 1], ['Ohrring, einzeln', 1], ['Hörgerät', 1], ['Gebiss (Oberkiefer)', 1], ['MP3-Player', 1], ['Digitalkamera', 1], ['USB-Stick', 1], ['Buch (Stadtbibliothek)', 1], ['Hundeleine', 1], ['Krücke', 1], ['Laterne (Martinslaterne)', 1], ['Schützenorden', 1], ['Karnevalsorden', 1]];
  var farben = ['schwarz', 'blau', 'rot', 'grau', 'grün', 'braun', 'beige', 'bunt', 'gelb', 'pink'];
  var orte = ['Marktplatz', 'Bushaltestelle Kreishaus', 'Bahnhofstraße', 'Lindenstraße', 'Neues Rathaus, Foyer', 'Stadtbibliothek', 'Kirchstraße', 'Festwiese', 'Mühlenweg', 'Auenweg', 'Bahnhof Musterstadt', 'Kreiskrankenhaus, Parkplatz', 'Friedhof', 'Spielplatz Gartenstraße', 'Oberkleeberg, Dorfstraße', 'Preisfuchs-Parkplatz', 'Schulzentrum', 'Telefonzelle Marktplatz'];
  var summe = dinge.reduce(function (s, d) { return s + d[1]; }, 0);
  var zeilen = [], t = Date.UTC(2009, 9, 9), nr = {2009: 0, 2008: 0};
  for (var i = 0; i < 612; i++) {
    var x = r(summe), d = dinge[0];
    for (var j = 0; j < dinge.length; j++) { x -= dinge[j][1]; if (x < 0) { d = dinge[j]; break; } }
    var dat = new Date(t - i * 86400000 * (0.9 + r(10) / 10));
    zeilen.push([dat, d[0] + (/Schirm|Mütze|Schal|Jacke|Rucksack|Fahrrad|Geldbörse|Handschuh|Turnbeutel/.test(d[0]) ? ', ' + farben[r(farben.length)] : ''), orte[r(orte.length)]]);
  }
  zeilen.forEach(function (z, k) {
    if (k === 2) { z[1] = 'Wartemarke Nr. 347'; z[2] = 'Neues Rathaus, Foyer'; }
    else if (k % 29 === 7) { z[1] = 'Antrag (Formular B), unvollständig'; z[2] = 'Neues Rathaus, Foyer'; }
    else if (k % 53 === 11) { z[1] = 'Kugelschreiber, schwarz'; z[2] = 'Neues Rathaus, Foyer'; }
  });
  zeilen.forEach(function (z) { if (z[2] === 'Preisfuchs-Parkplatz' && z[0] < new Date(Date.UTC(2009, 9, 2))) z[2] = 'Spar-Mit-Parkplatz'; });
  zeilen.reverse();
  var html = '';
  zeilen.forEach(function (z, k) {
    var j = z[0].getUTCFullYear();
    nr[j] = (nr[j] || 0) + 1;
    var dd = ('0' + z[0].getUTCDate()).slice(-2) + '.' + ('0' + (z[0].getUTCMonth() + 1)).slice(-2) + '.' + j;
    z.push('F-' + j + '/' + ('000' + nr[j]).slice(-4));
    z.push(dd);
  });
  zeilen.reverse().forEach(function (z) { html += '<tr><td>' + z[3] + '</td><td>' + z[4] + '</td><td>' + z[1] + '</td><td>' + z[2] + '</td></tr>'; });
  document.getElementById('fundtab').insertAdjacentHTML('beforeend', html);
  MS.fundFilter();
}};
MS.fundFilter = function () {
  var q = document.getElementById('fundfilter').value.toLowerCase(), n = 0;
  var rows = document.getElementById('fundtab').rows;
  for (var i = 1; i < rows.length; i++) { var sicht = rows[i].textContent.toLowerCase().indexOf(q) > -1; rows[i].style.display = sicht ? '' : 'none'; if (sicht) n++; }
  document.getElementById('fundanzahl').textContent = n + ' Einträge';
};

/* ---------- Abfallwirtschaft ---------- */
S[241] = {suchwoerter: 'Müll Restmüll Biotonne Papier Gelber Sack Wertstoffhof Tonne', html:
  '<p>Die Stadt Musterstadt ist für die Sammlung der Abfälle aus privaten Haushalten zuständig. Mit der Abfuhr ist ein beauftragtes Entsorgungsunternehmen betraut.</p>' +
  '<table class="tab"><tr><th>Behälter</th><th>Was gehört hinein?</th><th>Leerung</th></tr>' +
  '<tr><td>Graue Tonne</td><td>Restmüll</td><td>14-täglich</td></tr><tr><td>Braune Tonne</td><td>Bioabfall, Küchen- und Gartenabfälle</td><td>14-täglich</td></tr>' +
  '<tr><td>Blaue Tonne</td><td>Papier, Pappe, Kartonagen</td><td>4-wöchentlich</td></tr><tr><td>Gelber Sack</td><td>Verkaufsverpackungen aus Kunststoff, Metall und Verbundstoffen</td><td>14-täglich</td></tr></table>' +
  '<p>Die Abfuhrtermine für Ihre Straße finden Sie im <a href="' + u(242) + '">Abfallkalender 2009</a>. Informationen zur Abholung von Sperrmüll finden Sie unter <a href="' + u(243) + '">Sperrmüll</a>.</p>' +
  '<h3 class="zw">Wertstoffhof</h3><p>Industriestraße 22 (neben dem Bauhof)<br>Mi 14:00–18:00 Uhr, Sa 9:00–13:00 Uhr<br>Annahme von Grünschnitt, Elektrogeräten, Altmetall und Bauschutt in haushaltsüblichen Mengen.</p>' +
  '<h3 class="zw">Kontakt</h3><p>Norbert Wirtz, Abfallwirtschaft<br>Neues Rathaus, Raum 405<br>Telefon: ' + tel('6 60') + '</p>'};

var STR = [["Abteistraße", "", "Kirchwinkel", 6], ["Ahornweg", "", "Nord", 2], ["Akazienweg", "", "Nord", 2], ["Am Altarm", "", "Auenrode", 6], ["Am Alten Rathaus", "", "Altstadt", 1], ["Am Anger", "", "Kirchwinkel", 6], ["Am Auenblick", "", "Am Fuchsweg", 4], ["Am Auenhof", "", "Auenrode", 6], ["Am Bach", "", "Oberkleeberg", 5], ["Am Backes", "", "Oberkleeberg", 5], ["Am Bahndamm", "", "Südstadt", 3], ["Am Bauhof", "", "Industriegebiet", 3], ["Am Bildstock", "", "Kirchwinkel", 6], ["Am Brunnen", "", "Auenrode", 6], ["Am Deich", "", "Auenrode", 6], ["Am Dorfteich", "", "Oberkleeberg", 5], ["Am Feldrand", "", "Auenrode", 6], ["Am Feuerwehrhaus", "", "Oberkleeberg", 5], ["Am Friedhof", "", "Nord", 2], ["Am Fronhof", "", "Oberkleeberg", 5], ["Am Galgenberg", "", "Nord", 2], ["Am Gleisanschluss", "", "Industriegebiet", 3], ["Am Güterbahnhof", "", "Südstadt", 3], ["Am Hallenbad", "", "Nord", 2], ["Am Hang", "", "Nord", 2], ["Am Hohen Stein", "", "Kirchwinkel", 6], ["Am Hohlweg", "", "Oberkleeberg", 5], ["Am Hospitalgarten", "", "Nord", 2], ["Am Kalvarienberg", "", "Nord", 2], ["Am Kiesbett", "", "Südstadt", 3], ["Am Kiesteich", "", "Auenrode", 6], ["Am Kirchwinkel", "", "Kirchwinkel", 6], ["Am Kleebach", "", "Oberkleeberg", 5], ["Am Kreishaus", "", "Nord", 2], ["Am Kreuz", "", "Auenrode", 6], ["Am Kreuzfeld", "", "Auenrode", 6], ["Am Lindenkreuz", "", "Südstadt", 3], ["Am Mühlenbach", "", "Altstadt", 1], ["Am Musterufer", "", "Altstadt", 1], ["Am Obertor", "", "Altstadt", 1], ["Am Pferdestall", "", "Auenrode", 6], ["Am Rain", "", "Kirchwinkel", 6], ["Am Rodland", "", "Auenrode", 6], ["Am Schulzentrum", "", "Nord", 2], ["Am Sportplatz", "", "Südstadt", 3], ["Am Sportplatz (Oberkleeberg)", "", "Oberkleeberg", 5], ["Am Stadtpark", "", "Nord", 2], ["Am Steinbruch", "", "Oberkleeberg", 5], ["Am Stempelwerk", "", "Südstadt", 3], ["Am Umspannwerk", "", "Industriegebiet", 3], ["Am Untertor", "", "Altstadt", 1], ["Am Waldrand", "", "Kirchwinkel", 6], ["Am Wasserturm", "", "Nord", 2], ["Am Wasserwerk", "", "Südstadt", 3], ["Am Wegkreuz", "", "Oberkleeberg", 5], ["Am Wehr", "", "Altstadt", 1], ["Am Weiher", "", "Auenrode", 6], ["Am Wertstoffhof", "", "Industriegebiet", 3], ["Amselweg", "", "Am Fuchsweg", 4], ["An den Gleisen", "", "Südstadt", 3], ["An der Stadtmauer", "", "Altstadt", 1], ["Apfelweg", "", "Oberkleeberg", 5], ["Auenstraße", "", "Auenrode", 6], ["Auenweg", "1–24", "Altstadt", 1], ["Auenweg (Oberkleeberg)", "25–60", "Oberkleeberg", 5], ["Auf dem Driesch", "", "Nord", 2], ["Auf der Heide", "", "Oberkleeberg", 5], ["August-Macke-Straße", "", "Nord", 2], ["Augustastraße", "", "Südstadt", 3], ["Bachstraße", "", "Nord", 2], ["Bäckergasse", "", "Altstadt", 1], ["Bahnhofstraße", "", "Südstadt", 3], ["Bahnhofsvorplatz", "", "Südstadt", 3], ["Bauernweg", "", "Auenrode", 6], ["Beethovenstraße", "", "Nord", 2], ["Bergstraße", "", "Nord", 2], ["Bergweg", "", "Kirchwinkel", 6], ["Biberweg", "", "Am Fuchsweg", 4], ["Birkenweg", "", "Nord", 2], ["Birnbaumweg", "", "Oberkleeberg", 5], ["Bleichstraße", "", "Südstadt", 3], ["Blumenstraße", "", "Südstadt", 3], ["Brahmsweg", "", "Nord", 2], ["Breite Straße", "", "Südstadt", 3], ["Brückenstraße", "", "Altstadt", 1], ["Brüder-Grimm-Straße", "", "Nord", 2], ["Brunnengasse", "", "Altstadt", 1], ["Brunnenweg", "", "Oberkleeberg", 5], ["Buchenhang", "", "Kirchwinkel", 6], ["Buchenweg", "", "Nord", 2], ["Bürgermeister-Hennen-Straße", "", "Nord", 2], ["Burggraben", "", "Altstadt", 1], ["Burgweg", "", "Oberkleeberg", 5], ["Bussardweg", "", "Am Fuchsweg", 4], ["Cranachweg", "", "Nord", 2], ["Dachsweg", "", "Am Fuchsweg", 4], ["Dammstraße", "", "Südstadt", 3], ["Dampfmühlenweg", "", "Südstadt", 3], ["Deichstraße", "", "Auenrode", 6], ["Dorfstraße (Auenrode)", "", "Auenrode", 6], ["Dorfstraße (Kirchwinkel)", "", "Kirchwinkel", 6], ["Dorfstraße (Oberkleeberg)", "", "Oberkleeberg", 5], ["Drosselweg", "", "Am Fuchsweg", 4], ["Droste-Hülshoff-Straße", "", "Nord", 2], ["Dürerstraße", "", "Nord", 2], ["Ebereschenweg", "", "Nord", 2], ["Edisonstraße", "", "Industriegebiet", 3], ["Eichendorffstraße", "", "Nord", 2], ["Eichenstraße", "", "Nord", 2], ["Eisvogelweg", "", "Am Fuchsweg", 4], ["Elisabethstraße", "", "Südstadt", 3], ["Ellerbuscher Straße", "", "Nord", 2], ["Ellerbuscher Weg", "", "Kirchwinkel", 6], ["Entenweg", "", "Am Fuchsweg", 4], ["Erich-Kästner-Straße", "", "Nord", 2], ["Erlenbruch", "", "Auenrode", 6], ["Erlenweg", "", "Nord", 2], ["Eschenweg", "", "Nord", 2], ["Eulenweg", "", "Am Fuchsweg", 4], ["Fabrikstraße", "", "Südstadt", 3], ["Fährstraße", "", "Altstadt", 1], ["Fährweg", "", "Auenrode", 6], ["Falkenweg", "", "Am Fuchsweg", 4], ["Färbergasse", "", "Altstadt", 1], ["Fasanenweg", "", "Am Fuchsweg", 4], ["Feldstraße", "", "Südstadt", 3], ["Feldweg", "", "Oberkleeberg", 5], ["Fichtenweg", "", "Nord", 2], ["Finkenweg", "", "Am Fuchsweg", 4], ["Fischerweg", "", "Auenrode", 6], ["Fischmarkt", "", "Altstadt", 1], ["Fledermausweg", "", "Am Fuchsweg", 4], ["Fontaneweg", "", "Nord", 2], ["Forstweg", "", "Kirchwinkel", 6], ["Franz-Marc-Weg", "", "Nord", 2], ["Friedhofsweg", "", "Nord", 2], ["Friedrichstraße", "", "Südstadt", 3], ["Fuchsweg", "", "Am Fuchsweg", 4], ["Gartenfeld", "", "Nord", 2], ["Gartenstraße", "1–23", "Altstadt", 1], ["Gartenstraße", "ab 24", "Nord", 2], ["Gartenweg", "", "Südstadt", 3], ["Gartenweg (Auenrode)", "", "Auenrode", 6], ["Gartenweg (Oberkleeberg)", "", "Oberkleeberg", 5], ["Gaswerkstraße", "", "Südstadt", 3], ["Gaußstraße", "", "Südstadt", 3], ["Gerbergasse", "", "Altstadt", 1], ["Gerichtsstraße", "", "Altstadt", 1], ["Gewerbestraße", "", "Industriegebiet", 3], ["Ginsterweg", "", "Nord", 2], ["Glockenweg", "", "Kirchwinkel", 6], ["Goethestraße", "", "Nord", 2], ["Grabenstraße", "", "Altstadt", 1], ["Grünewaldstraße", "", "Nord", 2], ["Gut Lindenbruch", "Wohnplatz", "Industriegebiet", 3], ["Gutenbergstraße", "", "Industriegebiet", 3], ["Güterstraße", "", "Südstadt", 3], ["Habichtweg", "", "Am Fuchsweg", 4], ["Hainbuchenweg", "", "Kirchwinkel", 6], ["Händelstraße", "", "Nord", 2], ["Handelsweg", "", "Industriegebiet", 3], ["Handwerkerstraße", "", "Industriegebiet", 3], ["Hasenweg", "", "Am Fuchsweg", 4], ["Haydnweg", "", "Nord", 2], ["Hebbelstraße", "", "Nord", 2], ["Heideweg", "", "Oberkleeberg", 5], ["Heinestraße", "", "Nord", 2], ["Heinrich-Kranz-Platz", "", "Altstadt", 1], ["Herderstraße", "", "Nord", 2], ["Hinter den Höfen", "", "Südstadt", 3], ["Hinter der Kirche", "", "Altstadt", 1], ["Hirschweg", "", "Am Fuchsweg", 4], ["Hochstraße", "", "Nord", 2], ["Hof Auenkamp", "Wohnplatz", "Auenrode", 6], ["Hofstraße (Auenrode)", "", "Auenrode", 6], ["Hofstraße (Oberkleeberg)", "", "Oberkleeberg", 5], ["Hofweg", "", "Auenrode", 6], ["Höhenweg", "", "Oberkleeberg", 5], ["Hohlweg", "", "Kirchwinkel", 6], ["Holbeinweg", "", "Nord", 2], ["Hölderlinweg", "", "Nord", 2], ["Holunderweg", "", "Oberkleeberg", 5], ["Hospitalgasse", "", "Altstadt", 1], ["Hospitalstraße", "", "Altstadt", 1], ["Hügelstraße", "", "Oberkleeberg", 5], ["Hühnermarkt", "", "Altstadt", 1], ["Humboldtstraße", "", "Südstadt", 3], ["Hummelweg", "", "Am Fuchsweg", 4], ["Humperdinckstraße", "", "Nord", 2], ["Hutmachergasse", "", "Altstadt", 1], ["Igelweg", "", "Am Fuchsweg", 4], ["Iltisweg", "", "Am Fuchsweg", 4], ["Im Auenfeld", "", "Auenrode", 6], ["Im Gewerbepark", "", "Industriegebiet", 3], ["Im Kleefeld", "", "Oberkleeberg", 5], ["Im Langen Feld", "", "Auenrode", 6], ["Im Wingert", "", "Nord", 2], ["In den Obstwiesen", "", "Oberkleeberg", 5], ["In der Lehmkuhle", "", "Auenrode", 6], ["Industriestraße", "", "Industriegebiet", 3], ["Jägerpfad", "", "Kirchwinkel", 6], ["Kanalstraße", "", "Industriegebiet", 3], ["Kapellenstraße", "", "Kirchwinkel", 6], ["Kapellenweg", "", "Oberkleeberg", 5], ["Kaplaneigasse", "", "Altstadt", 1], ["Kastanienallee", "", "Nord", 2], ["Käuzchenweg", "", "Am Fuchsweg", 4], ["Keplerstraße", "", "Südstadt", 3], ["Kesselhausweg", "", "Südstadt", 3], ["Kiebitzweg", "", "Am Fuchsweg", 4], ["Kiesweg", "", "Auenrode", 6], ["Kölner Straße", "ab 60", "Auenrode", 6], ["Kirchplatz", "", "Altstadt", 1], ["Kirchplatz (Kirchwinkel)", "", "Kirchwinkel", 6], ["Kirchstraße", "1–30", "Altstadt", 1], ["Kirchstraße (Kirchwinkel)", "", "Kirchwinkel", 6], ["Kirchweg", "", "Oberkleeberg", 5], ["Kirschenweg", "", "Oberkleeberg", 5], ["Kleeberger Höhe", "", "Oberkleeberg", 5], ["Kleeberger Mühle", "Wohnplatz", "Oberkleeberg", 5], ["Kleeweg", "", "Oberkleeberg", 5], ["Kleiner Weg", "", "Südstadt", 3], ["Kleiststraße", "", "Nord", 2], ["Klopstockstraße", "", "Nord", 2], ["Klostergasse", "", "Altstadt", 1], ["Kölner Straße", "1–59", "Südstadt", 3], ["Koppelweg", "", "Auenrode", 6], ["Kormoranweg", "", "Am Fuchsweg", 4], ["Kornmarkt", "", "Altstadt", 1], ["Krämergasse", "", "Altstadt", 1], ["Kranichweg", "", "Am Fuchsweg", 4], ["Kranzstraße", "", "Altstadt", 1], ["Kreuzgasse", "", "Altstadt", 1], ["Kreuzweg", "", "Kirchwinkel", 6], ["Kurze Straße", "", "Südstadt", 3], ["Küsterweg", "", "Kirchwinkel", 6], ["Lagerstraße", "", "Industriegebiet", 3], ["Lange Straße", "", "Südstadt", 3], ["Lärchenweg", "", "Nord", 2], ["Lerchenweg", "", "Am Fuchsweg", 4], ["Lessingstraße", "", "Nord", 2], ["Libellenweg", "", "Am Fuchsweg", 4], ["Liebigstraße", "", "Südstadt", 3], ["Lindenhang", "", "Nord", 2], ["Lindenhof", "", "Kirchwinkel", 6], ["Lindenplatz", "", "Oberkleeberg", 5], ["Lindenstraße", "1–47 (ungerade)", "Altstadt", 1], ["Lindenstraße", "49–99 (ungerade)", "Südstadt", 3], ["Lokschuppenweg", "", "Südstadt", 3], ["Lortzingstraße", "", "Nord", 2], ["Löwengasse", "", "Altstadt", 1], ["Luisenstraße", "", "Südstadt", 3], ["Marderweg", "", "Am Fuchsweg", 4], ["Margaretenstraße", "", "Südstadt", 3], ["Marienstraße", "", "Südstadt", 3], ["Marktgasse", "", "Altstadt", 1], ["Marktplatz", "", "Altstadt", 1], ["Martinsstraße", "", "Altstadt", 1], ["Matthias-Claudius-Weg", "", "Nord", 2], ["Max-Bruch-Straße", "", "Nord", 2], ["Max-Planck-Straße", "", "Industriegebiet", 3], ["Meisenweg", "", "Am Fuchsweg", 4], ["Mendelssohnstraße", "", "Nord", 2], ["Menzelstraße", "", "Nord", 2], ["Mercatorstraße", "", "Südstadt", 3], ["Mittelstraße", "", "Südstadt", 3], ["Mönchsweg", "", "Kirchwinkel", 6], ["Mörikestraße", "", "Nord", 2], ["Mozartstraße", "", "Nord", 2], ["Mühlengasse", "", "Altstadt", 1], ["Mühlenhof", "", "Oberkleeberg", 5], ["Mühlenweg", "1–40", "Altstadt", 1], ["Mühlenweg", "ab 41", "Südstadt", 3], ["Nelkenstraße", "", "Südstadt", 3], ["Neustraße", "", "Südstadt", 3], ["New-Kleeberg-Straße", "", "Oberkleeberg", 5], ["Nobelstraße", "", "Industriegebiet", 3], ["Nordring", "", "Nord", 2], ["Novalisweg", "", "Nord", 2], ["Oberkleeberger Straße", "", "Oberkleeberg", 5], ["Offenbachstraße", "", "Nord", 2], ["Ölgasse", "", "Altstadt", 1], ["Otterweg", "", "Am Fuchsweg", 4], ["Otto-Hahn-Straße", "", "Industriegebiet", 3], ["Otto-Lilienthal-Straße", "", "Industriegebiet", 3], ["Panoramaweg", "", "Nord", 2], ["Pappelallee", "", "Nord", 2], ["Parkstraße", "", "Nord", 2], ["Pastor-Lenzen-Weg", "", "Nord", 2], ["Pastoratsweg", "", "Kirchwinkel", 6], ["Pfarrgasse", "", "Altstadt", 1], ["Pflaumenweg", "", "Oberkleeberg", 5], ["Pieczątkowoer Straße", "", "Nord", 2], ["Pirolweg", "", "Am Fuchsweg", 4], ["Platanenallee", "", "Südstadt", 3], ["Postgasse", "", "Altstadt", 1], ["Postweg", "", "Südstadt", 3], ["Prinzenstraße", "", "Südstadt", 3], ["Pulverturmstraße", "", "Altstadt", 1], ["Querstraße", "", "Südstadt", 3], ["Rathausplatz", "", "Altstadt", 1], ["Rebhuhnweg", "", "Am Fuchsweg", 4], ["Rehweg", "", "Am Fuchsweg", 4], ["Reiherweg", "", "Am Fuchsweg", 4], ["Riemenschneiderweg", "", "Nord", 2], ["Rilkeweg", "", "Nord", 2], ["Ringstraße", "", "Südstadt", 3], ["Ringweg", "", "Oberkleeberg", 5], ["Rodeweg", "", "Auenrode", 6], ["Röntgenstraße", "", "Südstadt", 3], ["Rosenhügel", "", "Nord", 2], ["Rosenstraße", "", "Südstadt", 3], ["Rotkehlchenweg", "", "Am Fuchsweg", 4], ["Rudolf-Diesel-Straße", "", "Industriegebiet", 3], ["Saint-Renard-Platz", "", "Nord", 2], ["Salzgasse", "", "Altstadt", 1], ["Sandstraße", "", "Südstadt", 3], ["Sandweg", "", "Auenrode", 6], ["Schienenweg", "", "Südstadt", 3], ["Schilfweg", "", "Auenrode", 6], ["Schillerstraße", "", "Nord", 2], ["Schlachthofstraße", "", "Südstadt", 3], ["Schlehenweg", "", "Oberkleeberg", 5], ["Schmetterlingsweg", "", "Am Fuchsweg", 4], ["Schmiedegasse", "", "Altstadt", 1], ["Schmiedestraße", "", "Industriegebiet", 3], ["Schubertstraße", "", "Nord", 2], ["Schulgasse", "", "Oberkleeberg", 5], ["Schulstraße", "", "Altstadt", 1], ["Schulweg", "", "Kirchwinkel", 6], ["Schumannstraße", "", "Nord", 2], ["Schützenstraße", "ungerade Hausnummern", "Altstadt", 1], ["Schützenstraße", "gerade Hausnummern", "Nord", 2], ["Schwalbenweg", "", "Am Fuchsweg", 4], ["Silcherweg", "", "Nord", 2], ["Sonnenhang", "", "Nord", 2], ["Spechtweg", "", "Am Fuchsweg", 4], ["Speicherstraße", "", "Südstadt", 3], ["Spitzwegstraße", "", "Nord", 2], ["Sportplatzweg", "", "Nord", 2], ["Starenweg", "", "Am Fuchsweg", 4], ["Steinweg", "", "Kirchwinkel", 6], ["Stellwerkstraße", "", "Südstadt", 3], ["Sternstraße", "", "Altstadt", 1], ["Storchenweg", "", "Am Fuchsweg", 4], ["Südring", "", "Südstadt", 3], ["Talstraße", "", "Nord", 2], ["Tannenweg", "", "Nord", 2], ["Telemannweg", "", "Nord", 2], ["Theodor-Storm-Straße", "", "Nord", 2], ["Torstraße", "", "Altstadt", 1], ["Uferpromenade", "", "Südstadt", 3], ["Uferstraße", "", "Südstadt", 3], ["Uferweg", "", "Auenrode", 6], ["Uhlandstraße", "", "Nord", 2], ["Uhuweg", "", "Am Fuchsweg", 4], ["Ulmenweg", "", "Nord", 2], ["Viktoriastraße", "", "Südstadt", 3], ["Vulkanstraße", "", "Südstadt", 3], ["Wacholderweg", "", "Nord", 2], ["Wachtelweg", "", "Am Fuchsweg", 4], ["Waldstraße", "", "Kirchwinkel", 6], ["Wallstraße", "", "Altstadt", 1], ["Webergasse", "", "Altstadt", 1], ["Weidenhof", "", "Auenrode", 6], ["Weidenweg", "", "Nord", 2], ["Weidenweg (Auenrode)", "", "Auenrode", 6], ["Werkstättenweg", "", "Industriegebiet", 3], ["Werkstraße", "", "Südstadt", 3], ["Wielandstraße", "", "Nord", 2], ["Wiesengrund", "", "Oberkleeberg", 5], ["Wiesenhang", "", "Nord", 2], ["Wiesenstraße", "", "Südstadt", 3], ["Wiesenweg (Auenrode)", "", "Auenrode", 6], ["Wiesenweg (Kirchwinkel)", "", "Kirchwinkel", 6], ["Wildkatzenweg", "", "Am Fuchsweg", 4], ["Wilhelmstraße", "", "Südstadt", 3], ["Zaunkönigweg", "", "Am Fuchsweg", 4], ["Zehntweg", "", "Oberkleeberg", 5], ["Ziegeleiweg", "", "Südstadt", 3], ["Zur Kläranlage", "", "Industriegebiet", 3]];
var BEZIRK = {1: [1, 0, 'Montag', 'Altstadt'], 2: [2, 1, 'Dienstag', 'Nord'], 3: [3, 0, 'Mittwoch', 'Südstadt, Industriegebiet'], 4: [4, 1, 'Donnerstag', 'Am Fuchsweg'], 5: [5, 0, 'Freitag', 'Oberkleeberg'], 6: [1, 1, 'Montag', 'Auenrode, Kirchwinkel']};
S[242] = {suchwoerter: 'Abfuhr Termine Bezirk Straße Leerung Stadtbezirk Ortsteil ' + STR.map(function (x) { return x[0]; }).join(' '), stand: '02.01.2009', html: function () {
  var namen = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
  var feiertag = {'2009-12-25': '2009-12-28'};
  function kw(d) { var t = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate())); var n = t.getUTCDay() || 7; t.setUTCDate(t.getUTCDate() + 4 - n); var j = new Date(Date.UTC(t.getUTCFullYear(), 0, 1)); return Math.ceil(((t - j) / 86400000 + 1) / 7); }
  function iso(d) { return d.getUTCFullYear() + '-' + ('0' + (d.getUTCMonth() + 1)).slice(-2) + '-' + ('0' + d.getUTCDate()).slice(-2); }
  function f(d) {
    var verschoben = feiertag[iso(d)];
    if (verschoben) { var v = new Date(verschoben + 'T00:00:00Z'); return namen[v.getUTCDay()] + ' ' + ('0' + v.getUTCDate()).slice(-2) + '.' + ('0' + (v.getUTCMonth() + 1)).slice(-2) + '.*'; }
    return namen[d.getUTCDay()] + ' ' + ('0' + d.getUTCDate()).slice(-2) + '.' + ('0' + (d.getUTCMonth() + 1)).slice(-2) + '.';
  }
  var h = '<p>Bitte stellen Sie Ihre Abfallbehälter am Abfuhrtag bis 6:00 Uhr an den Straßenrand. Den Abfuhrbezirk für Ihre Straße entnehmen Sie dem Straßenverzeichnis. Das Stadtgebiet ist in sechs Abfuhrbezirke eingeteilt.</p>' +
    '<h3 class="zw">Straßenverzeichnis</h3><p><label for="strfilter">Straße suchen:</label> <input type="text" id="strfilter" size="30" oninput="MS.strFilter()"> <span id="stranzahl" class="klein" aria-live="polite"></span></p>' +
    '<div tabindex="0" role="region" aria-label="Straßenverzeichnis" style="height:320px;overflow-y:scroll;border:1px solid #ccd5df"><table class="tab" id="strtab" style="margin:0"><tr><th>Straße</th><th>Hausnummern</th><th>Stadtbezirk / Ortsteil</th><th>Bezirk</th></tr>' +
    STR.map(function (x) { return '<tr><td>' + x[0] + '</td><td>' + (x[1] || 'alle') + '</td><td>' + x[2] + '</td><td>' + x[3] + '</td></tr>'; }).join('') + '</table></div>' +
    '<p class="klein">Nicht aufgeführte Straßen und Hausnummern erfragen Sie bitte bei der Abfallwirtschaft unter ' + tel('6 60') + '. Nach der kommunalen Neugliederung 1975 bestehende gleichlautende Straßennamen sind durch die Angabe des Ortsteils zu unterscheiden.</p>' +
    '<h3 class="zw">Abfuhrtermine Oktober bis Dezember 2009</h3>';
  [1, 2, 3, 4, 5, 6].forEach(function (b) {
    var tag = BEZIRK[b][0], off = BEZIRK[b][1], rest = [], bio = [], pap = [], gelb = [];
    for (var d = new Date(Date.UTC(2009, 9, 1)); d <= new Date(Date.UTC(2009, 11, 31)); d = new Date(d.getTime() + 86400000)) {
      if (d.getUTCDay() !== tag) continue;
      var w = kw(d) + off;
      if (w % 2 === 0) rest.push(f(d)); else { bio.push(f(d)); gelb.push(f(d)); }
      if ((w - 42 + 52) % 4 === b % 4) pap.push(f(d));
    }
    h += '<table class="tab"><tr><th colspan="2">Bezirk ' + b + ': ' + BEZIRK[b][3] + ' (Abfuhrtag: ' + BEZIRK[b][2] + ')</th></tr>' +
      '<tr><td width="110">Restmüll</td><td>' + rest.join(', ') + '</td></tr><tr><td>Bioabfall</td><td>' + bio.join(', ') + '</td></tr>' +
      '<tr><td>Papier</td><td>' + (pap.join(', ') || '–') + '</td></tr><tr><td>Gelber Sack</td><td>' + gelb.join(', ') + '</td></tr></table>';
  });
  return h + '<p class="klein">* Feiertagsverschiebung. Weitere Verschiebungen werden im <a href="' + u(140) + '">Amtsblatt</a> bekannt gegeben. Der Abfallkalender 2010 wird im Dezember an alle Haushalte verteilt.</p>';
}, init: function () { MS.strFilter(); }};
MS.strFilter = function () {
  var q = document.getElementById('strfilter').value.toLowerCase(), n = 0, rows = document.getElementById('strtab').rows;
  for (var i = 1; i < rows.length; i++) { var v = rows[i].textContent.toLowerCase().indexOf(q) > -1; rows[i].style.display = v ? '' : 'none'; if (v) n++; }
  document.getElementById('stranzahl').textContent = n + ' Einträge';
};

S[243] = {suchwoerter: 'Sperrmüllkarte Sperrgut Möbel Abholung', html:
  '<p>Jeder Haushalt kann zweimal im Kalenderjahr Sperrmüll bis zu einer Menge von 3 m³ gebührenfrei abholen lassen.</p>' +
  '<h3 class="zw">So melden Sie Sperrmüll an</h3><p>Füllen Sie die ' + MS.formLink('sperr') + ' vollständig aus und senden Sie sie per Post an die Abfallwirtschaft der Stadt Musterstadt oder werfen Sie sie in den Briefkasten am Neuen Rathaus. Die Anmeldung muss mindestens 14 Tage vor dem gewünschten Abholtermin vorliegen.</p>' +
  '<p>Die Abholung erfolgt an einem festen Sperrmülltermin Ihres Abfuhrbezirks. Die Termine des 2. Halbjahres 2009 sind im <a href="' + u(140) + '">Amtsblatt Nr. 15/2009</a> vom 07.08.2009 bekannt gemacht. Den Termin teilen wir Ihnen schriftlich mit. Bitte stellen Sie den Sperrmüll erst am Vorabend ab 18:00 Uhr an den Straßenrand.</p>' +
  '<div class="hinweis">Die Online-Anmeldung von Sperrmüll ist derzeit nicht verfügbar.</div>' +
  '<h3 class="zw">Was ist Sperrmüll?</h3><p>Sperrmüll sind Einrichtungsgegenstände, die wegen ihrer Größe nicht in die Restmülltonne passen, zum Beispiel Möbel, Matratzen, Teppiche und Fahrräder.</p>' +
  '<p><b>Kein Sperrmüll</b> sind Elektro- und Elektronikgeräte, Bauschutt, Autoreifen, Sonderabfälle und Gartenabfälle. Elektrogeräte geben Sie bitte am Wertstoffhof ab.</p>' +
  '<p>Kontakt: Norbert Wirtz, Telefon ' + tel('6 60') + '</p>'};

/* ---------- Standesamt ---------- */
S[248] = {suchwoerter: 'Heirat Trauung Hochzeit Urkunde Trauzimmer', html:
  '<p>Das Standesamt beurkundet Geburten, Eheschließungen und Sterbefälle in Musterstadt und stellt Personenstandsurkunden aus.</p>' +
  '<h3 class="zw">Trauungen</h3><p>Trauungen finden im historischen Trauzimmer des Alten Rathauses am Marktplatz statt. Das Trauzimmer bietet Platz für 30 Gäste.</p>' +
  '<table class="tab"><tr><th>Trautermine</th><th></th></tr><tr><td>Dienstag und Freitag</td><td>10:00–12:00 Uhr</td></tr><tr><td>jeden ersten Samstag im Monat</td><td>10:00–12:00 Uhr (Zuschlag)</td></tr></table>' +
  '<p>Die Anmeldung zur Eheschließung ist frühestens sechs Monate vor dem Wunschtermin möglich. Siehe ' + '<a href="' + u(2008) + '">Eheschließung (Anmeldung)</a>' + '.</p>' +
  '<p>Für den Kirchenaustritt ist in Nordrhein-Westfalen nicht das Standesamt, sondern das Amtsgericht zuständig.</p>' +
  '<h3 class="zw">Kontakt</h3><p>Brigitte Schuster, Standesbeamtin<br>Neues Rathaus, Raum 130<br>Telefon: ' + tel('3 50') + '<br>Sprechzeiten: Mo, Di, Fr 8:00–12:00 Uhr, Do 14:00–18:00 Uhr</p>'};


/* ---------- FAQ ---------- */
var FAQ = [
  ['Allgemeines', null],
  ['Muss ich persönlich erscheinen?', 'Die persönliche Vorsprache ist bei sämtlichen Dienstleistungen erforderlich, bei denen die persönliche Vorsprache erforderlich ist. Im Übrigen ist eine Vertretung unter Vorlage einer schriftlichen Vollmacht sowie des Ausweisdokumentes der vertretenen Person zulässig, soweit nicht im Einzelfall die persönliche Vorsprache angeordnet wird.'],
  ['Warum ist das Bürgeramt mittwochs geschlossen?', 'Der Mittwoch dient der verwaltungsinternen Abarbeitung der an den publikumsoffenen Tagen eingegangenen Vorgänge (sogenannter Innendiensttag). Eine Inanspruchnahme der Dienstleistungen des Bürgeramtes ist an diesem Tag aus organisatorischen Gründen nicht vorgesehen.'],
  ['Ist das Bürgeramt am 11.11. geöffnet?', 'Das Bürgeramt ist am 11.11. zu den regulären Öffnungszeiten geöffnet. Ab 11:11 Uhr kann es aufgrund brauchtumsbedingter personeller Abwesenheiten zu Verzögerungen im Dienstbetrieb kommen.'],
  ['Gibt es Parkplätze?', 'Hinter dem Neuen Rathaus stehen Parkflächen zur Verfügung. Die Höchstparkdauer beträgt 60 Minuten. Es wird empfohlen, die voraussichtliche Bearbeitungsdauer des jeweiligen Anliegens zuzüglich etwaiger Wartezeiten bei der Wahl der Parkdauer angemessen zu berücksichtigen.'],
  ['Ist das Bürgeramt barrierefrei erreichbar?', 'Am Seiteneingang (Rathausplatz, rechts) befindet sich eine Rufanlage. Nach Betätigung der Rufanlage werden Sie von einer Mitarbeiterin oder einem Mitarbeiter abgeholt. Ein ebenerdiger Zugang zum Haupteingang befindet sich in Planung.'],
  ['Darf ich meinen Hund mitbringen?', 'Das Mitführen von Tieren in den Diensträumen der Stadtverwaltung ist mit Ausnahme von Assistenzhunden nicht gestattet. Für während des Behördenganges vor dem Gebäude angeleinte Hunde wird seitens der Stadt keine Haftung übernommen.'],
  ['Wartemarken und Termine', null],
  ['Kann ich mehrere Anliegen mit einer Wartemarke erledigen?', 'Nein. Für jedes Anliegen ist eine gesonderte Wartemarke zu ziehen. Dies gilt auch für Anliegen, die in einem sachlichen Zusammenhang stehen, sowie für Anliegen, die erst durch die Bearbeitung eines vorangegangenen Anliegens entstehen.'],
  ['Ich habe für mein zweites Anliegen eine Wartemarke gezogen. Währenddessen wurde meine erste Nummer aufgerufen. Was nun?', 'In diesem Fall ist die Ziehung einer neuen Wartemarke erforderlich. Eine Wiederaufnahme bereits aufgerufener Wartemarken in den Aufrufvorgang ist systemseitig nicht vorgesehen.'],
  ['Meine Nummer wurde aufgerufen, während ich am Kopierer war.', 'Es wird gebeten, sich während der Wartezeit im Sichtbereich der Aufrufanzeige aufzuhalten. Im Übrigen wird auf die vorstehende Antwort verwiesen.'],
  ['Ich habe meine Wartemarke verloren.', 'Bitte ziehen Sie eine neue Wartemarke. Aufgefundene Wartemarken können im Fundbüro abgegeben werden. Ein Anspruch auf Aufruf der ursprünglichen Wartemarke ergibt sich aus der Abgabe nicht.'],
  ['Ich habe einen Termin. Muss ich trotzdem eine Wartemarke ziehen?', 'Ja. Die Terminvereinbarung begründet einen Anspruch auf bevorzugten Aufruf, ersetzt jedoch nicht die Ziehung einer Wartemarke. Bitte wählen Sie am Wartemarkenautomaten die Taste „Termin“.'],
  ['Ich bin zu früh. Kann ich früher drankommen?', 'Ein Aufruf vor dem vereinbarten Termin ist nur möglich, sofern zum Zeitpunkt Ihres Erscheinens keine anderen Termine anstehen. Hiervon ist in der Regel nicht auszugehen.'],
  ['Ich finde online keinen freien Termin. Was kann ich tun?', 'Termine werden fortlaufend freigeschaltet. Es wird empfohlen, die Online-Terminvereinbarung in regelmäßigen Abständen aufzurufen. Alternativ steht die telefonische Terminvereinbarung zur Verfügung.'],
  ['Was passiert, wenn ich meinen Termin nicht wahrnehmen kann?', 'Nicht wahrgenommene Termine sind unter Angabe der Buchungsnummer abzusagen, um anderen Bürgerinnen und Bürgern eine Inanspruchnahme zu ermöglichen. Eine Verlegung ist nicht möglich. Es ist ein neuer Termin zu vereinbaren.'],
  ['Anträge und Formulare', null],
  ['Kann ich ein Formular per E-Mail einreichen?', 'Nein. Anträge bedürfen, soweit nicht ausdrücklich etwas anderes bestimmt ist, der Schriftform. Die Übermittlung per E-Mail genügt dem Schriftformerfordernis nicht.'],
  ['Kann ich ein Formular per Telefax einreichen?', 'Die Übermittlung per Telefax ist zur Fristwahrung zulässig, sofern das Original innerhalb von drei Werktagen nachgereicht wird. Maßgeblich für die Fristwahrung ist der Eingang des Telefaxes, für die Bearbeitung der Eingang des Originals.'],
  ['Warum muss ich mit blauem Kugelschreiber unterschreiben?', 'Die Verwendung eines blauen Schreibmittels dient der eindeutigen Unterscheidbarkeit des Originals von Ablichtungen. Mit schwarzem Schreibmittel unterzeichnete Anträge gelten nicht als ordnungsgemäß unterzeichnet. Bleistift ist unzulässig.'],
  ['Was ist ein Ordnungsmerkmal?', 'Ein Ordnungsmerkmal ist ein Merkmal, das der Ordnung dient.'],
  ['Kann ich eine Vorgangsnummer erhalten, bevor mein Antrag eingegangen ist?', 'Die Erteilung einer Vorgangsnummer setzt grundsätzlich das Vorliegen eines Vorgangs voraus. Ausnahmen von diesem Grundsatz ergeben sich aus den einschlägigen Vordrucken.'],
  ['Was ist der Unterschied zwischen einer Bescheinigung und einem Negativattest?', 'Eine Bescheinigung bescheinigt das Vorliegen eines Sachverhaltes. Ein Negativattest bescheinigt, dass eine Bescheinigung nicht erforderlich ist. Ein Negativattest ist insofern ebenfalls eine Bescheinigung.'],
  ['Warum brauche ich eine Meldebescheinigung? Die Stadt weiß doch, wo ich wohne.', 'Die Kenntnis der Meldebehörde ersetzt nicht den Nachweis gegenüber der Stelle, die den Nachweis verlangt. Dies gilt auch dann, wenn es sich bei beiden Stellen um die Stadtverwaltung handelt.'],
  ['Zahlung', null],
  ['Kann ich im Bürgeramt mit EC-Karte bezahlen?', 'Ja, sofern das Kartenlesegerät betriebsbereit ist. Bei Störungen ist die Zahlung in bar zu leisten. Gebühren für Leistungen, die an der Stadtkasse zu entrichten sind, können im Bürgeramt nicht entgegengenommen werden.'],
  ['Wo finde ich die Haushaltsstelle für meine Einzahlung?', 'Die Haushaltsstellen sind im Haushaltsplan der Stadt Musterstadt ausgewiesen. Den Mitarbeiterinnen und Mitarbeitern der Stadtkasse ist die Erteilung von Auskünften über Haushaltsstellen aus Gründen der Kassensicherheit nicht gestattet.'],
  ['Gibt es im Bürgeramt einen Kopierer?', 'Ja. Die Nutzung ist kostenpflichtig (0,10 € je Seite) und ausschließlich mit Münzgeld möglich. Eine Herausgabe von Wechselgeld erfolgt nicht. Die Stadtkasse ist für den Kopierer nicht zuständig.'],
  ['Sonstiges', null],
  ['Ich möchte mich beschweren.', 'Beschwerden sind schriftlich an den Bürgermeister zu richten. Beschwerden über die Bearbeitung von Beschwerden werden im Ausschuss für Anregungen und Beschwerden beraten.'],
  ['Die Internetseite wird in meinem Browser nicht richtig angezeigt.', 'Das Internetangebot der Stadt Musterstadt ist für den Internet Explorer 6 bei einer Bildschirmauflösung von 1024 × 768 Bildpunkten optimiert. Für Darstellungsfehler in anderen Browsern wird keine Gewähr übernommen.'],
  ['Meine Frage ist hier nicht aufgeführt.', 'Fragen, die hier nicht aufgeführt sind, gehören nicht zu den häufig gestellten Fragen. Bitte wenden Sie sich an die Zentrale unter (0 12 34) 5 67-0.']
];
S[206] = {stand: '14.08.2008', suchwoerter: FAQ.map(function (f) { return f[0] + ' ' + (f[1] || ''); }).join(' '), html: function () {
  var nr = 0;
  return '<p>Nachfolgend finden Sie Antworten auf häufig gestellte Fragen im Zusammenhang mit der Inanspruchnahme der Dienstleistungen des Bürgeramtes. Die Antworten ersetzen keine Rechtsberatung und sind nicht rechtsverbindlich.</p>' +
    FAQ.map(function (f) { return f[1] === null ? '<h2>' + f[0] + '</h2>' : '<h3 class="zw">' + (++nr) + '. ' + f[0] + '</h3><p>' + f[1] + '</p>'; }).join('');
}};
})();
