"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap, Download, Database, Cloud, 
  Settings, Terminal, Award, Network, ChevronRight, BarChart3, Clock, Lock
} from "lucide-react";

export default function HomePage() {
  const [selectedAwsService, setSelectedAwsService] = useState<string>("cloudfront");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const awsServices = [
    {
      id: "cloudfront",
      name: "CloudFront & S3",
      role: "Global Content Delivery",
      desc: "Delivers encrypted resource packages, Notion templates, and design assets globally with sub-10ms latency via 600+ edge locations.",
      icon: Cloud,
    },
    {
      id: "cognito",
      name: "Amazon Cognito",
      role: "Identity Governance",
      desc: "Handles enterprise-grade user authentication, multi-factor security, and JWT authorization for the ResourceFlow™ subscriber area.",
      icon: Lock,
    },
    {
      id: "lambda",
      name: "AWS Lambda & Gateway",
      role: "Serverless Execution",
      desc: "Powers on-demand file assembly, PDF compilation, and dynamic search filter lookups without server overhead.",
      icon: Zap,
    },
    {
      id: "bedrock",
      name: "Amazon Bedrock",
      role: "Generative Prompt Syncing",
      desc: "Dynamically context-optimizes marketing blueprints and custom AI prompts using premium Claude models before delivery.",
      icon: Sparkles,
    },
    {
      id: "dynamodb",
      name: "DynamoDB & RDS",
      role: "Hybrid Database Layer",
      desc: "Coordinates instant state updates for bookmarks, downloads, and user logs with transactional consistency in RDS PostgreSQL.",
      icon: Database,
    },
    {
      id: "ecs",
      name: "ECS Fargate & WAF",
      role: "Containerized Engine & Security",
      desc: "Runs resource processing microservices behind Web Application Firewall (WAF) filters to block scraping bots.",
      icon: Settings,
    },
  ];

  const categories = [
    { title: "AI Prompt Libraries", count: "120+ templates", desc: "Optimized prompts for Claude, GPT, and Midjourney to automate writing, analysis, and coding.", icon: Sparkles },
    { title: "Business SOP Libraries", count: "80+ procedures", desc: "Ready-to-use Standard Operating Procedures for hiring, outreach, billing, and system audits.", icon: Terminal },
    { title: "Automation Blueprints", count: "65+ active flows", desc: "Make.com, Zapier, and n8n JSON exports to connect CRM pipelines and notification grids.", icon: Zap },
    { title: "Financial & Client Systems", count: "50+ spreadsheets", desc: "Contract templates, pricing calculators, P&L sheets, and proposal decks.", icon: BarChart3 },
    { title: "Notion Workspaces", count: "30+ dashboards", desc: "Operational dashboards, OKR trackers, client portals, and knowledge bases.", icon: Database },
    { title: "Growth Marketing Playbooks", count: "75+ frameworks", desc: "SEO outlines, conversion scripts, cold email formulas, and ad creative boards.", icon: Network },
  ];

  const timelineSteps = [
    { date: "Monday Drop", title: "New Resource Drops", desc: "Members unlock 3 fresh operational resources, spreadsheets, or prompts in the download center." },
    { date: "Wednesday Workshop", title: "Video Execution Blueprint", desc: "A brief, screen-recorded guide walks through implementing the drop into your business." },
    { date: "Friday Audit", title: "Community Feedback & Votes", desc: "Vote on upcoming resources for next week's drop so we build exactly what your operations require." },
  ];

  const growthStats = [
    { value: "48,000+", label: "Active Members", desc: "Freelancers, agency owners, and growing startups." },
    { value: "$2.4M+", label: "Client Operational Savings", desc: "Saved by automating standard procedures." },
    { value: "320+", label: "Weekly Resources Released", desc: "A cumulative library of production assets." },
    { value: "99.99%", label: "AWS System Uptime", desc: "Robust cloud architecture resilient to demand spikes." },
  ];

  return (
    <div className="relative isolate min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative px-6 pt-24 pb-20 sm:pt-32 sm:pb-28 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(76,29,149,0.15),transparent_60%)] pointer-events-none" />
        
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left text column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-900 text-xs font-semibold text-accent animate-pulse">
                <Sparkles className="h-3 w-3" />
                <span>ResourceFlow™ Platform V2 Released</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                One Subscription. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-highlight to-secondary">
                  Endless Business Resources.
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
                Unlock ResourceFlow™ for just <strong className="text-white">$5/month</strong>. Get weekly operational systems, automation playbooks, ready-to-run SOPs, Notion templates, and high-converting marketing systems. Powered by AWS for instantaneous global deliveries.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/membership"
                  className="flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-accent to-highlight text-space-black font-extrabold rounded-lg shadow-xl hover:brightness-110 transition-all hover:scale-105 active:scale-95"
                >
                  <span>Start for $5/month</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/resourceflow"
                  className="flex items-center gap-2 px-6 py-3.5 bg-slate-900 border border-slate-800 text-slate-200 font-semibold rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
                >
                  <span>Browse Sandbox</span>
                  <ChevronRight className="h-4 w-4 text-slate-500" />
                </Link>
              </div>

              {/* Trust details */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-900/60 max-w-md">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  <span className="text-xs text-slate-400">Cancel anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  <span className="text-xs text-slate-400">Weekly drops</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  <span className="text-xs text-slate-400">AWS hosting</span>
                </div>
              </div>
            </div>

            {/* Right mockup column: Premium dashboard preview */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto w-full max-w-md rounded-2xl glass-panel-accent p-4 neon-border animate-float">
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-error" />
                    <span className="h-2.5 w-2.5 rounded-full bg-warning" />
                    <span className="h-2.5 w-2.5 rounded-full bg-success" />
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono tracking-wider bg-slate-950 px-2 py-0.5 rounded">
                    ResourceFlow™ Dashboard
                  </div>
                </div>

                <div className="pt-4 space-y-4">
                  {/* Mock search input */}
                  <div className="h-8 bg-slate-950/80 rounded border border-slate-800 flex items-center px-3 text-xs text-slate-500">
                    Search 320+ automation templates...
                  </div>

                  {/* Highlight Drop */}
                  <div className="p-3 bg-indigo-950/40 rounded-lg border border-indigo-900/50 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] bg-accent/25 text-accent px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                        Active Drop
                      </span>
                      <span className="text-[10px] text-slate-400">Updated 2h ago</span>
                    </div>
                    <h3 className="text-sm font-bold text-white">Cold Client Outreach Automation Suite</h3>
                    <p className="text-xs text-slate-400">Includes Make.com JSON flow, email copy variations, and Notion tracking database.</p>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-xs font-semibold text-highlight">$5 Member Download</span>
                      <button className="flex items-center gap-1 px-2.5 py-1 bg-accent text-space-black rounded text-[10px] font-bold">
                        <Download className="h-3 w-3" />
                        <span>Download ZIP</span>
                      </button>
                    </div>
                  </div>

                  {/* Quick Filters */}
                  <div className="flex gap-2 overflow-x-auto pb-1 text-[10px]">
                    <span className="px-2 py-1 bg-slate-900 text-white rounded cursor-pointer whitespace-nowrap">⚡ Prompts</span>
                    <span className="px-2 py-1 bg-slate-900 text-slate-400 rounded cursor-pointer whitespace-nowrap">📋 SOPs</span>
                    <span className="px-2 py-1 bg-slate-900 text-slate-400 rounded cursor-pointer whitespace-nowrap">🛠️ Blueprints</span>
                  </div>

                  {/* AWS Status indicator */}
                  <div className="flex items-center justify-between text-[9px] text-slate-500 pt-2 border-t border-white/5">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="h-3 w-3 text-accent" /> Secure via AWS Cognito
                    </span>
                    <span>Ver: 2.4.1</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUSTED BY LOGO LINE */}
      <section className="py-8 bg-slate-950/30 border-y border-slate-900">
        <div className="mx-auto max-w-7xl px-6 text-center space-y-4">
          <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold">
            Empowering Operations at Growing Ventures Worldwide
          </div>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-60">
            <span className="text-slate-400 font-bold text-lg tracking-wider">VECTRA_SYS</span>
            <span className="text-slate-400 font-bold text-lg tracking-wider">APEX_CORE</span>
            <span className="text-slate-400 font-bold text-lg tracking-wider">INTEGRA_FLOW</span>
            <span className="text-slate-400 font-bold text-lg tracking-wider">NOVUM_LABS</span>
            <span className="text-slate-400 font-bold text-lg tracking-wider">SINE_WAVE</span>
          </div>
        </div>
      </section>

      {/* 3. WHY ALIROREK & RESOURCE FLOW TAXONOMY */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-xs font-bold text-accent uppercase tracking-widest">Ecosystem Classification</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">
            Built for Action. Categorized for Execution.
          </p>
          <p className="text-slate-400">
            ResourceFlow™ bypasses general essays to provide structured operational files that you can immediately import, configure, and execute.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-xl glass-panel hover:border-slate-700 transition-all group hover:scale-[1.02] flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="p-3 rounded-lg bg-indigo-950/50 text-highlight w-fit group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                    <p className="text-sm text-slate-400 mt-2 leading-relaxed">{cat.desc}</p>
                  </div>
                </div>
                <div className="mt-6 flex justify-between items-center text-xs">
                  <span className="text-slate-500 font-mono">{cat.count}</span>
                  <Link href="/resources" className="text-accent flex items-center gap-1 group-hover:underline">
                    <span>Explore Library</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. WEEKLY DROP TIMELINE */}
      <section className="py-20 bg-slate-950/40 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-xs font-bold text-accent uppercase tracking-widest">Continuous Value Loops</h2>
              <p className="text-3xl font-extrabold text-white">How the Weekly Resource Drops Operate</p>
              <p className="text-slate-400 leading-relaxed">
                Rather than dumping an overwhelming archive that quickly becomes outdated, ResourceFlow™ maintains a predictable weekly drops pipeline, building systems that scale with you.
              </p>
              <div className="pt-4">
                <Link
                  href="/membership"
                  className="inline-flex items-center gap-2 text-sm text-accent font-bold hover:underline"
                >
                  <span>See full member checklist</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {timelineSteps.map((step, idx) => (
                <div key={idx} className="flex gap-4 p-5 rounded-xl glass-panel relative">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 border border-slate-800 text-highlight font-mono text-xs font-bold">
                      0{idx + 1}
                    </div>
                    {idx !== timelineSteps.length - 1 && (
                      <div className="w-px h-16 bg-slate-800 mt-2" />
                    )}
                  </div>
                  <div>
                    <span className="text-xs text-accent font-mono font-bold uppercase tracking-wider">{step.date}</span>
                    <h3 className="text-base font-bold text-white mt-1">{step.title}</h3>
                    <p className="text-sm text-slate-400 mt-1 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 5. AWS CLOUD INFRASTRUCTURE SHOWCASE */}
      <section id="aws-architecture" className="py-24 max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-xs font-bold text-accent uppercase tracking-widest">Enterprise Cloud Architecture</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">
            Powered Entirely by Amazon Web Services
          </p>
          <p className="text-slate-400">
            Every file zip, Notion copy action, and user authentication token is handled via enterprise AWS infrastructure for compliance, isolation, and speed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-16 items-start">
          {/* AWS Interactive Diagram */}
          <div className="lg:col-span-7 p-6 rounded-xl glass-panel-accent border-indigo-900/50 space-y-6">
            <h3 className="text-sm font-bold text-slate-300 font-mono">AWS Infrastructure Flow</h3>
            
            {/* Visual Topology Representation */}
            <div className="grid grid-cols-3 gap-4 text-center">
              {awsServices.map((service) => {
                const Icon = service.icon;
                const isSelected = selectedAwsService === service.id;
                return (
                  <button
                    key={service.id}
                    onClick={() => setSelectedAwsService(service.id)}
                    className={`p-4 rounded-lg border text-center flex flex-col items-center gap-2 transition-all ${
                      isSelected 
                        ? "bg-accent/15 border-accent text-white scale-105" 
                        : "bg-slate-950/60 border-slate-900 text-slate-400 hover:border-slate-800"
                    }`}
                  >
                    <Icon className={`h-6 w-6 ${isSelected ? "text-accent" : "text-slate-500"}`} />
                    <span className="text-xs font-semibold">{service.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Connection visualization grid */}
            <div className="p-4 rounded-lg bg-slate-950/80 border border-slate-900 text-xs font-mono text-slate-400 space-y-1">
              <div>$ aws lambda list-functions --query &apos;Functions[?contains(FunctionName, `ResourceFlow`)].FunctionName&apos;</div>
              <div className="text-accent">&gt; [&quot;ResourceFlow-WeeklyDropManager&quot;, &quot;ResourceFlow-CompileTemplatePack&quot;, &quot;ResourceFlow-CognitoHookPostAuth&quot;]</div>
              <div>$ status: AWS-Global-Infrastructure-Verified (Region: us-east-1)</div>
            </div>
          </div>

          {/* AWS Selection Details */}
          <div className="lg:col-span-5 space-y-6 lg:pl-4">
            <div className="p-6 rounded-xl glass-panel border-slate-800 space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-[10px] font-mono text-highlight">
                <Database className="h-3.5 w-3.5" />
                <span>AWS Service Details</span>
              </div>
              
              {(() => {
                const service = awsServices.find((s) => s.id === selectedAwsService) || awsServices[0];
                return (
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    <div className="text-xs font-bold text-accent uppercase tracking-wider">{service.role}</div>
                    <p className="text-sm text-slate-400 leading-relaxed">{service.desc}</p>
                  </div>
                );
              })()}

              <div className="pt-4 border-t border-slate-900 space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Compliance Standards</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] bg-slate-950 text-slate-400 px-2 py-1 rounded">SOC 2 Type II</span>
                  <span className="text-[10px] bg-slate-950 text-slate-400 px-2 py-1 rounded">ISO 27001</span>
                  <span className="text-[10px] bg-slate-950 text-slate-400 px-2 py-1 rounded">HIPAA Ready</span>
                  <span className="text-[10px] bg-slate-950 text-slate-400 px-2 py-1 rounded">GDPR Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BUSINESS GROWTH STATISTICS */}
      <section className="py-20 bg-gradient-to-b from-space-black to-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {growthStats.map((stat, idx) => (
              <div key={idx} className="space-y-2 p-6 rounded-xl glass-panel">
                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-white">{stat.label}</div>
                <p className="text-xs text-slate-400 leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CUSTOMER SUCCESS STORIES */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-xs font-bold text-accent uppercase tracking-widest">Success Log</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">What Members Are Achieving</p>
          <p className="text-slate-400">
            Discover how agency leads, independent consultants, and SaaS operational managers leverage our blueprints to accelerate delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="p-6 rounded-xl glass-panel space-y-4">
            <div className="flex gap-1 text-accent">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p className="text-sm text-slate-300 italic">
              &quot;The SOP library alone saved my operations lead 15 hours of drafting time. We copied the client onboarding blueprint and had it live in Notion in under 20 minutes.&quot;
            </p>
            <div>
              <div className="text-sm font-bold text-white">Sarah Jenkins</div>
              <div className="text-xs text-slate-400">Founder, Apex Creative Agency</div>
            </div>
          </div>

          <div className="p-6 rounded-xl glass-panel space-y-4">
            <div className="flex gap-1 text-accent">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p className="text-sm text-slate-300 italic">
              &quot;For $5 a month, the ROI is almost comical. The Make.com automation blueprints connected my client bookings straight into our project management logs instantly.&quot;
            </p>
            <div>
              <div className="text-sm font-bold text-white">Marcus Vance</div>
              <div className="text-xs text-slate-400">Solo Developer &amp; Automation Consultant</div>
            </div>
          </div>

          <div className="p-6 rounded-xl glass-panel space-y-4">
            <div className="flex gap-1 text-accent">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p className="text-sm text-slate-300 italic">
              &quot;We migrated our client SOP folders onto the ALIROREK frameworks. The AWS-powered hosting means our global freelancers access templates instantly.&quot;
            </p>
            <div>
              <div className="text-sm font-bold text-white">David Chen</div>
              <div className="text-xs text-slate-400">VP Operations, Tek-Scale Corp</div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CONVERSION PRICING CTA */}
      <section className="py-24 bg-slate-950/60 border-t border-slate-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05),transparent_70%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-400">
            <Clock className="h-3 w-3 text-highlight animate-spin-slow" />
            <span>Lock in founder pricing today</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            Unlock the Ecosystem. <br />
            Accelerate Your Operations.
          </h2>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Become a ResourceFlow™ member for simple, flat pricing. No locks, no complex packages. Cancel in one click inside the AWS-secured member portal.
          </p>

          <div className="max-w-sm mx-auto p-6 rounded-2xl glass-panel-accent border-accent/25 space-y-4">
            <div className="flex justify-between items-center text-left">
              <div>
                <h3 className="text-lg font-bold text-white">ResourceFlow™ Access</h3>
                <p className="text-xs text-slate-400">All templates, checklists, SOPs &amp; weekly drops</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-extrabold text-accent">$5</div>
                <div className="text-[10px] text-slate-500">per month</div>
              </div>
            </div>

            <ul className="space-y-2 text-left text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
                <span>320+ Ready-to-import resources</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
                <span>3 new resource drops every single week</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
                <span>Make.com, Zapier &amp; Notion formats</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
                <span>Secured through Amazon Cognito</span>
              </li>
            </ul>

            <Link
              href="/membership"
              className="block w-full py-3 bg-accent text-space-black font-extrabold rounded-lg shadow-xl hover:brightness-110 transition-all text-center text-sm"
            >
              Get Instant Access Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
