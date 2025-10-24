import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/lib/models/Contact";

export async function POST(req) {
  try {
    const data = await req.json();

    await connectDB();

    await Contact.create({
      name: data.name,
      email: data.email,
      phone: data.phone || "",
      company: data.company || "",
      service: data.service || "",
      budget: data.budget || "",
      timeline: data.timeline || "",
      message: data.message,
      page: data.page || "contact",
    });

    return NextResponse.json({ ok: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ ok: false, message: "Server error" }, { status: 500 });
  }
}
