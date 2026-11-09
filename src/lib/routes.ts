import { SITE, services, projects } from "../data/site";
import { lp } from "../i18n";

/** Every indexable page, as a canonical (English) path. Dutch paths come from lp(). */
export const routes: string[] = [
  "/", "/services/", ...services.map((s) => `/services/${s.slug}/`),
  "/work/", ...projects.map((p) => `/work/${p.slug}/`),
  "/about/", "/contact/", "/privacy/",
];
export const abs = (p: string) => `${SITE.url}${p}`;
export { lp };
