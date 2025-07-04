<script lang="ts">
	import { fade } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	import { t } from '$lib/translations';
	import ProjectCard from '../ProjectCard.svelte';

	let isInViewed: boolean;
	const options: Options = {
		rootMargin: '-25%',
		unobserveOnEnter: true
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) =>
		(isInViewed = detail.inView);
</script>

<section
	class="project-section dark:bg-soft-black font-hanken-grotesk max-h-full min-h-screen w-full max-w-full bg-black transition-colors duration-300 ease-in-out"
	use:inview={options}
	on:inview_change={handleChange}
>
	{#if isInViewed}
		<div class="container mx-auto" in:fade={{ duration: 1000 }}>
			<div class="px-4 py-8 sm:px-5 sm:py-12 md:px-6 md:py-16 lg:px-7 lg:py-20 xl:px-8 xl:py-24">
				<p
					class="group font-space-grotesk relative mb-4 w-full text-center text-xl font-bold text-emerald-300 md:text-2xl lg:text-4xl xl:mb-8 dark:text-emerald-400"
				>
					{String($t('content.projects.header')).toUpperCase()}
				</p>
				<div class="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
					<ProjectCard
						props={{
							title: 'Cakes Online Store',
							desc: `An online cake shop that I developed in 2024 as my personal project with a focus on frontend development using Sveltekit and Tailwind CSS.`,
							githubLink: 'https://github.com/Kolong-Meja/Cake-Dungeon-Frontend-Template',
							isDemoLinkExist: true,
							demoLink: 'https://cakedungeon.netlify.app/'
						}}
					/>
					<ProjectCard
						props={{
							title: 'PokeWiki Website',
							desc: `PokeWiki is a wiki website for finding information about Pokemon. This project is private and does not represent the Pokemon trademark.`,
							githubLink: 'https://github.com/Kolong-Meja/pokewiki-website',
							isDemoLinkExist: true,
							demoLink: 'https://pokewiki-website.vercel.app'
						}}
					/>
					<ProjectCard
						props={{
							title: 'MobilizeMate',
							desc: `A mobile-based sales and distribution application that aims to help make sales and distribution activities easier and more effective.`,
							githubLink: 'https://github.com/MobilizeMate',
							isDemoLinkExist: false
						}}
					/>
					<ProjectCard
						props={{
							title: 'Allin CLI',
							desc: `A modern full-stack CLI tool based on TypeScript designed to accelerate your app development process — setup your entire stack in one seamless command.`,
							githubLink: 'https://github.com/Kolong-Meja/allin-cli',
							isDemoLinkExist: true,
							demoLink: 'https://www.npmjs.com/package/@faisalrmdhn08/allin-cli'
						}}
					/>
					<ProjectCard
						props={{
							title: 'Web Data Kendaraan Advance',
							desc: `Website Data Kendaraan menggunakan Vanilla Javascript + Spring Boot dengan tambahan Authentication System, API Caching, Pagination, API Rate Limiter, Logging File, etc. `,
							githubLink: 'https://github.com/Kolong-Meja/web-data-kendaraan-advance',
							isDemoLinkExist: false
						}}
					/>
				</div>
			</div>
		</div>
	{/if}
</section>
