import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Casual Gamer",
      seed: "alex123",
      rating: 5,
      comment:
        "PlayCube has become my go-to gaming platform. The variety of games and smooth performance keep me coming back for more!",
      date: "2 days ago",
    },
    {
      name: "Sarah Chen",
      role: "Game Developer",
      seed: "sarah456",
      rating: 5,
      comment:
        "As a developer, I love how easy it is to publish games on PlayCube. The developer tools and community support are exceptional.",
      date: "1 week ago",
    },
    {
      name: "Marcus Williams",
      role: "Pro Gamer",
      seed: "marcus789",
      rating: 4,
      comment:
        "The competitive scene on PlayCube is amazing. Weekly tournaments and leaderboards make it super engaging.",
      date: "2 weeks ago",
    },
    {
      name: "Emily Rodriguez",
      role: "Mobile Gaming Enthusiast",
      seed: "emily321",
      rating: 5,
      comment:
        "The cross-platform support is fantastic! I can switch between my phone and PC seamlessly without losing progress.",
      date: "3 days ago",
    },
    {
      name: "David Kim",
      role: "eSports Player",
      seed: "david654",
      rating: 4,
      comment:
        "The latency is incredibly low, which is crucial for competitive gaming. The matchmaking system is also very well balanced.",
      date: "5 days ago",
    },
    {
      name: "Lisa Patel",
      role: "Content Creator",
      seed: "lisa987",
      rating: 5,
      comment:
        "The streaming integration is seamless! Makes it super easy to share gameplay moments with my audience.",
      date: "1 week ago",
    },
    {
      name: "James Wilson",
      role: "Indie Game Developer",
      seed: "james234",
      rating: 4,
      comment:
        "The developer dashboard provides great insights. The revenue sharing model is also very fair compared to other platforms.",
      date: "1 week ago",
    },
    {
      name: "Maria García",
      role: "Strategy Game Player",
      seed: "maria567",
      rating: 5,
      comment:
        "The AI matchmaking for strategy games is spot-on. I always get challenging but fair opponents.",
      date: "4 days ago",
    },
    {
      name: "Tom Anderson",
      role: "VR Gaming Enthusiast",
      seed: "tom890",
      rating: 4,
      comment:
        "The VR integration works flawlessly. The performance optimization for VR games is impressive!",
      date: "1 week ago",
    },
  ];

  const getAvatarUrl = (seed: string): string => {
    return `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&backgroundColor=b6e3f4,c0aede,d1d4f9`;
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1A237E] mb-2">
            What Our Users Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join millions of happy gamers who have discovered their gaming
            community on PlayCube.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <Image
                      src={getAvatarUrl(testimonial.seed)}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                      unoptimized // 由于是SVG，不需要Next.js的图片优化
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#1A237E]">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating
                              ? "text-[#00E5FF] fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">
                    {testimonial.date}
                  </span>
                </div>
                <p className="mt-4 text-gray-600">
                  &quot;{testimonial.comment}&quot;
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <div className="text-[#9C27B0] text-sm cursor-pointer hover:underline">
                    Helpful
                  </div>
                  <span className="text-gray-300">•</span>
                  <div className="text-[#9C27B0] text-sm cursor-pointer hover:underline">
                    Share
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSection;
