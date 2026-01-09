import FadeIn from "../animations/FadeIn";

export function Problem() {
  const pains = [
    {
      emoji: "📱",
      title: "Endless Repetitive Questions",
      description:
        '"What\'s the WiFi?" "How do I use the coffee maker?" You\'re answering the same questions every single day.',
    },
    {
      emoji: "⏰",
      title: "Late Night Interruptions",
      description:
        "Getting woken up at 2 AM because a guest can't figure out the smart lock or the thermostat.",
    },
    {
      emoji: "📉",
      title: "Inconsistent Guest Experience",
      description:
        "Slow response times lead to frustrated guests and lower ratings on Airbnb and Vrbo.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-500/5 rounded-full blur-[128px] -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Being a host shouldn't mean being on call{" "}
            <span className="text-primary">24/7</span>.
          </h2>
          <p className="text-lg text-muted-foreground">
            The operational overhead of guest communication is burning you out
            and eating into your profits.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {pains.map((pain, index) => (
            <FadeIn key={index} delay={index * 0.15}>
              <div className="glass-card p-8 rounded-2xl relative group hover:shadow-lg transition-all duration-300 h-full">
                <div className="text-4xl mb-6 bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {pain.emoji}
                </div>
                <h3 className="text-xl font-semibold mb-3">{pain.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pain.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
