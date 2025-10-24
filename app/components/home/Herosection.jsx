"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const STATS = [
  { value: "7+", label: "Years Experience", sublabel: "Industry expertise" },
  { value: "2000+", label: "Projects Delivered", sublabel: "Marketing & AI solutions" },
  { value: "5.0★", label: "Client Rating", sublabel: "Trusted partner" },
];

export default function Herosection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f4f6ff] via-[#f6f3ff] to-[#f5f0ff]">
      {/* Gradient backgrounds */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(113,143,255,0.12),transparent_55%),radial-gradient(circle_at_85%_15%,rgba(198,137,255,0.13),transparent_50%),radial-gradient(circle_at_50%_80%,rgba(154,125,255,0.12),transparent_52%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.35)_1px,transparent_1.5px)] bg-[length:48px_48px] opacity-[0.35]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-28 pt-24 text-center sm:px-6">
        {/* Floating motion wrapper */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Tag */}
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#7a63ff] to-[#b15bff] px-7 py-2 text-sm font-semibold text-white shadow-[0_18px_34px_rgba(122,99,255,0.35)]"
          >
            Digital Marketing & AI Solutions
          </motion.span>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
            className="mx-auto mt-7 max-w-4xl text-4xl font-extrabold leading-[1.06] text-[#273056] sm:text-[50px] lg:text-[60px]"
          >
            <span className="block bg-gradient-to-r from-[#466cff] via-[#5f6fff] to-[#845bff] bg-clip-text text-transparent">
              Grow Your Business with
            </span>
            <span className="mt-1 block bg-gradient-to-r from-[#845bff] via-[#a05cff] to-[#c25aff] bg-clip-text text-transparent">
              AI-Powered Marketing
            </span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mx-auto mt-6 max-w-3xl text-[18px] leading-8 text-[#646a8b]"
          >
            Transform your digital presence with cutting-edge AI technology and data-driven marketing strategies that deliver real results.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.9 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#4c63ff] to-[#9855ff] px-10 py-3.5 text-[15px] font-semibold text-white shadow-[0_22px_48px_rgba(84,104,255,0.35)] transition hover:shadow-[0_24px_54px_rgba(84,104,255,0.4)] hover:scale-[1.03]"
            >
              Get Free Growth Plan
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#7582ff] px-10 py-3.5 text-[15px] font-semibold text-[#4852d8] shadow-[0_16px_34px_rgba(121,130,255,0.18)] transition hover:border-[#5f6aff] hover:text-[#3d49c6] hover:scale-[1.03]"
            >
              Let&apos;s Talk
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3"
          >
            {STATS.map((stat) => (
              <motion.div
                key={stat.label}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center rounded-[26px] border border-white/60 bg-gradient-to-br from-white via-[#f8f6ff] to-[#f0ecff] px-7 py-7 text-center shadow-[0_20px_46px_rgba(97,110,255,0.14)] transition-transform duration-200"
              >
                <p className="bg-gradient-to-r from-[#5a69ff] via-[#7864ff] to-[#a95bff] bg-clip-text text-[30px] font-extrabold leading-none text-transparent">
                  {stat.value}
                </p>
                <p className="mt-2 text-[15px] font-semibold text-[#252a48]">{stat.label}</p>
                <p className="mt-1 text-[12px] text-[#7b81a1]">{stat.sublabel}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
