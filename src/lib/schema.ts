import { SITE, type Faq, type Service, type Project } from "../data/site";
import { lp, ui, type Lang } from "../i18n";

const U = SITE.url;
export const ids = { org: `${U}/#organization`, site: `${U}/#website`, founder: `${U}/about/#founder` };

export const organization = (lang: Lang = "en") => ({
  "@type": ["Organization", "ProfessionalService"],
  "@id": ids.org,
  name: SITE.name,
  alternateName: ["Elevare Hub", "ElevareHub AI"],
  url: `${U}/`,
  logo: { "@type": "ImageObject", url: `${U}/logo.png`, width: 512, height: 512 },
  image: `${U}/og.png`,
  description: ui[lang].orgDescription,
  telephone: SITE.phone,
  founder: { "@id": ids.founder },
  areaServed: [{ "@type": "Country", name: "Netherlands" }, { "@type": "Place", name: "Europe" }, { "@type": "Place", name: "Turkey" }],
  availableLanguage: ["en", "nl"],
  knowsAbout: ["Instagram ads", "Google Ads", "Custom app development", "Website development", "AI chatbots", "AI call assistants", "CRM automation", "Generative engine optimization"],
  sameAs: [SITE.instagram],
});

export const website = () => ({
  "@type": "WebSite", "@id": ids.site, url: `${U}/`, name: SITE.name, inLanguage: ["en", "nl"], publisher: { "@id": ids.org },
});

export const founder = (lang: Lang = "en") => ({
  "@type": "Person", "@id": ids.founder, name: SITE.founder.name, jobTitle: SITE.founder.role,
  url: `${U}${lp(lang, "/about/")}`, worksFor: { "@id": ids.org },
});

export const faqPage = (faqs: Faq[]) => ({
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});

export const breadcrumbs = (trail: [string, string][]) => ({
  "@type": "BreadcrumbList",
  itemListElement: trail.map(([name, path], i) => ({ "@type": "ListItem", position: i + 1, name, item: `${U}${path}` })),
});

export const serviceSchema = (s: Service, lang: Lang = "en") => ({
  "@type": "Service", "@id": `${U}${lp(lang, `/services/${s.slug}/`)}#service`, name: s.name, serviceType: s.name, inLanguage: lang,
  description: s.definition, url: `${U}${lp(lang, `/services/${s.slug}/`)}`, provider: { "@id": ids.org },
  areaServed: [{ "@type": "Place", name: "Europe" }],
  hasOfferCatalog: { "@type": "OfferCatalog", name: s.name, itemListElement: s.deliverables.map((d) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: d.h, description: d.p } })) },
});

export const projectSchema = (p: Project, lang: Lang = "en") => ({
  "@type": "CreativeWork", "@id": `${U}${lp(lang, `/work/${p.slug}/`)}#project`, name: p.name, headline: p.kind, inLanguage: lang,
  description: p.paras.join(" "), url: `${U}${lp(lang, `/work/${p.slug}/`)}`, creator: { "@id": ids.org },
  dateModified: SITE.updated, keywords: p.stack, ...(p.live ? { sameAs: [p.live] } : {}),
});

export const graph = (...nodes: object[]) => ({ "@context": "https://schema.org", "@graph": nodes });
