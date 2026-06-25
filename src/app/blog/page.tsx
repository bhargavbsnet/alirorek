"use client";

import React, { useState } from "react";
import { BookOpen, Calendar, Clock, ArrowRight, User } from "lucide-react";
import Link from "next/link";

export default function BlogIndexPage() {
  const [selectedTag, setSelectedTag] = useState("all");

  const articles = [
    {
      id: "post-1",
      title: "How We Scaled ResourceFlow™ Downloads to 10k/Day Using AWS Lambda & CloudFront",
      tag: "aws",
      date: "June 12, 2026",
      readTime: "8 min read",
      author: "Bhargav Basnet",
      desc: "An inside look at our serverless architecture: generating time-gated secure download tokens using Node.js execution layers and Amazon Web Services edge caches.",
    },
    {
      id: "post-2",
      title: "The Zero-Admin Notion System: Mapping Team Operations Without Custom Database Bloat",
      tag: "productivity",
      date: "May 28, 2026",
      readTime: "6 min read",
      author: "Elena Rostova",
      desc: "Stop creating complex relation tags in Notion that slow down your workspaces. Discover how single-layer directories simplify procedure onboarding.",
    },
    {
      id: "post-3",
      title: "Connecting Make.com with Slack Channels to Filter and Route High-Value SDR Leads",
      tag: "automation",
      date: "May 15, 2026",
      readTime: "5 min read",
      author: "Marcus Vance",
      desc: "Step-by-step instructions on writing clean JSON parsing scripts inside Integromat scenarios to screen contact queries automatically.",
    },
    {
      id: "post-4",
      title: "A Master Prompting Framework for Generating Consistent Marketing Copy via Claude 3.5 Sonnet",
      tag: "ai",
      date: "April 22, 2026",
      readTime: "10 min read",
      author: "Elena Rostova",
      desc: "How to anchor style guidelines, brand tone variables, and length requirements inside System Prompts to avoid generic AI-sounding landing pages.",
    }
  ];

  const filtered = selectedTag === "all" ? articles : articles.filter(a => a.tag === selectedTag);

  return (
    <div className="relative isolate py-20 px-6 sm:py-28 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(76,29,149,0.1),transparent_50%)] pointer-events-none" />

      <div className="mx-auto max-w-5xl space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-xs font-bold text-accent uppercase tracking-widest font-mono">ALIROREK Publications</h1>
          <p className="text-4xl font-extrabold text-white">Systems, Code, &amp; Cloud Insights</p>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed text-sm">
            Read engineering walkthroughs, Notion design tutorials, automation scripts reviews, and AWS system guides prepared by our delivery team.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex justify-center gap-2 border-b border-slate-900 pb-4">
          {["all", "aws", "automation", "productivity", "ai"].map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1.5 rounded text-xs font-bold capitalize transition-all ${
                selectedTag === tag ? "bg-accent text-space-black" : "bg-slate-950 text-slate-400 hover:text-white"
              }`}
            >
              {tag === "aws" ? "AWS Cloud" : tag}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((post) => (
            <article 
              key={post.id} 
              className="p-6 rounded-xl glass-panel-accent border-slate-900 flex flex-col justify-between hover:border-slate-800 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs text-slate-500 font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {post.readTime}
                  </span>
                </div>
                
                <h2 className="text-xl font-bold text-white hover:text-accent transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
                  {post.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-900/60 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <User className="h-3.5 w-3.5 text-highlight" />
                  <span>{post.author}</span>
                </div>
                
                <span className="text-xs text-accent font-bold flex items-center gap-1 hover:underline cursor-pointer">
                  <span>Read Article</span>
                  <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
