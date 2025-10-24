import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Lead from "@/lib/models/Lead";
import nodemailer from "nodemailer";

// --- 60s rate-limit (per IP + name) using in-memory store ---
const WINDOW_MS = 60_000;
const recentKeyed = new Map();
function makeKey(ip = "", name = "") { return `${ip}|${(name || "").trim().toLowerCase()}`; }
export function _shouldBlockNow(key, now = Date.now()) {
  const last = recentKeyed.get(key) || 0;
  if (now - last < WINDOW_MS) return true;
  recentKeyed.set(key, now);
  return false;
}

// Validation
export function _validateLead(body) {
  if (!body?.name || !body?.service) return { ok: false, error: "Missing name/service" };
  const method = body?.contactMethod === "phone" ? "phone" : "email";
  if (method === "email") {
    const email = String(body?.email || "").trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) return { ok: false, error: "Valid email required when contact method is email" };
  } else {
    const digits = String(body?.phone || "").replace(/\D/g, "");
    if (digits.length < 7) return { ok: false, error: "Valid phone required when contact method is phone" };
  }
  return { ok: true };
}

export async function POST(req) {
  try {
    const body = await req.json();
    const ip = req.headers.get("x-forwarded-for") || "";

    if (body.honeypot) return NextResponse.json({ ok: true });

    const v = _validateLead(body);
    if (!v.ok) return NextResponse.json({ error: v.error }, { status: 400 });

    const key = makeKey(ip, body.name);
    if (_shouldBlockNow(key)) return NextResponse.json({ error: "Slow down: please try again in about a minute." }, { status: 429 });

    await connectDB();
    const lead = await Lead.create({ ...body, ip, createdAt: new Date() });

    if (process.env.SMTP_HOST && process.env.NOTIFY_TO) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: false,
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      });
      const html = `
        <h2>New Lead — ITSolutionNYC</h2>
        <p><b>Name:</b> ${lead.name}</p>
        <p><b>Service:</b> ${lead.service}</p>
        <p><b>Contact:</b> ${lead.contactMethod === "email" ? lead.email : lead.phone}</p>
        <p><b>Budget:</b> ${lead.budget || ""}</p>
        <p><b>Timeline:</b> ${lead.timeline || ""}</p>
        <p><b>Details:</b> ${lead.details || ""}</p>
        <p><b>Page:</b> ${lead.page || ""}</p>
        <p><b>UTM:</b> ${JSON.stringify(lead.utm || {})}</p>`;
      await transporter.sendMail({
        from: process.env.NOTIFY_FROM || process.env.SMTP_USER,
        to: process.env.NOTIFY_TO,
        subject: `New Lead: ${lead.service} — ${lead.name}`,
        html,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e.message || "Server error" }, { status: 500 });
  }
}
