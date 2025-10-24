"use client";
import { useEffect, useMemo, useRef, useState } from "react";

const SERVICES = [
  "Shopify Store",
  "WordPress Website",
  "Custom MERN App",
  "SEO & Content",
  "Social Media Mgmt",
  "Ads: Google/Meta",
  "AI Chatbot/Automation",
];

const BUDGETS = ["<$500", "$500–$1k", "$1k–$3k", "$3k–$5k", ">$5k"];
const TIMELINES = ["ASAP (1–2 wks)", "This month", "This quarter", "Flexible"];

function Message({ role, children }) {
  return (
    <div className={`mb-4 ${role === "bot" ? "text-zinc-700" : "hidden"}`}>
      {children}
    </div>
  );
}

// Export name avoids clashes; import it as LeadChatbot in layout.js
export default function ITSLeadChatbot() {
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);
  const [payload, setPayload] = useState({
    name: "",
    service: "",
    email: "",
    phone: "",
    details: "",
    page: "",
    utm: {},
  });
  const scrollRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    const utm = {};
    url.searchParams.forEach((v, k) => {
      if (k.startsWith("utm_")) utm[k] = v;
    });
    setPayload((p) => ({ ...p, page: url.pathname, utm }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!payload.name.trim()) {
      setError("Name is required");
      return;
    }
    if (!payload.service) {
      setError("Please select a service");
      return;
    }
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email);
    if (!emailValid && !payload.phone) {
      setError("Email address or phone number is required");
      return;
    }
    
    try {
      setSending(true);
      setError(null);
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          contactMethod: payload.email ? "email" : "phone"
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed to send");
      
      // Success - reset form
      setPayload({
        name: "",
        service: "",
        email: "",
        phone: "",
        details: "",
        page: payload.page,
        utm: payload.utm,
      });
      
      // Redirect to thank you page
      window.location.href = "/thank-you";
    } catch (e) {
      setError(e.message || "Something went wrong");
    } finally {
      setSending(false);
    }
  };



  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-28 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 px-4 py-3 text-sm font-medium text-white shadow-lg transition hover:shadow-xl hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        <span className="text-sm font-medium">Get Quote</span>
      </button>
      
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-zinc-200 bg-gradient-to-r from-purple-600 to-purple-500 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-base font-semibold text-white">ITSolutionNYC Assistant</div>
                  <div className="text-xs text-purple-100">Live intake • 5 min response</div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full p-1 text-white/80 transition hover:bg-white/20 hover:text-white"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="max-h-[70vh] overflow-y-auto p-6">
              <Message role="bot">
                <div className="mb-6 flex items-start gap-2">
                  <span className="text-2xl">👋</span>
                  <p className="text-sm leading-relaxed text-zinc-700">
                    Hi! I'm the ITSolutionNYC assistant. I'll collect a few details and our team will reach out fast.
                  </p>
                </div>
              </Message>

              {/* Name */}
              <div className="mb-5">
                <label className="mb-2 block text-sm font-medium text-zinc-900">
                  What's your name? <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={payload.name}
                  onChange={(e) => setPayload({ ...payload, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 shadow-sm transition focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-5">
                <label className="mb-2 block text-sm font-medium text-zinc-900">
                  Email address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={payload.email}
                  onChange={(e) => setPayload({ ...payload, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 shadow-sm transition focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                />
              </div>

              {/* Phone */}
              <div className="mb-5">
                <label className="mb-2 block text-sm font-medium text-zinc-900">Phone number</label>
                <input
                  type="tel"
                  value={payload.phone}
                  onChange={(e) => setPayload({ ...payload, phone: e.target.value })}
                  placeholder="+1 (555) 000-0000"
                  className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 shadow-sm transition focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                />
              </div>

              {/* Service */}
              <div className="mb-5">
                <label className="mb-2 block text-sm font-medium text-zinc-900">
                  Which service do you need? <span className="text-red-500">*</span>
                </label>
                <select
                  value={payload.service}
                  onChange={(e) => setPayload({ ...payload, service: e.target.value })}
                  className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 shadow-sm transition focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  required
                >
                  <option value="">Select a service</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Project Details */}
              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium text-zinc-900">Tell us about your project</label>
                <textarea
                  value={payload.details}
                  onChange={(e) => setPayload({ ...payload, details: e.target.value })}
                  placeholder="Share your goals, challenges, or questions..."
                  rows={4}
                  className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 shadow-sm transition focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                />
              </div>

              {error && (
                <div className="mb-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={sending}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 px-6 py-4 text-base font-semibold text-white shadow-lg transition hover:shadow-xl hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                {sending ? "Sending..." : "Send Message"}
              </button>

              <p className="mt-4 text-center text-xs uppercase tracking-wider text-zinc-400">
                NYC-BASED TEAM • NO AI HANDOFF
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
