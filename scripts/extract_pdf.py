"""Extract layout data + images from the portfolio PDF into src/data/pages.json and public/img."""
import fitz, math, json, collections, sys
PDF = sys.argv[1]
d = fitz.open(PDF)
saved = {}
def save(xref):
    if xref in saved: return saved[xref]
    e = d.extract_image(xref)
    name = f"x{xref}.{e['ext']}"
    open(f"public/img/{name}", "wb").write(e["image"])
    saved[xref] = name
    return name
r2 = lambda v: round(v, 2)
pages = []
for i, p in enumerate(d):
    pix = p.get_pixmap(dpi=20); bg = pix.pixel(2, pix.height // 2)
    drawings = p.get_drawings()
    # image outlines (4-line strokes) = clip polygons
    outlines = []
    for dr in drawings:
        if dr.get("color") is not None and dr.get("fill") is None and ''.join(it[0] for it in dr["items"]) == "llll":
            pts = [(it[1].x, it[1].y) for it in dr["items"]]
            outlines.append({"pts": [(r2(x), r2(y)) for x, y in pts], "stroke": "#%02x%02x%02x" % tuple(round(c*255) for c in dr["color"]), "w": r2(dr["width"])})
    images = []
    for im in p.get_image_info(xrefs=True):
        if not im["xref"]: continue
        a, b, c, dd, e, f = im["transform"]
        cx, cy = e + (a + c) / 2, f + (b + dd) / 2
        images.append({"src": save(im["xref"]), "cx": r2(cx), "cy": r2(cy), "w": r2(math.hypot(a, b)), "h": r2(math.hypot(c, dd)), "ang": r2(math.degrees(math.atan2(b, a)))})
    for im in images:  # match outline by nearest centre
        best = min(outlines, key=lambda o: (sum(x for x, _ in o["pts"]) / 4 - im["cx"]) ** 2 + (sum(y for _, y in o["pts"]) / 4 - im["cy"]) ** 2)
        im["clip"] = best["pts"]; im["stroke"] = best["stroke"]; im["sw"] = best["w"]
    tapes, arrows, glyphcolors = [], [], collections.Counter()
    for dr in drawings:
        k = ''.join(it[0] for it in dr["items"]); f = dr.get("fill"); r = dr["rect"]
        if f and dr.get("fill_opacity") not in (None, 1.0) and len(dr["items"]) == 4:
            tapes.append({"pts": [(r2(it[1].x), r2(it[1].y)) for it in dr["items"]], "fill": "#%02x%02x%02x" % tuple(round(c*255) for c in f), "op": r2(dr["fill_opacity"])})
        elif k == "cll":
            path = ""
            for it in dr["items"]:
                if it[0] == "c": path += f"M{r2(it[1].x)} {r2(it[1].y)}C{r2(it[2].x)} {r2(it[2].y)} {r2(it[3].x)} {r2(it[3].y)} {r2(it[4].x)} {r2(it[4].y)}"
                else: path += f"L{r2(it[2].x)} {r2(it[2].y)}"
            arrows.append({"d": path, "stroke": "#%02x%02x%02x" % tuple(round(c*255) for c in dr["color"]), "w": r2(dr["width"])})
        elif f and r.width < 300 and r.height < 300 and not (r.width > 800):
            glyphcolors["#%02x%02x%02x" % tuple(round(c*255) for c in f)] += 1
    # text lines (baseline positioned)
    lines = []
    for b in p.get_text("dict")["blocks"]:
        for l in b.get("lines", []):
            spans = l["spans"]; txt = "".join(s["text"] for s in spans).rstrip()
            if not txt: continue
            s0 = spans[0]; x0, y0, x1, y1 = l["bbox"]
            lines.append({"t": txt, "x": r2(s0["origin"][0]), "y": r2(s0["origin"][1]), "w": r2(x1 - x0), "size": r2(s0["size"]), "hand": "Reenie" in s0["font"]})
    links = [{"uri": lk["uri"], "rect": [r2(v) for v in lk["from"]]} for lk in p.get_links() if lk.get("uri")]
    pages.append({"bg": "#%02x%02x%02x" % bg[:3], "ink": glyphcolors.most_common(1)[0][0] if glyphcolors else "#000000",
                  "images": images, "tapes": tapes, "arrows": arrows, "lines": lines, "links": links})
json.dump({"w": r2(d[0].rect.width), "h": r2(d[0].rect.height), "pages": pages}, open("src/data/pages.json", "w"), indent=1)
for i, pg in enumerate(pages): print(i + 1, pg["bg"], pg["ink"], len(pg["images"]), len(pg["tapes"]), len(pg["arrows"]), len(pg["lines"]), len(pg["links"]))
