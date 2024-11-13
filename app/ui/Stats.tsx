// components/stats-section.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Gamepad, Star, Trophy, Users } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-[#00E5FF]" />,
      value: "10M+",
      label: "Active Players",
      description: "Monthly active users worldwide",
    },
    {
      icon: <Gamepad className="w-8 h-8 text-[#00E5FF]" />,
      value: "5,000+",
      label: "Games Available",
      description: "Across multiple genres",
    },
    {
      icon: <Trophy className="w-8 h-8 text-[#00E5FF]" />,
      value: "1M+",
      label: "Achievements Unlocked",
      description: "Daily by our players",
    },
    {
      icon: <Star className="w-8 h-8 text-[#00E5FF]" />,
      value: "4.8/5",
      label: "User Rating",
      description: "Based on player reviews",
    },
  ];

  const features = [
    {
      title: "Cross-Platform Gaming",
      description:
        "Play seamlessly across desktop, tablet, and mobile devices.",
    },
    {
      title: "Regular Updates",
      description:
        "New games and features added weekly to keep the experience fresh.",
    },
    {
      title: "Safe & Secure",
      description: "Family-friendly content with robust parental controls.",
    },
    {
      title: "Community Events",
      description: "Daily tournaments and special events with great prizes.",
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#1A237E] mb-2">
          Platform Statistics
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Join the fastest-growing online gaming community
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <h3 className="text-3xl font-bold text-[#1A237E] mb-2">
                  {stat.value}
                </h3>
                <p className="font-semibold text-[#00E5FF] mb-1">
                  {stat.label}
                </p>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features List */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-[#1A237E] mb-8 text-center">
            Why Choose PlayCube?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-[#00E5FF]" />
                <div>
                  <h4 className="font-semibold text-[#1A237E] mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
