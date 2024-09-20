export enum LANGUAGE {
	ENGLISH = "en",
	INDONESIA = "id",
}

export const languages = {
	[LANGUAGE.ENGLISH]: "English",
	[LANGUAGE.INDONESIA]: "Indonesia",
} as const;

export const defaultLang: LANGUAGE | `${LANGUAGE}` = LANGUAGE.ENGLISH;
export const showDefaultLang = false;
export const ui = {
	en: {
		"social.findMe": "Find me on",
		"menu.about": "About",
		"menu.post": "Blog",
		"menu.project": "Project",
		"menu.resource": "Resource",
	},
	id: {
		"social.findMe": "Temukan saya di",
		"menu.about": "Tentang",
		"menu.post": "Blog",
		"menu.project": "Proyek",
		"menu.resource": "Sumber",
	},
} as const;
