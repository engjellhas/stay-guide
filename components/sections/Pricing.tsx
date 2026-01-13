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
    <section id="pricing" className="py-32 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <h2 className="text-5xl md:text-7xl title-display mb-8 text-[#222222]">
            Simple, honest pricing.
          </h2>
          <p className="text-xl md:text-2xl text-secondary max-w-2xl mx-auto">
            Pays for itself with a single saved late-night guest call.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <FadeIn key={index} delay={index * 0.1} direction="up">
              <div
                className={`rounded-[3rem] p-10 md:p-12 border flex flex-col relative transition-all duration-300 h-full ${
                  plan.popular
                    ? "border-[#222222] bg-white shadow-2xl scale-[1.02] z-10"
                    : "border-black/5 bg-gray-50/50 hover:bg-white"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#222222] text-white text-[11px] font-bold uppercase tracking-widest py-1.5 px-5 rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-3 text-[#222222]">
                    {plan.name}
                  </h3>
                  <p className="text-base text-secondary">{plan.description}</p>
                </div>

                <div className="mb-10 flex items-baseline gap-1">
                  <span className="text-5xl font-semibold text-[#222222]">
                    {plan.price}
                  </span>
                  <span className="text-secondary font-medium">
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-5 mb-12 flex-1">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 text-base text-[#222222]"
                    >
                      <div className="w-5 h-5 rounded-full bg-black/5 flex items-center justify-center shrink-0 mt-0.5">
                        <svg
                          className="w-3 h-3 text-[#222222]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "primary" : "outline"}
                  className="w-full h-14 text-lg font-medium"
                >
                  {plan.price === "Custom" ? "Contact Team" : "Start now"}
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
