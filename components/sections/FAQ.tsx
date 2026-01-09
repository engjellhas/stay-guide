import FadeIn from "../animations/FadeIn";

export function FAQ() {
  const faqs = [
    {
      question: "Do guests need to download an app?",
      answer:
        "No! StayGuide is a voice-first experience using a dedicated smart speaker in your rental. Guests just talk to it naturally, like they would with Alexa or Siri, but it only knows about your property.",
    },
    {
      question: "How long does it take to set up?",
      answer:
        "About 10 minutes. You can import your listing details directly from Airbnb/Vrbo URL, or upload your existing house manual PDF. Our AI parses it and creates your custom knowledge base immediately.",
    },
    {
      question: "What if the AI doesn't know the answer?",
      answer:
        "If StayGuide is stumped, it can fall back to a generic helpful response or, if you choose, instantly text your phone number so you can jump in. It then learns that answer for next time.",
    },
    {
      question: "Can I customize the voice and personality?",
      answer:
        "Yes! On the Pro plan, you can choose from different voice personas to match your property's vibe—from 'Professional Concierge' to 'Friendly Local Surfer'.",
    },
    {
      question: "Is there a contract?",
      answer:
        "No long-term contracts. StayGuide is a monthly subscription you can cancel anytime. We believe the value speaks for itself.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
          Frequently Answered Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-md transition-all duration-300">
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
