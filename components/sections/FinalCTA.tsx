import { Button } from "@/components/ui/Button";
import FadeIn from "../animations/FadeIn";

export function FinalCTA() {
  return (
    <section className="py-40 bg-white relative overflow-hidden">
      <div className="halo top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeIn direction="up">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-8xl title-display mb-10 text-[#222222] leading-[1.1]">
              Ready to host on Autopilot?
            </h2>

            <p className="text-xl md:text-2xl text-secondary max-w-2xl mx-auto mb-16 leading-relaxed">
              Join the future of guest communication.{" "}
              <br className="hidden md:block" />
              Start your 14-day free trial today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <Button variant="primary" className="h-16 px-12 text-xl">
                Get Started
              </Button>
              <Button variant="outline" className="h-16 px-12 text-xl">
                Watch the film
              </Button>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-10 text-secondary font-medium">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚡️</span>
                <span>Fast setup</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔒</span>
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐️</span>
                <span>5-star results</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
