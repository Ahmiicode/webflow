// lib/services.js
import servicesData from "../app/data/servicesData";

/* ------------ HELPERS ------------ */
const canonical = (s) => (s.slug || s.id).toLowerCase();

/**
 * Normalize a raw service identifier (from query param or legacy links)
 * to a canonical slug present in `services`.
 * If no match is found, returns a sanitized version of the input.
 */
export function normalizeService(raw) {
  if (!raw) return "";
  const key = String(raw).toLowerCase().trim();
  // direct match
  const found = services.find((s) => canonical(s) === key || (s.aliases || []).includes(key));
  if (found) return canonical(found);
  // some old slugs might include spaces or underscores; normalize to dash-form
  return key.replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

/* ------------ ENRICHED LIST ------------ */
export const services = servicesData.map((s) => ({
  ...s,
  slug: canonical(s),
}));

/* ------------ LOOKUPS & URL BUILDERS ------------ */
export function getService(idOrSlug) {
  if (!idOrSlug) return null;
  const key = String(idOrSlug).toLowerCase();
  return services.find((s) => canonical(s) === key) || null;
}

export function detailsHref(idOrSlug) {
  const s = getService(idOrSlug);
  return s ? `/services/${canonical(s)}` : "/services";
}

export function contactHref(idOrSlug) {
  const s = getService(idOrSlug);
  return s ? `/contact?service=${canonical(s)}` : "/contact";
}
