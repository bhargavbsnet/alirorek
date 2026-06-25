"use client";

import React from "react";
import { Shield, Lock, Server, Cpu, Database, CheckCircle } from "lucide-react";

export default function SecurityPage() {
  const specs = [
    {
      title: "Identity Protection via Cognito",
      desc: "All member credentials, OAuth linkages, and sessions are authorized through Amazon Cognito user pools. We do not store plaintext passwords on our application nodes.",
      icon: Lock,
    },
    {
      title: "Expiring Download Signatures",
      desc: "Resource file streams are signed at download time via AWS CloudFront private keys. Signed URLs expire automatically after 15 minutes, blocking third-party link aggregators.",
      icon: Shield,
    },
    {
      title: "Web Application Firewall (WAF)",
      desc: "ResourceFlow™ API gateways are protected behind AWS WAF layers. Scrapers, credential stuffers, and SQL injectors are blocked automatically at the edge nodes.",
      icon: Server,
    },
  ];

  return (
    <div className="relative isolate py-20 px-6 sm:py-28 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.1),transparent_50%)] pointer-events-none" />

      <div className="mx-auto max-w-4xl space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-xs font-bold text-accent uppercase tracking-widest font-mono">Platform Security</h1>
          <p className="text-4xl font-extrabold text-white">Enterprise Cloud Hardening</p>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Discover how ALIROREK enforces encryption, data isolation, and access governance across all digital resource distribution paths.
          </p>
        </div>

        {/* Security Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-slate-900">
          {specs.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="p-6 rounded-xl glass-panel space-y-4">
                <div className="p-3 rounded bg-indigo-950 text-highlight w-fit">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-white leading-tight">{s.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>

        {/* ISO/SOC Compliance block */}
        <div className="p-8 rounded-xl glass-panel-accent border-slate-900 grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-8">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">AWS Compliance Status</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Our backend operates entirely in AWS us-east-1 under strict compliance mandates. Database clusters utilize KMS keys to encrypt data at rest, and TLS 1.3 is enforced on all transit pathways.
            </p>
            <div className="flex gap-2">
              <span className="text-[10px] bg-slate-950 px-2 py-1 rounded text-slate-400 font-mono">SOC 2 compliant</span>
              <span className="text-[10px] bg-slate-950 px-2 py-1 rounded text-slate-400 font-mono">ISO 27001 ready</span>
            </div>
          </div>

          <div className="p-4 rounded bg-slate-950 border border-slate-900 space-y-3">
            <div className="text-xs font-bold text-slate-300 font-mono flex items-center gap-1.5">
              <CheckCircle className="h-4.5 w-4.5 text-accent" /> Security Metrics Audit
            </div>
            <ul className="text-[10px] text-slate-400 space-y-2">
              <li>• SSL Labs rating: A+</li>
              <li>• Daily database backups verified: Yes</li>
              <li>• API rate limit threshold: 120req/min/IP</li>
              <li>• Vulnerability patching automated: Yes</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
