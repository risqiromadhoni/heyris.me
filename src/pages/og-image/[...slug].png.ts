import type { CollectionEntry } from "astro:content";
import RobotoMonoBold from "@/assets/roboto-mono-700.ttf";
import RobotoMono from "@/assets/roboto-mono-regular.ttf";
import { getAllPosts } from "@/data/post";
import { siteConfig } from "@/site.config";
import { getFormattedDate } from "@/utils/date";
import { Resvg } from "@resvg/resvg-js";
import type { APIContext, InferGetStaticPropsType } from "astro";
import satori, { type SatoriOptions } from "satori";
import { html } from "satori-html";

const ogOptions: SatoriOptions = {
	debug: import.meta.env.DEV,
	fonts: [
		{
			data: Buffer.from(RobotoMono),
			name: "Roboto Mono",
			style: "normal",
			weight: 400,
		},
		{
			data: Buffer.from(RobotoMonoBold),
			name: "Roboto Mono",
			style: "normal",
			weight: 700,
		},
	],
	height: 630,
	width: 1200,
};

const markup = (title: string, pubDate: string) =>
	html`<div tw="flex flex-col w-full h-full bg-[#1d1f21] text-[#c9cacc]">
		<div tw="flex flex-col flex-1 w-full p-10 justify-center">
			<p tw="text-2xl mb-6">${pubDate}</p>
			<h1 tw="text-6xl font-bold leading-snug text-white">${title}</h1>
		</div>
		<div tw="flex items-center justify-between w-full p-10 border-t border-[#2bbc89] text-xl">
			<div tw="flex items-center">
				<svg width="60" height="60" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="14" cy="14" r="14" fill="#D5F60C" />
					<g clip-path="url(#clip0_6_3)">
						<path d="M14 5V7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M14 21V23" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M14 10V18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M10 19V21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M6 13V15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M22 13V15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M10 7V15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M18 9V7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M18 21V13" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					</g>
					<defs>
						<clipPath id="clip0_6_3">
							<rect width="24" height="24" fill="white" transform="translate(2 2)" />
						</clipPath>
					</defs>
				</svg>
				<p tw="ml-3 font-semibold">${siteConfig.site}</p>
			</div>
			<p>by ${siteConfig.author}</p>
		</div>
	</div>`;

type Props = InferGetStaticPropsType<typeof getStaticPaths>;

export async function GET(context: APIContext) {
	const { pubDate, title } = context.props as Props;

	const postDate = getFormattedDate(pubDate, {
		month: "long",
		weekday: "long",
	});
	const svg = await satori(markup(title, postDate), ogOptions);
	const png = new Resvg(svg).render().asPng();
	return new Response(png, {
		headers: {
			"Cache-Control": "public, max-age=31536000, immutable",
			"Content-Type": "image/png",
		},
	});
}

export async function getStaticPaths() {
	const posts = await getAllPosts();
	return posts
		.filter((post: CollectionEntry<"post">) => !post.data.ogImage)
		.map((post: CollectionEntry<"post">) => ({
			params: { slug: post.slug },
			props: {
				pubDate: post.data.updatedDate ?? post.data.publishDate,
				title: post.data.title,
			},
		}));
}
