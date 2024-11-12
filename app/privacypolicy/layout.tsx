import { siteConfig } from "@/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Privacy Policy - ${siteConfig.siteName}`,
  description: `Privacy Policy and data protection information for ${siteConfig.siteName} users.`,
  keywords: `privacy policy, data protection, user privacy, ${siteConfig.siteName}, privacy terms`,
};

export default function PrivacyPolicy({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#1E0F2F]">
      <main className="flex-grow">{children}</main>
    </div>
  );
}