/* KommunalCMS 3.2 - Inhalte: Wirtschaft */
window.MS = window.MS || {};
MS.seiten = MS.seiten || {};
(function () {
var S = MS.seiten;
var u = function (id, extra) { return 'index.html?id=' + id + '&amp;L=0' + (extra || ''); };
var a = function (id, text) { return '<a href="' + u(id) + '">' + text + '</a>'; };
var tel = function (d) { return '(0 12 34) 5 67-' + d; };

S[500] = {html:
  '<p>Musterstadt ist ein attraktiver Wirtschaftsstandort mit Tradition. Seit der Gründung der Gummistempelfabrik Heinrich Kranz im Jahr 1871 steht der Name unserer Stadt für Präzision und Zuverlässigkeit.</p>' +
  '<table class="tab"><tr><th colspan="2">Musterstadt in Zahlen</th></tr><tr><td>Einwohner (30.06.2009)</td><td>38.214</td></tr><tr><td>Sozialversicherungspflichtig Beschäftigte</td><td>rund 9.800</td></tr><tr><td>Gewerbebetriebe</td><td>rund 1.450</td></tr><tr><td>Gewerbesteuerhebesatz</td><td>430 v. H.</td></tr><tr><td>Autobahnanschluss</td><td>9 km</td></tr><tr><td>Bahnhof</td><td>Regionalbahn, stündlich</td></tr></table>' +
  '<ul class="uebersicht"><li>' + a(505, 'Wirtschaftsförderung') + '</li><li>' + a(510, 'Branchenverzeichnis') + '</li><li>' + a(515, 'Ausschreibungen &amp; Vergabe') + '</li></ul>'};

S[505] = {suchwoerter: 'Wirtschaftsförderung Thiel Gewerbeflächen Existenzgründung Lindenstraße Süd Am Stempelwerk Preisfuchs Freizeit Unterhaltung', html:
  '<p>Die Wirtschaftsförderung der Stadt Musterstadt ist Ihr Ansprechpartner für Ansiedlung, Erweiterung und Existenzgründung. Wir unterstützen Sie schnell, kompetent und unbürokratisch.</p>' +
  '<h3 class="zw">Gewerbeflächen</h3><table class="tab"><tr><th>Gebiet</th><th>Freie Fläche</th><th>Besonderheiten</th></tr>' +
  '<tr><td>Industriestraße</td><td>ca. 1,8 ha</td><td>voll erschlossen, Nähe Bauhof</td></tr>' +
  '<tr><td>Am Stempelwerk</td><td>ca. 0,6 ha</td><td>historisches Umfeld, Nachbarschaft Stempelmuseum</td></tr>' +
  '<tr><td>Lindenstraße Süd</td><td>auf Anfrage</td><td>neue Erschließung über den Kreisverkehr</td></tr></table>' +
  '<p>Mit dem neuen Kreisverkehr und der zusätzlichen Grundstückszufahrt entsteht an der Lindenstraße Süd ein attraktiver Standort für Freizeit- und Unterhaltungsangebote. Die planungsrechtlichen Voraussetzungen werden derzeit geschaffen.</p>' +
  '<h3 class="zw">Existenzgründung</h3><p>Gründerinnen und Gründer erhalten bei uns eine kostenlose Erstberatung. Für die ' + a(2013, 'Gewerbeanmeldung') + ' ist das Ordnungsamt zuständig.</p>' +
  '<h3 class="zw">Aktuelles</h3><p>' + a(1004, 'Musterstadt freut sich: Preisfuchs-Markt in der Lindenstraße eröffnet') + '</p>' +
  '<h3 class="zw">Kontakt</h3><p>Oliver Thiel, Wirtschaftsförderung<br>Neues Rathaus, Raum 312<br>Telefon: ' + tel('8 00') + '<br>E-Mail: wirtschaft@stadt-musterstadt.de</p>'};

/* ---------- Branchenverzeichnis ---------- */
var BR = [
  ['Bäckereien und Konditoreien', [
    ['Bäckerei Kowalski', 'Marktplatz 7', 'Meisterbäckerei seit 1962, mit Café. Weckmänner ab 1. November'],
    ['Backhaus Lemmen', 'Lindenstraße 61', 'Stammhaus. Filialen: Amselweg 2 und Eingangshalle Kreiskrankenhaus'],
    ['Backhaus Lemmen, Filiale Amselweg', 'Amselweg 2', 'Mo–Sa ab 6:30 Uhr, So 8–11 Uhr'],
    ['Backhaus Lemmen, Filiale im Kreiskrankenhaus', 'Am Hospitalgarten 5', 'Eingangshalle, täglich 7–18 Uhr'],
    ['Backstube am Bahnhof', 'Bahnhofstraße 3', 'Belegte Brötchen und Kaffee für Pendler, ab 5:15 Uhr'],
    ['Café-Konditorei Overath', 'Kirchstraße 11', 'Torten auf Bestellung, Sonntagskaffee'],
    ['Bäckerei Hüsgen', 'Oberkleeberg, Dorfstraße 9', 'Bauernbrot aus dem Steinofen'],
    ['Bäckerei Wefers', 'Auenrode, Auenstraße 14', 'Familienbetrieb in dritter Generation'],
    ['Backshop im Preisfuchs-Markt', 'Lindenstraße 30', 'Backwaren zum Mitnehmen']]],
  ['Metzgereien', [
    ['Metzgerei Breuer', 'Kirchstraße 5', 'Mittagstisch Mo–Fr'],
    ['Fleischerei Habets', 'Lindenstraße 19', 'mit Partyservice'],
    ['Landmetzgerei Pütz', 'Kirchwinkel, Kirchstraße 2', 'Hausschlachtung, Wurst aus eigener Herstellung'],
    ['Metzgerei Hüsgen', 'Oberkleeberg, Dorfstraße 11', 'Spezialität: Kleeberger Leberwurst']]],
  ['Lebensmittel und Getränke', [
    ['Preisfuchs-Markt (bis 01.10.2009: Spar-Mit-Markt)', 'Lindenstraße 30', 'Lebensmittel-Discounter, Neueröffnung am 02.10.2009'],
    ['Frischemarkt Lindlar', 'Gartenstraße 40', 'Vollsortiment, Lieferservice für Seniorinnen und Senioren'],
    ['Öztürk Frischmarkt', 'Bahnhofstraße 14', 'Obst, Gemüse und türkische Spezialitäten'],
    ['Getränkemarkt Kampmann', 'Industriestraße 12', 'Getränke, Festzeltgarnituren zum Verleih'],
    ['Reformhaus Sonnenblume', 'Kirchstraße 4', 'Naturkost und Reformwaren'],
    ['Weinhandlung am Pulverturm', 'Pulverturmstraße 6', 'Weine von Mosel, Ahr und Rhein'],
    ['Hofladen Auenkamp', 'Auenrode, Hof Auenkamp', 'Kartoffeln, Eier und Obst vom Hof, Fr und Sa']]],
  ['Apotheken', [
    ['Marien-Apotheke', 'Marktplatz 4', ''], ['Stadt-Apotheke', 'Kirchstraße 2', ''], ['Fuchs-Apotheke', 'Lindenstraße 25', ''],
    ['Apotheke am Bahnhof', 'Bahnhofstraße 11', ''], ['Apotheke am Kreishaus', 'Am Kreishaus 4', ''], ['Hospital-Apotheke', 'Am Hospitalgarten 3', ''],
    ['Apotheke im Amselweg', 'Amselweg 4', ''], ['Löwen-Apotheke', 'Oberkleeberg, Dorfstraße 3', 'Notdienstplan im Schaufenster']]],
  ['Banken und Post', [
    ['Kreissparkasse Muster, Hauptstelle', 'Marktplatz 10', 'Geschäftsstellen in Oberkleeberg (Dorfstraße 5) und am Amselweg (nur SB)'],
    ['Volksbank Muster-Kleeberg eG', 'Lindenstraße 40', ''],
    ['Postagentur in Schreibwaren Lennartz', 'Kirchstraße 3', 'Briefmarken, Pakete, Lotto']]],
  ['Gastronomie und Hotel', [
    ['Gaststätte „Zum Marktkrug“', 'Marktplatz 9', 'Gutbürgerliche Küche, Kegelbahn, Vereinslokal'],
    ['Brauhaus zum Pulverturm', 'Pulverturmstraße 1', 'Hausbrauerei. Ausschank „Musterstädter Obergärig“'],
    ['Gaststätte „Zur Post“', 'Bahnhofstraße 1', 'Durchgehend warme Küche'],
    ['Kneipe „Treffpunkt“', 'Schützenstraße 8', 'Fußball live, Dart'],
    ['Mühlencafé Kleeberger Mühle', 'Oberkleeberg, Kleeberger Mühle', 'Sa und So 13–18 Uhr, Kuchen aus eigener Backstube'],
    ['Antalya Grill', 'Lindenstraße 14', 'Döner, Pizza, Salate. Täglich 11–23 Uhr'],
    ['Imbiss Kreiselblick', 'Lindenstraße 50', 'Currywurst, Pommes, Frikadellen'],
    ['Pizzeria Da Toni', 'Bahnhofstraße 21', 'auch Lieferservice'],
    ['China-Restaurant Goldener Drache', 'Kölner Straße 12', 'Mittagsbuffet Mo–Fr'],
    ['Eiscafé Venezia', 'Bahnhofstraße 8', 'März bis Oktober'],
    ['Café Kowalski', 'Marktplatz 7', 'Café der Bäckerei Kowalski'],
    ['Stempelstübchen', 'Am Stempelwerk 1', 'Museumscafé im Deutschen Stempelmuseum'],
    ['Ausflugslokal Haus Kleeberg', 'Oberkleeberg, Kleeberger Höhe 1', 'Terrasse mit Blick ins Mustertal'],
    ['Schützenhaus Musterstadt', 'Schützenstraße 50', 'Saalvermietung für Feiern bis 200 Personen'],
    ['Hotel garni Lindenhof', 'Lindenstraße 2', '14 Zimmer, Frühstücksbuffet']]],
  ['Einzelhandel', [
    ['Büdchen am Markt', 'Marktplatz 1a', 'Zeitschriften, Getränke, Tabakwaren. Inhaber: Karl-Heinz Bröcker'],
    ['Bahnhofskiosk', 'Bahnhofsvorplatz 1', 'Zeitungen, Kaffee, Snacks, täglich 5:30–20:00 Uhr'],
    ['Schreibwaren Lennartz', 'Kirchstraße 3', 'Schreibwaren, Schulbedarf, Stempel, Postagentur'],
    ['Buchhandlung am Markt', 'Marktplatz 12', 'Bestellservice bis 18 Uhr, Lieferung am nächsten Tag'],
    ['Blumen Schmitz', 'Kirchstraße 6', 'Floristik, Grabgestecke'],
    ['Schuhhaus Kamps', 'Kirchstraße 9', 'Schuhe und Lederwaren'],
    ['Textilhaus Hambloch', 'Lindenstraße 8', 'Damen- und Herrenmode, Änderungsservice'],
    ['Foto-Optik Klinger', 'Kirchstraße 10', 'Brillen, Kontaktlinsen, biometrische Passfotos sofort'],
    ['Uhren & Schmuck Bley', 'Marktplatz 5', 'Uhrenreparatur, Trauringe'],
    ['Spielwaren Wolters', 'Lindenstraße 12', 'Spielwaren, Modellbau, Laternen'],
    ['Elektro Jansen', 'Lindenstraße 33', 'Fernseher, Hausgeräte, Kundendienst'],
    ['Zweirad Kuckertz', 'Gartenstraße 18', 'Fahrräder, Reparatur'],
    ['Parfümerie & Drogerie Odendahl', 'Kirchstraße 8', ''],
    ['Handy-Center Musterstadt', 'Bahnhofstraße 9', 'Handys, Verträge, Klingeltöne, Zubehör'],
    ['Baustoffe & Gartenmarkt Lohmar', 'Industriestraße 25', 'Baustoffe, Gartenbedarf, Gartenhäuser'],
    ['Videowelt Musterstadt', 'Lindenstraße 52', 'Videos und DVDs, Konsolenspiele. Mitgliedsausweis erforderlich. Inhaber: Detlef Lange'],
    ['Kinderkleiderbörse', 'Pfarrheim St. Martin, Kirchplatz 2', 'jeden ersten Samstag im Monat']]],
  ['Handwerk und Bau', [
    ['Esser Tiefbau GmbH', 'Industriestraße 40', 'Straßen- und Tiefbau, Kanalbau, Erdarbeiten. Geschäftsführer: Heinz Esser'],
    ['Malerbetrieb Pesch', 'Gartenstraße 22', 'Maler- und Lackierarbeiten'],
    ['Dachdeckerei Pütz', 'Kirchwinkel, Am Kirchwinkel 7', 'Dach, Wand, Abdichtung'],
    ['Sanitär & Heizung Schiefer', 'Handwerkerstraße 4', 'Notdienst rund um die Uhr'],
    ['Schreinerei Dohmen', 'Handwerkerstraße 9', 'Fenster, Türen, Innenausbau'],
    ['Garten- und Landschaftsbau Rademacher', 'Am Mühlenbach 30', 'Gartengestaltung, Baumpflege'],
    ['Schilder-Express Wessel', 'Am Kreishaus 2', 'Kfz-Kennzeichen in 5 Minuten, direkt gegenüber der Zulassungsstelle'],
    ['Stempel-Service Musterstadt', 'Am Stempelwerk 3', 'Gummistempel, Firmenstempel, Siegel. Tradition seit 1994'],
    ['Grabmale Kreutz', 'Friedhofsweg 2', 'Steinmetzbetrieb'],
    ['Bestattungen Görgens', 'Friedhofsweg 4', 'Erd-, Feuer- und Seebestattungen, Tag und Nacht erreichbar'],
    ['Schlüsselnotdienst Musterstadt', 'Bahnhofstraße 19', 'Türöffnung, Schließanlagen'],
    ['Autohaus Frings', 'Kölner Straße 40', 'Neu- und Gebrauchtwagen, Werkstatt, Hauptuntersuchung im Haus']]],
  ['Dienstleistungen und Gesundheit', [
    ['Fahrschule Raths', 'Bahnhofstraße 15', 'Alle Klassen, Theorie Di und Do 19 Uhr'],
    ['Salon Haarscharf', 'Lindenstraße 21', 'Damen- und Herrenfriseur'],
    ['Haar-Atelier Monika', 'Schützenstraße 3', 'Termine nach Vereinbarung'],
    ['Taxi Musterstadt', 'Bahnhofsvorplatz', 'Telefon (0 12 34) 4 44 44, auch AnrufSammelTaxi'],
    ['Copy-Center am Kreishaus', 'Am Kreishaus 6', 'Kopien, Bewerbungsmappen, Laminieren'],
    ['@-Café', 'Bahnhofstraße 17', 'Internetcafé, 1,50 € je halbe Stunde, Drucken 0,20 € je Seite'],
    ['Sonnenstudio Sonnendeck', 'Lindenstraße 44', ''],
    ['Reisebüro Fernweh', 'Kirchstraße 7', 'Pauschalreisen, Bahnfahrkarten'],
    ['Versicherungsbüro Lohmar', 'Marktplatz 14', ''],
    ['Steuerbüro Schäfer', 'Goethestraße 6', 'Lohnsteuerhilfe nach Vereinbarung'],
    ['Tierarztpraxis Dr. Kampmann', 'Schillerstraße 21', 'Kleintiere, Heimtierausweise'],
    ['Physiotherapie am Markt', 'Marktplatz 16', 'alle Kassen'],
    ['Hörakustik Thiel', 'Kirchstraße 12', ''],
    ['Änderungsschneiderei Yılmaz', 'Bahnhofstraße 6', ''],
    ['Textilreinigung Express', 'Lindenstraße 36', 'Abgabe bis 9 Uhr, Abholung ab 17 Uhr'],
    ['Tanzschule Wirtz', 'Schützenstraße 12', 'Grundkurse für Schülerinnen und Schüler ab 14'],
    ['Tankstelle Küppers', 'Auenrode, Kölner Straße 72', 'Freie Tankstelle, Mo–Sa 6–21 Uhr, So 8–20 Uhr']]],
  ['Freizeit und Industrie', [
    ['Minigolf an der Muster', 'Am Musterufer 5', 'Saisonpause bis April'],
    ['Reiterhof Auenhof', 'Auenrode, Am Auenhof 1', 'Reitunterricht, Pensionspferde'],
    ['Druckerei Schmitz', 'Gutenbergstraße 3', 'Druck des Amtsblattes der Stadt Musterstadt'],
    ['Kunststofftechnik Rhein-Muster GmbH', 'Industriestraße 30', 'Spritzguss und Formenbau'],
    ['Spedition Kamps', 'Lagerstraße 8', 'Nah- und Fernverkehr']]]
];
S[510] = {suchwoerter: BR.map(function (g) { return g[1].map(function (b) { return b.join(' '); }).join(' '); }).join(' '), html: function () {
  return '<p>Das Branchenverzeichnis enthält Unternehmen aus Musterstadt, die einer Veröffentlichung zugestimmt haben. Derzeit sind ' + BR.reduce(function (n, g) { return n + g[1].length; }, 0) + ' Einträge verzeichnet. Die Angaben beruhen auf den Mitteilungen der Unternehmen. Die Stadt übernimmt keine Gewähr für die Richtigkeit.</p>' +
    BR.map(function (g) {
      return '<h3 class="zw">' + g[0] + '</h3><table class="tab"><tr><th>Unternehmen</th><th>Anschrift</th><th>Angebot</th></tr>' +
        g[1].map(function (b) { return '<tr><td><b>' + b[0] + '</b></td><td>' + b[1] + '</td><td>' + b[2] + '</td></tr>'; }).join('') + '</table>';
    }).join('') +
    '<p class="klein">Ihr Unternehmen fehlt? Eintragungen sind kostenlos. Bitte wenden Sie sich an die Wirtschaftsförderung, ' + tel('8 00') + '.</p>';
}};

/* ---------- Ausschreibungen & Vergabe ---------- */
S[515] = {suchwoerter: 'Ausschreibung Vergabe Auftrag Esser Tiefbau Kreisverkehr Winterdienst Gebäudereinigung Hallenbad VOB VOL Auftragnehmer', html:
  '<p>Die Stadt Musterstadt vergibt Bau-, Liefer- und Dienstleistungen nach den Bestimmungen der VOB/A und VOL/A sowie der Gemeindehaushaltsverordnung NRW. Vergabeunterlagen können gegen Kostenerstattung bei der Zentralen Vergabestelle angefordert werden.</p>' +
  '<h2>Laufende Ausschreibungen</h2><table class="tab"><tr><th>Maßnahme</th><th>Verfahren</th><th>Angebotsfrist</th></tr>' +
  '<tr><td>Winterdienst auf Gehwegen städtischer Grundstücke 2009/2010</td><td>Öffentliche Ausschreibung (VOL/A)</td><td>26.10.2009, 10:00 Uhr</td></tr>' +
  '<tr><td>Unterhaltsreinigung Neues Rathaus 2010–2012</td><td>Öffentliche Ausschreibung (VOL/A)</td><td>06.11.2009, 10:00 Uhr</td></tr>' +
  '<tr><td>Kanalsanierung Kirchstraße</td><td>Beschränkte Ausschreibung (VOB/A)</td><td>abgelaufen</td></tr></table>' +
  '<h2>Erteilte Aufträge</h2><p>Information über vergebene Aufträge ab einem Auftragswert von 25.000 € (ohne Umsatzsteuer).</p>' +
  '<table class="tab"><tr><th>Maßnahme</th><th>Verfahren</th><th>Auftragnehmer</th><th>Datum</th></tr>' +
  '<tr><td>Umbau des Knotenpunktes Lindenstraße/Mühlenweg zum Kreisverkehrsplatz</td><td>Öffentliche Ausschreibung (VOB/A), 2. Verfahren</td><td>Esser Tiefbau GmbH, Musterstadt</td><td>20.03.2008</td></tr>' +
  '<tr><td>Herstellung einer Grundstückszufahrt Lindenstraße 52 im Zuge des Kreisverkehrs</td><td>Freihändige Vergabe (Nachtrag zum bestehenden Auftrag)</td><td>Esser Tiefbau GmbH, Musterstadt</td><td>26.06.2009</td></tr>' +
  '<tr><td>Kanalsanierung Kirchstraße</td><td>Beschränkte Ausschreibung (VOB/A)</td><td>Esser Tiefbau GmbH, Musterstadt</td><td>24.09.2009</td></tr>' +
  '<tr><td>Gutachten zum Sanierungsbedarf Hallenbad</td><td>Freihändige Vergabe (VOL/A)</td><td>Ingenieurbüro Bäder-Technik West, Köln</td><td>15.05.2007</td></tr>' +
  '<tr><td>Lieferung eines Kommunalfahrzeugs für den Bauhof</td><td>Öffentliche Ausschreibung (VOL/A)</td><td>Autohaus Frings, Musterstadt</td><td>12.02.2009</td></tr></table>' +
  '<p class="klein">Die Ausschreibung zum Umbau des Knotenpunktes Lindenstraße/Mühlenweg aus dem Jahr 2007 wurde mangels wirtschaftlicher Angebote aufgehoben.</p>' +
  '<h3 class="zw">Kontakt</h3><p>Zentrale Vergabestelle, Neues Rathaus, Raum 314<br>Telefon: ' + tel('2 60') + '</p>'};

})();
