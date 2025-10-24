"use client";

import { motion } from "framer-motion";

const FEATURES = [
  {
    title: "AI-Powered Insights",
    desc: "Leverage machine learning to predict trends and optimize campaigns in real time.",
    icon: "brain",
  },
  {
    title: "Data-Driven Decisions",
    desc: "Every strategy is backed by comprehensive analytics and market research.",
    icon: "analytics",
  },
  {
    title: "Multi-Channel Expertise",
    desc: "Integrated strategies across SEO, PPC, social, email, and content for cohesive growth.",
    icon: "network",
  },
  {
    title: "Transparent Reporting",
    desc: "Real-time dashboards and detailed monthly reports showing clear ROI.",
    icon: "report",
  },
  {
    title: "Dedicated Support",
    desc: "Your success team stays available to optimize and scale your campaigns.",
    icon: "support",
  },
  {
    title: "Proven Results",
    desc: "Track record of increasing traffic, leads, and revenue for diverse brands.",
    icon: "target",
  },
];

export default function Whychoseus() {
  return (
    <section className="bg-[#f5f6ff] py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="bg-gradient-to-r from-[#566bff] via-[#7274ff] to-[#c057ff] bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-[46px]">
            Why Choose Us
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-[17px] leading-7 text-[#555b78]">
            Data-driven strategies powered by AI technology that deliver measurable results
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex h-full min-h-[200px] flex-col rounded-[30px] border border-[#e5e7ff] bg-white p-8 shadow-[0_18px_55px_rgba(108,118,255,0.12)] hover:shadow-lg transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#5e73ff] via-[#8372ff] to-[#c057ff] text-white shadow-[0_15px_35px_rgba(110,120,255,0.35)]">
                <FeatureIcon name={feature.icon} />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-[#121739]">{feature.title}</h3>
              <p className="mt-4 text-[15px] leading-7 text-[#5d6180]">{feature.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureIcon({ name }) {
  switch (name) {
    case "brain":
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M9.5 3.5a2.5 2.5 0 00-5 0v4a2.5 2.5 0 005 0m0-4v13a2.5 2.5 0 01-5 0M9.5 7.5H11a2 2 0 012 2v6m1.5-12a2.5 2.5 0 015 0v4a2.5 2.5 0 01-5 0m0-4v13a2.5 2.5 0 005 0m-5-9.5H13a2 2 0 00-2 2V18"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.9"
          />
        </svg>
      );
    case "analytics":
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M4 4v16h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
          <path d="M8.5 14.5l3-3 3 2 4-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="8.5" cy="14.5" r="1.2" fill="currentColor" />
          <circle cx="11.5" cy="11.5" r="1.2" fill="currentColor" />
          <circle cx="14.5" cy="13.5" r="1.2" fill="currentColor" />
          <circle cx="18.5" cy="8.5" r="1.2" fill="currentColor" />
        </svg>
      );
    case "network":
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="5" r="2.2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="5" cy="14.5" r="2.2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="19" cy="14.5" r="2.2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M11.2 6.8l-4 5.6m5.6-5.6l4 5.6m-4 1.2l-3.2 4.4m3.2-4.4l3.2 4.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "report":
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="6" y="4" width="12" height="16" rx="2.2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M9 8h6M9 11.5h6M9 15h3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M13.5 3.5v2.5h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
        </svg>
      );
    case "support":
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M6 15.5v-4a6 6 0 1112 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="3.5" y="11" width="3" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
          <rect x="17.5" y="11" width="3" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 17.5v2M9.5 21h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "target":
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="6.5" stroke="currentColor" strokeWidth="1.5" opacity="0.9" />
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 9v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 12h2m12 0h2M12 4v2m0 12v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
        </svg>
      );
    default:
      return null;
  }
}
