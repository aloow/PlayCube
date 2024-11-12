import { siteConfig } from "@/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Terms of Service - ${siteConfig.siteName}`,
  description: `Terms of Service and user agreement information for ${siteConfig.siteName} users.`,
  keywords: `terms of service, user agreement, terms and conditions, ${siteConfig.siteName}, service terms`,
};

export default function TermsOfService({
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