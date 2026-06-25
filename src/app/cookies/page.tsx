import React from "react";

export default function CookiesPage() {
  return (
    <div className="relative isolate py-20 px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-8 text-left text-xs text-slate-300 leading-relaxed">
        <h1 className="text-3xl font-extrabold text-white text-center mb-8">Cookie Directive</h1>
        
        <p className="text-sm font-semibold text-white">Last updated: June 25, 2026</p>
        
        <p>
          ALIROREK (alirorek.com) uses cookies to maintain secure sessions and optimize dashboard loading times. By accessing our platform, you consent to our cookie policy.
        </p>

        <h2 className="text-sm font-bold text-white uppercase tracking-wider pt-4">1. What are Cookies?</h2>
        <p>
          Cookies are small text structures saved on your local device by your browser. We use:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Essential session cookies:</strong> Manage login states and secure download handshakes through Amazon Cognito.</li>
          <li><strong>Performance cache cookies:</strong> Speed up dashboard filtration queries and resource queries.</li>
        </ul>

        <h2 className="text-sm font-bold text-white uppercase tracking-wider pt-4">2. Manage Consent</h2>
        <p>
          You can block or purge cookies through your browser settings. However, disabling essential cookies prevents the subscriber dashboard and checkout systems from operating correctly.
        </p>
      </div>
    </div>
  );
}
