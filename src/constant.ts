import { camelCased, slugify } from "./utils/string";

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
		link: "https://linkedin.com/in/risqir",
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
		friendlyName: "WhatsApp",
		link: "https://wa.me/+6289692209988",
		name: "mdi:whatsapp",
		isWebmention: true,
	},
	{
		friendlyName: "Email",
		link: "mailto:risqi.romadhoni96@gmail.com",
		name: "mdi:gmail",
	},
];

const experiences = [
	{
		companyName: "Virtual Spirit Std. Bdn.",
		companyLogo: import("@/assets/virtualspirit.png"),
		companyLocation: "Selangor, Malaysia",
		companyUrl: "https://virtualspirit.me",
		workingCategory: "Remote",
		jobContract: "Contract",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni accusantium iste, praesentium neque a optio, est officiis quae itaque quos ex nulla fuga? Quae, atque? Libero sint eligendi consequuntur veritatis.",
		endDate: "Present",
		startDate: "Jan 2024",
	},
	{
		companyName: "Mega Finance",
		companyLogo: import("@/assets/megafinance.png"),
		companyLocation: "Jakarta, Indonesia",
		companyUrl: "https://www.megafinance.co.id",
		workingCategory: "On-Site",
		jobContract: "Contract",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni accusantium iste, praesentium neque a optio, est officiis quae itaque quos ex nulla fuga? Quae, atque? Libero sint eligendi consequuntur veritatis.",
		endDate: "Feb 2024",
		startDate: "Apr 2024",
	},
	{
		companyName: "Rey.id",
		companyLogo: import("@/assets/reyid.jpeg"),
		companyLocation: "Jakarta, Indonesia",
		companyUrl: "https://rey.id/id",
		workingCategory: "Remote",
		jobContract: "Part Time",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni accusantium iste, praesentium neque a optio, est officiis quae itaque quos ex nulla fuga? Quae, atque? Libero sint eligendi consequuntur veritatis.",
		endDate: "May 2023",
		startDate: "Dec 2023",
	},
	{
		companyName: "Digimind",
		companyLogo: import("@/assets/digimind.png"),
		companyLocation: "New York, USA",
		companyUrl: "https://www.digimind.com",
		workingCategory: "Remote",
		jobContract: "Freelance",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni accusantium iste, praesentium neque a optio, est officiis quae itaque quos ex nulla fuga? Quae, atque? Libero sint eligendi consequuntur veritatis.",
		endDate: "Mei 2024",
		startDate: "Mart 2024",
	},
	{
		companyName: "Yummy Corp",
		companyLogo: import("@/assets/yummycorp.jpeg"),
		companyLocation: "Tangerang, Indonesia",
		companyUrl: "https://www.yummycorp.com",
		workingCategory: "Hybrid",
		jobContract: "Contract",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni accusantium iste, praesentium neque a optio, est officiis quae itaque quos ex nulla fuga? Quae, atque? Libero sint eligendi consequuntur veritatis.",
		endDate: "Feb 2021",
		startDate: "Aug 2023",
	},
	{
		companyName: "FoodPedia Group",
		companyLogo: import("@/assets/foodpedia.jpeg"),
		companyLocation: "Jakarta, Indonesia",
		companyUrl: "https://www.instagram.com/foodpedia.official/",
		workingCategory: "On-Site",
		jobContract: "Contract",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni accusantium iste, praesentium neque a optio, est officiis quae itaque quos ex nulla fuga? Quae, atque? Libero sint eligendi consequuntur veritatis.",
		endDate: "Mar 2021",
		startDate: "Jan 2020",
	},
	{
		companyName: "Terampil",
		companyLogo: import("@/assets/terampil.png"),
		companyLocation: "Jakarta, Indonesia",
		companyUrl: "https://terampil.com",
		workingCategory: "Remote",
		jobContract: "Freelance",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni accusantium iste, praesentium neque a optio, est officiis quae itaque quos ex nulla fuga? Quae, atque? Libero sint eligendi consequuntur veritatis.",
		endDate: "Feb 2021",
		startDate: "Oct 2020",
	},
	{
		companyName: "Frisidea Tech Holding",
		companyLogo: import("@/assets/frisidea.png"),
		companyLocation: "Jakarta, Indonesia",
		companyUrl: "https://www.frisidea.com",
		workingCategory: "On-Site",
		jobContract: "Contract",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni accusantium iste, praesentium neque a optio, est officiis quae itaque quos ex nulla fuga? Quae, atque? Libero sint eligendi consequuntur veritatis.",
		endDate: "Jan 2020",
		startDate: "Nov 2019",
	},
	{
		companyName: "Babastudio",
		companyLogo: import("@/assets/babastudio.png"),
		companyLocation: "Jakarta, Indonesia",
		companyUrl: "https://www.babastudio.com",
		workingCategory: "On-Site",
		jobContract: "Contract",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni accusantium iste, praesentium neque a optio, est officiis quae itaque quos ex nulla fuga? Quae, atque? Libero sint eligendi consequuntur veritatis.",
		endDate: "Jan 2020",
		startDate: "Jul 2018",
	},
	{
		companyName: "PT. Indomarco Adi Prima",
		companyLogo: import("@/assets/indomarco.jpeg"),
		companyLocation: "Surabaya, Indonesia",
		companyUrl: "https://www.instagram.com/pt.indomarcoadiprima/",
		workingCategory: "On-Site",
		jobContract: "Contract",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni accusantium iste, praesentium neque a optio, est officiis quae itaque quos ex nulla fuga? Quae, atque? Libero sint eligendi consequuntur veritatis.",
		endDate: "Feb 2018",
		startDate: "Sep 2016",
	},
];

export const workingExperiences = experiences.map((experience) => ({
	...experience,
	slug: slugify(experience.companyName),
	id: camelCased(experience.companyName),
}));
