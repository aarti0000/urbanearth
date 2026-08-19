"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-label", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power3.out",
      })
        .from(
          ".hero-title",
          {
            opacity: 0,
            y: 50,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".hero-description",
          {
            opacity: 0,
            y: 30,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          ".hero-button",
          {
            opacity: 0,
            y: 25,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".hero-trust",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".hero-image",
          {
            opacity: 0,
            x: 80,
            duration: 1.1,
            ease: "power3.out",
          },
          "-=0.8"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-[#f8f5ef]"
    >
      {/* Decorative background */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-stone-200/40 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-120px)] max-w-7xl items-center gap-12 px-6 py-16 sm:px-10 lg:grid-cols-2 lg:px-8 lg:py-20">

        {/* LEFT CONTENT */}
        <div className="max-w-xl">

          {/* Label */}
          <div className="hero-label inline-flex items-center gap-3">
            <span className="h-px w-10 bg-stone-400" />

            <p className="text-xs font-medium uppercase tracking-[0.3em] text-stone-500">
              HomeHaven
            </p>
          </div>

          {/* Heading */}
          <h1 className="hero-title mt-6 font-serif text-5xl leading-[1.05] text-stone-900 sm:text-6xl lg:text-7xl">
            Make your space
            <br />
            <span className="italic text-stone-600">
              feel like home.
            </span>
          </h1>

          {/* Description */}
          <p className="hero-description mt-7 max-w-lg text-base leading-8 text-stone-600 sm:text-lg">
            Thoughtfully selected home decor pieces designed
            to make your everyday spaces beautiful, warm and personal.
          </p>

          {/* Button */}
          <div className="hero-button mt-9">
            <Link
              href="/products"
              className="group inline-flex items-center gap-3 rounded-full bg-stone-900 px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-stone-800 hover:shadow-xl"
            >
              Shop Collection

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* Trust */}
          <div className="hero-trust mt-10 flex items-center gap-6 text-xs text-stone-500">
            <span>✦ Carefully Curated</span>
            <span>✦ Timeless Design</span>
          </div>
        </div>

        {/* IMAGE */}
        <div className="hero-image relative">

          <div className="relative h-[500px] overflow-hidden rounded-[2rem] sm:h-[600px]">
            <img
              src="/images/dimages.jpg"
              alt="Beautiful home interior"
              className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>

          {/* Floating card */}
          <div className="absolute -bottom-5 left-5 rounded-2xl bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md sm:left-8">
            <p className="text-xs uppercase tracking-[0.2em] text-stone-400">
              Curated for you
            </p>

            <p className="mt-1 font-serif text-lg text-stone-900">
              Beautiful living
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}