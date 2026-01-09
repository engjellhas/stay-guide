import FadeIn from "../animations/FadeIn";
import { Button } from "@/components/ui/Button";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Sync Your Listing",
      description:
        "One-click import from Airbnb or Vrbo. We pull your house manual, wifi, and check-out rules automatically.",
      color: "bg-blue-500",
      lightColor: "bg-blue-50 text-blue-600",
    },
    {
      number: "02",
      title: "Customize the AI",
      description:
        "Review the knowledge base. Add special instructions for the hot tub or that tricky back door lock.",
      color: "bg-purple-500",
      lightColor: "bg-purple-50 text-purple-600",
    },
    {
      number: "03",
      title: "Place & Delight",
      description:
        "Plug in the hub. Guests get instant answers, and you get 5-star reviews for communication.",
      color: "bg-primary",
      lightColor: "bg-rose-50 text-primary",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-24 bg-gray-50/50 relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 mb-6 text-xs font-semibold uppercase tracking-wider text-gray-500 shadow-xs">
            Simple Onboarding
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
            From setup to autopilot in <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-orange-500">
              under 10 minutes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground font-light">
            We handle the heavy lifting. You just plug it in.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[2.5rem] left-[15%] right-[15%] h-0.5 bg-gray-200 -z-10" />

          {steps.map((step, index) => (
            <FadeIn
              key={index}
              delay={index * 0.2}
              className="relative flex flex-col"
            >
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-100/50 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-center justify-between mb-8">
                  <div
                    className={`w-16 h-16 rounded-2xl ${step.lightColor} flex items-center justify-center text-2xl font-bold font-outfit shadow-sm group-hover:scale-110 transition-transform`}
                  >
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="md:hidden w-px h-12 bg-gray-200 absolute -bottom-8 left-12" />
                  )}
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="rounded-full px-8 h-12 text-lg shadow-lg shadow-primary/20"
          >
            Generate Your House Manual AI
          </Button>
          <p className="mt-4 text-sm text-gray-500">
            Free forever for 1 property
          </p>
        </div>
      </div>
    </section>
  );
}
