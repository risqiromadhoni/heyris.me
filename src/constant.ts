interface SocialLink {
	friendlyName: string;
	isWebmention?: boolean;
	link: string;
	name: string;
}

export const socialLinks: SocialLink[] = [
	{
		friendlyName: "Github",
		link: "https://github.com/risqiromadhoni",
		name: "mdi:github",
		isWebmention: true,
	},
	{
		friendlyName: "LinkedIn",
		link: "https://www.linkedin.com/in/risqir",
		name: "mdi:linkedin",
		isWebmention: true,
	},
	{
		friendlyName: "Twitter",
		link: "https://x.com/risqiromadhonii",
		name: "twitter",
		isWebmention: true,
	},
	{
		friendlyName: "Email",
		link: "mailto:risqi.romadhoni96@gmail.com",
		name: "mdi:email",
	},
];
