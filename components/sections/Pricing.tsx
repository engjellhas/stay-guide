import { Button } from "@/components/ui/Button";
import FadeIn from "../animations/FadeIn";

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$10",
      period: "/property/mo",
      description:
        "Perfect for single-property hosts getting started with automation.",
      features: [
        "Unlimited guest voice queries",
        "SMS escalation to host",
        "Basic house manual automation",
        "Email support",
      ],
    },
    {
      name: "Pro",
      price: "$30",
      period: "/property/mo",
      popular: true,
      description:
        "For serious hosts who want 5-star experiences and local recommendations.",
      features: [
        "Everything in Starter",
        "Local restaurant & activity guide",
        "Custom voice branding",
        "Smart home integration (Nest, etc.)",
        "Interaction analytics dashboard",
        "Priority chat support",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description:
        "For property managers with 20+ units needing full customization.",
      features: [
        "Volume discounts",
        "API access & PMS integration",
        "Dedicated account manager",
        "Custom hardware branding",
        "SLA guarantees",
        "Onboarding training",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-500/5 rounded-full blur-[128px] -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Pays for itself with one saved late-night call.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <FadeIn key={index} delay={index * 0.15}>
              <div
                className={`rounded-2xl p-8 border flex flex-col relative transition-all duration-300 h-full ${
                  plan.popular
                    ? "border-primary bg-white shadow-xl shadow-primary/10 scale-105 z-10"
                    : "border-gray-200 bg-gray-50/50 hover:bg-white hover:shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-rose-600 text-white text-xs font-bold uppercase tracking-wide py-1 px-4 rounded-full shadow-md">
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground h-10">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground ml-1">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-gray-600"
                    >
                      <svg
                        className={`w-5 h-5 shrink-0 ${
                          plan.popular ? "text-primary" : "text-gray-400"
                        }`}
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
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "primary" : "outline"}
                  className={`w-full ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90 text-white"
                      : "border-gray-300 hover:bg-gray-50 text-foreground"
                  }`}
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
