"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Hero animation
      tl.from(".banner-label", {
        opacity: 0,
        y: 15,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          ".banner-line",
          {
            opacity: 0,
            y: 25,
            duration: 0.7,
            stagger: 0.06,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          ".banner-description",
          {
            opacity: 0,
            y: 15,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.35"
        )
        .from(
          ".banner-buttons",
          {
            opacity: 0,
            y: 12,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          ".banner-trust",
          {
            opacity: 0,
            y: 10,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .from(
          ".banner-image",
          {
            opacity: 0,
            x: 35,
            scale: 1.02,
            duration: 1.1,
            ease: "power3.out",
          },
          "-=1"
        )
        .from(
          ".collection-card",
          {
            opacity: 0,
            y: 15,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.5"
        );

      // Floating card
      gsap.to(".collection-card", {
        y: -7,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Background circle
      gsap.to(".hero-circle", {
        x: -30,
        y: 25,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Image parallax
      gsap.to(".banner-image img", {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: ".banner-image",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={bannerRef}
      className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden bg-[#f4f1ea]"
    >
      {/* Background decoration */}
      <div className="hero-circle absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-[#e8e1d5] opacity-50" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* LEFT */}
          <div className="max-w-xl">

            {/* Label */}
            <div className="banner-label mb-7 flex items-center gap-4">
              <span className="h-px w-10 bg-stone-400" />

              <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
                Curated Home Decor
              </p>
            </div>

            {/* Heading */}
            <h1 className="text-[3.5rem] font-serif leading-[0.98] tracking-tight text-stone-900 sm:text-6xl lg:text-[5.2rem]">

              <span className="banner-line inline-block">
                Make your
              </span>

              <br />

              <span className="banner-line inline-block">
                home feel
              </span>

              <br />

              <span className="banner-line inline-block italic font-normal">
                beautiful.
              </span>

            </h1>

            {/* Description */}
            <p className="banner-description mt-8 max-w-md text-base leading-8 text-stone-600 sm:text-lg">
              Thoughtfully selected pieces that bring warmth,
              character, and timeless beauty into your everyday
              space.
            </p>

            {/* Buttons */}
            <div className="banner-buttons mt-10 flex flex-wrap items-center gap-4">

              <Link
                href="/product"
                className="group rounded-full bg-stone-900 px-7 py-4 text-sm tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:bg-stone-700 hover:shadow-xl"
              >
                Shop Collection

                <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-stone-300 px-7 py-4 text-sm tracking-wide text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-stone-400 hover:bg-white"
              >
                Our Story
              </Link>

            </div>

            {/* Trust */}
            <div className="banner-trust mt-10 flex items-center gap-3 text-xs text-stone-500">
              <span className="h-1.5 w-1.5 rounded-full bg-stone-400" />

              Designed for beautiful everyday living
            </div>

          </div>

          {/* RIGHT */}
          <div className="relative">

            {/* Image */}
            <div className="banner-image relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-[0_25px_70px_rgba(60,50,40,0.15)] sm:aspect-[5/6]">

              <img
                src="/images/dimages.jpg"
                alt="Elegant home interior"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

            </div>

            {/* Floating Card */}
            <div className="collection-card absolute -bottom-6 -left-5 rounded-2xl bg-white/95 px-6 py-5 shadow-[0_15px_40px_rgba(60,50,40,0.12)] backdrop-blur-sm sm:-left-8">

              <p className="text-[10px] uppercase tracking-[0.25em] text-stone-400">
                New Collection
              </p>

              <p className="mt-1 font-serif text-xl text-stone-800">
                Timeless Pieces
              </p>

              <div className="mt-3 flex items-center gap-2">
                <span className="h-px w-8 bg-stone-300" />

                <span className="text-[10px] text-stone-400">
                  2026 EDITION
                </span>
              </div>

            </div>

            {/* Number */}
            <div className="image-number absolute -right-5 -top-5 flex h-16 w-16 items-center justify-center rounded-full border border-stone-300/70 bg-[#f4f1ea]">

              <span className="text-xs text-stone-500">
                01
              </span>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;