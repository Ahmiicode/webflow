// app/components/Footer.jsx
"use client";

import Link from "next/link";
import { detailsHref } from "@/lib/services";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/70 bg-[#f7f8ff]">
      {/* --- Footer columns (screenshot layout) --- */}
      <section className="container pb-10 pt-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="inline-grid h-9 w-9 place-items-center rounded-full bg-[#7f6dff] shadow-sm">
                <span className="text-[14px] font-bold text-white">I</span>
              </span>
              <span className="text-xl font-extrabold tracking-tight text-slate-900">Itsolutionnyc.com</span>
            </Link>

            <p className="mt-4 max-w-sm text-[15px] leading-7 text-slate-600">
              Full-stack development and intelligent marketing rolled into one goal: lasting
              traffic & business.
            </p>

            <div className="mt-6 space-y-2 text-[15px] text-slate-600">
              <div>7 years</div>
              <div>2000 projects</div>
              <div>5.0★ rating</div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-3 text-[15px] font-semibold uppercase tracking-wide text-slate-500">SERVICES</h4>
            <NavList
              items={[
                { href: detailsHref("web-development"),  label: "Web / App Development" },
                { href: detailsHref("shopify-wordpress"), label: "Shopify & WordPress" },
                { href: detailsHref("seo"),              label: "SEO (Local & Technical)" },
                { href: detailsHref("google-ads"),       label: "Google Ads (Search / PMax)" },
                { href: detailsHref("social-media"),     label: "Social Media Management" },
                { href: detailsHref("managed"),          label: "Managed Service Solution" },
              ]}
            />
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-3 text-[15px] font-semibold uppercase tracking-wide text-slate-500">COMPANY</h4>
            <NavList
              items={[
                { href: "/portfolio", label: "Portfolio" },
                { href: "/blogs",     label: "Blog" },
                { href: "/contact",   label: "Contact" },
                { href: "/privacy",   label: "Privacy" },
              ]}
            />
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-3 text-[15px] font-semibold uppercase tracking-wide text-slate-500">CONNECT</h4>
            <p className="max-w-xs text-[15px] leading-7 text-slate-600">
              Ready to discuss your project? Let’s talk.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-slate-200/70 pt-6 text-center text-[13.5px] text-slate-500">
          © {year} <span className="font-semibold text-slate-700">Itsolutionnyc.com</span> • All rights reserved
        </div>
      </section>
    </footer>
  );
}

/* ---------- small atoms ---------- */

function NavList({ items }) {
  return (
    <ul className="space-y-2">
      {items.map((it) => (
        <li key={it.href}>
          <Link href={it.href} className="text-[15px] text-slate-700 hover:text-slate-900">
            {it.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
