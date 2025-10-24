"use client";

import Link from "next/link";
import { services, detailsHref } from "@/lib/services";
import { motion } from "framer-motion";

function ServiceIcon({ name, className = "h-7 w-7 text-white" }) {
  const key = (name || "").toLowerCase();

  switch (key) {
    case "code":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M16 18l6-6-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 6L2 12l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "cart":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="10" cy="20" r="1" fill="currentColor" />
          <circle cx="18" cy="20" r="1" fill="currentColor" />
        </svg>
      );
    case "rocket":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 2c2.5 0 4 1.5 4 1.5s1.5 1.5 1.5 4-1 4-1 4-2.5 1.5-4 4c-2.5 2.5-4 2.5-4 2.5s0-1.5 2.5-4c2.5-2.5 4-4 4-4s1.5-1.5 1.5-4S14.5 2 12 2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "chart":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M3 3v18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 13V7m6 10v-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "chat":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "gear":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 15.5A3.5 3.5 0 1112 8.5a3.5 3.5 0 010 7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09c.66 0 1.2-.43 1.51-1a1.65 1.65 0 00-.33-1.82L4.32 4.6A2 2 0 017.15 1.77l.06.06A1.65 1.65 0 009 2.16c.65.2 1.16.65 1.51 1V3a2 2 0 014 0v.09c.35-.35.86-.8 1.51-1 .5-.15 1.03-.02 1.45.4l.06.06A2 2 0 0120.23 4.6l-.06.06a1.65 1.65 0 00-.33 1.82c.3.57.85 1 1.51 1H21a2 2 0 010 4h-.09c-.66 0-1.2.43-1.51 1z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "bolt":
    case "zap":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
  }
}

export default function Services() {
  const visibleServices = services.slice(0, 6);

  return (
    <section className="bg-[#f5f6ff] py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="bg-gradient-to-r from-[#566bff] via-[#7274ff] to-[#c057ff] bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-[46px]">
            Our Services
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-[17px] leading-7 text-[#555b78]">
            Comprehensive digital marketing and AI solutions tailored to your business goals
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {visibleServices.map((service, index) => (
            <motion.article
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex h-full min-h-[220px] flex-col rounded-[30px] border border-[#e5e7ff] bg-white p-8 shadow-[0_18px_55px_rgba(108,118,255,0.12)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-[18px] bg-gradient-to-br from-[#7569ff] to-[#a86eff] shadow-[0_10px_25px_rgba(117,105,255,0.32)]">
                <ServiceIcon name={service.icon} className="h-7 w-7 text-white" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#121739]">
                <Link href={detailsHref(service.slug)} className="hover:underline">
                  {service.title}
                </Link>
              </h3>
              {(service.desc || service.short) && (
                <p className="mt-4 text-[15px] leading-7 text-[#5d6180]">
                  {service.desc || service.short}
                </p>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
