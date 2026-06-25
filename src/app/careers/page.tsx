"use client";

import React, { useState } from "react";
import { Briefcase, MapPin, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CareersPage() {
  const [appliedRole, setAppliedRole] = useState<string | null>(null);

  const openPositions = [
    {
      title: "Senior Full-Stack Engineer",
      team: "Product Development",
      location: "Remote (Global)",
      type: "Full-Time",
      desc: "Architect multi-tenant SaaS features for ResourceFlow™, building scalable API routes in Next.js 15+ and optimizing Prisma operations."
    },
    {
      title: "Cloud Solutions Architect",
      team: "Infrastructure",
      location: "Remote (CET/EST)",
      type: "Full-Time",
      desc: "Configure secure serverless clusters, Amazon Bedrock hooks, WAF filtering guidelines, and Cognito OAuth connectors."
    },
    {
      title: "Product Designer & Brand Strategist",
      team: "Branding",
      location: "Remote (Global)",
      type: "Full-Time",
      desc: "Produce vector design assets, Notion templates, and high-fidelity interactive systems matching premium product constraints."
    }
  ];

  const handleApply = (role: string) => {
    setAppliedRole(role);
    setTimeout(() => {
      setAppliedRole(null);
      alert(`Application received for the "${role}" position. We will review your profile shortly.`);
    }, 1000);
  };

  return (
    <div className="relative isolate py-20 px-6 sm:py-28 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(76,29,149,0.1),transparent_50%)] pointer-events-none" />

      <div className="mx-auto max-w-5xl space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-xs font-bold text-accent uppercase tracking-widest font-mono">Join ALIROREK</h1>
          <p className="text-4xl font-extrabold text-white">We Build Systems that Scale</p>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed text-sm">
            Work with senior developers and systems architects in a fully remote, asynchronous, documentation-first engineering culture.
          </p>
        </div>

        {/* Culture benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-slate-900">
          <div className="p-5 rounded-xl glass-panel space-y-3">
            <h3 className="text-sm font-bold text-white">100% Async & Remote</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We focus on deliverables and written communication. Choose your own working hours and structure.
            </p>
          </div>
          <div className="p-5 rounded-xl glass-panel space-y-3">
            <h3 className="text-sm font-bold text-white">AWS Lab Budgets</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every engineer gets a personal sandbox budget to test Amazon Bedrock models, serverless configurations, and edge architectures.
            </p>
          </div>
          <div className="p-5 rounded-xl glass-panel space-y-3">
            <h3 className="text-sm font-bold text-white">Open Source Contributions</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We actively package and publish standard operational scripts and Notion assets to the public developer community.
            </p>
          </div>
        </div>

        {/* Roles list */}
        <div className="space-y-6 pt-8">
          <h2 className="text-2xl font-bold text-white text-center">Open Positions</h2>
          
          <div className="space-y-4">
            {openPositions.map((role, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-xl glass-panel-accent border-slate-900 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
              >
                <div className="space-y-2 max-w-2xl">
                  <div className="flex flex-wrap gap-2 text-[10px] text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Briefcase className="h-3 w-3" /> {role.team}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {role.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {role.type}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white leading-tight">{role.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{role.desc}</p>
                </div>

                <div>
                  <button
                    onClick={() => handleApply(role.title)}
                    className="flex items-center gap-1 px-4 py-2 bg-accent text-space-black font-extrabold text-xs rounded hover:bg-emerald-400 transition-colors"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
