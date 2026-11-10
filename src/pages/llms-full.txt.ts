import { SITE, services, projects, homeFaqs, steps } from "../data/site";
export function GET() {
  const body = `# ${SITE.name}: full content (updated ${SITE.updated})

${SITE.name} is a studio. ${SITE.tagline}
Developer: ${SITE.founder.name}, ${SITE.founder.role}. Contact page https://www.elevarehub.ai/contact/, phone ${SITE.phoneDisplay}.

## How we work
${steps.map((s, i) => `${i + 1}. ${s.h}: ${s.p}`).join("\n")}

## Services
${services.map((s) => `### ${s.name} (${SITE.url}/services/${s.slug}/)
${s.definition}
Who it is for: ${s.forWho}
What you get:
${s.deliverables.map((d) => `- ${d.h}: ${d.p}`).join("\n")}
${s.faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n")}
`).join("\n")}
## Work
${projects.map((p) => `### ${p.name}: ${p.kind} (${SITE.url}/work/${p.slug}/)
${p.paras.join("\n")}
Stack: ${p.stack}
`).join("\n")}
## FAQ
${homeFaqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n")}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
