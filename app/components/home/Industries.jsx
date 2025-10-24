"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    title: "Audit & Analysis",
    description: "Comprehensive analysis of your current digital presence and competitive landscape.",
  },
  {
    title: "Strategy Development",
    description: "Custom roadmap combining AI insights with proven marketing tactics.",
  },
  {
    title: "Implementation",
    description: "Execute campaigns across channels with continuous optimization.",
  },
  {
    title: "Growth & Scale",
    description: "Monitor performance, iterate strategies, and scale what works.",
  },
];

export default function Industries() {
  return (
    <section className="bg-[#f5f6ff] py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="bg-gradient-to-r from-[#566bff] via-[#7274ff] to-[#c057ff] bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-[46px]">
            How We Work
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-[17px] leading-7 text-[#555b78]">
            A strategic approach to digital growth and AI implementation
          </p>
        </div>

        <motion.div
          className="mt-16 grid gap-7 md:grid-cols-2 xl:grid-cols-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {STEPS.map((step, index) => (
            <motion.article
              key={step.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="flex h-full min-h-[250px] flex-col rounded-[28px] border border-[#e5e7ff] bg-white px-8 pb-10 pt-12 text-left shadow-[0_20px_60px_rgba(108,118,255,0.12)] transition-transform duration-200"
            >
              <div className="relative mb-6 flex h-16 w-16 items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#7569ff] to-[#a86eff] opacity-95 shadow-[0_12px_30px_rgba(117,105,255,0.32)]"></span>
                <span className="relative text-lg font-semibold text-white">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-[#161a35]">{step.title}</h3>
              <p className="mt-4 text-[15px] leading-7 text-[#5d6180]">{step.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
