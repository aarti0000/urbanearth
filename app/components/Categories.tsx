
"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Categories = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // =========================
      // HEADING
      // =========================

      gsap.from(".category-heading", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".category-heading",
          start: "top 85%",
        },
      });


      // =========================
      // CARDS
      // =========================

      gsap.from(".category-card", {
        opacity: 0,
        y: 80,
        duration: 1,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".category-grid",
          start: "top 80%",
        },
      });


      // =========================
      // NUMBER BADGES
      // =========================

      gsap.from(".category-number", {
        opacity: 0,
        scale: 0.5,
        duration: 0.7,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".category-grid",
          start: "top 75%",
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-24"
    >

      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}

        <div className="category-heading mb-12 flex items-end justify-between">

          <div>

            <p className="text-xs uppercase tracking-[0.3em] text-stone-400">
              Explore
            </p>

            <h2 className="mt-3 font-serif text-4xl text-stone-900 md:text-5xl">
              Shop by Category
            </h2>

          </div>

          <Link
            href="/product"
            className="hidden items-center gap-2 text-sm text-stone-500 transition-colors hover:text-stone-900 md:flex"
          >
            View All
            <span>→</span>
          </Link>

        </div>


        {/* Cards */}

        <div className="category-grid grid grid-cols-1 gap-6 md:grid-cols-3">


          {/* VASES */}

          <Link
            href="/product"
            className="category-card group relative block h-[460px] overflow-hidden rounded-[2rem]"
          >

            <img
              src="/images/1vases.jpg"
              alt="Decorative vases"
              className="h-full w-full object-cover transition duration-1000 ease-out group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition duration-500 group-hover:from-black/70" />

            <div className="category-number absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-xs text-white backdrop-blur-md">
              01
            </div>

            <div className="absolute bottom-7 left-7 right-7 text-white">

              <div className="flex items-end justify-between">

                <div>

                  <p className="mb-2 text-xs uppercase tracking-[0.25em] text-white/70">
                    Collection
                  </p>

                  <h3 className="font-serif text-3xl">
                    Vases
                  </h3>

                </div>

                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-stone-900 transition duration-500 group-hover:-translate-y-1 group-hover:translate-x-1">
                  →
                </span>

              </div>

            </div>

          </Link>


          {/* LIGHTING */}

          <Link
            href="/product"
            className="category-card group relative block h-[460px] overflow-hidden rounded-[2rem]"
          >

            <img
              src="/images/3lighting.jpg"
              alt="Decorative lighting"
              className="h-full w-full object-cover transition duration-1000 ease-out group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition duration-500 group-hover:from-black/70" />

            <div className="category-number absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-xs text-white backdrop-blur-md">
              02
            </div>

            <div className="absolute bottom-7 left-7 right-7 text-white">

              <div className="flex items-end justify-between">

                <div>

                  <p className="mb-2 text-xs uppercase tracking-[0.25em] text-white/70">
                    Collection
                  </p>

                  <h3 className="font-serif text-3xl">
                    Lighting
                  </h3>

                </div>

                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-stone-900 transition duration-500 group-hover:-translate-y-1 group-hover:translate-x-1">
                  →
                </span>

              </div>

            </div>

          </Link>


          {/* WALL DECOR */}

          <Link
            href="/product"
            className="category-card group relative block h-[460px] overflow-hidden rounded-[2rem]"
          >

            <img
              src="/images/2wall-decor.jpg"
              alt="Wall decor"
              className="h-full w-full object-cover transition duration-1000 ease-out group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition duration-500 group-hover:from-black/70" />

            <div className="category-number absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-xs text-white backdrop-blur-md">
              03
            </div>

            <div className="absolute bottom-7 left-7 right-7 text-white">

              <div className="flex items-end justify-between">

                <div>

                  <p className="mb-2 text-xs uppercase tracking-[0.25em] text-white/70">
                    Collection
                  </p>

                  <h3 className="font-serif text-3xl">
                    Wall Decor
                  </h3>

                </div>

                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-stone-900 transition duration-500 group-hover:-translate-y-1 group-hover:translate-x-1">
                  →
                </span>

              </div>

            </div>

          </Link>

        </div>

      </div>

    </section>
  );
};

export default Categories;

