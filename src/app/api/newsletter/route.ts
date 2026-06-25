import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
    }

    // Attempt to register subscriber email
    const record = await db.newsletterSubscriber.create({
      data: {
        email: email.trim().toLowerCase(),
        active: true
      }
    });

    return NextResponse.json({ success: true, message: "Newsletter subscription registered successfully.", record });
  } catch (err: any) {
    // Graceful error if email is already in the database
    if (err.code === "P2002") {
      return NextResponse.json({ success: true, message: "Email is already subscribed." });
    }
    console.error("[API_NEWSLETTER_ERROR]:", err);
    return NextResponse.json({ error: "Failed to compile newsletter subscriber data." }, { status: 500 });
  }
}
