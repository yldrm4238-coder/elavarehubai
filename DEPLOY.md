# Deploy checklist (Elevare Hub AI)

Nothing here has been done yet. Each step needs your decision or your accounts.

## 1. Before going live (blocking)
- [ ] Decide the contact route: form / calendar link / mailto (see "Open decisions").
- [ ] Business email on the domain (e.g. info@elevarehub.ai). Change `SITE.email` in `src/data/site.ts`; it flows to header, footer, schema, llms.txt.
- [ ] Legal details on the site: company name, KvK number, VAT (BTW) number, address. Ask your accountant what is required for your setup. Add them to `privacy.astro` and the footer.
- [ ] Review `src/pages/privacy.astro` against what you really collect (mailto only today, no cookies, no analytics).
- [ ] Analytics: pick a privacy-friendly tool (Plausible, Fathom, Umami). A cookieless one needs no consent banner. Meta Pixel / Google Ads tags DO need consent.

## 2. Deploy
```bash
cd /Users/yildirim/Projects/yildirim-portfolio
git init && git add -A && git commit -m "Elevare Hub AI site"
gh repo create elevare-hub-ai --private --source=. --push
```
Then in Vercel: Import the repo, framework preset Astro, build `bun run build`, output `dist`. `vercel.json` already holds headers, cache rules and the old-URL redirects.

## 3. Domain
- Add `elevarehub.ai` and `www.elevarehub.ai` in Vercel. Make `www` the primary (the code uses https://www.elevarehub.ai as canonical).
- Redirect the apex to www.
- Dutch site lives under `/nl/` (diensten, werk, over-ons, contact, privacy). Have a native Dutch speaker proofread `src/i18n/nl.ts` and `src/data/site.nl.ts` before launch.
- Check the live site: `/robots.txt`, `/sitemap.xml`, `/llms.txt`, `/services/ai-chatbots/` (should redirect to `/services/ai-assistants/`).

## 4. After going live
- [ ] Google Search Console: verify (file `public/googleab2984fd5b15a90a.html` is already there), submit `https://www.elevarehub.ai/sitemap.xml`.
- [ ] Bing Webmaster Tools: import from Search Console.
- [ ] Test the OG image: paste the URL into a LinkedIn / WhatsApp chat.
- [ ] Rich results test on the home page and a service page.
- [ ] Google Business Profile, Instagram bio link to the site.

## Open decisions (need you)
- Mail: hide the visible address and use a form, remove completely, or keep mailto.
- Are the portfolio projects client work or your own products? The copy must say which.
- Any real result, testimonial or ad-account example you can show (the ads service has no proof yet).
- Price ranges or "from" prices: yes or no.
- Site copy speaks as "we" (studio) in some places and "I built" in the project case studies, and the About page refers to the founder as "he". Pick one voice and confirm how you want to be described.
