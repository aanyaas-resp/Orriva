import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";

const enquirySchema = z.object({
  name: z.string().trim().min(2).max(100), phone: z.string().trim().min(7).max(30),
  email: z.string().trim().email().max(254), eventType: z.string().trim().min(1).max(80),
  preferredDate: z.string().trim().max(32).optional(), guests: z.number().int().positive().max(100_000).optional(),
  message: z.string().trim().max(2_000).optional(), company: z.string().max(0).optional(),
});

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character] ?? character);
}

export async function POST(request: Request) {
  if (Number(request.headers.get("content-length") ?? 0) > 20_000) return NextResponse.json({ error: "Request is too large." }, { status: 413 });
  let body: unknown;
  try { body = await request.json(); } catch { return NextResponse.json({ error: "Please submit a valid enquiry." }, { status: 400 }); }
  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Please check the highlighted details and try again." }, { status: 400 });
  const { company, ...enquiry } = parsed.data;
  if (company) return NextResponse.json({ ok: true });
  const { RESEND_API_KEY: apiKey, ENQUIRY_FROM: from, ENQUIRY_TO: to } = process.env;
  if (!apiKey || !from || !to) {
    console.error("Enquiry delivery is not configured.");
    return NextResponse.json({ error: "Enquiries are temporarily unavailable. Please call us instead." }, { status: 503 });
  }
  const fields = [["Name", enquiry.name], ["Phone", enquiry.phone], ["Email", enquiry.email], ["Event type", enquiry.eventType], ["Preferred date", enquiry.preferredDate || "Not specified"], ["Guest count", enquiry.guests?.toLocaleString("en-IN") || "Not specified"], ["Message", enquiry.message || "Not specified"]];
  try {
    const { error } = await new Resend(apiKey).emails.send({ from, to: [to], replyTo: enquiry.email, subject: `New Orriva enquiry from ${enquiry.name}`, text: fields.map(([label, value]) => `${label}: ${value}`).join("\n"), html: `<h1>New Orriva enquiry</h1><table>${fields.map(([label, value]) => `<tr><th align="left">${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`).join("")}</table>` });
    if (error) throw error;
  } catch (error) {
    console.error("Unable to deliver enquiry", error);
    return NextResponse.json({ error: "We could not send your enquiry. Please call us instead." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
