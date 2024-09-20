import type { TranslationKey } from "./type";
import {
	type LANGUAGE,
	defaultLang,
	languages,
	showDefaultLang,
	ui,
} from "./ui";

export function getLangFromUrl(url: URL) {
	const [, lang] = url.pathname.split("/");
	if (lang in ui) return lang as keyof typeof ui;
	return defaultLang as LANGUAGE;
}

export function getPathWithoutLang(url: URL) {
	return url.pathname
		.split("/")
		.filter((p) => p)
		.filter((p) => !(p in languages))
		.join("/");
}

export function useTranslations(lang: keyof typeof ui = defaultLang) {
	return function t(key: TranslationKey) {
		return ui[lang][key] || ui[defaultLang][key];
	};
}

export function useTranslatedPath(lang: keyof typeof ui) {
	return function translatePath(path: string, l: string = lang) {
		const newPath = !path.startsWith("/") ? `/${path}` : path;
		return !showDefaultLang && l === defaultLang ? newPath : `/${l}${newPath}`;
	};
}

export const contentSlugLang = (
	slug: string,
	path: string,
	lang = defaultLang,
) => {
	const pureSlug = slug.startsWith(`${lang}/`)
		? slug.replace(`${lang}/`, "")
		: slug;
	const contentSlug =
		lang === defaultLang
			? `/${path}/${pureSlug}`
			: `/${lang}/${path}/${pureSlug}`;
	return contentSlug;
};
