import { SITE, services, projects, alsoBuilt } from "../data/site";
import { servicesNl } from "../data/site.nl";
export function GET() {
  const body = `# ${SITE.name}

> ${SITE.name} is a studio that runs Instagram and Google ads and builds custom web and mobile apps, websites, AI assistants and CRM automation systems. Founder: ${SITE.founder.name}. Contact: https://www.elevarehub.ai/contact/

## Services
${services.map((s) => `- [${s.name}](${SITE.url}/services/${s.slug}/): ${s.short}`).join("\n")}

## Work
${projects.map((p) => `- [${p.name}](${SITE.url}/work/${p.slug}/): ${p.kind}. Built with ${p.stack}.`).join("\n")}

## Nederlands (Dutch version)
- [Home](${SITE.url}/nl/): Nederlandse versie van de site.
${servicesNl.map((s) => `- [${s.name}](${SITE.url}/nl/diensten/${s.slug}/): ${s.short}`).join("\n")}
- [Werk](${SITE.url}/nl/werk/): Case studies.
- [Contact](${SITE.url}/nl/contact/): E-mail, telefoon en Instagram.

## Optional
${alsoBuilt.map((a) => `- [${a.name}](${a.href}): ${a.desc}`).join("\n")}
- [About](${SITE.url}/about/): Who is behind ${SITE.name}.
- [Contact](${SITE.url}/contact/): Email, phone and Instagram.
- [Full text](${SITE.url}/llms-full.txt): All page content in one file.
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
