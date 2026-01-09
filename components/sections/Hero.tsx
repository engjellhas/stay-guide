import { Button } from "@/components/ui/Button";
import BlurText from "@/components/BlurText";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-36 md:pb-40">
      {/* Dreamy Gradient Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90 -z-10"
        style={{ backgroundImage: "url('/assets/dreamy-bg.png')" }}
      />

      {/* Overlay for better text readability if needed */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px] -z-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-10">
          <div className="inline-flex items-center rounded-full border border-white/40 bg-white/60 backdrop-blur-md px-4 py-1.5 text-sm font-medium text-gray-800 shadow-sm animate-fade-in-up">
            {/* <span className="flex h-2 w-2 rounded-full bg-[#FF385C] mr-2 animate-pulse shadow-[0_0_8px_rgba(255,56,92,0.5)]"></span> */}
            Made for Superhosters
          </div>

          <div className="max-w-5xl mx-auto">
            <BlurText
              text="The AI Voice Concierge for Vacation Rentals"
              delay={50}
              animateBy="words"
              direction="top"
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-2 drop-shadow-sm justify-center"
            />
          </div>

          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-light">
            Stop answering &quot;What&apos;s the WiFi password?&quot; 24/7.
            StayGuide handles guest questions instantly with voice-first AI.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center pt-2">
            <Button
              size="lg"
              className="w-full sm:w-auto h-14 px-10 text-xl bg-[#FF385C] hover:bg-[#D90B3E] text-white shadow-xl shadow-[#FF385C]/30 rounded-full transition-transform hover:scale-105"
            >
              Get Started for Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto h-14 px-10 text-xl border-white/50 bg-white/40 hover:bg-white/60 backdrop-blur-md text-gray-900 rounded-full transition-all"
            >
              View Personal Demo
            </Button>
          </div>

          {/* <div className="pt-8 flex items-center justify-center gap-3 text-sm text-gray-600 font-medium">
            <div className="flex -space-x-3">
              <div className="h-8 w-8 rounded-full bg-gray-200 border-2 border-white shadow-sm" />
              <div className="h-8 w-8 rounded-full bg-gray-300 border-2 border-white shadow-sm" />
              <div className="h-8 w-8 rounded-full bg-gray-400 border-2 border-white shadow-sm" />
            </div>
            <p>
              Trusted by <span className="text-gray-900 font-bold">500+</span>{" "}
              superhosts
            </p>
          </div> */}
        </div>

        {/* 3D Glass Dashboard Mockup */}
        <div className="mt-20 relative mx-auto max-w-6xl perspective-1000">
          <div className="relative transform transition-all duration-700 hover:rotate-x-2 hover:translate-y-[-10px] group">
            {/* Main Dashboard Card */}
            <div className="bg-white rounded-3xl shadow-2xl border border-white/60 p-6 md:p-8 aspect-[16/9] relative overflow-hidden backdrop-blur-sm">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF385C] to-rose-600 flex items-center justify-center text-white font-bold shadow-lg shadow-[#FF385C]/30">
                    <svg
                      className="w-6 h-6"
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
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      StayGuide Dashboard
                    </h3>
                    <p className="text-sm text-gray-500">Welcome back, Sarah</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200"></div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-4 gap-4 mb-8">
                {[
                  {
                    label: "Active Guests",
                    value: "24",
                    color: "bg-blue-50 text-blue-600",
                  },
                  {
                    label: "Queries Solved",
                    value: "156",
                    color: "bg-green-50 text-green-600",
                  },
                  {
                    label: "Avg Response",
                    value: "0.2s",
                    color: "bg-purple-50 text-purple-600",
                  },
                  {
                    label: "Happiness",
                    value: "99%",
                    color: "bg-rose-50 text-[#FF385C]",
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-gray-50/50 rounded-2xl p-4 border border-gray-100 group/card hover:bg-white hover:shadow-lg transition-all"
                  >
                    <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                    <p
                      className={`text-2xl font-bold ${
                        stat.color.split(" ")[1]
                      }`}
                    >
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Main Content Area */}
              <div className="grid grid-cols-3 gap-6 h-full">
                {/* Chat Column */}
                <div className="col-span-2 bg-gray-50/80 rounded-2xl border border-gray-100 p-4 h-64 overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-gray-50 to-transparent z-10" />
                  <div className="space-y-3 mt-2">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-200 shrink-0" />
                      <div className="bg-white p-3 rounded-2xl rounded-tl-none text-sm text-gray-600 shadow-sm border border-gray-100 max-w-[80%]">
                        What is the checkout time for the loft?
                      </div>
                    </div>
                    <div className="flex gap-3 flex-row-reverse">
                      <div className="w-8 h-8 rounded-full bg-[#FF385C]/10 flex items-center justify-center shrink-0">
                        <div className="w-2 h-2 rounded-full bg-[#FF385C]" />
                      </div>
                      <div className="bg-[#FF385C] p-3 rounded-2xl rounded-tr-none text-sm text-white shadow-md shadow-[#FF385C]/20 max-w-[80%]">
                        Checkout is at 11:00 AM. Would you like me to request a
                        late checkout for you?
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sidebar Column */}
                <div className="space-y-3">
                  <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
                    <div className="h-2 w-20 bg-gray-100 rounded mb-2" />
                    <div className="h-10 w-full bg-gray-50 rounded-xl" />
                  </div>
                  <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
                    <div className="h-2 w-20 bg-gray-100 rounded mb-2" />
                    <div className="flex gap-2">
                      <div className="h-8 w-8 bg-gray-100 rounded-full" />
                      <div className="h-8 w-8 bg-gray-100 rounded-full" />
                      <div className="h-8 w-8 bg-gray-100 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements (Glass Decor) */}
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-[#FF385C]/20 to-purple-500/20 blur-3xl rounded-full pointer-events-none" />
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-gradient-to-tr from-blue-500/20 to-teal-500/20 blur-3xl rounded-full pointer-events-none" />
            </div>
          </div>

          {/* Ambient Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-rose-400/20 to-purple-400/20 rounded-[2rem] blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
}
