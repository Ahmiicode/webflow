"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="bg-white py-24">
      <div className="container flex justify-center">
        <motion.div
          className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-[#f0e6ff] via-white to-[#fbe8ff] p-12 text-center shadow-[0_24px_80px_rgba(108,70,255,0.12)]"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <p className="text-[13px] font-semibold uppercase tracking-[0.35em] text-[#6c46ff]">
            Ready to Transform Your Digital Presence?
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#1d1b3f] sm:text-[36px]">
            Get a free marketing audit and personalized growth strategy.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-7 text-[#53537a]">
            No commitment required. We will review your current performance and deliver quick wins you can start implementing right away.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#6c46ff] px-8 py-3 text-[15px] font-semibold text-white shadow-[0_18px_40px_rgba(108,70,255,0.28)] transition hover:bg-[#5b3ae0]"
            >
              Get Free Marketing Audit
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-[#d7cbff] px-8 py-3 text-[15px] font-semibold text-[#6c46ff] transition hover:border-[#bea9ff]"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
