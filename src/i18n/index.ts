import { en } from "./en";
import { nl } from "./nl";

export type Lang = "en" | "nl";
export const LANGS: Lang[] = ["en", "nl"];
export const ui = { en, nl } as const;
export type UI = typeof en;

/** English section segment -> Dutch section segment. Slugs below the section stay identical. */
const SEG: Record<string, string> = {
  services: "diensten",
  work: "werk",
  about: "over-ons",
  contact: "contact",
  privacy: "privacy",
};
const SEG_REV = Object.fromEntries(Object.entries(SEG).map(([k, v]) => [v, k]));

/** Localise a canonical (English) path, e.g. /services/x/ -> /nl/diensten/x/ */
export function lp(lang: Lang, path: string): string {
  if (lang === "en") return path;
  const parts = path.split("/").filter(Boolean);
  if (parts.length === 0) return "/nl/";
  parts[0] = SEG[parts[0]] ?? parts[0];
  return `/nl/${parts.join("/")}/`;
}

/** Turn any localised path back into the canonical English path. */
export function canonicalPath(path: string): string {
  const parts = path.split("/").filter(Boolean);
  if (parts[0] === "nl") {
    parts.shift();
    if (parts.length) parts[0] = SEG_REV[parts[0]] ?? parts[0];
  }
  return parts.length ? `/${parts.join("/")}/` : "/";
}

export const langOf = (path: string): Lang => (path.startsWith("/nl/") || path === "/nl" ? "nl" : "en");
export const otherLang = (l: Lang): Lang => (l === "en" ? "nl" : "en");
