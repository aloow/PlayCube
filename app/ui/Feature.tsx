// components/features-section.tsx
import { Gamepad, Sparkles, Trophy, Users } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <Gamepad className="w-8 h-8 text-[#00E5FF]" />,
      title: "Diverse Game Library",
      description: "Access thousands of games across multiple genres",
    },
    {
      icon: <Users className="w-8 h-8 text-[#00E5FF]" />,
      title: "Active Community",
      description: "Connect with players who share your gaming interests",
    },
    {
      icon: <Trophy className="w-8 h-8 text-[#00E5FF]" />,
      title: "Achievements",
      description: "Track your progress and unlock exclusive rewards",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#00E5FF]" />,
      title: "Regular Updates",
      description: "New games and features added regularly",
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#1A237E] mb-12">
          Why Choose <span className="text-[#00E5FF]">PlayCube</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[#1A237E] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
