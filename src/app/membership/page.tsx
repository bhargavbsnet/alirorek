"use client";

import React, { useState } from "react";
import { CheckCircle2, XCircle, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function MembershipPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const comparisonFeatures = [
    { name: "Weekly Resource Drops", monthly: true, annual: true },
    { name: "Access to SOP Library", monthly: true, annual: true },
    { name: "Access to AI Prompt Library", monthly: true, annual: true },
    { name: "Make.com & n8n JSON Exports", monthly: true, annual: true },
    { name: "Direct Notion Workspace Duplications", monthly: true, annual: true },
    { name: "Prioritized Custom Resource Votes", monthly: false, annual: true },
    { name: "Direct Slack Community Channel", monthly: false, annual: true },
    { name: "AWS Cloud Consultation Audit (15 mins)", monthly: false, annual: true },
  ];

  return (
    <div className="relative isolate py-20 px-6 sm:py-28 lg:px-8">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(76,29,149,0.1),transparent_50%)] pointer-events-none" />

      <div className="mx-auto max-w-5xl space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-xs font-bold text-accent uppercase tracking-widest">Pricing Strategy</h1>
          <p className="text-4xl font-extrabold text-white">Simple Pricing. Exponential Returns.</p>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Choose the plan that matches your execution pace. Cancel anytime with a single click inside your dashboard.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-3 pt-6">
            <span className={`text-sm ${billingCycle === "monthly" ? "text-white font-semibold" : "text-slate-400"}`}>Monthly billing</span>
            <button
              onClick={() => setBillingCycle(prev => prev === "monthly" ? "annual" : "monthly")}
              className="relative w-12 h-6 rounded-full bg-slate-900 border border-slate-800 p-0.5 transition-colors focus:outline-none"
              aria-label="Toggle billing cycle"
            >
              <div 
                className={`w-4.5 h-4.5 rounded-full bg-accent transition-transform duration-200 ${
                  billingCycle === "annual" ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <span className={`text-sm ${billingCycle === "annual" ? "text-white font-semibold" : "text-slate-400"}`}>
              Annual billing <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded font-bold ml-1">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          
          {/* Monthly Plan */}
          <div className="p-8 rounded-2xl glass-panel relative flex flex-col justify-between border-slate-800">
            <div>
              <h2 className="text-lg font-bold text-white">Monthly Membership</h2>
              <p className="text-xs text-slate-400 mt-1">Perfect for freelancers and builders testing systems.</p>
              
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white">$5</span>
                <span className="text-xs text-slate-400">/ month</span>
              </div>
              <div className="text-[10px] text-slate-500 mt-1 font-mono">Billed monthly, cancel anytime.</div>

              <ul className="mt-8 space-y-3.5 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  <span>3 new weekly drops</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  <span>Full access to 320+ libraries</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  <span>Notion & Automation exports</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <Link
                href="/contact?plan=monthly"
                className="block w-full py-3 bg-slate-900 border border-slate-800 text-slate-200 text-center font-bold text-sm rounded-lg hover:bg-slate-800 transition-colors"
              >
                Get Monthly Pass
              </Link>
            </div>
          </div>

          {/* Annual Plan */}
          <div className="p-8 rounded-2xl glass-panel-accent border-accent/20 relative flex flex-col justify-between">
            <div className="absolute top-0 right-6 -translate-y-1/2 bg-accent text-space-black font-extrabold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full">
              Recommended
            </div>

            <div>
              <h2 className="text-lg font-bold text-white">Annual Membership</h2>
              <p className="text-xs text-slate-300 mt-1">For agency owners and teams scaling operations.</p>
              
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white">$48</span>
                <span className="text-xs text-slate-300">/ year</span>
              </div>
              <div className="text-[10px] text-accent mt-1 font-mono">Save $12/year (Equivalent to $4/month).</div>

              <ul className="mt-8 space-y-3.5 text-xs text-slate-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  <span>All Monthly features included</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  <span>Priority votes on next week drops</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  <span>Access to private Slack network</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  <span>15-min Cloud/AWS Audit consultation</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <Link
                href="/contact?plan=annual"
                className="block w-full py-3 bg-accent text-space-black text-center font-extrabold text-sm rounded-lg hover:brightness-110 transition-all shadow-lg"
              >
                Join Annually Now
              </Link>
            </div>
          </div>

        </div>

        {/* Feature Comparison Table */}
        <div className="space-y-6 pt-12 border-t border-slate-900">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white">Compare Membership Privileges</h2>
            <p className="text-slate-400 text-sm mt-1">Detailed breakdown of plan structures.</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400">
                  <th className="py-3 font-semibold">Features & Deliverables</th>
                  <th className="py-3 font-semibold text-center">Monthly Plan</th>
                  <th className="py-3 font-semibold text-center">Annual Plan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-900/60 text-slate-300">
                {comparisonFeatures.map((feat, idx) => (
                  <tr key={idx} className="hover:bg-slate-950/25">
                    <td className="py-3 font-medium">{feat.name}</td>
                    <td className="py-3 text-center">
                      {feat.monthly ? (
                        <CheckCircle2 className="h-4.5 w-4.5 text-accent mx-auto" />
                      ) : (
                        <XCircle className="h-4.5 w-4.5 text-slate-700 mx-auto" />
                      )}
                    </td>
                    <td className="py-3 text-center">
                      {feat.annual ? (
                        <CheckCircle2 className="h-4.5 w-4.5 text-accent mx-auto" />
                      ) : (
                        <XCircle className="h-4.5 w-4.5 text-slate-700 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Dynamic Billing Calculator */}
        <div className="p-8 rounded-xl glass-panel-accent border-indigo-900/50 max-w-2xl mx-auto space-y-4">
          <h3 className="text-lg font-bold text-white text-center">Dynamic ROI Estimator</h3>
          <p className="text-xs text-slate-400 text-center">Estimate how much operations budget you reclaim by using our premade systems.</p>
          
          <div className="grid grid-cols-2 gap-4 text-center pt-4">
            <div className="p-3 bg-slate-950 border border-slate-900 rounded">
              <div className="text-xs text-slate-500 font-mono">Estimated Consultation Cost Saved</div>
              <div className="text-2xl font-bold text-accent">$850+ /mo</div>
            </div>
            <div className="p-3 bg-slate-950 border border-slate-900 rounded">
              <div className="text-xs text-slate-500 font-mono">Estimated Team Hours Saved</div>
              <div className="text-2xl font-bold text-highlight">18 hrs /mo</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
