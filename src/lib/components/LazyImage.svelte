<script lang="ts">
  import { onMount } from 'svelte';
  import { createEventDispatcher } from 'svelte';

  export let src: string;
  export let alt = '';
  export let width: number;
  export let height: number;
  export let className = '';

  let imgEl: HTMLImageElement;
  let observer: IntersectionObserver;
  let loaded = false;
  const dispatch = createEventDispatcher();

  onMount(() => {
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              imgEl.src = src;
              loaded = true;
              observer.unobserve(imgEl);
              dispatch('load');
            }
          });
        },
        { rootMargin: '200px' }
      );
      observer.observe(imgEl);
    } else {
      // fallback pro starší prohlížeče
      imgEl.src = src;
      loaded = true;
    }
  });
</script>

<style>
  .placeholder {
    background: var(--color-muted);
    /* pomůže držet rozměry před načtením */
  }
</style>

<img
  bind:this={imgEl}
  class="{className} {loaded ? '' : 'placeholder'}"
  {alt}
  {width}
  {height}
  loading="lazy"
/>
