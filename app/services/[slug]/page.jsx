// app/services/[slug]/page.jsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getService, contactHref } from "@/lib/services";
import { SERVICE_CONTENT } from "@/lib/serviceContent";

export const dynamicParams = true;

// Pre-render known pages
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug || s.id }));
}

// SEO
export async function generateMetadata({ params }) {
  const { slug } = params;
  const s = getService(slug);
  if (!s) return { title: "Service not found" };

  const c = SERVICE_CONTENT[s.slug] || {};
  const description = c.hero?.sub || s.desc || s.short || s.title;

  return {
    title: `${s.title} | itsolutionnyc.com`,
    description,
  };
}

/* ---------- tiny atoms ---------- */

function Eyebrow({ children }) {
  return <span className="pill-grad text-[13px]">{children}</span>;
}

function CheckItem({ children }) {
  return (
    <li className="flex gap-3 leading-relaxed text-[#5d6180]">
      <svg className="mt-[2px] h-5 w-5 flex-none text-[#5f6dff]" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="11" stroke="#DDE1FF" strokeWidth="2" />
        <path d="M7 12l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>{children}</span>
    </li>
  );
}

function IconBadge({ name }) {
  const Emoji = () => {
    switch (name) {
      case "code":
        return <span>{"{"}</span>;
      case "cart":
        return <span>🛒</span>;
      case "rocket":
        return <span>🚀</span>;
      case "chart":
        return <span>📈</span>;
      case "chat":
        return <span>💬</span>;
      case "gear":
        return <span>⚙️</span>;
      case "zap":
        return <span>⚡</span>;
      default:
        return <span>★</span>;
    }
  };
  return (
    <div className="mr-3 inline-grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#7569ff] to-[#a86eff] text-lg text-white shadow-[0_10px_25px_rgba(117,105,255,0.32)]">
      <Emoji />
    </div>
  );
}

function toOfferItems(slug, c) {
  const presets = {
    seo: [
      ["Technical SEO", "Site architecture, speed, and structured data."],
      ["On-Page Optimization", "Keywords, meta, internal links, and UX."],
      ["Local SEO", "GBP, citations, and local link building."],
      ["Content Strategy", "Plans, briefs, and high‑value pages."],
      ["Link Building", "Safe, quality links and mentions."],
      ["SEO Analytics", "Reporting and optimization from data."],
    ],
    "google-ads": [
      ["Search Campaigns", "High‑intent queries with clean structure."],
      ["Display Advertising", "Awareness and retargeting at scale."],
      ["Performance Max", "Leverage Google’s AI across channels."],
      ["Shopping Campaigns", "Visual product ads for e‑commerce."],
      ["Remarketing", "Re‑engage visitors who didn’t convert."],
      ["Analytics & Optimization", "Bid, budget, and creative testing."],
    ],
    "social-media": [
      ["Strategy Development", "Clear pillars, voice, and goals."],
      ["Content Creation", "Posts, graphics, and short‑form video."],
      ["Community Management", "Engagement and response playbooks."],
      ["Social Advertising", "Paid boosts for proven winners."],
      ["Influencer Marketing", "Creator partnerships and UGC."],
      ["Analytics & Reporting", "Dashboards and insights."],
    ],
    "shopify-wordpress": [
      ["Shopify Development", "High‑converting, fast storefronts."],
      ["WordPress/WooCommerce", "Flexible, scalable business sites."],
      ["Custom Development", "Features tailored to your needs."],
      ["UX/UI Design", "Clean layouts that guide buyers."],
      ["Payment Integration", "Stripe, PayPal and more."],
      ["Store Optimization", "Speed, SEO, and CRO improvements."],
    ],
    "web-development": [
      ["Frontend (Next.js)", "Modern, fast UI components."],
      ["Backend APIs", "Node/Express with DB best‑practices."],
      ["Auth & Roles", "Secure access and permissions."],
      ["Performance & SEO", "Core Web Vitals and metadata."],
      ["CMS Setup", "Simple content updates for teams."],
      ["CI/CD & Analytics", "Ship safely and measure usage."],
    ],
    managed: [
      ["Roadmap & Planning", "Goals, KPIs, and priorities."],
      ["Sprint Delivery", "Ship features weekly."],
      ["CRO & SEO", "Continuous growth improvements."],
      ["Analytics & Reporting", "Clear results and next steps."],
      ["Experiments", "Test what moves the metrics."],
      ["Support & Maintenance", "Fast help with SLAs."],
    ],
  };

  if (presets[slug]) return presets[slug];

  const left = c.whatYouGet?.left || [];
  const right = c.whatYouGet?.right || [];
  const merged = [...left, ...right].slice(0, 6);
  return merged.map((line) => {
    const title = String(line).split(":")[0].split("(")[0].split("—")[0].split("-")[0].trim();
    return [title, line];
  });
}

function Stat({ value, label }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm">
      <div className="text-2xl font-extrabold tracking-tight text-slate-900">{value}</div>
      <div className="mt-1 text-[13px] text-slate-600">{label}</div>
    </div>
  );
}

function Summary({ title, children }) {
  return (
    <details className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm open:shadow">
      <summary className="cursor-pointer list-none">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-slate-900">{title}</h4>
          <span className="text-slate-400 transition group-open:rotate-180">⌄</span>
        </div>
      </summary>
      <div className="mt-3 text-slate-600">{children}</div>
    </details>
  );
}

/* ---------- page ---------- */

export default function ServiceDetails({ params }) {
  const { slug } = params;
  const s = getService(slug);
  if (!s) return notFound();

  const c = SERVICE_CONTENT[s.slug] || {};

  // accents & safe fallbacks
  const color = c.color || s.color || "#6c63ff";
  const light = "rgba(108,118,255,.10)";
  const gradient = `linear-gradient(180deg, #f4f6ff 0%, #f6f3ff 65%, #ffffff 100%)`;

  // content fallbacks
  const heroTitle = c.hero?.title || s.title;
  const heroSub = c.hero?.sub || s.desc || s.short || "";
  const badge = c.hero?.badge || s.title;
  const offer = toOfferItems(s.slug, c);
  const steps4 = (c.process || []).slice(0, 4);

  const ctaHeadingBySlug = {
    seo: "Ready to Rank Higher?",
    "google-ads": "Ready to Drive More Customers?",
    "social-media": "Ready to Grow Your Social Presence?",
    "shopify-wordpress": "Ready to Launch Your Store?",
    "web-development": "Ready to Launch Your Product?",
    managed: "Ready to Accelerate Your Growth?",
  };
  const ctaHeading = ctaHeadingBySlug[s.slug] || "Ready to Get Started?";

  const benefitsLeft = c.whatYouGet?.left || [
    "Production-ready Next.js app (App Router) with modern DX",
    "API layer (Node/Express) and MongoDB/Postgres",
    "Auth (Email/OTP, OAuth, SSO) and role permissions",
    "Performance: CDN images, caching, Lighthouse 95+ targets",
  ];

  const benefitsRight = c.whatYouGet?.right || [
    "Analytics: GA4 + server events, error & uptime monitoring",
    "SEO foundation: meta, OpenGraph, sitemaps, schema",
    "Optional headless CMS; accessible UI with Tailwind",
    "Clear docs, CI/CD, and handover training",
  ];

  const steps = c.process || [
    ["Plan", "Scope, user stories, success metrics."],
    ["Design", "Wireframes → design system / component library."],
    ["Build", "Features shipped in weekly sprints."],
    ["QA & Performance", "Accessibility, mobile, SEO, reliability."],
    ["Launch & Handover", "CI/CD, docs, training and support."],
  ];

  const plans = c.plans || [
    {
      title: "MVP",
      note: "4–6 weeks • $6k–$14k",
      bullets: ["Core flows, auth, basic CMS", "Clean, fast UI with Tailwind", "Launch & initial tracking"],
    },
    {
      title: "Growth build",
      note: "8–12 weeks • $18k–$45k",
      bullets: [
        "Role-based access, advanced analytics",
        "Integrations (payments, CRM, marketing)",
        "Performance & SEO hardening",
      ],
    },
  ];

  const faqs = c.faqs || [
    { q: "Is it SEO-friendly?", a: "Yes — server rendering, structured data, sitemaps, OpenGraph and fast pages." },
    { q: "Can you migrate my old site/app?", a: "Absolutely. We map content, preserve SEO signals and redirect URLs safely." },
    { q: "Do you support post-launch?", a: "Yes. Managed retainers for new features, testing, and performance." },
    { q: "What will I need to provide?", a: "Goals, examples you like, brand assets (logo/colors), and a main contact." },
  ];

  return (
    <article className="bg-white">
      {/* HERO */}
      <section className="relative border-b border-slate-200/70" style={{ backgroundImage: gradient }}>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(113,143,255,0.12),transparent_55%),radial-gradient(circle_at_85%_15%,rgba(198,137,255,0.13),transparent_50%)]" />
        <div className="container relative py-12">
          <div className="mb-4 flex items-center gap-2 text-sm text-[#6b73aa]">
            <Link href="/" className="hover:text-[#495298]">← Back to Home</Link>
            <span className="inline-flex items-center rounded-full bg-white/70 px-2.5 py-1 text-[12px] font-semibold text-[#6f52ff] shadow-sm">
              {badge}
            </span>
          </div>
          <div className="text-center">
            <div className="mb-3 inline-flex items-center justify-center">
              <IconBadge name={s.icon} />
              <h1 className="ml-1 bg-gradient-to-r from-[#566bff] via-[#7274ff] to-[#c057ff] bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-[44px]">
                {heroTitle}
              </h1>
            </div>
            {heroSub && <p className="lead mx-auto mt-1 max-w-3xl text-[#6a6f90]">{heroSub}</p>}

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link href={contactHref(s.id)} className="btn-grad">Get Started Today</Link>
              <Link href={contactHref(s.id)} className="btn-outline-grad">Schedule Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="container py-12">
        <h2 className="h2 text-center">What We Offer</h2>
        <div className="mx-auto mt-6 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {offer.map(([title, desc], i) => (
            <div key={i} className="rounded-[14px] border border-[#eceeff] bg-white p-5 shadow-[0_10px_24px_rgba(108,118,255,0.10)]">
              <div className="text-[15px] font-semibold text-[#111827]">{title}</div>
              <p className="mt-2 text-[13.5px] leading-6 text-[#6b7392]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* KEY BENEFITS */}
      <section className="border-y border-slate-200/70" style={{ backgroundColor: light }}>
        <div className="container py-12">
          <h2 className="h2 text-center">Key Benefits</h2>
          <div className="mx-auto mt-6 grid max-w-5xl gap-8 md:grid-cols-2">
            <ul className="space-y-3">
              {benefitsLeft.map((x, i) => (
                <CheckItem key={`kb-l-${i}`}>{x}</CheckItem>
              ))}
            </ul>
            <ul className="space-y-3">
              {benefitsRight.map((x, i) => (
                <CheckItem key={`kb-r-${i}`}>{x}</CheckItem>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="bg-white">
        <div className="container py-12">
          <h2 className="h2 text-center">Our Process</h2>
          <ol className="mx-auto mt-8 grid max-w-5xl gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {steps4.map(([title, desc], i) => (
              <li
                key={i}
                className="relative rounded-[16px] border border-[#eceeff] bg-white p-6 text-center shadow-[0_12px_28px_rgba(108,118,255,0.10)]"
              >
                <div className="mx-auto mb-4 grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#7569ff] to-[#a86eff] text-sm font-bold text-white shadow">
                  {i + 1}
                </div>
                <h4 className="font-semibold text-[#121739]">{title}</h4>
                <p className="mt-1 text-[13.5px] leading-6 text-[#5d6180]">{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA BANNER (before footer) */}
      <section className="relative border-t border-slate-200/70 bg-gradient-to-b from-[#f2f4ff] via-[#f6f3ff] to-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(113,143,255,0.12),transparent_55%),radial-gradient(circle_at_85%_15%,rgba(198,137,255,0.13),transparent_50%)]" />
        <div className="container relative py-12 text-center">
          <h3 className="text-[28px] font-extrabold tracking-tight text-transparent bg-gradient-to-r from-[#5e73ff] via-[#7f6dff] to-[#c057ff] bg-clip-text">
            {ctaHeading}
          </h3>
          <p className="mx-auto mt-2 max-w-3xl text-[#6a6f90]">
            Get a free consultation and discover the next steps to reach your goals.
          </p>
          <div className="mt-5">
            <Link href={contactHref(s.id)} className="btn-grad">Get Free Consultation</Link>
          </div>
        </div>
      </section>

      {/* NOTE: no final CTA block — you already show a global CTA in the footer. */}
    </article>
  );
}
