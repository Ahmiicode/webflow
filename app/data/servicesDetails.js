// /data/servicesDetails.js
// Keys MUST match the slug in the URL, e.g. /services/web-development → "web-development"

const servicesDetails = {
  "web-development": {
    title: "Web & App Development (Next.js / MERN)",
    tagline: "Fast, secure and scalable web apps that convert.",
    heroImg: "/images/services/mern/hero.jpg",
    ctaLabel: "Get a free tech plan",
    bullets: [
      "Next.js, React, Node.js, MongoDB (MERN)",
      "Dashboards, booking portals, APIs & integrations",
      "Performance, accessibility & SEO baked in",
      "CICD + best practices for scale",
    ],
    faqs: [
      {
        q: "How do you handle performance?",
        a: "We use SSR/ISR in Next.js, code-splitting, image optimization and UI-level profiling to keep LCP and TTI excellent.",
      },
      {
        q: "Can you migrate my existing app?",
        a: "Yes—monolith to micro-frontends, or legacy stacks to modern React/Next.js with minimal downtime.",
      },
    ],
  },

  seo: {
    title: "SEO (Local & Technical)",
    tagline: "Rank for intent and convert more organic traffic.",
    heroImg: "/images/services/seo/hero.jpg",
    ctaLabel: "Request a free audit",
    bullets: [
      "Technical audits, link architecture, Core Web Vitals",
      "On-page SEO, schema & content strategy",
      "Local SEO & Google Business Profile",
      "LLM-assisted content workflows",
    ],
    faqs: [
      {
        q: "Do you provide content?",
        a: "Yes—briefs, outlines and finished drafts with brand voice; we combine human editing + AI tools for speed.",
      },
      {
        q: "How long to see results?",
        a: "Most sites see movement in 4–8 weeks; competitive queries can take longer. We set realistic targets up front.",
      },
    ],
  },

  "google-ads": {
    title: "Google Ads (Search / PMAX)",
    tagline: "ROAS-first campaigns with accurate tracking.",
    heroImg: "/images/services/ads/hero.jpg",
    ctaLabel: "Get a ROAS plan",
    bullets: [
      "Search, PMAX, Shopping & Remarketing",
      "Server-side tracking (GA4 + GTM + CAPI)",
      "Keyword control + structured testing",
      "Weekly reporting & iterative scaling",
    ],
    faqs: [
      {
        q: "Do you rebuild existing accounts?",
        a: "If needed—yes. We often rebuild structure to reduce overlap, tighten match types, and improve data quality.",
      },
    ],
  },

  "social-media": {
    title: "Social Media Management",
    tagline: "Consistent content and community that drives growth.",
    heroImg: "/images/services/social/hero.jpg",
    ctaLabel: "Plan my content",
    bullets: [
      "Content calendar & creative production (UGC included)",
      "Platform-native formats (Reels, Shorts, carousels)",
      "Comment/DM handling & community growth",
      "Performance reporting & iteration",
    ],
    faqs: [
      {
        q: "Do you also run paid social?",
        a: "Yes. We run Meta/TikTok ads and use UGC + hooks testing to find efficient winners.",
      },
    ],
  },

  managed: {
    title: "Managed Service Solution",
    tagline: "Hands-off growth with a dedicated team.",
    heroImg: "/images/services/managed/hero.jpg",
    ctaLabel: "Talk to a strategist",
    bullets: [
      "Monthly roadmap & execution",
      "Marketing + development + analytics",
      "Single point of contact & clear SLAs",
      "Transparent reporting",
    ],
    faqs: [
      {
        q: "What’s the minimum term?",
        a: "Month-to-month, but we recommend 90 days to fully implement and optimize.",
      },
    ],
  },

  business: {
    title: "Business Solutions",
    tagline: "From idea to launch—done with you or done for you.",
    heroImg: "/images/services/business/hero.jpg",
    ctaLabel: "Start a project",
    bullets: [
      "Product strategy & MVP scope",
      "Branding, website, funnels & CRM",
      "Automation across ops and marketing",
      "KPI dashboards & decision support",
    ],
    faqs: [
      {
        q: "Can you help with funding decks?",
        a: "Absolutely—one-pagers, pitch decks and clickable prototypes to communicate your value quickly.",
      },
    ],
  },
};

export default servicesDetails;
