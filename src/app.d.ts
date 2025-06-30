// src/app.d.ts
/// <reference types="@sveltejs/kit" />

declare global {
  interface Window {
    grecaptcha?: {
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
      ready: (cb: () => void) => void;
    };
  }
}

export {};

