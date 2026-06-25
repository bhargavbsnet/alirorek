"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Send, CheckCircle, AlertTriangle, HelpCircle } from "lucide-react";

export default function ContactPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"general" | "demo" | "support">("general");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
    company: "",
    size: "1-10",
    plan: "monthly",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMsg("Please fill out all required fields.");
      return;
    }

    setStatus("loading");
    try {
      const endpoint = activeTab === "demo" ? "/api/contact?type=demo" : "/api/contact?type=general";
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        // Clear form
        setFormData({
          name: "",
          email: "",
          subject: "General Inquiry",
          message: "",
          company: "",
          size: "1-10",
          plan: "monthly",
        });
        // Redirect to thank you page
        router.push("/thank-you");
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Failed to connect to servers. Please try again.");
    }
  };

  return (
    <div className="relative isolate py-20 px-6 sm:py-28 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(76,29,149,0.1),transparent_50%)] pointer-events-none" />

      <div className="mx-auto max-w-xl space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-xs font-bold text-accent uppercase tracking-widest font-mono">Contact Operations</h1>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">Let&apos;s Connect Operations</p>
          <p className="text-slate-400 text-sm">
            Select the appropriate channel below to route your message to our systems or support group.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex rounded-lg bg-slate-950 border border-slate-900 p-1">
          {(["general", "demo", "support"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setStatus("idle");
              }}
              className={`flex-1 py-2 text-xs font-bold rounded transition-all capitalize ${
                activeTab === tab ? "bg-accent text-space-black" : "text-slate-400 hover:text-white"
              }`}
            >
              {tab === "general" ? "General Contact" : tab === "demo" ? "Request Demo" : "Support Ticket"}
            </button>
          ))}
        </div>

        {/* Form Container */}
        <div className="p-8 rounded-xl glass-panel-accent border-slate-900">
          <form onSubmit={handleSubmit} className="space-y-5 text-left text-xs">
            
            {/* Common Name/Email fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-slate-400 font-medium">Name <span className="text-error">*</span></label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:ring-1 focus:ring-accent"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-slate-400 font-medium">Email <span className="text-error">*</span></label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@company.com"
                  className="w-full p-3 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:ring-1 focus:ring-accent"
                  required
                />
              </div>
            </div>

            {/* Tab specific fields */}
            {activeTab === "demo" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-slate-400 font-medium">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Acme Corp"
                    className="w-full p-3 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-slate-400 font-medium">Team Size</label>
                  <select
                    name="size"
                    value={formData.size}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:ring-1 focus:ring-accent"
                  >
                    <option value="1-10">1 - 10 people</option>
                    <option value="11-50">11 - 50 people</option>
                    <option value="51+">51+ people</option>
                  </select>
                </div>
              </div>
            )}

            {/* Subject Field */}
            {activeTab !== "demo" && (
              <div className="space-y-1">
                <label className="text-slate-400 font-medium">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:ring-1 focus:ring-accent"
                >
                  {activeTab === "general" ? (
                    <>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Billing Question">Billing &amp; Payments</option>
                      <option value="AWS Consulting">AWS Architecture Scope</option>
                    </>
                  ) : (
                    <>
                      <option value="System Login Bug">Cannot Access Member Area</option>
                      <option value="Download Error">ZIP Download Failed</option>
                      <option value="Billing Dispute">Subscription Cancel Request</option>
                    </>
                  )}
                </select>
              </div>
            )}

            {/* Message/Description field */}
            <div className="space-y-1">
              <label className="text-slate-400 font-medium">
                {activeTab === "demo" ? "Tell us about your team operations" : "Message / Description"} <span className="text-error">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder={activeTab === "demo" ? "Which weekly templates or automated pipelines is your team looking to deploy?" : "How can we help?"}
                rows={4}
                className="w-full p-3 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:ring-1 focus:ring-accent"
                required
              />
            </div>

            {/* Action Button */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3 bg-accent text-space-black font-extrabold text-sm rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {status === "loading" ? (
                <>
                  <span className="h-4.5 w-4.5 rounded-full border-2 border-space-black border-t-transparent animate-spin" />
                  <span>Syncing request...</span>
                </>
              ) : (
                <>
                  <span>Send Secure Message</span>
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>

            {/* Response states */}
            {status === "error" && (
              <div className="p-3 bg-error/15 border border-error/25 text-error rounded flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                <span>{errorMsg}</span>
              </div>
            )}

          </form>
        </div>

      </div>
    </div>
  );
}
