<script lang="ts">
	import { type Content, isFilled } from '@prismicio/client';
	import { PrismicLink } from '@prismicio/svelte';
	import IconLinkedin from '~icons/fa-brands/linkedin';
	import IconFacebook from '~icons/fa-brands/facebook';
	import IconInstagram from '~icons/fa-brands/instagram';
	import Bounded from './Bounded.svelte';

	export let settings: Content.SettingsDocument;
</script>

<Bounded as="footer" class="text-slate-600">
	<div
		class="container mx-auto flex mt-20 flex-col items-center justify-between gap-6 py-8 sm:flex-row"
	>
		<div
			class="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start"
		>
			<a
				href="/"
				class="text-xl font-extrabold tracking-tighter text-slate-700 transition-color duration-150 hover:text-yellow-500"
			>
				{settings.data.name}
			</a>
			<span
				class="hidden text-5xl font-extralight leading-[0] text-slate-400 sm:inline"
				aria-hidden="true">/</span
			>
			<p class="text-sm text-slate-700">
				© {new Date().getFullYear()}
				{settings.data.name}
			</p>
		</div>
		<nav class="navigation" aria-label="Footer Navigation">
			<ul class="flex items-center gap-1">
				{#each settings.data.nav_item as { link, label }, index}
					<li>
						<PrismicLink
							field={link}
							class="block px-3 py-1 text-base font-semibold text-slate-600 transition-colors duration-150 hover:text-yellow-500"
							>{label}</PrismicLink
						>
					</li>
					{#if index < settings.data.nav_item.length - 1}
						<span class="text-4xl font-thin leading-[0] text-slate-400" aria-hidden="true">
							/
						</span>
					{/if}
				{/each}
			</ul>
		</nav>
		<div class="socials inline-flex justify-center sm:justify-end">
			{#if isFilled.link(settings.data.facebook_link)}
				<PrismicLink
					field={settings.data.facebook_link}
					class="p-2 text-2xl text-slate-700 transform transition-all duration-150 hover:scale-125 hover:text-yellow-500"
					aria-label={settings.data.name + ' on Facebook'}
				>
					<IconFacebook />
				</PrismicLink>
			{/if}
			{#if isFilled.link(settings.data.linkedin_link)}
				<PrismicLink
					field={settings.data.linkedin_link}
					class="p-2 text-2xl text-slate-700 transform transition-all duration-150 hover:scale-125 hover:text-yellow-500"
					aria-label={settings.data.name + ' on Linkedin'}
				>
					<IconLinkedin />
				</PrismicLink>
			{/if}
			{#if isFilled.link(settings.data.instagram_link)}
				<PrismicLink
					field={settings.data.instagram_link}
					class="p-2 text-2xl text-slate-700 transform transition-all duration-150 hover:scale-125 hover:text-yellow-500"
					aria-label={settings.data.name + ' on Instagram'}
				>
					<IconInstagram />
				</PrismicLink>
			{/if}
		</div>
	</div>
</Bounded>
