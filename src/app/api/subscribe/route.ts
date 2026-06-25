import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { email, resourceId, resourceName } = await req.json();

    if (!resourceId || !resourceName) {
      return NextResponse.json({ error: "resourceId and resourceName are required." }, { status: 400 });
    }

    const log = await db.resourceDownload.create({
      data: {
        email: email || "anonymous-subscriber@alirorek.com",
        resourceId,
        resourceName
      }
    });

    return NextResponse.json({ success: true, message: "Download audit recorded.", log });
  } catch (err: any) {
    console.error("[API_AUDIT_ERROR]:", err);
    return NextResponse.json({ error: "Failed to record download telemetry." }, { status: 500 });
  }
}
