<script lang="ts">
	import { t } from '$lib/services/translation';
	import { CitiasiaLogo, MTGLogo, PeruriLogo } from '$lib';
	import { Popover } from 'flowbite-svelte';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	onMount(() => {});
</script>

<section
	id="experience"
	class="w-screen min-h-screen max-w-full max-h-full border-b border-gray-200 dark:border-gray-800 bg-light dark:bg-gradient-to-b from-[#050814] via-[#020308] to-[#000000] font-grotesk transition-all duration-100 ease-in-out"
>
	<div class="show-on-scroll container mx-auto">
		<div
			class="flex items-center justify-center space-x-4 py-8 px-2 sm:py-12 sm:px-3 md:py-16 md:px-4 lg:py-24 lg:px-5 xl:py-28 xl:px-6"
		>
			<div class="flex flex-col space-y-8">
				<p
					class="text-2xl text-gray-950 dark:text-white text-center font-bold sm:text-3xl md:text-4xl"
				>
					{$t('content.experience.title')}
				</p>

				<div
					class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-3 lg:gap-7"
				>
					<!-- Citiasia Logo -->
					<div class="flex flex-col justify-center items-center space-y-4">
						<a href={'https://citiasiainc.id/'} title="Citiasia Inc." class="bg-gray-900">
							<img
								src={CitiasiaLogo}
								alt="Citiasia inc. Logo SVG"
								class="w-[16rem] h-[16rem] sm:w-[18rem] sm:h-[18rem]"
								loading="lazy"
							/>
						</a>
						<div class="flex flex-col items-center space-y-2">
							<p
								class="text-base md:text-lg lg:text-xl text-center font-bold text-gray-950 dark:text-white"
							>
								<a id="second-popover" href={'#'} class="underline underline-offset-2">
									{$t('content.experience.citiasia.popover.title')}
								</a>
							</p>
							<p class="text-sm lg:text-base font-normal text-center text-gray-950 dark:text-white">
								{$t('content.experience.citiasia.date')} ({$t(
									'content.experience.citiasia.duration'
								)})
							</p>
						</div>
					</div>
					<Popover
						triggeredBy="#second-popover"
						class="w-72 lg:w-96 text-sm lg:text-base font-normal bg-light dark:bg-[#1c1d1c] border-none shadow-lg shadow-gray-400/50 dark:shadow-none"
						placement="bottom-start"
						transition={fade}
					>
						<div class="p-2 space-y-2">
							<h3 class="font-bold text-gray-950 dark:text-white">
								{$t('content.experience.citiasia.popover.subtitle')}:
							</h3>
							<p class="font-normal text-gray-700 dark:text-gray-300">
								{$t('content.experience.citiasia.popover.content')}:
							</p>
						</div>
					</Popover>
					<!-- End of Citiasia Logo -->

					<!-- MTG Logo -->
					<div class="flex flex-col justify-center items-center space-y-4">
						<a href={'https://www.marthatilaargroup.com/'} title="Martha Tilaar Group">
							<img
								src={MTGLogo}
								alt="MTG Logo SVG"
								class="w-[16rem] h-[16rem] sm:w-[18rem] sm:h-[18rem]"
								loading="lazy"
							/>
						</a>
						<div class="flex flex-col items-center space-y-2">
							<p
								class="text-base md:text-lg lg:text-xl text-center font-bold text-gray-950 dark:text-white"
							>
								<a id="third-popover" href={'#'} class="underline underline-offset-2">
									{$t('content.experience.mtg.popover.title')}
								</a>
							</p>
							<p class="text-sm lg:text-base font-normal text-center text-gray-950 dark:text-white">
								{$t('content.experience.mtg.date')} ({$t('content.experience.mtg.duration')})
							</p>
						</div>
					</div>
					<Popover
						triggeredBy="#third-popover"
						class="w-72 lg:w-96 text-sm lg:text-base font-normal bg-light dark:bg-[#1c1d1c] border-none shadow-lg shadow-gray-400/50 dark:shadow-none"
						placement="bottom-start"
						transition={fade}
					>
						<div class="p-2 space-y-2">
							<h3 class="font-bold text-gray-950 dark:text-white">
								{$t('content.experience.mtg.popover.subtitle')}:
							</h3>
							<p class="font-normal text-gray-700 dark:text-gray-300">
								{$t('content.experience.mtg.popover.content')}:
							</p>
						</div>
					</Popover>
					<!-- End of MTG Logo -->

					<!-- Perum Peruri Logo -->
					<div class="flex flex-col justify-center items-center space-y-4">
						<a href={'https://www.peruri.co.id/'} title="Perum Peruri">
							<img
								src={PeruriLogo}
								alt="Peruri Logo SVG"
								class="w-[18rem] h-[12rem] sm:w-[24rem] sm:h-[14rem]"
								loading="lazy"
							/>
						</a>
						<div class="flex flex-col items-center space-y-2">
							<p
								class="text-base md:text-lg lg:text-xl text-center font-bold text-gray-950 dark:text-white"
							>
								<a id="fourth-popover" href={'#'} class="underline underline-offset-2">
									{$t('content.experience.peruri.popover.title')}
								</a>
							</p>
							<p class="text-sm lg:text-base font-normal text-center text-gray-950 dark:text-white">
								{$t('content.experience.peruri.date')} ({$t('content.experience.peruri.duration')})
							</p>
						</div>
					</div>
					<Popover
						triggeredBy="#fourth-popover"
						class="w-72 lg:w-96 text-sm lg:text-base font-normal bg-light dark:bg-[#1c1d1c] border-none shadow-lg shadow-gray-400/50 dark:shadow-none"
						placement="bottom-start"
						transition={fade}
					>
						<div class="p-2 space-y-2">
							<h3 class="font-bold text-gray-950 dark:text-white">
								{$t('content.experience.peruri.popover.subtitle')}:
							</h3>
							<p class="font-normal text-gray-700 dark:text-gray-300">
								{$t('content.experience.peruri.popover.content')}:
							</p>
						</div>
					</Popover>
					<!-- End of Perum Peruri Logo -->
				</div>
			</div>
		</div>
	</div>
</section>

<style></style>
