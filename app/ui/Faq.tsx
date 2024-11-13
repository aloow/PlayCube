import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "Is PlayCube free to use?",
      answer:
        "Yes! PlayCube is completely free to use. You can play all games without any subscription or payment required. Some games might have optional in-game purchases for additional features or cosmetic items, but these are entirely optional and clearly marked.",
    },
    {
      question: "What types of games are available on PlayCube?",
      answer:
        "PlayCube offers an extensive collection of games across multiple genres: Action & Adventure, Puzzle & Brain Games, Strategy & Management, Racing & Sports, RPG & Adventure, Casual & Arcade, Educational Games, and Multiplayer Games. We regularly add new titles and update existing ones. Our games range from quick casual experiences to deep, engaging adventures suitable for all ages and skill levels.",
    },
    {
      question: "Can I play games on mobile devices?",
      answer:
        "Yes! PlayCube is fully responsive and works seamlessly on all devices - smartphones, tablets, laptops, and desktops. Our games are optimized for both touch controls and keyboard/mouse input. The interface automatically adapts to your screen size for the best gaming experience. We also offer a PWA (Progressive Web App) option for an app-like experience on mobile devices.",
    },
    {
      question: "How do I report technical issues or bugs?",
      answer:
        "You can report issues through multiple channels: Use the in-game 'Report Bug' button, contact our support team via the Help Center, or post in the Technical Support section of our community forum. Please include as much detail as possible (device type, browser, steps to reproduce the issue). Our team typically responds within 24 hours, and we prioritize game-breaking bugs for immediate attention.",
    },
    {
      question: "Are the games safe for children?",
      answer:
        "Yes, we take child safety very seriously. All games are rated according to age-appropriate content guidelines (E for Everyone, E10+, T for Teen, etc.). Parental controls are available to restrict access to certain game categories. We moderate all user-generated content and maintain a strict code of conduct in multiplayer environments. Additionally, you can set up family accounts to monitor and control your children's gaming activity.",
    },
    {
      question: "What kind of community features do you offer?",
      answer:
        "Our community features include: Player profiles and achievements, friends lists and social connections, game-specific discussion forums, live chat during multiplayer games, clan/guild systems for team play, community events and gatherings, user-created content sharing, game reviews and ratings, and a feedback system for suggesting new features. We also have active Discord and social media communities.",
    },
    {
      question: "How often do you add new games?",
      answer:
        "We add new games weekly! Our content team works with developers worldwide to ensure a steady stream of fresh content. We release at least 2-3 new games every week, plus regular updates to existing games. Subscribe to our newsletter or follow our social media channels to stay updated on new releases. Premium members get early access to selected new games before their public release.",
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#1A237E] mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Have questions about PlayCube? Find quick answers to common questions
          below. Can&apos;t find what you&apos;re looking for? Contact our
          support team 24/7.
        </p>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-50 rounded-lg px-6"
              >
                <AccordionTrigger className="text-[#1A237E] hover:text-[#00E5FF]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
