"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Rocket, CloudLightning, CheckCircle, Cpu } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      title: "Radical Standardisation",
      desc: "We believe operational friction occurs due to custom scripts written ad-hoc. We build modular, repeatable SOPs and systems.",
      icon: Cpu,
    },
    {
      title: "Cloud-First Architecture",
      desc: "All templates are backed by resilient storage layers, keeping assets secure, quick to download, and immune to server down-states.",
      icon: CloudLightning,
    },
    {
      title: "Accessibility & Governance",
      desc: "Our platform ensures tools can be opened and understood by non-technical teams, using clean typography and strict accessibility.",
      icon: ShieldCheck,
    },
  ];

  const milestones = [
    { year: "2024", title: "Corporate Inception", desc: "ALIROREK started as a boutique operations consultancy helping tech businesses configure automation chains." },
    { year: "2025", title: "Launch of ResourceFlow™ v1", desc: "Consolidated internal operational assets into a cloud platform, gaining 12,000 members in the first six months." },
    { year: "2026", title: "Scale to AWS Multi-Region", desc: "Upgraded platform engines to Amazon Bedrock and AWS Lambda workflows to automate custom prompt compilation." },
  ];

  return (
    <div className="relative isolate py-20 px-6 sm:py-28 lg:px-8">
      {/* Background ambient light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(76,29,149,0.1),transparent_50%)] pointer-events-none" />

      <div className="mx-auto max-w-5xl space-y-16">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-xs font-bold text-accent uppercase tracking-widest">About ALIROREK</h1>
          <p className="text-4xl sm:text-5xl font-extrabold text-white">
            Engineering Operational Speed.
          </p>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            ALIROREK was founded with a singular purpose: to make enterprise-grade operations, workflows, cloud automation, and business playbooks accessible to growing organizations without the prohibitive expense of standard consultants.
          </p>
        </div>

        {/* Brand Mission & Positioning */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-8 border-t border-slate-900">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Our Vision</h2>
            <p className="text-slate-300 leading-relaxed text-sm">
              We envision a world where freelancers, startups, and agencies scale their client capacities without hiring administrative bloat. By utilizing standardized cloud-hosted operating frameworks, team leaders can delegate tasks with absolute certainty.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm">
              Through **ResourceFlow™**, our proprietary SaaS delivery mechanism, we continuously package systems, Notion setups, and AI models into downloadable micro-assets, creating a recurring return on investment for members.
            </p>
          </div>
          <div className="p-6 rounded-xl glass-panel-accent border-indigo-900/50 space-y-4">
            <h3 className="text-sm font-bold text-slate-300 font-mono">Brand Positioning Summary</h3>
            <blockquote className="text-slate-200 italic text-sm border-l-2 border-accent pl-4">
              &quot;ALIROREK helps professionals, freelancers, agencies, consultants, startups, and growing businesses streamline operations through cloud-powered productivity systems, business resources, automation frameworks, and continuously updated digital toolkits.&quot;
            </blockquote>
            <div className="flex gap-2 pt-2">
              <span className="text-[10px] bg-slate-950 px-2 py-1 rounded text-slate-400">Security Isolated</span>
              <span className="text-[10px] bg-slate-950 px-2 py-1 rounded text-slate-400">AWS Registered Partner</span>
            </div>
          </div>
        </div>

        {/* Core Pillars / Values */}
        <div className="space-y-8 pt-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white">The Core Pillars</h2>
            <p className="text-slate-400 text-sm mt-1">The operational beliefs that guide our product and engineering groups.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div key={idx} className="p-6 rounded-xl glass-panel space-y-4">
                  <div className="p-3 rounded-lg bg-indigo-950 text-highlight w-fit">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{v.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Milestones / History */}
        <div className="space-y-8 pt-8 border-t border-slate-900">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white">Corporate Timeline</h2>
            <p className="text-slate-400 text-sm mt-1">Our transition from custom consultants to SaaS product engine.</p>
          </div>
          <div className="relative border-l border-slate-900 pl-6 ml-4 space-y-8 max-w-2xl mx-auto">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative">
                <span className="absolute -left-10 top-1 h-8 w-8 rounded-full bg-slate-950 border border-accent flex items-center justify-center text-[10px] font-mono font-bold text-accent">
                  {m.year}
                </span>
                <h3 className="text-base font-bold text-white">{m.title}</h3>
                <p className="text-sm text-slate-400 mt-1 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AWS Solutions Architect Statement */}
        <div className="p-8 rounded-xl glass-panel-accent text-center space-y-4 max-w-3xl mx-auto">
          <Award className="h-10 w-10 text-accent mx-auto" />
          <h2 className="text-xl font-bold text-white">AWS Partnership & Integration Readiness</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            All services engineered by ALIROREK adhere strictly to the **AWS Well-Architected Framework**. We guarantee security, reliability, performance efficiency, cost optimization, and operational excellence for our clients and our ResourceFlow™ members.
          </p>
        </div>
      </div>
    </div>
  );
}
