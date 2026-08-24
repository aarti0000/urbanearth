"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function ForgotPasswordForm() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-[#faf7f2] flex items-center justify-center px-5 py-10"
    >
      <div
        ref={contentRef}
        className="w-full max-w-lg rounded-2xl bg-white px-8 py-12 md:px-12"
      >
        <div className="mb-8 text-center">

          <p className="text-sm font-semibold tracking-[0.25em] uppercase text-[#8b7355]">
            HomeHaven  
          </p>

          <h1 className="mt-5 text-3xl md:text-4xl font-serif text-[#2f2a26]">
            Forgot your password?
          </h1>

          <p className="mt-4 text-sm leading-6 text-[#81766d]">
            Enter the email address associated with your account and we&apos;ll
            send you instructions to reset your password.
          </p>

        </div>

        <form className="space-y-5">

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

          <button
            type="submit"
            className="w-full rounded-lg bg-[#2f2a26] py-3.5 text-sm font-medium text-white transition duration-300 hover:bg-[#8b7355] hover:-translate-y-0.5"
          >
            Send reset link
          </button>

        </form>

        <div className="mt-8 text-center">
          <Link
            href="/login"
            className="text-sm font-medium text-[#8b7355] transition hover:text-[#2f2a26]"
          >
            ← Back to sign in
          </Link>
        </div>

      </div>
    </main>
  );
}
