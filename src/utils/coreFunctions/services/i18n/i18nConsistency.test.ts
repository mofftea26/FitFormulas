import { describe, it, expect } from "vitest";
import { en } from "./locales/en";
import { fr } from "./locales/fr";
import { ar } from "./locales/ar";

const locales = { fr, ar };

describe("i18n Consistency with English base", () => {
  Object.entries(locales).forEach(([lang, translation]) => {
    describe(`Language: ${lang}`, () => {
      Object.keys(en).forEach((category) => {
        it(`should match '${category}' keys exactly`, () => {
          const base = (en as any)[category];
          const target = (translation as any)[category];

          expect(target).toBeTruthy();

          const missing: string[] = [];
          const extra: string[] = [];

          for (const key of Object.keys(base)) {
            if (!(key in target)) {
              missing.push(key);
            }
          }

          for (const key of Object.keys(target)) {
            if (!(key in base)) {
              extra.push(key);
            }
          }

          if (missing.length || extra.length) {
            let msg = `[${lang}] Key mismatch in '${category}':\n`;
            if (missing.length)
              msg += `❌ Missing keys:\n- ${missing.join("\n- ")}\n`;
            if (extra.length)
              msg += `⚠️ Extra keys:\n- ${extra.join("\n- ")}\n`;
            throw new Error(msg);
          }

          expect(missing.length).toBe(0);
          expect(extra.length).toBe(0);
        });
      });
    });
  });
});
