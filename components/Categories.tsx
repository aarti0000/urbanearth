"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Categories() {
  const sectionRef = useRef<HTMLElement>(null);

  const categories = [
    {
      name: "Vases",
      image: "/images/1vases.jpg",
    },
    {
      name: "Lighting",
      image: "/images/3lighting.jpg",
    },
    {
      name: "Wall Decor",
      image: "/images/2wall-decor.jpg",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section heading
      gsap.from(".category-heading", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".category-heading",
          start: "top 85%",
        },
      });

      // Category cards
      gsap.from(".category-card", {
        opacity: 0,
        y: 70,
        duration: 0.9,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".category-grid",
          start: "top 80%",
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
      <div className="mx-auto max-w-7xl px-8">

        {/* Heading */}
        <div className="category-heading mb-12 text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
            Explore
          </p>

          <h2 className="mt-3 font-serif text-4xl text-stone-900">
            Shop by category
          </h2>

        </div>

        {/* Categories */}
        <div className="category-grid grid gap-8 md:grid-cols-3">

          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/products?category=${encodeURIComponent(category.name)}`}
              className="category-card group relative h-[400px] overflow-hidden rounded-3xl"
            >

              {/* Image */}
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 transition duration-500 group-hover:bg-black/30" />

              {/* Category name */}
              <h3 className="absolute bottom-8 left-8 font-serif text-3xl text-white transition-transform duration-500 group-hover:-translate-y-2">
                {category.name}
              </h3>

              {/* Arrow */}
              <span className="absolute bottom-8 right-8 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-stone-900 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                →
              </span>

            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}