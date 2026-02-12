import Image from "next/image";
import { Button } from "@/components/ui/Button";
import BlurText from "@/components/BlurText";
import FadeIn from "@/components/animations/FadeIn";
import { LinkIcon, MicIcon } from "lucide-react";

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
              <Button size="lg" variant="primary">
                Start free trial
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                className="h-14 px-10 text-lg font-medium border-[#222222] bg-white text-[#222222] rounded-full transition-all w-full sm:w-auto"
              >
                Watch the film
              </Button> */}
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
                Trusted by Superhosts worldwide
              </span>
            </div>
          </FadeIn>

          {/* Device Mockup Section */}
          <FadeIn
            direction="up"
            delay={0.4}
            className="w-full max-w-6xl mt-24 relative"
          >
            {/* Soft shadow/glow underneath */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-20 bg-black/5 blur-3xl -z-10" />

            {/* Section Header */}

            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Left: Host Training */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-linear-to-r from-primary/10 to-primary/20 rounded-2xl opacity-0 group-hover:opacity-10 transition duration-300 blur" />

                <div className="relative bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden h-[500px] md:h-[550px] flex flex-col">
                  {/* Header */}
                  <div className="px-6 py-5 border-b border-gray-100 bg-linear-to-r from-primary/5 via-white to-white">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          Train Your AI
                        </h3>
                        <p className="text-sm text-gray-500">One-time setup</p>
                      </div>
                    </div>
                  </div>

                  {/* Screenshot */}
                  <div className="flex-1  bg-gray-50 flex items-center justify-center">
                    <div className="relative w-full h-full  mx-auto">
                      <Image
                        src="/images/add-by-voice.png"
                        alt="Train AI with voice or sync from Airbnb"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Methods */}
                  <div className="flex flex-col md:flex-row gap-3 p-6 bg-white border-t border-gray-100 items-center justify-center">
                     
                      <p className="font-medium text-gray-900 text-sm flex items-center gap-2">
                        <MicIcon className="w-4 h-4 text-primary" />
                        List property details by voice
                      </p>

                      <p className="font-medium text-gray-300 text-sm flex items-center gap-2">
                        or
                      </p>

                      <p className="font-medium text-gray-900 text-sm flex items-center gap-2">
                        <LinkIcon className="w-4 h-4 text-primary" />
                        Magic import from Airbnb
                      </p>
                  </div>
                </div>
              </div>

              {/* Right: Guest Experience */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-linear-to-r from-primary to-primary/50 rounded-2xl opacity-0 group-hover:opacity-10 transition duration-300 blur" />

                <div className="relative bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden h-[550px] flex flex-col">
                  {/* Header */}
                  <div className="px-6 py-5 border-b border-gray-100 bg-gradient-to-br from-primary/10 via-white to-white">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          Guests Get Instant Help
                        </h3>
                        <p className="text-sm text-gray-500">
                          24/7 availability
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Video */}
                  <div className="flex-1 relative bg-gray-900">
                    <video
                      src="/assets/video-2.mov"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover object-bottom"
                    />
                  </div>

                  {/* Footer */}
                  <div className="p-6 bg-gradient-to-br from-primary/5 to-white border-t border-primary/10">
                    <div className="flex items-center gap-3">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900 mb-1">
                          Every question answered perfectly
                        </p>
                        <p className="text-xs text-gray-600">
                          Check-in, WiFi, recommendations, house rules—all
                          handled
                        </p>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Setup in minutes, delight guests 24/7
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Train your AI concierge once, let it handle guest questions
                forever
              </p>
            </div>
            {/* Center arrow connector - desktop only */}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
