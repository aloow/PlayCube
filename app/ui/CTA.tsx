// components/cta-section.tsx
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <div className="bg-[#1A237E] py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to Start Your Gaming Journey?
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Join our community of gamers and discover amazing new experiences
          every day.
        </p>
        <Button className="bg-[#00E5FF] hover:bg-[#9C27B0] text-white text-lg px-8 py-3">
          Get Started Now
        </Button>
      </div>
    </div>
  );
}
