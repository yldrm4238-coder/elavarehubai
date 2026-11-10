export const SITE = {
  name: "Elevare Hub AI",
  legalish: "Elevare Hub",
  url: "https://www.elevarehub.ai",
  tagline: "Ads, apps and AI systems that do real work.",
  email: "yildirimcelik1@gmail.com",
  phone: "+31657138308",
  phoneDisplay: "+31 6 57 13 83 08",
  instagram: "https://www.instagram.com/elevarehub.ai",
  founder: { name: "Yıldırım Çelik", role: "Developer" },
  updated: "2026-11-09",
};

export interface Faq { q: string; a: string }

export interface Service {
  slug: string; name: string; short: string;
  title: string; description: string;
  definition: string; forWho: string;
  deliverables: { h: string; p: string }[];
  faqs: Faq[];
  related: string[];
}

export const services: Service[] = [
  {
    slug: "instagram-google-ads",
    name: "Instagram & Google Ads",
    short: "We run your Meta and Google campaigns, read the data properly and move budget to what works.",
    title: "Instagram & Google Ads Management | Elevare Hub AI",
    description: "Instagram, Facebook and Google Ads management for small businesses: clean tracking, campaign setup, weekly optimisation and plain reporting. Elevare Hub AI.",
    definition: "Instagram and Google Ads management means planning, launching and improving paid campaigns on Meta (Instagram and Facebook) and Google, so that ad spend brings enquiries, bookings or orders instead of just clicks. Elevare Hub AI sets up the tracking first, builds the campaigns, reviews them on a regular rhythm and uses AI tools to read the data faster, while a person makes every decision about your budget.",
    forWho: "Restaurants, studios, local services and small brands that already advertise or want to start, and who need someone to run the accounts and explain in plain words what the money is doing.",
    deliverables: [
      { h: "Tracking you can trust", p: "Pixels, conversions and events set up and tested before any budget is spent, because every later decision depends on them." },
      { h: "Campaigns built for the goal", p: "Instagram and Facebook campaigns for reach, leads or orders, and Google Search campaigns for people already looking for what you sell." },
      { h: "Creative and audience testing", p: "We test hooks, formats and audiences against each other and keep what carries the result." },
      { h: "Regular optimisation", p: "Budget moves from weak campaigns to strong ones on a fixed rhythm, with a written reason for each change." },
      { h: "Reporting you can read", p: "One clear view of spend, leads and cost per result, without spreadsheets or jargon." },
    ],
    faqs: [
      { q: "Can you promise a return on ad spend?", a: "No, and be careful with anyone who does. We promise clean data, faster decisions and a written reason for every change." },
      { q: "Which platforms do you manage?", a: "Meta Ads, which covers Instagram and Facebook, and Google Ads, including Search. We agree in the first call which mix fits your goal." },
      { q: "Do I keep control of my ad accounts?", a: "Yes. The accounts stay in your name and we work inside them with the access you give us, so you can look at everything at any time." },
      { q: "Where does AI come in?", a: "In the analysis: finding wasted spend and winning creative faster than reading reports by hand. Decisions about budget stay with a person." },
    ],
    related: ["apps-websites", "crm-automation"],
  },
  {
    slug: "apps-websites",
    name: "Apps & Websites",
    short: "Web and mobile apps and fast websites, built end to end and made to be found.",
    title: "Custom Apps & Websites | Elevare Hub AI",
    description: "Custom web and mobile apps and fast, search-ready websites built end to end by Elevare Hub AI: Flutter, React, Supabase, payments and live dashboards.",
    definition: "Custom apps and websites are built around how your business actually works, instead of bending your process to fit a template. Elevare Hub AI builds web and mobile apps end to end, the screens people use and the system behind them, and builds fast websites with clean structure, schema markup and answer-first content so that search engines and AI assistants can find and quote them.",
    forWho: "Companies whose process does not fit off-the-shelf tools, such as multi-branch ordering, studio management, booking and coaching platforms, and businesses whose website looks fine but does not bring enquiries.",
    deliverables: [
      { h: "One codebase, several roles", p: "Customer, staff, courier and manager views from the same app that changes depending on who signs in, as in our Gusto and Kolay Temizle projects." },
      { h: "A real back end", p: "Supabase and PostgreSQL with row-level access rules, so each person only sees what they should." },
      { h: "Payments and live numbers", p: "Payment providers such as Mollie, and dashboards that show the day as it happens." },
      { h: "Websites that get found", p: "Clean HTML, one clear H1 per page, canonical URLs, sitemap, fast loading and structured data, so search engines and assistants such as ChatGPT, Claude and Perplexity can read and cite you." },
      { h: "Hand-over you can use", p: "Documented code in your repository, deployment you control, and optional support after launch." },
    ],
    faqs: [
      { q: "How long does a project take?", a: "A focused first version usually takes a few weeks, not months. The scope decides. We agree a roadmap in the first call so the timeline is written down before work starts." },
      { q: "Do I own the code?", a: "Yes. The code lives in your repository and your hosting accounts." },
      { q: "What is GEO?", a: "Generative engine optimization: making your content easy for AI assistants to find, understand and quote in their answers, alongside classic search optimization." },
      { q: "Will you rebuild my existing site?", a: "If it makes sense. Sometimes fixing structure, speed and content on what you have is cheaper. We tell you which after a short audit." },
    ],
    related: ["instagram-google-ads", "crm-automation"],
  },
  {
    slug: "ai-assistants",
    name: "AI Assistants",
    short: "Chat and phone assistants that answer from your own content and hand over to your team.",
    title: "AI Chatbots & Call Assistants | Elevare Hub AI",
    description: "Custom AI chatbots and phone assistants trained on your own content and wired into your calendar and CRM, with a clean hand-over to your team. Elevare Hub AI.",
    definition: "An AI assistant answers your customers for you, in writing through a chatbot or in speech through a call assistant, using your own documents, prices and policies as its source. Elevare Hub AI builds them on current foundation models, connects them to your calendar and CRM, and designs the point where a person takes over, so the assistant handles routine questions and bookings and never guesses on the rest.",
    forWho: "Businesses that answer the same questions every day by phone, chat or DM, and lose jobs when nobody can pick up.",
    deliverables: [
      { h: "Answers grounded in your content", p: "The assistant answers from your documents and data, and says when it does not know instead of inventing an answer." },
      { h: "Chat or phone, in your voice", p: "A chatbot on your site, in WhatsApp or Instagram messages, or a voice agent that answers calls, tuned to how you actually speak to customers." },
      { h: "Connected to your systems", p: "Bookings land in your calendar and every contact lands in your CRM with a summary attached." },
      { h: "Clear hand-off to a person", p: "Rules for what it must never decide alone. Complaints and special requests go to your team with the full history." },
      { h: "Measured and maintained", p: "Transcripts you can read, fixes for wrong answers, and updates when your offer changes." },
    ],
    faqs: [
      { q: "Will callers know they are talking to an AI?", a: "We recommend telling them, and we build the disclosure into the opening line by default. Transparency rules for AI that talks to people are tightening in Europe." },
      { q: "Does the assistant make things up?", a: "Any language model can. We reduce it by answering only from your approved content, adding checks on risky topics, and reviewing real conversations after launch." },
      { q: "Which languages does it speak?", a: "We build in the languages your customers use. Dutch, German, English and Turkish are the ones we work in most." },
    ],
    related: ["crm-automation", "instagram-google-ads"],
  },
  {
    slug: "crm-automation",
    name: "CRM & Automation",
    short: "One system for leads, deals and follow-ups, with the repetitive steps automated.",
    title: "CRM & Business Automation Systems | Elevare Hub AI",
    description: "Custom CRM and workflow automation by Elevare Hub AI: pipeline automation, lead scoring, HubSpot, Go High Level and Salesforce integrations, live reports.",
    definition: "A CRM and automation system keeps every lead, deal and customer conversation in one place and runs the repetitive steps for you: follow-up messages, task assignment, status changes. Elevare Hub AI designs the pipeline around how you sell, builds the automations and connects the tools you already use.",
    forWho: "Teams whose leads sit in inboxes, spreadsheets and chat threads, and whose follow-ups depend on someone remembering.",
    deliverables: [
      { h: "A CRM built around your sales process", p: "Pipeline stages and data fields that match how you really sell, not a template's idea of it." },
      { h: "Pipeline automation", p: "Deal stages, follow-up sequences and task assignment that move leads forward without manual nudging." },
      { h: "Lead scoring and routing", p: "High-intent prospects flagged and sent to the right person at the right time." },
      { h: "Integrations", p: "Connections to HubSpot, Go High Level, Salesforce and custom platforms, built with tools like n8n." },
      { h: "Live reporting", p: "Revenue, conversion and pipeline views you can open any time." },
    ],
    faqs: [
      { q: "Do we have to switch CRM?", a: "Not necessarily. We can build on the CRM you use or replace it, whichever is cheaper and safer for you." },
      { q: "What do you automate first?", a: "The step that costs the most time and the least judgment, usually lead capture and first follow-up. We find it in the operations audit." },
    ],
    related: ["ai-assistants", "instagram-google-ads"],
  },
];

export interface Shot { file: string; alt: string; style: string }
export interface Project {
  slug: string; name: string; kind: string;
  bg: string; ink: string; note: string; stack: string;
  title: string; description: string;
  paras: string[];
  shots: Shot[];
  live?: string;
}

export const projects: Project[] = [
  {
    slug: "gusto", name: "Gusto", kind: "Multi-branch restaurant ordering platform",
    bg: "#b64b03", ink: "#fff1e0", note: "the whole day, live, per branch", stack: "Flutter, Riverpod, Supabase, PostgreSQL, Mollie payments",
    title: "Gusto: Burger Ordering Platform | Elevare Hub AI",
    description: "Case study: one Flutter app for customers, kitchen, cashier, courier and manager across several branches, built with Supabase and Mollie payments.",
    paras: [
      "One burger order passes through a customer, a kitchen, a cashier and a courier, across several branches.",
      "With Gusto, a customer orders on a phone or at the kiosk and the ticket lands on the kitchen screen right away. The cashier settles it, the courier delivers it, and the manager sees it in the day's numbers. Nobody types anything twice.",
      "We built all of it, as one Flutter app that changes depending on who signs in.",
    ],
    shots: [
      { file: "gusto-kiosk", alt: "Gusto touch kiosk showing a burger menu with Best Sellers, Burgers, Meals and Sides", style: "left:34%;top:2%;width:26%;--r:-2.2deg" },
      { file: "gusto-app-menu", alt: "Gusto mobile app menu screen with burgers, wraps and fries", style: "left:60%;top:0%;width:19%;--r:2.4deg" },
      { file: "gusto-app-home", alt: "Gusto mobile home screen with a summer deal banner and popular items", style: "left:79%;top:14%;width:18%;--r:-2deg" },
      { file: "gusto-finance", alt: "Gusto manager finance dashboard with revenue, orders, payment methods and order types", style: "left:22%;top:58%;width:50%;--r:1.3deg" },
    ],
  },
  {
    slug: "fondo", name: "Fondo", kind: "Ordering for a multi-branch coffee brand",
    bg: "#252b1f", ink: "#f4efe2", note: "every branch, one screen", stack: "Flutter, Riverpod, Supabase, PostgreSQL, Mollie payments",
    title: "Fondo: Coffee Ordering Kiosk & App | Elevare Hub AI",
    description: "Case study: a touch kiosk, a customer app and a finance view for a multi-branch coffee brand, in English, Dutch, German and Turkish with server-side pricing.",
    paras: [
      "Ordering for a multi-branch coffee brand: a touch kiosk in the shop, an app in the customer's pocket, and a finance view for whoever runs the place.",
      "It speaks English, Dutch, German and Turkish. Prices are worked out on the server, never on the customer's phone.",
      "Same foundations as Gusto, with its own brand and menu.",
    ],
    shots: [
      { file: "fondo-kiosk", alt: "Fondo coffee kiosk screen listing lattes, cappuccino, flat white and espresso", style: "left:4%;top:4%;width:27%;--r:1.8deg" },
      { file: "fondo-app-menu", alt: "Fondo mobile app menu with hot coffee options and prices", style: "left:32%;top:2%;width:18%;--r:-2.2deg" },
      { file: "fondo-app-home", alt: "Fondo mobile app home screen with a most-loved latte", style: "left:46%;top:26%;width:17%;--r:2deg" },
      { file: "fondo-finance", alt: "Fondo finance dashboard showing revenue, orders, average basket and payment methods", style: "left:4%;top:60%;width:50%;--r:-1.2deg" },
    ],
  },
  {
    slug: "god-of-ink", name: "God of Ink", kind: "Tattoo studio management platform",
    bg: "#d6981d", ink: "#1b1a17", note: "same platform, second brand: Atelier Lume", stack: "React, TypeScript, Vite, Tailwind CSS, Supabase",
    title: "God of Ink: Tattoo Studio Platform | Elevare Hub AI",
    description: "Case study: a studio platform for appointments, deposits, consent forms, cash sheets, stock and artist earnings, built with React, TypeScript and Supabase.",
    paras: [
      "A tattoo studio runs on appointments, deposits, consent forms and artist commissions.",
      "This platform keeps it all in one place, from the first consultation to the artist's payout: calendar, tickets, cash sheets, stock and earnings reports.",
    ],
    shots: [
      { file: "godofink-calendar", alt: "God of Ink calendar view of tattoo appointments across a month", style: "left:36%;top:3%;width:43%;--r:-1.4deg" },
      { file: "godofink-earnings", alt: "God of Ink earnings report for an artist", style: "left:77%;top:7%;width:24%;--r:2.6deg" },
      { file: "godofink-tickets", alt: "God of Ink tickets table with customers, appointments and artists", style: "left:20%;top:60%;width:34%;--r:1.3deg" },
      { file: "atelierlume-calendar", alt: "Atelier Lume calendar, the same platform in a second brand", style: "left:54%;top:43%;width:43%;--r:1.5deg" },
    ],
  },
  {
    slug: "kolay-temizle", name: "Kolay Temizle", kind: "Doorstep carpet and duvet cleaning app",
    bg: "#106a46", ink: "#f2f7ee", note: "live right now, in Turkish", stack: "Flutter, Riverpod, Supabase, PostgreSQL",
    title: "Kolay Temizle: Doorstep Cleaning App | Elevare Hub AI",
    description: "Case study: a Turkish-language app where customers, cleaning companies, drivers, admins and support work from one Flutter codebase on mobile and web.",
    paras: [
      "Getting a carpet or a duvet washed usually means carrying it somewhere. Kolay Temizle picks it up at the door and brings it back clean.",
      "Customers, cleaning companies, drivers, admins and support staff all work from one Flutter codebase, on mobile and on the web.",
    ],
    shots: [{ file: "kolaytemizle-app", alt: "Kolay Temizle app home screen in Turkish with carpet, curtain and duvet prices", style: "left:66%;top:2%;width:30%;--r:2.4deg" }],
    live: "https://kolaytemizlemeapp.vercel.app/",
  },
  {
    slug: "momentum-coach", name: "Momentum Coach", kind: "Coaching platform for personal trainers",
    bg: "#bce3c5", ink: "#14231a", note: "who needs attention today", stack: "React, TypeScript, Vite, Tailwind CSS, Supabase",
    title: "Momentum Coach: Trainer Dashboard & App | Elevare Hub AI",
    description: "Case study: a dashboard that flags which students are slipping, program templates, and a student app for workouts, nutrition and progress.",
    paras: [
      "A personal trainer with a full roster can't keep every student in their head.",
      "The dashboard flags who is slipping. Programs are built once as templates and handed out. Students open the app, see today's workout and meals, and log each set.",
    ],
    shots: [
      { file: "momentum-dashboard", alt: "Momentum Coach trainer dashboard listing students with at-risk and on-track status", style: "left:54%;top:3%;width:44%;--r:1.4deg" },
      { file: "momentum-today", alt: "Momentum Coach student app today screen with workout and nutrition summary", style: "left:36%;top:46%;width:16%;--r:-2deg" },
      { file: "momentum-training", alt: "Momentum Coach workout logging screen with sets and reps", style: "left:53%;top:48%;width:16%;--r:1.5deg" },
      { file: "momentum-nutrition", alt: "Momentum Coach nutrition screen with meals and macros", style: "left:70%;top:46%;width:16%;--r:-1.4deg" },
    ],
  },
];

export const alsoBuilt = [
  { name: "Üreticiden", desc: "A marketplace connecting farmers with buyers.", href: "https://www.ureticiden.tr/", file: "site-ureticiden", alt: "Üreticiden marketplace homepage with the headline 'Üreticiden Evinize' over farmland" },
  { name: "Önemek", desc: "Website for a hotel automation manufacturer.", href: "https://onemekdemo.vercel.app/", file: "site-onemek", alt: "Önemek hotel automation website hero with an electronics board" },
  { name: "LALALU Mama", desc: "A week-by-week pregnancy companion, in Slovak.", href: "https://lalalu-mama-journey.vercel.app/", file: "site-lalalu", alt: "LALALU Mama pregnancy companion homepage in Slovak" },
  { name: "Atelier Lume", desc: "Brand website for a tattoo and piercing studio.", href: "https://atelierwebsitetest.vercel.app/", file: "site-atelierlume", alt: "Atelier Lume tattoo studio website with an animated ink wave" },
];

export const steps = [
  { h: "Listen and learn", p: "We study how your day-to-day business runs and find the bottlenecks. You tell us your goals; we do the analysis." },
  { h: "Design the system", p: "We pick the architecture and the stack, and build something that fits into your team's workflow instead of fighting it." },
  { h: "Launch and look after it", p: "We test it hard, train your team, and keep monitoring. AI systems need tuning as your data grows." },
];

export const stack = ["Python", "OpenAI and open-source LLMs", "Claude", "n8n", "React", "TypeScript", "Flutter", "Node.js", "Supabase", "PostgreSQL", "Mollie", "Vercel", "GitHub"];

export const homeFaqs: Faq[] = [
  { q: "What does Elevare Hub AI do?", a: "Elevare Hub AI is a small studio that runs Instagram and Google ads and builds custom apps, websites, AI assistants and CRM automation systems for businesses. We design, build and maintain them." },
  { q: "How long does a typical AI integration take?", a: "It depends on your existing systems and the scope. An end-to-end integration usually takes one to four weeks. You get a written roadmap in the first call." },
  { q: "Do you use generic AI tools or build custom systems?", a: "We use strong foundation models, such as OpenAI's or open-source ones, and build custom pipelines, databases and secure environments around them for your operation." },
  { q: "Can you connect AI to our existing legacy systems?", a: "Yes. Connecting modern AI tools to older systems without disrupting daily operations is a core part of our work." },
  { q: "What does your process look like?", a: "Three phases: study how you work and find the bottlenecks, design the architecture and pick the stack, then build, test, train your team and keep tuning." },
  { q: "Do you offer support after launch?", a: "Yes. AI systems need monitoring and adjustment as data grows, so we offer ongoing support on a retainer." },
  { q: "How do we start?", a: "Email or call us and we book a free 30-minute discovery call to understand your goals and see whether we are the right fit." },
];
