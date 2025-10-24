"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "How can AI improve my marketing results?",
    answer:
      "We deploy AI for creative testing, personalization, and support automation. Expect faster insights, smarter campaigns, and better conversion rates without extra manual work.",
  },
  {
    question: "What results can I expect and when?",
    answer:
      "Most clients see leading indicators like traffic quality, engagement, and booked calls within the first 30 days. Growth compounds as we iterate and scale high-performing initiatives.",
  },
  {
    question: "Do I need to sign a long-term contract?",
    answer:
      "No. We start with 90-day roadmaps to prove value first. When you are confident in the results, we can move into longer engagements or retainers.",
  },
  {
    question: "How do you measure success?",
    answer:
      "Success is tied to the KPIs you care about: pipeline, revenue, qualified leads, and CAC/LTV. We create dashboards and reports that make performance easy to follow.",
  },
  {
    question: "Can you work with my existing marketing team?",
    answer:
      "Absolutely. We slot in as an extension of your team, fill skill gaps, or take ownership of specific programs while collaborating on strategy and execution.",
  },
];

export default function Testimonial() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-24">
      <div className="container">
        <div className="text-center">
          <p className="text-[13px] font-semibold uppercase tracking-[0.35em] text-[#6c46ff]">
            FAQs
          </p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[#1d1b3f] sm:text-5xl">
            Answers to common questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-7 text-[#53537a]">
            If you still have questions after reading these, reach out and we will happily tailor a plan for you.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <article
                key={faq.question}
                className="overflow-hidden rounded-[24px] border border-[#ebe7ff] bg-white shadow-[0_16px_60px_rgba(108,70,255,0.07)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[16px] font-semibold text-[#1d1b3f]">{faq.question}</span>
                  <span className={`text-xl font-semibold text-[#6c46ff] transition ${isOpen ? "rotate-45" : ""}`}>
                    {isOpen ? "-" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-[15px] leading-7 text-[#53537a]">
                    {faq.answer}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
