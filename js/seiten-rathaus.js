/* KommunalCMS 3.2 - Inhalte: Rathaus & Politik */
window.MS = window.MS || {};
MS.seiten = MS.seiten || {};
(function () {
var S = MS.seiten;
var u = function (id, extra) { return 'index.html?id=' + id + '&amp;L=0' + (extra || ''); };
var a = function (id, text) { return '<a href="' + u(id) + '">' + text + '</a>'; };
var tel = function (d) { return '(0 12 34) 5 67-' + d; };
var pdf = function (datei, text, groesse) { return '<a href="pdf/' + datei + '" data-ereignis="pdf">' + text + '</a> <span class="pdf">(PDF, ' + groesse + ')</span>'; };

/* ---------- Übersicht ---------- */
S[112] = {html:
  '<p>Hier finden Sie Informationen über die Arbeit von Rat und Verwaltung der Stadt Musterstadt.</p>' +
  '<ul class="uebersicht"><li>' + a(113, 'Grußwort des Bürgermeisters') + '</li><li>' + a(118, 'Ämter &amp; Ansprechpartner') + '</li><li>' + a(124, 'Rat &amp; Ausschüsse') + ' mit ' + a(125, 'Ratsinformationssystem') + '</li><li>' + a(131, 'Haushalt 2009') + '</li><li>' + a(135, 'Ortsrecht &amp; Satzungen') + '</li><li>' + a(140, 'Amtsblatt') + ' und ' + a(142, 'Öffentliche Bekanntmachungen') + '</li><li>' + a(147, 'Pressemitteilungen') + '</li><li>' + a(151, 'Stellenangebote') + '</li><li>' + a(155, 'Bürgerbeteiligung') + '</li></ul>'};

/* ---------- Grußwort ---------- */
S[113] = {html:
  '<div class="gruss"><svg width="110" height="136" viewBox="0 0 74 92" aria-label="Bürgermeister Klaus-Dieter Wellbrock"><rect width="74" height="92" fill="#cfd6de"/><circle cx="37" cy="34" r="16" fill="#e6c4a2"/><path d="M21 30 q2 -16 16 -16 q14 0 16 16 q-4 -8 -16 -8 q-12 0 -16 8" fill="#8d8478"/><path d="M8 92 q4 -30 29 -30 q25 0 29 30z" fill="#2d3a4a"/><path d="M33 62 l4 14 l4 -14z" fill="#9b2a1a"/><rect x="26" y="70" width="10" height="3" fill="#e8b32a"/></svg>' +
  '<p>Liebe Bürgerinnen und Bürger,<br>liebe Gäste unserer Stadt,</p>' +
  '<p>Musterstadt ist eine Stadt mit Geschichte und mit Zukunft. Seit 1147 urkundlich erwähnt, seit 1314 mit Stadtrechten ausgestattet und seit über einem Jahrhundert als „Stempelstadt“ bekannt, verbinden wir Tradition und Fortschritt wie kaum eine andere Kommune an der Muster.</p>' +
  '<p>Mit dem neuen Internetauftritt, den wir im Jahr 2007 auf das moderne System KommunalCMS umgestellt haben, möchten wir Ihnen den Weg ins Rathaus erleichtern. Viele Formulare stehen Ihnen bereits zum Herunterladen zur Verfügung, Termine im Bürgeramt können Sie bequem online vereinbaren.</p>' +
  '<p>Auch in diesem Jahr haben wir viel bewegt. Der Kreisverkehr an der Lindenstraße wird noch vor Weihnachten für den Verkehr freigegeben und die Sicherheit an einem der wichtigsten Knotenpunkte unserer Stadt deutlich verbessern. Für das Hallenbad prüfen wir weiterhin alle Möglichkeiten.</p>' +
  '<p>Besonders freue ich mich auf den Laternenlauf am 11. November, bei dem ich Sie gemeinsam mit unserer Stadtfüchsin Flora herzlich begrüßen möchte.</p>' +
  '<p>Mein Vorzimmer erreichen Sie unter ' + tel('1 01') + '. Ich freue mich auf Ihre Anregungen.</p>' +
  '<p>Herzliche Grüße<br><i>Ihr Klaus-Dieter Wellbrock</i><br>Bürgermeister der Stadt Musterstadt</p></div>' +
  '<h3 class="zw">Zur Person</h3><p>Klaus-Dieter Wellbrock wurde 1951 in Musterstadt geboren. Nach seiner Ausbildung im gehobenen Verwaltungsdienst war er unter anderem Leiter des Hauptamtes der Stadt Musterstadt. Seit 1999 ist er hauptamtlicher Bürgermeister. Er ist verheiratet, hat zwei erwachsene Kinder und ist Mitglied der St.-Sebastianus-Schützenbruderschaft, der KG Musterstädter Funken und des Heimatvereins.</p>'};

/* ---------- Ämter & Ansprechpartner ---------- */
var VERW = [
  ['Dezernat I – Bürgermeister Klaus-Dieter Wellbrock', [
    ['Bürgermeister', 'Klaus-Dieter Wellbrock', '1 00', '301'], ['Vorzimmer', 'Gisela Dahmen', '1 01', '302'], ['Pressestelle', 'Markus Feldhaus', '1 10', '305'],
    ['Gleichstellungsbeauftragte', 'Petra Wintgens', '1 20', '215'], ['Datenschutzbeauftragter', 'Uwe Kessler', '1 25', '216'], ['IT-Abteilung', 'Jens Jansen', '1 40', '012'],
    ['Büro des Rates', 'Gisela Dahmen', '1 01', '302'], ['Hausmeister', 'Willi Pütz', '1 99', 'Loge EG']]],
  ['Dezernat II – Beigeordneter und Kämmerer Dr. Rainer Hollmann', [
    ['Kämmerer', 'Dr. Rainer Hollmann', '2 00', '310'], ['Stadtkasse', 'Monika Esser', '2 30', '115'], ['Steueramt, Hunde- und Vergnügungssteuer', 'Elke Busch', '2 40', '118'],
    ['Steueramt, Grund- und Gewerbesteuer', 'Sachbearbeitung', '2 41', '119'], ['Wirtschaftsförderung', 'Oliver Thiel', '8 00', '312']]],
  ['Dezernat III – Bürgerdienste, Ordnung und Soziales (Leitung: Bürgermeister)', [
    ['Bürgeramt', 'Renate Schuster und Team', '3 00', 'EG, Schalter 1–6'], ['Ordnungsamt', 'Bernd Krämer', '3 20', '120'], ['Kommunaler Ordnungsdienst', 'Derya Yıldız', '3 25', 'Außendienst'],
    ['Fundbüro', 'Klaus Möller', '3 40', '018'], ['Standesamt', 'Brigitte Schuster', '3 50', '130'], ['Amt für Soziales und Wohnen', 'Sachbearbeitung', '5 10', '228'],
    ['Jugendamt, Kita-Verwaltung', 'Sandra Kemper', '5 40', '220'], ['Jugendzentrum „Alte Post“', 'Sven Brandt', '5 60', 'Bahnhofstraße 2'], ['Stadtbibliothek', 'Anke Rosenthal', '4 70', 'Kirchstraße 8'], ['Stadtarchiv', 'Dr. Gerd Lennartz', '4 50', 'Altes Rathaus']]],
  ['Dezernat IV – Bauen und Umwelt (kommissarisch: Bürgermeister)', [
    ['Bauaufsicht', 'Rüdiger Hamacher', '6 10', '402'], ['Tiefbauamt', 'Dipl.-Ing. Hartmut Seifert', '6 20', '410'], ['Abfallwirtschaft', 'Norbert Wirtz', '6 60', '405'],
    ['Bauhof und Wertstoffhof', 'Dieter Klinkhammer', '6 80', 'Industriestraße 22'], ['Untere Denkmalbehörde', 'Rüdiger Hamacher', '6 15', '402']]]
];
S[118] = {suchwoerter: VERW.map(function (d) { return d[1].map(function (z) { return z.join(' '); }).join(' '); }).join(' '), html: function () {
  return '<p>Die Stadtverwaltung Musterstadt ist in vier Dezernate gegliedert. Die Telefonnummer setzt sich aus der Vorwahl (0 12 34), der Rufnummer 5 67 und der angegebenen Durchwahl zusammen.</p>' +
    '<div class="hinweis">Die Stelle der Technischen Beigeordneten / des Technischen Beigeordneten ist derzeit unbesetzt. Siehe ' + a(151, 'Stellenangebote') + '.</div>' +
    VERW.map(function (d) {
      return '<h2>' + d[0] + '</h2><table class="tab"><tr><th>Aufgabe</th><th>Ansprechpartner/in</th><th>Durchwahl</th><th>Raum</th></tr>' +
        d[1].map(function (z) { return '<tr><td>' + z[0] + '</td><td>' + z[1] + '</td><td>-' + z[2] + '</td><td>' + z[3] + '</td></tr>'; }).join('') + '</table>';
    }).join('') +
    '<p class="klein">Telefonzentrale: ' + tel('0') + ' · Telefax: ' + tel('1 99') + ' · E-Mail-Adressen nach dem Schema vorname.nachname@stadt-musterstadt.de</p>';
}};

/* ---------- Rat & Ausschüsse ---------- */
var RAT = ['Heribert Lohmar', 'Ursula Kampmann', 'Peter Schiefer', 'Manfred Görgens', 'Karin Schäfer', 'Thomas Frings', 'Gabriele Kuckertz', 'Hans-Werner Lindlar', 'Martina Bley', 'Jörg Habets', 'Josef Hambloch', 'Renate Overath', 'Wolfgang Pesch', 'Birgit Klöckner', 'Stefan Raths', 'Elisabeth Wolters'];
MS.RAT = RAT;
S[124] = {suchwoerter: 'Ratsmitglieder Ausschüsse ' + RAT.join(' '), html: function () {
  return '<p>Der Rat der Stadt Musterstadt besteht aus 38 gewählten Ratsmitgliedern und dem Bürgermeister als Vorsitzendem. Der Rat entscheidet über alle wichtigen Angelegenheiten der Stadt. Die Sitzungen sind grundsätzlich öffentlich. Termine, Tagesordnungen und Niederschriften finden Sie im ' + a(125, 'Ratsinformationssystem') + '.</p>' +
    '<h3 class="zw">Ausschüsse</h3><table class="tab"><tr><th>Ausschuss</th><th>Vorsitz</th></tr>' +
    '<tr><td>Haupt- und Finanzausschuss</td><td>Bürgermeister Klaus-Dieter Wellbrock</td></tr>' +
    '<tr><td>' + a(127, 'Ausschuss für Verkehr') + '</td><td>Manfred Görgens</td></tr>' +
    '<tr><td>Ausschuss für Planung und Bauen</td><td>Heribert Lohmar</td></tr>' +
    '<tr><td>Ausschuss für Anregungen und Beschwerden</td><td>Ursula Kampmann</td></tr>' +
    '<tr><td>Ausschuss für Schule, Jugend und Soziales</td><td>Martina Bley</td></tr>' +
    '<tr><td>Ausschuss für Kultur und Heimatpflege</td><td>Hans-Werner Lindlar</td></tr>' +
    '<tr><td>Rechnungsprüfungsausschuss</td><td>Peter Schiefer</td></tr></table>' +
    '<h3 class="zw">Ortsteile</h3><p>Für den Ortsteil Oberkleeberg nimmt Ortsvorsteher Josef Hambloch die Belange des Ortsteils gegenüber Rat und Verwaltung wahr.</p>' +
    '<p>Die Geschäftsordnung regelt den Ablauf der Sitzungen: ' + a(126, 'Geschäftsordnung des Rates') + '.</p>';
}};

S[126] = {suchwoerter: 'Frist Tagesordnung Anregung Beschwerde § 24 Eingangsstempel Einladung', html:
  '<p>Geschäftsordnung für den Rat, die Ausschüsse und die Bezirksvertretungen der Stadt Musterstadt vom 14.11.1995 in der Fassung der 4. Änderung vom 21.09.2004. Nachfolgend die für Bürgerinnen und Bürger wichtigsten Bestimmungen. Den vollständigen Text finden Sie als ' + pdf('geschaeftsordnung-rat.pdf', 'PDF-Dokument', '10 KB') + '.</p>' +
  '<h3 class="zw">§ 2 Einberufung</h3><p>(1) Der Bürgermeister beruft den Rat und die Ausschüsse ein. Die Einladung muss den Mitgliedern mindestens sieben volle Kalendertage vor dem Sitzungstag zugehen.<br>(2) Zeit, Ort und Tagesordnung der Sitzungen sind spätestens am dritten Tag vor der Sitzung im Amtsblatt öffentlich bekannt zu machen.</p>' +
  '<h3 class="zw">§ 3 Tagesordnung</h3><p>(1) Der Bürgermeister setzt die Tagesordnung fest.<br>(2) Anregungen und Beschwerden nach § 24 der Gemeindeordnung NRW werden in die Tagesordnung der nächsten Sitzung des Ausschusses für Anregungen und Beschwerden aufgenommen, wenn sie spätestens am <b>21. Tag vor der Sitzung</b> schriftlich beim Bürgermeister eingegangen sind. Maßgeblich ist der Eingangsstempel der Verwaltung.<br>(3) Später eingehende Anregungen werden in der darauf folgenden Sitzung behandelt.<br>(4) Anregungen, die nicht in die Zuständigkeit der Stadt fallen, werden an die zuständige Stelle weitergeleitet.</p>' +
  '<h3 class="zw">§ 6 Öffentlichkeit</h3><p>(1) Die Sitzungen sind öffentlich.<br>(2) Für Personal-, Grundstücks- und Vergabeangelegenheiten sowie für Angelegenheiten, deren Geheimhaltung im Interesse Dritter geboten ist, ist die Öffentlichkeit ausgeschlossen.</p>' +
  '<h3 class="zw">§ 18 Einwohnerfragestunde</h3><p>(1) Zu Beginn jeder ordentlichen Ratssitzung findet eine Einwohnerfragestunde statt. Jede Einwohnerin und jeder Einwohner kann höchstens zwei Fragen stellen.<br>(2) Fragen sind spätestens zehn Tage vor der Sitzung schriftlich einzureichen. Zusatzfragen sind nicht zulässig.</p>' +
  '<h3 class="zw">§ 24 Niederschrift</h3><p>Über die Sitzungen wird eine Niederschrift gefertigt. Die Niederschrift über den öffentlichen Teil wird im Ratsinformationssystem veröffentlicht.</p>'};

S[127] = {html: function () {
  return '<p>Der Ausschuss für Verkehr berät über Straßenbau, Verkehrsplanung, Parkraumbewirtschaftung und den öffentlichen Personennahverkehr.</p>' +
    '<table class="tab"><tr><th colspan="2">Zusammensetzung</th></tr><tr><td>Vorsitzender</td><td>Manfred Görgens</td></tr><tr><td>stellv. Vorsitzende</td><td>Gabriele Kuckertz</td></tr><tr><td>Mitglieder</td><td>Thomas Frings, Jörg Habets, Josef Hambloch, Wolfgang Pesch, Stefan Raths, Karin Schäfer, Elisabeth Wolters</td></tr><tr><td>Verwaltung</td><td>Dipl.-Ing. Hartmut Seifert, Tiefbauamt</td></tr></table>' +
    '<h3 class="zw">Sitzungen 2008/2009</h3>' + MS.sitzungsliste('Ausschuss für Verkehr');
}};

/* ---------- Haushalt ---------- */
S[131] = {suchwoerter: 'Haushaltsplan NKF Haushaltsstelle Produkt Sachkonto Überleitung Kämmerer Ergebnisplan Finanzplan', html:
  '<p>Der Rat der Stadt Musterstadt hat in seiner Sitzung am 05.03.2009 die Haushaltssatzung für das Haushaltsjahr 2009 beschlossen. Der Haushalt 2009 ist der erste Haushalt der Stadt Musterstadt nach dem <b>Neuen Kommunalen Finanzmanagement (NKF)</b>.</p>' +
  '<table class="tab"><tr><th colspan="2">Eckdaten Haushalt 2009</th></tr><tr><td>Ordentliche Erträge</td><td>61.384.200 €</td></tr><tr><td>Ordentliche Aufwendungen</td><td>63.921.500 €</td></tr><tr><td>Jahresergebnis</td><td>−2.537.300 €</td></tr><tr><td>Investitionsauszahlungen</td><td>7.412.000 €</td></tr><tr><td>Kredite für Investitionen</td><td>3.850.000 €</td></tr><tr><td>Höchstbetrag der Kassenkredite</td><td>15.000.000 €</td></tr></table>' +
  '<p>Mit der Umstellung auf NKF ersetzen Produkte und Sachkonten die bisherigen Haushaltsstellen der Kameralistik. Für eine Übergangszeit werden in der Stadtkasse weiterhin die bisherigen Haushaltsstellen verwendet. Eine Überleitung der bisherigen Haushaltsstellen auf die neuen Produkte und Sachkonten finden Sie im Anhang des Haushaltsplans.</p>' +
  '<h3 class="zw">Downloads</h3><ul><li>' + pdf('haushaltssatzung-2009.pdf', 'Haushaltssatzung 2009', '5 KB') + '</li><li>' + pdf('haushaltsplan-2009.pdf', 'Haushaltsplan 2009 (Gesamtwerk, 214 Seiten, eingescannt)', '8,2 MB') + '</li><li>' + pdf('haushaltsrede-2009.pdf', 'Haushaltsrede des Kämmerers vom 12.02.2009', '6 KB') + '</li><li>' + pdf('eroeffnungsbilanz-2009.pdf', 'Entwurf der Eröffnungsbilanz zum 01.01.2009', '6 KB') + '</li></ul>' +
  '<p class="klein">Hinweis: Wegen der Dateigröße empfehlen wir den Download des Haushaltsplans nur mit einer DSL-Verbindung.</p>' +
  '<h3 class="zw">Ansprechpartner</h3><p>Dr. Rainer Hollmann, Beigeordneter und Kämmerer<br>Neues Rathaus, Raum 310<br>Telefon: ' + tel('2 00') + '</p>'};

/* ---------- Ortsrecht ---------- */
var SATZ = [
  ['Hauptsatzung der Stadt Musterstadt', '16.12.1999', '3. Änderung vom 12.12.2006', 'hauptsatzung.pdf', '5 KB'],
  ['Satzung über die Erhebung von Verwaltungsgebühren (Verwaltungsgebührensatzung)', '10.12.1998', '7. Änderung vom 11.12.2008', 'verwaltungsgebuehrensatzung.pdf', '6 KB'],
  ['Hundesteuersatzung', '18.12.2001', '2. Änderung vom 13.12.2007', 'hundesteuersatzung.pdf', '7 KB'],
  ['Vergnügungssteuersatzung', '17.12.2002', '1. Änderung vom 11.12.2008', 'vergnuegungssteuersatzung.pdf', '5 KB'],
  ['Satzung über Sondernutzungen an öffentlichen Straßen (Sondernutzungssatzung)', '21.03.2006', '', 'sondernutzungssatzung.pdf', '6 KB'],
  ['Satzung über den Denkmalbereich „Historischer Marktplatz“ (Denkmalbereichssatzung)', '05.07.1991', '1. Änderung vom 27.06.2005', 'denkmalbereichssatzung.pdf', '7 KB'],
  ['Abfallsatzung', '14.12.2004', '4. Änderung vom 11.12.2008', 'abfallsatzung.pdf', '6 KB'],
  ['Abfallgebührensatzung', '14.12.2004', '5. Änderung vom 11.12.2008', 'abfallgebuehrensatzung.pdf', '5 KB'],
  ['Satzung über die Aufbewahrung von Fundsachen (Fundsachensatzung)', '09.11.1993', '', 'fundsachensatzung.pdf', '5 KB'],
  ['Friedhofssatzung', '12.12.2000', '2. Änderung vom 14.12.2006', 'friedhofssatzung.pdf', '5 KB'],
  ['Satzung über die Erhebung von Elternbeiträgen für Kindertageseinrichtungen', '17.07.2008', '', 'elternbeitragssatzung.pdf', '5 KB'],
  ['Ordnungsbehördliche Verordnung über die Aufrechterhaltung der öffentlichen Sicherheit und Ordnung', '20.05.2003', '1. Änderung vom 15.05.2007', 'ordnungsbehoerdliche-verordnung.pdf', '5 KB'],
  ['Satzung über die Benutzung des Hallenbades', '06.10.1977', 'außer Vollzug seit 01.04.2007', 'hallenbadsatzung.pdf', '4 KB'],
  ['Geschäftsordnung des Rates', '14.11.1995', '4. Änderung vom 21.09.2004', 'geschaeftsordnung-rat.pdf', '10 KB']
];
S[135] = {suchwoerter: SATZ.map(function (s) { return s[0]; }).join(' '), html: function () {
  return '<p>Hier finden Sie die wichtigsten Satzungen und Verordnungen der Stadt Musterstadt. Rechtsverbindlich ist ausschließlich die im ' + a(140, 'Amtsblatt') + ' veröffentlichte Fassung.</p>' +
    '<table class="tab"><tr><th>Satzung</th><th>vom</th><th>zuletzt geändert</th><th>Datei</th></tr>' +
    SATZ.map(function (s) { return '<tr><td>' + s[0] + '</td><td>' + s[1] + '</td><td>' + (s[2] || '–') + '</td><td><a href="pdf/' + s[3] + '" data-ereignis="pdf">PDF</a> <span class="pdf">' + s[4] + '</span></td></tr>'; }).join('') + '</table>' +
    '<p class="klein">Ältere Fassungen können im Stadtarchiv eingesehen werden.</p>';
}};

/* ---------- Ratsinformationssystem ---------- */
/* [id, Gremium, Datum, Uhrzeit, Ort, Status, öffentliche TOPs [[Titel, Text]], nichtöffentliche TOPs] */
var SITZ = [
 [1201, 'Rat', '14.12.2006', '17:00', 'Ratssaal, Neues Rathaus', 'N', [
   ['Einwohnerfragestunde', 'Herr Kevin Stappert fragt, ob Gerüchte zutreffen, wonach das Hallenbad geschlossen werden solle. Der Bürgermeister antwortet, solche Pläne gebe es nicht.'],
   ['Umbau des Knotenpunktes Lindenstraße/Mühlenweg zu einem Kreisverkehrsplatz – Baubeschluss', 'Dipl.-Ing. Seifert erläutert die Planung. Der Kreisverkehr erhält einen Außendurchmesser von 26 m. Die Kosten werden auf 412.000 € geschätzt und sind im Haushalt 2007 unter der Haushaltsstelle 6300.9500 veranschlagt. Mit dem Baubeginn wird im Frühjahr 2007 gerechnet.<br><b>Beschluss:</b> Der Rat beschließt den Umbau des Knotenpunktes gemäß Vorlage 214/2006.<br><i>Abstimmung: mehrheitlich bei 2 Gegenstimmen</i>'],
   ['Haushaltssatzung 2007', 'Der Rat beschließt die Haushaltssatzung 2007.<br><i>Abstimmung: mehrheitlich</i>']],
   ['Grundstücksangelegenheiten', 'Personalangelegenheiten']],
 [1202, 'Ausschuss für Verkehr', '20.03.2008', '17:00', 'Sitzungsraum 1, Neues Rathaus', 'N', [
   ['Kreisverkehr Lindenstraße/Mühlenweg – Sachstand', 'Die Verwaltung berichtet, dass die im Jahr 2007 durchgeführte Ausschreibung mangels wirtschaftlicher Angebote aufgehoben werden musste. Die erneute Ausschreibung ist abgeschlossen. Über die Vergabe wird im nichtöffentlichen Teil beraten. Der Spatenstich ist für Mai 2008 vorgesehen.'],
   ['Bewohnerparken Zone B (Bahnhof) – Anpassung der Parkzeiten', 'Der Ausschuss beschließt die Änderung gemäß Vorlage 031/2008.<br><i>Abstimmung: einstimmig</i>']],
   ['Vergabe von Bauleistungen: Kreisverkehr Lindenstraße/Mühlenweg']],
 [1203, 'Ausschuss für Verkehr', '11.09.2008', '17:00', 'Sitzungsraum 1, Neues Rathaus', 'N', [
   ['Kreisverkehr Lindenstraße/Mühlenweg – Nachtrag 1 (Kampfmittelsondierung)', 'Bei den Erdarbeiten ergab sich ein Verdacht auf Kampfmittel aus dem Zweiten Weltkrieg. Die Sondierung durch den Kampfmittelbeseitigungsdienst verursacht Mehrkosten von 46.000 €. Es wurden keine Kampfmittel gefunden.<br><b>Beschluss:</b> Der Ausschuss nimmt den Nachtrag zur Kenntnis.<br><i>Abstimmung: einstimmig</i>'],
   ['Mitteilungen der Verwaltung', 'Die Haltestelle „Kreishaus“ der Linie 4 wird während der Bauarbeiten um 120 m verlegt.']],
   []],
 [1204, 'Ausschuss für Verkehr', '05.02.2009', '17:00', 'Sitzungsraum 1, Neues Rathaus', 'N', [
   ['Kreisverkehr Lindenstraße/Mühlenweg – Nachtrag 2 (Entwässerung)', 'Dipl.-Ing. Seifert erläutert, dass das vorhandene Entwässerungssystem für den vergrößerten Kreisverkehr nicht ausreichend dimensioniert ist. Die Mehrkosten betragen 212.000 €.<br>RM Hambloch fragt, warum der Außendurchmesser des Kreisverkehrs von 26 m auf 34 m vergrößert worden sei. Dipl.-Ing. Seifert antwortet, die Vergrößerung sei wegen der Schleppkurven für den Schwerlastverkehr erforderlich. RM Hambloch fragt, welcher Schwerlastverkehr gemeint sei, da die Lindenstraße für Fahrzeuge über 7,5 t gesperrt sei. Der Vorsitzende teilt mit, die Frage werde im nichtöffentlichen Teil beantwortet.<br><b>Beschluss:</b> Der Ausschuss empfiehlt dem Rat, den Nachtrag zu genehmigen.<br><i>Abstimmung: mehrheitlich bei 1 Gegenstimme</i>']],
   ['Kreisverkehr Lindenstraße/Mühlenweg – Beantwortung einer Anfrage']],
 [1214, 'Rat', '12.02.2009', '17:00', 'Ratssaal, Neues Rathaus', 'N', [
   ['Einwohnerfragestunde', 'Herr Kevin Stappert fragt nach dem Stand der Planungen für das Hallenbad. Der Bürgermeister antwortet, die Verwaltung prüfe weiterhin alle Möglichkeiten.'],
   ['Haushaltssatzung 2009 (erster Haushalt nach NKF) – Einbringung des Entwurfs', 'Der Kämmerer Dr. Hollmann bringt den Entwurf der Haushaltssatzung 2009 ein. Seine Haushaltsrede liegt als <a href="pdf/haushaltsrede-2009.pdf" data-ereignis="pdf">PDF-Dokument</a> <span class="pdf">(PDF, 6 KB)</span> vor.<br>Die Beratung erfolgt in den Ausschüssen.']],
   ['Grundstücksangelegenheiten']],
 [1205, 'Rat', '05.03.2009', '17:00', 'Ratssaal, Neues Rathaus', 'N', [
   ['Einwohnerfragestunde', 'Herr Kevin Stappert fragt nach dem Stand der Planungen für das Hallenbad. Der Bürgermeister antwortet, die Verwaltung prüfe weiterhin alle Möglichkeiten.'],
   ['Haushaltssatzung 2009 (erster Haushalt nach NKF)', 'Der Kämmerer Dr. Hollmann erläutert die Umstellung auf das Neue Kommunale Finanzmanagement. Der Haushalt weist ein Defizit von 2,54 Mio. € aus.<br><b>Beschluss:</b> Der Rat beschließt die Haushaltssatzung 2009.<br><i>Abstimmung: mehrheitlich bei 9 Gegenstimmen</i>'],
   ['Kreisverkehr Lindenstraße/Mühlenweg – Nachtrag 2', '<b>Beschluss:</b> Der Rat genehmigt den Nachtrag 2 in Höhe von 212.000 €.<br><i>Abstimmung: mehrheitlich bei 3 Gegenstimmen</i>']],
   ['Grundstücksangelegenheiten']],
 [1206, 'Rat', '26.06.2009', '17:00', 'Ratssaal, Neues Rathaus', 'N', [
   ['Einwohnerfragestunde', 'Frau Hermine Lückerath fragt, was die Stadt für den Erhalt der Telefonzelle am Marktplatz unternimmt. Der Bürgermeister antwortet, die Stadt sei für öffentliche Fernsprecher nicht zuständig. Eine Zusatzfrage wird gemäß § 18 der Geschäftsordnung nicht zugelassen.<br>Herr Kevin Stappert fragt nach dem Stand der Planungen für das Hallenbad. Der Bürgermeister antwortet, die Verwaltung prüfe weiterhin alle Möglichkeiten.'],
   ['Kreisverkehr Lindenstraße/Mühlenweg – Nachtrag 3 (Anbindung Lindenstraße 52)', 'Die Verwaltung schlägt vor, im Zuge des Umbaus eine zusätzliche Zufahrt zum Grundstück Lindenstraße 52 herzustellen, um die Erschließung des Bereiches Lindenstraße Süd zu verbessern. Die Kosten betragen 290.000 € und werden außerplanmäßig bereitgestellt.<br>RM Hambloch fragt, wer Eigentümer des Grundstücks sei. Der Bürgermeister verweist auf den Datenschutz.<br><b>Beschluss:</b> Der Rat genehmigt den Nachtrag 3.<br><i>Abstimmung: mehrheitlich bei 4 Gegenstimmen und 2 Enthaltungen</i>'],
   ['Bebauungsplan Nr. 12 „Lindenstraße Süd“, 3. Änderung – Aufstellungsbeschluss', 'Ziel der Änderung ist es, im Bereich Lindenstraße 48 bis 56 Vergnügungsstätten ausnahmsweise zuzulassen.<br><b>Beschluss:</b> Der Rat beschließt die Aufstellung der 3. Änderung.<br><i>Abstimmung: mehrheitlich bei 5 Gegenstimmen</i>']],
   ['Grundstücksangelegenheiten', 'Vergabeangelegenheiten']],
 [1207, 'Ausschuss für Anregungen und Beschwerden', '03.09.2009', '17:00', 'Sitzungsraum 2, Neues Rathaus', 'N', [
   ['Anregung nach § 24 GO NRW: Erhalt der Telefonzelle am Marktplatz (BI „Rettet die Telefonzelle“, 217 Unterschriften)', 'Die Verwaltung teilt mit, dass der Betrieb öffentlicher Fernsprecher Aufgabe privater Telekommunikationsunternehmen sei.<br><b>Beschluss:</b> Der Ausschuss leitet die Anregung an das zuständige Unternehmen weiter.<br><i>Abstimmung: einstimmig</i>'],
   ['Anregung nach § 24 GO NRW: Wiedereröffnung des Hallenbades', 'Die Anregung wird als erledigt betrachtet, da die Verwaltung weiterhin alle Möglichkeiten prüft.<br><i>Abstimmung: einstimmig</i>']],
   []],
 [1208, 'Ausschuss für Verkehr', '17.09.2009', '17:00', 'Sitzungsraum 1, Neues Rathaus', 'N', [
   ['Kreisverkehr Lindenstraße/Mühlenweg – Sachstandsbericht', 'Dipl.-Ing. Seifert berichtet, die Verkehrsfreigabe sei für Dezember 2009 vorgesehen. Die Gesamtkosten einschließlich Planung und Bauleitung belaufen sich nach derzeitigem Stand auf 1.238.400 €.<br>Die anwesende Pressevertreterin bittet um eine Aufstellung der Mehrkosten. Der Vorsitzende verweist auf die Pressemitteilung der Stadt.'],
   ['Anfrage RM Hambloch: Gewichtsbeschränkung Lindenstraße', 'Die Verwaltung teilt mit, dass die Aufhebung der Gewichtsbeschränkung für die Lindenstraße nach Fertigstellung des Kreisverkehrs geprüft wird.']],
   ['Vergabeangelegenheiten']],
 [1209, 'Rat', '24.09.2009', '17:00', 'Ratssaal, Neues Rathaus', 'N', [
   ['Einwohnerfragestunde', 'Herr Kevin Stappert fragt nach dem Stand der Planungen für das Hallenbad. Der Bürgermeister antwortet, die Verwaltung prüfe weiterhin alle Möglichkeiten. Herr Stappert fragt, ob sich seit der letzten Sitzung etwas geändert habe. Die Zusatzfrage wird gemäß § 18 der Geschäftsordnung nicht zugelassen.'],
   ['Resolution zum Erhalt des Kreiskrankenhauses Musterstadt in kommunaler Trägerschaft', 'Der Rat appelliert an den Kreistag des Kreises Muster, das Kreiskrankenhaus nicht zu veräußern.<br><i>Abstimmung: einstimmig</i>'],
   ['Gestaltung der Mittelinsel des Kreisverkehrs Lindenstraße/Mühlenweg (Fuchsskulptur)', 'Die Sitzung wird von 17:04 Uhr bis 17:21 Uhr unterbrochen, da der Beamer nicht funktioniert. Die Vorlage wird anschließend mündlich vorgetragen.<br>RM Pesch beantragt, die Beratung zu vertagen, da die Entwürfe ohne Beamer nicht beurteilt werden könnten. Über den Antrag auf Vertagung wird nach einer Aussprache abgestimmt, in der die Entwürfe ausführlich erörtert werden. Der Antrag wird abgelehnt.<br><b>Beschluss:</b> Der Rat begrüßt die Anregung des Heimatvereins und beauftragt die Verwaltung, Spenden einzuwerben.<br><i>Abstimmung: einstimmig bei 1 Enthaltung</i>'],
   ['Nutzung des Marktplatzes am 11.11.2009', 'Die Verwaltung berichtet, dass am 11.11.2009 sowohl die Sessionseröffnung der KG Musterstädter Funken als auch der Laternenlauf stattfinden. Die KG hat zugesagt, den Marktplatz bis 16:00 Uhr zu räumen.']],
   ['Personalangelegenheiten']],
 [1210, 'Ausschuss für Verkehr', '29.10.2009', '17:00', 'Sitzungsraum 1, Neues Rathaus', 'E', [
   ['Kreisverkehr Lindenstraße/Mühlenweg – Vorbereitung der Verkehrsfreigabe', ''],
   ['Aufhebung der Gewichtsbeschränkung Lindenstraße', ''],
   ['Mitteilungen der Verwaltung', '']], ['Vergabeangelegenheiten']],
 [1211, 'Ausschuss für Planung und Bauen', '22.10.2009', '17:00', 'Sitzungsraum 1, Neues Rathaus', 'T', [], []],
 [1212, 'Ausschuss für Anregungen und Beschwerden', '05.11.2009', '17:00', 'Sitzungsraum 2, Neues Rathaus', 'T', [], []],
 [1213, 'Rat', '12.11.2009', '17:00', 'Ratssaal, Neues Rathaus', 'T', [], []]
];
function datumWert(d) { var t = d.split('.'); return +(t[2] + t[1] + t[0]); }
SITZ.forEach(function (s) {
  MS.struktur.push([s[0], 125, s[1] + ', ' + s[2], {versteckt: true}]);
  S[s[0]] = {titel: s[1] + ' – Sitzung am ' + s[2], suchwoerter: s[6].map(function (t) { return t[0] + ' ' + t[1]; }).join(' ').replace(/<[^>]+>/g, ' '), html: function () {
    var h = '<table class="tab"><tr><td width="110">Gremium</td><td>' + s[1] + '</td></tr><tr><td>Datum</td><td>' + s[2] + ', ' + s[3] + ' Uhr</td></tr><tr><td>Ort</td><td>' + s[4] + '</td></tr><tr><td>Status</td><td>' + {N: 'Niederschrift veröffentlicht', E: 'vorläufige Tagesordnung', T: 'Termin'}[s[5]] + '</td></tr></table>';
    if (s[5] === 'T') return h + '<p>Die Tagesordnung wird fristgerecht bekannt gegeben. Siehe ' + a(126, 'Geschäftsordnung des Rates') + '.</p><p>' + a(125, '« Zurück zur Sitzungsübersicht') + '</p>';
    h += '<h2>' + (s[5] === 'N' ? 'Niederschrift (öffentlicher Teil)' : 'Vorläufige Tagesordnung') + '</h2>';
    if (s[5] === 'N') h += '<p class="klein">Vorsitz: ' + (s[1] === 'Rat' ? 'Bürgermeister Wellbrock' : s[1] === 'Ausschuss für Verkehr' ? 'Manfred Görgens' : 'Ursula Kampmann') + ' · Schriftführung: Gisela Dahmen · Beginn ' + s[3] + ' Uhr</p><p><b>Öffentlicher Teil</b></p>';
    s[6].forEach(function (t, i) { h += '<h3 class="zw">TOP ' + (i + 1) + ': ' + t[0] + '</h3>' + (t[1] ? '<p>' + t[1] + '</p>' : ''); });
    if (s[7].length) h += '<p><b>Nichtöffentlicher Teil</b></p><ul>' + s[7].map(function (t, i) { return '<li>TOP ' + (s[6].length + i + 1) + ': ' + t + '</li>'; }).join('') + '</ul>';
    if (s[5] === 'N') h += '<p class="klein">Die Niederschrift wurde in der folgenden Sitzung genehmigt.</p>';
    return h + '<p>' + a(125, '« Zurück zur Sitzungsübersicht') + '</p>';
  }};
});
MS.sitzungsliste = function (gremium) {
  var liste = SITZ.filter(function (s) { return !gremium || s[1] === gremium; }).sort(function (x, y) { return datumWert(y[2]) - datumWert(x[2]); });
  return '<table class="tab"><tr><th>Datum</th><th>Gremium</th><th>Unterlagen</th></tr>' + liste.map(function (s) {
    return '<tr><td>' + s[2] + '</td><td>' + s[1] + '</td><td>' + a(s[0], {N: 'Niederschrift', E: 'vorl. Tagesordnung', T: 'Termin'}[s[5]]) + '</td></tr>';
  }).join('') + '</table>';
};
S[125] = {html: function () {
  return '<p>Im Ratsinformationssystem finden Sie die Termine, Tagesordnungen und Niederschriften der öffentlichen Sitzungen des Rates und seiner Ausschüsse. Niederschriften werden nach Genehmigung durch das jeweilige Gremium veröffentlicht. Vorlagen stehen derzeit nur den Ratsmitgliedern zur Verfügung.</p>' +
    '<div class="hinweis">Das Ratsinformationssystem enthält Sitzungen ab dem 01.01.2006. Ältere Niederschriften können im Stadtarchiv eingesehen werden.</div>' +
    MS.sitzungsliste() + '<p class="klein">Es werden nur ausgewählte Sitzungen angezeigt. Für eine vollständige Liste wenden Sie sich bitte an das Büro des Rates, ' + tel('1 01') + '.</p>';
}};

/* ---------- Amtsblatt ---------- */
var AB = [
  [19, '09.10.2009', ['Öffentliche Auslegung des Bebauungsplans Nr. 12 „Lindenstraße Süd“, 3. Änderung', 'Verkehrsrechtliche Anordnung: Sperrung Kirchstraße und Mühlenweg am 11.11.2009', 'Nichtamtlicher Teil: Leserbrief des Ortsvorstehers Oberkleeberg zur Gebietsreform 1975']],
  [18, '25.09.2009', ['Niederschrift-Hinweis Rat 24.09.2009', 'Bekanntmachung über die Versteigerung von Fundsachen am 20.11.2009', 'Nichtamtlicher Teil: Einladung der Jagdgenossenschaft Musterstadt']],
  [17, '11.09.2009', ['Tagesordnung Ausschuss für Verkehr 17.09.2009', 'Satzung zur Änderung der Elternbeitragssatzung (Entwurf)']],
  [16, '28.08.2009', ['Tagesordnung Ausschuss für Anregungen und Beschwerden 03.09.2009', 'Nichtamtlicher Teil: Leserbrief zur Telefonzelle am Marktplatz']],
  [15, '07.08.2009', ['Bekanntmachung: Sperrmülltermine 2. Halbjahr', 'Nichtamtlicher Teil: Ergebnisse des Schützenfestes']],
  [14, '03.07.2009', ['Bekanntmachung des Aufstellungsbeschlusses Bebauungsplan Nr. 12, 3. Änderung', 'Haushaltsrechtliche Bekanntmachung: außerplanmäßige Auszahlung Kreisverkehr']],
  [10, '08.05.2009', ['Einziehung einer Teilfläche der Lindenstraße', 'Nichtamtlicher Teil: Leserbrief des Ortsvorstehers Oberkleeberg zur Gebietsreform 1975']],
  [6, '13.03.2009', ['Haushaltssatzung der Stadt Musterstadt für das Haushaltsjahr 2009', 'Bekanntmachung der Genehmigungsfreiheit']],
  [1, '09.01.2009', ['Abfallkalender: Feiertagsverschiebungen 2009', 'Hundesteuer: Fälligkeiten 2009', 'Nichtamtlicher Teil: Neujahrsgruß des Bürgermeisters', 'Nichtamtlicher Teil: Leserbrief des Ortsvorstehers Oberkleeberg zur Gebietsreform 1975']]
];
var ABKB = {1: 9, 6: 9, 10: 6, 14: 6, 15: 6, 16: 6, 17: 6, 18: 6, 19: 7};
S[140] = {suchwoerter: AB.map(function (x) { return x[2].join(' '); }).join(' '), html: function () {
  return '<p>Das Amtsblatt der Stadt Musterstadt erscheint vierzehntäglich freitags. Es liegt im Bürgeramt, in der Stadtbibliothek und am Büdchen am Markt kostenlos aus. Öffentliche Bekanntmachungen erfolgen rechtsverbindlich durch Veröffentlichung im Amtsblatt.</p>' +
    '<h3 class="zw">Ausgaben 2009 (Auswahl)</h3><table class="tab"><tr><th>Nr.</th><th>Datum</th><th>Inhalt</th><th>Datei</th></tr>' +
    AB.map(function (x) { var nr = ('0' + x[0]).slice(-2); return '<tr><td>' + x[0] + '/2009</td><td>' + x[1] + '</td><td>' + x[2].join('<br>') + '</td><td><a href="pdf/amtsblatt-2009-' + nr + '.pdf" data-ereignis="pdf">PDF</a> <span class="pdf">(' + ABKB[x[0]] + ' KB)</span></td></tr>'; }).join('') +
    '</table><h2>Aus dem nichtamtlichen Teil (Nr. 19/2009)</h2><p><b>Leserbrief: „Vierunddreißig Jahre“</b></p>' +
    '<p>Am 1. Januar 1975 hat man Oberkleeberg eingemeindet. Gefragt hat uns niemand. Seitdem sind vierunddreißig Jahre vergangen, und ich frage heute, wie ich es in diesem Blatt schon im Januar und im Mai gefragt habe: Was hat Oberkleeberg davon gehabt?</p>' +
    '<p>Unsere Grundschule ist jetzt ein „Teilstandort“ und wird „geprüft“. Unsere Löschgruppe holt Katzen von Bäumen, während in der Stadt Kreisverkehre für Schwerlastverkehr gebaut werden, der dort gar nicht fahren darf. Unser Bus fährt sonntags nicht. Und als die Freunde aus New Kleeberg im Juni zu Besuch waren, standen beim Empfang im Rathaus Musterstädter Würstchen auf dem Tisch.</p>' +
    '<p>Ich habe nichts gegen Musterstadt. Ich habe nur etwas dagegen, dass Oberkleeberg seit 1975 dazugehört.</p>' +
    '<p><i>Josef Hambloch, Ortsvorsteher Oberkleeberg</i></p>' +
    '<p class="klein">Leserbriefe geben nicht die Meinung der Redaktion wieder. Die Redaktion behält sich Kürzungen vor. Der Leserbrief wurde gekürzt.</p>' +
    '<p class="klein">Ältere Ausgaben können im Stadtarchiv eingesehen werden. Ein Abonnement per Post ist für 18,00 € jährlich möglich.</p>';
}};

/* ---------- Öffentliche Bekanntmachungen ---------- */
S[142] = {suchwoerter: 'Bebauungsplan Lindenstraße Süd Vergnügungsstätten Auslegung Am Mühlenbach Einziehung Versteigerung Fundsachen Jagdgenossenschaft', html:
  '<p>Rechtsverbindlich sind ausschließlich die im ' + a(140, 'Amtsblatt') + ' veröffentlichten Bekanntmachungen.</p>' +
  '<h3 class="zw">Öffentliche Auslegung: Bebauungsplan Nr. 12 „Lindenstraße Süd“, 3. Änderung</h3>' +
  '<p class="klein">Amtsblatt Nr. 19/2009 vom 09.10.2009</p>' +
  '<p>Der Entwurf der 3. Änderung des Bebauungsplans Nr. 12 „Lindenstraße Süd“ liegt mit Begründung in der Zeit vom <b>12.10.2009 bis einschließlich 13.11.2009</b> im Neuen Rathaus, Raum 402, während der Dienststunden öffentlich aus. Ziel der Planung ist die ausnahmsweise Zulässigkeit von Vergnügungsstätten im Bereich der Grundstücke Lindenstraße 48 bis 56. Während der Auslegungsfrist können Stellungnahmen schriftlich oder zur Niederschrift abgegeben werden.</p>' +
  '<h3 class="zw">Verkehrsrechtliche Anordnung: Laternenlauf am 11.11.2009</h3><p class="klein">Amtsblatt Nr. 19/2009</p><p>Die Kirchstraße und der Mühlenweg werden am 11.11.2009 zwischen 16:45 Uhr und 18:30 Uhr für den Fahrzeugverkehr gesperrt.</p>' +
  '<h3 class="zw">Versteigerung von Fundsachen</h3><p class="klein">Amtsblatt Nr. 18/2009</p><p>Am Freitag, 20.11.2009, 14:00 Uhr, werden im Bauhof, Industriestraße 22, Fundsachen versteigert, deren Aufbewahrungsfrist abgelaufen ist, darunter zahlreiche Regenschirme und 14 Fahrräder.</p>' +
  '<h3 class="zw">Einziehung einer Teilfläche der Lindenstraße</h3><p class="klein">Amtsblatt Nr. 10/2009</p><p>Eine Teilfläche der Lindenstraße im Bereich des Knotenpunktes Mühlenweg wird gemäß § 7 Straßen- und Wegegesetz NRW eingezogen und dem Kreisverkehrsplatz zugeordnet.</p>' +
  '<h3 class="zw">Inkrafttreten: Bebauungsplan Nr. 47 „Am Mühlenbach“, 1. Änderung</h3><p class="klein">Amtsblatt Nr. 22/2008</p><p>Die 1. Änderung des Bebauungsplans Nr. 47 „Am Mühlenbach“ ist mit der Bekanntmachung in Kraft getreten. Sie regelt unter anderem die Größe und Lage von Nebenanlagen in den Kleingarten- und Wohngebieten entlang des Mühlenbachs und der Stadtmauer. Der Plan kann bei der ' + a(305, 'Bauaufsicht') + ' eingesehen werden.</p>'};

/* ---------- Pressemitteilungen ---------- */
var PM = [
  [1007, '21.06.2006', 'Fanmeile auf dem Marktplatz: Musterstadt feiert die WM', 'Zu allen Spielen der deutschen Nationalmannschaft wird auf dem Marktplatz eine Großbildleinwand aufgebaut. Der Eintritt ist frei. Für Verpflegung sorgen örtliche Vereine.'],
  [1008, '15.12.2006', 'Rat beschließt Kreisverkehr an der Lindenstraße', 'Der Rat hat den Umbau des Knotenpunktes Lindenstraße/Mühlenweg zu einem Kreisverkehrsplatz beschlossen. Die Kosten werden auf 412.000 € geschätzt. Baubeginn soll im Frühjahr 2007 sein.'],
  [1009, '28.02.2007', 'Hallenbad wird vorübergehend geschlossen', 'Wegen erheblichen Sanierungsbedarfs an der Lüftungs- und Filtertechnik wird das Hallenbad zum 1. April 2007 vorübergehend geschlossen. Die Verwaltung prüft alle Möglichkeiten für eine Wiedereröffnung.'],
  [1010, '19.03.2007', 'Neuer Internetauftritt der Stadt online', 'Die Stadt Musterstadt präsentiert sich ab sofort mit einem neuen Internetauftritt auf Basis von KommunalCMS. Bürgerinnen und Bürger finden dort Formulare, Öffnungszeiten und aktuelle Meldungen.'],
  [1011, '04.06.2007', 'Kreisverkehr: Baubeginn verschiebt sich', 'Die Ausschreibung für den Kreisverkehr musste aufgehoben werden, weil kein wirtschaftliches Angebot eingegangen ist. Die Arbeiten werden neu ausgeschrieben.'],
  [1012, '12.05.2008', 'Spatenstich am Kreisverkehr', 'Bürgermeister Klaus-Dieter Wellbrock hat gemeinsam mit Mitgliedern des Verkehrsausschusses den ersten Spatenstich für den Kreisverkehr Lindenstraße/Mühlenweg gesetzt. Die Fertigstellung ist für Ende 2008 geplant.'],
  [1013, '15.09.2008', 'Kreisverkehr: Arbeiten wegen Kampfmittelverdacht unterbrochen', 'Bei Erdarbeiten am Kreisverkehr ergab sich ein Verdacht auf Kampfmittel. Nach der Sondierung konnte Entwarnung gegeben werden. Die Arbeiten werden fortgesetzt.'],
  [1014, '20.11.2008', 'Stempelmuseum begrüßt 100.000. Besucher', 'Das Deutsche Stempelmuseum hat seinen 100.000. Besucher seit der Eröffnung im Jahr 1996 begrüßt. Museumsleiterin Dr. Ingrid Kranz überreichte einen personalisierten Gummistempel.'],
  [1015, '09.02.2009', 'Kreisverkehr: Anpassung der Entwässerung erforderlich', 'Bei den Arbeiten am Kreisverkehr hat sich gezeigt, dass das vorhandene Entwässerungssystem angepasst werden muss. Die Fertigstellung verschiebt sich auf den Herbst 2009.'],
  [1016, '06.03.2009', 'Rat beschließt ersten Haushalt nach NKF', 'Mit dem Haushalt 2009 hat die Stadt Musterstadt erfolgreich auf das Neue Kommunale Finanzmanagement umgestellt. Kämmerer Dr. Rainer Hollmann: „Die Umstellung ist ein Meilenstein für mehr Transparenz.“'],
  [1017, '14.05.2009', 'Flora Fuchs wird zehn Jahre alt', 'Das Stadtmaskottchen Flora Fuchs feiert ihren zehnten Geburtstag. Die Figur wurde 1999 zum Amtsantritt von Bürgermeister Wellbrock eingeführt und ist seitdem bei allen städtischen Festen dabei.'],
  [1018, '30.06.2009', 'Kreisverkehr verbessert Erschließung der Lindenstraße Süd', 'Im Zuge der Arbeiten am Kreisverkehr wird eine zusätzliche Zufahrt hergestellt. „Damit schaffen wir die Voraussetzungen für eine positive Entwicklung des gesamten Bereichs Lindenstraße Süd“, so Wirtschaftsförderer Oliver Thiel.'],
  [1019, '13.07.2009', 'Ralf Peters ist neuer Schützenkönig', 'Beim Schützenfest der St.-Sebastianus-Schützenbruderschaft hat Ralf Peters mit dem 214. Schuss den Vogel abgeschossen. Der Bürgermeister gratulierte im Namen der Stadt.'],
  [1020, '07.08.2009', 'Bürgerinitiative übergibt Unterschriften', 'Die Bürgerinitiative „Rettet die Telefonzelle am Marktplatz“ hat dem Bürgermeister 217 Unterschriften übergeben. Die Anregung wird im Ausschuss für Anregungen und Beschwerden beraten.'],
  [1022, '23.09.2009', 'Berichtigung zur Pressemitteilung vom 22.09.2009', 'In der Pressemitteilung „Kreisverkehr Lindenstraße/Mühlenweg: Fertigstellung im Dezember“ vom 22.09.2009 wurde die Rufnummer des Tiefbauamtes unzutreffend angegeben. Sie lautet richtig (0 12 34) 5 67-6 20. Wir bitten, das Versehen zu entschuldigen.'],
  [1023, '24.09.2009', 'Berichtigung zur Berichtigung vom 23.09.2009', 'Die in der Berichtigung vom 23.09.2009 genannte Rufnummer ist zutreffend. Die Berichtigung vom 23.09.2009 enthielt jedoch einen unzutreffenden Verweis: Gemeint war die Pressemitteilung vom 22.09.2009. Die Pressestelle bittet, auch dieses Versehen zu entschuldigen.'],
  [1021, '21.09.2009', 'Bürgermeister begrüßt neue Auszubildende', 'Vier junge Menschen haben ihre Ausbildung bei der Stadtverwaltung Musterstadt begonnen. Bürgermeister Wellbrock wünschte ihnen einen guten Start. Bewerbungen für das Ausbildungsjahr 2010 sind ab sofort möglich.']
];
PM.forEach(function (p) {
  MS.struktur.push([p[0], 147, p[2], {versteckt: true}]);
  S[p[0]] = {stand: p[1], suchwoerter: p[3], html: '<p class="klein">' + p[1] + ' – Pressestelle</p><p>' + p[3] + '</p><p>' + a(147, '« Alle Pressemitteilungen') + '</p>'};
});
var PM_NEU = [[1001, '12.10.2009'], [1002, '09.10.2009'], [1003, '07.10.2009'], [1004, '02.10.2009'], [1005, '30.09.2009'], [1006, '22.09.2009']];
S[147] = {html: function () {
  var alle = PM_NEU.map(function (p) { return [p[0], p[1]]; }).concat(PM.map(function (p) { return [p[0], p[1]]; }));
  alle.sort(function (x, y) { return datumWert(y[1]) - datumWert(x[1]); });
  var jahr = '', h = '<p>Hier finden Sie die Pressemitteilungen der Stadt Musterstadt. Ansprechpartner für die Presse: Markus Feldhaus, ' + tel('1 10') + '.</p>';
  alle.forEach(function (p) {
    var j = p[1].slice(-4);
    if (j !== jahr) { h += (jahr ? '</table>' : '') + '<h3 class="zw">' + j + '</h3><table class="tab">'; jahr = j; }
    h += '<tr><td width="80">' + p[1] + '</td><td>' + MS.link(p[0]) + '</td></tr>';
  });
  return h + '</table><p class="klein">Pressemitteilungen vor 2006 erhalten Sie auf Anfrage bei der Pressestelle.</p>';
}};

/* ---------- Stellenangebote ---------- */
S[151] = {suchwoerter: 'Stellenausschreibung Bewerbung Ausbildung Beigeordneter Sachbearbeiter Hausmeister', html:
  '<p>Die Stadt Musterstadt ist ein moderner Dienstleister mit rund 420 Beschäftigten. Bewerbungen von Frauen sind nach Maßgabe des Landesgleichstellungsgesetzes NRW ausdrücklich erwünscht. Schwerbehinderte Bewerberinnen und Bewerber werden bei gleicher Eignung bevorzugt berücksichtigt.</p>' +
  '<h2>Technische Beigeordnete / Technischer Beigeordneter</h2><p>Wahlbeamtin/Wahlbeamter auf Zeit (8 Jahre), Besoldungsgruppe B 2 BBesO<br>Leitung des Dezernates IV (Bauen und Umwelt) mit Bauaufsicht, Tiefbauamt, Abfallwirtschaft und Bauhof. Vorausgesetzt werden ein abgeschlossenes Studium der Fachrichtung Bauingenieurwesen oder Architektur sowie mehrjährige Führungserfahrung in der Kommunalverwaltung.<br><b>Bewerbungsschluss: 30.10.2009</b></p>' +
  '<h2>Sachbearbeiterin / Sachbearbeiter (m/w) im Bürgeramt</h2><p>Entgeltgruppe 8 TVöD, befristet als Elternzeitvertretung<br>Aufgaben: Melde-, Pass- und Ausweiswesen, Beglaubigungen, Bescheinigungen. Erwartet werden Belastbarkeit, Freundlichkeit im Umgang mit Bürgerinnen und Bürgern und Bereitschaft zum Dienst am Donnerstagnachmittag.<br><b>Bewerbungsschluss: 23.10.2009</b></p>' +
  '<h2>Hausmeisterin / Hausmeister (Teilzeit) für das Jugendzentrum „Alte Post“</h2><p>Entgeltgruppe 4 TVöD, 19,5 Wochenstunden<br>Vorausgesetzt werden handwerkliches Geschick und der Führerschein Klasse 3.<br><b>Bewerbungsschluss: 16.10.2009</b></p>' +
  '<h2>Sachbearbeiterin / Sachbearbeiter (m/w) in der IT-Abteilung</h2><p>Entgeltgruppe 9 TVöD<br>Aufgaben: Betreuung der Arbeitsplatzrechner, Pflege des Internetangebotes. Kenntnisse in KommunalCMS 3.2 sind wünschenswert. Erfahrung mit dem Internet Explorer 6 wird vorausgesetzt.<br><b>Bewerbungsschluss: 30.10.2009</b></p>' +
  '<h2>Ausbildung 2010: Verwaltungsfachangestellte / Verwaltungsfachangestellter</h2><p>Ausbildungsbeginn 01.08.2010, Voraussetzung Fachoberschulreife oder höher.<br><b>Bewerbungsschluss: 31.10.2009</b></p>' +
  '<div class="hinweis">Bitte richten Sie Ihre Bewerbung mit den üblichen Unterlagen schriftlich an: Stadt Musterstadt, Der Bürgermeister, Personalabteilung, Rathausplatz 1, 43999 Musterstadt. Bewerbungen per E-Mail können nicht berücksichtigt werden. Bewerbungsunterlagen werden nur zurückgesandt, wenn ein ausreichend frankierter Rückumschlag beiliegt.</div>'};

/* ---------- Bürgerbeteiligung ---------- */
S[155] = {suchwoerter: 'Einwohnerfragestunde Anregung Beschwerde Bürgerbegehren Bürgerinitiative', html:
  '<p>Die Stadt Musterstadt lädt alle Einwohnerinnen und Einwohner ein, sich am kommunalen Geschehen zu beteiligen.</p>' +
  '<h3 class="zw">Einwohnerfragestunde</h3><p>Zu Beginn jeder ordentlichen Ratssitzung können Einwohnerinnen und Einwohner Fragen an den Bürgermeister stellen. Die Fragen sind spätestens zehn Tage vor der Sitzung schriftlich einzureichen. Siehe ' + a(126, 'Geschäftsordnung des Rates') + ', § 18.</p>' +
  '<h3 class="zw">Anregungen und Beschwerden</h3><p>Nach § 24 der Gemeindeordnung NRW kann sich jede Person schriftlich mit Anregungen oder Beschwerden an den Rat wenden. Siehe ' + a(2003, 'Anregungen und Beschwerden') + '.</p>' +
  '<h3 class="zw">Bürgerbegehren</h3><p>Die Bürgerinnen und Bürger können beantragen, dass sie an Stelle des Rates über eine Angelegenheit der Gemeinde selbst entscheiden (§ 26 GO NRW). Ein Bürgerbegehren muss in Musterstadt von mindestens 7 % der Bürgerinnen und Bürger unterzeichnet sein. Bitte lassen Sie sich vorab im Büro des Rates beraten.</p>' +
  '<h3 class="zw">Bürgerinitiativen</h3><p>Die Stadt stellt Bürgerinitiativen auf Antrag eine Seite in ihrem Internetangebot zur Verfügung. Für die Inhalte sind die Initiativen selbst verantwortlich.</p><ul><li>' + a(156, 'Bürgerinitiative „Rettet die Telefonzelle am Marktplatz“') + '</li></ul>'};

S[156] = {titel: 'Bürgerinitiative „Rettet die Telefonzelle am Marktplatz“', suchwoerter: 'Telefonzelle Lückerath Unterschriften Marktplatz Fernsprecher', html:
  '<div class="hinweis klein">Für den Inhalt dieser Seite ist die Bürgerinitiative verantwortlich. Die Stadt Musterstadt macht sich die Inhalte nicht zu eigen.</div>' +
  '<svg width="120" height="200" viewBox="0 0 120 200" style="float:right;margin:0 0 8px 12px;border:1px solid #bbb" aria-label="Foto der Telefonzelle"><rect width="120" height="200" fill="#dfe6ec"/><rect y="170" width="120" height="30" fill="#9aa3a8"/><rect x="30" y="30" width="60" height="145" fill="#c8cdd1" stroke="#555"/><rect x="30" y="30" width="60" height="16" fill="#f2c200" stroke="#555"/><text x="60" y="42" text-anchor="middle" font-family="Verdana" font-size="8" fill="#222">TELEFON</text><rect x="36" y="52" width="48" height="110" fill="#e9f1f6" stroke="#777"/><rect x="52" y="80" width="16" height="26" fill="#555"/><path d="M50 82 q-6 8 0 16" stroke="#222" stroke-width="3" fill="none"/></svg>' +
  '<p><b>Liebe Musterstädterinnen und Musterstädter!</b></p>' +
  '<p>Seit 1983 steht am Marktplatz eine Telefonzelle. Sie ist die letzte öffentliche Telefonzelle in der Innenstadt. Nun soll sie bis zum <b>31.12.2009</b> abgebaut werden, weil sie angeblich zu selten genutzt wird.</p>' +
  '<p>Wir meinen: Eine Telefonzelle ist Daseinsvorsorge! Nicht jeder hat ein Handy. Was ist, wenn der Akku leer ist? Was ist mit unseren Gästen aus den Partnerstädten? Was ist, wenn beim Laternenlauf ein Kind verloren geht?</p>' +
  '<p>Wir haben bereits <b>217 Unterschriften</b> gesammelt und dem Bürgermeister übergeben. Der Ausschuss für Anregungen und Beschwerden hat unser Anliegen am 03.09.2009 an das zuständige Unternehmen weitergeleitet. Eine Antwort steht noch aus.</p>' +
  '<p>Die Stadt sagt, sie sei nicht zuständig. Wir sagen: Wer denn sonst?</p>' +
  '<h3 class="zw">Machen Sie mit!</h3><p>Unterschriftenlisten liegen im Büdchen am Markt bei Herrn Bröcker und in der Bäckerei Kowalski aus. Die Liste zum Ausdrucken: ' + pdf('unterschriftenliste-telefonzelle.pdf', 'Unterschriftenliste', '3 KB') + '</p>' +
  '<p>Unser nächstes Treffen: jeden ersten Dienstag im Monat, 19:00 Uhr, Gaststätte „Zum Marktkrug“.</p>' +
  '<p>Kontakt: Hermine Lückerath, Sprecherin der Bürgerinitiative<br>Erreichbar über das Büdchen am Markt oder schriftlich über die Stadtverwaltung.</p>'};

})();
