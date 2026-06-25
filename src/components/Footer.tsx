"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Send, CheckCircle, AlertTriangle, ShieldCheck } from "lucide-react";
import { LogoSecondary } from "./Logo";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Subscription failed. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Something went wrong. Please check your connection.");
    }
  };

  const footerLinks = {
    platform: [
      { name: "ResourceFlow™ SaaS", href: "/resourceflow" },
      { name: "Membership Plans", href: "/membership" },
      { name: "Resources Directory", href: "/resources" },
      { name: "System Security", href: "/security" },
      { name: "Services Portfolio", href: "/services" },
    ],
    solutions: [
      { name: "Automation Use Cases", href: "/solutions" },
      { name: "Industries Served", href: "/industries" },
      { name: "Customer Case Studies", href: "/case-studies" },
      { name: "Frequently Asked Questions", href: "/faq" },
      { name: "Support Inquiry", href: "/contact?tab=support" },
    ],
    company: [
      { name: "About ALIROREK", href: "/about" },
      { name: "Careers (We are hiring)", href: "/careers" },
      { name: "Press & Media Kit", href: "/about#press" },
      { name: "AWS Cloud Governance", href: "/security#aws" },
      { name: "Contact Hub", href: "/contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Directive", href: "/cookies" },
      { name: "AWS Compliance", href: "/security#compliance" },
      { name: "Vulnerability Disclosure", href: "/security#disclosure" },
    ],
  };

  return (
    <footer className="relative bg-space-black border-t border-slate-900 pt-16 pb-8 z-10 overflow-hidden">
      {/* Background radial accent glow */}
      <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />
      <div className="absolute top-12 left-1/4 h-72 w-72 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand & Newsletter col */}
          <div className="lg:col-span-2 space-y-6">
            <LogoSecondary />
            <p className="text-sm text-slate-400 max-w-sm">
              ALIROREK helps professionals, freelancers, agencies, and enterprise scaling teams automate operations and unlock compound growth through cloud-powered productivity systems.
            </p>
            
            {/* Newsletter Subscription Card */}
            <div className="p-4 rounded-xl glass-panel-accent space-y-3">
              <div className="text-sm font-semibold text-white">Join Weekly Drops Newsletter</div>
              <p className="text-xs text-slate-400">Receive free productivity audits, blueprints, and SaaS alerts.</p>
              
              <form onSubmit={handleSubscribe} className="relative mt-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  placeholder="Enter email address"
                  className="w-full text-xs p-3 pr-10 rounded-lg bg-slate-950/80 border border-slate-800 text-white focus:ring-1 focus:ring-accent focus:outline-none"
                  disabled={status === "loading" || status === "success"}
                  aria-label="Newsletter email input"
                />
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="absolute right-1 top-1 p-2 rounded-md bg-accent text-space-black hover:bg-emerald-400 transition-colors cursor-pointer"
                  aria-label="Submit newsletter form"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>

              {/* Status Notifications */}
              {status === "loading" && (
                <div className="text-xs text-slate-400 animate-pulse">Syncing to subscription pool...</div>
              )}
              {status === "success" && (
                <div className="flex items-center gap-1.5 text-xs text-accent">
                  <CheckCircle className="h-4 w-4" />
                  <span>Subscribed! Check your inbox for verification.</span>
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-1.5 text-xs text-error">
                  <AlertTriangle className="h-4 w-4" />
                  <span>{errorMessage}</span>
                </div>
              )}
            </div>
          </div>

          {/* Links columns */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Platform</h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.platform.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Solutions</h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.solutions.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Company</h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Legal</h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Lower row */}
        <div className="mt-12 pt-8 border-t border-slate-900/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs text-slate-500">
            © {new Date().getFullYear()} ALIROREK Inc. (alirorek.com). All rights reserved. ResourceFlow™ and its logotypes are trademarks of ALIROREK.
          </div>
          
          {/* Trust badges */}
          <div className="flex items-center gap-4 text-slate-500">
            <div className="flex items-center gap-1 text-[10px] bg-slate-950 px-2.5 py-1 rounded border border-slate-900">
              <ShieldCheck className="h-3 w-3 text-accent" />
              <span>AWS Secured</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] bg-slate-950 px-2.5 py-1 rounded border border-slate-900">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              <span>WCAG 2.1 AA</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
