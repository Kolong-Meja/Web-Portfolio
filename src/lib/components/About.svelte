<script lang="ts">
	import { AboutSectionComponentGif } from '$lib';
	import { t } from '$lib/services/translation';
	import { Popover } from 'flowbite-svelte';
	import { fade } from 'svelte/transition';
</script>

<section
	id="about"
	class="section w-screen min-h-screen max-w-full max-h-full border-none bg-light dark:bg-gradient-to-b from-green-900 via-black via-40% to-dark font-grotesk transition-all duration-100 ease-in-out"
>
	<div class="show-on-scroll container mx-auto">
		<div
			class="flex md:flex-row md:space-x-4 md:items-center md:justify-center py-8 px-2 sm:py-12 sm:px-3 md:py-16 md:px-4 lg:py-24 lg:px-5 xl:py-28 xl:px-6"
		>
			<img
				src={AboutSectionComponentGif}
				alt="Cube Gif"
				class="hidden md:block w-[20rem] h-[20rem] lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem]"
				loading="lazy"
			/>
			<div class="flex flex-col space-y-2">
				<div
					class="flex flex-col justify-center items-center rounded-lg p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 transition-all duration-100 ease-in-out"
				>
					<h1
						class="text-4xl mb-3 sm:mb-4 md:mb-4 lg:mb-5 xl:mb-6 text-wrap font-bold tracking-normal text-gray-950 dark:text-white self-start lg:text-6xl xl:text-7xl"
					>
						Faisal Ramadhan
					</h1>
					<p
						class="text-base font-normal leading-relaxed text-gray-950 dark:text-white self-start lg:text-lg xl:text-xl"
					>
						{$t('about.opening')}
						<a id="first-popover" href={'#'} class="underline underline-offset-2 font-semibold">
							{$t('about.popover.underlined')}</a
						>
						{$t('about.body')}
					</p>
				</div>
				<div
					class="flex flex-row flex-wrap gap-2 sm:gap-3 md:gap-4 items-center justify-start w-full px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7"
				>
					<p
						class="personal-link bg-gray-200 dark:bg-[#433D8B] text-sm sm:text-base font-normal py-1.5 px-3 sm:py-2 sm:px-4 md:py-2.5 md:px-5 rounded-full md:text-base"
					>
						<a
							id="file-link"
							href="https://drive.google.com/file/d/1qQqfDh_M72bRTpJq-ebwea8UPsJQXMul/view?usp=sharing"
							class="text-gray-950 dark:text-white">{$t('about.links.first_link')}</a
						>
					</p>
					<p
						class="personal-link bg-gray-200 dark:bg-[#433D8B] text-sm sm:text-base font-normal py-1.5 px-3 sm:py-2 sm:px-4 md:py-2.5 md:px-5 rounded-full md:text-base"
					>
						<a
							id="file-link"
							href="https://drive.google.com/file/d/1CWNnv7h82f26WPMn-1P-MyjQc07ZHTQf/view?usp=sharing"
							class="text-gray-950 dark:text-white">{$t('about.links.second_link')}</a
						>
					</p>
					<p
						class="personal-link bg-gray-200 dark:bg-[#433D8B] text-sm sm:text-base font-normal py-1.5 px-3 sm:py-2 sm:px-4 md:py-2.5 md:px-5 rounded-full md:text-base"
					>
						<a
							id="file-link"
							href="https://drive.google.com/file/d/1VBL-RTDf590NW-jO4fluYl-p3fcpHJB2/view?usp=sharing"
							class="text-gray-950 dark:text-white">{$t('about.links.third_link')}</a
						>
					</p>
				</div>
			</div>
		</div>
		<Popover
			triggeredBy="#first-popover"
			class="w-72 lg:w-96 bg-light dark:bg-[#1c1d1c] border-none shadow-lg shadow-gray-400/50 dark:shadow-none text-sm md:text-base font-normal"
			placement="bottom-start"
			transition={fade}
		>
			<div class="p-3 space-y-2">
				<h3 class="font-bold text-gray-950 dark:text-white">{$t('about.popover.underlined')}</h3>
				<p class="font-normal text-gray-700 dark:text-gray-300">
					{$t('about.popover.content')}
				</p>
			</div>
		</Popover>
	</div>
</section>

<style lang="postcss"></style>
