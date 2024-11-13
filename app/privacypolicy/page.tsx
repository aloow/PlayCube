import { siteConfig } from "@/config";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl p-6">
        <h1 className="mb-8 text-4xl font-bold text-[#1A237E]">
          Privacy Policy
        </h1>
        <div className="space-y-6">
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[#1A237E]">
              1. Introduction
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Welcome to {siteConfig.siteName}. We are committed to protecting
              your personal information and your right to privacy.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[#1A237E]">
              2. Information We Collect
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              When you visit the {siteConfig.siteName} website, we may collect
              certain information about your device, your interaction with the
              website, and information necessary to process your purchases.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[#1A237E]">
              3. How We Use Your Information
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              We use the information we collect in various ways, including to:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li className="text-gray-700">
                Provide, operate, and maintain our website
              </li>
              <li className="text-gray-700">
                Improve, personalize, and expand our website
              </li>
              <li className="text-gray-700">
                Understand and analyze how you use our website
              </li>
              <li className="text-gray-700">
                Develop new products, services, features, and functionality
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[#1A237E]">
              4. Contact Us
            </h2>
            <p className="leading-relaxed text-gray-700">
              If you have any questions about this Privacy Policy, please
              contact us.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
