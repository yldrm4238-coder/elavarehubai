import { services as svcEn, projects as projEn, alsoBuilt as alsoEn, steps as stepsEn, stack, homeFaqs as faqEn } from "./site";
import { servicesNl, projectsNl, alsoBuiltNl, stepsNl, homeFaqsNl } from "./site.nl";
import type { Lang } from "../i18n";

export function content(lang: Lang) {
  if (lang === "en") return { services: svcEn, projects: projEn, alsoBuilt: alsoEn, steps: stepsEn, stack, homeFaqs: faqEn };
  return {
    services: servicesNl,
    projects: projEn.map((p) => {
      const t = projectsNl[p.slug];
      return { ...p, kind: t.kind, note: t.note, title: t.title, description: t.description, paras: t.paras,
        shots: p.shots.map((s, i) => ({ ...s, alt: t.alts[i] ?? s.alt })) };
    }),
    alsoBuilt: alsoEn.map((a) => ({ ...a, ...alsoBuiltNl[a.name] })),
    steps: stepsNl,
    stack,
    homeFaqs: homeFaqsNl,
  };
}
