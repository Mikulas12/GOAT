// src/routes/api/contact/+server.ts
import type { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
import { Resend } from 'resend';
import { z } from 'zod';

/* ----------------------------------------------------- */
/* 1) Validace vstupu                                    */
/* ----------------------------------------------------- */
const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(5),
  honeypot: z.string().max(0), // musí zůstat prázdné
  recaptchaToken: z.string()
});

/* ----------------------------------------------------- */
/* 2) Ověření reCAPTCHA v3                               */
/* ----------------------------------------------------- */
const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY;

async function verifyRecaptcha(token: string) {
  const resp = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret: RECAPTCHA_SECRET ?? '',
      response: token
    })
  });

  return (await resp.json()) as { success: boolean; score?: number; [k: string]: unknown };
}

/* ----------------------------------------------------- */
/* 3) Handler POST /api/contact                          */
/* ----------------------------------------------------- */
export const POST: RequestHandler = async ({ request }) => {
  const payload = await request.json();
  const parsed = ContactSchema.safeParse(payload);

  /* ------------ 3.1 nevalidní data / honeypot -------- */
  if (!parsed.success) {
    console.warn('Contact Form – neplatná data / honeypot', parsed.error.flatten());
    return json({ error: 'Neplatná data nebo honeypot vyplněn' }, { status: 400 });
  }

  const { recaptchaToken, name, email, message } = parsed.data;

  /* ------------ 3.2 reCAPTCHA (skip v dev & preview) -- */
  const IS_DEV = import.meta.env.DEV;
  const IS_PREVIEW = process.env.VERCEL_ENV === 'preview';

  if (!(IS_DEV && recaptchaToken === 'test-token') && !IS_PREVIEW) {
    const recaptcha = await verifyRecaptcha(recaptchaToken);

    if (!recaptcha.success || (recaptcha.score ?? 0) < 0.5) {
      console.warn('reCAPTCHA failed', recaptcha);
      return json({ error: 'reCAPTCHA selhala' }, { status: 403 });
    }
  }

  /* --------------------------------------------------- */
  /* 4) Odeslání e‑mailu přes Resend                     */
  /* --------------------------------------------------- */
  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.error('RESEND_API_KEY není nastavené v env proměnných!');
    return json({ error: 'Mail service not configured' }, { status: 500 });
  }

  const resend = new Resend(resendApiKey);

  // Pokud nemáš doménu ověřenou v Resendu, použij onboarding@resend.dev
  const FROM_ADDRESS =
    process.env.RESEND_FROM ??
    'Portfolio <noreply@mikulasmerhulik.cz>'; // nebo onboarding@resend.dev

  try {
    const response = await resend.emails.send({
      from: FROM_ADDRESS,
      to: process.env.CONTACT_TO!,
      reply_to: email,
      subject: `Nová zpráva od ${name}`,
      text: `Jméno: ${name}\nE‑mail: ${email}\n\n${message}`
    });

    console.log('Resend response', response);
    return json({ ok: true }); // 200 OK
  } catch (err) {
    console.error('Resend error', err);
    return json({ error: 'Email send failed' }, { status: 500 });
  }
};


