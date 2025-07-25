import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';
import imagemin from 'vite-plugin-imagemin';

export default defineConfig({
  ssr: {
    noExternal: ['three']
  },
  plugins: [
    sveltekit(),

    // Optimalizace obrázků do WebP/AVIF
    imagemin({
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.7, 0.9] },
      webp:    { quality: 80 },
      avif:    { quality: 50 }
    }),

    Icons({
      compiler: 'svelte',
      autoInstall: true
    })
  ],
  server: {
    fs: {
      // Allow access to files from the project root.
      allow: ['..', './slicemachine.config.json']
    }
  }
});

