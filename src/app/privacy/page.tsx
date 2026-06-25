import React from "react";

export default function PrivacyPage() {
  return (
    <div className="relative isolate py-20 px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-8 text-left text-xs text-slate-300 leading-relaxed">
        <h1 className="text-3xl font-extrabold text-white text-center mb-8">Privacy Policy</h1>
        
        <p className="text-sm font-semibold text-white">Last updated: June 25, 2026</p>
        
        <p>
          At ALIROREK (alirorek.com), we respect the privacy of our visitors and ResourceFlow™ subscribers. This policy outlines how we collect, process, and protect your identity information.
        </p>

        <h2 className="text-sm font-bold text-white uppercase tracking-wider pt-4">1. Data We Collect</h2>
        <p>
          We collect standard identification variables to manage user logins, memberships, and billing updates:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Profile credentials:</strong> Names, emails, and passwords collected through Amazon Cognito.</li>
          <li><strong>Billing transactions:</strong> Card metadata processed entirely via Stripe checkout hooks.</li>
          <li><strong>Usage histories:</strong> File download paths and search queries collected inside our dashboard database.</li>
        </ul>

        <h2 className="text-sm font-bold text-white uppercase tracking-wider pt-4">2. Processing Legitimate Interests</h2>
        <p>
          We process data exclusively to support:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Delivering weekly resource drops and template zip packages.</li>
          <li>Sending newsletter notifications, technical warnings, and billing change logs.</li>
          <li>Detecting digital scraping scripts and blocking unauthorized system access.</li>
        </ul>

        <h2 className="text-sm font-bold text-white uppercase tracking-wider pt-4">3. GDPR &amp; CCPA Rights</h2>
        <p>
          Users in the EU and California maintain structural rights to request account data deletion, export logs, or revoke email permission. Contact privacy@alirorek.com to issue requests.
        </p>
      </div>
    </div>
  );
}
