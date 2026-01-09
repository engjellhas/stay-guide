import { Button } from "@/components/ui/Button";
import FadeIn from "../animations/FadeIn";

export function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Rich Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-orange-50" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-200/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeIn>
          <div className="max-w-5xl mx-auto bg-white/40 backdrop-blur-xl border border-white/60 rounded-[2.5rem] p-8 md:p-16 text-center shadow-2xl shadow-primary/5 relative overflow-hidden group">
            {/* Shimmer effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent group-hover:translate-x-full transition-transform duration-1000 -translate-x-full z-0 pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-8 animate-pulse">
                LIMITED TIME OFFER
              </div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-foreground pb-2">
                Ready to host on <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-rose-500 to-orange-500 animate-gradient bg-300%">
                  Autopilot?
                </span>
              </h2>

              <p className="text-xl md:text-2xl text-muted-foreground/90 max-w-2xl mx-auto mb-12 leading-relaxed">
                Join 500+ hosts reclaiming their freedom.
                <span className="block mt-2 font-medium text-foreground">
                  Try it risk-free for 30 days.
                </span>
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Button
                  size="lg"
                  className="h-16 px-12 text-xl w-full sm:w-auto shadow-xl shadow-primary/25 bg-primary hover:bg-primary/90 text-white rounded-full transition-all hover:scale-105 hover:shadow-primary/40 border-t border-white/20"
                >
                  Start Free Trial
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-16 px-12 text-xl w-full sm:w-auto border-gray-200 hover:bg-white/80 bg-white/50 text-foreground rounded-full backdrop-blur-md transition-all hover:border-gray-300"
                >
                  Book a Demo
                </Button>
              </div>

              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-green-500"
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
                  No credit card required
                </span>
                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-green-500"
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
                  Cancel anytime
                </span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
