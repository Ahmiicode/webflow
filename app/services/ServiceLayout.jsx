// app/components/services/ServiceLayout.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { contactHref } from "@/lib/services";

/* ---------- tiny atoms ---------- */

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-[13px] text-slate-600">
      {children}
    </span>
  );
}

function Stat({ k, v }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
      <div className="text-2xl font-extrabold text-slate-900">{v}</div>
      <div className="mt-1 text-[13px] text-slate-500">{k}</div>
    </div>
  );
}

function CheckItem({ children }) {
  return (
    <li className="flex gap-3">
      <span className="mt-[6px] inline-grid h-4 w-4 place-items-center rounded-full bg-slate-900 text-white">
        <svg width="10" height="10" viewBox="0 0 24 24"><path fill="currentColor" d="m9 16.2-3.5-3.6L4 14l5 5 11-11-1.5-1.5z"/></svg>
      </span>
      <span className="text-slate-700">{children}</span>
    </li>
  );
}

function Section({ title, children, id }) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="h2 !text-[28px]">{title}</h2>
      <div className="mt-3 text-[15.5px] leading-7 text-slate-700">{children}</div>
    </section>
  );
}

/* ---------- main layout ---------- */

export default function ServiceLayout({ service, sections }) {
  const s = service;
  const stats = [
    { k: "Avg. timeline", v: s.timeline ?? "4–8 wks" },
    { k: "Engagements", v: s.projects ?? "2k+" },
    { k: "Rating", v: s.rating ?? "5.0★" },
    { k: "Stack", v: s.stack ?? "Next.js + Node" },
  ];

  return (
    <div className="bg-white">
      {/* HERO */}
      <div className="container pt-10 pb-6">
        <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-wide text-slate-500">Service</p>
            <h1 className="h1">{s.title}</h1>
            {s.short && <p className="lead mt-2 max-w-2xl">{s.short}</p>}

            <div className="mt-4 flex flex-wrap items-center gap-2">
              {s.tags?.map((t) => <Pill key={t}>{t}</Pill>)}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={contactHref(s.id || s.slug)} className="btn-primary">Get Free Growth Plan</Link>
              <Link href="/portfolio" className="btn-secondary">See Case Studies</Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {stats.map((st) => <Stat key={st.k} {...st} />)}
          </div>
        </div>

        {s.hero && (
          <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200">
            <Image
              src={s.hero}
              alt={s.title}
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        )}
      </div>

      {/* BODY */}
      <div className="container pb-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr]">
          {/* Left column */}
          <div className="space-y-10">
            {sections.map((sec, i) => (
              <Section key={i} title={sec.title} id={sec.id || undefined}>
                {sec.content}
              </Section>
            ))}

            {/* Global reassurance strip */}
            <div className="rounded-xl bg-[#F6F8FF] p-5">
              <ul className="grid gap-2 text-[15px] text-slate-700 sm:grid-cols-2 lg:grid-cols-4">
                <CheckItem>Clear 90-day plan with milestones</CheckItem>
                <CheckItem>Ownership & source code handed over</CheckItem>
                <CheckItem>Transparent KPI reporting</CheckItem>
                <CheckItem>Fast support via Slack + weekly standups</CheckItem>
              </ul>
            </div>
          </div>

          {/* Right column: Quick summary card */}
          <aside className="top-28 h-max rounded-2xl border border-slate-200 bg-white p-6 lg:sticky">
            <h3 className="h3 !text-[20px]">What’s included</h3>
            <ul className="mt-3 grid gap-2">
              {(s.includes ?? [
                "Discovery & roadmap",
                "Design system & accessible UI",
                "Implement & integrate",
                "QA, performance & SEO checks",
                "Launch, docs, training",
              ]).map((it, i) => (
                <CheckItem key={i}>{it}</CheckItem>
              ))}
            </ul>

            <div className="mt-6 grid gap-2">
              <Link href={contactHref(s.id || s.slug)} className="btn-primary w-full text-center">
                Request Proposal
              </Link>
              <Link href="/contact" className="btn-secondary w-full text-center">
                Book a 20-min call
              </Link>
              <p className="mt-2 text-center text-[13px] text-slate-500">
                No pressure. We’ll send a quick plan with timelines & pricing.
              </p>
            </div>

            {/* Mini links */}
            <div className="mt-6 border-t border-slate-200 pt-4 text-[14px] text-slate-600">
              <div><b>Email:</b> hello@itsolutionnyc.com</div>
              <div><b>NYC • Remote</b></div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
