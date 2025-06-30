<script lang="ts">
  import { onMount } from 'svelte';

  // 0) Rozlišení developmentu
  const IS_DEV = import.meta.env.DEV;

  // 2) Načteme site key z .env (prefix VITE_)
  const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string;

  let name = '';
  let email = '';
  let message = '';
  let honeypot = '';
  let recaptchaReady = false;

  // 3) Po mountu načteme reCAPTCHA V3
  onMount(() => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
    script.async = true;
    script.defer = true;
    script.onload = () => (recaptchaReady = true);
    document.head.appendChild(script);
  });

  // 4) Odeslání formuláře
  async function handleSubmit(event: SubmitEvent) {
    // 5) Vygenerujeme reCAPTCHA token: buď „test-token“ v DEV, nebo skutečný
    const recaptchaToken =
      IS_DEV
        ? 'test-token'
        : recaptchaReady && window.grecaptcha
          ? await window.grecaptcha.execute(SITE_KEY, { action: 'contact' })
          : '';

    // 6) Sestavíme payload
    const payload = { name, email, message, honeypot, recaptchaToken };

    // 7) Pošleme na backend
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      alert('Zpráva odeslána úspěšně!');
      name = email = message = honeypot = '';
    } else {
      // vypíšeme detail chyby z response body
      const err = await res.json();
      alert(`Chyba při odesílání zprávy: ${err.error}`);
    }
  }
</script>

<section id="contact" class="scroll-mt-20 bg-gray-50 pt-16 pb-12">
  <div class="max-w-7xl mx-auto px-4">
    <h1 class="text-5xl font-extrabold text-gray-800 text-left mb-12">
      Kontaktujte mě
    </h1>
  </div>

  <form
    class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-6"
    on:submit|preventDefault={handleSubmit}
  >
    <!-- Formulář -->
    <div class="bg-gray-50 rounded-2xl shadow-lg p-8">
      <!-- honeypot -->
      <input
        type="text"
        name="honeypot"
        bind:value={honeypot}
        class="hidden"
        autocomplete="off"
        tabindex="-1"
        aria-hidden="true"
      />

      <div class="space-y-6">
        <div>
          <label for="name" class="block mb-1 text-sm font-medium text-gray-800">
            Vaše jméno
          </label>
          <input
            id="name"
            name="name"
            type="text"
            bind:value={name}
            required
            placeholder="Jak se jmenujete?"
            class="w-full p-3 rounded-lg border bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition"
          />
        </div>

        <div>
          <label for="email" class="block mb-1 text-sm font-medium text-gray-800">
            Váš email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            bind:value={email}
            required
            placeholder="Zadejte svůj email"
            class="w-full p-3 rounded-lg border bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition"
          />
        </div>

        <div>
          <label for="message" class="block mb-1 text-sm font-medium text-gray-800">
            Vaše zpráva
          </label>
          <textarea
            id="message"
            name="message"
            bind:value={message}
            required
            placeholder="Jak vám mohu pomoci?"
            rows="5"
            class="w-full p-3 rounded-lg border bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition"
          ></textarea>
        </div>
      </div>

      <button
        type="submit"
        class="group relative flex w-full items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50 px-4 py-3 font-bold text-slate-900 transition-transform ease-out hover:scale-105"
      >
        <span
          class="absolute inset-0 z-0 h-full rounded bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-11"
        ></span>
        <span class="relative">
          Odeslat zprávu
        </span>
      </button>
    </div>

    <!-- Plocha -->
    <div class="flex">
      <div class="bg-yellow-500 rounded-2xl shadow-lg w-full self-stretch"></div>
    </div>
  </form>
</section>




