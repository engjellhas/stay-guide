import Image from "next/image";
import FadeIn from "../animations/FadeIn";
import { Button } from "@/components/ui/Button";

export function Features() {
  const secondaryFeatures = [
    {
      title: "Smart Home Sync",
      description:
        "Connects with Nest, Ecobee, and Yale. Control temperature and locks with voice.",
      icon: "⚡️",
    },
    {
      title: "Local Recommendations",
      description:
        "Curate your own guide to the best coffee, food, and hidden gems in the neighborhood.",
      icon: "📍",
    },
    {
      title: "Emergency Alerts",
      description:
        "Instant SMS notifications when guests casually mention 'leak', 'fire', or 'locked out'.",
      icon: "🚨",
    },
    {
      title: "Multi-Language",
      description:
        "Instant translation for international guests. Speak in English, they hear it in Spanish.",
      icon: "🌍",
    },
  ];

  return (
    <section id="features" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <h2 className="text-5xl md:text-7xl title-display mb-8 text-[#222222]">
            Everything you need.
          </h2>
          <p className="text-xl md:text-2xl text-secondary max-w-2xl mx-auto">
            Powerful tools to manage your property, delight guests, and reclaim
            your time.
          </p>
        </div>

        {/* Feature Highlight 1: Voice */}
        <div className="mb-32">
          <FadeIn direction="up">
            <div className="rounded-[3rem] p-8 md:p-16 lg:p-24 overflow-hidden border border-black/5 bg-gray-50/50">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="text-left">
                  <h3 className="text-3xl md:text-5xl title-display mb-8 text-[#222222]">
                    Messaging that feels human.
                  </h3>
                  <p className="text-lg md:text-xl text-secondary mb-10 leading-relaxed">
                    Our AI understands context, tone, and urgency. It replies to
                    &quot;How&apos;s the parking?&quot; instantly with your
                    specific instructions.
                  </p>
                  <ul className="space-y-6 mb-12">
                    {[
                      "Instant, accurate responses 24/7",
                      "Trained on your specific house manual",
                      "Escalates to you only when necessary",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-4 text-[#222222] font-medium"
                      >
                        <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-[10px]">
                          ✓
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="h-12 px-8">
                    See the proof
                  </Button>
                </div>
                <div className="relative h-[300px] lg:h-[500px] flex items-center justify-center">
                  <div className="w-full h-full rounded-[3rem] bg-white border border-black/5 shadow-2xl flex flex-col p-6 overflow-hidden">
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-50">
                      <div className="w-8 h-8 rounded-full bg-gray-100" />
                      <div className="h-3 w-24 bg-gray-100 rounded-full" />
                    </div>
                    <div className="space-y-4">
                      <div className="w-[70%] bg-gray-50 rounded-2xl rounded-tl-none p-4 text-sm text-secondary">
                        How&apos;s the parking? Is it tight for an SUV?
                      </div>
                      <div className="w-[80%] bg-[#222222] rounded-2xl rounded-tr-none ml-auto p-4 text-sm text-white">
                        Parking is easy! You have a dedicated wide spot right in
                        front. Perfect for any SUV. 🚗
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Feature Highlight 2: Dashboard */}
        <div className="mb-32">
          <FadeIn direction="up">
            <div className="rounded-[3rem] p-8 md:p-16 lg:p-24 overflow-hidden border border-black/5 bg-[#F7F7F7]">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative h-[300px] lg:h-[300px] flex items-center justify-center order-2 lg:order-1">
                  <div className="w-full h-full rounded-[3rem] overflow-hidden relative">
                    <Image
                      src="/images/analytics.jpeg"
                      alt="StayGuide Analytics Dashboard"
                      fill
                      className="object-cover rounded-[3rem]!"
                    />
                  </div>
                </div>

                <div className="text-left order-1 lg:order-2">
                  <h3 className="text-3xl md:text-5xl title-display mb-8 text-[#222222]">
                    Analytics that make sense.
                  </h3>
                  <p className="text-lg md:text-xl text-secondary mb-10 leading-relaxed">
                    Track satisfaction scores, response times, and discover what
                    your guests really care about.
                  </p>
                  <Button variant="outline" className="h-12 px-8">
                    View reports
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Secondary Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {secondaryFeatures.map((feature, index) => (
            <FadeIn key={index} delay={index * 0.1} direction="up">
              <div className="p-8 rounded-[2rem] border border-black/5 bg-white hover:bg-gray-50/50 transition-all duration-300 group h-full">
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-3xl mb-6 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#222222]">
                  {feature.title}
                </h3>
                <p className="text-base text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
