import type { Faq, Service } from "./site";

export const taglineNl = "Advertenties, apps en AI-systemen die echt werk doen.";

export const servicesNl: Service[] = [
  {
    slug: "instagram-google-ads",
    name: "Instagram & Google Ads",
    short: "Wij beheren je Meta- en Google-campagnes, lezen de data goed en schuiven budget naar wat werkt.",
    title: "Instagram & Google Ads laten beheren | Elevare Hub AI",
    description: "Instagram-, Facebook- en Google-advertenties voor het mkb: betrouwbare tracking, campagnes, vaste optimalisatie en duidelijke rapportage. Elevare Hub AI.",
    definition: "Instagram- en Google Ads-beheer betekent het plannen, lanceren en verbeteren van betaalde campagnes op Meta (Instagram en Facebook) en Google, zodat advertentiebudget aanvragen, boekingen of bestellingen oplevert in plaats van alleen klikken. Elevare Hub AI begint met de tracking, bouwt de campagnes, loopt ze op een vast ritme na en gebruikt AI-tools om de data sneller te lezen, terwijl een mens elke beslissing over je budget neemt.",
    forWho: "Restaurants, studio's, lokale dienstverleners en kleine merken die al adverteren of willen beginnen, en iemand zoeken die de accounts beheert en in gewone taal uitlegt wat het geld doet.",
    deliverables: [
      { h: "Tracking waar je op kunt vertrouwen", p: "Pixels, conversies en events worden ingesteld en getest voordat er budget wordt uitgegeven, want elke latere beslissing hangt hiervan af." },
      { h: "Campagnes gebouwd op het doel", p: "Instagram- en Facebook-campagnes voor bereik, leads of bestellingen, en Google Search-campagnes voor mensen die al zoeken naar wat jij verkoopt." },
      { h: "Creatives en doelgroepen testen", p: "We testen hooks, formats en doelgroepen tegen elkaar en houden wat het resultaat draagt." },
      { h: "Vaste optimalisatie", p: "Budget gaat van zwakke naar sterke campagnes volgens een vast ritme, met een schriftelijke reden bij elke wijziging." },
      { h: "Rapportage die je kunt lezen", p: "Eén helder overzicht van uitgaven, leads en kosten per resultaat, zonder spreadsheets of jargon." },
    ],
    faqs: [
      { q: "Kunnen jullie rendement op advertentie-uitgaven beloven?", a: "Nee, en wees voorzichtig met wie dat wel doet. We beloven schone data, snellere beslissingen en een schriftelijke reden bij elke wijziging." },
      { q: "Welke platforms beheren jullie?", a: "Meta Ads, dat Instagram en Facebook omvat, en Google Ads, inclusief Search. In het eerste gesprek spreken we af welke mix bij je doel past." },
      { q: "Houd ik zelf de controle over mijn advertentieaccounts?", a: "Ja. De accounts blijven op jouw naam en wij werken erin met de toegang die je ons geeft, zodat je altijd alles kunt inzien." },
      { q: "Waar komt AI om de hoek kijken?", a: "Bij de analyse: verspild budget en winnende creatives sneller vinden dan met handmatige rapporten. Beslissingen over budget blijven bij een mens." },
    ],
    related: ["apps-websites", "crm-automation"],
  },
  {
    slug: "apps-websites",
    name: "Apps & Websites",
    short: "Web- en mobiele apps en snelle websites, van begin tot eind gebouwd en gemaakt om gevonden te worden.",
    title: "Maatwerk apps & websites laten maken | Elevare Hub AI",
    description: "Maatwerk web- en mobiele apps en snelle, vindbare websites, van begin tot eind gebouwd door Elevare Hub AI: Flutter, React, Supabase, betalingen en dashboards.",
    definition: "Maatwerk apps en websites worden gebouwd rond hoe jouw bedrijf echt werkt, in plaats van je proces te verbuigen naar een sjabloon. Elevare Hub AI bouwt web- en mobiele apps van begin tot eind: de schermen die mensen gebruiken en het systeem erachter. Ook bouwen we snelle websites met een heldere structuur, schema markup en antwoord-eerst content, zodat zoekmachines en AI-assistenten ze kunnen vinden en citeren.",
    forWho: "Bedrijven wiens proces niet past in standaardtools, zoals bestellen voor meerdere vestigingen, studiobeheer, boekings- en coachingplatforms, en bedrijven met een website die er goed uitziet maar geen aanvragen oplevert.",
    deliverables: [
      { h: "Eén codebase, meerdere rollen", p: "Klant-, medewerker-, koerier- en managerweergaven in dezelfde app, die verandert afhankelijk van wie inlogt, zoals in onze projecten Gusto en Kolay Temizle." },
      { h: "Een echte back-end", p: "Supabase en PostgreSQL met toegangsregels per rij, zodat iedereen alleen ziet wat diegene hoort te zien." },
      { h: "Betalingen en live cijfers", p: "Betaalproviders zoals Mollie en dashboards die de dag laten zien terwijl hij gebeurt." },
      { h: "Websites die gevonden worden", p: "Schone HTML, één duidelijke H1 per pagina, canonical URL's, sitemap, snel laden en gestructureerde data, zodat zoekmachines en assistenten zoals ChatGPT, Claude en Perplexity je kunnen lezen en citeren." },
      { h: "Overdracht waar je iets aan hebt", p: "Gedocumenteerde code in jouw repository, hosting die jij beheert en optionele ondersteuning na livegang." },
    ],
    faqs: [
      { q: "Hoe lang duurt een project?", a: "Een gerichte eerste versie duurt meestal een paar weken, geen maanden. De scope bepaalt het. In het eerste gesprek spreken we een roadmap af, zodat de planning op papier staat voordat het werk begint." },
      { q: "Ben ik eigenaar van de code?", a: "Ja. De code staat in jouw repository en je eigen hostingaccounts." },
      { q: "Wat is GEO?", a: "Generative engine optimization: je content makkelijk te vinden, te begrijpen en te citeren maken voor AI-assistenten in hun antwoorden, naast klassieke zoekmachine-optimalisatie." },
      { q: "Bouwen jullie mijn bestaande site opnieuw?", a: "Als dat zinvol is. Soms is het goedkoper om structuur, snelheid en content van wat je hebt te verbeteren. Na een korte audit vertellen we welke route past." },
    ],
    related: ["instagram-google-ads", "crm-automation"],
  },
  {
    slug: "ai-assistants",
    name: "AI-assistenten",
    short: "Chat- en telefoonassistenten die antwoorden uit je eigen content en overdragen aan je team.",
    title: "AI-chatbots en AI-telefonist laten maken | Elevare Hub AI",
    description: "Maatwerk AI-chatbots en telefoonassistenten, getraind op je eigen content en gekoppeld aan je agenda en CRM, met een nette overdracht aan je team.",
    definition: "Een AI-assistent beantwoordt je klanten voor je, schriftelijk via een chatbot of gesproken via een telefoonassistent, met je eigen documenten, prijzen en regels als bron. Elevare Hub AI bouwt ze op actuele foundation models, koppelt ze aan je agenda en CRM en ontwerpt het moment waarop een mens het overneemt, zodat de assistent routinevragen en boekingen afhandelt en bij de rest niet gaat gokken.",
    forWho: "Bedrijven die elke dag dezelfde vragen beantwoorden per telefoon, chat of DM en opdrachten mislopen als niemand kan opnemen.",
    deliverables: [
      { h: "Antwoorden gebaseerd op jouw content", p: "De assistent antwoordt vanuit jouw documenten en data en zegt het als hij het niet weet, in plaats van iets te verzinnen." },
      { h: "Chat of telefoon, in jouw stem", p: "Een chatbot op je site, in WhatsApp of Instagram-berichten, of een spraakagent die gesprekken aanneemt, afgestemd op hoe jij met klanten praat." },
      { h: "Gekoppeld aan je systemen", p: "Boekingen komen in je agenda en elk contact komt in je CRM, met een samenvatting erbij." },
      { h: "Duidelijke overdracht aan een mens", p: "Regels voor wat hij nooit alleen mag beslissen. Klachten en bijzondere verzoeken gaan met de volledige geschiedenis naar je team." },
      { h: "Gemeten en onderhouden", p: "Transcripten die je kunt lezen, fixes voor foute antwoorden en updates als je aanbod verandert." },
    ],
    faqs: [
      { q: "Weten bellers dat ze met een AI praten?", a: "We raden aan het te vertellen en bouwen de melding standaard in de openingszin in. Transparantieregels voor AI die met mensen praat worden in Europa strenger." },
      { q: "Verzint de assistent dingen?", a: "Elk taalmodel kan dat. We beperken het door alleen te antwoorden uit je goedgekeurde content, extra controles op risicovolle onderwerpen en het nalezen van echte gesprekken na livegang." },
      { q: "Welke talen spreekt hij?", a: "We bouwen in de talen die jouw klanten gebruiken. Nederlands, Duits, Engels en Turks zijn de talen waarin we het meest werken." },
    ],
    related: ["crm-automation", "instagram-google-ads"],
  },
  {
    slug: "crm-automation",
    name: "CRM & Automatisering",
    short: "Eén systeem voor leads, deals en opvolging, met de repetitieve stappen geautomatiseerd.",
    title: "CRM & bedrijfsprocessen automatiseren | Elevare Hub AI",
    description: "Maatwerk CRM en workflowautomatisering door Elevare Hub AI: pipeline-automatisering, leadscoring en koppelingen met HubSpot, Go High Level en Salesforce.",
    definition: "Een CRM- en automatiseringssysteem houdt elke lead, deal en klantcommunicatie op één plek en voert de repetitieve stappen voor je uit: opvolgberichten, taaktoewijzing, statuswijzigingen. Elevare Hub AI ontwerpt de pipeline rond hoe jij verkoopt, bouwt de automatiseringen en koppelt de tools die je al gebruikt.",
    forWho: "Teams waarvan de leads in inboxen, spreadsheets en chatberichten staan en waarvan de opvolging afhangt van iemand die eraan denkt.",
    deliverables: [
      { h: "Een CRM rond jouw verkoopproces", p: "Pipelinefases en velden die passen bij hoe je echt verkoopt, niet bij het idee van een sjabloon." },
      { h: "Pipeline-automatisering", p: "Dealfases, opvolgreeksen en taaktoewijzing die leads vooruit helpen zonder handmatig duwen." },
      { h: "Leadscoring en routering", p: "Prospects met hoge intentie worden gemarkeerd en op het juiste moment naar de juiste persoon gestuurd." },
      { h: "Koppelingen", p: "Verbindingen met HubSpot, Go High Level, Salesforce en maatwerkplatforms, gebouwd met tools zoals n8n." },
      { h: "Live rapportage", p: "Omzet-, conversie- en pipelineoverzichten die je altijd kunt openen." },
    ],
    faqs: [
      { q: "Moeten we van CRM wisselen?", a: "Niet per se. We kunnen voortbouwen op het CRM dat je gebruikt of het vervangen, wat voor jou goedkoper en veiliger is." },
      { q: "Wat automatiseren jullie als eerste?", a: "De stap die de meeste tijd kost en de minste beoordeling vraagt, meestal leadregistratie en de eerste opvolging. Die vinden we in de procesanalyse." },
    ],
    related: ["ai-assistants", "instagram-google-ads"],
  },
];

interface ProjectText { kind: string; note: string; title: string; description: string; paras: string[]; alts: string[] }

export const projectsNl: Record<string, ProjectText> = {
  gusto: {
    kind: "Bestelplatform voor een restaurant met meerdere vestigingen",
    note: "de hele dag, live, per vestiging",
    title: "Gusto: bestelplatform voor restaurants | Elevare Hub AI",
    description: "Case study: één Flutter-app voor klant, keuken, kassa, koerier en manager over meerdere vestigingen, gebouwd met Supabase en Mollie-betalingen.",
    paras: [
      "Eén burgerbestelling gaat langs een klant, een keuken, een kassa en een koerier, over meerdere vestigingen.",
      "Met Gusto bestelt een klant op de telefoon of bij de kiosk en komt het bonnetje meteen op het keukenscherm. De kassa rekent af, de koerier bezorgt en de manager ziet het terug in de cijfers van de dag. Niemand typt iets twee keer.",
      "We hebben het allemaal gebouwd, als één Flutter-app die verandert afhankelijk van wie inlogt.",
    ],
    alts: [
      "Gusto-aanraakkiosk met een burgermenu: Best Sellers, Burgers, Meals en Sides",
      "Menuscherm van de Gusto-app met burgers, wraps en friet",
      "Startscherm van de Gusto-app met een zomeractie en populaire items",
      "Gusto-financiedashboard van de manager met omzet, bestellingen, betaalmethoden en besteltypes",
    ],
  },
  fondo: {
    kind: "Bestellen voor een koffiemerk met meerdere vestigingen",
    note: "elke vestiging, één scherm",
    title: "Fondo: koffiekiosk en bestel-app | Elevare Hub AI",
    description: "Case study: een aanraakkiosk, een klant-app en een financieel overzicht voor een koffiemerk met meerdere vestigingen, in vier talen met prijzen van de server.",
    paras: [
      "Bestellen voor een koffiemerk met meerdere vestigingen: een aanraakkiosk in de winkel, een app in de zak van de klant en een financieel overzicht voor wie de zaak runt.",
      "Het spreekt Engels, Nederlands, Duits en Turks. Prijzen worden op de server berekend, nooit op de telefoon van de klant.",
      "Dezelfde basis als Gusto, met een eigen merk en menu.",
    ],
    alts: [
      "Fondo-kioskscherm met latte, cappuccino, flat white en espresso",
      "Menu van de Fondo-app met warme koffie en prijzen",
      "Startscherm van de Fondo-app met een favoriete latte",
      "Fondo-financiedashboard met omzet, bestellingen, gemiddelde bon en betaalmethoden",
    ],
  },
  "god-of-ink": {
    kind: "Beheerplatform voor een tattoostudio",
    note: "zelfde platform, tweede merk: Atelier Lume",
    title: "God of Ink: tattoostudio-platform | Elevare Hub AI",
    description: "Case study: studioplatform voor afspraken, aanbetalingen, toestemmingsformulieren, kas, voorraad en artiestinkomsten, met React, TypeScript en Supabase.",
    paras: [
      "Een tattoostudio draait op afspraken, aanbetalingen, toestemmingsformulieren en commissies van artiesten.",
      "Dit platform houdt alles op één plek, van de eerste consultatie tot de uitbetaling aan de artiest: agenda, tickets, kassabladen, voorraad en inkomstenrapporten.",
    ],
    alts: [
      "Agendaweergave van God of Ink met tattooafspraken over een maand",
      "Inkomstenrapport van een artiest in God of Ink",
      "Ticketlijst van God of Ink met klanten, afspraken en artiesten",
      "Atelier Lume-agenda, hetzelfde platform in een tweede merk",
    ],
  },
  "kolay-temizle": {
    kind: "App voor het aan huis ophalen en reinigen van tapijten en dekbedden",
    note: "nu live, in het Turks",
    title: "Kolay Temizle: reinigingsapp aan huis | Elevare Hub AI",
    description: "Case study: een Turkstalige app waarin klanten, reinigingsbedrijven, chauffeurs, beheerders en support werken vanuit één Flutter-codebase, op mobiel en web.",
    paras: [
      "Een tapijt of dekbed laten wassen betekent meestal dat je het ergens naartoe moet slepen. Kolay Temizle haalt het aan de deur op en brengt het schoon terug.",
      "Klanten, reinigingsbedrijven, chauffeurs, beheerders en support werken allemaal vanuit één Flutter-codebase, op mobiel en op het web.",
    ],
    alts: ["Startscherm van de Kolay Temizle-app in het Turks met prijzen voor tapijt, gordijn en dekbed"],
  },
  "momentum-coach": {
    kind: "Coachingplatform voor personal trainers",
    note: "wie heeft vandaag aandacht nodig",
    title: "Momentum Coach: trainersdashboard en app | Elevare Hub AI",
    description: "Case study: een dashboard dat laat zien welke leerlingen achterblijven, programmasjablonen en een leerling-app voor trainingen, voeding en voortgang.",
    paras: [
      "Een personal trainer met een volle klantenlijst kan niet alle leerlingen in het hoofd houden.",
      "Het dashboard laat zien wie achterblijft. Programma's worden één keer als sjabloon gebouwd en uitgedeeld. Leerlingen openen de app, zien de training en maaltijden van vandaag en loggen elke set.",
    ],
    alts: [
      "Trainersdashboard van Momentum Coach met leerlingen en de status risico of op schema",
      "Vandaag-scherm van de Momentum Coach-leerlingapp met training en voeding",
      "Trainingslogscherm van Momentum Coach met sets en herhalingen",
      "Voedingsscherm van Momentum Coach met maaltijden en macro's",
    ],
  },
};

export const alsoBuiltNl: Record<string, { desc: string; alt: string }> = {
  "Üreticiden": { desc: "Een marktplaats die boeren met kopers verbindt.", alt: "Homepage van marktplaats Üreticiden met de kop 'Üreticiden Evinize' boven akkerland" },
  "Önemek": { desc: "Website voor een fabrikant van hotelautomatisering.", alt: "Hero van de website van Önemek, fabrikant van hotelautomatisering, met een elektronicabord" },
  "LALALU Mama": { desc: "Een zwangerschapsbegeleider week voor week, in het Slowaaks.", alt: "Homepage van LALALU Mama, zwangerschapsbegeleider in het Slowaaks" },
  "Atelier Lume": { desc: "Merkwebsite voor een tattoo- en piercingstudio.", alt: "Website van tattoostudio Atelier Lume met een geanimeerde inktgolf" },
};

export const stepsNl = [
  { h: "Luisteren en leren", p: "We bestuderen hoe je dagelijkse bedrijfsvoering werkt en vinden de knelpunten. Jij vertelt je doelen, wij doen de analyse." },
  { h: "Het systeem ontwerpen", p: "We kiezen de architectuur en de stack en bouwen iets dat in de werkwijze van je team past in plaats van ertegenin te gaan." },
  { h: "Live en onderhoud", p: "We testen grondig, trainen je team en blijven monitoren. AI-systemen hebben bijstelling nodig naarmate je data groeit." },
];

export const homeFaqsNl: Faq[] = [
  { q: "Wat doet Elevare Hub AI?", a: "Elevare Hub AI is een kleine studio die Instagram- en Google-advertenties beheert en maatwerk apps, websites, AI-assistenten en CRM-automatisering bouwt voor bedrijven. We ontwerpen, bouwen en onderhouden ze." },
  { q: "Hoe lang duurt een gemiddelde AI-integratie?", a: "Dat hangt af van je bestaande systemen en de scope. Een integratie van begin tot eind duurt meestal één tot vier weken. In het eerste gesprek krijg je een schriftelijke roadmap." },
  { q: "Gebruiken jullie standaard AI-tools of bouwen jullie maatwerk?", a: "We gebruiken sterke foundation models, zoals die van OpenAI of open-source modellen, en bouwen daaromheen maatwerk pipelines, databases en beveiligde omgevingen voor jouw bedrijf." },
  { q: "Kunnen jullie AI koppelen aan onze bestaande, oudere systemen?", a: "Ja. Moderne AI-tools koppelen aan oudere systemen zonder de dagelijkse gang van zaken te verstoren is een kernonderdeel van ons werk." },
  { q: "Hoe ziet jullie proces eruit?", a: "Drie fasen: bestuderen hoe je werkt en de knelpunten vinden, de architectuur ontwerpen en de stack kiezen, en dan bouwen, testen, je team trainen en blijven afstellen." },
  { q: "Bieden jullie ondersteuning na livegang?", a: "Ja. AI-systemen moeten gemonitord en bijgesteld worden naarmate data groeit, dus we bieden doorlopende ondersteuning op abonnementsbasis." },
  { q: "Hoe beginnen we?", a: "Mail of bel ons en we plannen een gratis kennismakingsgesprek van 30 minuten om je doelen te begrijpen en te zien of we bij elkaar passen." },
];
