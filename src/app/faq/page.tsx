"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      q: "Why is the subscription only $5/month?",
      a: "We believe standard consulting fees block growing companies and freelancers from accessing proper operating structures. By automating asset assembly via serverless AWS containers and sharing systems at scale, we keep overhead minimal and pass the savings straight to members."
    },
    {
      q: "How do I cancel my subscription?",
      a: "You can cancel in exactly one click inside the billing panel of your member profile. There are no locking cycles or minimum commitment packages. If you cancel, you will maintain library downloads until the end of your billing term."
    },
    {
      q: "What format are the automation blueprints in?",
      a: "Automation files are exported as standard JSON structures compatible with Make.com blueprint imports or n8n workflows. We include an operational walk-through video explaining where to map custom API tokens."
    },
    {
      q: "How do I copy Notion templates into my team workspaces?",
      a: "When you click 'Download' on a Notion template, we generate an authenticated redirection link to the Notion template page. Simply click 'Duplicate' in the upper-right corner of Notion to append it to your workspace."
    },
    {
      q: "Are the resources updated weekly?",
      a: "Yes. Every Monday morning at 09:00 UTC, the ResourceFlow™ drops 3 fresh assets (SOP blueprints, spreadsheets, or AI prompting packs) into the members area. Active members vote on which templates we build next."
    },
    {
      q: "How secure is my billing and profile information?",
      a: "All subscription records and payments are handled securely using Stripe integrations. User profiles are isolated using Amazon Cognito identity pools. ALIROREK never stores credit card details directly on our local servers."
    }
  ];

  return (
    <div className="relative isolate py-20 px-6 sm:py-28 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.1),transparent_50%)] pointer-events-none" />

      <div className="mx-auto max-w-3xl space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-xs font-bold text-accent uppercase tracking-widest font-mono">Support Hub</h1>
          <p className="text-4xl font-extrabold text-white">Frequently Asked Questions</p>
          <p className="text-slate-400 text-sm">
            Find answers to common questions about our ResourceFlow™ membership plans, automation files, and AWS hosting security.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4 pt-8">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className="rounded-xl glass-panel-accent border-slate-900 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between text-white font-bold text-sm hover:bg-white/5 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="h-4.5 w-4.5 text-accent" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown className={`h-4 w-4 text-slate-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                </button>

                {isOpen && (
                  <div className="p-5 pt-0 border-t border-white/5 text-xs text-slate-300 leading-relaxed bg-slate-950/20">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
