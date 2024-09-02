import type { SiteConfig } from "@/types";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import type { AstroExpressiveCodeOptions } from "astro-expressive-code";

export const siteConfig: SiteConfig = {
	author: "Risqi Romadhoni",
	site: "heyris.me",
	date: {
		locale: "en-US",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	description:
		"An personal blog about web development, programming, and technology.",
	lang: "en-US",
	ogLocale: "en_US",
	sortPostsByUpdatedDate: false,
	title: "Risqi Romadhoni",
	webmentions: {
		link: "https://webmention.io/heyris.me/webmention",
	},
};

// Used to generate links in both the Header & Footer.
export const menuLinks: { path: string; title: string }[] = [
	{
		path: "/about/",
		title: "About Me",
	},
	{
		path: "/posts/",
		title: "Blog",
	},
	{
		path: "/apps/",
		title: "Apps",
	},
];

// https://expressive-code.com/reference/configuration/
export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
	styleOverrides: {
		borderRadius: "4px",
		codeFontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;',
		codeFontSize: "0.875rem",
		codeLineHeight: "1.7142857rem",
		codePaddingInline: "1rem",
		frames: {
			frameBoxShadowCssValue: "none",
		},
		uiLineHeight: "inherit",
	},
	themeCssSelector(theme, { styleVariants }) {
		if (styleVariants.length >= 2) {
			const baseTheme = styleVariants[0]?.theme;
			const altTheme = styleVariants.find(
				(v) => v.theme.type !== baseTheme?.type,
			)?.theme;
			if (theme === baseTheme || theme === altTheme)
				return `[data-theme='${theme.type}']`;
		}
		return `[data-theme="${theme.name}"]`;
	},
	themes: ["night-owl", "github-light"],
	useThemedScrollbars: false,
	plugins: [pluginLineNumbers()],
	defaultProps: {
		showLineNumbers: false,
		overridesByLang: {
			"js,jsx,ts,tsx,astro,html,css,json": {
				showLineNumbers: true,
			},
		},
	},
};
