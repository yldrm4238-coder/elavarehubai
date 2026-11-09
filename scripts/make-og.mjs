import sharp from "sharp";
const logo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#b64b03"/><path fill="#fff1e0" d="M16 14h32v9H27v6h17v8H27v6h21v9H16z"/></svg>`;
await sharp(Buffer.from(logo), { density: 600 }).resize(512, 512).png().toFile("public/logo.png");
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#fbfaf7"/>
<rect x="64" y="64" width="56" height="56" rx="10" fill="#b64b03"/><path fill="#fff1e0" transform="translate(64 64) scale(.875)" d="M16 14h32v9H27v6h17v8H27v6h21v9H16z"/>
<text x="140" y="104" font-family="Helvetica Neue, Arial" font-weight="800" font-size="34" fill="#1b1a17">Elevare Hub <tspan fill="#b64b03">AI</tspan></text>
<text x="64" y="300" font-family="Helvetica Neue, Arial" font-weight="800" font-size="104" letter-spacing="-4" fill="#1b1a17">We build the AI</text>
<text x="64" y="408" font-family="Helvetica Neue, Arial" font-weight="800" font-size="104" letter-spacing="-4" fill="#1b1a17">and software your</text>
<text x="64" y="516" font-family="Helvetica Neue, Arial" font-weight="800" font-size="104" letter-spacing="-4" fill="#1b1a17">business runs on.</text>
<text x="64" y="586" font-family="Helvetica Neue, Arial" font-size="28" fill="#4a4741">AI call assistants · chatbots · custom apps · CRM · websites</text></svg>`;
await sharp(Buffer.from(og)).png().toFile("public/og.png");
