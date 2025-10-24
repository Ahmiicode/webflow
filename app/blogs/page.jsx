"use client";

import Image from "next/image";
import Link from "next/link";
import { BLOGS } from "../data/project"; // relative path (no alias)

export default function BlogsPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative border-b border-slate-200/70 bg-gradient-to-b from-[#f4f6ff] via-[#f6f3ff] to-white">
        <div className="mx-auto max-w-6xl px-4 py-12 text-center">
          <span className="pill-grad text-[12px]">Insights & Articles</span>
          <h1 className="h1 mt-2 bg-gradient-to-r from-[#5e73ff] via-[#7f6dff] to-[#c057ff] bg-clip-text text-transparent">
            Collax News & Blog
          </h1>
          <p className="lead mx-auto mt-2 max-w-3xl text-[#6a6f90]">
            Fresh ideas, tactics, and breakdowns from our team. Learn what’s working in SEO, Ads, Social, and Product.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          {BLOGS.map((b) => (
            <article
              key={b.id}
              className="overflow-hidden rounded-2xl border border-[#e7e9ff] bg-white shadow-[0_14px_34px_rgba(108,118,255,0.12)]"
            >
              <Link href={`/blogs/${b.id}`} className="block">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={b.image}
                    alt={b.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    priority={b.id === "1"}
                  />
                </div>
              </Link>

              <div className="p-5 sm:p-6">
                <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[12px] font-medium text-slate-600">
                  {b.tag}
                </span>
                <Link
                  href={`/blogs/${b.id}`}
                  className="mt-3 block text-[18px] font-bold leading-snug text-slate-900 hover:opacity-90"
                >
                  {b.title}
                </Link>
                <p className="mt-2 text-[13.5px] leading-6 text-slate-600">{b.excerpt}</p>
                <div className="mt-4">
                  <Link href={`/blogs/${b.id}`} className="btn-outline-grad text-[13px]">
                    Read article
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
