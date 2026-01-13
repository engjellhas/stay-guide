import FadeIn from "../animations/FadeIn";

export function Trust() {
  const brands = ["Airbnb", "Vrbo", "Booking.com", "Guesty", "Hostfully"];

  return (
    <section className="py-24 border-y border-black/5 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="up">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-gray-400 mb-12">
            Trusted by the world&apos;s best hosts
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale saturate-0">
            {brands.map((brand) => (
              <div
                key={brand}
                className="text-2xl md:text-3xl font-semibold text-[#222222] tracking-tight"
              >
                {brand}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
