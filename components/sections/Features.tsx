import FadeIn from "../animations/FadeIn";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Features() {
  const secondaryFeatures = [
    {
      title: "Smart Home Sync",
      description:
        "Connects with Nest, Ecobee, and Yale. Control temperature and locks with voice.",
      icon: (
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Local Recommendations",
      description:
        "Curate your own guide to the best coffee, food, and hidden gems in the neighborhood.",
      icon: (
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
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: "Emergency Alerts",
      description:
        "Instant SMS notifications when guests casually mention 'leak', 'fire', or 'locked out'.",
      icon: (
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
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
    },
    {
      title: "Multi-Language",
      description:
        "Instant translation for international guests. Speak in English, they hear it in Spanish.",
      icon: (
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
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
            Everything you need to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
              Run on Autopilot
            </span>
          </h2>
          <p className="text-xl text-muted-foreground font-light">
            Powerful tools to manage your property, delight guests, and save
            time—all without lifting a finger.
          </p>
        </div>

        {/* Feature Highlight 1: Mobile/Voice */}
        <div className="mb-24">
          <FadeIn>
            <div className="bg-[#f3f9f9] rounded-[2.5rem] p-8 md:p-12 lg:p-0 overflow-hidden border border-gray-100">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="lg:p-16 text-left">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
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
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                    Guest messaging that feels human.
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Our AI understands context, tone, and urgency. It replies to
                    &quot;How&apos;s the parking?&quot; instantly with your
                    specific instructions, adding a personal touch that guests
                    love.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Instant responses 24/7",
                      "Trained on your specific house manual",
                      "Human takeover whenever you want",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">
                          ✓
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="rounded-full">
                    See Conversation Samples
                  </Button>
                </div>
                <div className="relative h-[200px] lg:h-[600px] flex items-end justify-center pt-8 px-8 rounded-b-[2.5rem] lg:rounded-l-none lg:rounded-r-[2.5rem]">
                  <div className="relative w-64 md:w-120 overflow-hidden transform translate-y-10 lg:translate-y-20 hover:-translate-y-4 transition-transform duration-500">
                    <Image
                      src="/artifacts/mobile_app_mockup.png"
                      alt="Mobile App Interface"
                      width={400}
                      height={800}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Feature Highlight 2: Analytics/Dashboard */}
        <div className="mb-24">
          <FadeIn delay={0.2}>
            <div className="bg-gray-900 rounded-[2.5rem] p-8 md:p-12 lg:p-0 overflow-hidden border border-gray-800 text-white relative group">
              {/* Background gradient blob */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image Side (Left on Desktop) */}
                <div className="relative h-[300px] lg:h-[550px] flex items-center justify-center p-8 order-2 lg:order-1">
                  <div className="relative w-full max-w-lg aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-white/10 transform lg:rotate-3 group-hover:rotate-0 transition-transform duration-700">
                    <Image
                      src="/artifacts/vibrant_host_dashboard_mockup.png"
                      alt="Analytics Dashboard"
                      width={800}
                      height={600}
                      className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>

                {/* Text Side */}
                <div className="lg:p-16 text-left order-1 lg:order-2 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-6">
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
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Insights that boost revenue.
                  </h3>
                  <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                    Know exactly what your guests are experiencing. Track
                    satisfaction scores, response times, and identify missing
                    amenities that could boost your listing ranking.
                  </p>
                  <Button className="bg-white text-gray-900 hover:bg-gray-100 rounded-full h-12 px-8">
                    View Your Dashboard
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Secondary Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {secondaryFeatures.map((feature, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="p-6 rounded-3xl border border-gray-100 bg-white hover:shadow-xl hover:shadow-gray-100/50 transition-all duration-300 group h-full hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-900 mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
