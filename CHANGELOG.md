# Changelog / Änderungsprotokoll

Changes to the website of the City of Musterstadt and the Kreis Muster (fictional; the website's in-world date is 12 Oct 2009). Format after [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), newest version first. English first, German below each version.

Änderungen an der Website von Stadt Musterstadt und Kreis Muster (fiktiv, Stand der Website: 12.10.2009). Format nach [Keep a Changelog](https://keepachangelog.com/de/1.1.0/), neueste Version oben. Je Version zuerst Englisch, dann Deutsch.

---

## [4.0.0]

### Added
- `pdf/stadtplan.pdf` (8 pages, 3.2 MB): city map with overview sheet, core-town sheet, three Ortsteil insets and a street index with grid squares. Linked on page 660.
- Disclosure that the content was created with the assistance of an AI language model (Claude, Anthropic): city imprint, Kreis imprint, footer of the appointment server (German and English), `README.md`.
- Business directory (page 510): Hofladen Auenkamp (Hof Auenkamp), Mühlencafé Kleeberger Mühle (weekends), Tankstelle Küppers (Auenrode, Kölner Straße 72). The directory now lists 97 entries.

### Changed
- City favicon: coat of arms with the waves clipped to the shield (Kreis and KTS favicons unchanged).
- Waste calendar street index (page 242): Kölner Straße split into 1–59 (Südstadt, district 3) and from no. 60 (Auenrode, district 6).
- Page 660: file size of the city-map PDF now 3.2 MB.
- `README.md` rewritten for visitors.
- Error page (404) now in three versions: city, Kreis (`kreis/404.html`) and appointment server (`termin/404.html`, German and English). Links are relative, so the site works under any address.

### Deutsch

#### Hinzugefügt
- `pdf/stadtplan.pdf` (8 Seiten, 3,2 MB): Stadtplan mit Gesamtplan, Kernstadt, drei Ortsteil-Ausschnitten und Straßenverzeichnis mit Planquadraten. Verlinkt auf Seite 660.
- Hinweis, dass die Inhalte mit Unterstützung eines KI-Sprachmodells (Claude, Anthropic) erstellt wurden: Impressum der Stadt, Impressum des Kreises, Fuß des Terminservers (deutsch und englisch), `README.md`.
- Branchenverzeichnis (Seite 510): Hofladen Auenkamp (Hof Auenkamp), Mühlencafé Kleeberger Mühle (am Wochenende), Tankstelle Küppers (Auenrode, Kölner Straße 72). Das Verzeichnis führt jetzt 97 Einträge.

#### Geändert
- Favicon der Stadt: Wappen mit beschnittenen Wellen im Schild (Favicons von Kreis und KTS unverändert).
- Straßenverzeichnis des Abfallkalenders (Seite 242): Kölner Straße geteilt in 1–59 (Südstadt, Bezirk 3) und ab Nr. 60 (Auenrode, Bezirk 6).
- Seite 660: Dateigröße des Stadtplan-PDFs jetzt 3,2 MB.
- `README.md` für Besucherinnen und Besucher neu geschrieben.
- Fehlerseite (404) jetzt in drei Fassungen: Stadt, Kreis (`kreis/404.html`) und Terminserver (`termin/404.html`, deutsch und englisch). Die Links sind relativ, die Website funktioniert daher unter jeder Adresse.

---

## [3.0.0]

### Added
- `pdf/`: 57 PDFs for city and Kreis (forms, bylaws, Haushaltsplan 2009 with 214 pages, Amtsblätter nos. 1, 6, 10 and 14–19, timetables, network map, letter templates, lantern-walk song sheet, and more).
- `seiten/wappen-stadt.html`: info sheet "The coat of arms of the City of Musterstadt" (noindex), linked from the start-page imprint and the city history page.
- `kreis/wappen.html`: "Coat of arms of the Kreis Muster" (noindex), linked on Kreis page 100.
- Council session of 12 Feb 2009 (ID 1214) with residents' question time and introduction of the 2009 budget bylaw.
- Page 140: file size for each Amtsblatt issue.
- Page 243: reference to Amtsblatt no. 15/2009 (bulky-waste dates).
- Page 405: notice on the draft amendment to the parental-contribution bylaw, linking Amtsblatt no. 17/2009.

### Changed
- PDF size labels match the files (KB = bytes/1024, MB = bytes/1048576).
- City coat of arms in the header: waves clipped to the shield shape, shield outline drawn last.
- Kreis coat of arms in the Kreis page header replaced with the clover coat of arms; Kreis favicon shows the clover.
- Waste calendar (page 242): holiday shift moved from 25 Dec to Monday 28 Dec.
- City history and coat-of-arms texts aligned with the info sheet: 1975 chronicle entry (present form of the arms), new 1421 entry, blazon "naturfarbener, von vorn gesehener Fuchskopf", fox sentence on page 620.

### Fixed
- Kreis site: two PDF links (`anzeige-tierhaltung.pdf`, `landschaftsplan-3.pdf`) pointed to the wrong file names.
- City coat of arms: waves protruded past the lower shield edge.

### Deutsch

#### Hinzugefügt
- `pdf/`: 57 PDFs für Stadt und Kreis (Formulare, Satzungen, Haushaltsplan 2009 mit 214 Seiten, Amtsblätter Nr. 1, 6, 10 und 14–19, Fahrpläne, Liniennetzplan, Briefvorlagen, Liedzettel Laternenlauf und weitere).
- `seiten/wappen-stadt.html`: Infobogen „Das Wappen der Stadt Musterstadt“ (noindex), verlinkt vom Impressum der Startseite und von der Stadtgeschichte.
- `kreis/wappen.html`: „Wappen des Kreises Muster“ (noindex), verlinkt auf der Kreisseite 100.
- Ratssitzung vom 12.02.2009 (ID 1214) mit Einwohnerfragestunde und Einbringung der Haushaltssatzung 2009.
- Seite 140: Dateigröße je Amtsblatt-Ausgabe.
- Seite 243: Verweis auf Amtsblatt Nr. 15/2009 (Sperrmülltermine).
- Seite 405: Hinweis auf den Entwurf zur Änderung der Elternbeitragssatzung mit Verweis auf Amtsblatt Nr. 17/2009.

#### Geändert
- PDF-Größenangaben entsprechen den Dateien (KB = Bytes/1024, MB = Bytes/1048576).
- Wappen der Stadt im Kopf: Wellen auf die Schildform beschnitten, Schildrand zuletzt gezeichnet.
- Wappen des Kreises im Kopf der Kreisseite durch das Kleeblattwappen ersetzt; Favicon des Kreises zeigt das Kleeblatt.
- Abfallkalender (Seite 242): Feiertagsverschiebung vom 25.12. auf Montag, 28.12.
- Texte zu Stadtgeschichte und Wappen an den Infobogen angeglichen: Chronikeintrag 1975 (heutige Gestalt des Wappens), neuer Eintrag 1421, Blasonierung „naturfarbener, von vorn gesehener Fuchskopf“, Fuchssatz auf Seite 620.

#### Behoben
- Kreisseite: Zwei PDF-Links (`anzeige-tierhaltung.pdf`, `landschaftsplan-3.pdf`) zeigten auf falsche Dateinamen.
- Wappen der Stadt: Wellen ragten über den unteren Schildrand hinaus.

---

## [2.0.0]

New geography per the street master list (Kernstadt, Ortsteile, Wohnplätze); addresses aligned with the street data.

### Deutsch

Neue Geografie nach Straßen-Masterliste (Kernstadt, Ortsteile, Wohnplätze); Adressen an die Straßendaten angeglichen.

---

## [1.0.0]

First release of the city site, the Kreis site and the municipal appointment server (KTS), plus direct header links between city, Kreis and KTS.

### Deutsch

Erstausgabe von Stadt-Website, Kreis-Website und Kommunalem Terminserver (KTS), dazu direkte Kopf-Verweise zwischen Stadt, Kreis und KTS.
