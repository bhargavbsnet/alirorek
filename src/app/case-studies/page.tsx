"use client";

import React from "react";
import { CheckCircle2, TrendingUp, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CaseStudiesPage() {
  const caseHistories = [
    {
      company: "Apex Design Agency",
      industry: "Marketing & Design Services",
      metric: "+85% Client Onboarding Capacity",
      challenge: "Manual onboarding pipelines required account managers to copy files and invite clients individually, capping agency scale at 15 accounts.",
      solution: "Implemented automated ResourceFlow™ portal architectures connected to CRM triggers via Make.com blueprints.",
      outcome: "Expanded active client limit to 40 accounts without recruiting secondary onboarding staff."
    },
    {
      company: "Scribe SaaS Solutions",
      industry: "B2B Software Platforms",
      metric: "35% Infrastructure Cost Reduction",
      challenge: "Stale ECS container configurations and unchecked database logging patterns bloated monthly AWS spending.",
      solution: "Migrated stateful workloads to AWS serverless Lambda endpoints, caching assets behind Amazon CloudFront edge nodes.",
      outcome: "Saved $4,200/month in cloud infrastructure costs while increasing file download rates."
    }
  ];

  return (
    <div className="relative isolate py-20 px-6 sm:py-28 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.1),transparent_50%)] pointer-events-none" />

      <div className="mx-auto max-w-5xl space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-xs font-bold text-accent uppercase tracking-widest font-mono">Verifiable Results</h1>
          <p className="text-4xl font-extrabold text-white">Metrics Over Words.</p>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed text-sm">
            Read detailed business operations case files comparing customer baseline struggles with final automated, cloud-hosted outcomes.
          </p>
        </div>

        {/* Case Studies Lists */}
        <div className="space-y-10">
          {caseHistories.map((cs, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-xl glass-panel-accent border-slate-900 grid grid-cols-1 lg:grid-cols-12 gap-8"
            >
              {/* Left Column: Context */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                  <span>{cs.company}</span>
                  <span>•</span>
                  <span>{cs.industry}</span>
                </div>
                
                <h2 className="text-2xl font-bold text-white">{cs.company} Optimization Case</h2>
                
                <div className="space-y-3">
                  <div className="text-xs">
                    <strong className="text-error uppercase block">Baseline Challenge:</strong>
                    <p className="text-slate-400 mt-1 leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div className="text-xs">
                    <strong className="text-accent uppercase block">Implemented Framework:</strong>
                    <p className="text-slate-300 mt-1 leading-relaxed">{cs.solution}</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Outcomes Cards */}
              <div className="lg:col-span-4 p-6 rounded bg-slate-950 border border-slate-900 flex flex-col justify-between text-center lg:text-left">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-highlight uppercase tracking-wider block font-mono">Primary Metric</span>
                  <div className="text-2xl font-extrabold text-accent flex items-center justify-center lg:justify-start gap-1">
                    <TrendingUp className="h-5 w-5 text-accent" />
                    <span>{cs.metric.split(" ")[0]}</span>
                  </div>
                  <p className="text-sm font-semibold text-white mt-1">{cs.metric.split(" ").slice(1).join(" ")}</p>
                </div>
                
                <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                  {cs.outcome}
                </p>

                <div className="pt-6 border-t border-slate-900/60 mt-4">
                  <Link href="/contact" className="text-xs text-accent font-bold flex items-center justify-center lg:justify-start gap-1 hover:underline">
                    <span>Replicate these metrics</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
