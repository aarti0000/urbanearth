"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import Image from "next/image";

export default function RegisterForm() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        imageRef.current,
        {
          x: -60,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        }
      ).fromTo(
        contentRef.current,
        {
          x: 50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.4"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-[#faf7f2] flex items-center justify-center px-5 py-10 md:px-10"
    >
      <div className="w-full max-w-6xl grid md:grid-cols-2 overflow-hidden rounded-2xl bg-white">

        {/* LEFT IMAGE */}
        <div
          ref={imageRef}
          className="relative min-h-[300px] md:min-h-[700px] overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
            alt="Beautiful home interior"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/25" />

          <div className="absolute bottom-10 left-8 md:left-12 text-white max-w-md z-10">
            <p className="text-xs uppercase tracking-[0.3em] mb-3">
              Join HomeHaven
            </p>

            <h1 className="text-4xl md:text-5xl font-serif leading-tight">
              Create your space.
            </h1>

            <p className="mt-4 text-sm md:text-base text-white/90 leading-6">
              Discover thoughtfully selected furniture and décor designed to
              make every corner feel like home.
            </p>
          </div>
        </div>

        {/* REGISTER FORM */}
        <div
          ref={contentRef}
          className="flex items-center justify-center px-7 py-12 md:px-14"
        >
          <div className="w-full max-w-md">

            <div className="mb-8">
              <p className="text-sm font-semibold tracking-[0.25em] uppercase text-[#8b7355]">
                HomeHaven
              </p>

              <h2 className="mt-4 text-3xl md:text-4xl font-serif text-[#2f2a26]">
                Create account
              </h2>

              <p className="mt-3 text-sm text-[#81766d]">
                Create your account and start exploring HomeHaven.
              </p>
            </div>

            <form className="space-y-5">

              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#403832] mb-2"
                >
                  Full name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-lg border border-[#ded6ce] bg-[#fcfaf8] px-4 py-3.5 text-sm text-[#2f2a26] outline-none transition placeholder:text-[#aaa19a] focus:border-[#8b7355] focus:bg-white"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#403832] mb-2"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-[#ded6ce] bg-[#fcfaf8] px-4 py-3.5 text-sm text-[#2f2a26] outline-none transition placeholder:text-[#aaa19a] focus:border-[#8b7355] focus:bg-white"
                />
              </div>

              {/* PASSWORD */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-[#403832] mb-2"
                >
                  Password
                </label>

                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Create a password"
                  className="w-full rounded-lg border border-[#ded6ce] bg-[#fcfaf8] px-4 py-3.5 text-sm text-[#2f2a26] outline-none transition placeholder:text-[#aaa19a] focus:border-[#8b7355] focus:bg-white"
                />
              </div>

              {/* CONFIRM PASSWORD */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-[#403832] mb-2"
                >
                  Confirm password
                </label>

                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Confirm your password"
                  className="w-full rounded-lg border border-[#ded6ce] bg-[#fcfaf8] px-4 py-3.5 text-sm text-[#2f2a26] outline-none transition placeholder:text-[#aaa19a] focus:border-[#8b7355] focus:bg-white"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#2f2a26] py-3.5 text-sm font-medium text-white transition duration-300 hover:bg-[#8b7355] hover:-translate-y-0.5"
              >
                Create account
              </button>
            </form>

            <p className="text-center text-sm text-[#81766d] mt-8">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-[#2f2a26] transition hover:text-[#8b7355]"
              >
                Sign in
              </Link>
            </p>

          </div>
        </div>
      </div>
    </main>
  );
}
