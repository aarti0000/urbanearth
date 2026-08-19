"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import products from "@/data/products.json";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProducts() {
  const sectionRef = useRef<HTMLElement>(null);

  const featuredProducts = products.filter((product) =>
    [12, 14, 18, 20].includes(product.id)
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(".featured-heading", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".featured-heading",
          start: "top 85%",
        },
      });

      // Product cards animation
      gsap.from(".featured-card", {
        opacity: 0,
        y: 70,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".featured-grid",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#faf7f2] px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="featured-heading mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
            Our Selection
          </p>

          <h2 className="mt-3 font-serif text-4xl text-stone-900">
            Featured Products
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-stone-500">
            Discover some of our carefully selected pieces
            designed to bring warmth and character to your home.
          </p>
        </div>

        {/* Products */}
        <div className="featured-grid grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="featured-card group block"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl bg-stone-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[350px] w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/10" />

                {/* View button */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-stone-900 shadow-lg">
                    View Product →
                  </span>
                </div>
              </div>

              {/* Product information */}
              <div className="mt-5">
                <p className="text-xs uppercase tracking-[0.15em] text-stone-400">
                  {product.category}
                </p>

                <h3 className="mt-2 font-serif text-xl text-stone-900 transition-colors duration-300 group-hover:text-stone-600">
                  {product.name}
                </h3>

                <p className="mt-2 font-medium text-stone-700">
                  Rs. {product.price.toLocaleString()}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

