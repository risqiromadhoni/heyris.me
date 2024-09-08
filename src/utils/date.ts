import { siteConfig } from "@/site.config";

const dateFormat = (options?: Intl.DateTimeFormatOptions) =>
	new Intl.DateTimeFormat(
		siteConfig.date.locale,
		!options ? siteConfig.date.options : options,
	);

export function getFormattedDate(
	date: string | number | Date,
	options?: Intl.DateTimeFormatOptions,
) {
	if (!options) {
		return new Date(date).toLocaleDateString(siteConfig.date.locale, {
			...(siteConfig.date.options as Intl.DateTimeFormatOptions),
		});
	}

	return dateFormat(options).format(new Date(date));
}
