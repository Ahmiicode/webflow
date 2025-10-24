"use client";

import Image from "next/image";
import Link from "next/link";
import { BLOGS } from "../../data/project"; // relative path (no alias)

export default function BlogSection() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* soft pastel background to match site theme */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#f4f6ff] via-[#f6f3ff] to-white" />

      <div className="mx-auto max-w-6xl px-4">
        {/* badge */}
        <div className="mb-2 flex items-center justify-center">
          <span className="pill-grad text-[12px]">Insights & Articles</span>
        </div>

        {/* heading */}
        <h2 className="bg-gradient-to-r from-[#5e73ff] via-[#7f6dff] to-[#c057ff] bg-clip-text text-center text-4xl font-extrabold leading-tight text-transparent sm:text-5xl">
          Latest From Our Blog
        </h2>
        <p className="mx-auto mt-2 max-w-3xl text-center text-[15px] leading-7 text-[#6a6f90]">
          Practical tips, case studies, and strategies for SEO, Ads, Social, and Web. Written by our team, designed to help you grow.
        </p>

        {/* cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {BLOGS.map((b) => (
            <article
              key={b.id}
              className="overflow-hidden rounded-2xl border border-[#e7e9ff] bg-white shadow-[0_14px_34px_rgba(108,118,255,0.12)] transition-transform hover:-translate-y-0.5"
            >
              {/* image */}
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

              {/* content */}
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

                <p className="mt-2 text-[13.5px] leading-6 text-slate-600">
                  {b.excerpt}
                </p>

                <div className="mt-4">
                  <Link href={`/blogs/${b.id}`} className="btn-outline-grad text-[13px]">
                    Read article
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* view all */}
        <div className="mt-10 text-center">
          <Link href="/blogs" className="btn-grad">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
