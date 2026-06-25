import React from "react";

export default function TermsPage() {
  return (
    <div className="relative isolate py-20 px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-8 text-left text-xs text-slate-300 leading-relaxed">
        <h1 className="text-3xl font-extrabold text-white text-center mb-8">Terms of Service</h1>
        
        <p className="text-sm font-semibold text-white">Last updated: June 25, 2026</p>
        
        <p>
          Welcome to ALIROREK. By subscribing to ResourceFlow™ or using the assets catalog on alirorek.com, you agree to these Terms of Service.
        </p>

        <h2 className="text-sm font-bold text-white uppercase tracking-wider pt-4">1. Membership License</h2>
        <p>
          Subject to active payments, ALIROREK grants members a limited, non-exclusive, non-transferable license to import, use, and adapt downloadable resources (Notion templates, spreadsheets, and automation JSON files) for internal business workflows.
        </p>
        <p>
          You may not resell, repackage, or distribute our assets as stand-alone files, templates, or consulting products.
        </p>

        <h2 className="text-sm font-bold text-white uppercase tracking-wider pt-4">2. Payment &amp; Automatic Renewal</h2>
        <p>
          Memberships are billed on a recurring monthly ($5) or annual ($48) cycle. Payment runs automatically at the start of each cycle. You can cancel at any time inside the dashboard.
        </p>

        <h2 className="text-sm font-bold text-white uppercase tracking-wider pt-4">3. Security Limits</h2>
        <p>
          You agree not to bypass security features, use bot scrapers to download our directory, or share user profile tokens. Doing so results in instant termination of membership without refunds.
        </p>
      </div>
    </div>
  );
}
