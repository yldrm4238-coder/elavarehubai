import { SITE } from "../data/site";
import { routes, abs, lp } from "../lib/routes";

export function GET() {
  const urls = routes.flatMap((en) => {
    const nl = lp("nl", en);
    const alt = (self: string) =>
      `<xhtml:link rel="alternate" hreflang="en" href="${abs(en)}"/><xhtml:link rel="alternate" hreflang="nl" href="${abs(nl)}"/><xhtml:link rel="alternate" hreflang="x-default" href="${abs(en)}"/>`;
    return [en, nl].map((p) => `<url><loc>${abs(p)}</loc><lastmod>${SITE.updated}</lastmod>${alt(p)}</url>`);
  });
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join("\n")}\n</urlset>\n`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
