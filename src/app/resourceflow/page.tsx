"use client";

import React, { useState } from "react";
import { 
  Search, SlidersHorizontal, Download, Sparkles, Terminal, 
  Database, Network, Zap, CheckCircle2, Shield, Activity, BarChart3
} from "lucide-react";

export default function ResourceFlowPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [downloadCounts, setDownloadCounts] = useState<Record<string, number>>({
    "res-1": 1240,
    "res-2": 892,
    "res-3": 448,
    "res-4": 1560,
    "res-5": 612,
    "res-6": 1944,
  });

  const categories = [
    { id: "all", name: "All Assets" },
    { id: "blueprints", name: "Automation Blueprints" },
    { id: "sops", name: "SOP Libraries" },
    { id: "prompts", name: "AI Prompts" },
    { id: "notion", name: "Notion Systems" },
    { id: "sheets", name: "Spreadsheets" },
  ];

  const mockResources = [
    {
      id: "res-1",
      title: "Cold Email Client Acquisition System",
      category: "blueprints",
      desc: "Includes Make.com JSON scenario exports, Apollo database parsing rules, and three high-converting cold outreach copies.",
      tags: ["Outreach", "Make.com", "Sales"],
      fileType: "ZIP File (2.4MB)"
    },
    {
      id: "res-2",
      title: "Vetting & Hiring SOP Checklist Pack",
      category: "sops",
      desc: "Standard operating procedures for remote contractor onboarding, vetting portfolios, and running test tasks without handholding.",
      tags: ["HR Operations", "PDF", "Notion"],
      fileType: "PDF Document (1.1MB)"
    },
    {
      id: "res-3",
      title: "AWS ECS Container Launch Automation Template",
      category: "blueprints",
      desc: "Terraform blueprint to scale ECS Fargate container deployments with WAF firewalls and Route 53 rules fully configured.",
      tags: ["DevOps", "AWS", "Terraform"],
      fileType: "Terraform JSON (450KB)"
    },
    {
      id: "res-4",
      title: "Midjourney Brand Design System Prompts",
      category: "prompts",
      desc: "15-prompt generator sheet to create premium SaaS illustrations, branding vectors, and dark-mode UI graphics with consistent style weights.",
      tags: ["Design", "AI Prompts", "Midjourney"],
      fileType: "TXT File (12KB)"
    },
    {
      id: "res-5",
      title: "Client Portal & Project Tracker Workspace",
      category: "notion",
      desc: "Notion workspace blueprint with task status syncs, invoice history, feedback logs, and customer onboarding assets.",
      tags: ["Notion", "Project Management"],
      fileType: "Notion Link"
    },
    {
      id: "res-6",
      title: "Agency Capacity & Profitability Calculator",
      category: "sheets",
      desc: "Dynamic financial spreadsheet modeling team overhead, project margins, billable target thresholds, and sales forecasting.",
      tags: ["Finance", "Excel", "Google Sheets"],
      fileType: "Google Sheets Copy"
    }
  ];

  const filteredResources = mockResources.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDownload = (id: string, name: string) => {
    setDownloadingId(id);
    setTimeout(() => {
      setDownloadingId(null);
      setDownloadCounts(prev => ({
        ...prev,
        [id]: prev[id] + 1
      }));
      // Record download audit through our API in the background
      fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resourceId: id, resourceName: name }),
      }).catch(err => console.warn("Log tracking bypassed:", err));
    }, 1500);
  };

  return (
    <div className="relative isolate py-20 px-6 sm:py-28 lg:px-8">
      {/* Background neon elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_50%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl space-y-16">
        {/* Product Heading */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-ping" />
            <span>ResourceFlow™ Subscription SaaS</span>
          </div>
          <h1 className="text-4xl font-extrabold text-white">Weekly Resources. Continuous Growth.</h1>
          <p className="text-slate-400">
            A subscription platform delivering weekly premium business assets, automation playbooks, prompts, system checklists, and operations playbooks straight to your dashboard.
          </p>
        </div>

        {/* Live Search Sandbox Simulator */}
        <div className="p-6 rounded-2xl glass-panel space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-white">Interactive Resource Sandbox</h2>
              <p className="text-xs text-slate-400">Filter, search, and simulate downloads from our active member catalog.</p>
            </div>
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
                <Search className="h-4 w-4" />
              </span>
              <input
                type="text"
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs pl-9 pr-4 py-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-white focus:ring-1 focus:ring-accent focus:outline-none"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-slate-900 pb-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat.id
                    ? "bg-accent text-space-black font-bold"
                    : "bg-slate-950 text-slate-400 hover:text-white"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Library Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.length > 0 ? (
              filteredResources.map((res) => {
                const isDownloading = downloadingId === res.id;
                return (
                  <div key={res.id} className="p-5 rounded-xl bg-slate-950/60 border border-slate-900 flex flex-col justify-between hover:border-slate-800 transition-colors">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-[10px]">
                        <span className="font-mono text-slate-500 uppercase">{res.fileType}</span>
                        <span className="text-slate-400 flex items-center gap-1">
                          <Download className="h-3 w-3" /> {downloadCounts[res.id]} downloads
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-white leading-tight">{res.title}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">{res.desc}</p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-900/60 flex items-center justify-between">
                      <div className="flex gap-1.5">
                        {res.tags.map((tag, idx) => (
                          <span key={idx} className="text-[9px] bg-indigo-950/60 text-highlight px-2 py-0.5 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => handleDownload(res.id, res.title)}
                        disabled={isDownloading}
                        className={`flex items-center gap-1 px-3 py-1.5 rounded text-xs font-bold transition-all ${
                          isDownloading 
                            ? "bg-slate-800 text-slate-500 cursor-not-allowed" 
                            : "bg-accent text-space-black hover:bg-emerald-400"
                        }`}
                      >
                        {isDownloading ? (
                          <>
                            <span className="h-2 w-2 rounded-full border border-slate-500 border-t-transparent animate-spin mr-1" />
                            <span>Building...</span>
                          </>
                        ) : (
                          <>
                            <Download className="h-3 w-3" />
                            <span>Download</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-span-full py-10 text-center text-slate-500 text-sm">
                No resources found matching your current filter filters or search keywords.
              </div>
            )}
          </div>
        </div>

        {/* Member Analytics Platform Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8 border-t border-slate-900">
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-2xl font-bold text-white">Real-Time Usage & Analytics</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Inside your private member dashboard, monitor your resource usage, set favorite libraries, track automation execution stats, and request custom SOP blueprints.
            </p>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" /> Custom categories folders organization
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" /> One-click Notion workspace imports
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" /> Automated custom email reports on weekly drops
              </li>
            </ul>
          </div>
          
          <div className="lg:col-span-7 p-6 rounded-xl glass-panel-accent border-indigo-900/50 space-y-4">
            <div className="flex justify-between items-center border-b border-white/5 pb-2">
              <span className="text-xs font-bold text-slate-300 font-mono">Subscriber Dashboard API Analytics</span>
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="p-3 rounded bg-slate-950 border border-slate-900 text-center">
                <div className="text-lg font-bold text-highlight">14</div>
                <div className="text-[9px] text-slate-500 uppercase font-mono">Downloads Used</div>
              </div>
              <div className="p-3 rounded bg-slate-950 border border-slate-900 text-center">
                <div className="text-lg font-bold text-accent">85%</div>
                <div className="text-[9px] text-slate-500 uppercase font-mono">Automation Success</div>
              </div>
              <div className="p-3 rounded bg-slate-950 border border-slate-900 text-center">
                <div className="text-lg font-bold text-white">4</div>
                <div className="text-[9px] text-slate-500 uppercase font-mono">Active Blueprints</div>
              </div>
            </div>

            {/* Performance charts lines */}
            <div className="h-24 bg-slate-950 border border-slate-900 rounded p-4 flex items-end gap-1.5 justify-around">
              <div className="w-6 bg-accent/20 rounded-t h-1/3 hover:bg-accent transition-all cursor-pointer" />
              <div className="w-6 bg-accent/30 rounded-t h-2/3 hover:bg-accent transition-all cursor-pointer" />
              <div className="w-6 bg-accent/40 rounded-t h-1/2 hover:bg-accent transition-all cursor-pointer" />
              <div className="w-6 bg-accent/60 rounded-t h-3/4 hover:bg-accent transition-all cursor-pointer" />
              <div className="w-6 bg-accent/90 rounded-t h-full hover:bg-accent transition-all cursor-pointer" />
            </div>
          </div>
        </div>

        {/* AWS Powered Platform Security */}
        <div className="p-8 rounded-xl glass-panel border-slate-800 text-center space-y-4 max-w-3xl mx-auto">
          <Shield className="h-10 w-10 text-accent mx-auto" />
          <h2 className="text-xl font-bold text-white">Protected via Secure AWS Handshakes</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Every download request generates a custom **AWS CloudFront Signed URL** valid for exactly 15 minutes, blocking web scraping spiders. Subscription data is isolated inside dedicated PostgreSQL clusters with daily encryption snapshots.
          </p>
        </div>
      </div>
    </div>
  );
}
