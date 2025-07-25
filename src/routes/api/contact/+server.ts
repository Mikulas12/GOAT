// src/routes/api/contact/+server.ts
import type { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
import { Resend } from 'resend';
import { z } from 'zod';

/* -----------------------------------------------------------
 * 1)  Inicializace Resend
 * --------------------------------------------------------- */
const resend = new Resend(process.env.RESEND_API_KEY);

/* -----------------------------------------------------------
 * 2)  Validace vstupu
 * --------------------------------------------------------- */
const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(5),
  honeypot: z.string().max(0),      // musí být prázdný
  recaptchaToken: z.string()
});

/* -----------------------------------------------------------
 * 3)  Funkce pro ověření reCAPTCHA v3
 * --------------------------------------------------------- */
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

  // odpověď: { success: boolean, score?: number, ... }
  return (await resp.json()) as Record<string, unknown> & {
    success: boolean;
    score?: number;
  };
}

/* -----------------------------------------------------------
 * 4)  Handler POST /api/contact
 * --------------------------------------------------------- */
export const POST: RequestHandler = async ({ request }) => {
  const payload = await request.json();
  const parsed = ContactSchema.safeParse(payload);

  // nevalidní data nebo honeypot vyplněn
  if (!parsed.success) {
    return json({ error: 'Neplatná data nebo honeypot vyplněn' }, { status: 400 });
  }

  const { recaptchaToken, name, email, message } = parsed.data;

  // v dev režimu s test‑tokenem přeskočíme volání Googlu
  if (!(import.meta.env.DEV && recaptchaToken === 'test-token')) {
    const recaptcha = await verifyRecaptcha(recaptchaToken);
    if (!recaptcha.success || (recaptcha.score ?? 0) < 0.5) {
      return json({ error: 'reCAPTCHA selhala' }, { status: 403 });
    }
  }

  /* ---------- 5)  Odeslání e‑mailu přes Resend ---------- */
  try {
    await resend.emails.send({
      from: 'Portfolio <noreply@mikulasmerhulik.cz>',   // adresa/doména ověřená v Resendu
      to: process.env.CONTACT_TO ?? '',                 // cílová schránka
      reply_to: email,                                  // aby šlo odpovědět přímo odesilateli
      subject: `Nová zpráva od ${name}`,
      text: `Jméno: ${name}\nE‑mail: ${email}\n\n${message}`
    });

    return json({ ok: true });                          // 200 OK
  } catch (err) {
    console.error('Resend error', err);
    return json({ error: 'Email send failed' }, { status: 500 });
  }
};


