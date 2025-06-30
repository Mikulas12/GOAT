// src/routes/api/contact/+server.ts
import type { RequestHandler } from './$types';
import { z } from 'zod';
import nodemailer from 'nodemailer';

const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(5),
  honeypot: z.string().max(0),
  recaptchaToken: z.string()
});

const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY;

async function verifyRecaptcha(token: string) {
  const resp = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ secret: RECAPTCHA_SECRET!, response: token })
  });
  return (await resp.json()) as { success: boolean; score?: number; 'error-codes'?: string[] };
}

export const POST: RequestHandler = async ({ request }) => {
  const payload = await request.json();
  const parsed = ContactSchema.safeParse(payload);
  if (!parsed.success) {
    return new Response(
      JSON.stringify({ error: 'Neplatná data nebo honeypot vyplněn' }),
      { status: 400 }
    );
  }

  const { recaptchaToken, name, email, message, honeypot } = parsed.data;

  // Skip reCAPTCHA verification in development when using test-token
  if (!(import.meta.env.DEV && recaptchaToken === 'test-token')) {
    const recaptcha = await verifyRecaptcha(recaptchaToken);
    if (!recaptcha.success || (recaptcha.score ?? 0) < 0.5) {
      return new Response(JSON.stringify({ error: 'reCAPTCHA selhala' }), { status: 403 });
    }
  }

  // Send email via MailHog SMTP for local testing
  try {
    const transporter = nodemailer.createTransport({
      host: '127.0.0.1',
      port: 1025,
      secure: false
    });

    await transporter.sendMail({
      from: `"Web Kontakt" <no-reply@example.com>`,
      to: 'ty@mail.cz',
      subject: `Nová zpráva od ${name}`,
      text: `Jméno: ${name}\nEmail: ${email}\n\n${message}`
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error('Mail server error:', err);
    return new Response(
      JSON.stringify({ error: 'Mail server error' }),
      { status: 500 }
    );
  }
};


