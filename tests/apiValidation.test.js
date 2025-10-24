import { describe, it, expect } from "vitest";
import { _validateLead, _shouldBlockNow } from "@/app/api/leads/route";

describe("validation rules", () => {
  it("requires email when method is email", () => {
    const r1 = _validateLead({ name: "A", service: "SEO", contactMethod: "email", email: "bad" });
    expect(r1.ok).toBe(false);
    const r2 = _validateLead({ name: "A", service: "SEO", contactMethod: "email", email: "a@b.com" });
    expect(r2.ok).toBe(true);
  });
  it("requires phone when method is phone", () => {
    const r1 = _validateLead({ name: "A", service: "SEO", contactMethod: "phone", phone: "123" });
    expect(r1.ok).toBe(false);
    const r2 = _validateLead({ name: "A", service: "SEO", contactMethod: "phone", phone: "+1 234 567 8901" });
    expect(r2.ok).toBe(true);
  });
  it("budget and timeline are optional", () => {
    const r = _validateLead({ name: "A", service: "SEO", contactMethod: "email", email: "a@b.com" });
    expect(r.ok).toBe(true);
  });
});

describe("rate limit (60s window)", () => {
  it("blocks second request within the window", () => {
    const key = "1.2.3.4|john";
    const now = Date.now();
    const firstBlocked = _shouldBlockNow(key, now);
    expect(firstBlocked).toBe(false);
    const secondBlocked = _shouldBlockNow(key, now + 10);
    expect(secondBlocked).toBe(true);
  });
});
