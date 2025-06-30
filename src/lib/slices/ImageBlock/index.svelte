<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicImage } from '@prismicio/svelte';

	export let slice: Content.ImageBlockSlice;
</script>

<PrismicImage
	field={slice.primary.image}
	imageParams={{ auto: 'format,compress', w: 800, fit: 'max' }}
	loading="lazy"
	class="not-prose w-full max-w-4xl mx-auto h-auto rounded-md my-10 md:my-14 lg:my-16 object-contain"
/>
