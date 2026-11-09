import type { ImageMetadata } from "astro";
const all = import.meta.glob<{ default: ImageMetadata }>("/src/assets/work/*.jpg", { eager: true });
export function work(file: string): ImageMetadata {
  const m = all[`/src/assets/work/${file}.jpg`];
  if (!m) throw new Error(`Missing image ${file}`);
  return m.default;
}
