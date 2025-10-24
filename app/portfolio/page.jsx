// app/portfolio/page.jsx (Regenerated to match screenshot)
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Portfolio of Results | itsolutionnyc.com",
  description:
    "Real businesses. Real growth. See how we deliver results across SEO, Google Ads, Social Media, Web/App and more.",
};

const IMG = {
  p1: "/images/project-1.webp",
  p2: "/images/project-2.webp",
  p3: "/images/project-3.webp",
  p4: "/images/project-4.webp",
};

const CASES = [
  {
    img: IMG.p1,
    title: "E‑commerce Fashion Retailer – Complete Digital Transformation",
    desc:
      "Transformed an offline fashion boutique into a thriving online business. Implemented comprehensive e‑commerce platform with integrated SEO strategy, achieving 340% organic traffic growth and 285% revenue increase in just 6 months; optimized product pages and analytics.",
    metrics: [
      ["Traffic Increase", "340%"],
      ["Revenue Growth", "285%"],
      ["Conv. Rate", "4.8%"],
    ],
    tags: ["E‑commerce", "SEO", "Conversion Optimization"],
  },
  {
    img: IMG.p2,
    title: "SaaS Startup – AI‑Powered Growth Engine",
    desc:
      "Built complete marketing infrastructure for B2B SaaS: lead scoring, automated sequences, and AI‑optimized campaigns. Generated 1,200+ qualified enterprise leads and $2M ARR in year one with 12.4% conversion rate.",
    metrics: [
      ["Qualified Leads", "1,200+"],
      ["ARR Achieved", "$2M"],
      ["Conv. Rate", "12.4%"],
    ],
    tags: ["AI Solutions", "Growth Strategy", "Marketing Automation"],
  },
  {
    img: IMG.p3,
    title: "Multi‑Location Restaurant Chain – Local SEO Domination",
    desc:
      "Executed comprehensive local SEO across 12 locations: optimized GBP, location landing pages, and hyper‑targeted social ads. +45K monthly GMB views, +156% foot traffic, and +220% online orders.",
    metrics: [
      ["Foot Traffic", "+156%"],
      ["Online Orders", "+220%"],
      ["GMB Views", "45K/mo"],
    ],
    tags: ["Local SEO", "Social Media", "Multi‑Location"],
  },
  {
    img: IMG.p4,
    title: "Enterprise Tech Company – Thought Leadership Campaign",
    desc:
      "Developed thought leadership for B2B tech: AI content, webinars, executive personal brands, and nurturing sequences. +850 enterprise leads, $4.2M pipeline value, 8.7% engagement rate.",
    metrics: [
      ["Enterprise Leads", "850+"],
      ["Engagement Rate", "8.7%"],
      ["Pipeline Value", "$4.2M"],
    ],
    tags: ["Social Media", "AI Content", "B2B Marketing"],
  },
  {
    img: IMG.p2,
    title: "Healthcare Provider Network – Performance Marketing Excellence",
    desc:
      "Implemented integrated Google Ads and SEO strategy across 6 locations. Ads for 40+ high‑intent keywords while improving SEO rankings; 400% appointment growth, 62% lower CPL.",
    metrics: [
      ["Appointments", "+400%"],
      ["Cost per Lead", "-62%"],
      ["Top Rankings", "24"],
    ],
    tags: ["Google Ads", "SEO", "Healthcare"],
  },
  {
    img: IMG.p1,
    title: "Luxury Real Estate – AI‑Powered Targeting",
    desc:
      "Launched premium audience targeting across Instagram, Facebook, and LinkedIn. Machine learning look‑alikes delivered 340 qualified leads and 520% engagement increase, driving $18M in property sales value.",
    metrics: [
      ["Property Sales", "$18M"],
      ["Qualified Leads", "340"],
      ["Engagement", "+520%"],
    ],
    tags: ["Social Media", "AI Targeting", "Luxury Marketing"],
  },
  {
    img: IMG.p3,
    title: "Online Education Platform – Scalable Growth Strategy",
    desc:
      "Data‑driven Google Ads + organic growth: scaled from 500 to 15,000 active students in 18 months with strong ROAS. Multi‑region campaigns and CRO.",
    metrics: [
      ["Student Growth", "500→15K"],
      ["ROAS", "8.5x"],
      ["Retention Rate", "42%"],
    ],
    tags: ["Growth Strategy", "Google Ads", "EdTech"],
  },
  {
    img: IMG.p4,
    title: "Professional Services Firm – Integrated Marketing Transformation",
    desc:
      "SEO overhaul + LinkedIn leadership + AI content to dominate search. 180% inquiries, 95% organic traffic growth, $125K case value avg.",
    metrics: [
      ["Inquiries", "+180%"],
      ["Organic Traffic", "+95%"],
      ["Case Value Avg", "$125K"],
    ],
    tags: ["SEO", "Social Media", "Professional Services"],
  },
];

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/80 px-2.5 py-1 text-[12px] font-semibold text-[#6f52ff] shadow-sm">
      {children}
    </span>
  );
}

function Metric({ value, label }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[15px] font-extrabold text-[#111827]">{value}</span>
      <span className="text-[12.5px] text-slate-500">{label}</span>
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <main className="bg-white">
      {/* HERO matching screenshot */}
      <section className="relative border-b border-slate-200/70 bg-gradient-to-b from-[#f4f6ff] via-[#f6f3ff] to-white">
        <div className="container py-12 text-center">
          <div className="mb-2 flex items-center justify-center"><Badge>Our Success Stories</Badge></div>
          <h1 className="h1 bg-gradient-to-r from-[#5e73ff] via-[#7f6dff] to-[#c057ff] bg-clip-text text-transparent">
            Portfolio of Results
          </h1>
          <p className="lead mx-auto mt-2 max-w-3xl text-[#6a6f90]">
            Real businesses. Real growth. See how we’ve helped companies across industries achieve
            exceptional results with our AI‑powered digital marketing strategies.
          </p>
        </div>
      </section>

      {/* CASE STUDIES GRID */}
      <section className="container pb-12 pt-8">
        <div className="grid gap-6 md:grid-cols-2">
          {CASES.map((c, i) => (
            <article
              key={i}
              className="overflow-hidden rounded-2xl border border-[#e7e9ff] bg-white shadow-[0_14px_34px_rgba(108,118,255,0.12)]"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                <Image src={c.img} alt={c.title} fill className="object-cover" sizes="(min-width:768px) 50vw, 100vw" />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-[16px] font-semibold text-slate-900">{c.title}</h3>
                <p className="mt-2 text-[13.5px] leading-6 text-slate-600">{c.desc}</p>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  {c.metrics.map(([label, val], idx) => (
                    <Metric key={idx} value={val} label={label} />
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span key={t} className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[12px] text-slate-600">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <section className="relative border-y border-slate-200/70 bg-gradient-to-b from-[#f2f4ff] via-[#f6f3ff] to-white">
        <div className="container py-12 text-center">
          <h3 className="text-[28px] font-extrabold tracking-tight text-transparent bg-gradient-to-r from-[#5e73ff] via-[#7f6dff] to-[#c057ff] bg-clip-text">
            Ready to Become Our Next Success Story?
          </h3>
          <p className="mx-auto mt-2 max-w-3xl text-[#6a6f90]">
            Let’s discuss how we can help you achieve similar results. Get a free marketing audit and
            growth strategy session.
          </p>
          <div className="mt-5">
            <Link href="/contact" className="btn-grad">Get Your Free Audit</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
