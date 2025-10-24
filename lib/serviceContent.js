// lib/serviceContent.js
// Plain-English service content + long FAQ sets for each service.
// Works with your existing /services/[slug] page template.

const b = (arr) => arr; // tiny helper so the lists are easy to read

export const SERVICE_CONTENT = {
  /* ------------------------------------------------------------------
   * Web / App Development
   * ------------------------------------------------------------------ */
  "web-development": {
    color: "#2563EB", // blue
    hero: {
      badge: "Web & App Development",
      title: "Build a fast website or app that grows with your business",
      sub: "We design and build websites and web apps that load quickly, look great, and are simple to update. Clear set-up, clean handover.",
    },
    whatYouGet: {
      intro: "Everything you need to launch quickly and scale with confidence.",
      left: b([
        "Modern website/app (Next.js) built for speed",
        "Secure login and user roles when you need them",
        "Clean content setup so your team can edit easily",
        "Strong performance: image/CDN, caching, best practices",
      ]),
      right: b([
        "Search-friendly structure (titles, schema, sitemaps)",
        "Analytics and error logs so you see what’s working",
        "Optional Headless CMS; simple, accessible UI",
        "Clear docs, training, and CI/CD for smooth releases",
      ]),
    },
    process: [
      ["Plan", "Agree goals, pages, and success measures."],
      ["Design", "Wireframes and a simple design system."],
      ["Build", "We ship features weekly and keep you updated."],
      ["QA & Speed", "Mobile checks, accessibility, and speed fixes."],
      ["Launch & Handover", "Training, docs, and a smooth go-live."],
    ],
    pricingNote: "Exact price depends on scope and integrations. These are typical starting points.",
    pricingFoot: "Need ongoing updates? Add a monthly support plan anytime.",
    plans: [
      {
        title: "Start (MVP)",
        note: "4–6 weeks • $6k–$14k",
        bullets: b(["Core pages and flows", "Basic login or forms", "Launch + basic tracking"]),
      },
      {
        title: "Grow",
        note: "8–12 weeks • $18k–$45k",
        bullets: b(["Advanced roles & dashboards", "Integrations (payments/CRM)", "SEO & performance hardening"]),
      },
    ],
    faqs: [
      { q: "Will my site be fast on mobile?", a: "Yes. We optimize images, fonts, and caching to hit strong Core Web Vitals." },
      { q: "Can my team edit pages without a developer?", a: "Yes. We set up a simple CMS or content blocks your team can update." },
      { q: "Do you migrate content from my old site?", a: "Yes. We map and import content and set safe redirects." },
      { q: "What about SEO?", a: "We include clean URLs, metadata, schema, sitemaps, and fast loading by default." },
      { q: "Do you provide designs?", a: "Yes. We create simple, modern designs aligned to your brand and audience." },
      { q: "Can we add features later?", a: "Absolutely. We build in a way that lets you add features over time." },
      { q: "How do you handle security?", a: "We use well-supported libraries, environment secrets, and least-privilege access." },
      { q: "Do you integrate with payments or a CRM?", a: "Yes. Stripe, HubSpot, Salesforce, and others." },
      { q: "How will we track results?", a: "We set up GA4 (and optional server events) so you can see what works." },
      { q: "Do you provide training?", a: "Yes—short videos and docs so your team is comfortable updating content." },
      { q: "What happens if something breaks?", a: "We include a warranty window and offer support retainers for peace of mind." },
      { q: "Who owns the code?", a: "You do. All code and assets are handed over to your accounts." },
      { q: "Can you work with our designer or devs?", a: "Yes. We’re happy to collaborate and follow your processes." },
    ],
  },

  /* ------------------------------------------------------------------
   * Shopify & WordPress
   * ------------------------------------------------------------------ */
  "shopify-wordpress": {
    color: "#22C55E", // green
    hero: {
      badge: "Shopify & WordPress",
      title: "Sell more and load faster with a tidy store or business site",
      sub: "We improve speed, design, and checkout flow. Clean setup, clear tracking, and better conversions.",
    },
    whatYouGet: {
      intro: "From quick wins to full rebuilds—done in a practical, no-drama way.",
      left: b([
        "Speed fixes (images, scripts, caching)",
        "Shopify sections or clean WordPress blocks",
        "Conversion tracking and simple dashboards",
        "Product feeds and pixels set up correctly",
      ]),
      right: b([
        "On-page SEO and schema basics",
        "Upsells, bundles, and A/B test ideas",
        "Theme cleanup and plugin health check",
        "How-to videos so your team can manage",
      ]),
    },
    process: [
      ["Audit", "Find slow spots and easy wins."],
      ["Design", "Clear layouts that guide buyers."],
      ["Build", "Sections, blocks, and tracking."],
      ["Launch", "Final SEO pass and training."],
    ],
    pricingNote: "Simple fixes are quick. Custom sections or headless add time.",
    pricingFoot: "We can continue monthly with CRO and SEO improvements.",
    plans: [
      { title: "Speed & Setup", note: "2–3 weeks • $3k–$7k", bullets: b(["Speed and UX fixes", "Conversion tracking", "SEO basics"]) },
      {
        title: "Custom Store/Site",
        note: "4–8 weeks • $10k–$25k",
        bullets: b(["Custom sections/blocks", "Feeds & marketing setup", "CRO roadmap"]),
      },
    ],
    faqs: [
      { q: "Can you work with my current theme?", a: "Yes, we improve what you have or add clean new sections." },
      { q: "Will my rankings drop during changes?", a: "We keep URLs stable, add redirects if needed, and monitor Search Console." },
      { q: "Do you set up Google Merchant Center?", a: "Yes—feeds, policies, and error fixes." },
      { q: "Can you migrate from WooCommerce to Shopify?", a: "Yes. We move products, content, customers, and preserve SEO." },
      { q: "Do you remove unnecessary apps/plugins?", a: "Yes. Fewer, better tools make your site faster and easier to maintain." },
      { q: "Can you help with reviews and UGC?", a: "Yes—apps, imports, and best-practice display for social proof." },
      { q: "Will I get a style guide?", a: "We’ll document colors, spacing, and components so new pages look consistent." },
      { q: "Can we do multi-language?", a: "Yes—common translation plugins and hreflang setup." },
      { q: "Do you handle taxes/shipping setup?", a: "We guide you through common settings; your accountant keeps rules current." },
      { q: "Can I edit pages without breaking layout?", a: "Yes—reusable blocks/sections with safe guardrails." },
      { q: "Will you train my team?", a: "We include quick videos so your staff is confident managing the store." },
      { q: "Do you help with returns or subscriptions?", a: "Yes—common apps and flows for both." },
    ],
  },

  /* ------------------------------------------------------------------
   * SEO (Local & Technical)
   * ------------------------------------------------------------------ */
  seo: {
    color: "#10B981", // emerald
    hero: {
      badge: "SEO (Local & Technical)",
      title: "Show up higher in search and turn visits into leads",
      sub: "Fix the site, publish useful pages, and earn trusted links. Track what matters: calls, forms, and sales.",
    },
    whatYouGet: {
      intro: "We improve how Google understands, crawls, and ranks your site.",
      left: b([
        "Technical audit and fixes (speed, indexing)",
        "Better page structure and internal links",
        "Local SEO: Google Business Profile & citations",
        "Helpful schema (FAQ, product, business)",
      ]),
      right: b([
        "Content plan and clear briefs",
        "Competitor gap analysis and clusters",
        "Only safe, quality link tactics",
        "Simple dashboards with real KPIs",
      ]),
    },
    process: [
      ["Audit", "We find issues that block growth."],
      ["Fix", "Quick technical wins and speed bumps."],
      ["Content", "Publish useful pages that answer search intent."],
      ["Authority", "Earn mentions and links safely."],
      ["Measure", "See rankings and leads in one place."],
    ],
    pricingNote: "Results stack over time—most wins arrive between months 2–6.",
    pricingFoot: "We offer monthly plans or one-off technical lifts.",
    plans: [
      { title: "Fix First", note: "2–4 weeks • $2k–$6k", bullets: b(["Technical fixes", "Speed boosts", "Indexing health"]) },
      {
        title: "Ongoing SEO",
        note: "3+ months • $2.5k–$6k /mo",
        bullets: b(["Content briefs & pages", "Safe link building", "Rank/lead dashboards"]),
      },
    ],
    faqs: [
      { q: "How long until we see movement?", a: "Technical wins can help in weeks; content/links build over 3–6 months." },
      { q: "Do you write content?", a: "We can write for you or brief your writers with outlines and examples." },
      { q: "Can you help us get reviews?", a: "Yes—simple review flows improve local trust and map rankings." },
      { q: "Will you fix Core Web Vitals?", a: "We tackle layout shift, blocking scripts, and image/config issues." },
      { q: "Do you work with multi-location businesses?", a: "Yes—location pages, GBP profiles, and local citations." },
      { q: "Do you do backlinks?", a: "Yes—but only white-hat: PR, resources, partnerships. No spam." },
      { q: "What CMS is best for SEO?", a: "Any is fine when configured well. We work with WP, Shopify, and headless." },
      { q: "Can you recover from a traffic drop?", a: "We audit changes, fixes, and content gaps; many sites recover." },
      { q: "Will keyword rankings be shared?", a: "Yes, along with traffic, leads, and revenue—not just vanity metrics." },
      { q: "Do you track phone calls?", a: "Yes—call tracking with source tagging is available." },
      { q: "Can you help with international SEO?", a: "Yes—hreflang, regional content, and ccTLD/subfolder strategies." },
      { q: "Do you work with our PR team?", a: "Gladly—joint efforts improve links and brand visibility." },
    ],
  },

  /* ------------------------------------------------------------------
   * Google Ads (Search/PMAX)
   * ------------------------------------------------------------------ */
  "google-ads": {
    color: "#F59E0B", // amber
    hero: {
      badge: "Google Ads (Search & PMAX)",
      title: "Get quality leads and sales with clean tracking and smart testing",
      sub: "We set up conversions properly, build clear campaigns, and scale only what earns a return.",
    },
    whatYouGet: {
      intro: "No mystery. You’ll know where money goes and what it brings back.",
      left: b([
        "Account audit and tidy rebuild if needed",
        "Accurate conversions (with server-side options)",
        "Search, PMAX, and remarketing structure",
        "Query control: negatives and match strategy",
      ]),
      right: b([
        "Creative testing plan for ads and assets",
        "Budget split by ROAS/CAC targets",
        "Landing page feedback loops",
        "Weekly reports with next steps",
      ]),
    },
    process: [
      ["Audit", "Fix tracking and wasted spend."],
      ["Rebuild", "Simple, clean campaigns that match intent."],
      ["Test", "Try new ads, audiences, and bids each week."],
      ["Scale", "Push budget only to proven winners."],
    ],
    pricingNote: "We plan budgets around your CAC/ROAS goals.",
    pricingFoot: "Optional monthly management available.",
    plans: [
      { title: "Fix & Launch", note: "2–3 weeks • $2.5k–$5k", bullets: b(["Tracking cleanup", "Search + PMAX setup", "First test plan"]) },
      {
        title: "Manage & Grow",
        note: "Ongoing • $1.5k–$4k /mo",
        bullets: b(["Weekly optimizations", "Creative testing", "ROI dashboards"]),
      },
    ],
    faqs: [
      { q: "What budget should we start with?", a: "Enough to get 20–40 conversions/month for learning. We’ll guide you." },
      { q: "Is PMAX right for us?", a: "Often yes, combined with Search. We test and keep only what wins." },
      { q: "How do you track real leads?", a: "We set up form, call, and purchase conversions—clean and deduped." },
      { q: "Do you help with landing pages?", a: "Yes—quick fixes or full builds to boost conversion rate." },
      { q: "Will we see search terms?", a: "Yes, and we use negatives to cut waste." },
      { q: "How fast can we scale?", a: "We scale once CPR/ROAS is consistent, not before." },
      { q: "Do you manage shopping feeds?", a: "Yes—Merchant Center setup, errors, and optimization." },
      { q: "Can you track offline deals?", a: "Yes—CRM integrations and enhanced conversions." },
      { q: "Do you do remarketing?", a: "Yes—site visitors, cart abandon, and customer lists." },
      { q: "How often will we get updates?", a: "Weekly summaries with actions and results." },
      { q: "Can you work with our in-house team?", a: "Yes—share access and we align on the playbook." },
      { q: "Do you run Microsoft Ads too?", a: "If it fits—accounts often import cleanly from Google Ads." },
    ],
  },

  /* ------------------------------------------------------------------
   * Social Media Management
   * ------------------------------------------------------------------ */
  "social-media": {
    color: "#6366F1", // indigo
    hero: {
      badge: "Social Media Management",
      title: "Post consistent content that feels native and drives results",
      sub: "We plan, produce, and publish content your audience actually wants—tied to real goals like leads and sales.",
    },
    whatYouGet: {
      intro: "Less guessing, more repeatable wins.",
      left: b([
        "Content calendar and brand voice guide",
        "Creator briefs and UGC coordination",
        "Editing and repurposing across platforms",
        "Community replies with simple playbooks",
      ]),
      right: b([
        "Attribution and link tracking set up right",
        "Boosted posts / Spark ads for winners",
        "Monthly reporting and next steps",
        "Crisis plan and response templates",
      ]),
    },
    process: [
      ["Strategy", "Pick pillars, tone, and goals."],
      ["Production", "Record and edit in efficient batches."],
      ["Distribution", "Post natively and repurpose smartly."],
      ["Improve", "Test hooks and CTAs; keep what works."],
    ],
    pricingNote: "Price depends on platforms, post volume, and video needs.",
    pricingFoot: "Paid social add-ons available.",
    plans: [
      { title: "Essentials", note: "Monthly • $2k–$4k", bullets: b(["3–4 posts/week", "Light UGC", "Monthly reporting"]) },
      { title: "Growth", note: "Monthly • $5k–$9k", bullets: b(["Daily posting", "UGC program", "Attribution + paid boosts"]) },
    ],
    faqs: [
      { q: "Which platforms do you support?", a: "Instagram, TikTok, X/Twitter, LinkedIn, and YouTube." },
      { q: "Do you make the content?", a: "Yes—scripts, filming guidelines, editing, captions, and posting." },
      { q: "Who replies to comments and DMs?", a: "We can, or we provide scripts and alerts for your team." },
      { q: "How do we measure success?", a: "Growth, reach, clicks, and downstream leads/sales—not just likes." },
      { q: "Can you use our team on camera?", a: "Yes—we’ll coach them for short, natural clips." },
      { q: "Do you run giveaways or promos?", a: "Yes—with clear rules and measurable goals." },
      { q: "Can you handle negative comments?", a: "We use a calm, helpful tone and escalate serious cases." },
      { q: "What about content approvals?", a: "We batch previews so you approve once, not daily." },
      { q: "Can we re-use content in ads?", a: "Definitely—UGC often performs well in paid." },
      { q: "Do you localize content?", a: "We tailor language and examples by market where needed." },
      { q: "Will we own all the assets?", a: "Yes. All footage, edits, and files are yours." },
      { q: "Can you work with our influencer partners?", a: "Yes—briefs, whitelisting, and usage rights." },
    ],
  },

  /* ------------------------------------------------------------------
   * Managed Service Solution
   * ------------------------------------------------------------------ */
  managed: {
    color: "#6C63FF", // violet
    hero: {
      badge: "Managed Service",
      title: "One flexible team for design, development, and growth",
      sub: "Keep momentum with a calm, reliable crew. We plan, build, and optimize every week so you don’t juggle vendors.",
    },
    whatYouGet: {
      intro: "A single partner who ships features and results—not just slides.",
      left: b(["Roadmap planning and backlog grooming", "Sprints for product and website updates", "SEO, analytics, and CRO"]),
      right: b(["Weekly standups and reports", "Quarterly planning and reviews", "Fast support with clear SLAs"]),
    },
    process: [
      ["Kickoff", "Agree goals, KPIs, and priorities."],
      ["Sprints", "Ship work every week—no long stalls."],
      ["Review", "Show progress and choose next bets."],
    ],
    pricingNote: "Retainer size matches your desired speed.",
    pricingFoot: "Pause or scale up with 30-day notice.",
    plans: [
      { title: "Core Team", note: "Monthly • $6k–$10k", bullets: b(["Set sprint capacity", "Mixed skills", "Roadmap management"]) },
      {
        title: "Scale Team",
        note: "Monthly • $12k–$20k",
        bullets: b(["More capacity", "Advanced analytics and QA", "Faster delivery cadence"]),
      },
    ],
    faqs: [
      { q: "What roles are included?", a: "A mix of PM, designer, developer, and growth specialist based on needs." },
      { q: "How are priorities set?", a: "Shared backlog with weekly grooming and clear owners." },
      { q: "How do we communicate?", a: "Slack for quick chats, weekly calls, and a simple dashboard." },
      { q: "Can you work with our devs/marketers?", a: "Yes—think of us as extra hands that follow your processes." },
      { q: "What if our needs change mid-month?", a: "We swap tasks within the same budget; bigger scope gets a quick estimate." },
      { q: "Do you offer 24/7 support?", a: "Critical incidents only; otherwise business hours with fast response." },
      { q: "Do you sign NDAs?", a: "Yes. We treat your data and plans as confidential." },
      { q: "How do you show progress?", a: "Weekly demos or notes, plus a running changelog." },
      { q: "Can you help hire or hand off?", a: "Yes—job specs, interviews, and smooth knowledge transfer." },
      { q: "Do we own all work?", a: "Yes. Code, designs, and docs live in your accounts." },
      { q: "Is there a minimum term?", a: "Month-to-month after the first month in most cases." },
      { q: "What tools do you use?", a: "We adapt—Jira/Asana/Linear; Figma; your Git provider; your analytics stack." },
    ],
  },

  /* ------------------------------------------------------------------
   * AI Automation & Chatbots
   * ------------------------------------------------------------------ */
  "ai-automation": {
    color: "#059669", // teal
    hero: {
      badge: "AI Automation & Chatbots",
      title: "Reduce support tickets and manual tasks with safe, useful AI",
      sub: "We build AI chatbots and automations that answer questions, collect info, and route to humans when needed—without risking your data.",
    },
    whatYouGet: {
      intro: "Start small, prove value, and grow only what works.",
      left: b([
        "Chatbots that answer from your docs (RAG)",
        "Simple automations for FAQs, intake, and routing",
        "Secure access rules and audit logs",
        "Web, WhatsApp, Slack, and email channels",
      ]),
      right: b([
        "Human-in-the-loop handoff to your team",
        "Deflection, CSAT, and time-saved reports",
        "Reusable prompts and fine-tuning options",
        "Playbooks and safety guidelines",
      ]),
    },
    process: [
      ["Discovery", "Pick high-value tasks and guardrails."],
      ["Prototype", "A working bot with your content."],
      ["Integrate", "Hook into helpdesk/CRM/Slack."],
      ["Improve", "Track results and train over time."],
    ],
    pricingNote: "We recommend a small pilot before wider rollout.",
    pricingFoot: "We can host for you or deploy to your cloud.",
    plans: [
      { title: "Pilot", note: "2–4 weeks • $4k–$9k", bullets: b(["1–2 use cases", "RAG + analytics", "Handoff to agents"]) },
      {
        title: "Program",
        note: "Monthly • $4k–$12k /mo",
        bullets: b(["Multiple bots and flows", "SLAs + governance", "Ongoing training/improvements"]),
      },
    ],
    faqs: [
      { q: "Where do answers come from?", a: "From your approved docs, site, or knowledge base with Retrieval-Augmented Generation (RAG)." },
      { q: "Will the bot give wrong answers?", a: "We restrict sources, add confidence checks, and escalate uncertain cases to humans." },
      { q: "Is our data safe?", a: "Yes—allow-lists, role-based access, PII redaction, and detailed logs." },
      { q: "What can it automate?", a: "Common FAQs, order status, appointment scheduling, intake forms, and basic triage." },
      { q: "Can we make it match our tone?", a: "Yes—brand style and do/don’t rules are part of the setup." },
      { q: "Does it replace our team?", a: "No—it handles simple tasks so your team focuses on higher-value conversations." },
      { q: "Can it work in our cloud?", a: "Yes. We can deploy to your infrastructure and use your LLM provider." },
      { q: "Which tools can it connect to?", a: "Zendesk, Intercom, HubSpot, Salesforce, Slack, Google Drive, and more." },
      { q: "How do we measure success?", a: "Ticket deflection, first response time, CSAT, and time saved for your team." },
      { q: "What if regulations apply to us?", a: "We design guardrails for GDPR/PII and follow your compliance requirements." },
      { q: "Can it speak multiple languages?", a: "Yes—bots can detect and reply in the user’s language." },
      { q: "How fast can we start?", a: "A simple pilot can run in 2–4 weeks using your most asked questions." },
    ],
  },
};
