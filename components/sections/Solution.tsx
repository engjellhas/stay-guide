import FadeIn from "../animations/FadeIn";
import { Button } from "@/components/ui/Button";

export function Solution() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn
            direction="right"
            delay={0.2}
            className="order-2 lg:order-1 relative"
          >
            {/* Visual representation of the solution */}
            <div className="relative rounded-2xl border border-gray-200 bg-white/50 backdrop-blur-xl p-8 shadow-2xl">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-gray-200 border border-gray-100 flex-shrink-0" />
                  <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4 text-sm text-gray-700 max-w-[80%]">
                    Is there a good Italian restaurant nearby that&apos;s open
                    late?
                  </div>
                </div>
                <div className="flex gap-4 items-start flex-row-reverse">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-rose-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20">
                    <span className="text-xs font-bold text-white">AI</span>
                  </div>
                  <div className="bg-primary/10 border border-primary/20 rounded-2xl rounded-tr-none p-4 text-sm text-gray-800 max-w-[80%]">
                    Yes! <strong>Gino&apos;s Trattoria</strong> is just 3 blocks
                    away and stays open until 11 PM. Guests usually love their
                    handmade pasta. Would you like me to text you the
                    directions?
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" className="order-1 lg:order-2">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm mb-6">
              <span className="mr-2">✨</span> Introducing StayGuide
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
              Your 24/7 AI Co-host that talks like a local.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              StayGuide isn&apos;t just a chatbot. It&apos;s a voice-activated
              concierge that lives in your rental, trained on your specific
              house guide and local recommendations.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Instant answers to house rules & amenity questions",
                "Personalized local recommendations (restaurants, activities)",
                "Escalates emergencies to you immediately",
                "Learns from every interaction to get smarter",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>

            <Button size="lg" className="rounded-full">
              See How It Works
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
