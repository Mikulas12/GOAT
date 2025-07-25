<!-- src/routes/kontakt/+page.svelte -->
<script lang="ts">
  import ContactForm from '$lib/components/ContactForm.svelte';
</script>

<svelte:head>
  <title>Kontakt – Mikuláš Merhulík</title>
  <meta
    name="description"
    content="Ozvi se mi! Interiéry, VR, 3D, web a branding – napiš mi na email nebo použij kontaktní formulář."
  />
  <meta
    property="og:description"
    content="Ozvi se mi! Interiéry, VR, 3D, web a branding – napiš mi na email nebo použij kontaktní formulář."
  />
  <meta property="og:title" content="Kontakt – Mikuláš Merhulík" />
</svelte:head>

<div class="py-12 px-4 md:px-8 lg:px-12">
  <ContactForm />
</div>

