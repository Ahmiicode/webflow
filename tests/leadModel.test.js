import { describe, it, expect } from "vitest";
import { connectDB } from "@/lib/mongodb";
import Lead from "@/lib/models/Lead";

describe("Lead model", () => {
  it("creates a lead with email", async () => {
    await connectDB();
    const doc = await Lead.create({ name: "Test", service: "SEO", contactMethod: "email", email: "a@b.com" });
    expect(doc.name).toBe("Test");
  });
  it("creates a lead with phone", async () => {
    await connectDB();
    const doc = await Lead.create({ name: "Caller", service: "Shopify Store", contactMethod: "phone", phone: "+1 234 567 8901" });
    expect(doc.contactMethod).toBe("phone");
  });
});
