
"use client";

import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // =========================
      // HERO ANIMATION
      // =========================

      const heroTimeline = gsap.timeline();

      heroTimeline
        .from(".about-label", {
          opacity: 0,
          y: 25,
          duration: 0.7,
          ease: "power3.out",
        })
        .from(
          ".about-title",
          {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.35"
        )
        .from(
          ".about-description",
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        );

      // =========================
      // STORY SECTION
      // =========================

      gsap.from(".story-image", {
        opacity: 0,
        x: -80,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".story-section",
          start: "top 75%",
        },
      });

      gsap.from(".story-content", {
        opacity: 0,
        x: 80,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".story-section",
          start: "top 75%",
        },
      });

      // =========================
      // VALUES HEADING
      // =========================

      gsap.from(".values-heading", {
        opacity: 0,
        y: 50,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".values-section",
          start: "top 80%",
        },
      });

      // =========================
      // VALUE CARDS
      // =========================

      gsap.from(".value-card", {
        opacity: 0,
        y: 70,
        duration: 0.9,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".values-grid",
          start: "top 80%",
        },
      });

      // =========================
      // FINAL CTA
      // =========================

      gsap.from(".final-cta", {
        opacity: 0,
        y: 50,
        scale: 0.97,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".final-cta-section",
          start: "top 80%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-[#f8f5ef]">

      {/* =========================
          HERO
      ========================= */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <p className="about-label text-sm uppercase tracking-[0.3em] text-stone-500">
            About HomeHaven
          </p>

          <h1 className="about-title mt-5 font-serif text-5xl text-stone-900 md:text-7xl">
            Making spaces feel
            <br />
            <span className="italic">more like home.</span>
          </h1>

          <p className="about-description mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-stone-600">
            HomeHaven is a curated home decor store bringing together
            beautiful, timeless and thoughtful pieces that make your
            everyday spaces feel warm, personal and inviting.
          </p>

        </div>
      </section>


      {/* =========================
          OUR STORY
      ========================= */}

      <section className="story-section bg-white py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid items-center gap-16 md:grid-cols-2">

            {/* Image */}

            <div className="story-image h-[500px] overflow-hidden rounded-[2rem]">

              <img
                src="/images/decoration.jpg"
                alt="Home decor collection"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

            </div>


            {/* Text */}

            <div className="story-content">

              <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
                Our Story
              </p>

              <h2 className="mt-4 font-serif text-4xl text-stone-900 md:text-5xl">
                Beautiful things
                <br />
                for everyday living.
              </h2>

              <p className="mt-7 leading-relaxed text-stone-600">
                We believe your home should reflect who you are.
                That's why we carefully select decorative pieces
                that combine style, comfort and character.
              </p>

              <p className="mt-5 leading-relaxed text-stone-600">
                From elegant vases and warm lighting to unique wall
                decor, every piece at HomeHaven is chosen to help
                you create a space you truly love.
              </p>

              <Link
                href="/product"
                className="mt-8 inline-block rounded-full bg-stone-900 px-8 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
              >
                Explore Collection
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          VALUES
      ========================= */}

      <section className="values-section bg-stone-50 py-24">

        <div className="mx-auto max-w-7xl px-6">

          {/* Heading */}

          <div className="values-heading mb-14 text-center">

            <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
              What We Believe
            </p>

            <h2 className="mt-3 font-serif text-4xl text-stone-900 md:text-5xl">
              Our values
            </h2>

          </div>


          {/* Value Cards */}

          <div className="values-grid grid gap-8 md:grid-cols-3">


            {/* Thoughtful Design */}

            <div className="value-card group relative h-[450px] overflow-hidden rounded-3xl">

              <img
                src="/images/thoughtful-design.jpg"
                alt="Thoughtful home decor design"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/30 transition group-hover:bg-black/40" />

              <div className="relative flex h-full flex-col justify-end p-8 text-white">

                <div className="mb-4 text-4xl">
                  ✦
                </div>

                <h3 className="font-serif text-3xl">
                  Thoughtful Design
                </h3>

                <p className="mt-4 leading-relaxed text-white/80">
                  We choose pieces that bring beauty and personality
                  to your everyday surroundings.
                </p>

              </div>

            </div>


            {/* Made for Home */}

            <div className="value-card group relative h-[450px] overflow-hidden rounded-3xl">

              <img
                src="/images/made-for-home.jpg"
                alt="Cozy home interior"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/30 transition group-hover:bg-black/40" />

              <div className="relative flex h-full flex-col justify-end p-8 text-white">

                <div className="mb-4 text-4xl">
                  ♡
                </div>

                <h3 className="font-serif text-3xl">
                  Made for Home
                </h3>

                <p className="mt-4 leading-relaxed text-white/80">
                  Our collections are designed to create spaces
                  that feel comfortable, warm and welcoming.
                </p>

              </div>

            </div>


            {/* Timeless Style */}

            <div className="value-card group relative h-[450px] overflow-hidden rounded-3xl">

              <img
                src="/images/timeless-style.jpg"
                alt="Timeless interior design"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/30 transition group-hover:bg-black/40" />

              <div className="relative flex h-full flex-col justify-end p-8 text-white">

                <div className="mb-4 text-4xl">
                  ✧
                </div>

                <h3 className="font-serif text-3xl">
                  Timeless Style
                </h3>

                <p className="mt-4 leading-relaxed text-white/80">
                  We believe great decor should stay beautiful
                  beyond passing trends.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          FINAL CTA
      ========================= */}

      <section className="final-cta-section bg-stone-900 py-24 text-white">

        <div className="final-cta mx-auto max-w-4xl px-6 text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
            Find Your Style
          </p>

          <h2 className="mt-5 font-serif text-4xl md:text-6xl">
            Create a home
            <br />
            you love coming back to.
          </h2>

          <Link
            href="/product"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 text-stone-900 transition hover:bg-stone-200"
          >
            Shop Collection
          </Link>

        </div>

      </section>

    </main>
  );
}

