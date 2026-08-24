import { Heart, Sparkles, Home } from "lucide-react";
import Image from "next/image";

export default function AboutValues() {
  const values = [
    {
      icon: Sparkles,
      title: "Thoughtful Design",
      description:
        "We choose pieces with simple forms, timeless character, and details that make a space feel special.",
      image:
        "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Heart,
      title: "Quality First",
      description:
        "Every product is selected with quality, durability, and everyday enjoyment in mind.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Home,
      title: "Made for Living",
      description:
        "Our collection is designed to fit naturally into real homes and everyday moments.",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="bg-[#faf7f2] px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">
            What We Believe
          </p>

          <h2 className="mt-4 font-serif text-4xl text-stone-900 sm:text-5xl">
            Designed with purpose.
          </h2>

          <p className="mt-5 text-base leading-7 text-stone-600">
            We believe the best interiors are built around pieces that feel
            intentional, personal, and timeless.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">

          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="group relative h-[420px] overflow-hidden rounded-2xl"
              >
                {/* Background Image */}
                <Image
                  src={value.image}
                  alt={value.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/50" />

                {/* Content */}
                <div className="relative flex h-full flex-col items-center justify-end p-8 text-center text-white">

                  {/* Icon */}
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-sm">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>

                  <h3 className="font-serif text-3xl">
                    {value.title}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-white/80">
                    {value.description}
                  </p>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
