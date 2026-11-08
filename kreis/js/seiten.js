/* Regio-Portal 2.0 - Inhalte Kreis Muster */
window.MS = window.MS || {};
MS.seiten = MS.seiten || {};
MS.ziele = {musterstadt: ['www.stadt-musterstadt.de', '../index.html'], termin: ['Kommunaler Terminserver (KTS)', '../termin/index.html?behoerde=kr-zul']};
(function () {
var S = MS.seiten;
var u = function (id, extra) { return 'index.html?id=' + id + '&amp;L=0' + (extra || ''); };
var a = function (id, text) { return '<a href="' + u(id) + '">' + text + '</a>'; };
var tel = function (d) { return '(0 12 34) 9 80-' + d; };
var pdf = function (datei, text, groesse) { return '<a href="../pdf/' + datei + '" data-ereignis="pdf">' + text + '</a> <span class="pdf">(PDF, ' + groesse + ')</span>'; };
var extern = function (ziel, text) { return '<a href="' + u(925, '&amp;ziel=' + ziel) + '">' + text + '</a>'; };

/* ---------- Leisten ---------- */
MS.startnav = function () {
  return '<h3>Online-Dienste</h3><ul>' +
    '<li><a href="' + u(202) + '">Wunschkennzeichen reservieren</a></li>' +
    '<li>' + extern('termin', 'Termin Zulassungsstelle') + '</li>' +
    '<li><a href="' + u(206) + '">Fahrpläne Bus &amp; Bahn</a></li>' +
    '<li><a href="' + u(301) + '">Gesundheitsamt</a></li></ul>' +
    '<h3>Themen</h3><ul>' +
    '<li><a href="' + u(201) + '">Zulassungsstelle</a></li><li><a href="' + u(303) + '">Kreiskrankenhaus</a></li><li><a href="' + u(401) + '">Natur &amp; Landschaft</a></li><li><a href="' + u(102) + '">Kreistag</a></li><li><a href="' + u(104) + '">Ämter &amp; Ansprechpartner</a></li></ul>';
};
var kastenZeiten = '<div class="kasten"><h3>Kreishaus</h3><div class="inh">Mo–Mi: 7:30–12:30 Uhr<br>Do: 7:30–12:30 und 14:00–17:30 Uhr<br>Fr: 7:30–12:00 Uhr<br><br>Zentrale: ' + tel('0') + '<br>Bus 4, Haltestelle Kreishaus</div></div>';
var kastenNotruf = '<div class="kasten"><h3>Notrufe</h3><div class="inh">Feuerwehr und Rettungsdienst: <b>112</b><br>Polizei: <b>110</b></div></div>';
MS.rechtsStandard = function () { return kastenZeiten + kastenNotruf; };
MS.rechtsStart = function () {
  return '<div class="kasten"><h3>Neu: Wunschkennzeichen online</h3><div class="inh"><span class="kennzeichen"><span class="eu">D</span>MU&nbsp;FX&nbsp;99</span><br><br>Reservieren Sie Ihr Wunschkennzeichen bequem von zu Hause. ' + a(202, 'Jetzt reservieren »') + '</div></div>' + kastenZeiten + kastenNotruf;
};

/* ---------- Startseite ---------- */
var NEWS = [
  [1006, '07.10.2009', true, 'Wegen Gleisbauarbeiten verkehren auf der Muster-Talbahn vom 26. Oktober bis 6. November 2009 zwischen Musterstadt und Ellerbusch Ersatzbusse.', '<p>Die Ersatzbusse fahren in Musterstadt am Bahnhofsvorplatz ab (Haltestelle der Linie 640), in der Regel 10 Minuten vor der planmäßigen Abfahrt des Zuges. Fahrräder können im Ersatzverkehr nicht befördert werden. Bitte rechnen Sie mit längeren Reisezeiten.</p><p>Siehe ' + a(2066, 'Muster-Talbahn und Schienenersatzverkehr') + '.</p>'],
  [1001, '09.10.2009', true, 'Ab dem 26. Oktober 2009 wird in Nordrhein-Westfalen gegen die Neue Grippe geimpft. Zunächst werden die von der Ständigen Impfkommission empfohlenen Personengruppen geimpft, insbesondere Beschäftigte im Gesundheitswesen und Menschen mit chronischen Erkrankungen.', '<p>Die Schutzimpfung erfolgt in erster Linie durch die niedergelassenen Ärztinnen und Ärzte. Bitte wenden Sie sich an Ihre Hausarztpraxis. Das Gesundheitsamt bietet zusätzlich eine telefonische Impfberatung an: ' + tel('5 05') + ', Mo–Fr 8:00–12:00 Uhr.</p><p>Weitere Informationen: ' + a(301, 'Gesundheitsamt') + '</p>'],
  [1002, '02.10.2009', false, 'Der Kreistag hat sich in seiner Sitzung am 1. Oktober mit dem Gutachten zur wirtschaftlichen Lage des Kreiskrankenhauses Musterstadt befasst. Eine Entscheidung wurde auf die Sitzung am 10. Dezember vertagt.', '<p>Das Gutachten stellt verschiedene Optionen vor, darunter eine Kooperation mit einem anderen Krankenhausträger und eine Veräußerung. Die Chefärztin der Klinik für Innere Medizin, Dr. med. Alexandra Dauphin, berichtete dem Kreistag über die angespannte Lage auf der Intensivstation. Der Rat der Stadt Musterstadt hat sich in einer Resolution für den Erhalt in kommunaler Trägerschaft ausgesprochen.</p><p>Siehe ' + a(102, 'Kreistag') + '.</p>'],
  [1003, '30.09.2009', false, 'Die interdisziplinäre Intensivstation des Kreiskrankenhauses Musterstadt ist an vielen Tagen voll belegt. Die Klinikleitung fordert zusätzliche Beatmungsplätze.', '<p>„Unsere acht Intensivbetten sind an vielen Tagen im Jahr vollständig belegt“, erklärt Dr. med. Alexandra Dauphin, Chefärztin der Klinik für Innere Medizin. „Wenn dann ein weiterer schwerkranker Mensch kommt, müssen wir ihn verlegen, oft in weit entfernte Häuser. Das kostet Zeit, und Zeit ist auf der Intensivstation das Wichtigste, was wir haben.“</p><p>Das Krankenhaus hat beim Kreis Mittel für vier zusätzliche Beatmungsplätze beantragt. Pressekontakt: Sabine Overbeck, (0 12 34) 6 60-1 10.</p><p>Siehe ' + a(303, 'Kreiskrankenhaus Musterstadt') + '.</p>'],
  [1004, '15.09.2009', false, 'Wegen des hohen Andrangs kommt es in der Zulassungsstelle weiterhin zu längeren Wartezeiten. Wir bitten um Ihr Verständnis.', '<p>Bitte nutzen Sie nach Möglichkeit die Online-Terminvereinbarung und reservieren Sie Wunschkennzeichen vorab online. Bitte beachten Sie, dass in der Zulassungsstelle nur mit EC-Karte bezahlt werden kann.</p><p>Fragen zur Umweltprämie beantwortet ausschließlich das Bundesamt für Wirtschaft und Ausfuhrkontrolle (BAFA). Siehe ' + a(204, 'Umweltprämie') + '.</p>'],
  [1005, '01.09.2009', false, 'Zum Fahrplanwechsel am 13. Dezember 2009 ergeben sich auf der Linie 4 kleinere Änderungen.', '<p>Die Haltestelle „Kreishaus“ wird nach Fertigstellung des Kreisverkehrs in Musterstadt an ihren ursprünglichen Standort zurückverlegt. Der neue Fahrplan wird im November veröffentlicht. Siehe ' + a(206, 'Linie 4') + '.</p>']
];
S[1] = {titel: 'Willkommen im Kreis Muster', html: function () {
  return '<p>Herzlich willkommen auf dem Internetportal des Kreises Muster! Seit unserem Relaunch im Jahr 2008 finden Sie hier noch mehr Informationen und Online-Dienste rund um Ihre Kreisverwaltung.</p>' +
    '<h2>Aktuelles</h2>' + NEWS.map(function (n) {
      return '<div class="meldung"><span class="datum">' + n[1] + '</span>' + (n[2] ? '<span class="neu">NEU</span>' : '') + '<h4>' + a(n[0], MS.knoten[n[0]].titel) + '</h4><p>' + n[3] + '</p></div>';
    }).join('') + '<p class="klein">Sie suchen die Stadt Musterstadt? ' + extern('musterstadt', 'Zur Internetseite der Stadt Musterstadt') + '</p>';
}};
NEWS.forEach(function (n) { S[n[0]] = {stand: n[1], suchwoerter: n[3], html: '<p class="klein">' + n[1] + ' – Pressestelle Kreis Muster</p><p>' + n[3] + '</p>' + n[4] + '<p>' + a(1, '« Zur Startseite') + '</p>'}; });

/* ---------- Kreis & Verwaltung ---------- */
S[100] = {html: '<p>Der Kreis Muster wurde im Zuge der kommunalen Neugliederung 1975 gebildet. Sitz der Kreisverwaltung ist Musterstadt. Der Kreis nimmt Aufgaben wahr, die über die Leistungskraft der einzelnen Städte und Gemeinden hinausgehen, zum Beispiel Kfz-Zulassung, Gesundheitsamt, Naturschutz und Kreiskrankenhaus.</p><ul class="uebersicht"><li>' + a(101, 'Landrat') + '</li><li>' + a(102, 'Kreistag') + '</li><li>' + a(103, 'Kreishaus &amp; Öffnungszeiten') + '</li><li>' + a(104, 'Ämter &amp; Ansprechpartner') + '</li><li><a href="wappen.html">Wappen des Kreises</a></li></ul>'};
S[101] = {html: '<p>Liebe Bürgerinnen und Bürger,</p><p>der Kreis Muster ist lebenswert: mit intakter Natur in den Muster-Auen, einer leistungsfähigen Verwaltung und einem Kreiskrankenhaus, das für die wohnortnahe Versorgung unverzichtbar ist. Mit unserem neuen Internetportal möchten wir Ihnen den Kontakt zur Kreisverwaltung so einfach wie möglich machen.</p><p>Ihr<br><i>Dr. Friedhelm Odenthal</i><br>Landrat des Kreises Muster</p><h3 class="zw">Zur Person</h3><p>Dr. Friedhelm Odenthal, Jahrgang 1956, Jurist, ist seit 2004 Landrat des Kreises Muster. Zuvor war er Kreisdirektor.</p><p>Büro des Landrats: ' + tel('1 00') + '</p>'};
S[102] = {suchwoerter: 'Kreistag Sitzung Kreiskrankenhaus Gutachten Kreisumlage Dauphin Intensivbetten vertagt', html:
  '<p>Der Kreistag ist das oberste Organ des Kreises. Er besteht aus 54 Mitgliedern und dem Landrat als Vorsitzendem. Die Sitzungen finden im Großen Sitzungssaal des Kreishauses statt und sind öffentlich.</p>' +
  '<h2>Sitzung vom 01.10.2009 (Auszug aus der Niederschrift, öffentlicher Teil)</h2>' +
  '<h3 class="zw">TOP 3: Gutachten zur Zukunft des Kreiskrankenhauses Musterstadt</h3><p>Der Gutachter stellt die Optionen „Fortführung in eigener Trägerschaft“, „Kooperation“ und „Veräußerung“ vor. Das Haus erwirtschaftet seit 2006 Defizite.</p><p>Die Chefärztin der Klinik für Innere Medizin, Dr. med. Alexandra Dauphin, berichtet über die Auslastung der Intensivstation. Sie weist darauf hin, dass die interdisziplinäre Intensivstation mit acht Betten häufig voll ausgelastet sei, und bittet um die kurzfristige Bereitstellung von Mitteln für vier zusätzliche Beatmungsplätze. Auf Nachfrage erklärt sie, eine Verlegung schwerkranker Patienten in andere Häuser sei schon heute oft nur über weite Entfernungen möglich. Ein Verkauf des Hauses dürfe die Intensivversorgung nicht weiter schwächen.</p><p>Der Landrat verweist auf die Haushaltslage. Die Resolution des Rates der Stadt Musterstadt vom 24.09.2009 wird zur Kenntnis genommen.</p><p><b>Beschluss:</b> Die Entscheidung über die Zukunft des Kreiskrankenhauses wird auf die Sitzung am 10.12.2009 vertagt. Über die zusätzlichen Beatmungsplätze entscheidet der Kreisausschuss am 22.10.2009.<br><i>Abstimmung: mehrheitlich</i></p>' +
  '<h3 class="zw">TOP 5: Entwurf der Kreisumlage 2010</h3><p>Die kreisangehörigen Städte und Gemeinden wurden zum Entwurf angehört. Die Stadt Musterstadt hat Einwendungen gegen die Höhe der Kreisumlage erhoben.</p>' +
  '<h2>Nächste Sitzungen</h2><table class="tab"><tr><td>22.10.2009</td><td>Kreisausschuss</td></tr><tr><td>10.12.2009</td><td>Kreistag</td></tr></table>'};
S[103] = {suchwoerter: 'Kreishaus Öffnungszeiten Anfahrt Parken Bus 4', html:
  '<p>Das Kreishaus in Musterstadt wurde 1976 bezogen. Hier befinden sich die meisten Ämter der Kreisverwaltung.</p>' +
  '<table class="tab"><tr><th colspan="2">Allgemeine Öffnungszeiten</th></tr><tr><td>Montag bis Mittwoch</td><td>7:30–12:30 Uhr</td></tr><tr><td>Donnerstag</td><td>7:30–12:30 und 14:00–17:30 Uhr</td></tr><tr><td>Freitag</td><td>7:30–12:00 Uhr</td></tr></table>' +
  '<p class="klein">Bitte beachten Sie: Die Öffnungszeiten der Kreisverwaltung weichen von denen der Stadtverwaltung Musterstadt ab.</p>' +
  '<h3 class="zw">Anfahrt</h3><p>Am Kreishaus 1, 43999 Musterstadt. Mit dem Bus: Linie 4, Haltestelle „Kreishaus“. Die Haltestelle ist wegen der Bauarbeiten am Kreisverkehr derzeit um rund 120 m verlegt. Mit dem Auto: Parkplatz am Kreishaus, 0,50 € je angefangene halbe Stunde. Bitte beachten Sie die Umleitung über die Bahnhofstraße.</p>'};
var AEMTER = [
  ['Landrat', 'Dr. Friedhelm Odenthal', '1 00', '1. OG'],
  ['Straßenverkehrsamt, Zulassungsstelle', 'Karin Zimmermann', '3 30', 'EG'],
  ['Führerscheinstelle', 'Sachbearbeitung', '3 40', 'EG'],
  ['Gesundheitsamt', 'Dr. med. Ute Hesse', '5 00', '2. OG'],
  ['Impfberatung', 'Gesundheitsamt', '5 05', '2. OG'],
  ['Veterinär- und Lebensmittelüberwachung', 'Dr. med. vet. Annegret Lüttgen', '5 50', '2. OG'],
  ['Untere Landschaftsbehörde', 'Dr. Kerstin Wollenweber', '6 10', 'Raum 214'],
  ['Schulamt', 'Sachbearbeitung', '4 00', '3. OG'],
  ['Kreisarchiv', 'Dr. Paul Thelen', '4 50', 'UG'],
  ['Kreismusikschule', 'Sekretariat', '4 70', 'Nebengebäude'],
  ['Kreiskasse', 'Sachbearbeitung', '2 30', 'EG']
];
S[104] = {suchwoerter: AEMTER.map(function (x) { return x.join(' '); }).join(' '), html: function () {
  return '<p>Die Rufnummer setzt sich zusammen aus der Vorwahl (0 12 34), der Rufnummer 9 80 und der Durchwahl.</p><table class="tab"><tr><th>Amt</th><th>Ansprechpartner/in</th><th>Durchwahl</th><th>Lage</th></tr>' +
    AEMTER.map(function (x) { return '<tr><td>' + x[0] + '</td><td>' + x[1] + '</td><td>-' + x[2] + '</td><td>' + x[3] + '</td></tr>'; }).join('') + '</table>' +
    '<p>ARGE Kreis Muster: Bahnhofstraße 40, Telefon (0 12 34) 9 81-0<br>Kreiskrankenhaus Musterstadt: Am Hospitalgarten 5, Telefon (0 12 34) 6 60-0</p>';
}};

/* ---------- Verkehr ---------- */
S[200] = {html: '<p>Das Straßenverkehrsamt des Kreises Muster ist für alle Städte und Gemeinden im Kreis zuständig.</p><ul class="uebersicht"><li>' + a(201, 'Zulassungsstelle') + '</li><li>' + a(202, 'Wunschkennzeichen') + '</li><li>' + a(203, 'Umweltplakette') + '</li><li>' + a(204, 'Umweltprämie (Abwrackprämie)') + '</li><li>' + a(205, 'Führerscheinstelle') + '</li><li>' + a(206, 'Bus &amp; Bahn: Linie 4') + '</li></ul>'};
S[201] = {suchwoerter: 'Zulassung Neuzulassung Ummeldung Abmeldung eVB Versicherung Zulassungsbescheinigung Fahrzeugbrief Fahrzeugschein Einzugsermächtigung Kfz-Steuer EC-Karte Kennzeichen MU Wartemarke Meldebescheinigung', html:
  '<p>Die Zulassungsstelle ist zuständig für Zulassung, Umschreibung und Außerbetriebsetzung von Fahrzeugen. Das Unterscheidungszeichen des Kreises Muster ist <b>MU</b>.</p>' +
  '<table class="tab"><tr><th colspan="2">Öffnungszeiten der Zulassungsstelle</th></tr><tr><td>Montag bis Freitag</td><td>7:30–12:00 Uhr</td></tr><tr><td>Donnerstag zusätzlich</td><td>14:00–17:30 Uhr</td></tr></table>' +
  '<p>Wartemarken werden bis 11:30 Uhr bzw. donnerstags bis 17:00 Uhr ausgegeben. Bei großem Andrang kann die Ausgabe früher eingestellt werden. Mit Termin über die ' + extern('termin', 'Online-Terminvereinbarung') + ' werden Sie bevorzugt aufgerufen.</p>' +
  '<h3 class="zw">Für eine Zulassung benötigen Sie</h3><ul><li>Zulassungsbescheinigung Teil II (früher Fahrzeugbrief)</li><li>bei Gebrauchtfahrzeugen: Zulassungsbescheinigung Teil I (früher Fahrzeugschein) und Nachweis über die Hauptuntersuchung</li><li>bei Neufahrzeugen: Übereinstimmungsbescheinigung (COC)</li><li>elektronische Versicherungsbestätigung (eVB-Nummer) Ihrer Kfz-Versicherung</li><li>Personalausweis mit aktueller Anschrift oder Reisepass mit Meldebescheinigung</li><li>Einzugsermächtigung für die Kraftfahrzeugsteuer</li><li>bei Vertretung: schriftliche Vollmacht und Ausweis der vertretenen Person</li></ul>' +
  '<div class="hinweis">Stimmt die Anschrift in Ihrem Personalausweis nicht mit Ihrer aktuellen Wohnanschrift überein, ist zuvor eine Ummeldung beim Bürgeramt Ihrer Stadt oder Gemeinde erforderlich.</div>' +
  '<h3 class="zw">Gebühren und Zahlung</h3><p>Die Gebühren richten sich nach der Gebührenordnung für Maßnahmen im Straßenverkehr. <b>In der Zulassungsstelle ist ausschließlich Kartenzahlung (EC-Karte) möglich. Barzahlung ist nicht möglich.</b></p>' +
  '<h3 class="zw">Kennzeichenschilder</h3><p>Kennzeichenschilder erhalten Sie bei den Schilderprägern in unmittelbarer Nähe des Kreishauses.</p>' +
  '<p>Kontakt: Karin Zimmermann, Leiterin des Straßenverkehrsamtes, ' + tel('3 30') + '</p>'};

S[202] = {suchwoerter: 'Wunschkennzeichen reservieren Kennzeichen MU online', html:
  '<p>Hier können Sie Ihr Wunschkennzeichen für den Kreis Muster online prüfen und reservieren. Die Reservierung gilt drei Monate.</p>' +
  '<div class="kasten"><p>Ihr Wunschkennzeichen:</p><p><span class="kennzeichen"><span class="eu">D</span>MU&nbsp;<input id="wk-b" aria-label="Buchstaben" maxlength="2" size="3" style="font-size:18px;text-transform:uppercase">&nbsp;<input id="wk-z" aria-label="Ziffern" maxlength="4" size="5" style="font-size:18px"></span></p>' +
  '<p><button onclick="MS.wkPruefen()">Verfügbarkeit prüfen</button></p><div id="wk-ergebnis"></div></div>' +
  '<p class="klein">Zulässig sind ein bis zwei Buchstaben und eine bis vier Ziffern, insgesamt höchstens acht Zeichen einschließlich Unterscheidungszeichen. Bestimmte Buchstabenkombinationen werden nicht vergeben. Gebühren: Reservierung 2,60 €, Zuteilung des Wunschkennzeichens 10,20 €, zu zahlen bei der Zulassung.</p>' +
  '<p class="klein">Aus Sicherheitsgründen wird Ihre Sitzung 90 Sekunden nach der Verfügbarkeitsprüfung beendet, sofern die Reservierung nicht abgeschlossen oder die Sitzung verlängert wird.</p>', init: function () { MS.wkStart = Date.now(); }};
MS.wkPruefen = function () {
  var b = document.getElementById('wk-b').value.toUpperCase().replace(/[^A-Z]/g, ''), z = document.getElementById('wk-z').value.replace(/[^0-9]/g, ''), e = document.getElementById('wk-ergebnis');
  if (!b || !z || z.charAt(0) === '0') { e.innerHTML = '<div class="fehler">Bitte geben Sie eine gültige Buchstaben- und Zahlenkombination ein. Die Zahl darf nicht mit 0 beginnen.</div>'; return; }
  if (2 + b.length + z.length > 8) { e.innerHTML = '<div class="fehler">Das Kennzeichen ist zu lang.</div>'; return; }
  if (['HJ', 'KZ', 'NS', 'SA', 'SS'].indexOf(b) > -1) { e.innerHTML = '<div class="fehler">Diese Buchstabenkombination wird nicht vergeben.</div>'; return; }
  var h = 0, s = b + z; for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 997;
  if (h % 3 === 0 || z === '1' || b === 'FX') { e.innerHTML = '<div class="fehler">Das Kennzeichen MU ' + b + ' ' + z + ' ist leider bereits vergeben oder reserviert.</div>'; MS.melde('wunschkennzeichen', {kennzeichen: 'MU ' + b + ' ' + z, frei: false}); return; }
  MS.wkWahl = 'MU ' + b + ' ' + z; MS.wkStart = Date.now();
  MS.melde('wunschkennzeichen', {kennzeichen: MS.wkWahl, frei: true});
  e.innerHTML = '<div class="hinweis">Das Kennzeichen <b>' + MS.wkWahl + '</b> ist verfügbar.</div><p><label for="wk-n">Name:</label> <input id="wk-n" size="25"></p><p><label for="wk-g">Geburtsdatum:</label> <input id="wk-g" size="10" placeholder="TT.MM.JJJJ"></p><p><button onclick="MS.wkReservieren()">Verbindlich reservieren</button> <button onclick="MS.wkStart=Date.now();document.getElementById(\'wk-sitzung\').textContent=\'Ihre Sitzung wurde um 90 Sekunden verlängert.\'">Sitzung verlängern</button></p><p class="klein" id="wk-sitzung" aria-live="polite"></p>';
};
MS.wkReservieren = function () {
  var e = document.getElementById('wk-ergebnis');
  if (Date.now() - MS.wkStart > 90000) { e.innerHTML = '<div class="fehler"><b>Ihre Sitzung ist abgelaufen.</b> Aus Sicherheitsgründen wurde Ihre Sitzung beendet. Bitte laden Sie die Seite neu und beginnen Sie erneut. (Fehler 440)</div>'; MS.melde('wunschkennzeichen-timeout'); return; }
  if (!document.getElementById('wk-n').value || !/^\d\d\.\d\d\.\d{4}$/.test(document.getElementById('wk-g').value)) { e.insertAdjacentHTML('afterbegin', '<div class="fehler">Bitte füllen Sie alle Felder vollständig aus.</div>'); return; }
  var nr = 'R-' + (100000 + Math.floor(Math.random() * 899999));
  MS.melde('wunschkennzeichen-reserviert', {kennzeichen: MS.wkWahl, nummer: nr});
  e.innerHTML = '<div class="hinweis">Ihr Wunschkennzeichen <b>' + MS.wkWahl + '</b> wurde reserviert.<br>Reservierungsnummer: <b>' + nr + '</b><br>Bitte bringen Sie diese Nummer zur Zulassung mit. Ohne Reservierungsnummer kann die Reservierung nicht berücksichtigt werden.</div>';
};

S[203] = {suchwoerter: 'Umweltplakette Feinstaubplakette Umweltzone Schadstoffgruppe grün gelb rot', html:
  '<p>Die Umweltplakette (Feinstaubplakette) kennzeichnet Fahrzeuge nach ihrer Schadstoffgruppe. Sie ist erforderlich, wenn Sie in eine Umweltzone fahren möchten.</p><table class="tab"><tr><th>Plakette</th><th>Schadstoffgruppe</th></tr><tr><td>rot</td><td>2</td></tr><tr><td>gelb</td><td>3</td></tr><tr><td>grün</td><td>4</td></tr></table>' +
  '<p>Umweltzonen gibt es unter anderem in Köln (seit 1. Januar 2008) und in mehreren Städten des Ruhrgebiets. Im Kreis Muster gibt es keine Umweltzone.</p><p>Die Plakette erhalten Sie in der Zulassungsstelle gegen Vorlage der Zulassungsbescheinigung Teil I. Gebühr: 5,00 €, nur EC-Karte. Plaketten werden auch von Prüforganisationen und vielen Werkstätten ausgegeben.</p>'};
S[204] = {suchwoerter: 'Umweltprämie Abwrackprämie BAFA Verwertungsnachweis 2500 Altfahrzeug Abmeldung', html:
  '<p>Die Umweltprämie (umgangssprachlich „Abwrackprämie“) des Bundes in Höhe von 2.500 € wurde für die Verschrottung eines mindestens neun Jahre alten Fahrzeugs beim Kauf eines Neuwagens oder Jahreswagens gezahlt.</p>' +
  '<div class="hinweis"><b>Wichtig:</b> Die Fördermittel sind seit Anfang September 2009 ausgeschöpft. Neue Anträge werden nicht mehr angenommen. Für alle Fragen zur Auszahlung und zum Stand Ihres Antrags ist ausschließlich das Bundesamt für Wirtschaft und Ausfuhrkontrolle (BAFA) zuständig. Die Zulassungsstelle kann hierzu keine Auskünfte erteilen.</div>' +
  '<h3 class="zw">Was macht die Zulassungsstelle?</h3><p>Die Zulassungsstelle nimmt die Außerbetriebsetzung des Altfahrzeugs vor und benötigt dafür den Verwertungsnachweis des anerkannten Demontagebetriebs, die Zulassungsbescheinigungen Teil I und II sowie die Kennzeichenschilder.</p>'};
S[205] = {suchwoerter: 'Führerschein Fahrerlaubnis Umtausch Begleitetes Fahren 17 Kartenführerschein', html:
  '<p>Die Führerscheinstelle ist zuständig für die Erteilung, Erweiterung und den Umtausch von Fahrerlaubnissen.</p><ul><li>Ersterteilung einer Fahrerlaubnis (Antrag über die Fahrschule)</li><li>Begleitetes Fahren ab 17</li><li>Umtausch eines alten Papierführerscheins in den EU-Kartenführerschein (freiwillig)</li><li>Ersatzführerschein bei Verlust</li><li>Internationaler Führerschein</li></ul>' +
  '<p>Benötigt werden in der Regel: Personalausweis oder Reisepass, ein biometrietaugliches Lichtbild und der bisherige Führerschein.</p><p>Kontakt: ' + tel('3 40') + ', Öffnungszeiten wie Zulassungsstelle.</p>'};
var HALT = [['Musterstadt Bahnhof', 0], ['Bahnhofstraße', 3], ['Marktplatz', 5], ['Kreishaus (verlegt)', 9], ['Kreiskrankenhaus', 12], ['Fuchsweg', 15], ['Oberkleeberg Dorfstraße', 20]];
var LINIEN = [
  ['1', 'Bahnhof – Bahnhofstraße – Brückenstraße – Marktplatz – Schützenstraße (Schulzentrum) – Nordring – Am Wasserturm', 'Mo–Fr 6–19 Uhr alle 30 Minuten, danach bis 20 Uhr stündlich; Sa stündlich 8–18 Uhr'],
  ['2', 'Bahnhof – Südring – Industriestraße (Am Bauhof)', 'Mo–Fr stündlich 6–19 Uhr; Sa alle zwei Stunden 8–16 Uhr'],
  ['3', 'Bahnhof – Südring – Lindenstraße – Kölner Straße – Auenrode (Dorfstraße)', 'Mo–Fr stündlich 6–20 Uhr; Sa alle zwei Stunden 8–18 Uhr'],
  ['4', 'Regelweg: Bahnhof – Südring – Lindenstraße – Marktplatz – Schützenstraße – Am Kreishaus – Gartenstraße – Am Hospitalgarten (Kreiskrankenhaus) – Nordring – Fuchsweg – Oberkleeberger Straße – Oberkleeberg Dorfstraße. <b>Während der Bauarbeiten am Kreisverkehr</b> Umleitung ab Bahnhof über Bahnhofstraße und Brückenstraße; dadurch erreicht der Bus das Kreishaus aus der Gegenrichtung, die Haltestelle „Kreishaus“ ist um 120 m auf die andere Straßenseite verlegt', 'Mo–Fr stündlich 5:42–20:42 Uhr ab Bahnhof; Sa alle zwei Stunden 7:42–17:42 Uhr'],
  ['640', 'Bahnhof – Bahnhofstraße – Marktplatz – Schützenstraße – Ellerbuscher Straße – Kirchwinkel – Ellerbusch (Abtei)', 'Mo–Sa alle zwei Stunden'],
  ['E1', 'Schulbus: Oberkleeberg – Oberkleeberger Straße – Fuchsweg – Nordring – Schulzentrum', 'nur an Schultagen, eine Fahrt morgens, zwei Fahrten mittags'],
  ['E2', 'Schulbus: Auenrode – Kölner Straße – Lindenstraße – Schulzentrum', 'nur an Schultagen, eine Fahrt morgens, zwei Fahrten mittags'],
  ['E3', 'Schulbus: Kirchwinkel – Ellerbuscher Straße – Schulzentrum', 'nur an Schultagen, eine Fahrt morgens, zwei Fahrten mittags']
];
S[206] = {stand: '07.10.2009', suchwoerter: 'Bus Bahn Linie Fahrplan VKM Haltestelle Muster-Talbahn AST', html: function () {
  return '<p>Der Kreis Muster ist Aufgabenträger für den öffentlichen Personennahverkehr im Kreisgebiet. Die Buslinien werden von der kreiseigenen Verkehrsgesellschaft Kreis Muster mbH (VKM) betrieben. Alle Stadtbuslinien beginnen am Bahnhof Musterstadt und sind dort mit den Zügen der Muster-Talbahn verknüpft.</p>' +
    '<ul class="uebersicht">' + [2061, 2062, 2063, 2064, 2065, 2066].map(function (i) { return '<li>' + MS.link(i) + '</li>'; }).join('') + '</ul>' +
    '<div class="hinweis">Fahrplanwechsel am 13. Dezember 2009. Vom 26.10. bis 06.11.2009 Schienenersatzverkehr zwischen Musterstadt und Ellerbusch.</div>';
}};
S[2061] = {suchwoerter: 'VKM Verkehrsgesellschaft Kundencenter Betriebshof Kamps', html:
  '<p>Die Verkehrsgesellschaft Kreis Muster mbH (VKM) ist ein Unternehmen des Kreises Muster. Sie betreibt mit 24 Bussen die Stadt- und Regionalbuslinien im Kreisgebiet.</p>' +
  '<table class="tab"><tr><td width="150">Kundencenter</td><td>im Bahnhofsgebäude, Bahnhofsvorplatz 1, 43999 Musterstadt<br>Mo–Fr 8:00–17:00 Uhr, Sa geschlossen</td></tr><tr><td>Telefon</td><td>(0 12 34) 9 82-0</td></tr><tr><td>Betriebshof</td><td>Industriestraße 50</td></tr><tr><td>Geschäftsführung</td><td>Dipl.-Kfm. Reinhard Kamps</td></tr></table>' +
  '<p>Im Kundencenter erhalten Sie Monatskarten, Fahrpläne und Auskünfte. Einzelfahrscheine und Tagestickets erhalten Sie beim Fahrpersonal.</p>'};
S[2062] = {suchwoerter: 'Linie 1 2 3 4 640 Schulbus Fahrplan Haltestelle Kreishaus Oberkleeberg Auenrode Kirchwinkel Ellerbusch', html: function () {
  var h = '<table class="tab"><tr><th>Linie</th><th>Linienweg</th><th>Takt</th></tr>' + LINIEN.map(function (l) { return '<tr><td><b>' + l[0] + '</b></td><td>' + l[1] + '</td><td>' + l[2] + '</td></tr>'; }).join('') + '</table>' +
    '<p>An Sonn- und Feiertagen verkehren keine Busse. Bitte nutzen Sie das ' + a(2064, 'AnrufSammelTaxi') + '.</p>';
  h += '<h2>Linie 4 (Auszug Montag bis Freitag)</h2><table class="tab"><tr><th>Haltestelle</th><th colspan="4">Abfahrt</th></tr>';
  HALT.forEach(function (x) {
    h += '<tr><td>' + x[0] + '</td>' + [6, 7, 12, 18].map(function (st) { var m = 42 + x[1]; return '<td>' + (st + Math.floor(m / 60)) + ':' + ('0' + (m % 60)).slice(-2) + '</td>'; }).join('') + '</tr>';
  });
  return h + '</table><div class="hinweis">Die Haltestelle „Kreishaus“ ist wegen der Bauarbeiten am Kreisverkehr in Musterstadt um rund 120 m verlegt.</div>' +
    '<p>Fahrpläne zum Ausdrucken: ' + ['1', '2', '3', '4', '640'].map(function (n) { return '<a href="../pdf/kreis-fahrplan-linie-' + n + '.pdf" data-ereignis="pdf">Linie ' + n + '</a>'; }).join(' · ') + ' · <a href="../pdf/kreis-liniennetzplan.pdf" data-ereignis="pdf">Liniennetzplan</a></p>';
}};
S[2063] = {suchwoerter: 'Fahrpreis Ticket Fahrschein Einzelfahrschein Monatskarte Schüler Tagesticket Familie Preisstufe Gemeinschaftstarif', html:
  '<p>Im Kreis Muster gilt der Gemeinschaftstarif Kreis Muster für alle Buslinien der VKM und für die Muster-Talbahn innerhalb des Kreisgebietes.</p>' +
  '<table class="tab"><tr><th>Fahrschein</th><th>Preisstufe 1<br><span class="klein">(innerhalb einer Stadt oder Gemeinde)</span></th><th>Preisstufe 2<br><span class="klein">(Kreisgebiet)</span></th></tr>' +
  '<tr><td>Einzelfahrschein Erwachsene</td><td>1,80 €</td><td>2,60 €</td></tr><tr><td>Einzelfahrschein Kinder (6–14 Jahre)</td><td>1,00 €</td><td>1,40 €</td></tr>' +
  '<tr><td>4-Fahrten-Ticket</td><td>6,40 €</td><td>9,60 €</td></tr><tr><td>Tagesticket</td><td>4,60 €</td><td>6,20 €</td></tr><tr><td>Familien-Tageskarte (bis 2 Erwachsene und 3 Kinder)</td><td>7,50 €</td><td>9,90 €</td></tr>' +
  '<tr><td>Monatskarte</td><td>46,00 €</td><td>64,50 €</td></tr><tr><td>Schülermonatskarte</td><td>31,50 €</td><td>42,00 €</td></tr></table>' +
  '<div class="hinweis">Fahrscheine sind beim Fahrpersonal erhältlich. Bitte halten Sie das Fahrgeld möglichst passend bereit. Banknoten über 20 € können nicht angenommen werden. Fahrscheine der Muster-Talbahn erhalten Sie am Fahrkartenschalter am Bahnhof (Mo–Fr 6:30–18:00 Uhr, Sa 8:00–12:00 Uhr) oder am Fahrkartenautomaten.</div>' +
  '<p class="klein">Stand: 1. Januar 2009. Die Fahrpreise ändern sich voraussichtlich zum 1. Januar 2010.</p>'};
S[2064] = {suchwoerter: 'AnrufSammelTaxi AST Taxi Abend Sonntag Anmeldung Komfortzuschlag', html:
  '<p>In den Abendstunden nach 20 Uhr sowie an Sonn- und Feiertagen ersetzt das AnrufSammelTaxi (AST) den Linienverkehr. Das AST fährt nach Fahrplan zwischen den Haltestellen, jedoch nur nach vorheriger Anmeldung.</p>' +
  '<table class="tab"><tr><td width="150">Anmeldung</td><td>mindestens 30 Minuten vor der gewünschten Abfahrt unter (0 12 34) 4 44 44 (Taxi Musterstadt)</td></tr><tr><td>Fahrpreis</td><td>regulärer Fahrpreis des Gemeinschaftstarifs zuzüglich 1,00 € Komfortzuschlag je Person</td></tr><tr><td>Zeitkarten</td><td>werden anerkannt, der Komfortzuschlag ist zu entrichten</td></tr></table>' +
  '<p>Das AST fährt Sie auf Wunsch bis vor die Haustür, sofern diese innerhalb des Bedienungsgebietes der jeweiligen Linie liegt.</p>'};
S[2065] = {suchwoerter: 'Fundsachen Bus verloren gefunden Kundencenter Fundbüro', html:
  '<p>Gegenstände, die in Bussen der VKM gefunden werden, werden im Kundencenter am Bahnhofsvorplatz 1 sieben Tage lang aufbewahrt. Danach werden sie an das Fundbüro der Stadt oder Gemeinde abgegeben, in der der Betriebshof liegt.</p>' +
  '<p>Für Fundsachen aus den Zügen der Muster-Talbahn ist die Rheinland-Mitte-Bahn GmbH zuständig.</p>' +
  '<p>Musterstadt: ' + extern('musterstadt', 'Fundbüro der Stadt Musterstadt') + '</p>'};
S[2066] = {suchwoerter: 'Muster-Talbahn Zug Regionalbahn Schienenersatzverkehr SEV Ersatzbus Bauarbeiten Ellerbusch Köln Rheinland-Mitte-Bahn', html:
  '<p>Die Muster-Talbahn verbindet Musterstadt mit Köln und Ellerbusch. Betreiber ist die Rheinland-Mitte-Bahn GmbH. Montags bis freitags verkehrt die Regionalbahn stündlich, am Wochenende alle zwei Stunden. In Musterstadt bestehen am Bahnhof Anschlüsse an alle Stadtbuslinien.</p>' +
  '<div class="hinweis"><b>Schienenersatzverkehr vom 26.10. bis 06.11.2009</b><br>Wegen Gleisbauarbeiten verkehren zwischen Musterstadt und Ellerbusch Ersatzbusse. Abfahrt in Musterstadt am Bahnhofsvorplatz, Haltestelle der Linie 640, in der Regel 10 Minuten vor der planmäßigen Zugabfahrt. Ankunft in Ellerbusch an der Haltestelle Abtei. Fahrräder können im Ersatzverkehr nicht befördert werden. Die Anschlüsse an die Stadtbuslinien können nicht in allen Fällen gewährleistet werden.</div>' +
  '<p>Fahrscheine des Gemeinschaftstarifs gelten auch im Schienenersatzverkehr.</p>'};

/* ---------- Gesundheit ---------- */
S[300] = {html: '<ul class="uebersicht"><li>' + a(301, 'Gesundheitsamt') + '</li><li>' + a(303, 'Kreiskrankenhaus Musterstadt') + '</li><li>' + a(304, 'Veterinär- und Lebensmittelüberwachung') + '</li></ul>'};
S[301] = {suchwoerter: 'Gesundheitsamt Belehrung Infektionsschutzgesetz Gesundheitszeugnis Schuleingangsuntersuchung Impfberatung Trinkwasser', html:
  '<p>Das Gesundheitsamt schützt und fördert die Gesundheit der Bevölkerung im Kreis Muster.</p><h3 class="zw">Belehrung nach § 43 Infektionsschutzgesetz</h3><p>Wer gewerbsmäßig mit Lebensmitteln arbeitet, benötigt vor Aufnahme der Tätigkeit eine Belehrung durch das Gesundheitsamt. Termine: dienstags 9:00 Uhr und donnerstags 14:00 Uhr, ohne Anmeldung. Bitte bringen Sie Ihren Personalausweis mit. Gebühr: 25,00 €, nur EC-Karte.</p>' +
  '<h3 class="zw">Weitere Aufgaben</h3><ul><li>Schuleingangsuntersuchungen</li><li>Impfberatung, einschließlich der Schutzimpfung gegen die Neue Grippe ab 26.10.2009 (über die Hausarztpraxen)</li><li>Überwachung der Trinkwasserqualität</li><li>Hygieneüberwachung in Gemeinschaftseinrichtungen</li><li>Sozialpsychiatrischer Dienst</li></ul><p>Leitung: Dr. med. Ute Hesse, ' + tel('5 00') + '</p>'};
S[303] = {suchwoerter: 'Kreiskrankenhaus Krankenhaus Klinik Innere Medizin Dauphin Intensivstation Notaufnahme Besuchszeiten Overbeck Chirurgie Geburtshilfe', html:
  '<p>Das Kreiskrankenhaus Musterstadt ist ein Krankenhaus der Grundversorgung in Trägerschaft des Kreises Muster mit 260 Betten. Rund um die Uhr steht eine Zentrale Notaufnahme zur Verfügung.</p>' +
  '<table class="tab"><tr><th>Klinik</th><th>Leitung</th></tr>' +
  '<tr><td>Klinik für Innere Medizin<br><span class="klein">mit interdisziplinärer Intensivstation (8 Betten)</span></td><td>Chefärztin Dr. med. Alexandra Dauphin<br><span class="klein">Fachärztin für Innere Medizin, Zusatzbezeichnung Intensivmedizin</span></td></tr>' +
  '<tr><td>Klinik für Allgemein- und Unfallchirurgie</td><td>Chefarzt Dr. med. Thomas Breuer</td></tr>' +
  '<tr><td>Klinik für Gynäkologie und Geburtshilfe</td><td>Chefarzt Dr. med. Martin Kessel</td></tr>' +
  '<tr><td>Abteilung für Anästhesie</td><td>Chefärztin Dr. med. Sigrid Pohl</td></tr></table>' +
  '<h3 class="zw">Besuchszeiten</h3><p>Täglich 14:00–19:00 Uhr. Intensivstation nach Absprache. Besucherinnen und Besucher mit Fieber oder Erkältungssymptomen werden gebeten, auf Krankenbesuche zu verzichten.</p>' +
  '<h3 class="zw">Kontakt</h3><p>Kreiskrankenhaus Musterstadt, Am Hospitalgarten 5, 43999 Musterstadt<br>Zentrale: (0 12 34) 6 60-0<br>Sekretariat Innere Medizin: (0 12 34) 6 60-2 00<br>Presse: Sabine Overbeck, (0 12 34) 6 60-1 10</p>' +
  '<p>Aktuelles: ' + a(1003, 'Intensivstation häufig an der Belastungsgrenze') + ' · ' + a(1002, 'Kreistag berät über Zukunft des Kreiskrankenhauses') + '</p>'};
var VET = 'Kreis Muster, Der Landrat, Veterinär- und Lebensmittelüberwachung, Kreishaus, 2. OG, Am Kreishaus 1, 43999 Musterstadt';
S[304] = {stand: '11.09.2009', suchwoerter: 'Veterinäramt Veterinär Kreisveterinär Lüttgen Tierschutz Lebensmittel', html: function () {
  return '<p>Die Veterinär- und Lebensmittelüberwachung des Kreises Muster nimmt die Aufgaben der Kreisordnungsbehörde auf den Gebieten des Tierschutzes, der Tierseuchenbekämpfung, der Lebensmittelüberwachung sowie der Beseitigung tierischer Nebenprodukte wahr, soweit diese nicht anderen Behörden zugewiesen sind.</p>' +
    '<ul class="uebersicht">' + [341, 342, 343, 344, 345, 346].map(function (i) { return '<li>' + MS.link(i) + '</li>'; }).join('') + '</ul>' +
    '<table class="tab"><tr><th colspan="2">Kontakt</th></tr><tr><td>Leitung</td><td>Kreisveterinärdirektorin Dr. med. vet. Annegret Lüttgen</td></tr><tr><td>Anschrift</td><td>Kreishaus, 2. OG, Am Kreishaus 1</td></tr><tr><td>Telefon</td><td>' + tel('5 50') + '</td></tr><tr><td>Telefax</td><td>' + tel('5 59') + '</td></tr><tr><td>Sprechzeiten</td><td>nach vorheriger Terminvereinbarung</td></tr></table>' +
    '<p class="klein">Für Angelegenheiten nach dem Landeshundegesetz NRW (Anzeige und Erlaubnis für große und gefährliche Hunde) ist nicht die Veterinärbehörde, sondern die örtliche Ordnungsbehörde der Stadt oder Gemeinde zuständig. Für die Hundesteuer ist die Stadt oder Gemeinde zuständig.</p>';
}};
S[341] = {stand: '11.09.2009', suchwoerter: 'Fundtier Tier gefunden Tierheim Tierschutz Misshandlung Vernachlässigung Katze Hund entlaufen', html:
  '<h3 class="zw">Fundtiere</h3><p>Fundtiere sind gemäß § 90a des Bürgerlichen Gesetzbuches Sachen im Sinne der Vorschriften über den Fund, soweit nicht etwas anderes bestimmt ist. Für die Entgegennahme von Fundanzeigen ist das Fundbüro der Stadt oder Gemeinde zuständig, in deren Gebiet das Tier aufgefunden wurde.</p>' +
  '<p>Zur Unterbringung von Fundtieren besteht eine Vereinbarung zwischen den kreisangehörigen Städten und Gemeinden und dem Tierschutzverein Muster-Auen e. V. Die Aufnahme eines Fundtieres im Tierheim setzt eine vorherige Fundanzeige beim zuständigen Fundbüro voraus. Ohne Fundanzeige ist eine Aufnahme aus Gründen der ordnungsgemäßen Dokumentation nicht möglich.</p>' +
  '<p>Die Veterinärbehörde ist für die Entgegennahme von Fundtieren nicht zuständig.</p>' +
  '<p>Musterstadt: ' + extern('musterstadt', 'Fundbüro der Stadt Musterstadt') + '</p>' +
  '<h3 class="zw">Tierheim</h3><p>Tierschutzverein Muster-Auen e. V., Tierheim, Auenweg 40, 43999 Musterstadt-Oberkleeberg<br>Öffnungszeiten: Mi und Sa 14:00–16:00 Uhr. Außerhalb der Öffnungszeiten ist eine Aufnahme nicht möglich.</p>' +
  '<h3 class="zw">Tierschutz</h3><p>Hinweise auf tierschutzwidrige Haltungen nimmt die Veterinärbehörde schriftlich oder telefonisch entgegen. Anonyme Hinweise werden geprüft, sofern sie hinreichend konkrete Angaben zu Ort, Tierart und festgestelltem Sachverhalt enthalten. Eine Mitteilung über das Ergebnis der Prüfung an die Hinweisgeberin oder den Hinweisgeber erfolgt aus Gründen des Datenschutzes nicht.</p>'};
S[342] = {stand: '15.01.2009', suchwoerter: 'Anzeigepflicht Geflügel Hühner Bienen Bienenvolk Pferd Equidenpass Schafe Ziegen Schweine Registrierung Tierhalter', html:
  '<p>Wer bestimmte Tiere hält, ist nach den Vorschriften des Tierseuchenrechts verpflichtet, die Haltung vor Beginn bei der zuständigen Behörde anzuzeigen. Die Anzeigepflicht besteht unabhängig von der Anzahl der gehaltenen Tiere sowie unabhängig davon, ob die Haltung gewerblich oder zu privaten Zwecken erfolgt.</p>' +
  '<table class="tab"><tr><th>Tierart</th><th>Anzeige bei</th><th>Hinweis</th></tr>' +
  '<tr><td>Hühner, Enten, Gänse, Puten, Tauben (Geflügel)</td><td>Veterinärbehörde des Kreises</td><td>anzeigepflichtig ab dem ersten Tier, auch bei Hobbyhaltung im Hausgarten</td></tr>' +
  '<tr><td>Bienen</td><td>Veterinärbehörde des Kreises</td><td>anzeigepflichtig ab dem ersten Bienenvolk unter Angabe des Standortes</td></tr>' +
  '<tr><td>Rinder, Schweine, Schafe, Ziegen</td><td>Veterinärbehörde des Kreises und Landwirtschaftskammer</td><td>Kennzeichnung und Registrierung nach der Viehverkehrsverordnung</td></tr>' +
  '<tr><td>Pferde, Esel, Ponys</td><td>Veterinärbehörde des Kreises</td><td>Equidenpass erforderlich</td></tr>' +
  '<tr><td>Hunde</td><td>örtliche Ordnungsbehörde (Landeshundegesetz) sowie Steueramt der Gemeinde</td><td>nicht bei der Veterinärbehörde</td></tr></table>' +
  '<p>Die Anzeige ist schriftlich mit dem Vordruck „Anzeige einer Tierhaltung“ zu erstatten: ' + pdf('anzeige-tierhaltung.pdf', 'Anzeige einer Tierhaltung', '6 KB') + '. Die Aufgabe einer Tierhaltung ist ebenfalls anzuzeigen.</p>' +
  '<div class="hinweis">Die Anzeige einer Geflügelhaltung ersetzt nicht die Anzeige einer Bienenhaltung und umgekehrt. Werden mehrere anzeigepflichtige Tierarten gehalten, ist für jede Tierart eine gesonderte Anzeige erforderlich.</div>'};
S[343] = {stand: '11.09.2009', suchwoerter: 'Blauzungenkrankheit Tierseuche Impfung Rinder Schafe Ziegen Sperrgebiet Restriktionsgebiet Seuchenkasse', html:
  '<p>Die Blauzungenkrankheit ist eine Viruserkrankung der Wiederkäuer, die durch Gnitzen übertragen wird. Für den Menschen ist sie ungefährlich. Das gesamte Gebiet der Bundesrepublik Deutschland ist Restriktionsgebiet.</p>' +
  '<h3 class="zw">Impfung</h3><p>Rinder, Schafe und Ziegen sind nach Maßgabe der geltenden tierseuchenrechtlichen Bestimmungen gegen die Blauzungenkrankheit (Serotyp 8) zu impfen. Die Impfung erfolgt durch die bestandsbetreuende Tierärztin oder den bestandsbetreuenden Tierarzt. Die Kosten des Impfstoffes werden nach Maßgabe der Beihilfesatzung der Tierseuchenkasse erstattet, die Kosten der Impfung nicht.</p>' +
  '<p>Das Verbringen empfänglicher Tiere aus dem Restriktionsgebiet ist nur unter den Voraussetzungen der einschlägigen Vorschriften zulässig. Da sich der Kreis Muster vollständig innerhalb des Restriktionsgebietes befindet, ist ein Verbringen innerhalb des Kreisgebietes ohne weitere Auflagen möglich, sofern das Kreisgebiet dabei nicht verlassen wird.</p>' +
  '<p>Den Verdacht auf Blauzungenkrankheit hat die Tierhalterin oder der Tierhalter unverzüglich der Veterinärbehörde anzuzeigen. Die Anzeigepflicht entfällt nicht dadurch, dass die Krankheit bereits bekannt ist.</p>'};
S[344] = {stand: '22.07.2009', suchwoerter: 'Lebensmittelüberwachung Kontrolle Gaststätte Imbiss Döner Verbraucherbeschwerde Hygiene Lebensmittel gestohlen verloren', html:
  '<p>Die Lebensmittelüberwachung kontrolliert risikoorientiert alle Betriebe im Kreis Muster, die Lebensmittel herstellen, behandeln oder in den Verkehr bringen, darunter Gaststätten, Imbissbetriebe, Bäckereien, Metzgereien und Einzelhandelsgeschäfte. Die Kontrollen erfolgen grundsätzlich unangemeldet.</p>' +
  '<p>Die Ergebnisse von Betriebskontrollen werden nicht veröffentlicht. Auskünfte über die Ergebnisse von Kontrollen in einzelnen Betrieben werden nicht erteilt.</p>' +
  '<h3 class="zw">Verbraucherbeschwerden</h3><p>Verbraucherinnen und Verbraucher, die an einem Lebensmittel Mängel festgestellt haben, können sich an die Lebensmittelüberwachung wenden. Bitte bewahren Sie das beanstandete Lebensmittel nach Möglichkeit gekühlt auf und halten Sie den Kassenbeleg bereit. Bei bereits verzehrten Lebensmitteln ist eine Untersuchung nicht mehr möglich.</p>' +
  '<div class="hinweis">Für Lebensmittel, die abhandengekommen sind, insbesondere durch Verlust oder Wegnahme, ist die Lebensmittelüberwachung nicht zuständig.</div>' +
  '<h3 class="zw">Belehrung nach dem Infektionsschutzgesetz</h3><p>Für die Belehrung nach § 43 Infektionsschutzgesetz ist nicht die Lebensmittelüberwachung, sondern das ' + a(301, 'Gesundheitsamt') + ' zuständig.</p>'};
S[345] = {stand: '30.03.2008', suchwoerter: 'verendet tot totes Tier Tierkörper Wild Straße Fahrbahn vergraben Haustier gestorben Tierkörperbeseitigung', html:
  '<h3 class="zw">Verendete Haustiere</h3><p>Verendete Heimtiere können der Beseitigung über die zuständige Verarbeitungsanlage für tierische Nebenprodukte zugeführt werden. Einzelne Kleintiere dürfen auf dem eigenen Grundstück vergraben werden, sofern das Grundstück nicht in einem Wasserschutzgebiet liegt, das Tier mit einer ausreichenden Erdschicht von mindestens 50 cm bedeckt wird und öffentliche Belange nicht entgegenstehen. Das Vergraben auf öffentlichen Flächen, insbesondere in Grünanlagen und im Naturschutzgebiet, ist nicht zulässig.</p>' +
  '<h3 class="zw">Verendete Nutztiere</h3><p>Verendete Nutztiere sind der Verarbeitungsanlage zu melden und von dieser abholen zu lassen. Die Kosten trägt nach Maßgabe der Beihilfesatzung anteilig die Tierseuchenkasse.</p>' +
  '<h3 class="zw">Tote Tiere auf öffentlichen Straßen</h3><p>Für die Beseitigung von Tierkörpern auf öffentlichen Straßen ist der jeweilige Straßenbaulastträger zuständig, für Gemeindestraßen die Stadt oder Gemeinde. Für Wild ist zuvor die oder der Jagdausübungsberechtigte zu verständigen. Die Veterinärbehörde ist hierfür nicht zuständig.</p>' +
  '<p>In Musterstadt: Tiefbauamt der Stadt Musterstadt, ' + extern('musterstadt', 'www.stadt-musterstadt.de') + '</p>'};
S[346] = {stand: '02.06.2009', suchwoerter: 'Heimtierausweis Reisen Urlaub Tollwut Impfung Mikrochip Ausland Hund Katze Frettchen', html:
  '<p>Für Reisen mit Hunden, Katzen und Frettchen innerhalb der Europäischen Union benötigen die Tiere einen EU-Heimtierausweis, eine Kennzeichnung durch Mikrochip oder gut lesbare Tätowierung sowie eine gültige Tollwutimpfung. Für einzelne Mitgliedstaaten gelten zusätzliche Anforderungen.</p>' +
  '<p>Der EU-Heimtierausweis wird von hierzu ermächtigten Tierärztinnen und Tierärzten ausgestellt. <b>Die Veterinärbehörde stellt keine Heimtierausweise aus.</b></p>' +
  '<p>Bitte informieren Sie sich rechtzeitig vor Reiseantritt über die Einreisebestimmungen des Ziellandes. Die Veterinärbehörde erteilt hierzu Auskünfte nur allgemeiner Art. Für verbindliche Auskünfte ist die Botschaft des jeweiligen Ziellandes zuständig.</p>' +
  '<p class="klein">Für Reisen in die Partnerstadt Saint-Renard-sur-Loire gelten die Bestimmungen für Frankreich.</p>'};

/* ---------- Umwelt & Natur ---------- */
S[400] = {html: '<ul class="uebersicht"><li>' + a(401, 'Untere Landschaftsbehörde') + '</li><li>' + a(402, 'Naturschutzgebiete') + '</li><li>' + a(403, 'Fuchsbau-Zählung 2009') + '</li></ul>'};
S[401] = {suchwoerter: 'Untere Landschaftsbehörde Naturschutz Landschaftsplan Befreiung Wollenweber', html:
  '<p>Die Untere Landschaftsbehörde ist für Naturschutz und Landschaftspflege im Kreis Muster zuständig. Zu ihren Aufgaben gehören die Aufstellung der Landschaftspläne, die Betreuung der Naturschutzgebiete und die Entscheidung über Befreiungen von den Verboten in Schutzgebieten.</p>' +
  '<p>Vorhaben in Naturschutzgebieten, auch Wege, Beschilderungen oder Lehrpfade, bedürfen einer Befreiung. Anträge sind schriftlich mit Lageplan und Begründung einzureichen.</p>' +
  '<p>Ansprechpartnerin: Dr. Kerstin Wollenweber, Diplom-Biologin<br>Kreishaus, Raum 214<br>Telefon: ' + tel('6 10') + '</p>'};
S[402] = {suchwoerter: 'Naturschutzgebiet Muster-Auen Kleeberger Heide Ellerbuscher Wald Landschaftsplan', html:
  '<table class="tab"><tr><th>Naturschutzgebiet</th><th>Größe</th><th>Landschaftsplan</th></tr><tr><td>Muster-Auen</td><td>ca. 140 ha</td><td>Nr. 3 „Muster-Aue“ (1998)</td></tr><tr><td>Kleeberger Heide</td><td>ca. 38 ha</td><td>Nr. 3 „Muster-Aue“ (1998)</td></tr><tr><td>Ellerbuscher Wald</td><td>ca. 92 ha</td><td>Nr. 5 „Waldgebiete Süd“ (2003)</td></tr></table>' +
  '<p>Im Naturschutzgebiet Muster-Auen finden im Oktober 2009 Pflegearbeiten statt. Einzelne Wege sind zeitweise gesperrt.</p><p>' + pdf('landschaftsplan-3.pdf', 'Landschaftsplan Nr. 3 „Muster-Aue“, Karte und Text', '12 KB') + '</p>'};
S[403] = {suchwoerter: 'Fuchs Fuchsbau Zählung Füchse Erlebnispfad Fuchsbandwurm Muster-Auen Wollenweber', html:
  '<p>Seit 2001 zählt die Untere Landschaftsbehörde jedes Frühjahr gemeinsam mit ehrenamtlichen Helferinnen und Helfern die besetzten Fuchsbaue im Naturschutzgebiet Muster-Auen.</p>' +
  '<table class="tab"><tr><th>Jahr</th><th>besetzte Baue</th><th>davon mit Jungtieren</th></tr><tr><td>2007</td><td>19</td><td>11</td></tr><tr><td>2008</td><td>21</td><td>12</td></tr><tr><td>2009</td><td>23</td><td>14</td></tr></table>' +
  '<p>Die Population ist stabil. Füchse sind scheu und für Menschen ungefährlich. Bitte füttern Sie keine Füchse und waschen Sie im Wald gesammelte Beeren und Pilze gründlich.</p>' +
  '<h3 class="zw">Zur Anregung eines „Fuchs-Erlebnispfades“</h3><p>Die Anregung der Stadt Musterstadt, im Naturschutzgebiet Muster-Auen einen Fuchs-Erlebnispfad mit Beschilderung und Aussichtsplattform an den Fuchsbauen anzulegen, wurde geprüft. Die Prüfung ist abgeschlossen. Eine Befreiung kann aus naturschutzfachlicher Sicht nicht in Aussicht gestellt werden, da die Baue gerade nicht gestört werden dürfen. Die Stadt Musterstadt wurde mit Schreiben vom 18.08.2009 unterrichtet.</p>' +
  '<p class="klein">Dr. Kerstin Wollenweber, Untere Landschaftsbehörde</p>'};

/* ---------- Soziales & Bildung ---------- */
S[500] = {html: '<ul class="uebersicht"><li>' + a(501, 'ARGE Kreis Muster') + '</li><li>' + a(502, 'Schulamt') + '</li><li>' + a(503, 'Kreismusikschule') + '</li><li>' + a(504, 'Kreisarchiv') + '</li></ul>'};
S[501] = {suchwoerter: 'ARGE Arbeitslosengeld II Grundsicherung SGB II Hartz Kundennummer', html:
  '<p>Die ARGE Kreis Muster (Arbeitsgemeinschaft für Grundsicherung für Arbeitsuchende) ist zuständig für Leistungen nach dem Zweiten Buch Sozialgesetzbuch (Arbeitslosengeld II) und die Vermittlung in Arbeit.</p><p>Bahnhofstraße 40, 43999 Musterstadt<br>Telefon: (0 12 34) 9 81-0<br>Öffnungszeiten: Mo, Di, Fr 8:00–12:30 Uhr, Do 8:00–12:30 und 14:00–17:00 Uhr, Mi geschlossen</p><div class="hinweis">Bitte bringen Sie zu jedem Termin Ihre Kundennummer und Ihren Personalausweis mit.</div>'};
S[502] = {html: '<p>Das Schulamt für den Kreis Muster ist die untere Schulaufsichtsbehörde für die Grund- und Hauptschulen im Kreisgebiet. Die Schulträgerschaft liegt bei den Städten und Gemeinden.</p><p>Telefon: ' + tel('4 00') + '</p>'};
S[503] = {suchwoerter: 'Musikschule Unterricht Blockflöte Instrument', html: '<p>Die Kreismusikschule bietet Unterricht für Kinder, Jugendliche und Erwachsene in über 20 Instrumenten. Der Unterricht findet in Musterstadt im Nebengebäude des Kreishauses und an Schulen im Kreisgebiet statt. Für die Blockflöten-Grundkurse gibt es eine Warteliste.</p><p>Anmeldungen schriftlich, Sekretariat ' + tel('4 70') + '</p>'};
S[504] = {suchwoerter: 'Kreisarchiv Archiv Gebietsreform 1975 Urkunden', html: '<p>Das Kreisarchiv verwahrt die Unterlagen der Kreisverwaltung seit 1975 und der Vorgängerkreise. Ein besonderer Bestand sind die Akten zur kommunalen Neugliederung 1975, die regelmäßig vom Ortsteil Oberkleeberg eingesehen werden.</p><p>Leitung: Dr. Paul Thelen, ' + tel('4 50') + '. Benutzung nach Vereinbarung.</p>'};

/* ---------- Service ---------- */
S[900] = {html: '<p>Kreis Muster, Der Landrat<br>Am Kreishaus 1<br>43999 Musterstadt</p><p>Telefon: (0 12 34) 9 80-0<br>Telefax: (0 12 34) 9 80-1 99<br>E-Mail: info@kreis-muster.de</p><div class="hinweis">Bitte beachten Sie: Anträge können nicht per E-Mail gestellt werden. Für Angelegenheiten der Stadt Musterstadt (z. B. Bürgeramt, Ausweise, Meldewesen) ist die Stadtverwaltung zuständig: ' + extern('musterstadt', 'www.stadt-musterstadt.de') + '</div>'};
S[920] = {html: '<h3 class="zw">Herausgeber</h3><p>Kreis Muster<br>Der Landrat<br>Am Kreishaus 1, 43999 Musterstadt<br>Telefon: (0 12 34) 9 80-0<br>E-Mail: info@kreis-muster.de<br>Internet: www.kreis-muster.de</p><h3 class="zw">Vertretungsberechtigt</h3><p>Der Kreis Muster ist eine Körperschaft des öffentlichen Rechts. Er wird vertreten durch den Landrat Dr. Friedhelm Odenthal.</p><h3 class="zw">Aufsichtsbehörde</h3><p>die zuständige Bezirksregierung</p><h3 class="zw">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3><p>Pressestelle des Kreises Muster, Am Kreishaus 1, 43999 Musterstadt</p><h3 class="zw">Technische Umsetzung</h3><p>Regio-Portal 2.0, Datenzentrale Rheinland-Mitte</p>' +
  '<div class="satire"><b>Hinweis:</b> Diese Website ist ein fiktives Satireprojekt. Der Kreis Muster, die Stadt Musterstadt, die Datenzentrale Rheinland-Mitte sowie alle genannten Personen, Einrichtungen, Anschriften und Rufnummern sind frei erfunden. Die Seite speichert keinerlei Daten und versendet keine Formulare. Die Reservierung von Wunschkennzeichen ist nicht echt. Die Inhalte dieser Website wurden mit Unterstützung eines KI-Sprachmodells (Claude, Anthropic) erstellt.</div>'};
S[921] = {html: '<p>Der Kreis Muster verarbeitet personenbezogene Daten nach den Bestimmungen des Datenschutzgesetzes Nordrhein-Westfalen und des Telemediengesetzes.</p><p>Bei der Nutzung der Online-Dienste (z. B. Wunschkennzeichen) werden die von Ihnen eingegebenen Daten ausschließlich zur Bearbeitung Ihres Anliegens verwendet. Aus Sicherheitsgründen werden Sitzungen nach 90 Sekunden Inaktivität beendet.</p><p>Diese Website verwendet keine Cookies.</p>'};
S[925] = {html: function () {
  var z = MS.ziele[MS.param.get('ziel')];
  if (!z) return '<div class="fehler">Unbekanntes Linkziel.</div>';
  return '<div class="hinweis"><b>Sie verlassen das Internetportal des Kreises Muster.</b></div><p>Ziel: <b>' + z[0] + '</b></p><p>Für die Inhalte externer Seiten ist der Kreis Muster nicht verantwortlich.</p><p><a class="knopf" href="' + z[1] + '" data-ereignis="extern">Weiter</a> &nbsp; <a href="javascript:history.back()">Zurück</a></p>';
}};
S[910] = {html: function () {
  function baum(id) { var k = (MS.kinder[id] || []).filter(function (c) { return !MS.knoten[c].opt.versteckt; }); return k.length ? '<ul>' + k.map(function (c) { return '<li>' + MS.link(c) + baum(c) + '</li>'; }).join('') + '</ul>' : ''; }
  return '<div class="sitemap"><ul><li>' + MS.link(1) + baum(1) + '</li></ul></div><p>' + [900, 920, 921].map(function (i) { return MS.link(i); }).join(' | ') + '</p>';
}};
S[915] = {html: function () {
  var q = (MS.param.get('q') || '').trim(), w = q.toLowerCase();
  var kopf = '<form action="index.html" method="get"><input type="hidden" name="id" value="915"><input type="hidden" name="L" value="0"><input type="text" name="q" size="30" aria-label="Suchbegriff" value="' + MS.esc(q) + '"> <button type="submit">Suchen</button></form>';
  if (!q) return kopf + '<p>Bitte geben Sie einen Suchbegriff ein.</p>';
  var t = [];
  Object.keys(MS.knoten).forEach(function (k) {
    var s = MS.seiten[k], text = MS.knoten[k].titel + ' ' + (s && typeof s.html === 'string' ? s.html.replace(/<[^>]+>/g, ' ') : '') + ' ' + (s && s.suchwoerter || '');
    if (+k !== 915 && text.toLowerCase().indexOf(w) > -1) t.push(+k);
  });
  MS.melde('suche', {begriff: q, treffer: t.length});
  return kopf + (t.length ? '<p>' + t.length + ' Treffer für „' + MS.esc(q) + '“:</p><ul>' + t.map(function (k) { return '<li>' + MS.link(k) + '</li>'; }).join('') + '</ul>' : '<p>Keine Treffer für „' + MS.esc(q) + '“. Angelegenheiten der Stadt Musterstadt finden Sie unter ' + extern('musterstadt', 'www.stadt-musterstadt.de') + '.</p>');
}};
})();
