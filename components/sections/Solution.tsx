import Image from "next/image";
import FadeIn from "../animations/FadeIn";
import { Button } from "@/components/ui/Button";

export function Solution() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <FadeIn
            direction="right"
            delay={0.2}
            className="order-2 lg:order-1 relative"
          >
            <div className="w-2/3 mx-auto relative rounded-[3rem] overflow-hidden border border-black/5 bg-white shadow-2xl group min-h-[500px] lg:min-h-[650px]">
              <Image
                src="/images/messaging-mockup.jpeg"
                alt="StayGuide Messaging AI"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-40 pointer-events-none" />
              <div className="absolute top-8 left-8">
                <div className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-md px-4 py-1.5 text-sm font-semibold text-[#222222] shadow-sm">
                  Localized AI
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-6xl title-display mb-8 text-[#222222] leading-tight">
              A co-host that talks like a local.
            </h2>

            <p className="text-xl text-secondary mb-10 leading-relaxed font-normal">
              StayGuide isn&apos;t just a chatbot. It&apos;s a voice-activated
              concierge that lives in your rental, trained on your specific
              house guide and neighborhood secrets.
            </p>

            <div className="grid gap-8 mb-12">
              {[
                {
                  title: "Instant Expertise",
                  desc: "Answers house rules & appliance questions in seconds.",
                  emoji: "✨",
                },
                {
                  title: "Proactive Local",
                  desc: "Recommends the best late-night pasta or morning coffee.",
                  emoji: "📍",
                },
                {
                  title: "Smart Escalation",
                  desc: "Filters noise and only texts you if it's truly urgent.",
                  emoji: "🚨",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-2xl shrink-0">
                    {item.emoji}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#222222] text-lg mb-1">
                      {item.title}
                    </h4>
                    <p className="text-secondary leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="primary" size="lg" className="h-14 px-10 text-lg">
              Experience the difference
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
