<script lang="ts">
	import { DarkSignature, HeaderBackgroundVideo } from '$lib';
</script>

<header
	class="w-screen min-h-screen max-w-full max-h-full relative flex items-center justify-center overflow-hidden"
>
	<div class="container mx-auto">
		<div class="flex justify-center items-center py-14 px-10 md:py-24 md:px-20">
			<img
				id="logo"
				src={DarkSignature}
				alt="Faisal Logo"
				class="show-on-scroll relative z-10 w-[20rem] h-[20rem] sm:w-[24rem] sm:h-[24rem] md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] xl:w-[36rem] xl:h-[36rem]"
				loading="lazy"
			/>
			<video
				autoplay
				muted
				loop
				id="headerVideo"
				class="absolute z-0 w-auto min-w-full min-h-full max-w-none"
			>
				<source src={HeaderBackgroundVideo} type="video/mp4" />
			</video>
		</div>
	</div>
</header>
