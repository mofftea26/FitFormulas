import { en } from "./locales/en";
import { fr } from "./locales/fr";
import { ar } from "./locales/ar";

export type LanguageCode = "en" | "fr" | "ar";

const translations = {
  en,
  fr,
  ar,
};

export function t(
  category: keyof typeof en,
  key: string,
  lang: LanguageCode = "en"
): string {
  return translations[lang][category]?.[key] ?? key;
}
