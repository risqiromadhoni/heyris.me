import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";

export async function getAllExperiences() {
	return await getCollection("experience", () => true);
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
