"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Layers, BookOpen, Shield, Users, Briefcase, HelpCircle, FileText, Phone, Settings, Activity } from "lucide-react";
import { LogoPrimary, LogoGradients } from "./Logo";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigation = {
    platform: {
      label: "Platform",
      items: [
        { name: "ResourceFlow™", href: "/resourceflow", desc: "Our core resource subscription platform", icon: Layers },
        { name: "Membership Plans", href: "/membership", desc: "Pricing models starting at $5/month", icon: Settings },
        { name: "Resources Directory", href: "/resources", desc: "Search & download templates and systems", icon: BookOpen },
        { name: "Platform Security", href: "/security", desc: "Enterprise AWS-powered security", icon: Shield },
      ],
    },
    solutions: {
      label: "Solutions",
      items: [
        { name: "Use Case Solutions", href: "/solutions", desc: "Productivity automation solutions", icon: Activity },
        { name: "Target Industries", href: "/industries", desc: "Resources for Agencies, Startups & more", icon: Users },
        { name: "Case Studies", href: "/case-studies", desc: "Proven operational metrics & success", icon: FileText },
      ],
    },
    company: {
      label: "Company",
      items: [
        { name: "About ALIROREK", href: "/about", desc: "Our vision, mission, and team", icon: Users },
        { name: "Careers", href: "/careers", desc: "Join our remote cloud-first crew", icon: Briefcase },
        { name: "Services", href: "/services", desc: "AWS and Automation consulting", icon: Settings },
        { name: "Tech Blog", href: "/blog", desc: "Guides on Cloud, AI, and operations", icon: BookOpen },
        { name: "FAQ", href: "/faq", desc: "Common technical & membership queries", icon: HelpCircle },
      ],
    },
  };

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full glass-navbar">
      <LogoGradients />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center outline-none focus:ring-2 focus:ring-accent rounded-lg" aria-label="ALIROREK Home">
              <LogoPrimary />
            </Link>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex space-x-1 lg:space-x-4">
            {/* Direct Home Link */}
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/") ? "text-accent" : "text-slate-300 hover:text-white"
              }`}
            >
              Home
            </Link>

            {/* Dropdown groups */}
            {Object.entries(navigation).map(([key, group]) => {
              const isOpen = activeDropdown === key;
              return (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      group.items.some((item) => isActive(item.href))
                        ? "text-accent"
                        : "text-slate-300 hover:text-white"
                    }`}
                    aria-expanded={isOpen}
                  >
                    <span>{group.label}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-1/2 z-10 mt-1 w-80 -translate-x-1/2 rounded-xl glass-panel p-4 shadow-2xl ring-1 ring-black/5"
                      >
                        <div className="grid gap-2">
                          {group.items.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-start gap-3 p-2 rounded-lg transition-all hover:bg-white/5 ${
                                  isActive(item.href) ? "bg-white/5 text-accent" : "text-slate-300"
                                }`}
                              >
                                <div className="p-1 rounded-md bg-indigo-950/50 text-highlight">
                                  <Icon className="h-5 w-5" />
                                </div>
                                <div>
                                  <div className="text-sm font-semibold">{item.name}</div>
                                  <div className="text-xs text-slate-400 mt-0.5 line-clamp-1">{item.desc}</div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Right side CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/membership"
              className="text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-semibold text-white rounded-lg group bg-gradient-to-br from-accent to-highlight group-hover:from-accent group-hover:to-highlight hover:text-white focus:ring-4 focus:outline-none focus:ring-accent"
            >
              <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-space-black rounded-md group-hover:bg-opacity-0">
                Request Demo
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-accent"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle main menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-t border-white/10"
          >
            <div className="space-y-1 px-4 pb-6 pt-4 max-h-[80vh] overflow-y-auto">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-semibold ${
                  isActive("/") ? "bg-accent/15 text-accent" : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                Home
              </Link>

              {Object.entries(navigation).map(([key, group]) => (
                <div key={key} className="pt-2">
                  <div className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-widest">
                    {group.label}
                  </div>
                  <div className="mt-1 space-y-1 pl-2">
                    {group.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium ${
                            isActive(item.href) ? "bg-accent/15 text-accent" : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                          }`}
                        >
                          <Icon className="h-4 w-4 text-highlight" />
                          <span>{item.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}

              <div className="pt-6 mt-6 border-t border-white/5 flex flex-col gap-3">
                <Link
                  href="/membership"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center px-4 py-2 border border-slate-700 rounded-lg text-slate-300 font-medium hover:bg-white/5"
                >
                  Sign In
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center px-4 py-2.5 bg-gradient-to-r from-accent to-highlight text-space-black font-bold rounded-lg shadow-lg hover:brightness-110 transition-all"
                >
                  Request Demo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
