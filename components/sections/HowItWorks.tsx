import FadeIn from "../animations/FadeIn";
import { Button } from "@/components/ui/Button";

export function HowItWorks() {
  const steps = [
    {
      number: "1",
      emoji: "🔗",
      title: "Sync Your Listing",
      description:
        "One-click import from Airbnb or Vrbo. We pull your house manual, wifi, and check-out rules automatically.",
    },
    {
      number: "2",
      emoji: "🧠",
      title: "Customize the AI",
      description:
        "Review the knowledge base. Add special instructions for the hot tub or that tricky back door lock.",
    },
    {
      number: "3",
      emoji: "✨",
      title: "Place & Delight",
      description:
        "Plug in the hub. Guests get instant answers, and you get 5-star reviews for communication.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-32 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <h2 className="text-5xl md:text-7xl title-display mb-8 text-[#222222]">
            Ready in minutes.
          </h2>
          <p className="text-xl md:text-2xl text-secondary max-w-2xl mx-auto">
            From setup to autopilot in less time than it takes to check in a
            guest.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative mb-24">
          {steps.map((step, index) => (
            <FadeIn
              key={index}
              delay={index * 0.1}
              direction="up"
              className="relative flex flex-col"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-baseline gap-4 mb-[-20px] ml-[-10px] select-none">
                  <div className="text-[120px] font-semibold text-black/3 leading-none">
                    {step.number}
                  </div>
                  <div className="text-4xl">{step.emoji}</div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-[#222222]">
                  {step.title}
                </h3>
                <p className="text-lg text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="h-14 px-10 text-lg font-medium bg-[#222222] hover:bg-black text-white rounded-full transition-all"
          >
            Start your setup
          </Button>
          <p className="mt-6 text-sm text-gray-400">
            Free trial for 14 days • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
}
