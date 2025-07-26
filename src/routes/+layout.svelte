<script lang="ts">
  import '../app.css';
  import '@fontsource-variable/urbanist';

  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  import { PrismicPreview } from '@prismicio/svelte/kit';
  import { page } from '$app/stores';
  import { repositoryName } from '$lib/prismicio';
  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';

  export let data;

  onMount(() => {
    if (browser) {
      
    }
  });
</script>
