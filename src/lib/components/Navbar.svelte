<script lang="ts">
	import { onMount } from 'svelte';
	import { smoothScrollAnimation, switchLanguageHandler } from '$lib/services/handler';
	import { DarkSignature } from '$lib';
	import { t, locales, locale } from '$lib/services/translation';

	let isDarkMode: boolean = false;
	let isHidden: boolean = true;

	function switchThemeModeHandler({ matches: dark }: MediaQueryListEvent) {
		if (!localStorage.theme) {
			setThemeMode(dark);
		}
	}

	function setThemeMode(value: boolean) {
		const header = document.getElementById('main-header') as HTMLElement;
		const logo = document.getElementById('logo') as HTMLImageElement;

		isDarkMode = value;

		if (!isDarkMode) {
			document.documentElement.classList.remove('dark');
		} else {
			document.documentElement.classList.add('dark');
		}

		localStorage.theme = !isDarkMode ? 'light' : 'dark';

		if (header && logo) {
			header.classList.add('transition-all', 'duration-300');
			logo.src = DarkSignature;
		}
	}

	function toggleTheme() {
		setThemeMode(!isDarkMode);
	}

	function toggleMenu() {
		const menu = document.getElementById('mobile-menu');

		if (menu) {
			const isHidden = menu.classList.contains('hidden');

			if (isHidden) {
				menu.classList.remove('hidden');
				menu.classList.add('animate-navSlideInDown');
				menu.classList.remove('animate-navSlideOutUp');
			} else {
				menu.classList.add('animate-navSlideOutUp');
				menu.classList.remove('animate-navSlideInDown');

				menu.addEventListener(
					'animationend',
					() => {
						menu.classList.add('hidden');
					},
					{ once: true }
				);
			}
		}
	}

	onMount(() => {
		smoothScrollAnimation();

		isHidden = false;

		const storedTheme = localStorage.theme;

		if (storedTheme) {
			setThemeMode(storedTheme === 'dark');
		} else {
			const matcher = window.matchMedia('(prefers-color-scheme: dark)');
			setThemeMode(matcher.matches);
			matcher.addEventListener('change', switchThemeModeHandler);

			return () => matcher.removeEventListener('change', switchThemeModeHandler);
		}
	});
</script>

<svelte:head>
	<script>
		if (
			localStorage.theme === 'dark' ||
			(!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	</script>
</svelte:head>

<nav
	class="my-navbar hidden z-30 w-full font-grotesk bg-light dark:bg-gradient-to-br from-[#090c22] via-[#020308] to-[#000000] transition-all duration-100 ease-in-out"
>
	<div class="container mx-auto flex justify-between items-center px-2 md:px-0">
		<div class="flex flex-row items-center gap-4">
			<!-- Left Section -->

			<!-- Theme Switch Button -->
			<button
				class="{isDarkMode
					? 'bg-gray-600 focus:ring-gray-400 ring-offset-gray-700'
					: 'bg-yellow-100 focus:ring-yellow-400 ring-offset-white'} relative inline-flex flex-shrink-0 h-6 w-12 sm:h-7 sm:w-14 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 m-4"
				class:isHidden
				type="button"
				on:click={toggleTheme}
			>
				<span class="sr-only">Toggle Dark Mode</span>
				<span
					class="{isDarkMode
						? 'translate-x-0 bg-gray-300'
						: 'translate-x-6 sm:translate-x-7 bg-white'} pointer-events-none relative inline-block w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow transform ring-0 transition ease-in-out duration-200"
				>
					<span
						class="{isDarkMode
							? 'opacity-0 ease-out duration-100'
							: 'opacity-100 ease-in duration-200'} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
						aria-hidden="true"
					>
						<!-- sun icon -->
						<svg
							class="h-5 w-5 sm:w-6 sm:h-6 text-yellow-400"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
								clip-rule="evenodd"
							/>
						</svg>
					</span>

					<span
						class="{isDarkMode
							? 'opacity-100 ease-in duration-200'
							: 'opacity-0 ease-out duration-100'} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
						aria-hidden="true"
					>
						<!-- moon icon -->
						<svg
							class="h-4 w-4 sm:w-5 sm:h-5 text-gray-500"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
						</svg>
					</span>
				</span>
			</button>

			<!-- Change Language Options -->
			<select
				bind:value={$locale}
				on:change={switchLanguageHandler}
				id="countries"
				class="w-40 sm:w-40 md:w-44 lg:w-48 bg-gray-50 border border-gray-300 text-gray-950 dark:text-white dark:bg-[#1c1d1c] dark:border-gray-800 text-sm rounded-lg focus:outline-none focus:ring-yellow-300 focus:border-yellow-300 dark:focus:ring-violet-300 dark:focus:border-violet-300 focus:border-2 p-2.5 dark:bg-"
			>
				<option disabled value="">Select Language</option>
				{#each $locales as locale}
					<option value={locale}>{$t(`lang.${locale}`)}</option>
				{/each}
			</select>

			<!-- End of Left Section -->
		</div>

		<!-- Right Section -->
		<ul class="hidden lg:flex flex-row items-center space-x-6">
			<li class="list-none">
				<a href={'#about'} class="link underline-effect">
					<span class="nav-text text-base text-gray-950 dark:text-white"
						>{$t('navbar.first_link')}</span
					>
				</a>
			</li>
			<li class="list-none">
				<a href={'#skills'} class="link underline-effect">
					<span class="nav-text text-base text-gray-950 dark:text-white"
						>{$t('navbar.second_link')}</span
					>
				</a>
			</li>
			<li class="list-none">
				<a href={'#experience'} class="link underline-effect">
					<span class="nav-text text-base text-gray-950 dark:text-white"
						>{$t('navbar.third_link')}</span
					>
				</a>
			</li>
		</ul>
		<!-- End of Right Section -->

		<!-- Mobile Version -->
		<button id="menu-bar" class="text-gray-950 dark:text-white lg:hidden" on:click={toggleMenu}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16m-7 6h7"
				/>
			</svg>
		</button>

		<div
			id="mobile-menu"
			class="hidden absolute top-14 right-0 bg-light border-t border-gray-800 dark:bg-gradient-to-br from-[#050814] via-[#020308] to-[#000000] w-full transition-all duration-100 ease-in-out"
		>
			<ul class="flex flex-col items-center space-y-4 p-4">
				<li class="list-none">
					<a href={'#personal-info'} class="link">
						<span class="nav-text text-sm text-gray-950 dark:text-white">Personal Info</span>
					</a>
				</li>
				<li class="list-none">
					<a href={'#expertise'} class="link">
						<span class="nav-text text-sm text-gray-950 dark:text-white">Strength & Expertise</span>
					</a>
				</li>
				<li class="list-none">
					<a href={'#experience'} class="link">
						<span class="nav-text text-sm text-gray-950 dark:text-white"
							>Professional Experience</span
						>
					</a>
				</li>
			</ul>
		</div>
	</div>
	<!-- End of Mobile Version -->
</nav>

<style lang="postcss">
	.underline-effect::after {
		content: '';
		display: block;
		width: 0;
		height: 2px;
		background: #fff;
		transition: width 0.3s;
	}

	.dark,
	.underline-effect::after {
		content: '';
		display: block;
		width: 0;
		height: 2px;
		background: #000;
		transition: width 0.3s;
	}

	.underline-effect:hover::after {
		width: 100%;
		transition: width 0.3s;
	}
</style>
