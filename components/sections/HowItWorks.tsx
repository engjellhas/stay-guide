import FadeIn from "../animations/FadeIn";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Connect Your Property",
      description:
        "Import details from your Airbnb/Vrbo listing or upload your existing house manual pdf.",
    },
    {
      number: "02",
      title: "We Train Your AI",
      description:
        "Our system automatically builds a custom knowledge base specific to your home and neighborhood.",
    },
    {
      number: "03",
      title: "Placement & Go",
      description:
        "Place the StayGuide smart speaker in your rental. It's ready to assist guests instantly.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Setup takes less than{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-rose-600">
              10 minutes
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            No complex coding or hardware setup. We ship you the pre-configured
            device.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

          {steps.map((step, index) => (
            <FadeIn
              key={index}
              delay={index * 0.2}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-3xl bg-white border border-gray-100 shadow-xl shadow-primary/5 flex items-center justify-center mb-6 z-10 relative group">
                <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
                <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-rose-600 font-outfit">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground max-w-xs">
                {step.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
