import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";
import { contentSlugLang, defaultLang } from "@/i18n";

export async function getAllExperiences(lang = defaultLang) {
	const experiences = await getCollection("experience", (experience) =>
		experience.id.startsWith(`${lang}/`),
	);
	return experiences.map((exp) => ({
		...exp,
		slug: contentSlugLang(exp.slug, "posts", lang),
	})) as CollectionEntry<"experience">[];
}

export function getExperienceSortStartDate(
	experience: CollectionEntry<"experience">,
) {
	return experience.data.endAt ? new Date(experience.data.endAt) : new Date();
}

export function sortExperienceByDate(
	experiences: CollectionEntry<"experience">[],
) {
	return experiences.sort((a, b) => {
		const aDate = getExperienceSortStartDate(a).valueOf();
		const bDate = getExperienceSortStartDate(b).valueOf();
		return bDate - aDate;
	});
}
