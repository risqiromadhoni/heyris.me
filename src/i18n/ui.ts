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
		"post.toc": "Table of Contents",
		"common.viewAll": "View all",
		"page.about.title": "About Me",
		"page.about.description":
			"I am a software engineer with experience ±7 who loves to learn and share knowledge.",
		"page.about.aboutMe":
			"Hi, I’m a software engineer with over 7 years of experience. Loving gardening in hydroponics 🪴 and aquaponics 🪷 when I'm not coding 🧑🏻‍💻.",
	},
	id: {
		"social.findMe": "Temukan saya di",
		"menu.about": "Tentang",
		"menu.post": "Blog",
		"menu.project": "Proyek",
		"menu.resource": "Sumber",
		"post.toc": "Daftar Isi",
		"common.viewAll": "Lihat semua",
		"page.about.title": "Tentang Saya",
		"page.about.description":
			"Saya adalah seorang insinyur perangkat lunak dengan pengalaman ±7 yang senang belajar dan berbagi pengetahuan.",
		"page.about.aboutMe":
			"Hai, saya seorang insinyur perangkat lunak dengan pengalaman lebih dari 7 tahun. Menyukai berkebun dalam hidroponik 🪴 dan akuaponik 🪷 ketika saya tidak sedang melakukan coding 🧑🏻‍💻.",
	},
} as const;
