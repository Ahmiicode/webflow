
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();

    console.log("Contact form submission:", data);

    return NextResponse.json({
      ok: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { ok: false, message: "Server error" },
      { status: 500 }
    );
  }
}

