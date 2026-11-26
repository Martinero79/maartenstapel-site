(function () {
  var DA = {
    "skip": "Spring til indhold",
    "nav.services": "Ydelser",
    "nav.approach": "Arbejdsform",
    "nav.about": "Om mig",
    "nav.contact": "Kontakt",
    "hero.status": "Ledig nu til interimopgaver",
    "hero.h1a": "Interim økonomi",
    "hero.h1b": "i København",
    "hero.lead": "Jeg træder til, når jeres økonomiafdeling har brug for erfarne hænder: dækker en stilling, holder månedsafslutningen på sporet og får rapportering og revision gjort ordentligt.",
    "cta.contact": "Kontakt mig",
    "cta.cv": "Download CV",
    "hero.who": "For CFO'er, økonomichefer, PE-ejede virksomheder og porteføljeselskaber samt rekrutteringsfirmaer.",
    "services.h": "Det tilbyder jeg",
    "services.1h": "Interim dækning",
    "services.1p": "Dækning af en stilling i økonomifunktionen ved vakance, barsel eller forandring, så arbejdet fortsætter uden huller.",
    "services.2h": "Månedsafslutning og rapportering",
    "services.2p": "Gennemførelse af eller støtte til månedsafslutning, afstemninger og finansiel rapportering, til tiden og med god dokumentation.",
    "services.3h": "Årsafslutning og revision",
    "services.3p": "Forberedelse af årsafslutningen, samling af revisionsmateriale og samarbejde med revisor om at lukke åbne punkter.",
    "services.4h": "Ekstra kapacitet",
    "services.4p": "Et par erfarne ekstra hænder, når teamet er presset af spidsbelastning, en overgang eller et efterslæb.",
    "approach.h": "Sådan arbejder jeg",
    "approach.lead": "Praktisk, struktureret og nem at arbejde sammen med. Jeg kommer hurtigt ind i opgaven og efterlader tingene i bedre orden, end jeg fandt dem.",
    "approach.1h": "Hurtig opstart",
    "approach.1p": "En kort gennemgang af prioriteter, deadlines og systemer, og så går jeg i gang.",
    "approach.2h": "Praktisk levering",
    "approach.2p": "Jeg udfører selv arbejdet sammen med jeres team og holder jer opdateret om fremdrift og åbne punkter.",
    "approach.3h": "Ordentlig overdragelse",
    "approach.3p": "Klar dokumentation og en grundig overdragelse, når opgaven slutter.",
    "track.h": "Erfaring",
    "track.p": "Detaljer om tidligere stillinger og opgaver står i mit CV, som jeg gerne sender.",
    "eng.h": "Samarbejde",
    "eng.1k": "Type",
    "eng.1v": "Interim, fuld tid eller deltid",
    "eng.2k": "Sted",
    "eng.2v": "Storkøbenhavn, på stedet eller hybrid",
    "eng.3k": "Start",
    "eng.3v": "Ledig nu",
    "about.h": "Om mig",
    "about.p1": "Jeg hedder Maarten Stapel og er økonomiprofessionel med base i København. Jeg arbejder som interim og hjælper økonomiafdelinger gennem travle perioder, vakancer og forandringer.",
    "projects.h": "Projekter",
    "projects.p": "Et par ting, jeg bygger i min fritid.",
    "projects.1p": "Min investeringsside. Personlig research, ikke investeringsrådgivning.",
    "projects.2p": "En side om surfrejser. Kommer snart.",
    "contact.h": "Kontakt mig",
    "contact.p": "Har I brug for interim økonomihjælp? Send en kort besked om stillingen, tidsrammen og opgaven, så vender jeg hurtigt tilbage.",
    "footer.loc": "Interim økonomi, København, Danmark",
    "footer.privacy": "Ingen cookies, ingen sporing."
  };
  var META = {
    en: { title: document.title, desc: document.querySelector('meta[name="description"]').content },
    da: {
      title: "Maarten Stapel | Interim økonomichef og controller i København",
      desc: "Maarten Stapel, interim økonomi i København. Praktisk interim dækning af månedsafslutning, finansiel rapportering og årsafslutning/revision. Ledig nu."
    }
  };
  var nodes = document.querySelectorAll("[data-i18n]");
  var EN = {};
  nodes.forEach(function (n) { EN[n.dataset.i18n] = n.textContent; });
  var btn = document.getElementById("lang-toggle");

  function apply(lang) {
    var dict = lang === "da" ? DA : EN;
    nodes.forEach(function (n) { var t = dict[n.dataset.i18n]; if (t) n.textContent = t; });
    document.documentElement.lang = lang;
    document.title = META[lang].title;
    document.querySelector('meta[name="description"]').content = META[lang].desc;
    btn.textContent = lang === "da" ? "EN" : "DA";
    btn.setAttribute("aria-label", lang === "da" ? "Switch to English" : "Skift til dansk");
    try { localStorage.setItem("lang", lang); } catch (e) {}
    var u = new URL(location.href);
    if (lang === "da") u.searchParams.set("lang", "da"); else u.searchParams.delete("lang");
    history.replaceState(null, "", u);
  }

  if (btn.hidden) { document.getElementById("y").textContent = new Date().getFullYear(); return; }
  var q = new URLSearchParams(location.search).get("lang");
  var saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  var lang = q === "da" || q === "en" ? q : (saved === "da" ? "da" : "en");
  if (lang === "da") apply("da");
  btn.addEventListener("click", function () { apply(document.documentElement.lang === "da" ? "en" : "da"); });
  document.getElementById("y").textContent = new Date().getFullYear();
})();
