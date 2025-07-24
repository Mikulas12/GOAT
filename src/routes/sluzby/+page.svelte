<!-- Services.svelte -->
<script lang="ts">
  import IconArrow from '~icons/ic/baseline-arrow-outward';
  import { fade } from 'svelte/transition';

  interface Service {
    title: string;
    description: string;
    fullDescription: string;
    icon: string;
  }

  const services: Service[] = [
    {
      title: 'VR aplikace & customizace designu',
      description: 'Plně brandovaná VR aplikace s procházkou a úpravou vzhledu prostoru.',
      fullDescription:
        'Navrhneme a vyvineme aplikaci pro VR headsety s podporou ovladačů, teleportu, mapy a hotspotů. Uživatelé mohou za běhu měnit barvy, materiály a layout – ideální pro prezentaci návrhů i finálních podob.',
      icon: '/vr.jpg'
    },
    {
      title: 'Fotografie, video & letecké záběry dronem',
      description: 'Profesionální interiérové i exteriérové snímky, video a letecké záběry dronem pro nemovitosti.',
      fullDescription:
        'Zachytíme každý kout vaší nemovitosti – od ostrých fotek interiéru i exteriéru, přes dynamické propagační video až po letecké záběry dronem okolí a střechy. Ideální pro realitní weby, marketingová videa a prezentace klientům.',
      icon: '/23.jpg'
    },
    {
      title: '3D scan & interaktivní prohlídka',
      description: 'Realistický 3D scan interiérů i exteriérů s webovým procházením.',
      fullDescription:
        'Zachytíme vaše prostory (LiDAR, fotogrammetrie nebo přesné 3D modely) a na webu umožníme volné procházení, vhodné pro zobrazení nemovitosti až do krajních detailů',
      icon: '/1.png'
    },
    {
      title: '3D modelování',
      description: 'Návrh a vizualizace objektů v Blenderu a Rhinoceros.',
      fullDescription:
        'Od konceptového modelu přes CAD výkresy až po export pro real-time aplikace a 3D tisk.',
      icon: '/stul.png'
    },
    {
      title: 'Návrh loga & značky',
      description: 'Tvorba silné vizuální identity, logotypu a komplexního brandingu.',
      fullDescription:
        'Dodáme kompletní brand manuál: barvy, typografii, ikonografii a příklady použití v tiskovinách i online.',
      icon: '/logo.jpg'
    },
    {
      title: 'Web & aplikace',
      description: 'Full-stack vývoj (React, Svelte), nasazení a SEO optimalizace.',
      fullDescription:
        'Vytvoříme responzivní weby a aplikace, integrujeme 3D/WebGL prvky, zajistíme CI/CD a monitoring.',
      icon: '/programing.jpg'
    }
  ];

  let expandedIndex: number | null = null;
  function toggle(i: number) {
    expandedIndex = expandedIndex === i ? null : i;
  }

  function scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
</script>

<section id="services" class="pt-32 pb-16 bg-slate-50">
  <div class="max-w-6xl mx-auto px-6">
    <h2 class="text-4xl font-semibold text-slate-900 mb-12 text-center">
      Služby které nabízím
    </h2>

    <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {#each services as svc, i}
        <div
          class="service-card flex flex-col items-start bg-white rounded-2xl p-6 shadow-md
                 transform transition-transform hover:-translate-y-1"
        >
          <!-- Ikona -->
          <div class="w-16 h-16 mb-4">
            <img
              src={svc.icon}
              alt="{svc.title} ikona"
              class="w-full h-full object-contain"
            />
          </div>

          <!-- Základní text -->
          <h3 class="text-xl font-semibold text-slate-900 mb-2">
            {svc.title}
          </h3>
          <p class="text-sm text-slate-700 mb-4">{svc.description}</p>

          <!-- Rozšířený text s fade-in -->
          {#if expandedIndex === i}
            <p
              in:fade={{ duration: 300 }}
              out:fade={{ duration: 200 }}
              class="text-sm text-slate-700 mb-4"
            >
              {svc.fullDescription}
            </p>
          {/if}

          <!-- Tlačítko Načíst více / Zobrazit méně -->
          <button
            on:click={() => toggle(i)}
            class="mt-auto inline-flex items-center gap-1 text-yellow-500 font-bold hover:underline"
          >
            {expandedIndex === i ? 'Zobrazit méně' : 'Načíst více'} 
            <IconArrow />
          </button>
        </div>
      {/each}
    </div>
  </div>
</section>



