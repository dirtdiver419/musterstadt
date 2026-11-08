/* KommunalCMS 3.2 - English version (Stand 2007) */
window.MS = window.MS || {};
(function () {
var e = function (id, text) { return '<a href="index.html?id=' + id + '&amp;L=1">' + text + '</a>'; };
var de = '<p class="klein" style="margin-top:14px"><a href="index.html?id=1&amp;L=0">» Deutsche Version</a></p>';

MS.englishNav = function () {
  return '<h3>English</h3><ul>' +
    '<li><a href="index.html?id=1&amp;L=1">Welcome</a></li>' +
    '<li><a href="index.html?id=210&amp;L=1">Citizenoffice</a></li>' +
    '<li><a href="index.html?id=900&amp;L=1">Opening times</a></li>' +
    '<li><a href="index.html?id=660&amp;L=1">How to come to Musterstadt</a></li>' +
    '<li><a href="index.html?id=610&amp;L=1">Stamp Museum</a></li>' +
    '<li><a href="index.html?id=1&amp;L=0">Deutsch</a></li></ul>';
};

MS.english = {
  1: {titel: 'Welcome in Musterstadt!', html:
    '<p>Dear visitors,</p>' +
    '<p>we are glad to greet you on the homepage of the city Musterstadt! Musterstadt is a city with 38.214 inhabitants and lies on the river Muster in the beautiful Rhineland. Since 1871 our city is famous as the „Stempelstadt“ (city of the stamps).</p>' +
    '<p>On this pages you can inform yourself about our city administration, our sights and our events. Become informed!</p>' +
    '<p>Our city has three partner cities: Saint-Renard-sur-Loire in France, Pieczątkowo in Poland and New Kleeberg in the USA. Many greetings to all our friends!</p>' +
    '<p>We wish you a nice stay in our beautiful city!</p>' +
    '<p><i>Klaus-Dieter Wellbrock</i><br>Mayor (Bürgermeister)</p>' +
    '<div class="hinweis">Please note: Not all pages are available in english language. For more informations please take contact with the Pressestelle (only german speaking).</div>' + de},

  210: {titel: 'Citizenoffice', html:
    '<p>The Citizenoffice (Bürgeramt) is the first contact point for all citizen. Here you can make your registration (Anmeldung), get your identity card (Personalausweis) or your passport and many more.</p>' +
    '<p>Please draw a waiting mark (Wartemarke) at the automat in the foyer. When your number is shown on the display, please go to the counter. For every concern you need a own waiting mark.</p>' +
    '<p>Please bring all necessary documents with you. Uncomplete applications can not be accepted. All forms must be filled out in german language, in block letters and with a blue pen.</p>' +
    '<p>You can make an appointment with the Appointmentcalendar (Online-Terminvereinbarung). The Appointmentcalendar is offered by a external partner and is also available in english language.</p>' +
    '<p>Please switch off your mobile phone in the Citizenoffice.</p>' +
    '<p>Address: Neues Rathaus, ground floor, Rathausplatz 1, 43999 Musterstadt</p>' + de},

  900: {titel: 'Opening times', html:
    '<table class="tab"><tr><th colspan="2">Citizenoffice (Bürgeramt)</th></tr>' +
    '<tr><td>Monday, Tuesday, Friday</td><td>8–12 o\'clock</td></tr>' +
    '<tr><td>Wednesday</td><td>closed</td></tr>' +
    '<tr><td>Thursday</td><td>8–12 o\'clock and additional 14–18 o\'clock</td></tr></table>' +
    '<table class="tab"><tr><th colspan="2">City Cash Office (Stadtkasse)</th></tr>' +
    '<tr><td>Monday</td><td>8.30–12 o\'clock</td></tr>' +
    '<tr><td>Thursday</td><td>8.30–12 o\'clock and 14–16 o\'clock</td></tr>' +
    '<tr><td>Tuesday, Wednesday, Friday</td><td>closed</td></tr></table>' +
    '<p>The other offices are opened Monday till Friday 8–12 o\'clock, Thursday additional 14–18 o\'clock. Some offices have different opening times.</p>' +
    '<p>Telephone: 0049 (0)1234 567-0<br>Telefax: 0049 (0)1234 567-199</p>' +
    '<p>On public holidays (Feiertage) the city administration is closed. On the 11.11. the city administration is opened normal, although it is the beginning of the carnival.</p>' + de},

  660: {titel: 'How to come to Musterstadt', html:
    '<p><b>With the car:</b> Take the Autobahn until the exit Musterstadt. Then follow the signs „Zentrum“. After 9 kilometers you are in the city centre. Attention: Because of the construction of the roundabout (Kreisverkehr) on the Lindenstraße there is a diversion over the Bahnhofstraße until December 2009.</p>' +
    '<p><b>With the train:</b> Every hour a regional train is going to Musterstadt. From the station (Bahnhof) you can go by foot to the city centre in 10 minutes or take the bus line 4.</p>' +
    '<p><b>With the airplane:</b> The next airports are in Düsseldorf and Köln/Bonn. From there you can take the train.</p>' +
    '<p><b>Parking:</b> Parking places are on the Marktplatz (not on market days) and behind the Rathaus. Please note the parking discs (Parkscheibe).</p>' +
    '<p>A city map is unfortunately only available in german language.</p>' + de},

  610: {titel: 'Stamp Museum', html:
    '<p>The German Stamp Museum (Deutsches Stempelmuseum) is the only museum of its kind in Germany. It is located in the old rubber stamp factory of Heinrich Kranz from the year 1871.</p>' +
    '<p>Here you can see the biggest rubber stamp of Germany and 14.000 stamps from 112 countries. Please note: Stamps in this museum are rubber stamps (Stempel), not post stamps (Briefmarken).</p>' +
    '<p>Opening times: Tuesday 10–12 o\'clock and Sunday 14–17 o\'clock<br>Entrance: 2,50 Euro, reduced 1,50 Euro</p>' +
    '<p>Address: Am Stempelwerk 1, 43999 Musterstadt</p>' + de}
};
})();
