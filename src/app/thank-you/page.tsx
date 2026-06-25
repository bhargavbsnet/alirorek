"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle, ShieldCheck, ArrowRight } from "lucide-react";

export default function ThankYouPage() {
  return (
    <div className="relative isolate min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.06),transparent_60%)] pointer-events-none" />

      <div className="max-w-md p-8 rounded-2xl glass-panel border-accent/20 space-y-6 relative z-10">
        <div className="p-4 rounded-full bg-accent/15 text-accent w-fit mx-auto border border-accent/20 animate-pulse">
          <CheckCircle className="h-10 w-10" />
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold text-white">Synchronization Complete</h1>
          <p className="text-sm text-slate-300">
            Thank you for contacting ALIROREK. Your data has been encrypted and synced to our operations log.
          </p>
        </div>

        {/* Next actions list */}
        <div className="p-4 rounded bg-slate-950 border border-slate-900 text-left space-y-2 text-xs">
          <div className="font-bold text-slate-300 font-mono flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-accent" /> Next Steps Checklist:
          </div>
          <ul className="text-slate-400 space-y-1">
            <li>• Check your email for a validation loop from AWS SES.</li>
            <li>• A solutions architect will reach out within 4 business hours.</li>
            <li>• Explore our sandbox while your profile prepares.</li>
          </ul>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/resourceflow"
            className="flex items-center justify-center gap-1.5 px-5 py-3 bg-accent text-space-black font-extrabold text-xs rounded hover:bg-emerald-400 transition-colors"
          >
            <span>Browse ResourceFlow™</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            href="/"
            className="px-5 py-3 bg-slate-950 border border-slate-800 text-slate-300 font-bold text-xs rounded hover:text-white transition-colors"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
