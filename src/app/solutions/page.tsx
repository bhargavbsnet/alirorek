"use client";

import React from "react";
import { Layers, Activity, ShieldCheck, Database, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function SolutionsPage() {
  const problems = [
    {
      title: "Capacity Bottlenecks",
      challenge: "Agency teams spend 40% of their billable hours drafting scopes, sending repeat onboarding links, and rebuilding workspaces for each client.",
      solution: "ResourceFlow™ templates let you spin up uniform, client-ready workspaces in Notion in under 3 minutes, freeing up key resource pools.",
      icon: Layers,
    },
    {
      title: "Broken Communication Chains",
      challenge: "Manual follow-ups between CRM alerts and sales logs frequently lead to missed opportunities or outdated pricing quotes.",
      solution: "Import our Make.com CRM connectors to automatically trigger Slack pings and email drip integrations the second a lead interacts.",
      icon: Activity,
    },
    {
      title: "Unsecured File Sharing",
      challenge: "Teams share client onboarding documents, contract templates, and passwords over unencrypted links or public folders.",
      solution: "Utilize our secure AWS storage templates to deploy IAM-isolated directories with expiring URL links automatically.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="relative isolate py-20 px-6 sm:py-28 lg:px-8">
      {/* Background radial accent glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.1),transparent_50%)] pointer-events-none" />

      <div className="mx-auto max-w-5xl space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-xs font-bold text-accent uppercase tracking-widest">Solutions Overview</h1>
          <p className="text-4xl font-extrabold text-white">Streamline Operations. Scale Deliverables.</p>
          <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed">
            ALIROREK builds the system structures that resolve administrative drag, letting your high-value talent focus on strategy, design, and growth.
          </p>
        </div>

        {/* Problems & Solutions List */}
        <div className="space-y-8 pt-8">
          {problems.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div 
                key={idx} 
                className="p-8 rounded-xl glass-panel-accent border-slate-900 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
              >
                <div className="md:col-span-2 flex justify-start md:justify-center">
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-highlight">
                    <Icon className="h-8 w-8" />
                  </div>
                </div>
                
                <div className="md:col-span-10 space-y-4">
                  <h2 className="text-xl font-bold text-white">{p.title}</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="space-y-1 bg-slate-950/60 p-4 rounded border border-slate-900">
                      <span className="text-error font-bold uppercase tracking-wider">The Operational Bottleneck</span>
                      <p className="text-slate-400 mt-1 leading-relaxed">{p.challenge}</p>
                    </div>
                    <div className="space-y-1 bg-accent/5 p-4 rounded border border-accent/20">
                      <span className="text-accent font-bold uppercase tracking-wider">Our Resolved State</span>
                      <p className="text-slate-300 mt-1 leading-relaxed">{p.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Final CTA */}
        <div className="p-8 rounded-xl glass-panel border-slate-850 text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-white">Ready to deploy customized systems?</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            We offer bespoke system migration services for companies requiring deep AWS architectural configurations.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-space-black font-extrabold rounded-lg shadow-lg hover:scale-105 transition-all"
            >
              <span>Consult Our Solutions Architect</span>
              <CheckCircle className="h-4 w-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
