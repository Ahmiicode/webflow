"use client";

import Link from "next/link";

export default function Brands() {
  return (
    <section className="bg-gradient-to-b from-white via-[#f3efff] to-white py-20">
      <div className="container">
        <div className="mx-auto max-w-4xl rounded-[32px] border border-violet-100 bg-white/90 px-10 py-12 text-center shadow-[0_32px_120px_rgba(92,64,190,0.16)] backdrop-blur">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[16.5px] leading-7 text-slate-600">
            Get a free marketing audit and a personalized growth strategy. No commitment required, just clear next steps to scale faster.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-2xl bg-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-violet-600">
              Get Free Marketing Audit
            </Link>
            <Link href="/portfolio" className="inline-flex items-center justify-center rounded-2xl border border-violet-200 bg-white px-6 py-3 text-sm font-semibold text-violet-600 shadow-sm transition hover:border-violet-300">
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
