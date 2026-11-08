/* KommunalCMS 3.2 - Inhalte: Kultur & Freizeit */
window.MS = window.MS || {};
MS.seiten = MS.seiten || {};
(function () {
var S = MS.seiten;
var u = function (id, extra) { return 'index.html?id=' + id + '&amp;L=0' + (extra || ''); };
var a = function (id, text) { return '<a href="' + u(id) + '">' + text + '</a>'; };
var tel = function (d) { return '(0 12 34) 5 67-' + d; };
var pdf = function (datei, text, groesse) { return '<a href="pdf/' + datei + '" data-ereignis="pdf">' + text + '</a> <span class="pdf">(PDF, ' + groesse + ')</span>'; };

S[600] = {html:
  '<p>Musterstadt hat viel zu bieten: eine fast 900-jährige Geschichte, das einzige Stempelmuseum Deutschlands, ein lebendiges Vereinsleben und die idyllischen Muster-Auen direkt vor der Haustür.</p>' +
  '<table class="tab"><tr><th>Entdecken</th><th>Erleben</th></tr>' +
  '<tr><td>' + a(605, 'Stadtgeschichte') + '<br>' + a(610, 'Deutsches Stempelmuseum') + '<br>' + a(620, 'Unser Stadtmaskottchen') + '<br>' + a(640, 'Partnerstädte') + '</td>' +
  '<td>' + a(615, 'Veranstaltungskalender') + '<br>' + a(616, 'Laternenlauf 2009') + '<br>' + a(635, 'Vereinsverzeichnis') + '<br>' + a(650, 'Naturschutzgebiet Muster-Auen') + '</td></tr></table>' +
  '<p>Erinnerungen: ' + a(625, 'Fanmeile 2006') + ' · Interaktiv: ' + a(660, 'Stadtplan') + ', ' + a(665, 'Rathaus-Rundgang') + ', ' + a(655, 'Webcam Marktplatz') + '</p>'};

/* ---------- Stadtgeschichte ---------- */
var CHRONIK = [
  ['um 800', 'Erste Besiedlung an einer Furt der Muster. Archäologische Funde aus dieser Zeit befinden sich im Stadtarchiv.'],
  ['1147', 'Erste urkundliche Erwähnung als „Mustere“ in einer Schenkungsurkunde der Abtei Ellerbusch. Der Heimatverein Musterstadt vertritt die Auffassung, dass eine ältere Abschrift bereits auf das Jahr 1139 verweist. Die Stadt hält an 1147 fest.'],
  ['1314', 'Graf Dietrich von der Muster verleiht Musterstadt die Stadtrechte.'],
  ['1350–1420', 'Bau der Stadtmauer mit vier Toren und dem Pulverturm. Teilstücke sind am Mühlenbach und in der Gartenstraße erhalten.'],
  ['1421', 'Der Fuchs ist als Siegelbild der Stadt belegt; der älteste erhaltene Abdruck befindet sich an einer Urkunde aus diesem Jahr. Ältere Belege gingen beim Stadtbrand von 1583 verloren.'],
  ['1583', 'Ein Stadtbrand zerstört große Teile der Innenstadt. Das Alte Rathaus wird 1591 neu errichtet.'],
  ['1632', 'Im Dreißigjährigen Krieg wird die Stadt mehrfach geplündert.'],
  ['1794–1814', 'Französische Zeit. Musterstadt wird Sitz einer Mairie.'],
  ['1815', 'Musterstadt fällt an Preußen und gehört zur Rheinprovinz.'],
  ['1871', 'Heinrich Kranz gründet die Gummistempelfabrik Kranz. Musterstadt wird zur „Stempelstadt“ und beliefert über ein Jahrhundert lang Amtsstuben im ganzen Land.'],
  ['1878', 'Anschluss an die Eisenbahn.'],
  ['1945', 'Bei Kriegsende wird etwa ein Drittel der Innenstadt zerstört.'],
  ['1950er', 'Wiederaufbau. Die Stempelfabrik Kranz beschäftigt in ihren besten Jahren rund 1.200 Menschen.'],
  ['1964', 'Städtepartnerschaft mit Saint-Renard-sur-Loire (Frankreich).'],
  ['1969', 'Einweihung des Neuen Rathauses am Rathausplatz. Das Alte Rathaus wird Sitz des Stadtarchivs.'],
  ['1975', 'Kommunale Neugliederung in Nordrhein-Westfalen: Die bis dahin selbstständigen Gemeinden Oberkleeberg, Auenrode und Kirchwinkel werden eingemeindet. Musterstadt wird Sitz des neu gebildeten Kreises Muster. Die Stadt erhält ihr Wappen in der heutigen Gestalt.'],
  ['1977', 'Eröffnung des Hallenbades.'],
  ['1983', 'Freundschaftsvertrag mit New Kleeberg, Wisconsin (USA).'],
  ['1992', 'Städtepartnerschaft mit Pieczątkowo (Polen).'],
  ['1994', 'Die Stempelfabrik Kranz stellt die Produktion ein.'],
  ['1996', 'Eröffnung des Deutschen Stempelmuseums im ehemaligen Fabrikgebäude.'],
  ['1999', 'Flora Fuchs wird Maskottchen der Stadt.'],
  ['2006', 'Fanmeile auf dem Marktplatz während der Fußball-Weltmeisterschaft.'],
  ['2007', 'Das Hallenbad wird vorübergehend geschlossen. Neuer Internetauftritt der Stadt.'],
  ['2009', 'Erster Haushalt nach dem Neuen Kommunalen Finanzmanagement. Umbau der Kreuzung Lindenstraße/Mühlenweg.']
];
S[605] = {suchwoerter: CHRONIK.map(function (c) { return c.join(' '); }).join(' '), html: function () {
  return '<p>Musterstadt liegt am Ufer der Muster im Rheinland. Die Stadt blickt auf eine wechselvolle Geschichte zurück, die bis heute im Stadtbild sichtbar ist: in der Stadtmauer, im Alten Rathaus am Marktplatz und in der ehemaligen Stempelfabrik.</p>' +
    '<table class="tab"><tr><th width="80">Jahr</th><th>Ereignis</th></tr>' + CHRONIK.map(function (c) { return '<tr><td><b>' + c[0] + '</b></td><td>' + c[1] + '</td></tr>'; }).join('') + '</table>' +
    '<h3 class="zw">Das Wappen</h3><p>Blasonierung: In Rot über einem silbernen Wellenbalken und einem blauen Wellenschildfuß ein naturfarbener, von vorn gesehener Fuchskopf, darunter ein goldener Stempel mit braunem Griff.</p>' +
    '<p>Der Fuchs ist das älteste Bildelement des Wappens. Die Beschreibung und die Bedeutung der einzelnen Elemente stehen im <a href="seiten/wappen-stadt.html">Infobogen des Stadtarchivs zum Wappen</a>.</p>' +
    '<p>Der Fuchs erinnert an die Muster-Auen und gilt als Sinnbild für Klugheit. Der Stempel steht für die Tradition der Stempelstadt, die Wellen für die Muster. Die Verwendung der Farbe Braun ist heraldisch umstritten und war Gegenstand mehrerer Stellungnahmen des Heimatvereins.</p>' +
    '<p class="klein">Text: Hubert Schmitz, Heimatverein Musterstadt e. V. Ergänzungen: Dr. Gerd Lennartz, Stadtarchiv. Die Auffassungen des Heimatvereins geben nicht in allen Punkten die Auffassung der Stadt wieder.</p>' +
    '<h3 class="zw">Stadtarchiv</h3><p>Das Stadtarchiv im Alten Rathaus, Marktplatz 3, verwahrt Urkunden, Ratsprotokolle, Fotografien und Nachlässe. Benutzung nach Voranmeldung, Mi 9:00–12:00 Uhr. Dr. Gerd Lennartz, ' + tel('4 50') + '.</p>';
}};

/* ---------- Stempelmuseum ---------- */
S[610] = {suchwoerter: 'Stempelmuseum Kranz Museum Gummistempel Eingangsstempel Sonderausstellung Lange Nacht Werkstatt', html:
  '<svg width="200" height="130" viewBox="0 0 200 130" style="float:right;margin:0 0 8px 12px;border:1px solid #bbb" aria-label="Foto des Stempelmuseums"><rect width="200" height="130" fill="#cfd8e0"/><rect x="20" y="40" width="160" height="80" fill="#9c5a3c"/><g fill="#d9e4ea">' + [30, 60, 90, 120, 150].map(function (x) { return '<rect x="' + x + '" y="55" width="18" height="24"/><rect x="' + x + '" y="88" width="18" height="24"/>'; }).join('') + '</g><rect x="150" y="10" width="14" height="40" fill="#7a4630"/><rect x="40" y="28" width="120" height="12" fill="#e8b32a"/><text x="100" y="37" text-anchor="middle" font-family="Verdana" font-size="8" fill="#3b2a1a">STEMPELFABRIK H. KRANZ</text></svg>' +
  '<p>Das Deutsche Stempelmuseum im denkmalgeschützten Gebäude der ehemaligen Gummistempelfabrik Heinrich Kranz zeigt die Geschichte des Stempels von den Siegeln des Mittelalters bis zum Selbstfärbestempel. Mit rund 14.000 Objekten ist es die größte Sammlung ihrer Art in Deutschland.</p>' +
  '<h3 class="zw">Höhepunkte der Sammlung</h3><ul><li>Der „Reichsstempel“: ein Eingangsstempel des Reichspostamtes von 1890</li><li>Der größte Gummistempel Deutschlands (Stempelfläche 1,20 m × 0,80 m), angefertigt 1966 zum 95-jährigen Firmenjubiläum</li><li>Die vollständig erhaltene Vulkanisierwerkstatt der Fabrik</li><li>Stempel aus 112 Ländern</li></ul>' +
  '<div class="hinweis"><b>Sonderausstellung bis 31.01.2010:</b> „Eingegangen! 100 Jahre Eingangsstempel in deutschen Amtsstuben“. Mit einem nachgebauten Behördenschalter, an dem Besucherinnen und Besucher ihre Eintrittskarte selbst abstempeln dürfen.</div>' +
  '<table class="tab"><tr><th colspan="2">Besucherinformation</th></tr><tr><td>Anschrift</td><td>Am Stempelwerk 1, 43999 Musterstadt</td></tr><tr><td>Öffnungszeiten</td><td>Dienstag 10:00–12:00 Uhr<br>Sonntag 14:00–17:00 Uhr<br>Gruppen nach Vereinbarung</td></tr><tr><td>Eintritt</td><td>Erwachsene 2,50 €, ermäßigt 1,50 €, Kinder unter 6 Jahren frei</td></tr><tr><td>Mitmach-Werkstatt</td><td>„Stempel selbst schnitzen“ für Kinder ab 8 Jahren, jeden ersten Sonntag im Monat, 15:00 Uhr, 3,00 € inkl. Material</td></tr></table>' +
  '<p><b>Themenführung „Auf den Spuren des Stempels“</b> mit dem Heimatverein: dienstags, Beginn 10:45 Uhr, Dauer ca. 90 Minuten, Treffpunkt an der Museumskasse. 4,00 € inklusive Eintritt.</p>' +
  '<p><b>Lange Nacht der Stempel</b> am Samstag, 07.11.2009, 18:00 bis 24:00 Uhr, mit Führungen im Halbstundentakt und Stempelbar.</p>' +
  '<p>Leitung: Dr. Ingrid Kranz<br>Telefon: (0 12 34) 5 67-4 80</p>'};

/* ---------- Veranstaltungen ---------- */
var VER = [
  ['So, 18.10.2009', '8:00–15:00 Uhr', 'Trödelmarkt', 'Marktplatz'],
  ['Fr, 23.10.2009', '18:00 Uhr', 'Kickerturnier „Alte Post Cup“', 'Jugendzentrum „Alte Post“'],
  ['Sa, 24.10.2009', '19:30 Uhr', 'Herbstkonzert des Musikzuges der Freiwilligen Feuerwehr', 'Aula Schulzentrum'],
  ['Fr, 30.10.2009', '19:00 Uhr', 'Halloween-Party ab 14', 'Jugendzentrum „Alte Post“'],
  ['So, 01.11.2009', '15:00 Uhr', 'Allerheiligen: Gräbersegnung', 'Friedhof'],
  ['Sa, 07.11.2009', '18:00–24:00 Uhr', 'Lange Nacht der Stempel', 'Deutsches Stempelmuseum'],
  ['Mi, 11.11.2009', '11:11 Uhr', 'Sessionseröffnung der KG Musterstädter Funken', 'Marktplatz'],
  ['Mi, 11.11.2009', '17:00 Uhr', 'Laternenlauf der Kita Sonnenschein mit Martinsfeuer', 'Rathausplatz, Festwiese'],
  ['So, 15.11.2009', '11:30 Uhr', 'Volkstrauertag: Gedenkstunde', 'Ehrenmal am Friedhof'],
  ['Fr, 20.11.2009', '14:00 Uhr', 'Versteigerung von Fundsachen', 'Bauhof, Industriestraße 22'],
  ['Sa, 21.11.2009', '14:00 Uhr', 'LAN-Party ab 16', 'Jugendzentrum „Alte Post“'],
  ['Fr, 27.11.– So, 20.12.2009', 'Fr 16–21, Sa und So 12–21 Uhr', 'Musterstädter Weihnachtsmarkt', 'Marktplatz'],
  ['Sa, 05.12.2009', '16:00 Uhr', 'Der Nikolaus besucht den Weihnachtsmarkt (mit Flora Fuchs)', 'Marktplatz'],
  ['Do, 31.12.2009', '', 'Silvester: Feuerwerk ist im Denkmalbereich Marktplatz nicht gestattet', '']
];
S[615] = {suchwoerter: VER.map(function (v) { return v.join(' '); }).join(' '), html: function () {
  return '<p>Veranstaltungen in Musterstadt von Oktober bis Dezember 2009. Alle Angaben ohne Gewähr.</p>' +
    '<table class="tab"><tr><th>Datum</th><th>Uhrzeit</th><th>Veranstaltung</th><th>Ort</th></tr>' +
    VER.map(function (v) { return '<tr><td>' + v[0] + '</td><td>' + v[1] + '</td><td>' + (v[2].indexOf('Laternenlauf') === 0 ? a(616, v[2]) : v[2]) + '</td><td>' + v[3] + '</td></tr>'; }).join('') + '</table>' +
    '<p class="klein">Vereine können Veranstaltungen schriftlich bei der Pressestelle melden. Ein Anspruch auf Veröffentlichung besteht nicht.</p>';
}};

S[616] = {suchwoerter: 'Laternenlauf St. Martin Martinsfeuer Weckmann Laterne Martinszug Route Lieder', html:
  '<svg width="160" height="160" viewBox="0 0 160 160" style="float:right;margin:0 0 8px 12px" aria-hidden="true"><rect width="160" height="160" fill="#1d2a44"/><circle cx="130" cy="28" r="12" fill="#f1e7b0"/><line x1="40" y1="20" x2="40" y2="60" stroke="#6b4a2a" stroke-width="2"/><path d="M28 60 h24 l-3 40 h-18z" fill="#f28c1e"/><circle cx="40" cy="80" r="7" fill="#ffe27a"/><line x1="100" y1="50" x2="100" y2="85" stroke="#6b4a2a" stroke-width="2"/><circle cx="100" cy="102" r="17" fill="#e8742a"/><path d="M90 92 l4 -8 l3 6 M110 92 l-4 -8 l-3 6" stroke="#7a3a10" fill="#e8742a"/><circle cx="95" cy="100" r="2" fill="#222"/><circle cx="105" cy="100" r="2" fill="#222"/><path d="M96 108 l4 5 l4 -5z" fill="#fff"/><text x="80" y="150" text-anchor="middle" font-family="Verdana" font-size="9" fill="#f1e7b0">Flora-Laterne</text></svg>' +
  '<p>Am <b>Mittwoch, 11. November 2009</b>, zieht der Laternenzug der Kita Sonnenschein wieder durch die Innenstadt. Alle Kinder mit ihren Familien sind herzlich eingeladen!</p>' +
  '<table class="tab"><tr><th colspan="2">Ablauf</th></tr>' +
  '<tr><td>17:00 Uhr</td><td>Treffen am Rathausplatz, Begrüßung durch Bürgermeister Wellbrock</td></tr>' +
  '<tr><td>17:15 Uhr</td><td>Abmarsch: Rathausplatz – Kirchstraße – Mühlenweg – Festwiese an der Muster</td></tr>' +
  '<tr><td>ca. 17:50 Uhr</td><td>Martinsfeuer auf der Festwiese, Mantelteilung, Grußwort von Pfarrer Stockhausen</td></tr>' +
  '<tr><td>ca. 18:15 Uhr</td><td>Ausgabe der Weckmänner, solange der Vorrat reicht</td></tr></table>' +
  '<p>Angeführt wird der Zug von St. Martin hoch zu Ross. Das Pferd stellt auch in diesem Jahr ein Gemeindemitglied der Pfarrei St. Martin zur Verfügung. Musikalisch begleitet der Musikzug der Freiwilligen Feuerwehr den Zug, die Feuerwehr entzündet auch das Martinsfeuer. Flora Fuchs läuft mit!</p>' +
  '<h3 class="zw">Gemeinsam singen</h3><p>Gesungen werden unter anderem „Sankt Martin ritt durch Schnee und Wind“, „Ich geh mit meiner Laterne“ und „Laterne, Laterne“. Den Liedzettel gibt es hier: ' + pdf('liedzettel-laternenlauf-2009.pdf', 'Liedzettel', '5 KB') + '</p>' +
  '<h3 class="zw">Bitte beachten Sie</h3><ul><li>Die Kirchstraße und der Mühlenweg sind von 16:45 bis 18:30 Uhr gesperrt.</li><li>Am selben Tag findet um 11:11 Uhr auf dem Marktplatz die Sessionseröffnung der KG Musterstädter Funken statt.</li><li>Bitte achten Sie auf Ihre Kinder. Treffpunkt für verloren gegangene Kinder ist das Feuerwehrfahrzeug an der Festwiese.</li><li>Laternen mit elektrischem Licht werden aus Sicherheitsgründen empfohlen.</li></ul>' +
  '<p>Ansprechpartnerin: Claudia Wefers, Kita Sonnenschein, Martinsstraße 5</p>'};

/* ---------- Stadtmaskottchen ---------- */
S[620] = {suchwoerter: 'Flora Fuchs Maskottchen Wappentier Fuchs Steckbrief Malwettbewerb', html:
  '<svg width="150" height="190" viewBox="0 0 150 190" style="float:right;margin:0 0 8px 12px" aria-label="Flora Fuchs"><ellipse cx="75" cy="140" rx="38" ry="44" fill="#e8742a"/><ellipse cx="75" cy="150" rx="22" ry="30" fill="#fff"/><path d="M110 160 q34 -10 30 -50 q-6 22 -24 30z" fill="#e8742a"/><path d="M134 112 q6 -4 6 -2 q-2 10 -8 12z" fill="#fff"/><path d="M40 40 L52 92 L98 92 L110 40 L86 64 L64 64z" fill="#e8742a" stroke="#7a3a10"/><path d="M52 92 L75 120 L98 92z" fill="#fff" stroke="#7a3a10"/><circle cx="75" cy="118" r="4" fill="#222"/><circle cx="62" cy="82" r="3.5" fill="#222"/><circle cx="88" cy="82" r="3.5" fill="#222"/><rect x="56" y="150" width="38" height="12" rx="2" fill="#e8b32a" stroke="#7a3a10"/><rect x="69" y="138" width="12" height="12" fill="#7a4a1d"/></svg>' +
  '<p>Seit 1999 ist <b>Flora Fuchs</b> das Maskottchen der Stadt Musterstadt. Sie ist bei allen städtischen Festen dabei, begleitet den Laternenlauf, besucht die Kitas und wirbt auf Plakaten für die Mülltrennung.</p>' +
  '<table class="tab"><tr><th colspan="2">Steckbrief</th></tr><tr><td>Name</td><td>Flora Fuchs</td></tr><tr><td>Geburtstag</td><td>14. Mai 1999</td></tr><tr><td>Wohnort</td><td>Muster-Auen (Zweitwohnsitz: Rathaus)</td></tr><tr><td>Lieblingsessen</td><td>Weckmann (von allen Musterstädter Bäckereien gleichermaßen)</td></tr><tr><td>Hobby</td><td>Stempeln</td></tr><tr><td>Lieblingswort</td><td>„Musterstadt!“</td></tr><tr><td>Mag nicht</td><td>Müll auf der Straße</td></tr></table>' +
  '<p>Wer im Flora-Kostüm steckt, ist eines der bestgehüteten Geheimnisse der Stadtverwaltung.</p>' +
  '<h3 class="zw">Der Fuchs im Wappen</h3><p>Der Fuchs ist seit dem 15. Jahrhundert das Siegelbild der Stadt und das älteste Element ihres Wappens. Der Fuchs steht für die Muster-Auen, in denen bis heute eine gesunde Fuchspopulation lebt, und für Klugheit. Mehr zum Wappen in der ' + a(605, 'Stadtgeschichte') + '.</p>' +
  '<h3 class="zw">Echte Füchse</h3><p>Im ' + a(650, 'Naturschutzgebiet Muster-Auen') + ' werden jährlich die Fuchsbaue gezählt. Bitte füttern Sie keine Wildtiere und halten Sie Mülltonnen geschlossen.</p>' +
  '<div class="hinweis"><b>Malwettbewerb:</b> Malt Flora beim Laternenlauf! Einsendeschluss ist der 30.11.2009. Die schönsten Bilder werden im Foyer des Rathauses ausgestellt. Bitte Name, Alter und Anschrift auf der Rückseite vermerken.</div>'};

/* ---------- Fanmeile 2006 ---------- */
var SPIELE = [
  ['09.06.2006', 'Deutschland – Costa Rica 4:2', 'Eröffnungsspiel'],
  ['14.06.2006', 'Deutschland – Polen 1:0', 'mit Gästen aus unserer Partnerstadt Pieczątkowo'],
  ['20.06.2006', 'Ecuador – Deutschland 0:3', ''],
  ['24.06.2006', 'Deutschland – Schweden 2:0', 'Achtelfinale'],
  ['30.06.2006', 'Deutschland – Argentinien 1:1 n. V., 4:2 i. E.', 'Viertelfinale'],
  ['04.07.2006', 'Deutschland – Italien 0:2 n. V.', 'Halbfinale'],
  ['08.07.2006', 'Deutschland – Portugal 3:1', 'Spiel um Platz 3']
];
var MOTIVE = ['Blick auf die Großbildleinwand', 'Fans in Schwarz-Rot-Gold', 'Jubel nach dem Tor', 'Bürgermeister Wellbrock mit Fans', 'Der Musikzug der Feuerwehr', 'Flora Fuchs im Trikot', 'Bratwurststand der Schützen', 'Public Viewing am Abend'];
function fanbild(n, gross) {
  var s = n * 37 + 11, w = gross ? 400 : 120, h = gross ? 300 : 90;
  function r(m) { s = (s * 9301 + 49297) % 233280; return s % m; }
  var nacht = n % 4 === 3;
  var b = '<svg width="' + w + '" height="' + h + '" viewBox="0 0 120 90" style="border:1px solid #999;background:' + (nacht ? '#1a2238' : '#9fb8d3') + '">';
  b += '<rect x="' + (30 + r(20)) + '" y="' + (8 + r(6)) + '" width="50" height="30" fill="#222"/><rect x="' + (32 + r(1)) + '" y="' + (10 + r(1)) + '" width="0" height="0"/>';
  b += '<rect x="34" y="12" width="46" height="24" fill="' + (nacht ? '#3a7d3a' : '#4f9a4f') + '" opacity=".9"/>';
  for (var i = 0; i < 26; i++) {
    var x = r(120), y = 55 + r(30), c = ['#111', '#c8102e', '#f2c200', '#e6c4a2', '#3a3a3a'][r(5)];
    b += '<circle cx="' + x + '" cy="' + y + '" r="' + (5 + r(4)) + '" fill="' + c + '"/>';
  }
  if (n % 3 === 0) b += '<g transform="translate(' + (10 + r(80)) + ' 40)"><rect width="18" height="4" fill="#111"/><rect y="4" width="18" height="4" fill="#c8102e"/><rect y="8" width="18" height="4" fill="#f2c200"/></g>';
  return b + '</svg>';
}
S[625] = {suchwoerter: 'WM 2006 Fanmeile Public Viewing Sommermärchen Fotogalerie ' + SPIELE.map(function (s) { return s[1]; }).join(' '), html: function () {
  return '<p>Ein Sommermärchen in Musterstadt! Während der Fußball-Weltmeisterschaft 2006 verwandelte sich der Marktplatz in eine Fanmeile. Bei allen Spielen der deutschen Mannschaft verfolgten bis zu 4.000 Menschen die Übertragung auf der Großbildleinwand. Hier finden Sie die schönsten Bilder.</p>' +
    '<div id="fangross" style="text-align:center;margin:8px 0"></div><div id="fanthumbs" style="overflow:hidden"></div>' +
    '<p class="klein">Fotos: Pressestelle der Stadt Musterstadt. Die Spielergebnisse: ' + SPIELE.map(function (s) { return s[0].slice(0, 5) + '. ' + s[1]; }).join(' · ') + '.</p>' +
    '<p class="klein">Vielen Dank an alle Vereine, Helferinnen und Helfer und an die Freiwillige Feuerwehr!</p>';
}, init: function () {
  var t = document.getElementById('fanthumbs'), html = '';
  for (var i = 0; i < 48; i++) html += '<a href="#" onclick="return MS.fanZeige(' + i + ')" style="float:left;margin:3px">' + fanbild(i, false) + '</a>';
  t.innerHTML = html;
}};
MS.fanZeige = function (i) {
  i = (i + 48) % 48;
  var sp = SPIELE[Math.floor(i / 7) % SPIELE.length];
  document.getElementById('fangross').innerHTML = fanbild(i, true) + '<br><b>Bild ' + (i + 1) + ' von 48:</b> ' + MOTIVE[i % MOTIVE.length] + ', ' + sp[1] + ' (' + sp[0] + ')' + (sp[2] ? ', ' + sp[2] : '') +
    '<br><a href="#" onclick="return MS.fanZeige(' + (i - 1) + ')">« vorheriges Bild</a> | <a href="#" onclick="document.getElementById(\'fangross\').innerHTML=\'\';return false">schließen</a> | <a href="#" onclick="return MS.fanZeige(' + (i + 1) + ')">nächstes Bild »</a>';
  document.getElementById('fangross').scrollIntoView();
  return false;
};

/* ---------- Hallenbad ---------- */
S[630] = {stand: '02.04.2007', suchwoerter: 'Hallenbad Schwimmbad geschlossen Sanierung Schulschwimmen Wiedereröffnung', html:
  '<div class="hinweis"><b>Das Hallenbad ist ab dem 01.04.2007 vorübergehend geschlossen.</b></div>' +
  '<p>Wegen notwendiger Arbeiten an der Lüftungs- und Filtertechnik muss das Hallenbad an der Schützenstraße vorübergehend geschlossen werden. Ein Gutachten zum Umfang der Arbeiten ist in Auftrag gegeben. Die Wiedereröffnung ist voraussichtlich für den Herbst 2007 vorgesehen.</p>' +
  '<h3 class="zw">Schulschwimmen</h3><p>Während der Schließung findet der Schwimmunterricht der Musterstädter Schulen im Hallenbad einer Nachbarstadt statt. Die Schülerinnen und Schüler werden mit Bussen befördert.</p>' +
  '<h3 class="zw">Eintrittskarten</h3><p>Zehnerkarten und Jahreskarten behalten ihre Gültigkeit und können nach der Wiedereröffnung weiter genutzt werden.</p>' +
  '<p>Wir bitten um Ihr Verständnis und freuen uns, Sie im Herbst wieder begrüßen zu dürfen!</p>' +
  '<p class="klein">Öffnungszeiten (bis 31.03.2007): Di–Fr 7:00–8:00 Uhr (Frühschwimmer) und 14:00–21:00 Uhr, Sa 8:00–18:00 Uhr, So 8:00–13:00 Uhr. Mittwochs Warmbadetag.</p>'};

/* ---------- Vereine ---------- */
var VEREINE = [
  ['Brauchtum', [['St.-Sebastianus-Schützenbruderschaft Musterstadt 1462 e. V.', 'Brudermeister Heinz Esser', 'Schützenfest im Juli, Schützenhaus Schützenstraße 50'],
    ['KG Musterstädter Funken 1951 e. V.', 'Präsident Rolf Jöris', 'Sessionseröffnung am 11.11., Prunksitzung im Februar'],
    ['Heimatverein Musterstadt e. V.', 'Vorsitzender Hubert Schmitz', 'Stadtführungen jeden ersten Sonntag, 14:00 Uhr, ab Altem Rathaus'],
    ['Martinskomitee Musterstadt', 'Pfarrei St. Martin', 'Organisation von Pferd und St. Martin']]],
  ['Sport', [['SV Musterstadt 1919 e. V.', 'Abteilungen Fußball, Tischtennis', 'Sportplatz an der Muster'],
    ['TV Musterstadt 1886 e. V.', 'Turnen, Gymnastik, Seniorensport', 'Turnhalle Schulzentrum'],
    ['Angelsportverein „Muster-Hecht“ e. V.', '', 'Fischereischein erforderlich'],
    ['Hundesportverein Musterstadt e. V.', '', 'Übungsplatz Industriestraße']]],
  ['Musik und Kultur', [['MGV „Eintracht“ Musterstadt 1872', 'Männergesangverein', 'Proben Do 20:00 Uhr, Gaststätte „Zum Marktkrug“'],
    ['Kirchenchor St. Martin', '', 'Proben Mo 19:30 Uhr, Pfarrheim'],
    ['Musikzug der Freiwilligen Feuerwehr', '', 'Herbstkonzert am 24.10.2009'],
    ['Briefmarken- und Stempelsammlerverein Musterstadt e. V.', '', 'Tauschtag jeden dritten Sonntag im Stempelmuseum']]],
  ['Gemeinwohl', [['Kleingartenverein „Am Mühlenbach“ e. V.', 'Vorsitzender Günter Rademacher', 'Gartenordnung beim Vorstand erhältlich'],
    ['Förderverein Hallenbad Musterstadt e. V.', '', 'Treffen jeden letzten Freitag im Monat'],
    ['Partnerschaftsverein Musterstadt e. V.', '', 'Pflege der Städtepartnerschaften'],
    ['Förderverein der Freiwilligen Feuerwehr', '', ''],
    ['Bürgerinitiative „Rettet die Telefonzelle am Marktplatz“', 'Sprecherin Hermine Lückerath', 'siehe Bürgerbeteiligung']]]
];
S[635] = {suchwoerter: VEREINE.map(function (g) { return g[1].map(function (v) { return v.join(' '); }).join(' '); }).join(' '), html: function () {
  return '<p>In Musterstadt gibt es über 90 Vereine. Hier finden Sie eine Auswahl. Vereine, die aufgenommen werden möchten, wenden sich bitte an die Pressestelle.</p>' +
    VEREINE.map(function (g) {
      return '<h3 class="zw">' + g[0] + '</h3><table class="tab">' + g[1].map(function (v) { return '<tr><td width="45%"><b>' + v[0] + '</b></td><td>' + (v[1] ? v[1] + '<br>' : '') + '<span class="klein">' + v[2] + '</span></td></tr>'; }).join('') + '</table>';
    }).join('');
}};

/* ---------- Partnerstädte ---------- */
S[640] = {suchwoerter: 'Partnerstadt Städtepartnerschaft Saint-Renard-sur-Loire Pieczątkowo New Kleeberg Wisconsin Frankreich Polen USA Schüleraustausch', html:
  '<p>Musterstadt pflegt zwei Städtepartnerschaften und eine Städtefreundschaft. Getragen werden die Partnerschaften vom Partnerschaftsverein Musterstadt e. V.</p>' +
  '<h2>Saint-Renard-sur-Loire (Frankreich), seit 1964</h2><p>Die Kleinstadt an der Loire mit rund 6.500 Einwohnerinnen und Einwohnern ist seit über 40 Jahren mit Musterstadt verbunden. Jedes Jahr findet ein Schüleraustausch mit dem Heinrich-Kranz-Gymnasium statt.</p>' +
  '<h2>Pieczątkowo (Polen), seit 1992</h2><p>Die Partnerschaft mit Pieczątkowo entstand kurz nach der politischen Wende. Bei einem ersten Besuch stellte sich heraus, dass „pieczątka“ auf Polnisch „Stempel“ bedeutet. Seitdem besteht ein reger Austausch zwischen dem Deutschen Stempelmuseum und dem Heimatmuseum in Pieczątkowo. Eine Delegation aus Pieczątkowo verfolgte 2006 das Spiel Deutschland – Polen auf der ' + a(625, 'Fanmeile') + '.</p>' +
  '<h2>New Kleeberg, Wisconsin (USA), Freundschaftsvertrag seit 1983</h2><p>New Kleeberg wurde 1854 von Auswanderern aus Oberkleeberg gegründet. Da Oberkleeberg erst 1975 nach Musterstadt eingemeindet wurde, legt der Ortsteil Wert auf die Feststellung, dass es sich um „seine“ Partnerschaft handelt.</p>' +
  '<p>Kontakt: Partnerschaftsverein Musterstadt e. V., über das Büro des Rates, ' + tel('1 01') + '</p>'};

/* ---------- Naturschutzgebiet ---------- */
S[650] = {suchwoerter: 'Naturschutzgebiet Muster-Auen NSG Auwald Kopfweiden Eisvogel Fuchs Leinenpflicht Wollenweber Landschaftsbehörde Auenweg', html:
  '<p>Das Naturschutzgebiet Muster-Auen erstreckt sich auf rund 140 Hektar entlang der Muster zwischen dem Mühlenwehr und Oberkleeberg. Es umfasst Auwald, Feuchtwiesen, Altarme und Kopfweidenbestände. Hier leben unter anderem Eisvogel, Pirol, Biber (seit 2006 wieder nachgewiesen) und zahlreiche Füchse.</p>' +
  '<h3 class="zw">Verhalten im Naturschutzgebiet</h3><ul><li>Bitte bleiben Sie auf den ausgewiesenen Wegen.</li><li>Hunde sind an der Leine zu führen.</li><li>Radfahren ist nur auf dem Auenweg gestattet.</li><li>Feuer, Zelten, Baden und Modellflug sind nicht erlaubt.</li><li>Pflanzen und Tiere dürfen nicht entnommen oder gestört werden.</li></ul>' +
  '<p>Im Oktober finden Pflegearbeiten statt, siehe ' + a(1005, 'Meldung vom 30.09.2009') + '.</p>' +
  '<h3 class="zw">Zuständigkeit</h3><p>Für das Naturschutzgebiet ist nicht die Stadt, sondern die Untere Landschaftsbehörde des Kreises Muster zuständig. Ansprechpartnerin: Dr. Kerstin Wollenweber, Kreishaus, Raum 214, Telefon (0 12 34) 9 80-6 10. <a href="' + u(925, '&amp;ziel=kreis') + '">www.kreis-muster.de</a> <span class="klein">(externer Link)</span></p>' +
  '<p class="klein">Die Anregung der Stadt Musterstadt, im Naturschutzgebiet einen Fuchs-Erlebnispfad anzulegen, wird von der Unteren Landschaftsbehörde derzeit geprüft.</p>'};

/* ---------- Webcam ---------- */
S[655] = {html:
  '<div class="hinweis">Die Webcam ist derzeit außer Betrieb. Wir arbeiten an einer Lösung.</div>' +
  '<p>Letztes übertragenes Bild:</p>' +
  '<svg width="400" height="300" viewBox="0 0 400 300" style="border:1px solid #555" aria-label="Letztes Webcam-Bild des Marktplatzes, sehr dunkel"><rect width="400" height="300" fill="#0d1018"/><rect x="40" y="120" width="120" height="120" fill="#1a1f2a"/><rect x="250" y="100" width="110" height="140" fill="#181c26"/><circle cx="200" cy="200" r="3" fill="#c9a24a"/><circle cx="95" cy="150" r="2" fill="#c9a24a"/><rect x="0" y="240" width="400" height="60" fill="#14171f"/><text x="10" y="20" font-family="Courier New" font-size="13" fill="#ddd">MARKTPLATZ MUSTERSTADT  14.08.2008 03:12:47</text></svg>' +
  '<p class="klein">Die Webcam wird vom Förderverein der Freiwilligen Feuerwehr betrieben. Das Bild wird alle 60 Sekunden aktualisiert. Für eine Aktualisierung drücken Sie bitte F5.</p>'};

/* ---------- Stadtplan ---------- */
S[660] = {html:
  '<p>Mit dem interaktiven Stadtplan finden Sie alle Straßen, öffentlichen Einrichtungen und Sehenswürdigkeiten in Musterstadt.</p>' +
  '<div id="applet" style="width:520px;height:340px;background:#e6e6e6;border:1px solid #888;display:flex;align-items:center;justify-content:center;flex-direction:column;font-size:11px">' +
  '<svg width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="16" fill="none" stroke="#999" stroke-width="4" stroke-dasharray="20 80"><animateTransform attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="1s" repeatCount="indefinite"/></circle></svg>' +
  '<p>Java-Applet wird geladen …</p></div>' +
  '<p class="klein">Systemvoraussetzungen: Java Runtime Environment (JRE) 1.4.2 oder höher, Bildschirmauflösung mindestens 1024 × 768.</p>' +
  '<p>Alternativ steht der Stadtplan als ' + pdf('stadtplan.pdf', 'PDF-Dokument', '3,2 MB') + ' zur Verfügung. Gedruckte Stadtpläne erhalten Sie kostenlos im Bürgeramt.</p>', init: function () {
  setTimeout(function () {
    var el = document.getElementById('applet');
    if (el) el.innerHTML = '<div style="text-align:center;padding:20px"><svg width="32" height="32" viewBox="0 0 32 32"><path d="M16 2 L30 28 H2z" fill="#f2c200" stroke="#7a5c00"/><text x="16" y="25" text-anchor="middle" font-family="Verdana" font-size="16" font-weight="bold" fill="#222">!</text></svg><p><b>Fehler beim Laden des Applets</b></p><p>java.lang.ClassNotFoundException: de.kommunalcms.stadtplan.StadtplanApplet</p><p>Bitte installieren Sie die aktuelle Version der Java Runtime Environment und laden Sie die Seite neu.</p></div>';
  }, 3500);
}};

/* ---------- Rathaus-Rundgang ---------- */
S[665] = {html:
  '<p>Erleben Sie das Neue Rathaus in einem virtuellen 360°-Rundgang: vom Foyer über den Ratssaal bis zum Büro des Bürgermeisters.</p>' +
  '<div style="width:520px;height:300px;background:#000;color:#ccc;display:flex;align-items:center;justify-content:center;flex-direction:column;border:1px solid #444">' +
  '<svg width="48" height="48" viewBox="0 0 48 48"><rect width="48" height="48" rx="8" fill="#a3221a"/><path d="M30 12 q-10 0 -12 12 q-2 12 -10 12 M14 22 h16" stroke="#fff" stroke-width="4" fill="none"/></svg>' +
  '<p style="margin:10px 0 4px">Für diesen Inhalt wird der Adobe Flash Player 9 oder höher benötigt.</p>' +
  '<a href="#" style="color:#9cf" onclick="alert(\'Sie verlassen nun das Internetangebot der Stadt Musterstadt.\');return false">Adobe Flash Player herunterladen</a></div>' +
  '<p style="margin-top:6px"><a href="#" onclick="this.parentNode.innerHTML=\'Intro wird übersprungen … Der Rundgang konnte nicht geladen werden.\';return false">Intro überspringen</a></p>'};

/* ---------- Gästebuch ---------- */
var GB = [
  ['09.10.2009', 'muster_fan_87', 'Wieder eine Woche ohne Hallenbad. Das sind jetzt 131 Wochen. Ich zähle mit.'],
  ['05.10.2009', 'Jürgen', 'Wann ist der Kreisverkehr endlich fertig? Ich fahre seit einem Jahr über die Bahnhofstraße.'],
  ['02.10.2009', 'muster_fan_87', 'Wieder eine Woche ohne Hallenbad. 130 Wochen.'],
  ['28.09.2009', 'Familie aus Saint-Renard', 'Bonjour Musterstadt! Merci pour l\'accueil chaleureux pendant l\'échange scolaire. À l\'année prochaine!'],
  ['25.09.2009', 'muster_fan_87', 'Wieder eine Woche ohne Hallenbad. 129 Wochen. Hab gestern wieder im Rat gefragt. Gleiche Antwort.'],
  ['21.09.2009', 'Petra K.', 'Kann man hier einen Termin beim Bürgeramt machen? Ich finde nichts.'],
  ['21.09.2009', 'Webmaster', 'Liebe Petra K., bitte nutzen Sie die Online-Terminvereinbarung. Anfragen über das Gästebuch können nicht beantwortet werden.'],
  ['18.09.2009', 'muster_fan_87', 'Wieder eine Woche ohne Hallenbad. 128 Wochen.'],
  ['12.09.2009', '', '[Dieser Eintrag wurde vom Webmaster entfernt.]'],
  ['04.09.2009', 'Hermine L.', 'Die Telefonzelle am Marktplatz muss bleiben! Unterschreiben Sie bei Herrn Bröcker im Büdchen!'],
  ['28.08.2009', 'muster_fan_87', 'Wieder eine Woche ohne Hallenbad. 125 Wochen. Sorry, letzte Woche vergessen.'],
  ['17.07.2009', 'Bob & Linda', 'Greetings from New Kleeberg, Wisconsin! We visited Oberkleeberg last month and had a wonderful time. The Weckmann was excellent although we were told it is the wrong season.'],
  ['14.07.2009', 'ein Oberkleeberger', 'New Kleeberg ist UNSERE Partnerstadt!!!'],
  ['10.06.2009', 'Lisa, 9 Jahre', 'Ich finde Flora toll! Sie hat mir beim Kinderfest gewunken.'],
  ['01.04.2009', 'muster_fan_87', 'Zwei Jahre Hallenbad zu. Ein Jubiläum, über das sich niemand freut.'],
  ['24.12.2008', 'Webmaster', 'Die Stadtverwaltung wünscht allen Besucherinnen und Besuchern frohe Weihnachten!'],
  ['19.03.2007', 'muster_fan_87', 'Die neue Seite sieht super aus! Aber wo ist der Link zum Hallenbad?'],
  ['14.07.2006', 'Deutschland-Fan', 'Die Fanmeile war der Wahnsinn!!! Danke Musterstadt! Weltmeister der Herzen!'],
  ['02.08.2005', 'muster_fan_87', 'Erster!!! Tolle Homepage!']
];
S[905] = {html: function () {
  return '<p>Herzlich willkommen in unserem Gästebuch! Wir freuen uns über Ihre Grüße und Anregungen.</p>' +
    '<div class="hinweis">Wegen zahlreicher Spam-Einträge ist das Schreiben neuer Einträge vorübergehend nicht möglich. Bitte beachten Sie: Über das Gästebuch können keine Anträge gestellt und keine Anfragen beantwortet werden.</div>' +
    GB.map(function (e) { return '<div class="meldung"><span class="datum">' + e[0] + '</span>' + (e[1] ? ' – <b>' + e[1] + '</b>' : '') + '<p>' + e[2] + '</p></div>'; }).join('') +
    '<p class="klein">Einträge 1–19 von 1.847 · Seite 1 von 98 · <a href="#" onclick="alert(\'Die ältere Seite ist derzeit nicht verfügbar.\');return false">nächste Seite »</a></p>';
}};

/* ---------- Leichte Sprache ---------- */
S[935] = {html:
  '<p>Hier finden Sie Informationen in Leichter Sprache.</p>' +
  '<h3 class="zw">Das Rathaus</h3><p>Das Rathaus ist ein großes Haus.<br>Im Rathaus arbeiten viele Menschen.<br>Die Menschen helfen den Bürgern.<br>Bürger sind die Menschen in Musterstadt.</p>' +
  '<h3 class="zw">Das Bürger-Amt</h3><p>Das Bürger-Amt ist im Rathaus.<br>Dort bekommen Sie zum Beispiel einen Ausweis.<br>Am Mittwoch ist das Bürger-Amt zu.<br>Sie müssen eine Warte-Marke ziehen.<br>Die Warte-Marke ist ein kleiner Zettel mit einer Nummer.<br>Dann müssen Sie warten.</p>' +
  '<h3 class="zw">Wichtig</h3><p>Sie brauchen oft ein Formular.<br>Ein Formular ist ein Blatt Papier.<br>Sie müssen das Formular ausfüllen.<br>Bitte schreiben Sie mit einem blauen Stift.</p>' +
  '<p class="klein">Weitere Seiten in Leichter Sprache folgen.</p>'};


/* ---------- Letzte Änderung je Seite ---------- */
[[113, '15.01.2009'], [118, '01.07.2009'], [124, '03.09.2009'], [126, '22.09.2004'], [131, '13.03.2009'], [135, '15.12.2008'], [140, '09.10.2009'], [142, '09.10.2009'], [151, '05.10.2009'], [155, '19.03.2007'], [156, '04.09.2009'],
 [200, '19.03.2007'], [204, '14.08.2008'], [210, '09.10.2009'], [215, '27.02.2008'], [219, '19.03.2007'], [223, '05.01.2009'], [224, '06.01.2009'], [230, '17.11.2008'], [232, '06.10.2009'], [236, '09.10.2009'], [241, '02.01.2009'], [243, '02.01.2009'], [248, '12.03.2008'],
 [300, '19.03.2007'], [305, '05.11.2008'], [309, '09.10.2009'], [314, '27.06.2005'], [318, '29.09.2009'], [319, '30.06.2009'],
 [400, '19.03.2007'], [405, '17.07.2008'], [410, '22.09.2009'], [415, '01.10.2009'], [420, '11.05.2009'], [425, '04.02.2009'], [428, '19.03.2007'],
 [500, '30.06.2009'], [505, '05.10.2009'], [510, '14.08.2008'], [515, '24.09.2009'],
 [600, '19.03.2007'], [605, '30.06.2009'], [610, '01.10.2009'], [615, '09.10.2009'], [616, '12.10.2009'], [620, '19.05.2009'], [625, '14.07.2006'], [635, '20.11.2008'], [640, '12.06.2006'], [650, '30.09.2009'], [655, '14.08.2008'], [660, '06.11.2006'], [665, '06.11.2006'],
 [900, '19.03.2007'], [905, '09.10.2009'], [920, '19.03.2007'], [921, '04.02.2003'], [922, '19.03.2007'], [923, '19.03.2007'], [935, '24.04.2008']
].forEach(function (x) { if (S[x[0]] && !S[x[0]].stand) S[x[0]].stand = x[1]; });
})();