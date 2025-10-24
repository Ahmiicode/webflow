// app/contact/page.jsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { normalizeService, getService, services } from "@/lib/services";

export default function ContactPage() {
  const params = useSearchParams();
  const raw = params.get("service") || "";
  const normalized = normalizeService(raw);
  const activeService = useMemo(() => getService(normalized), [normalized]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: activeService?.slug || "",
    budget: "",
    timeline: "",
    message: "",
    consent: false,
    honey: "", // honeypot
  });

  useEffect(() => {
    if (activeService?.slug) {
      setForm((f) => ({ ...f, service: activeService.slug }));
    }
  }, [activeService?.slug]);

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ ok: false, msg: "" });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ ok: false, msg: "" });

    // basic client-side validation
    if (!form.name || !form.email || !form.message) {
      setStatus({ ok: false, msg: "Please fill in your name, email, and message." });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus({ ok: false, msg: "Please enter a valid email address." });
      return;
    }
    if (!form.consent) {
      setStatus({ ok: false, msg: "Please agree to the privacy notice." });
      return;
    }
    if (form.honey) {
      // bot detected; pretend success
      setStatus({ ok: true, msg: "Thanks! We’ll get back to you shortly." });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, page: "contact" }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus({ ok: true, msg: "Thanks! We’ll get back to you within 24 hours." });
      setForm((f) => ({
        ...f,
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        budget: "",
        timeline: "",
        consent: false,
      }));
    } catch (err) {
      setStatus({ ok: false, msg: "Something went wrong. Please try again later." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative border-b border-slate-200/70 bg-gradient-to-b from-[#f4f6ff] via-[#f6f3ff] to-white">
        <div className="container py-12 text-center">
          <span className="pill-grad text-[12px]">Let’s work together</span>
          <h1 className="h1 mt-2 bg-gradient-to-r from-[#5e73ff] via-[#7f6dff] to-[#c057ff] bg-clip-text text-transparent">
            Tell us about your project
          </h1>
          <p className="lead mx-auto mt-2 max-w-3xl text-[#6a6f90]">
            We typically respond within 24 hours. Share a few details and we’ll follow up with a
            free strategy outline tailored to your goals.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container py-10">
        <div className="grid gap-8 md:grid-cols-5">
          {/* INFO COLUMN */}
          <aside className="md:col-span-2">
            <div className="overflow-hidden rounded-2xl border border-[#e7e9ff] bg-white p-5 shadow-[0_14px_34px_rgba(108,118,255,0.12)]">
              <h3 className="text-[18px] font-extrabold text-slate-900">Why choose us</h3>
              <ul className="mt-3 space-y-2 text-[14px] text-slate-700">
                <li>✓ 7+ years delivering results across SEO, Ads, Social, and Web</li>
                <li>✓ 2,000+ projects completed with 5.0★ client satisfaction</li>
                <li>✓ AI‑powered workflows to move faster and smarter</li>
              </ul>
              <div className="mt-5 rounded-xl bg-gradient-to-r from-[#eef1ff] to-[#f7efff] p-4 text-[13.5px] text-slate-700">
                <div className="font-semibold text-slate-900">Prefer email?</div>
                <div>hello@itsolutionnyc.com</div>
                <div className="mt-1 text-[12.5px] text-slate-500">Response time: ~24 hours</div>
              </div>
            </div>
          </aside>

          {/* FORM COLUMN */}
          <div className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="overflow-hidden rounded-2xl border border-[#e7e9ff] bg-white p-5 shadow-[0_14px_34px_rgba(108,118,255,0.12)] sm:p-6"
            >
              {/* Hidden honeypot */}
              <input type="text" name="honey" value={form.honey} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" />

              {/* Section: Your details */}
              <h3 className="text-[15px] font-extrabold tracking-tight text-slate-900">Your details</h3>
              <div className="mt-3 h-px bg-slate-100" />

              {/* Top row */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-[14px] font-semibold text-slate-800">
                    Full name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="mt-1 w-full rounded-xl border border-[#e7e9ff] bg-white px-3 py-2.5 text-[14px] text-slate-900 placeholder-slate-400 outline-none focus:border-[#7582ff] focus:ring-2 focus:ring-[#7582ff]/30"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[14px] font-semibold text-slate-800">
                    Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="mt-1 w-full rounded-xl border border-[#e7e9ff] bg-white px-3 py-2.5 text-[14px] text-slate-900 placeholder-slate-400 outline-none focus:border-[#7582ff] focus:ring-2 focus:ring-[#7582ff]/30"
                  />
                </div>
              </div>

              {/* Second row */}
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="block text-[14px] font-semibold text-slate-800">
                    Phone (optional)
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123‑4567"
                    className="mt-1 w-full rounded-xl border border-[#e7e9ff] bg-white px-3 py-2.5 text-[14px] text-slate-900 placeholder-slate-400 outline-none focus:border-[#7582ff] focus:ring-2 focus:ring-[#7582ff]/30"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-[14px] font-semibold text-slate-800">
                    Company (optional)
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme Inc."
                    className="mt-1 w-full rounded-xl border border-[#e7e9ff] bg-white px-3 py-2.5 text-[14px] text-slate-900 placeholder-slate-400 outline-none focus:border-[#7582ff] focus:ring-2 focus:ring-[#7582ff]/30"
                  />
                </div>
              </div>

              {/* Section: Project details */}
              <h3 className="mt-6 text-[15px] font-extrabold tracking-tight text-slate-900">Project details</h3>
              <div className="mt-3 h-px bg-slate-100" />

              {/* Third row */}
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <div className="sm:col-span-1">
                  <label htmlFor="service" className="block text-[14px] font-semibold text-slate-800">
                    Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-xl border border-[#e7e9ff] bg-white px-3 py-2.5 text-[14px] text-slate-900 outline-none focus:border-[#7582ff] focus:ring-2 focus:ring-[#7582ff]/30"
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="budget" className="block text-[14px] font-semibold text-slate-800">
                    Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-xl border border-[#e7e9ff] bg-white px-3 py-2.5 text-[14px] text-slate-900 outline-none focus:border-[#7582ff] focus:ring-2 focus:ring-[#7582ff]/30"
                  >
                    <option value="">Select a range</option>
                    <option value="<2k">Under $2,000</option>
                    <option value="2k-5k">$2,000 – $5,000</option>
                    <option value="5k-10k">$5,000 – $10,000</option>
                    <option value=">10k">$10,000+</option>
                  </select>
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="timeline" className="block text-[14px] font-semibold text-slate-800">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={form.timeline}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-xl border border-[#e7e9ff] bg-white px-3 py-2.5 text-[14px] text-slate-900 outline-none focus:border-[#7582ff] focus:ring-2 focus:ring-[#7582ff]/30"
                  >
                    <option value="">Choose one</option>
                    <option value="asap">ASAP</option>
                    <option value="2-4w">2 – 4 weeks</option>
                    <option value="1-3m">1 – 3 months</option>
                    <option value=">3m">3+ months</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="mt-4">
                <label htmlFor="message" className="block text-[14px] font-semibold text-slate-800">
                  Tell us about your project <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What are you building? What success would look like?"
                  className="mt-1 w-full rounded-xl border border-[#e7e9ff] bg-white px-3 py-2.5 text-[14px] text-slate-900 placeholder-slate-400 outline-none focus:border-[#7582ff] focus:ring-2 focus:ring-[#7582ff]/30"
                />
              </div>

              {/* Consent + Submit */}
              <div className="mt-6 border-t border-slate-100 pt-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <label className="flex max-w-[620px] items-start gap-3 text-[13.5px] leading-6 text-slate-600">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={form.consent}
                    onChange={handleChange}
                    className="mt-[3px] h-4 w-4 rounded border-[#cfd3ff] text-[#6b74ff] focus:ring-[#6b74ff]"
                  />
                  <span>
                    I agree to the processing of my information in accordance with the
                    <a href="/privacy" className="ml-1 underline">privacy notice</a>.
                  </span>
                </label>

                <button type="submit" disabled={submitting} className="btn-grad-sm">
                  {submitting ? "Sending…" : "Request Free Strategy"}
                </button>
              </div>

              {status.msg ? (
                <div
                  role="status"
                  className={`mt-4 rounded-xl border px-3 py-2 text-[13px] ${
                    status.ok
                      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                      : "border-rose-200 bg-rose-50 text-rose-700"
                  }`}
                >
                  {status.msg}
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
