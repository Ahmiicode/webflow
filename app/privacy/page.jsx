// app/privacy/page.jsx

export const metadata = {
  title: "Privacy Policy | itsolutionnyc.com",
  description: "Learn how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-white">
      <section className="relative border-b border-slate-200/70 bg-gradient-to-b from-[#f4f6ff] via-[#f6f3ff] to-white">
        <div className="container py-10">
          <span className="pill-grad text-[12px]">Legal</span>
          <h1 className="h1 mt-2 bg-gradient-to-r from-[#5e73ff] via-[#7f6dff] to-[#c057ff] bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="lead mt-2 max-w-3xl text-[#6a6f90]">
            We respect your privacy. This page explains what we collect and why.
          </p>
        </div>
      </section>

      <section className="container py-10">
        <div className="prose max-w-3xl prose-slate">
          <h2>What we collect</h2>
          <p>
            When you contact us, we collect information you provide such as name, email, phone,
            company, and project details. We use this information only to respond and provide our
            services.
          </p>
          <h2>How we use data</h2>
          <p>
            We use your information to communicate, deliver services, and improve our offerings. We do
            not sell personal data.
          </p>
          <h2>Security</h2>
          <p>
            We take reasonable measures to protect your information from unauthorized access or
            disclosure.
          </p>
          <h2>Contact</h2>
          <p>
            For questions about this policy, contact us at hello@itsolutionnyc.com.
          </p>
        </div>
      </section>
    </main>
  );
}
