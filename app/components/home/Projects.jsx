"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const PACKAGES = [
  {
    tier: "Starter Package",
    price: "$2,500 / month",
    blurb: "Essential digital marketing for small businesses.",
    bullets: [
      "SEO optimization & monitoring",
      "Google Ads management",
      "Social media presence",
      "Monthly performance reports",
      "Email & chat support",
    ],
    highlight: false,
  },
  {
    tier: "Growth Package",
    price: "$5,000 / month",
    blurb: "Complete marketing ecosystem with AI automation.",
    bullets: [
      "AI-powered digital experiences",
      "Ad-powered campaign optimizations",
      "Advanced analytics & insights",
      "Multi-channel advertising",
      "Dedicated account manager",
      "Custom AI solutions",
    ],
    highlight: true,
  },
];

export default function Projects() {
  return (
    <section className="bg-[#f6f3ff] py-24">
      <div className="container">
        <div className="text-center">
          <p className="text-[13px] font-semibold uppercase tracking-[0.35em] text-[#6c46ff]">
            Service Packages
          </p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[#1d1b3f] sm:text-5xl">
            Customized plans for every growth stage
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-7 text-[#53537a]">
            Choose the package that matches your goals. Every engagement includes a dedicated strategist, transparent reporting, and ongoing optimization.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {PACKAGES.map((pkg, index) => (
            <motion.article
              key={pkg.tier}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
              whileHover={{ y: -5, scale: pkg.highlight ? 1.03 : 1.02 }}
              className={`relative rounded-[28px] border border-[#e1d9ff] bg-white p-8 shadow-[0_22px_70px_rgba(108,70,255,0.1)] transition-transform`}
            >
              {pkg.highlight && (
                <motion.span
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  className="absolute -top-3 right-6 inline-flex items-center rounded-full bg-[#6c46ff] px-3 py-1 text-[12px] font-semibold text-white shadow-lg"
                >
                  Most Popular
                </motion.span>
              )}

              <h3 className="text-2xl font-extrabold text-[#1d1b3f]">{pkg.tier}</h3>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-[#6c46ff]">
                {pkg.price}
              </p>
              <p className="mt-3 text-[15px] leading-7 text-[#53537a]">{pkg.blurb}</p>

              <ul className="mt-6 space-y-3">
                {pkg.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-[#1d1b3f]">
                    <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#f0ecff] text-[#6c46ff]">
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden>
                        <path d="M6.5 11.2L3.3 8l1.1-1.1 2.1 2.1 5.2-5.2L12.9 5z" fill="currentColor" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={`/contact?plan=${encodeURIComponent(pkg.tier.toLowerCase().replace(/\s+/g, "-"))}`}
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
                  pkg.highlight
                    ? "bg-[#6c46ff] text-white shadow-[0_18px_40px_rgba(108,70,255,0.26)] hover:bg-[#5b3ae0]"
                    : "border border-[#d6caff] text-[#6c46ff] hover:border-[#bea9ff]"
                }`}
              >
                Start with {pkg.tier}
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
