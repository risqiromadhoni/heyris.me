import type { defaultLang, ui } from "./ui";

export type TranslationKey = keyof (typeof ui)[typeof defaultLang];
