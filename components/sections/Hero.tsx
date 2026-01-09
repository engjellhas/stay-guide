import { Button } from "@/components/ui/Button";
import BlurText from "@/components/BlurText";
import FadeIn from "@/components/animations/FadeIn";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32 lg:min-h-screen flex items-center">
      {/* Dreamy Gradient Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90 -z-10"
        style={{ backgroundImage: "url('/assets/dreamy-bg.png')" }}
      />
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] -z-10" />

      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-[100px] -z-10 mix-blend-multiply" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-lime-200/30 rounded-full blur-[100px] -z-10 mix-blend-multiply" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Text Content */}
          <FadeIn
            direction="right"
            className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0"
          >
            <div className="inline-flex items-center rounded-full border border-primary/10 bg-white/50 backdrop-blur-md px-4 py-1.5 text-sm font-medium text-primary shadow-sm mb-8">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              The #1 AI Concierge for Hosts
            </div>

            <div className="relative group">
              <BlurText
                text="Maximize Your Rental Potential"
                delay={50}
                animateBy="words"
                direction="top"
                className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-6 drop-shadow-sm"
              />
              <div className="absolute -z-10 -top-8 -left-8 w-24 h-24 bg-yellow-200/50 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500" />
            </div>

            <p className="text-xl text-gray-600 leading-relaxed font-normal mb-10 max-w-lg mx-auto lg:mx-0">
              Automate guest communication, boost reviews, and save 20+ hours a
              week with your own AI voice assistant.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button
                size="lg"
                className="h-16 px-8 text-lg font-semibold bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 rounded-full transition-all hover:-translate-y-1 w-full sm:w-auto"
              >
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-16 px-8 text-lg font-semibold border-gray-200 bg-white/80 hover:bg-white text-gray-800 rounded-full transition-all hover:shadow-lg w-full sm:w-auto"
              >
                Watch Demo
              </Button>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-4 text-sm font-medium text-gray-500">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 shadow-sm overflow-hidden bg-cover bg-center"
                    style={{
                      backgroundImage: `url('https://i.pravatar.cc/100?img=${
                        i + 10
                      }')`,
                    }}
                  />
                ))}
              </div>
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-1 text-yellow-500">
                  {"★".repeat(5)}
                </div>
                <span className="text-xs">Trusted by 2,000+ hosts</span>
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Interactive UI Mockup */}
          <FadeIn
            direction="left"
            delay={0.2}
            className="relative z-10 w-full max-w-[500px] lg:max-w-none mx-auto"
          >
            <div className="relative aspect-[4/5] lg:aspect-auto lg:h-[600px] w-full">
              {/* Glass Dashboard Container */}
              <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-indigo-500/10 border border-white/60 backdrop-blur-xl bg-white/80 transform hover:scale-[1.01] transition-all duration-700 flex flex-col">
                {/* Header Strip */}
                <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-white/40">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">
                        AI Concierge
                      </h3>
                      <p className="text-[10px] text-green-500 font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        Monitoring Beach Loft
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:flex -space-x-2">
                    {[33, 34, 35].map((img) => (
                      <div
                        key={img}
                        className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 overflow-hidden shadow-sm"
                      >
                        <img
                          src={`https://i.pravatar.cc/100?img=${img}`}
                          alt="User"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Conversation Feed */}
                <div className="flex-1 p-6 space-y-6 overflow-hidden bg-linear-to-b from-transparent to-gray-50/20">
                  {/* Guest Entry */}
                  <div className="flex gap-3 max-w-[85%] animate-fadeIn">
                    <div className="w-8 h-8 rounded-full bg-blue-100 shrink-0 overflow-hidden border border-blue-200">
                      <img
                        src="https://i.pravatar.cc/100?img=33"
                        alt="Guest"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-xs border border-gray-100">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Hi! What's the Wi-Fi password and checkout time?
                      </p>
                      <span className="text-[10px] text-gray-400 mt-2 block font-medium">
                        Guest • 11:30 AM
                      </span>
                    </div>
                  </div>

                  {/* AI Response Card */}
                  <div className="flex gap-3 max-w-[92%] ml-auto flex-row-reverse animate-fadeIn [animation-delay:0.2s]">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                      <span className="text-[10px] font-black text-primary">
                        AI
                      </span>
                    </div>
                    <div className="bg-primary text-white p-4 rounded-2xl rounded-tr-none shadow-lg shadow-primary/20 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -mr-8 -mt-8 blur-2xl" />
                      <p className="text-sm leading-relaxed relative z-10">
                        Welcome! 🌊
                        <br />
                        <br />• <span className="font-semibold">
                          Wi-Fi:
                        </span>{" "}
                        BeachGlow_Host
                        <br />• <span className="font-semibold">
                          Pass:
                        </span>{" "}
                        StayHappy2026
                        <br />• <span className="font-semibold">
                          Checkout:
                        </span>{" "}
                        11:00 AM
                      </p>
                      <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between">
                        <span className="text-[9px] font-medium opacity-80">
                          Ref: House Manual
                        </span>
                        <span className="text-[9px] font-bold bg-white/20 px-1.5 py-0.5 rounded">
                          INSTANT
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Typing Indicator */}
                  <div className="flex gap-3 opacity-30 mt-4">
                    <div className="w-8 h-8 rounded-full bg-gray-200" />
                    <div className="bg-gray-100 h-10 w-20 rounded-2xl flex items-center justify-center gap-1">
                      <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" />
                      <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>

                {/* Bottom Stats Tray */}
                <div className="px-6 py-5 bg-white border-t border-gray-50 flex items-center justify-around">
                  <div className="text-center">
                    <p className="text-[10px] uppercase tracking-tight text-gray-400 font-bold mb-1">
                      Time Saved
                    </p>
                    <p className="text-lg font-extrabold text-primary">
                      12h/wk
                    </p>
                  </div>
                  <div className="w-px h-8 bg-gray-100" />
                  <div className="text-center">
                    <p className="text-[10px] uppercase tracking-tight text-gray-400 font-bold mb-1">
                      Rating
                    </p>
                    <p className="text-lg font-extrabold text-gray-900">5.0★</p>
                  </div>
                </div>
              </div>

              {/* Floating accents */}
              <div className="absolute top-1/4 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-1/4 -left-12 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
