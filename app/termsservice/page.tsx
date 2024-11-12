import { siteConfig } from "@/config";

export default function Page() {
  return (
    <div className="mx-auto max-w-4xl p-6 text-white">
      <h1 className="mb-8 text-4xl font-bold">Terms of Service</h1>
      <div className="space-y-6">
        <section>
          <h2 className="mb-4 text-2xl font-semibold">1. Agreement to Terms</h2>
          <p className="mb-4">
            By accessing and using {siteConfig.siteName}, you agree to be bound by these
            Terms of Service and all applicable laws and regulations.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">2. Use License</h2>
          <p className="mb-4">
            Permission is granted to temporarily access the materials (information or
            software) on {siteConfig.siteName} for personal, non-commercial transitory
            viewing only.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">3. User Responsibilities</h2>
          <p className="mb-4">As a user of {siteConfig.siteName}, you agree to:</p>
          <ul className="list-disc pl-6">
            <li>Provide accurate and complete information</li>
            <li>Maintain the security of your account</li>
            <li>Use the service in accordance with all applicable laws</li>
            <li>Respect the rights of other users</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">4. Modifications</h2>
          <p className="mb-4">
            {siteConfig.siteName} reserves the right to modify or replace these Terms
            of Service at any time. It is your responsibility to check these Terms
            periodically for changes.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">5. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us.
          </p>
        </section>
      </div>
    </div>
  );
}