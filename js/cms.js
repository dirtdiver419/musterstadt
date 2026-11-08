/* KommunalCMS 3.2 - Seitenauslieferung */
(function () {
  var MS = window.MS;
  MS.seiten = MS.seiten || {};
  MS.knoten = {};
  MS.kinder = {};
  MS.struktur.forEach(function (z) {
    MS.knoten[z[0]] = {id: z[0], eltern: z[1], titel: z[2], opt: z[3] || {}};
    if (z[0] !== z[1]) (MS.kinder[z[1]] = MS.kinder[z[1]] || []).push(z[0]);
  });

  var p = new URLSearchParams(location.search);
  var id = parseInt(p.get('id') || '1', 10);
  var L = p.get('L') === '1' ? 1 : 0;
  MS.param = p;
  MS.L = L;

  MS.url = function (zid, extra) { return 'index.html?id=' + zid + '&L=0' + (extra || ''); };
  MS.link = function (zid, text) { return '<a href="' + MS.url(zid) + '">' + (text || MS.knoten[zid].titel) + '</a>'; };
  MS.schrift = function (px) { document.body.style.fontSize = px + 'px'; return false; };
  MS.esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[c]; }); };

    MS.melde = function (typ, daten) {
    if (window.parent !== window) {
      var nachricht = {quelle: MS.quelle || 'musterstadt', typ: typ, id: id, L: L};
      for (var k in daten || {}) nachricht[k] = daten[k];
      window.parent.postMessage(nachricht, (location.origin && location.origin !== 'null') ? location.origin : '*');
    }
  };
  /* Fehlende PDF-Dokumente abfangen, statt die Seite eines fremden Servers anzuzeigen. */
  document.addEventListener('click', function (e) {
    var p = e.target.closest ? e.target.closest('a[href$=".pdf"]') : null;
    if (!p || e.ctrlKey || e.metaKey || e.shiftKey || !window.fetch) return;
    e.preventDefault();
    var ziel = p.getAttribute('href');
    fetch(ziel, {method: 'HEAD'}).then(function (r) {
      if (r.ok) location.href = ziel;
      else { MS.melde('pdf_fehlt', {ziel: ziel}); alert('Das angeforderte Dokument steht vorübergehend nicht zur Verfügung (Fehler ' + r.status + ').\n\nBitte wenden Sie sich an die zuständige Stelle.'); }
    }).catch(function () { location.href = ziel; });
  });
  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a[data-ereignis]') : null;
    if (a) MS.melde(a.getAttribute('data-ereignis'), {ziel: a.getAttribute('href')});
  });

  function vorfahren(zid) {
    var kette = [];
    while (MS.knoten[zid]) { kette.unshift(zid); if (zid === 1) break; zid = MS.knoten[zid].eltern; }
    return kette;
  }

  var englisch = L === 1 && MS.english && MS.english[id];
  if (englisch) document.documentElement.lang = 'en';
  var knoten = MS.knoten[id];
  var inhalt = englisch ? MS.english[id] : MS.seiten[id];
  var fehler = !knoten;

  /* Hauptnavigation */
  var kette = knoten ? vorfahren(id) : [1];
  var bereich = kette[1] || 1;
  document.getElementById('hauptnav').innerHTML = MS.hauptnav.map(function (n) {
    return '<a href="' + MS.url(n) + '"' + (n === bereich && !(knoten && knoten.opt.versteckt && knoten.eltern === 1) ? ' class="aktiv"' : '') + '>' + MS.knoten[n].titel + '</a>';
  }).join('');

  /* Pfad */
  if (englisch) {
    document.getElementById('pfad').innerHTML = 'You are here: <a href="index.html?id=1&amp;L=1">Home</a>' + (id !== 1 ? ' › ' + MS.esc(inhalt.titel) : '');
  } else {
    document.getElementById('pfad').innerHTML = 'Sie sind hier: ' + (fehler ? MS.link(1) + ' › Fehler' :
      kette.map(function (k, i) { return i === kette.length - 1 ? MS.esc(MS.knoten[k].titel) : MS.link(k); }).join(' › '));
  }

  /* Linke Navigation */
  var links = '';
  if (englisch && MS.englishNav) {
    links = MS.englishNav();
  } else if (bereich === 1 || fehler || (knoten && knoten.opt.versteckt && knoten.eltern === 1)) {
    links = MS.startnav ? MS.startnav() : '';
  } else {
    links = '<h3>' + MS.knoten[bereich].titel + '</h3><ul>' + (MS.kinder[bereich] || []).filter(function (k) { return !MS.knoten[k].opt.versteckt; }).map(function (k) {
      var offen = kette.indexOf(k) > -1;
      var unter = '';
      if (offen && MS.kinder[k]) {
        unter = '<ul>' + MS.kinder[k].filter(function (u) { return !MS.knoten[u].opt.versteckt; }).map(function (u) {
          return '<li><a href="' + MS.url(u) + '"' + (kette.indexOf(u) > -1 ? ' class="aktiv"' : '') + '>' + MS.knoten[u].titel + '</a></li>';
        }).join('') + '</ul>';
      }
      return '<li><a href="' + MS.url(k) + '"' + (offen ? ' class="aktiv"' : '') + '>' + MS.knoten[k].titel + '</a>' + unter + '</li>';
    }).join('') + '</ul>';
  }
  document.getElementById('links').innerHTML = links;

  /* Inhalt */
  var mitte = document.getElementById('mitte');
  var html, titel;
  if (!fehler && inhalt) {
    titel = inhalt.titel || knoten.titel;
    html = (inhalt.ohneUeberschrift ? '' : '<h1>' + titel + '</h1>') + (typeof inhalt.html === 'function' ? inhalt.html() : inhalt.html);
    if (inhalt.stand) document.getElementById('aenderung').textContent = inhalt.stand;
  } else if (!fehler && MS.kinder[id] && MS.kinder[id].some(function (k) { return !MS.knoten[k].opt.versteckt; })) {
    titel = knoten.titel;
    html = '<h1>' + titel + '</h1><p>In diesem Bereich finden Sie folgende Informationen:</p><ul class="uebersicht">' +
      MS.kinder[id].filter(function (k) { return !MS.knoten[k].opt.versteckt; }).map(function (k) { return '<li>' + MS.link(k) + '</li>'; }).join('') + '</ul>';
  } else {
    titel = 'Fehler 404';
    html = '<h1>Seite nicht gefunden</h1><div class="fehler">Die angeforderte Seite (ID ' + MS.esc(isNaN(id) ? '?' : id) + ') wurde nicht gefunden oder ist nicht mehr verfügbar.</div>' +
      '<p>' + (MS.fehlerZusatz || 'Möglicherweise wurde die Seite im Rahmen der Umstellung auf KommunalCMS 3.2 verschoben.') + ' Bitte nutzen Sie die ' + MS.link(910, 'Sitemap') + ' oder die ' + MS.link(915, 'Suche') + '.</p><p>' + MS.link(1, '» Zur Startseite') + '</p>';
    MS.melde('fehler404');
  }
  mitte.innerHTML = html + '<p class="oben"><a href="#seite">nach oben ↑</a></p>';
  document.title = (englisch ? 'City of Musterstadt - ' : (MS.titelPrefix || 'Stadt Musterstadt - ')) + titel;

  /* Rechte Spalte */
  document.getElementById('rechts').innerHTML = (id === 1 && !englisch && MS.rechtsStart ? MS.rechtsStart() : (MS.rechtsStandard ? MS.rechtsStandard() : ''));

  if (inhalt && inhalt.init) inhalt.init();
  MS.melde('seitenaufruf', {titel: titel});
})();
