import "server-only";
import { Resend } from "resend";
import { company } from "@/data/company";

interface Attachment {
  filename: string;
  content: Buffer;
}

interface SendEmailParams {
  to: string;
  subject: string;
  html: string;
  attachments?: Attachment[];
}

/**
 * Versendet E-Mails über Resend, sofern RESEND_API_KEY gesetzt ist. Ohne Key
 * wird nur geloggt - Formulare schlagen dadurch nicht fehl.
 */
export async function sendEmail({ to, subject, html, attachments }: SendEmailParams): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.log(`[email:skipped – kein RESEND_API_KEY] an ${to}: ${subject}`);
    return;
  }

  const resend = new Resend(apiKey);
  const from = `${company.name} <no-reply@${new URL(company.url).hostname}>`;

  try {
    await resend.emails.send({
      from,
      to,
      subject,
      html,
      attachments: attachments?.map((a) => ({ filename: a.filename, content: a.content })),
    });
  } catch (error) {
    console.error("E-Mail-Versand fehlgeschlagen:", error);
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function inquiryEmail(params: {
  projectType: string;
  name: string;
  company?: string;
  phone: string;
  email: string;
  location?: string;
  startDate?: string;
  message?: string;
  routedTo: string;
}): { subject: string; html: string } {
  const subject = `Neue Projektanfrage: ${params.projectType} – ${params.name}`;
  const html = `
    <div style="font-family: sans-serif;">
      <h1 style="font-size: 18px;">Neue Projektanfrage</h1>
      <p>Zuständigkeit: <strong>${escapeHtml(params.routedTo)}</strong></p>
      <ul>
        <li>Projektart: ${escapeHtml(params.projectType)}</li>
        <li>Projektort: ${escapeHtml(params.location || "–")}</li>
        <li>Geplanter Beginn: ${escapeHtml(params.startDate || "–")}</li>
        <li>Name: ${escapeHtml(params.name)}</li>
        <li>Firma: ${escapeHtml(params.company || "–")}</li>
        <li>Telefon: ${escapeHtml(params.phone)}</li>
        <li>E-Mail: ${escapeHtml(params.email)}</li>
      </ul>
      <p>${escapeHtml(params.message || "").replace(/\n/g, "<br/>")}</p>
    </div>
  `;
  return { subject, html };
}

export function inquiryConfirmationEmail(params: { name: string }): { subject: string; html: string } {
  return {
    subject: `Ihre Projektanfrage bei ${company.legalName}`,
    html: `
      <div style="font-family: sans-serif; color: #16150f;">
        <h1 style="font-size: 20px;">Vielen Dank.</h1>
        <p>Hallo ${escapeHtml(params.name)},</p>
        <p>wir haben Ihre Anfrage erhalten. Ein Ansprechpartner meldet sich zeitnah bei Ihnen.</p>
        <p>${company.legalName}<br/>info@hp-bau.de</p>
      </div>
    `,
  };
}

export function applicationEmail(params: {
  jobTitle: string;
  name: string;
  skill: string;
  phone: string;
  email: string;
  message?: string;
}): { subject: string; html: string } {
  return {
    subject: `Neue Bewerbung: ${params.jobTitle} – ${params.name}`,
    html: `
      <div style="font-family: sans-serif;">
        <h1 style="font-size: 18px;">Neue Bewerbung</h1>
        <ul>
          <li>Stelle: ${escapeHtml(params.jobTitle)}</li>
          <li>Kompetenz: ${escapeHtml(params.skill)}</li>
          <li>Name: ${escapeHtml(params.name)}</li>
          <li>Telefon: ${escapeHtml(params.phone)}</li>
          <li>E-Mail: ${escapeHtml(params.email)}</li>
        </ul>
        <p>${escapeHtml(params.message || "").replace(/\n/g, "<br/>")}</p>
      </div>
    `,
  };
}

export function whistleblowerEmail(params: { message: string; contact?: string }): { subject: string; html: string } {
  return {
    subject: "Neue Meldung nach Hinweisgeberschutzgesetz",
    html: `
      <div style="font-family: sans-serif;">
        <h1 style="font-size: 18px;">Neue vertrauliche Meldung</h1>
        <p>${escapeHtml(params.message).replace(/\n/g, "<br/>")}</p>
        <p>Rückkontakt: ${escapeHtml(params.contact || "anonym, kein Rückkontakt angegeben")}</p>
      </div>
    `,
  };
}
