import Link from "next/link";
import { services, contactHref } from "@/lib/services";

export async function generateMetadata({ params }) {
  const { slug } = await params; // ✅ fixed
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | ITSolutionNYC",
      description: "Requested service not found.",
    };
  }

  return {
    title: `${service.title} | ITSolutionNYC`,
    description: service.desc || "Explore our professional IT and marketing services.",
  };
}

export default async function ServiceDetails({ params }) {
  const { slug } = await params; // ✅ fixed
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <main className="container py-16 text-center">
        <h1 className="text-3xl font-bold text-slate-800">Service Not Found</h1>
        <p className="mt-4 text-slate-600">
          We couldn’t find the service you’re looking for.
        </p>
        <Link href="/services" className="btn-grad mt-6 inline-block">
          Back to Services
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative border-b border-slate-200/70 bg-gradient-to-b from-[#f4f6ff] via-[#f6f3ff] to-white">
        <div className="container relative py-16 text-center">
          <span className="pill-grad">Our Services</span>
          <h1 className="h1 mt-4 bg-gradient-to-r from-[#566bff] via-[#7274ff] to-[#c057ff] bg-clip-text text-transparent">
            {service.title}
          </h1>
          <p className="lead mx-auto mt-3 max-w-2xl text-[#555b78]">{service.desc}</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href={contactHref(service.slug)} className="btn-grad">
              Get Free Growth Plan
            </Link>
            <Link href="/portfolio" className="btn-outline-grad">
              See Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container py-12">
        <div className="prose max-w-none prose-slate">
          {service.long && (
            <div dangerouslySetInnerHTML={{ __html: service.long }} />
          )}
          {!service.long && (
            <p>
              More information about <b>{service.title}</b> will be added soon. In
              the meantime, feel free to contact us for a free quote or consultation.
            </p>
          )}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 text-center">
          <h3 className="text-xl font-semibold text-slate-800">
            Ready to get started?
          </h3>
          <Link href={contactHref(service.slug)} className="btn-grad">
            Contact Us Now
          </Link>
        </div>
      </section>
    </main>
  );
}
