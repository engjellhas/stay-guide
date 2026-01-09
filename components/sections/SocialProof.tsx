import FadeIn from "../animations/FadeIn";

export function SocialProof() {
  const testimonials = [
    {
      quote:
        "Since installing StayGuide, my messages have dropped by 80%. I finally have my evenings back.",
      name: "Sarah Jenkins",
      title: "Superhost, 5 Properties",
      avatar: "S",
    },
    {
      quote:
        "Guests love it. They mention the 'magic voice assistant' in almost every review. It's my secret weapon.",
      name: "Marcus Chen",
      title: "Property Manager",
      avatar: "M",
    },
    {
      quote:
        "It paid for itself in the first week by saving me a 3 AM trip to explain the heater.",
      name: "Elena Rodriguez",
      title: "Airbnb Host",
      avatar: "E",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gray-50">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
          Hosts are reclaiming their time
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full">
                <div className="flex gap-1 mb-6 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg text-gray-600 mb-6 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
