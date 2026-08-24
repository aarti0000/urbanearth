import Image from "next/image";

export default function AboutStory() {
  return (
    <section className="bg-white px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

        {/* Image */}
        <div className="relative h-[500px] overflow-hidden rounded-2xl">
          <Image
            src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80"
            alt="Beautiful home interior"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-stone-500">
            Our Story
          </p>

          <h2 className="font-serif text-4xl leading-tight text-stone-900 sm:text-5xl">
            Creating spaces that feel like home.
          </h2>

          <p className="mt-6 text-base leading-8 text-stone-600">
            HomeHaven began with a simple idea: the little things around us
            can make a big difference in how a space feels.
          </p>

          <p className="mt-4 text-base leading-8 text-stone-600">
            We created HomeHaven to make it easier to discover beautiful,
            thoughtful pieces that fit naturally into everyday life. From
            sculptural vases to warm lighting and timeless wall decor, every
            piece is selected with simplicity and character in mind.
          </p>

          <p className="mt-4 text-base leading-8 text-stone-600">
            Our goal isn&apos;t to fill your home with more things. It&apos;s to help
            you find pieces that make your space feel truly yours.
          </p>
        </div>

      </div>
    </section>
  );
}
