import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message, company, size, plan } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required fields." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address format." }, { status: 400 });
    }

    // Determine query type (Demo vs General Contact)
    const url = new URL(req.url);
    const type = url.searchParams.get("type");

    if (type === "demo") {
      const record = await db.demoRequest.create({
        data: {
          name,
          email,
          company: company || "Not Provided",
          size: size || "1-10",
          plan: plan || "monthly",
        },
      });
      return NextResponse.json({ success: true, message: "Demo request registered successfully.", record });
    } else {
      const record = await db.contactRequest.create({
        data: {
          name,
          email,
          subject: subject || "General Inquiry",
          message,
        },
      });
      return NextResponse.json({ success: true, message: "Contact request registered successfully.", record });
    }
  } catch (err: any) {
    console.error("[API_CONTACT_ERROR]:", err);
    return NextResponse.json({ error: "Internal server error writing request." }, { status: 500 });
  }
}
