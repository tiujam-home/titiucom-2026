// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Astro's HTML compression drops the line break between text and an inline tag that
  // starts on the next line ("kuului\n<strong>…" became "kuului<strong>…"), gluing words together.
  compressHTML: false,
});
