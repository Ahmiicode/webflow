"use client";

import Link from "next/link";
import { useState } from "react";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/95 backdrop-blur supports-[backdrop-filter]:backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[1240px] items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
          <LogoMark />
          <span className="text-2xl font-semibold tracking-tight text-slate-900">
            IT Solution NYC
          </span>
        </Link>

        <nav className="hidden items-center gap-10 text-[15px] font-medium text-slate-600 lg:flex">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <Link href="/contact" className="text-[15px] font-medium text-slate-700 transition hover:text-slate-900">
            Login
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#7168FF] to-[#9D4EF5] px-6 py-3 text-[15px] font-semibold text-white shadow-[0_10px_25px_rgba(113,104,255,0.3)] transition hover:shadow-[0_12px_30px_rgba(113,104,255,0.38)]"
          >
            Let&apos;s Talk
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen((p) => !p)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-600 lg:hidden"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <CloseIcon /> : <BurgerIcon />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200/70 bg-white px-4 pb-6 pt-4 sm:px-6 lg:hidden">
          <nav className="flex flex-col gap-1 text-[15px] font-medium text-slate-700">
            {LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-lg px-3 py-2 hover:bg-slate-50"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <Link
              href="/contact"
              className="rounded-lg px-3 py-2 text-center text-[15px] font-medium text-slate-700 hover:bg-slate-50"
              onClick={() => setMobileOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#7168FF] to-[#9D4EF5] px-5 py-3 text-[15px] font-semibold text-white shadow-[0_8px_20px_rgba(113,104,255,0.28)]"
              onClick={() => setMobileOpen(false)}
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function LogoMark() {
  return (
    <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7C6CFF] via-[#8E60FF] to-[#B04CFF] text-lg font-semibold text-white shadow-[0_12px_28px_rgba(124,108,255,0.35)]">
      I
    </span>
  );
}

function BurgerIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5 5l10 10M15 5l-10 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
