/* KommunalCMS 3.2 - Inhalte: Familie & Soziales */
window.MS = window.MS || {};
MS.seiten = MS.seiten || {};
(function () {
var S = MS.seiten;
var u = function (id, extra) { return 'index.html?id=' + id + '&amp;L=0' + (extra || ''); };
var a = function (id, text) { return '<a href="' + u(id) + '">' + text + '</a>'; };
var tel = function (d) { return '(0 12 34) 5 67-' + d; };
var pdf = function (datei, text, groesse) { return '<a href="pdf/' + datei + '" data-ereignis="pdf">' + text + '</a> <span class="pdf">(PDF, ' + groesse + ')</span>'; };

S[400] = {html:
  '<p>Musterstadt ist eine familienfreundliche Stadt. Hier finden Sie Informationen zu Kindertagesstätten, Schulen, Jugendarbeit, Bibliothek, Seniorenarbeit und Gleichstellung.</p>' +
  '<ul class="uebersicht"><li>' + a(405, 'Kindertagesstätten') + ': Plätze, Anmeldung, Elternbeiträge</li><li>' + a(410, 'Schulen') + ' in Musterstadt</li><li>' + a(415, 'Jugendzentrum „Alte Post“') + '</li><li>' + a(420, 'Stadtbibliothek') + '</li><li>' + a(425, 'Seniorenbeirat') + '</li><li>' + a(428, 'Gleichstellungsstelle') + '</li></ul>'};

/* ---------- Kitas ---------- */
S[405] = {suchwoerter: 'Kita Kindergarten Sonnenschein Fuchsbau St. Martin Pusteblume Warteliste Elternbeitrag KiBiz U3 Betreuung Anmeldung', html:
  '<p>In Musterstadt gibt es vier Kindertageseinrichtungen in städtischer, kirchlicher und freier Trägerschaft. Seit dem 1. August 2008 gilt in Nordrhein-Westfalen das Kinderbildungsgesetz (KiBiz). Eltern können zwischen Betreuungszeiten von 25, 35 und 45 Wochenstunden wählen.</p>' +
  '<table class="tab"><tr><th>Einrichtung</th><th>Träger</th><th>Anschrift</th><th>Plätze</th></tr>' +
  '<tr><td>Kita Sonnenschein<br><span class="klein">Leitung: Claudia Wefers</span></td><td>Stadt Musterstadt</td><td>Martinsstraße 5</td><td>75, davon 10 unter drei Jahren</td></tr>' +
  '<tr><td>Kita Fuchsbau</td><td>Stadt Musterstadt</td><td>Oberkleeberg, Dorfstraße 18</td><td>40</td></tr>' +
  '<tr><td>Kath. Kita St. Martin</td><td>Kath. Pfarrei St. Martin</td><td>Kirchstraße 12</td><td>65</td></tr>' +
  '<tr><td>Kita Pusteblume</td><td>Familienwerk Muster e. V.</td><td>Fuchsweg 3</td><td>50, davon 12 unter drei Jahren</td></tr></table>' +
  '<h3 class="zw">Anmeldung</h3><p>Die Anmeldung für alle städtischen Einrichtungen erfolgt zentral bei der Kita-Verwaltung mit dem Formular <a href="pdf/kita-anmeldung.pdf" data-ereignis="pdf">Anmeldung für einen Platz in einer Kindertageseinrichtung</a> <span class="pdf">(PDF, 121 KB)</span>. <b>Anmeldeschluss für das Kindergartenjahr ab 1. August 2010 ist der 31. Januar 2010.</b> Für kirchliche und freie Einrichtungen melden Sie Ihr Kind bitte direkt beim Träger an.</p>' +
  '<p>Die Platzvergabe erfolgt nach der Vergaberichtlinie der Stadt Musterstadt. Berücksichtigt werden insbesondere das Alter des Kindes, Geschwisterkinder in der Einrichtung, die Berufstätigkeit der Eltern und der Wohnort. Kinder mit Hauptwohnsitz in Musterstadt werden vorrangig berücksichtigt.</p>' +
  '<div class="hinweis">Über den Stand der Wartelisten können keine telefonischen Auskünfte erteilt werden. Zusagen und Absagen werden ab März schriftlich versandt. Freie Plätze im laufenden Kindergartenjahr werden über die Warteliste vergeben.</div>' +
  '<h3 class="zw">Elternbeiträge 2009/2010 (städtische Einrichtungen, monatlich)</h3><table class="tab"><tr><th>Jahreseinkommen</th><th>25 Std.</th><th>35 Std.</th><th>45 Std.</th></tr>' +
  '<tr><td>bis 15.000 €</td><td>0 €</td><td>0 €</td><td>0 €</td></tr><tr><td>bis 25.000 €</td><td>18 €</td><td>23 €</td><td>34 €</td></tr><tr><td>bis 37.000 €</td><td>42 €</td><td>53 €</td><td>78 €</td></tr>' +
  '<tr><td>bis 50.000 €</td><td>73 €</td><td>92 €</td><td>134 €</td></tr><tr><td>bis 62.000 €</td><td>102 €</td><td>129 €</td><td>187 €</td></tr><tr><td>über 62.000 €</td><td>139 €</td><td>176 €</td><td>254 €</td></tr></table>' +
  '<p class="klein">Für Kinder unter drei Jahren gelten erhöhte Beiträge. Ohne Einkommensnachweis wird der Höchstbetrag festgesetzt. Rechtsgrundlage: Elternbeitragssatzung vom 17.07.2008. Ein Entwurf zur Änderung der Beitragstabelle zum 01.08.2010 ist im ' + a(140, 'Amtsblatt Nr. 17/2009') + ' veröffentlicht; er ist noch nicht in Kraft.</p>' +
  '<h3 class="zw">Laternenlauf</h3><p>Die Kita Sonnenschein lädt am 11.11.2009 zum ' + a(1001, 'Laternenlauf') + ' ein.</p>' +
  '<h3 class="zw">Kontakt</h3><p>Sandra Kemper, Jugendamt, Kita-Verwaltung<br>Neues Rathaus, Raum 220<br>Telefon: ' + tel('5 40') + '<br>Sprechzeiten: Di 8:00–12:00 Uhr, Do 14:00–17:00 Uhr</p>'};

/* ---------- Schulen ---------- */
S[410] = {suchwoerter: 'Schule Grundschule Hauptschule Realschule Gymnasium OGS Ganztag Schulzentrum Heinrich-Kranz', html:
  '<p>Die Stadt Musterstadt ist Schulträger für sechs Schulen. Die weiterführenden Schulen befinden sich im Schulzentrum an der Schützenstraße.</p>' +
  '<table class="tab"><tr><th>Schule</th><th>Anschrift</th><th>Telefon</th></tr>' +
  '<tr><td>Gemeinschaftsgrundschule am Marktplatz<br><span class="klein">mit Offener Ganztagsschule</span></td><td>Gartenstraße 1</td><td>' + tel('9 11') + '</td></tr>' +
  '<tr><td>Kath. Grundschule St. Martin</td><td>Kirchstraße 14</td><td>' + tel('9 12') + '</td></tr>' +
  '<tr><td>Grundschule Oberkleeberg<br><span class="klein">Teilstandort der GGS am Marktplatz</span></td><td>Oberkleeberg, Dorfstraße 20</td><td>' + tel('9 13') + '</td></tr>' +
  '<tr><td>Gemeinschaftshauptschule Musterstadt</td><td>Schützenstraße 30 (Schulzentrum)</td><td>' + tel('9 21') + '</td></tr>' +
  '<tr><td>Realschule an der Muster</td><td>Schützenstraße 32 (Schulzentrum)</td><td>' + tel('9 22') + '</td></tr>' +
  '<tr><td>Heinrich-Kranz-Gymnasium</td><td>Schützenstraße 34 (Schulzentrum)</td><td>' + tel('9 23') + '</td></tr></table>' +
  '<p>Die Offene Ganztagsschule (OGS) an der Gemeinschaftsgrundschule am Marktplatz bietet eine Betreuung bis 16:00 Uhr mit Mittagessen und Hausaufgabenbetreuung. Anmeldungen erfolgen über die Schule.</p>' +
  '<div class="hinweis">Der Ausschuss für Schule, Jugend und Soziales berät derzeit über die Zukunft des Teilstandortes Oberkleeberg. Eine Entscheidung ist für das Frühjahr 2010 vorgesehen.</div>' +
  '<p>Schülerfahrkosten: Anträge erhalten Sie im Sekretariat Ihrer Schule.</p>'};

/* ---------- Jugendzentrum ---------- */
S[415] = {suchwoerter: 'Jugendzentrum Alte Post Brandt PIEPS Kicker Bandraum LAN-Party Bewerbungstraining Jugend', html:
  '<p><b>Hey, schön dass du da bist!</b> Das Jugendzentrum „Alte Post“ ist der Treffpunkt für alle zwischen 12 und 21 Jahren in Musterstadt. Bei uns kannst du chillen, Kicker spielen, Musik machen oder einfach mit Freunden abhängen.</p>' +
  '<table class="tab"><tr><th colspan="2">Öffnungszeiten</th></tr><tr><td>Dienstag bis Donnerstag</td><td>15:00–21:00 Uhr</td></tr><tr><td>Freitag</td><td>15:00–22:00 Uhr</td></tr><tr><td>Montag, Samstag, Sonntag</td><td>geschlossen</td></tr></table>' +
  '<h3 class="zw">Was geht im Oktober und November?</h3><table class="tab">' +
  '<tr><td>jeden Dienstag</td><td>Bandraum offen (bitte vorher eintragen)</td></tr>' +
  '<tr><td>jeden Mittwoch</td><td>Bewerbungstraining mit Herrn Brandt</td></tr>' +
  '<tr><td>Fr, 23.10.2009</td><td>Kickerturnier „Alte Post Cup“</td></tr>' +
  '<tr><td>Fr, 30.10.2009</td><td>Halloween-Party ab 14 (Kostüm erwünscht!)</td></tr>' +
  '<tr><td>Sa, 21.11.2009</td><td>LAN-Party ab 16 Jahren, 14:00 bis 24:00 Uhr. Rechner selbst mitbringen. Nur Spiele mit USK-Freigabe für das jeweilige Alter.</td></tr></table>' +
  '<p>Unsere Gruppe im pausenVZ heißt „JuZ Alte Post Musterstadt“. Schau vorbei!</p>' +
  '<h3 class="zw">Kontakt</h3><p>Sven Brandt, Sozialpädagoge<br>Jugendzentrum „Alte Post“, Bahnhofstraße 2, 43999 Musterstadt<br>Telefon: ' + tel('5 60') + '<br>PIEPS-Nr.: 284-117-903 (online Di und Do 15–18 Uhr)</p>' +
  '<p class="klein">Das Jugendzentrum ist eine Einrichtung des Jugendamtes der Stadt Musterstadt. Wir suchen eine Hausmeisterin oder einen Hausmeister, siehe ' + a(151, 'Stellenangebote') + '.</p>'};

/* ---------- Stadtbibliothek ---------- */
S[420] = {suchwoerter: 'Bibliothek Bücherei Ausleihe Öffnungszeiten Rosenthal Leseausweis Mahngebühr Internet-PC Medien', html:
  '<p>Die Stadtbibliothek Musterstadt bietet rund 32.000 Medien für alle Altersgruppen: Romane, Sachbücher, Kinder- und Jugendbücher, Zeitschriften, Hörbücher, Musik-CDs und DVDs.</p>' +
  '<table class="tab"><tr><th colspan="2">Öffnungszeiten</th></tr><tr><td>Montag</td><td>geschlossen</td></tr><tr><td>Dienstag</td><td>10:00–12:30 Uhr und 15:00–18:00 Uhr</td></tr><tr><td>Mittwoch</td><td>15:00–19:00 Uhr</td></tr><tr><td>Donnerstag</td><td>10:00–12:30 Uhr</td></tr><tr><td>Freitag</td><td>15:00–17:45 Uhr</td></tr><tr><td>Samstag</td><td>jeden ersten Samstag im Monat 10:00–12:00 Uhr</td></tr></table>' +
  '<p class="klein">In den Herbstferien gelten verkürzte Öffnungszeiten. Bitte beachten Sie den Aushang.</p>' +
  '<h3 class="zw">Gebühren</h3><table class="tab"><tr><td>Leseausweis Erwachsene (12 Monate)</td><td>10,00 €</td></tr><tr><td>Kinder und Jugendliche bis 18 Jahre</td><td>gebührenfrei</td></tr><tr><td>Ausleihe DVD (1 Woche)</td><td>1,00 €</td></tr><tr><td>Säumnisgebühr je Medium und angefangene Woche</td><td>0,50 €</td></tr><tr><td>Ersatz Leseausweis</td><td>3,00 €</td></tr><tr><td>Internet-PC (30 Minuten)</td><td>1,00 €</td></tr></table>' +
  '<p>Der Online-Katalog (OPAC) steht derzeit nur an den Recherche-PCs in der Bibliothek zur Verfügung. Verlängerungen sind telefonisch möglich.</p>' +
  '<div class="hinweis">Videokassetten (VHS) werden ausgesondert und können für 0,50 € je Stück erworben werden.</div>' +
  '<h3 class="zw">Kontakt</h3><p>Anke Rosenthal, Leiterin der Stadtbibliothek<br>Kirchstraße 8, 43999 Musterstadt<br>Telefon: ' + tel('4 70') + '</p>'};

/* ---------- Seniorenbeirat ---------- */
S[425] = {suchwoerter: 'Senioren Seniorenbeirat Internet für Senioren Seniorennachmittag Fahrdienst', html:
  '<p>Der Seniorenbeirat vertritt die Interessen der älteren Bürgerinnen und Bürger gegenüber Rat und Verwaltung. Er besteht aus neun Mitgliedern, die von den Seniorinnen und Senioren der Stadt gewählt werden.</p>' +
  '<p>Vorsitzende: Elfriede Kurth</p>' +
  '<h3 class="zw">Angebote</h3><table class="tab">' +
  '<tr><td>Seniorennachmittag</td><td>jeden zweiten Mittwoch, 15:00 Uhr, Pfarrheim St. Martin, mit Kaffee und Kuchen der Bäckerei Kowalski</td></tr>' +
  '<tr><td>Kurs „Internet für Senioren“</td><td>donnerstags 10:00 Uhr, Stadtbibliothek (Internet-PCs). Themen im Herbst: E-Mail schreiben, Fahrpläne im Internet, Vorsicht bei Gewinnspielen</td></tr>' +
  '<tr><td>Fahrdienst</td><td>Fahrten zum Kreiskrankenhaus und zum Kreishaus für Seniorinnen und Senioren ohne Auto, Anmeldung zwei Tage vorher</td></tr>' +
  '<tr><td>Sprechstunde</td><td>jeden ersten Montag im Monat, 10:00–11:00 Uhr, Neues Rathaus, Raum 215</td></tr></table>' +
  '<p>Der Seniorenbeirat unterstützt die Bürgerinitiative ' + a(156, '„Rettet die Telefonzelle am Marktplatz“') + '.</p>' +
  '<p>Kontakt über das Büro des Rates, ' + tel('1 01') + '.</p>'};

/* ---------- Gleichstellung ---------- */
S[428] = {suchwoerter: 'Gleichstellung Frauen Beratung Girls Day Wiedereinstieg Wintgens', html:
  '<p>Die Gleichstellungsbeauftragte setzt sich für die Gleichberechtigung von Frauen und Männern in der Stadtverwaltung und in der Stadt Musterstadt ein. Grundlage ist das Landesgleichstellungsgesetz NRW.</p>' +
  '<h3 class="zw">Angebote</h3><ul><li>Beratung in Fragen der Gleichberechtigung, vertraulich und kostenlos</li><li>Informationsabende zum beruflichen Wiedereinstieg nach der Familienphase</li><li>Koordination des Girls\' Day in Musterstädter Betrieben</li><li>Mitwirkung bei Stellenbesetzungen in der Stadtverwaltung</li></ul>' +
  '<p>Hilfe bei häuslicher Gewalt bieten die Beratungsstellen des Kreises Muster. Im Notfall wählen Sie bitte 110.</p>' +
  '<h3 class="zw">Kontakt</h3><p>Petra Wintgens, Gleichstellungsbeauftragte<br>Neues Rathaus, Raum 215<br>Telefon: ' + tel('1 20') + '<br>Sprechzeiten nach Vereinbarung</p>'};

})();
