"use client";

import React from "react";
import Link from "next/link";
import { AlertCircle, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative isolate min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(76,29,149,0.1),transparent_60%)] pointer-events-none" />

      <div className="max-w-md p-8 rounded-2xl glass-panel border-slate-900 space-y-6 relative z-10">
        <div className="p-4 rounded-full bg-error/10 text-error w-fit mx-auto border border-error/20">
          <AlertCircle className="h-10 w-10 animate-bounce" />
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold text-white">404 - Node Offline</h1>
          <p className="text-sm text-slate-400">
            The operational pathway or page you requested could not be resolved in our AWS Cloud network. It may have relocated or expired.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-1.5 px-5 py-3 bg-accent text-space-black font-extrabold text-xs rounded hover:bg-emerald-400 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            href="/resourceflow"
            className="px-5 py-3 bg-slate-950 border border-slate-800 text-slate-300 font-bold text-xs rounded hover:text-white transition-colors"
          >
            Search ResourceFlow™
          </Link>
        </div>
      </div>
    </div>
  );
}
