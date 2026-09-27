"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function ResetPasswordForm() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
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
      className="min-h-screen bg-[#f7f7f7] flex items-center justify-center px-5 py-10"
    >
      <div
        ref={contentRef}
        className="w-full max-w-lg rounded-2xl bg-white px-8 py-12 md:px-12"
      >
        <div className="mb-8 text-center">

          <p className="text-sm font-semibold tracking-[0.25em] uppercase text-[#000000]">
            Urban Earth
          </p>

          <h1 className="mt-5 text-3xl md:text-4xl font-serif text-[#000000]">
            Set new password
          </h1>

          <p className="mt-4 text-sm leading-6 text-[#000000]">
            Choose a secure new password for your Urban Earth account.
          </p>

        </div>

        <form className="space-y-5">

          {/* NEW PASSWORD */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[#000000] mb-2"
            >
              New password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              placeholder="Enter new password"
              className="w-full rounded-lg border border-[#e5e5e5] bg-[#f7f7f7] px-4 py-3.5 text-sm text-[#000000] outline-none transition placeholder:text-[#a3a3a3] focus:border-[#000000] focus:bg-white"
            />
          </div>

          {/* CONFIRM PASSWORD */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-[#000000] mb-2"
            >
              Confirm new password
            </label>

            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              placeholder="Confirm new password"
              className="w-full rounded-lg border border-[#e5e5e5] bg-[#f7f7f7] px-4 py-3.5 text-sm text-[#000000] outline-none transition placeholder:text-[#a3a3a3] focus:border-[#000000] focus:bg-white"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-[#000000] py-3.5 text-sm font-medium text-white transition duration-300 hover:bg-[#000000] hover:-translate-y-0.5"
          >
            Reset password
          </button>

        </form>

        <div className="mt-8 text-center">
          <Link
            href="/login"
            className="text-sm font-medium text-[#000000] transition hover:text-[#000000]"
          >
            ← Back to sign in
          </Link>
        </div>

      </div>
    </main>
  );
}