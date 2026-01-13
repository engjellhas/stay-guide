import Image from "next/image";
import { Button } from "@/components/ui/Button";
import BlurText from "@/components/BlurText";
import FadeIn from "@/components/animations/FadeIn";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32 lg:min-h-screen flex items-center bg-white">
      {/* Signature Periwinkle Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1200px] max-h-[1200px] halo opacity-60 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Left Column: Text Content */}
          <FadeIn direction="up" className="max-w-4xl mx-auto">
            <div className="inline-flex items-center rounded-full border border-black/5 bg-gray-50/50 backdrop-blur-sm px-4 py-1 text-sm font-medium text-[#222222] mb-10">
              <span className="flex h-1.5 w-1.5 rounded-full bg-[#222222] mr-2"></span>
              The #1 AI Concierge for Hosts
            </div>

            <div className="relative mb-8 flex justify-center w-full max-w-4xl mx-auto overflow-visible">
              <BlurText
                text="The Airbnb Host's Private Assistant"
                delay={50}
                animateBy="words"
                direction="top"
                className="text-5xl md:text-8xl title-display leading-[1.05] tracking-tight text-[#222222] text-center justify-center w-full"
              />
            </div>

            <p className="text-xl md:text-2xl text-secondary leading-relaxed font-normal mb-12 max-w-2xl mx-auto">
              StayGuide handles your guest messages on autopilot, so you can
              enjoy your life while your reviews soar.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
              <Button
                size="lg"
                className="h-14 px-10 text-lg font-medium bg-[#222222] hover:bg-black text-white rounded-full transition-all w-full sm:w-auto"
              >
                Start free trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-10 text-lg font-medium border-[#222222] bg-white text-[#222222] rounded-full transition-all w-full sm:w-auto"
              >
                Watch the film
              </Button>
            </div>

            <div className="flex flex-col items-center gap-4 text-sm font-medium text-gray-400">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 overflow-hidden bg-cover bg-center"
                    style={{
                      backgroundImage: `url('https://i.pravatar.cc/100?img=${
                        i + 20
                      }')`,
                    }}
                  />
                ))}
              </div>
              <span className="text-[13px] tracking-tight">
                Trusted by 2,000+ Superhosts worldwide
              </span>
            </div>
          </FadeIn>

          {/* Device Mockup Section */}
          <FadeIn
            direction="up"
            delay={0.4}
            className="w-full max-w-5xl mt-24 relative"
          >
            {/* Soft shadow/glow underneath the mockup */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-20 bg-black/5 blur-3xl -z-10" />

            <div className="grid md:grid-cols-12 gap-8 items-stretch">
              {/* Main App Mockup */}
              <div className="md:col-span-8 relative h-[500px] md:h-[600px] w-full rounded-[3rem] overflow-hidden border border-black/5 bg-white shadow-2xl flex flex-col">
                {/* Header Strip */}
                <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center border border-black/5">
                      <span className="text-lg font-bold">SG</span>
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-[#222222] text-base">
                        Concierge Active
                      </h3>
                      <p className="text-xs text-green-600 font-medium flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        8 Guest Inquiries Handled Today
                      </p>
                    </div>
                  </div>
                </div>

                {/* Conversation Feed */}
                <div className="flex-1 p-8 space-y-8 overflow-hidden bg-white">
                  {/* Guest Entry */}
                  <div className="flex gap-4 max-w-[80%]">
                    <div className="w-10 h-10 rounded-full bg-gray-100 shrink-0 border border-black/5" />
                    <div className="bg-gray-100/50 p-5 rounded-[2rem] rounded-tl-none">
                      <p className="text-base text-[#222222] leading-relaxed text-left">
                        Hey! How do I work the induction stove? We&apos;re
                        trying to make breakfast.
                      </p>
                    </div>
                  </div>

                  {/* AI Response Card */}
                  <div className="flex gap-4 max-w-[85%] ml-auto flex-row-reverse">
                    <div className="w-10 h-10 rounded-full bg-[#222222] flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                        />
                      </svg>
                    </div>
                    <div className="bg-white border border-black/5 p-6 rounded-[2rem] rounded-tr-none shadow-xl">
                      <p className="text-base text-[#222222] leading-relaxed text-left">
                        Good morning! 🍳 <br />
                        <br />
                        To use the induction stove, first place your pot on the
                        burner, then press the power button on the front right.{" "}
                        <br />
                        <br />
                        <span className="font-semibold block mt-2 underline cursor-pointer">
                          Watch video guide
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Stats Tray */}
                <div className="px-8 py-6 bg-gray-50/50 border-t border-gray-100 flex items-center justify-around">
                  <div className="text-center">
                    <p className="text-xs text-gray-400 font-medium mb-1">
                      Time Saved
                    </p>
                    <p className="text-2xl font-semibold text-[#222222]">24h</p>
                  </div>
                  <div className="w-px h-10 bg-gray-200" />
                  <div className="text-center">
                    <p className="text-xs text-gray-400 font-medium mb-1">
                      Guest Review
                    </p>
                    <p className="text-2xl font-semibold text-[#222222]">
                      5.0★
                    </p>
                  </div>
                </div>
              </div>

              {/* Sidebar with Product Image */}
              <div className="md:col-span-4 flex flex-col">
                <div className="flex-1 rounded-[3rem] overflow-hidden border border-black/5 bg-white shadow-2xl group relative min-h-[500px]">
                  <Image
                    src="/images/voice-hub.png"
                    alt="StayGuide Voice Hub"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                  <div className="absolute bottom-10 left-10 right-10">
                    <div className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-md px-5 py-2 text-base font-semibold text-[#222222] shadow-sm mb-4">
                      Voice Concierge ✨
                    </div>
                    <p className="text-white text-xl font-medium max-w-[240px] leading-snug">
                      &ldquo;Hey StayGuide, how do I use the induction
                      stove?&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
