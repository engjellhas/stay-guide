import FadeIn from "../animations/FadeIn";

export function Trust() {
  const brands = ["Airbnb", "Vrbo", "Booking.com", "Guesty", "Hostfully"];

  return (
    <section className="py-10 border-y border-gray-100 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <p className="text-center text-sm font-medium text-muted-foreground mb-8">
            Integrates seamlessly with your favorite platforms
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500 hover:opacity-100">
            {brands.map((brand) => (
              <div
                key={brand}
                className="text-xl font-bold text-foreground transition-colors"
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
