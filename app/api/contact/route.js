import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();

    console.log("Contact form submission:", data);

    return NextResponse.json(
      {
        success: true,
        message: "Message received successfully!",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
}