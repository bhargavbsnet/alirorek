"use client";

import React, { useState } from "react";
import { 
  Cloud, Zap, Terminal, Database, ShieldCheck, Settings, 
  Cpu, Activity, CheckCircle, HelpCircle, ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<number>(0);

  const services = [
    {
      title: "AWS Consulting & Architecture",
      icon: Cloud,
      overview: "Enterprise-grade AWS infrastructure design aligning client cloud topologies with SOC2, GDPR, and AWS Well-Architected Framework guidelines.",
      benefits: "Guaranteed 99.99% uptime, strict resource isolation, IAM fine-grained privileges, and optimized cloud expense sheets.",
      tech: ["CloudFormation", "Terraform", "AWS Organizations", "IAM Access Analyzer", "AWS Cost Explorer"],
      process: "Architecture audit -> Threat modeling -> Target state mapping -> Controlled infrastructure-as-code deployment.",
      deliverables: "High-level architecture documentation, Terraform module catalog, security gap analysis report.",
      outcome: "Average of 35% drop in monthly infrastructure costs and 100% compliance auditing readiness."
    },
    {
      title: "Cloud Migration & Modernization",
      icon: Database,
      overview: "Transition legacy containerized, virtualized, or on-prem workloads to AWS serverless or Fargate containers without service disruption.",
      benefits: "Elimination of hardware lease overhead, faster release pipelines, automatic scaling to support high-density demand spikes.",
      tech: ["AWS Migration Evaluator", "AWS DMS (Database Migration)", "ECS Fargate", "Docker", "EKS"],
      process: "Dependency mapping -> Database schema replication -> Phased DNS cutover -> CloudWatch latency validation.",
      deliverables: "Zero-downtime migration pipeline scripts, verified data integrity logs, server decom schedule.",
      outcome: "Zero data losses across 140+ database cutovers with minimal application latency adjustments."
    },
    {
      title: "SaaS Development",
      icon: Zap,
      overview: "End-to-end engineering of subscription platforms, multi-tenant database designs, and third-party checkout integrations.",
      benefits: "Rapid market entry, clean tenant isolation, automatic billing cycles, and highly modular API endpoints.",
      tech: ["Next.js", "Node.js", "Prisma", "PostgreSQL", "AWS Cognito", "Stripe API"],
      process: "Database modelling -> Multi-tenant schema setup -> Stripe hook integrations -> Global edge deployment.",
      deliverables: "Product source code, automated unit tests, Stripe checkout webhook setup documentation.",
      outcome: "Launches production-ready multi-tenant MVPs within 6 to 8 weeks."
    },
    {
      title: "Business Automation Systems",
      icon: Terminal,
      overview: "Integrate disparate business pipelines, CRM databases, sales funnels, and notifications to remove daily manual entries.",
      benefits: "Removal of transcription errors, automatic status syncs, instant slack/email notifications on high-priority leads.",
      tech: ["Make.com (Integromat)", "Zapier Developer API", "n8n Self-Hosted", "AWS Lambda", "Node.js"],
      process: "Manual workflow mapping -> API endpoint validation -> Automation chain assembly -> Error boundary routing.",
      deliverables: "JSON workflow blueprint exports, custom webhooks, failover automation notifications.",
      outcome: "Reclaims 20+ hours of team manual tasks per week."
    },
    {
      title: "Productivity Systems Engineering",
      icon: Settings,
      overview: "Design custom operational command-centers, Notion database networks, SOP tracking, and project management flows.",
      benefits: "Single source of truth for procedures, clear project delegation, automated KPI tracking, and simplified onboarding.",
      tech: ["Notion API", "ClickUp Custom API", "Slack Workflows", "Retool Dashboards"],
      process: "Information architecture audit -> Custom database layout -> Automation linkages -> Team handbook alignment.",
      deliverables: "Notion Enterprise Workspace template, customized procedural SOP docs, quick-start videos.",
      outcome: "Reduces onboarding time for new hires from 3 weeks to 4 business days."
    },
    {
      title: "Resource Platform Development",
      icon: Cpu,
      overview: "Scaffold internal digital stores, asset delivery frameworks, and protected download centers for creators or networks.",
      benefits: "Protected digital downloads, strict rate-limiting, membership gating, and robust search capabilities.",
      tech: ["Amazon S3 Signed URLs", "AWS CloudFront", "Tailwind CSS", "Prisma Client"],
      process: "Asset directory structuring -> Auth gate design -> Presigned URL script writing -> Asset delivery configuration.",
      deliverables: "Resource center code assets, asset upload dashboards, secure download monitoring scripts.",
      outcome: "Guarantees digital assets are never leaked or hotlinked outside members area."
    },
    {
      title: "AI Integration & Prompt Engineering",
      icon: Cpu,
      overview: "Embed LLM prompt execution, semantic searches, and dynamic agentic flows into business operations or customer pipelines.",
      benefits: "Instant custom document generation, automated customer service routing, semantic classification of inquiries.",
      tech: ["Amazon Bedrock", "Anthropic Claude API", "OpenAI API", "LangChain", "PGVector Database"],
      process: "AI model evaluation -> Vector database chunking -> Prompt templates design -> Model cost guards setup.",
      deliverables: "Context-optimized prompt libraries, vector indexing scripts, AI execution dashboards.",
      outcome: "Resolves 60% of tier-1 support queries automatically without human handoffs."
    },
    {
      title: "Managed Cloud Services",
      icon: ShieldCheck,
      overview: "Continuous AWS server checks, security patch audits, database vacuuming, and firewall rules tuning.",
      benefits: "Peace of mind, rapid mitigation of security warnings, optimized performance, and daily backup verification.",
      tech: ["AWS Systems Manager", "Amazon GuardDuty", "AWS CloudWatch Alerts", "AWS Backup"],
      process: "Agent setups -> Security log aggregation -> Threshold configuration -> 24/7 incident response maps.",
      deliverables: "Monthly security health scorecards, backup restore testing logs, log analysis summaries.",
      outcome: "Zero critical security compromises on servers managed by ALIROREK."
    },
    {
      title: "DevOps & CI/CD Pipelines",
      icon: Activity,
      overview: "Automate code testing, staging, and production deployments to prevent release regression and code conflicts.",
      benefits: "Safe push to production multiple times a day, automated rolls, automated code formatting checks.",
      tech: ["GitHub Actions", "AWS CodePipeline", "Docker Containers", "SonarQube Linting"],
      process: "Pipeline definitions -> Test coverage integration -> Docker image build -> ECS blue/green deploy configurations.",
      deliverables: "GitHub Action workflow YAML files, Dockerfile configs, deploy logs setup.",
      outcome: "Speeds up software deployment duration from 45 minutes of manual steps to a 3-minute automated push."
    },
    {
      title: "Custom Software Development",
      icon: Terminal,
      overview: "Write specialized client-server programs, custom plugins, and business software matching niche operations.",
      benefits: "Ownership of IP, no recurring software seat fees, high integration capability with custom legacy software.",
      tech: ["TypeScript / Node.js", "Python / FastAPIs", "PostgreSQL", "React Server Components"],
      process: "Requirements blueprinting -> API architecture -> Frontend wireframing -> Agile sprint cycles.",
      deliverables: "Complete source repository ownership, unit test scripts, deployment manuals.",
      outcome: "Delivers robust bespoke applications that operate cleanly for years with zero software dependency licensing fees."
    }
  ];

  const current = services[selectedService];

  return (
    <div className="relative isolate py-20 px-6 sm:py-28 lg:px-8">
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.1),transparent_50%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <h1 className="text-xs font-bold text-accent uppercase tracking-widest">Our Offerings</h1>
          <p className="text-4xl font-extrabold text-white">IT Consulting & Software Engineering Services</p>
          <p className="text-slate-400">
            ALIROREK deploys senior AWS architects and full-stack software engineers to help your team automate workflows and optimize infrastructure.
          </p>
        </div>

        {/* Dynamic Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Side Menu Toggles (10 Services) */}
          <div className="lg:col-span-4 space-y-2 max-h-[600px] overflow-y-auto pr-2 border-r border-slate-900">
            {services.map((service, idx) => {
              const Icon = service.icon;
              const isSelected = selectedService === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedService(idx)}
                  className={`w-full text-left p-3.5 rounded-lg flex items-center gap-3 transition-all ${
                    isSelected
                      ? "bg-accent/15 border border-accent text-white"
                      : "bg-slate-950/60 border border-slate-900 text-slate-400 hover:border-slate-800 hover:text-slate-300"
                  }`}
                >
                  <Icon className={`h-5 w-5 ${isSelected ? "text-accent" : "text-slate-500"}`} />
                  <span className="text-sm font-semibold">{service.title}</span>
                </button>
              );
            })}
          </div>

          {/* Details Column */}
          <div className="lg:col-span-8 p-8 rounded-xl glass-panel-accent border-indigo-900/50 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-indigo-950 text-highlight">
                <current.icon className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">{current.title}</h2>
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">Service Overview</h3>
                <p className="text-slate-300 mt-1 leading-relaxed">{current.overview}</p>
              </div>

              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">Key Benefits</h3>
                <p className="text-slate-300 mt-1 leading-relaxed">{current.benefits}</p>
              </div>

              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">Technologies & Tools</h3>
                <div className="flex flex-wrap gap-2 mt-1.5">
                  {current.tech.map((t, idx) => (
                    <span key={idx} className="text-xs bg-slate-950 border border-slate-800 px-2.5 py-1 rounded text-slate-300 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-900/60">
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">Operational Process</h3>
                  <p className="text-slate-300 mt-1 leading-relaxed text-xs">{current.process}</p>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">Core Deliverables</h3>
                  <p className="text-slate-300 mt-1 leading-relaxed text-xs">{current.deliverables}</p>
                </div>
              </div>

              <div className="p-4 rounded bg-accent/5 border border-accent/20">
                <h3 className="text-xs font-bold text-accent uppercase tracking-widest font-mono">Verifiable Client Outcome</h3>
                <p className="text-slate-200 mt-1 font-semibold">{current.outcome}</p>
              </div>
            </div>

            {/* Consultation Booking CTA */}
            <div className="flex justify-between items-center pt-4 border-t border-slate-900/60">
              <span className="text-xs text-slate-400">Need this service deployed for your company?</span>
              <Link
                href="/contact"
                className="flex items-center gap-1 text-sm text-accent font-bold hover:underline"
              >
                <span>Request Custom Scope</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
