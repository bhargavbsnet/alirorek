"use client";

import React, { useState } from "react";
import { Users, Briefcase, Rocket, ShieldCheck, Database, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function IndustriesPage() {
  const [selectedTab, setSelectedTab] = useState("agencies");

  const targets = {
    agencies: {
      title: "Marketing & Creative Agencies",
      desc: "Standardize client onboarding, outsource vetting, and manage design assets without losing billable velocity.",
      needs: ["Client portal templates", "Onboarding SOP checklists", "Capacity trackers", "Automated proposal tools"],
      outcome: "Scale to 2x active accounts without increasing administrative staffing headcounts."
    },
    startups: {
      title: "Venture-Backed Startups",
      desc: "Maintain rapid iteration momentum with clean procedural handbooks, task structures, and secure AWS repositories.",
      needs: ["AWS architecture guides", "Weekly sprint databases", "SDR outreach playbooks", "Cap-table templates"],
      outcome: "Build audit-ready standard procedures before seed-round data rooms close."
    },
    consultants: {
      title: "Independent Consultants",
      desc: "Charge premium packages by delivering interactive Notion portals, clean proposals, and automated reporting systems.",
      needs: ["Bespoke proposals templates", "Interactive Client dashboards", "Hours-logging pipelines", "AI prompt matrices"],
      outcome: "Secure $10k+ consultation scopes with standardized, agency-level asset deliveries."
    },
    freelancers: {
      title: "Solo Contractors & Creators",
      desc: "Automate invoicing, follow-ups, and calendar bookings so you can concentrate entirely on client deliverables.",
      needs: ["Invoice email calculators", "Contract templates", "Personal OKR workspace", "Zapier notification flows"],
      outcome: "Reclaim 1 full day of pure administrative work every single week."
    }
  };

  const current = targets[selectedTab as keyof typeof targets] || targets.agencies;

  return (
    <div className="relative isolate py-20 px-6 sm:py-28 lg:px-8">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(76,29,149,0.1),transparent_50%)] pointer-events-none" />

      <div className="mx-auto max-w-5xl space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-xs font-bold text-accent uppercase tracking-widest">Target Sectors</h1>
          <p className="text-4xl font-extrabold text-white">System Frameworks Made for Your Scale</p>
          <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Different organizational sizes encounter distinct operational friction. Choose your industry to see how ALIROREK optimizes your workflows.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-900 pb-6">
          {Object.entries(targets).map(([key, value]) => (
            <button
              key={key}
              onClick={() => setSelectedTab(key)}
              className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${
                selectedTab === key
                  ? "bg-accent text-space-black font-extrabold"
                  : "bg-slate-950 text-slate-400 hover:text-white"
              }`}
            >
              {value.title.split(" & ").pop()}
            </button>
          ))}
        </div>

        {/* Tab content panel */}
        <div className="p-8 rounded-xl glass-panel-accent border-indigo-900/50 space-y-6 max-w-3xl mx-auto">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">{current.title}</h2>
            <p className="text-sm text-slate-300 leading-relaxed">{current.desc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-900/65">
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">Top Resources Required</h3>
              <ul className="mt-2.5 space-y-2 text-xs text-slate-300">
                {current.needs.map((need, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{need}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded bg-slate-950 border border-slate-900 flex flex-col justify-between">
              <div>
                <h3 className="text-[10px] font-bold text-accent uppercase tracking-widest font-mono">Expected Outcome</h3>
                <p className="text-xs text-slate-400 mt-2 font-medium leading-relaxed">
                  {current.outcome}
                </p>
              </div>
              <div className="pt-4">
                <Link
                  href="/membership"
                  className="flex items-center gap-1 text-xs text-accent font-bold hover:underline"
                >
                  <span>Access Industry Portal</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
