/* KommunalCMS 3.2 - Inhalte: Bauen & Wohnen */
window.MS = window.MS || {};
MS.seiten = MS.seiten || {};
(function () {
var S = MS.seiten;
var u = function (id, extra) { return 'index.html?id=' + id + '&amp;L=0' + (extra || ''); };
var a = function (id, text) { return '<a href="' + u(id) + '">' + text + '</a>'; };
var tel = function (d) { return '(0 12 34) 5 67-' + d; };
var pdf = function (datei, text, groesse) { return '<a href="pdf/' + datei + '" data-ereignis="pdf">' + text + '</a> <span class="pdf">(PDF, ' + groesse + ')</span>'; };

S[300] = {html:
  '<p>Ob Neubau, Anbau, Gartenhaus oder Denkmal: Hier finden Sie Informationen rund um das Bauen in Musterstadt.</p>' +
  '<table class="tab"><tr><th>Thema</th><th>Zuständig</th></tr>' +
  '<tr><td>' + a(305, 'Bauanträge, Bauberatung, genehmigungsfreie Vorhaben') + '</td><td>Bauaufsicht, Rüdiger Hamacher</td></tr>' +
  '<tr><td>' + a(309, 'Bebauungspläne') + '</td><td>Bauaufsicht / Planung</td></tr>' +
  '<tr><td>' + a(314, 'Denkmalschutz') + '</td><td>Untere Denkmalbehörde</td></tr>' +
  '<tr><td>' + a(318, 'Straßen, Baustellen, Straßenbeleuchtung') + '</td><td>Tiefbauamt, Dipl.-Ing. Hartmut Seifert</td></tr></table>' +
  '<p>Das Dezernat IV (Bauen und Umwelt) wird derzeit kommissarisch vom Bürgermeister geleitet.</p>'};

S[305] = {suchwoerter: 'Bauantrag Baugenehmigung Gartenhaus genehmigungsfrei Bauberatung Abstandfläche Nebengebäude Garage Carport', html:
  '<p>Die Bauaufsicht der Stadt Musterstadt ist als Untere Bauaufsichtsbehörde für die Prüfung von Bauanträgen im Stadtgebiet zuständig.</p>' +
  '<h3 class="zw">Bauberatung</h3><p>Vor der Einreichung eines Bauantrags empfehlen wir ein Beratungsgespräch. Bauberatung findet ausschließlich donnerstags von 14:00 bis 18:00 Uhr statt. Bitte bringen Sie einen Lageplan und, soweit vorhanden, Skizzen Ihres Vorhabens mit.</p>' +
  '<h3 class="zw">Genehmigungsfreie Vorhaben</h3><p>Bestimmte kleinere Vorhaben sind nach § 65 der Bauordnung NRW genehmigungsfrei, zum Beispiel Gebäude ohne Aufenthaltsräume, Toiletten und Feuerstätten bis 30 m³ Brutto-Rauminhalt, sofern sie nicht im Außenbereich liegen.</p>' +
  '<div class="hinweis"><b>Wichtig:</b> Genehmigungsfrei heißt nicht regelfrei. Auch genehmigungsfreie Vorhaben müssen den Festsetzungen des Bebauungsplans, den Abstandflächenvorschriften und den Vorschriften des Denkmalschutzes entsprechen. Bitte prüfen Sie vor Baubeginn den für Ihr Grundstück geltenden ' + a(309, 'Bebauungsplan') + ' und klären Sie, ob Ihr Grundstück in der Nähe eines ' + a(314, 'Denkmals') + ' liegt.</div>' +
  '<h3 class="zw">Bauantrag</h3><p>Bauanträge sind schriftlich in dreifacher Ausfertigung bei der Bauaufsicht einzureichen. Die Bauvorlagen müssen von einer bauvorlageberechtigten Person (Architektin, Architekt, Bauingenieurin, Bauingenieur) unterschrieben sein. Die amtlichen Vordrucke nach der Bauprüfverordnung NRW erhalten Sie in Raum 402.</p>' +
  '<p>Die Bearbeitungsdauer beträgt bei vollständigen Unterlagen in der Regel sechs bis zehn Wochen. Fehlende Unterlagen werden mit Fristsetzung nachgefordert.</p>' +
  '<h3 class="zw">Kontakt</h3><p>Rüdiger Hamacher, Bauaufsicht<br>Neues Rathaus, Raum 402<br>Telefon: ' + tel('6 10') + '<br>Bauberatung: Do 14:00–18:00 Uhr</p>'};

var BPL = [
  ['3', 'Innenstadt', '1968', '4. Änderung 1997', 'Kerngebiet um Marktplatz und Kirchstraße'],
  ['12', 'Lindenstraße Süd', '1979', '3. Änderung im Verfahren', 'Mischgebiet zwischen Lindenstraße und Bahnlinie'],
  ['21', 'Oberkleeberg Ortskern', '1982', '', 'Dorfgebiet Oberkleeberg'],
  ['33', 'Industriestraße', '1988', '1. Änderung 2003', 'Gewerbegebiet mit Bauhof und Feuerwehr'],
  ['47', 'Am Mühlenbach', '1996', '1. Änderung 2008', 'Wohngebiet und Kleingartenanlage entlang des Mühlenbachs und der Stadtmauer'],
  ['52', 'Am Stempelwerk', '2001', '', 'ehemaliges Fabrikgelände Kranz, Museum und Gewerbe'],
  ['58', 'Fuchsweg', '2005', '', 'Neubaugebiet am Ortsrand Richtung Muster-Auen']
];
S[309] = {suchwoerter: 'Bebauungsplan ' + BPL.map(function (b) { return 'Nr. ' + b[0] + ' ' + b[1] + ' ' + b[4]; }).join(' ') + ' Nebenanlagen 20 m³ Stadtmauer Abstand textliche Festsetzungen', html: function () {
  return '<p>Bebauungspläne regeln, wie Grundstücke bebaut werden dürfen. Alle rechtskräftigen Bebauungspläne können in der Bauaufsicht, Raum 402, während der Dienststunden eingesehen werden. Für ausgewählte Pläne stehen Planzeichnung und textliche Festsetzungen zum Download bereit.</p>' +
    '<table class="tab"><tr><th>Nr.</th><th>Bezeichnung</th><th>rechtskräftig seit</th><th>Änderungen</th><th>Gebiet</th></tr>' +
    BPL.map(function (b) { return '<tr><td>' + b[0] + '</td><td>' + b[1] + '</td><td>' + b[2] + '</td><td>' + (b[3] || '–') + '</td><td>' + b[4] + '</td></tr>'; }).join('') + '</table>' +
    '<h2>Bebauungsplan Nr. 47 „Am Mühlenbach“, 1. Änderung</h2>' +
    '<p>' + pdf('bplan-47-planzeichnung.pdf', 'Planzeichnung', '4 KB') + '<br>' + pdf('bplan-47-textliche-festsetzungen.pdf', 'Textliche Festsetzungen', '4 KB') + '</p>' +
    '<p><b>Auszug aus den textlichen Festsetzungen:</b></p>' +
    '<p>3.1 Nebenanlagen im Sinne des § 14 BauNVO sind in den als private Grünfläche (Gartenland) festgesetzten Bereichen nur bis zu einem Brutto-Rauminhalt von insgesamt 20 m³ je Grundstück zulässig.<br>3.2 Gegenüber der historischen Stadtmauer ist mit baulichen Anlagen aller Art ein Abstand von mindestens 5,00 m einzuhalten.<br>3.3 Dächer von Nebenanlagen sind als Satteldach oder Pultdach auszuführen. Die Dacheindeckung ist in Rot- oder Brauntönen zu halten.<br>3.4 Im Geltungsbereich der Kleingartenanlage „Am Mühlenbach“ gelten ergänzend die Bestimmungen der Gartenordnung des Kleingartenvereins.</p>' +
    '<h2>Bebauungsplan Nr. 12 „Lindenstraße Süd“, 3. Änderung (Entwurf)</h2>' +
    '<p>Der Entwurf liegt vom 12.10.2009 bis 13.11.2009 öffentlich aus. Siehe ' + a(142, 'Öffentliche Bekanntmachungen') + '.</p>' +
    '<p>' + pdf('bplan-12-3-aenderung-entwurf.pdf', 'Entwurf mit Begründung', '5 KB') + '</p>' +
    '<p class="klein">Die Planzeichnungen sind nicht maßstabsgetreu. Rechtsverbindlich ist allein das Original in der Bauaufsicht.</p>';
}};

S[314] = {suchwoerter: 'Denkmal Denkmalliste Stadtmauer Altes Rathaus St. Martin Stempelfabrik Marktplatz Denkmalbereich Erlaubnis Umgebung Anthrazit RAL 7016', html:
  '<p>Musterstadt verfügt über einen reichen Bestand an Baudenkmälern. Die Untere Denkmalbehörde ist bei der Bauaufsicht angesiedelt.</p>' +
  '<h3 class="zw">Auszug aus der Denkmalliste</h3><table class="tab"><tr><th>Nr.</th><th>Denkmal</th><th>Lage</th><th>eingetragen</th></tr>' +
  '<tr><td>A 1</td><td>Kath. Pfarrkirche St. Martin</td><td>Kirchstraße</td><td>1984</td></tr>' +
  '<tr><td>A 2</td><td>Altes Rathaus (heute Stadtarchiv und Trauzimmer)</td><td>Marktplatz 3</td><td>1984</td></tr>' +
  '<tr><td>A 3</td><td>Stadtmauer mit Pulverturm (erhaltene Teilstücke)</td><td>Am Mühlenbach, Gartenstraße</td><td>1985</td></tr>' +
  '<tr><td>A 7</td><td>Mühlenwehr an der Muster</td><td>Auenweg</td><td>1989</td></tr>' +
  '<tr><td>A 12</td><td>Ehemalige Gummistempelfabrik Heinrich Kranz (heute Deutsches Stempelmuseum)</td><td>Am Stempelwerk 1</td><td>1995</td></tr>' +
  '<tr><td>B 1</td><td>Denkmalbereich „Historischer Marktplatz“</td><td>Marktplatz und angrenzende Bebauung</td><td>1991</td></tr></table>' +
  '<p class="klein">Die Prüfung der Denkmaleigenschaft des Neuen Rathauses (1969) ist noch nicht abgeschlossen.</p>' +
  '<h3 class="zw">Erlaubnispflicht</h3><p>Nach § 9 des Denkmalschutzgesetzes NRW bedarf der Erlaubnis, wer ein Baudenkmal beseitigen, verändern oder in seiner Nutzung ändern will. Erlaubnispflichtig sind auch Anlagen <b>in der engeren Umgebung</b> von Baudenkmälern, wenn hierdurch das Erscheinungsbild des Denkmals beeinträchtigt wird. Dies gilt auch für genehmigungsfreie Vorhaben wie Gartenhäuser, Zäune oder Werbeanlagen.</p>' +
  '<h3 class="zw">Denkmalbereich Marktplatz</h3><p>Im Denkmalbereich „Historischer Marktplatz“ gelten besondere Gestaltungsvorgaben. Tische, Stühle und sonstige Möblierung im öffentlichen Raum sind ausschließlich in Anthrazit (RAL 7016) zulässig. Sonnenschirme sind naturweiß ohne Werbeaufdruck auszuführen. Werbeaufsteller sind unzulässig. Siehe ' + pdf('denkmalbereichssatzung.pdf', 'Denkmalbereichssatzung', '7 KB') + '.</p>' +
  '<h3 class="zw">Kontakt</h3><p>Untere Denkmalbehörde: Rüdiger Hamacher<br>Neues Rathaus, Raum 402<br>Telefon: ' + tel('6 15') + '</p>'};

S[318] = {suchwoerter: 'Tiefbau Baustelle Straßenbeleuchtung Winterdienst Streupflicht Kanal Umleitung', html:
  '<p>Das Tiefbauamt ist für Bau und Unterhaltung der städtischen Straßen, Wege, Brücken und der Straßenbeleuchtung zuständig.</p>' +
  '<h3 class="zw">Aktuelle Baustellen</h3><table class="tab"><tr><th>Maßnahme</th><th>Ort</th><th>Dauer</th></tr>' +
  '<tr><td>' + a(319, 'Umbau zum Kreisverkehrsplatz') + '</td><td>Lindenstraße/Mühlenweg</td><td>05/2008 – voraussichtlich 12/2009</td></tr>' +
  '<tr><td>Kanalsanierung</td><td>Kirchstraße zwischen Marktplatz und Schillerstraße</td><td>10.11.2009 – 18.12.2009 (Unterbrechung am 11.11.)</td></tr>' +
  '<tr><td>Erneuerung der Gehwegplatten</td><td>Bahnhofstraße</td><td>bis 30.10.2009</td></tr></table>' +
  '<h3 class="zw">Defekte Straßenbeleuchtung</h3><p>Defekte Straßenleuchten melden Sie bitte unter ' + tel('6 25') + '. Bitte geben Sie die Nummer an, die auf dem Mast der Leuchte angebracht ist.</p>' +
  '<h3 class="zw">Winterdienst</h3><p>Der städtische Winterdienst räumt und streut die Fahrbahnen nach einem Dringlichkeitsplan. Für die Gehwege vor ihren Grundstücken sind die Anliegerinnen und Anlieger zuständig. Gehwege sind werktags bis 7:00 Uhr, sonn- und feiertags bis 9:00 Uhr von Schnee zu räumen und bei Glätte zu streuen. Die Verwendung von Streusalz auf Gehwegen ist nicht gestattet.</p>' +
  '<h3 class="zw">Kontakt</h3><p>Dipl.-Ing. Hartmut Seifert, Leiter des Tiefbauamtes<br>Neues Rathaus, Raum 410<br>Telefon: ' + tel('6 20') + '</p>'};

S[319] = {suchwoerter: 'Kreisverkehr Lindenstraße Mühlenweg Esser Tiefbau Mittelinsel Fuchs Skulptur Umleitung Durchmesser', html:
  '<svg width="240" height="220" viewBox="0 0 240 220" style="float:right;margin:0 0 8px 12px;border:1px solid #bbb;background:#eef0e8" aria-label="Lageplan Kreisverkehr"><rect x="0" y="95" width="240" height="30" fill="#b9b9b9"/><rect x="105" y="0" width="30" height="220" fill="#b9b9b9"/><circle cx="120" cy="110" r="58" fill="#b9b9b9"/><circle cx="120" cy="110" r="30" fill="#8db36e"/><path d="M158 150 L200 200" stroke="#b9b9b9" stroke-width="22"/><rect x="185" y="185" width="50" height="30" fill="#d7c7a5" stroke="#777"/><text x="210" y="204" text-anchor="middle" font-family="Verdana" font-size="9" fill="#333">Nr. 52</text><text x="10" y="90" font-family="Verdana" font-size="9" fill="#333">Lindenstraße</text><text x="140" y="14" font-family="Verdana" font-size="9" fill="#333">Mühlenweg</text><text x="120" y="113" text-anchor="middle" font-family="Verdana" font-size="8" fill="#2f4a1f">Mittelinsel</text><text x="6" y="214" font-family="Verdana" font-size="8" fill="#666">schematisch, nicht maßstäblich</text></svg>' +
  '<p>Der Knotenpunkt Lindenstraße/Mühlenweg wird zu einem modernen Kreisverkehrsplatz umgebaut. Der Kreisverkehr verbessert die Verkehrssicherheit und den Verkehrsfluss an einem der wichtigsten Knotenpunkte der Stadt.</p>' +
  '<table class="tab"><tr><th colspan="2">Projektdaten</th></tr>' +
  '<tr><td>Baubeschluss</td><td>Rat, 14.12.2006</td></tr>' +
  '<tr><td>Baubeginn</td><td>Mai 2008</td></tr>' +
  '<tr><td>Fertigstellung</td><td>Ende 2008</td></tr>' +
  '<tr><td>Außendurchmesser</td><td>26 m</td></tr>' +
  '<tr><td>Zufahrten</td><td>3 (Lindenstraße Nord, Lindenstraße Süd, Mühlenweg)</td></tr>' +
  '<tr><td>Ausführung</td><td>Esser Tiefbau GmbH, Musterstadt</td></tr>' +
  '<tr><td>Bauleitung</td><td>Tiefbauamt der Stadt Musterstadt</td></tr>' +
  '<tr><td>Kosten</td><td>412.000 €</td></tr></table>' +
  '<h3 class="zw">Umleitung</h3><p>Während der Bauzeit wird der Verkehr über die Bahnhofstraße umgeleitet. Die Haltestelle „Kreishaus“ der Linie 4 ist um rund 120 m verlegt.</p>' +
  '<h3 class="zw">Gestaltung der Mittelinsel</h3><p>Auf Anregung des Heimatvereins soll die Mittelinsel mit einer Fuchsskulptur gestaltet werden, die an das Wappentier der Stadt erinnert. Die Finanzierung soll über Spenden erfolgen.</p>' +
  '<h3 class="zw">Chronik</h3><ul><li>' + a(1008, '15.12.2006: Rat beschließt Kreisverkehr') + '</li><li>' + a(1011, '04.06.2007: Baubeginn verschiebt sich') + '</li><li>' + a(1012, '12.05.2008: Spatenstich') + '</li><li>' + a(1013, '15.09.2008: Kampfmittelverdacht') + '</li><li>' + a(1015, '09.02.2009: Anpassung der Entwässerung') + '</li><li>' + a(1018, '30.06.2009: Verbesserte Erschließung Lindenstraße Süd') + '</li><li>' + a(1006, '22.09.2009: Fertigstellung im Dezember') + '</li></ul>' +
  '<p>Fragen zum Kreisverkehr beantwortet das Tiefbauamt unter ' + tel('6 20') + '.</p>'};


/* ---------- Bahnhof & Busverkehr ---------- */
MS.ziele.kreisbus = ['www.kreis-muster.de (Bus & Bahn)', 'kreis/index.html?id=206'];
S[320] = {stand: '07.10.2009', suchwoerter: 'Bahnhof Zug Regionalbahn Muster-Talbahn Köln Gleis Fahrkarte Fahrkartenschalter Automat Wartesaal Kiosk Park and Ride Fahrrad Bus VKM Kundencenter Schienenersatzverkehr SEV Ellerbusch Taxi', html: function () {
  return '<div class="hinweis"><b>Schienenersatzverkehr:</b> Wegen Gleisbauarbeiten verkehren vom 26.10. bis 06.11.2009 zwischen Musterstadt und Ellerbusch Ersatzbusse. Die Ersatzbusse fahren am Bahnhofsvorplatz ab (Haltestelle der Linie 640), in der Regel 10 Minuten vor der planmäßigen Abfahrt des Zuges. Fahrräder können im Ersatzverkehr nicht befördert werden.</div>' +
    '<h3 class="zw">Bahnhof Musterstadt</h3><p>Der Bahnhof Musterstadt liegt an der Muster-Talbahn. Das Empfangsgebäude wurde 1878 errichtet und 1998 umfassend saniert. Es beherbergt den Fahrkartenschalter der Rheinland-Mitte-Bahn, das Kundencenter der VKM, den Wartesaal und den Bahnhofskiosk.</p>' +
    '<table class="tab"><tr><th colspan="2">Zugverbindungen</th></tr>' +
    '<tr><td width="150">Muster-Talbahn</td><td>Regionalbahn, Montag bis Freitag stündlich Richtung Köln und Richtung Ellerbusch, am Wochenende alle zwei Stunden. Letzte Abfahrt Richtung Köln gegen 23 Uhr.</td></tr>' +
    '<tr><td>Fernverkehr</td><td>Anschluss an den Fernverkehr in Köln Hbf</td></tr>' +
    '<tr><td>Betreiber</td><td>Rheinland-Mitte-Bahn GmbH</td></tr></table>' +
    '<table class="tab"><tr><th colspan="2">Ausstattung</th></tr>' +
    '<tr><td width="150">Fahrkartenschalter</td><td>im Empfangsgebäude, Betreiber Rheinland-Mitte-Bahn: Mo–Fr 6:30–18:00 Uhr, Sa 8:00–12:00 Uhr, So geschlossen. Außerhalb der Schalterzeiten steht der Fahrkartenautomat auf Gleis 1 zur Verfügung.</td></tr>' +
    '<tr><td>Kundencenter VKM</td><td>im Empfangsgebäude (Bahnhofsvorplatz 1), Mo–Fr 8:00–17:00 Uhr, Sa geschlossen. Eigener Schalter mit eigenen Öffnungszeiten.</td></tr>' +
    '<tr><td>Wartesaal</td><td>nur während der Schalterzeiten geöffnet</td></tr>' +
    '<tr><td>Bahnhofskiosk</td><td>im Empfangsgebäude: Zeitungen, Kaffee, Snacks, täglich 5:30–20:00 Uhr</td></tr>' +
    '<tr><td>Gleise</td><td>Gleis 1 (Richtung Köln) ebenerdig vom Bahnhofsvorplatz. Gleis 2 (Richtung Ellerbusch) über die Personenunterführung mit Treppe. Ein Aufzug ist in Planung.</td></tr>' +
    '<tr><td>Park + Ride</td><td>120 Stellplätze, kostenfrei</td></tr>' +
    '<tr><td>Fahrräder</td><td>überdachte Fahrradständer. Abschließbare Fahrradboxen können beim Tiefbauamt gemietet werden (Warteliste).</td></tr>' +
    '<tr><td>WC</td><td>gebührenpflichtig (0,50 €)</td></tr>' +
    '<tr><td>Taxi</td><td>Taxistand am Bahnhofsvorplatz, Taxi Musterstadt (0 12 34) 4 44 44</td></tr></table>' +
    '<h3 class="zw">Busverkehr</h3><p>Aufgabenträger für den öffentlichen Personennahverkehr ist der Kreis Muster. Die Stadtbuslinien 1 bis 4, die Regionalbuslinie 640 sowie die Schulbuslinien E1 bis E3 werden von der Verkehrsgesellschaft Kreis Muster mbH (VKM) betrieben. Alle Linien beginnen am Bahnhof. Fahrpläne, Tarife und das AnrufSammelTaxi finden Sie auf den Seiten des Kreises.</p>' +
    '<p><a href="' + u(925, '&amp;ziel=kreisbus') + '">Bus &amp; Bahn im Kreis Muster</a> <span class="klein">(externer Link)</span></p>' +
    '<p class="klein">Fragen zu Bahnhof und Bahnhofsumfeld beantwortet das Tiefbauamt, ' + tel('6 20') + '.</p>';
}};
})();
