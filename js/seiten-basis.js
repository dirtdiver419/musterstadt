/* KommunalCMS 3.2 - Inhalte: Startseite und Service */
window.MS = window.MS || {};
MS.seiten = MS.seiten || {};
(function () {
var S = MS.seiten;
var u = function (id, extra) { return 'index.html?id=' + id + '&amp;L=0' + (extra || ''); };

var fuchsKopf = '<svg width="48" height="44" viewBox="-24 -22 48 44" style="float:right;margin:0 0 4px 4px" aria-hidden="true"><path d="M-17 -18 L-10 6 L10 6 L17 -18 L6 -6 L-6 -6z" fill="#e8742a" stroke="#7a3a10"/><path d="M-10 6 L0 19 L10 6z" fill="#fff" stroke="#7a3a10"/><circle cx="0" cy="18" r="2" fill="#222"/><circle cx="-5" cy="1" r="1.6" fill="#222"/><circle cx="5" cy="1" r="1.6" fill="#222"/></svg>';

/* ---------- Navigation und Seitenleisten ---------- */
MS.startnav = function () {
  return '<h3>Bürgerservice</h3><ul>' +
    '<li><a href="' + u(204) + '">Dienstleistungen von A–Z</a></li>' +
    '<li><a href="' + u(210) + '">Bürgeramt</a></li>' +
    '<li><a href="' + u(215) + '">Formulare &amp; Downloads</a></li>' +
    '<li><a href="' + u(118) + '">Ämter &amp; Ansprechpartner</a></li>' +
    '<li><a href="' + u(236) + '">Fundbüro</a></li>' +
    '<li><a href="' + u(242) + '">Abfallkalender</a></li></ul>' +
    '<h3>Rathaus &amp; Politik</h3><ul>' +
    '<li><a href="' + u(113) + '">Grußwort des Bürgermeisters</a></li>' +
    '<li><a href="' + u(125) + '">Ratsinformationssystem</a></li>' +
    '<li><a href="' + u(140) + '">Amtsblatt</a></li>' +
    '<li><a href="' + u(142) + '">Öffentliche Bekanntmachungen</a></li>' +
    '<li><a href="' + u(147) + '">Pressemitteilungen</a></li>' +
    '<li><a href="' + u(151) + '">Stellenangebote</a></li></ul>' +
    '<h3>Musterstadt erleben</h3><ul>' +
    '<li><a href="' + u(605) + '">Stadtgeschichte</a></li>' +
    '<li><a href="' + u(610) + '">Deutsches Stempelmuseum</a></li>' +
    '<li><a href="' + u(615) + '">Veranstaltungskalender</a></li>' +
    '<li><a href="' + u(620) + '">Unser Stadtmaskottchen</a></li>' +
    '<li><a href="' + u(650) + '">Naturschutzgebiet Muster-Auen</a></li>' +
    '<li><a href="' + u(640) + '">Partnerstädte</a></li>' +
    '<li><a href="' + u(660) + '">Stadtplan</a></li>' +
    '<li><a href="' + u(655) + '">Webcam Marktplatz</a></li>' +
    '<li><a href="' + u(905) + '">Gästebuch</a></li></ul>';
};

var kastenSchnell = '<div class="kasten"><h3>Schnellzugriff</h3><div class="inh"><ul>' +
  '<li><a href="' + u(219) + '">Online-Terminvereinbarung</a></li>' +
  '<li><a href="' + u(215) + '">Formulare &amp; Downloads</a></li>' +
  '<li><a href="' + u(242) + '">Abfallkalender 2009</a></li>' +
  '<li><a href="' + u(140) + '">Amtsblatt</a></li>' +
  '<li><a href="' + u(151) + '">Stellenangebote</a></li>' +
  '<li><a href="' + u(131) + '">Haushalt 2009</a></li></ul></div></div>';

var kastenBuergeramt = '<div class="kasten"><h3>Bürgeramt</h3><div class="inh">' +
  'Mo, Di, Fr: 8:00–12:00 Uhr<br>Do: 8:00–12:00 und 14:00–18:00 Uhr<br>Mi: geschlossen<br>Wartemarken bis 11:45 Uhr<br><br>' +
  'Tel.: (0 12 34) 5 67-0<br>Fax: (0 12 34) 5 67-1 99</div></div>';

MS.rechtsStandard = function () { return kastenSchnell + kastenBuergeramt; };

MS.rechtsStart = function () {
  return kastenSchnell + kastenBuergeramt +
  '<div class="kasten"><h3>Termine</h3><div class="inh">' +
  '<b>21.10.</b> Bürgeramt geschlossen<br>' +
  '<b>11.11., 11:11 Uhr</b> Sessionseröffnung der KG Musterstädter Funken, Marktplatz<br>' +
  '<b>11.11., 17:00 Uhr</b> <a href="' + u(616) + '">Laternenlauf</a>, Rathausplatz<br>' +
  '<a href="' + u(615) + '">» Alle Veranstaltungen</a></div></div>' +
  '<div class="kasten fuchs"><h3>Flora Fuchs meint:</h3><div class="inh">' + fuchsKopf +
  '„Ich wünsche allen Kindern schöne Herbstferien! Wir sehen uns beim Laternenlauf!“<br><a href="' + u(620) + '">Mehr über unser Stadtmaskottchen</a></div></div>' +
  '<div class="kasten wetter"><h3>Wetter in Musterstadt</h3><div class="inh">' +
  '<svg width="40" height="28" viewBox="0 0 40 28" aria-hidden="true"><circle cx="14" cy="12" r="7" fill="#f3c33b"/><path d="M10 26 h22 a6 6 0 0 0 0 -12 a8 8 0 0 0 -15 -2 a6 6 0 0 0 -7 14z" fill="#c9d1da" stroke="#9aa6b3"/></svg><br>' +
  '<b>11 °C</b><br>wolkig<br><span class="klein">Stand: 12.10.2009, 07:00 Uhr</span></div></div>' +
  '<div class="kasten"><h3>Newsletter</h3><div class="inh">Bleiben Sie informiert! Der Newsletter der Stadt Musterstadt informiert Sie monatlich über Neuigkeiten aus Rathaus und Stadt.<br><input type="text" id="nl-mail" size="18" aria-label="E-Mail-Adresse für den Newsletter" placeholder="E-Mail-Adresse"> <button onclick="document.getElementById(\'nl-meldung\').textContent=\'Der Newsletter wird derzeit nicht versandt. Bereits eingetragene Adressen bleiben gespeichert.\';return false">Anmelden</button><br><span id="nl-meldung" class="klein" aria-live="polite"></span></div></div>' +
  '<div class="kasten"><h3>Umfrage</h3><div class="inh"><b>Wie zufrieden sind Sie mit unserem Internetangebot?</b><br><label><input type="radio" name="umf" disabled> sehr zufrieden</label><br><label><input type="radio" name="umf" disabled> zufrieden</label><br><label><input type="radio" name="umf" disabled> weniger zufrieden</label><br><label><input type="radio" name="umf" disabled> unzufrieden</label><br><span class="klein">Die Umfrage ist beendet (31.12.2008). Das Ergebnis wird nach Abschluss der Auswertung veröffentlicht.</span></div></div>' +
  '<div class="kasten"><h3>Sommermärchen 2006</h3><div class="inh">Erinnern Sie sich an die Fanmeile auf dem Marktplatz? <a href="' + u(625) + '">Zur Fotogalerie (48 Bilder)</a></div></div>' +
  '<div class="kasten"><h3>Kreis Muster</h3><div class="inh">Für Kfz-Zulassung, Führerscheine, Naturschutz und das Kreiskrankenhaus ist der Kreis zuständig.<br><a href="' + u(925, '&amp;ziel=kreis') + '">www.kreis-muster.de</a> <span class="klein">(externer Link)</span></div></div>';
};

/* ---------- Startseite ---------- */
var meldungen = [
  [1001, '12.10.2009', true, 'Treffpunkt ist um 17:00 Uhr am Rathausplatz. Begleitet wird der Zug von St. Martin hoch zu Ross und dem Musikzug der Freiwilligen Feuerwehr. Am Martinsfeuer gibt es Weckmänner, solange der Vorrat reicht. Auch Flora Fuchs ist dabei!'],
  [1002, '09.10.2009', true, 'Wegen einer internen Schulung bleibt das Bürgeramt am 21.10.2009 ganztägig geschlossen. Bereits vereinbarte Termine werden nicht verlegt. Wir bitten um Ihr Verständnis.'],
  [1003, '07.10.2009', false, 'Bitte nutzen Sie die Händedesinfektion im Foyer und sehen Sie vom Händeschütteln ab. Informationen zur Schutzimpfung erhalten Sie beim Gesundheitsamt des Kreises Muster.'],
  [1004, '02.10.2009', false, 'Am Freitag, 02.10.2009, hat der Preisfuchs-Markt in der Lindenstraße eröffnet. Bürgermeister Wellbrock durchschnitt das Band, Flora Fuchs war in ihrer Eigenschaft als Stadtmaskottchen anwesend. Die Wirtschaftsförderung freut sich über die Würdigung des Wappentiers.'],
  [1005, '30.09.2009', false, 'Die Untere Landschaftsbehörde des Kreises Muster führt im Oktober Pflegearbeiten im Naturschutzgebiet Muster-Auen durch. Einzelne Wege sind zeitweise gesperrt.'],
  [1006, '22.09.2009', false, 'Nach Abschluss der zusätzlich erforderlichen Arbeiten am Entwässerungssystem rechnet das Tiefbauamt mit einer Verkehrsfreigabe im Dezember 2009.']
];

S[1] = {
  titel: 'Herzlich willkommen in Musterstadt!',
  html: function () {
    return '<div class="gruss"><svg width="74" height="92" viewBox="0 0 74 92" aria-label="Foto des Bürgermeisters"><rect width="74" height="92" fill="#cfd6de"/><circle cx="37" cy="34" r="16" fill="#e6c4a2"/><path d="M21 30 q2 -16 16 -16 q14 0 16 16 q-4 -8 -16 -8 q-12 0 -16 8" fill="#8d8478"/><path d="M8 92 q4 -30 29 -30 q25 0 29 30z" fill="#2d3a4a"/><path d="M33 62 l4 14 l4 -14z" fill="#9b2a1a"/></svg>' +
      '<p>Liebe Bürgerinnen und Bürger, liebe Gäste,</p>' +
      '<p>herzlich willkommen auf den Internetseiten der Stadt Musterstadt! Hier finden Sie Informationen rund um Verwaltung, Politik, Wirtschaft und Freizeit in unserer Stempelstadt an der Muster. Viele Dienstleistungen können Sie bereits bequem von zu Hause aus vorbereiten.</p>' +
      '<p>Ich wünsche Ihnen viel Freude beim Surfen!<br><i>Ihr Bürgermeister Klaus-Dieter Wellbrock</i> &nbsp;<a href="' + u(113) + '">mehr&nbsp;»</a></p></div>' +
      '<h2>Aktuelle Meldungen</h2>' +
      meldungen.map(function (m) {
        return '<div class="meldung"><span class="datum">' + m[1] + '</span>' + (m[2] ? '<span class="neu">NEU</span>' : '') +
          '<h4><a href="' + u(m[0]) + '">' + MS.knoten[m[0]].titel + '</a></h4><p>' + m[3] + '</p></div>';
      }).join('') +
      '<p style="text-align:right;margin-top:6px"><a href="' + u(147) + '">» Alle Meldungen</a> &nbsp; <a href="#" onclick="alert(\'Bitte kopieren Sie die Adresse dieser Seite in Ihren RSS-Reader.\');return false"><svg width="12" height="12" viewBox="0 0 12 12" style="vertical-align:-2px"><rect width="12" height="12" rx="2" fill="#f28c1e"/><circle cx="3.2" cy="8.8" r="1.2" fill="#fff"/><path d="M2 5.5a4.5 4.5 0 0 1 4.5 4.5M2 2.8a7.2 7.2 0 0 1 7.2 7.2" stroke="#fff" stroke-width="1.3" fill="none"/></svg> RSS</a></p>';
  }
};

/* ---------- Meldungen ---------- */
var zurueck = '<p><a href="' + u(1) + '">« Zurück zur Startseite</a> | <a href="' + u(147) + '">Alle Pressemitteilungen</a></p>';
S[1001] = {stand: '12.10.2009', html: '<p class="klein">12.10.2009 – Pressestelle</p>' +
  '<p>Auch in diesem Jahr lädt die Kita Sonnenschein alle Kinder, Eltern und Großeltern zum traditionellen Laternenlauf ein. Treffpunkt ist am <b>Mittwoch, 11.11.2009, um 17:00 Uhr</b> am Rathausplatz.</p>' +
  '<p>Angeführt von St. Martin hoch zu Ross und begleitet vom Musikzug der Freiwilligen Feuerwehr Musterstadt zieht der Laternenzug über die Kirchstraße und den Mühlenweg zur Festwiese an der Muster. Dort entzündet die Feuerwehr unter Leitung von Wehrführer Heinz-Josef Brüggemann das Martinsfeuer. Pfarrer Bernhard Stockhausen spricht ein Grußwort.</p>' +
  '<p>Am Martinsfeuer werden Weckmänner verteilt, solange der Vorrat reicht. Auch Flora Fuchs, das Maskottchen unserer Stadt, wird den Zug begleiten.</p>' +
  '<p>Bitte beachten Sie: Am selben Tag findet um 11:11 Uhr auf dem Marktplatz die Sessionseröffnung der KG Musterstädter Funken statt. Die Stadt bittet darum, den Marktplatz bis 16:00 Uhr zu räumen.</p>' +
  '<p>Während des Laternenlaufs sind die Kirchstraße und der Mühlenweg zwischen 16:45 Uhr und 18:30 Uhr für den Verkehr gesperrt.</p>' + zurueck};
S[1002] = {stand: '09.10.2009', html: '<p class="klein">09.10.2009 – Pressestelle</p>' +
  '<p>Wegen einer internen Schulung zur Einführung einer neuen Fachsoftware bleibt das Bürgeramt der Stadt Musterstadt am <b>Mittwoch, 21.10.2009</b> ganztägig geschlossen.</p>' +
  '<p>Bereits vereinbarte Termine für diesen Tag werden nicht verlegt. Bürgerinnen und Bürger, die einen Termin am 21.10.2009 gebucht haben, werden gebeten, über die ' + '<a href="' + u(219) + '">Online-Terminvereinbarung</a> einen neuen Termin zu vereinbaren.</p>' +
  '<p>Wir bitten um Ihr Verständnis.</p>' + zurueck};
S[1003] = {stand: '07.10.2009', html: '<p class="klein">07.10.2009 – Pressestelle</p>' +
  '<p>Angesichts der Ausbreitung der Neuen Grippe (Influenza A/H1N1) bittet die Stadtverwaltung alle Besucherinnen und Besucher des Rathauses, die im Foyer aufgestellten Spender zur Händedesinfektion zu nutzen und bei Behördengängen vom Händeschütteln abzusehen.</p>' +
  '<p>Wer Grippesymptome bei sich bemerkt, wird gebeten, Behördengänge nach Möglichkeit zu verschieben.</p>' +
  '<p>Für Fragen zur Schutzimpfung ist das Gesundheitsamt des Kreises Muster zuständig.</p>' +
  '<p><a href="' + u(925, '&amp;ziel=kreis') + '">www.kreis-muster.de</a> <span class="klein">(externer Link)</span></p>' + zurueck};
S[1004] = {stand: '02.10.2009', html: '<p class="klein">02.10.2009 – Wirtschaftsförderung</p>' +
  '<p>Musterstadt freut sich: Am heutigen Freitag, 02.10.2009, ist in der Lindenstraße der neue <b>Preisfuchs-Markt</b> eröffnet worden. Der bisherige Spar-Mit-Markt firmiert seit dem 01.10.2009 unter dem neuen Namen. Die Öffnungszeiten bleiben unverändert.</p>' +
  '<p>Bürgermeister Klaus-Dieter Wellbrock durchschnitt gemeinsam mit der Marktleitung das Band. Flora Fuchs war in ihrer Eigenschaft als Stadtmaskottchen anwesend und verteilte Luftballons an die ersten Kundinnen und Kunden.</p>' +
  '<p>„Wir freuen uns sehr, dass der Betreiber mit dem neuen Namen auch das Wappentier unserer Stadt würdigt“, erklärt Oliver Thiel von der Wirtschaftsförderung. „Der Fuchs ist in Musterstadt seit jeher ein Symbol für Klugheit und Bürgernähe.“</p>' +
  '<p>Auf Nachfrage teilte das Unternehmen mit, die Umfirmierung erfolge bundesweit. Die Teilnahme der Stadt erfolgt unentgeltlich und stellt keine Werbung für ein bestimmtes Unternehmen dar.</p>' + zurueck};
S[1005] = {stand: '30.09.2009', html: '<p class="klein">30.09.2009 – Pressestelle</p>' +
  '<p>Die Untere Landschaftsbehörde des Kreises Muster führt im Oktober die jährlichen Pflegearbeiten im Naturschutzgebiet Muster-Auen durch. Dabei werden unter anderem Kopfweiden geschnitten und Uferbereiche freigestellt.</p>' +
  '<p>Einzelne Wege, insbesondere der Auenweg zwischen Mühlenwehr und Oberkleeberg, sind zeitweise gesperrt. Besucherinnen und Besucher werden gebeten, die Beschilderung zu beachten und Hunde an der Leine zu führen.</p>' +
  '<p>Ansprechpartnerin beim Kreis Muster ist Dr. Kerstin Wollenweber, Tel. (0 12 34) 9 80-6 10.</p>' + zurueck};
S[1006] = {stand: '22.09.2009', html: '<p class="klein">22.09.2009 – Pressestelle</p>' +
  '<p>Die Arbeiten am Kreisverkehr Lindenstraße/Mühlenweg schreiten voran. Nach Abschluss der zusätzlich erforderlichen Arbeiten am Entwässerungssystem rechnet das Tiefbauamt nun mit einer Verkehrsfreigabe im <b>Dezember 2009</b>.</p>' +
  '<p>„Der Kreisverkehr wird die Verkehrssicherheit an diesem Knotenpunkt deutlich verbessern“, so Dipl.-Ing. Hartmut Seifert, Leiter des Tiefbauamtes.</p>' +
  '<p>Die Umleitung über die Bahnhofstraße bleibt bis zur Freigabe bestehen. Fragen beantwortet das Tiefbauamt unter (0 12 34) 5 67-2 60.</p>' + zurueck};

/* ---------- Impressum ---------- */
S[920] = {html:
  '<h3 class="zw">Herausgeber</h3><p>Stadt Musterstadt<br>Der Bürgermeister<br>Rathausplatz 1<br>43999 Musterstadt</p>' +
  '<p>Telefon: (0 12 34) 5 67-0<br>Telefax: (0 12 34) 5 67-1 99<br>E-Mail: info@stadt-musterstadt.de<br>Internet: www.stadt-musterstadt.de</p>' +
  '<h3 class="zw">Vertretungsberechtigt</h3><p>Die Stadt Musterstadt ist eine Körperschaft des öffentlichen Rechts. Sie wird gesetzlich vertreten durch den Bürgermeister Klaus-Dieter Wellbrock.</p>' +
  '<h3 class="zw">Zuständige Aufsichtsbehörde</h3><p>Landrat des Kreises Muster als untere staatliche Verwaltungsbehörde<br>Am Kreishaus 1, 43999 Musterstadt</p>' +
  '<h3 class="zw">Umsatzsteuer-Identifikationsnummer</h3><p>wird auf Anfrage mitgeteilt</p>' +
  '<h3 class="zw">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3><p>Markus Feldhaus, Pressestelle<br>Rathausplatz 1, 43999 Musterstadt<br>Telefon: (0 12 34) 5 67-1 10</p>' +
  '<h3 class="zw">Redaktion</h3><p>Pressestelle der Stadt Musterstadt in Zusammenarbeit mit den Fachämtern</p>' +
  '<h3 class="zw">Technische Umsetzung</h3><p>Stadt Musterstadt, IT-Abteilung, Jens Jansen<br>Content-Management-System: KommunalCMS 3.2</p>' +
  '<h3 class="zw">Bildnachweis</h3><p>Stadt Musterstadt, Pressestelle; Stadtarchiv Musterstadt; Heimatverein Musterstadt e. V.</p>' +
  '<p>Bitte beachten Sie auch unseren <a href="' + u(921) + '">Haftungsausschluss</a> und die <a href="' + u(922) + '">Datenschutzhinweise</a>.</p>' +
  '<div class="satire"><b>Hinweis:</b> Diese Website ist ein fiktives Satireprojekt. Die Stadt Musterstadt, der Kreis Muster sowie alle genannten Personen, Einrichtungen, Unternehmen, Anschriften, Rufnummern und E-Mail-Adressen sind frei erfunden. Ähnlichkeiten mit real existierenden Kommunalverwaltungen sind beabsichtigt, Ähnlichkeiten mit realen Personen nicht. Die Seite speichert keinerlei Daten und versendet keine Formulare. Die Inhalte dieser Website wurden mit Unterstützung eines KI-Sprachmodells (Claude, Anthropic) erstellt.</div>'};

/* ---------- Haftungsausschluss ---------- */
S[921] = {html:
  '<h3 class="zw">1. Inhalt des Onlineangebotes</h3><p>Die Stadt Musterstadt übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität der bereitgestellten Informationen. Haftungsansprüche, welche sich auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen verursacht wurden, sind grundsätzlich ausgeschlossen, sofern seitens der Stadt kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt.</p>' +
  '<p>Rechtsverbindlich sind ausschließlich die im Amtsblatt der Stadt Musterstadt veröffentlichten Fassungen von Satzungen, Verordnungen und Bekanntmachungen.</p>' +
  '<h3 class="zw">2. Verweise und Links</h3><p>Mit Urteil vom 12. Mai 1998 hat das Landgericht Hamburg entschieden, dass man durch die Anbringung eines Links die Inhalte der gelinkten Seite gegebenenfalls mit zu verantworten hat. Dies kann nur dadurch verhindert werden, dass man sich ausdrücklich von diesen Inhalten distanziert.</p>' +
  '<p>Die Stadt Musterstadt hat auf ihren Seiten Links zu anderen Seiten im Internet gelegt. Für alle diese Links gilt: Die Stadt Musterstadt hat keinerlei Einfluss auf die Gestaltung und die Inhalte der gelinkten Seiten und distanziert sich hiermit ausdrücklich von allen Inhalten aller gelinkten Seiten. Diese Erklärung gilt für alle auf dieser Homepage angebrachten Links und für alle Inhalte der Seiten, zu denen Links führen.</p>' +
  '<h3 class="zw">3. Urheber- und Kennzeichenrecht</h3><p>Das Wappen der Stadt Musterstadt sowie die Figur „Flora Fuchs“ dürfen nur mit schriftlicher Genehmigung der Stadt verwendet werden. Anträge sind an die Pressestelle zu richten (Formular 3/a, nicht online verfügbar). Angaben zum Wappen: <a href="seiten/wappen-stadt.html">Infobogen des Stadtarchivs</a>.</p>' +
  '<h3 class="zw">4. Rechtswirksamkeit dieses Haftungsausschlusses</h3><p>Dieser Haftungsausschluss ist als Teil des Internetangebotes zu betrachten, von dem aus auf diese Seite verwiesen wurde. Sofern Teile oder einzelne Formulierungen dieses Textes der geltenden Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen sollten, bleiben die übrigen Teile des Dokumentes in ihrem Inhalt und ihrer Gültigkeit davon unberührt.</p>'};

/* ---------- Datenschutz ---------- */
S[922] = {html:
  '<p>Die Stadt Musterstadt nimmt den Schutz Ihrer persönlichen Daten sehr ernst. Die Verarbeitung personenbezogener Daten erfolgt nach den Bestimmungen des Datenschutzgesetzes Nordrhein-Westfalen (DSG NRW) und des Telemediengesetzes (TMG).</p>' +
  '<h3 class="zw">Zugriffsdaten</h3><p>Bei jedem Zugriff auf unser Internetangebot werden Name der abgerufenen Datei, Datum und Uhrzeit des Abrufs, übertragene Datenmenge, Meldung über erfolgreichen Abruf, Browsertyp und anfragende Domain in einer Protokolldatei gespeichert. Diese Daten werden ausschließlich zu statistischen Zwecken ausgewertet. Die Besucherzählung auf der Startseite erfolgt anonym.</p>' +
  '<h3 class="zw">Cookies</h3><p>Diese Website verwendet keine Cookies. Sollte Ihr Browser dennoch eine entsprechende Meldung anzeigen, wenden Sie sich bitte an Ihren Systemadministrator.</p>' +
  '<h3 class="zw">Kontaktformular und E-Mail</h3><p>Die über das Kontaktformular übermittelten Daten werden ausschließlich zur Bearbeitung Ihres Anliegens verwendet. Bitte beachten Sie, dass die Kommunikation per E-Mail Sicherheitslücken aufweisen kann. Anträge, die der Schriftform bedürfen, können nicht per E-Mail gestellt werden.</p>' +
  '<h3 class="zw">Newsletter</h3><p>Die für den Bezug des Newsletters angegebene E-Mail-Adresse wird ausschließlich für den Versand des Newsletters verwendet.</p>' +
  '<h3 class="zw">Datenschutzbeauftragter</h3><p>Uwe Kessler<br>Rathausplatz 1, 43999 Musterstadt<br>Raum 216<br>Telefon: (0 12 34) 5 67-1 25</p>'};

/* ---------- Barrierefreiheit ---------- */
S[923] = {html:
  '<p>Die Stadt Musterstadt ist bemüht, ihr Internetangebot im Sinne der Barrierefreie-Informationstechnik-Verordnung Nordrhein-Westfalen (BITV NRW) möglichst barrierefrei zu gestalten.</p>' +
  '<h3 class="zw">Was wir bereits umgesetzt haben</h3><ul><li>Die Schriftgröße kann über die Schaltflächen „A A A“ am oberen Seitenrand angepasst werden.</li><li>Alle Seiten können ausgedruckt werden.</li><li>Ein Teil der Informationen steht in <a href="' + u(935) + '">Leichter Sprache</a> zur Verfügung.</li></ul>' +
  '<h3 class="zw">Bekannte Einschränkungen</h3><ul><li>Der <a href="' + u(660) + '">interaktive Stadtplan</a> erfordert Java und ist mit Screenreadern nicht bedienbar.</li><li>Der <a href="' + u(665) + '">Rathaus-Rundgang</a> erfordert den Adobe Flash Player.</li><li>Einige PDF-Dokumente, insbesondere der Haushaltsplan 2009, sind eingescannt und nicht barrierefrei.</li><li>Die Online-Terminvereinbarung wird von einem externen Dienstleister betrieben.</li></ul>' +
  '<p>Eine umfassende Überarbeitung des Internetangebotes ist für das Jahr 2011 vorgesehen.</p>' +
  '<p>Hinweise auf Barrieren nehmen wir gerne entgegen: Pressestelle, Tel. (0 12 34) 5 67-1 10.</p>'};

/* ---------- Externe Links ---------- */
MS.ziele = MS.ziele || {};
MS.ziele.kreis = ['www.kreis-muster.de', 'kreis/index.html'];
S[925] = {html: function () {
  var z = MS.ziele[MS.param.get('ziel')];
  if (!z) return '<div class="fehler">Das angegebene Linkziel ist nicht bekannt.</div><p><a href="' + u(1) + '">» Zur Startseite</a></p>';
  return '<div class="hinweis"><b>Sie verlassen nun das Internetangebot der Stadt Musterstadt.</b></div>' +
    '<p>Sie werden auf folgende Seite weitergeleitet: <b>' + z[0] + '</b></p>' +
    '<p>Für den Inhalt externer Seiten ist ausschließlich deren Betreiber verantwortlich. Bitte beachten Sie unseren <a href="' + u(921) + '">Haftungsausschluss</a>.</p>' +
    '<p><a class="knopf" href="' + z[1] + '" data-ereignis="extern">Weiter zu ' + z[0] + '</a> &nbsp; <a href="javascript:history.back()">Zurück</a></p>';
}};

/* ---------- Kontakt ---------- */
S[900] = {html:
  '<table class="tab"><tr><th colspan="2">Stadtverwaltung Musterstadt</th></tr>' +
  '<tr><td>Anschrift</td><td>Rathausplatz 1, 43999 Musterstadt</td></tr>' +
  '<tr><td>Telefon</td><td>(0 12 34) 5 67-0 (Zentrale)</td></tr>' +
  '<tr><td>Telefax</td><td>(0 12 34) 5 67-1 99</td></tr>' +
  '<tr><td>E-Mail</td><td>info@stadt-musterstadt.de</td></tr>' +
  '<tr><td>Öffnungszeiten</td><td>Mo–Fr 8:00–12:00 Uhr, Do zusätzlich 14:00–18:00 Uhr<br>Abweichende Zeiten einzelner Ämter beachten. Das <a href="' + u(210) + '">Bürgeramt</a> ist mittwochs geschlossen.</td></tr></table>' +
  '<div class="hinweis">Bitte beachten Sie: Anträge können nicht per E-Mail oder über das Kontaktformular gestellt werden.</div>' +
  '<h3 class="zw">Kontaktformular</h3><form id="kontakt" onsubmit="return MS.kontakt()"><table class="formular">' +
  '<tr><td>Anrede:</td><td><select aria-label="Anrede"><option>Bitte wählen</option><option>Frau</option><option>Herr</option></select></td></tr>' +
  '<tr><td>Name: *</td><td><input type="text" size="40" aria-label="Name"></td></tr>' +
  '<tr><td>E-Mail: *</td><td><input type="text" size="40" aria-label="E-Mail"></td></tr>' +
  '<tr><td>Betreff:</td><td><input type="text" size="40" aria-label="Betreff"></td></tr>' +
  '<tr><td>Nachricht: *</td><td><textarea rows="6" cols="44" aria-label="Nachricht"></textarea></td></tr>' +
  '<tr><td>Sicherheitscode: *</td><td><svg width="120" height="34" viewBox="0 0 120 34" style="border:1px solid #999;vertical-align:middle" aria-label="Sicherheitscode"><rect width="120" height="34" fill="#e9e3d6"/><path d="M0 20 q30 -18 60 0 t60 0" stroke="#a7988a" fill="none"/><path d="M0 8 l120 22" stroke="#bfb3a5"/><text x="10" y="25" font-family="Georgia" font-size="20" fill="#5a4636" transform="rotate(-6 30 20)">k</text><text x="28" y="24" font-family="Courier New" font-size="22" fill="#3b4f6e" transform="rotate(8 38 20)">R</text><text x="50" y="27" font-family="Verdana" font-size="18" fill="#6e3b3b">7</text><text x="70" y="22" font-family="Georgia" font-size="22" fill="#3d5a3b" transform="rotate(-10 78 18)">m</text><text x="94" y="26" font-family="Courier New" font-size="20" fill="#5a4636" transform="rotate(12 100 20)">Q</text></svg><br><input type="text" size="10" aria-label="Sicherheitscode"> <span class="klein">Bitte geben Sie die Zeichen aus dem Bild ein. Groß- und Kleinschreibung beachten.</span></td></tr>' +
  '<tr><td></td><td><button type="submit">Absenden</button> <button type="reset">Zurücksetzen</button></td></tr></table></form>' +
  '<p class="klein">* Pflichtfeld</p><div id="kontakt-meldung"></div>'};
MS.kontakt = function () {
  var m = document.getElementById('kontakt-meldung');
  m.innerHTML = '<p class="klein">Bitte warten …</p>';
  setTimeout(function () {
    m.innerHTML = '<div class="fehler">Ihre Nachricht konnte nicht versendet werden (Fehlercode 0x80040211). Bitte wenden Sie sich telefonisch an die Zentrale unter (0 12 34) 5 67-0.</div>';
  }, 1800);
  return false;
};

/* ---------- Seite empfehlen ---------- */
S[930] = {html:
  '<p>Sie möchten eine Seite unseres Internetangebotes weiterempfehlen? Füllen Sie einfach das folgende Formular aus.</p>' +
  '<form onsubmit="return MS.empfehlen()"><table class="formular">' +
  '<tr><td>E-Mail des Empfängers: *</td><td><input type="text" id="emp" size="36" aria-label="E-Mail des Empfängers"></td></tr>' +
  '<tr><td>Ihr Name: *</td><td><input type="text" id="empname" size="36" aria-label="Ihr Name"></td></tr>' +
  '<tr><td>Ihre Nachricht:</td><td><textarea id="empnachricht" rows="4" cols="40" aria-label="Ihre Nachricht">Schau mal, das habe ich auf den Seiten der Stadt Musterstadt gefunden!</textarea></td></tr>' +
  '<tr><td></td><td><button type="submit">Empfehlung senden</button></td></tr></table></form>'};
MS.empfehlen = function () {
  var an = document.getElementById('emp').value;
  var text = document.getElementById('empnachricht').value + '\n\n' + (document.referrer || 'www.stadt-musterstadt.de') + '\n\n' + document.getElementById('empname').value;
  location.href = 'mailto:' + encodeURIComponent(an) + '?subject=' + encodeURIComponent('Empfehlung: Stadt Musterstadt') + '&body=' + encodeURIComponent(text);
  return false;
};

/* ---------- Sitemap ---------- */
S[910] = {html: function () {
  function baum(id) {
    var k = (MS.kinder[id] || []).filter(function (c) { return !MS.knoten[c].opt.versteckt; });
    if (!k.length) return '';
    return '<ul>' + k.map(function (c) { return '<li>' + MS.link(c) + baum(c) + '</li>'; }).join('') + '</ul>';
  }
  return '<p class="klein">Stand der Sitemap: 03/2007</p><div class="sitemap"><ul><li>' + MS.link(1) + baum(1) +
    '</li><li><a href="index.html?id=170&amp;L=0">Stadtmarketing</a></li><li><a href="index.html?id=299&amp;L=0">Bürgerservice online (Formularserver)</a></li>' +
    '<li><a href="index.html?id=688&amp;L=0">Freibad Musterstadt</a></li></ul></div>' +
    '<p>' + [920, 921, 922, 923, 900, 905].map(function (i) { return MS.link(i); }).join(' | ') + '</p>';
}};

/* ---------- Suche ---------- */
S[915] = {html: function () {
  var q = (MS.param.get('q') || '').trim();
  var kopf = '<form action="index.html" method="get"><input type="hidden" name="id" value="915"><input type="hidden" name="L" value="0"><label for="suchfeld">Suchbegriff:</label> <input type="text" id="suchfeld" name="q" size="30" value="' + MS.esc(q) + '"> <button type="submit">Suchen</button></form>';
  if (!q || q === 'Suchbegriff eingeben') return kopf + '<p>Bitte geben Sie einen Suchbegriff ein.</p>';
  var w = q.toLowerCase();
  var treffer = [];
  Object.keys(MS.knoten).forEach(function (k) {
    var n = MS.knoten[k], s = MS.seiten[k];
    var text = n.titel + ' ' + (s && typeof s.html === 'string' ? s.html.replace(/<[^>]+>/g, ' ') : '') + ' ' + (s && s.suchwoerter ? s.suchwoerter : '');
    if (text.toLowerCase().indexOf(w) > -1 && +k !== 915) treffer.push(+k);
  });
  MS.melde('suche', {begriff: q, treffer: treffer.length});
  if (!treffer.length) return kopf + '<p>Ihre Suche nach „' + MS.esc(q) + '“ ergab keine Treffer.</p><p>Tipps: Überprüfen Sie die Schreibweise oder verwenden Sie allgemeinere Begriffe. Sie können auch die ' + MS.link(910, 'Sitemap') + ' nutzen.</p>';
  return kopf + '<p>Ihre Suche nach „' + MS.esc(q) + '“ ergab ' + treffer.length + ' Treffer:</p><ol>' +
    treffer.map(function (k) { return '<li>' + MS.link(k) + '<br><span class="klein">www.stadt-musterstadt.de/index.html?id=' + k + '</span></li>'; }).join('') + '</ol>';
}};

})();
