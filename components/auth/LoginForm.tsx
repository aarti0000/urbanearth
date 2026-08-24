"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";

export default function LoginForm() {
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
          clearProps: "transform",
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
          clearProps: "transform",
        },
        "-=0.4"
      );
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <main
      ref={containerRef}
      className="min-h-[calc(100vh-110px)] bg-[#faf7f2] flex items-center justify-center px-5 py-10 md:px-10"
    >
      <div className="w-full max-w-6xl grid md:grid-cols-2 overflow-hidden rounded-2xl shadow-sm">

        {/* LEFT IMAGE */}
        <div
          ref={imageRef}
          className="relative min-h-[300px] md:min-h-[650px] overflow-hidden opacity-100"
        >
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
            alt="Home interior"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Text */}
          <div className="absolute bottom-10 left-8 md:left-12 text-white max-w-md z-10">
            <p className="text-xs uppercase tracking-[0.3em] mb-3">
              Make your space
            </p>

            <h1 className="text-4xl md:text-5xl font-serif leading-tight">
              Feel like home.
            </h1>

            <p className="mt-4 text-sm md:text-base text-white/90 leading-6">
              Thoughtfully selected pieces for spaces that feel warm,
              beautiful, and uniquely yours.
            </p>
          </div>
        </div>

        {/* RIGHT LOGIN */}
        <div
          ref={contentRef}
          className="bg-white flex items-center justify-center px-7 py-12 md:px-14 opacity-100"
        >
          <div className="w-full max-w-md">

            {/* Brand */}
            <div className="mb-10">
              <p className="text-sm font-semibold tracking-[0.25em] uppercase text-[#8b7355]">
                HomeHaven
              </p>

              <h2 className="mt-4 text-3xl md:text-4xl font-serif text-[#2f2a26]">
                Welcome back
              </h2>

              <p className="mt-3 text-sm text-[#81766d]">
                Sign in to continue to your account.
              </p>
            </div>

            {/* FORM */}
            <form className="space-y-5">

              {/* Email */}
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
                  className="w-full rounded-lg border border-[#ded6ce] bg-[#fcfaf8] px-4 py-3.5 text-sm text-[#2f2a26] placeholder:text-[#aaa19a] outline-none transition focus:border-[#8b7355] focus:bg-white"
                />
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-[#403832]"
                  >
                    Password
                  </label>

                  <Link
                    href="/forgotpassword"
                    className="text-xs text-[#8b7355] hover:text-[#2f2a26] transition"
                  >
                    Forgot password?
                  </Link>
                </div>

                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  className="w-full rounded-lg border border-[#ded6ce] bg-[#fcfaf8] px-4 py-3.5 text-sm text-[#2f2a26] placeholder:text-[#aaa19a] outline-none transition focus:border-[#8b7355] focus:bg-white"
                />
              </div>

              {/* Sign in */}
              <button
                type="submit"
                className="w-full rounded-lg bg-[#2f2a26] py-3.5 text-sm font-medium text-white transition duration-300 hover:bg-[#8b7355] hover:-translate-y-0.5"
              >
                Sign in
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-8">
              <div className="h-px flex-1 bg-[#e5dfd8]" />

              <span className="text-xs text-[#a39a92]">
                OR
              </span>

              <div className="h-px flex-1 bg-[#e5dfd8]" />
            </div>

            {/* Register */}
            <p className="text-center text-sm text-[#81766d]">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="font-medium text-[#2f2a26] hover:text-[#8b7355] transition"
              >
                Create an account
              </Link>
            </p>

          </div>
        </div>
      </div>
    </main>
  );
}
