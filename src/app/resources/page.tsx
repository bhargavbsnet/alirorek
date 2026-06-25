"use client";

import React, { useState } from "react";
import { Search, Download, Eye, FileText, ExternalLink, Lock } from "lucide-react";
import Link from "next/link";

export default function ResourcesCatalogPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const libraryItems = [
    {
      id: "pub-1",
      title: "Notion Team Hub Workspace Starter",
      type: "Notion Template",
      category: "free",
      desc: "A simplified version of our agency manager workspace. Includes projects list, tasks dashboard, and client contact directories.",
      downloadUrl: "https://notion.so",
    },
    {
      id: "pub-2",
      title: "Contractor Onboarding SOP Guide",
      type: "SOP Document",
      category: "free",
      desc: "Step-by-step PDF manual detailing how to add international contractors, configure Slack bounds, and track deliverables.",
      downloadUrl: "#",
    },
    {
      id: "pub-3",
      title: "Make.com Cold Outreach Integration Blueprint",
      type: "Automation Export",
      category: "premium",
      desc: "Complete JSON structure connecting webhooks to cold emailing tools. Gated behind ResourceFlow™ membership.",
      downloadUrl: "/membership",
    },
    {
      id: "pub-4",
      title: "Midjourney Photorealistic Image Prompt Catalog",
      type: "AI Prompt Matrix",
      category: "premium",
      desc: "Premium seed formulas to render commercial photography assets for landing pages. Gated behind ResourceFlow™ membership.",
      downloadUrl: "/membership",
    }
  ];

  const filteredItems = libraryItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) || 
                          item.desc.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || item.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="relative isolate py-20 px-6 sm:py-28 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.1),transparent_50%)] pointer-events-none" />

      <div className="mx-auto max-w-5xl space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-xs font-bold text-accent uppercase tracking-widest">Public Asset Hub</h1>
          <p className="text-4xl font-extrabold text-white">Free Teasers. Premium Blueprints.</p>
          <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Test the quality of our systems with free sample downloads, or upgrade to a $5/month membership to unlock the entire live archive.
          </p>
        </div>

        {/* Filters and search bar */}
        <div className="p-4 rounded-xl glass-panel flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1.5 rounded text-xs font-bold transition-all ${
                filter === "all" ? "bg-accent text-space-black" : "bg-slate-950 text-slate-400 hover:text-white"
              }`}
            >
              All Assets
            </button>
            <button
              onClick={() => setFilter("free")}
              className={`px-3 py-1.5 rounded text-xs font-bold transition-all ${
                filter === "free" ? "bg-accent text-space-black" : "bg-slate-950 text-slate-400 hover:text-white"
              }`}
            >
              Free Samples
            </button>
            <button
              onClick={() => setFilter("premium")}
              className={`px-3 py-1.5 rounded text-xs font-bold transition-all ${
                filter === "premium" ? "bg-accent text-space-black" : "bg-slate-950 text-slate-400 hover:text-white"
              }`}
            >
              Premium Locks
            </button>
          </div>

          <div className="relative w-full md:w-64">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
              <Search className="h-4.5 w-4.5" />
            </span>
            <input
              type="text"
              placeholder="Search downloads..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full text-xs pl-9 pr-4 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:ring-1 focus:ring-accent focus:outline-none"
            />
          </div>
        </div>

        {/* Directory List */}
        <div className="space-y-4">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="p-6 rounded-xl glass-panel-accent border-slate-900 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
            >
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] bg-slate-950 border border-slate-800 text-highlight px-2 py-0.5 rounded font-mono">
                    {item.type}
                  </span>
                  {item.category === "premium" && (
                    <span className="text-[9px] bg-amber-500/25 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded font-bold uppercase tracking-wider flex items-center gap-1">
                      <Lock className="h-2.5 w-2.5" /> Premium
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-white leading-tight">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>

              <div>
                {item.category === "premium" ? (
                  <Link
                    href="/membership"
                    className="flex items-center gap-1.5 px-4 py-2 bg-amber-500 text-space-black font-extrabold text-xs rounded hover:bg-amber-400 transition-colors cursor-pointer"
                  >
                    <span>Unlock for $5/mo</span>
                    <Lock className="h-3.5 w-3.5" />
                  </Link>
                ) : (
                  <a
                    href={item.downloadUrl}
                    className="flex items-center gap-1.5 px-4 py-2 bg-accent text-space-black font-extrabold text-xs rounded hover:bg-emerald-400 transition-colors"
                  >
                    <span>Download</span>
                    <Download className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
