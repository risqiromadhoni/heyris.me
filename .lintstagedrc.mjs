export default {
	"*.{astro,js,ts}": ["astro check", "biome check ./src"],
	"*.{astro,ts}": () => "tsc --noEmit --skipLibCheck",
};
