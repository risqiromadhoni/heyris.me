import { defineCollection, z } from "astro:content";

function removeDupsAndLowerCase(array: string[]) {
	if (!array.length) return array;
	const lowercaseItems = array.map((str) => str.toLowerCase());
	const distinctItems = new Set(lowercaseItems);
	return Array.from(distinctItems);
}

const post = defineCollection({
	schema: ({ image }) =>
		z.object({
			coverImage: z
				.object({
					alt: z.string(),
					src: image(),
					url: z.string().optional(),
				})
				.optional(),
			description: z.string().min(50).max(160),
			draft: z.boolean().default(false),
			ogImage: z.string().optional(),
			publishDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
			title: z.string().max(60),
			updatedDate: z
				.string()
				.optional()
				.transform((str) => (str ? new Date(str) : undefined)),
		}),
	type: "content",
});

const experience = defineCollection({
	schema: ({ image }) =>
		z.object({
			company: z.object({
				logo: image(),
				coverImage: image().optional(),
				name: z.string(),
				location: z.string(),
				url: z.string().url(),
			}),
			contract: z.string({
				description:
					"Contract type of the job e.g. Full-time, Part-time, Contract",
			}),
			category: z.string({
				description: "Working category e.g. Remote, On-site",
			}),
			startAt: z.string().transform((str) => new Date(str)),
			endAt: z
				.string()
				.optional()
				.transform((str) => (str ? new Date(str) : undefined)),
			description: z.string().min(50).max(300),
		}),
	type: "content",
});

export const collections = { post, experience };
