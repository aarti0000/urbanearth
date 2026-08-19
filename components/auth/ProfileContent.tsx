"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function ProfileContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        {
          y: 25,
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
      className="min-h-[calc(100vh-110px)] bg-[#faf7f2] px-5 py-12 md:px-10"
    >
      <div
        ref={contentRef}
        className="mx-auto w-full max-w-6xl"
      >
        {/* HEADER */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8b7355]">
            HomeHaven
          </p>

          <h1 className="mt-3 font-serif text-3xl text-[#2f2a26] md:text-4xl">
            My account
          </h1>

          <p className="mt-2 text-sm text-[#81766d]">
            Manage your profile, account details and orders.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">

          {/* SIDEBAR */}
          <aside className="h-fit rounded-2xl bg-white p-5">
            <div className="border-b border-[#eee8e2] pb-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f1ebe4] font-serif text-xl text-[#8b7355]">
                JD
              </div>

              <h2 className="mt-4 font-medium text-[#2f2a26]">
                John Doe
              </h2>

              <p className="mt-1 text-sm text-[#81766d]">
                john@example.com
              </p>
            </div>

            <nav className="mt-5 space-y-1">
              <Link
                href="/profile"
                className="block rounded-lg bg-[#f6f1eb] px-4 py-3 text-sm font-medium text-[#2f2a26]"
              >
                Profile
              </Link>

              <Link
                href="/orders"
                className="block rounded-lg px-4 py-3 text-sm text-[#81766d] transition hover:bg-[#faf7f2] hover:text-[#2f2a26]"
              >
                My orders
              </Link>

              <Link
                href="/cart"
                className="block rounded-lg px-4 py-3 text-sm text-[#81766d] transition hover:bg-[#faf7f2] hover:text-[#2f2a26]"
              >
                My cart
              </Link>

              <Link
                href="/logout"
                className="block rounded-lg px-4 py-3 text-sm text-red-500 transition hover:bg-red-50"
              >
                Sign out
              </Link>
            </nav>
          </aside>

          {/* PROFILE CONTENT */}
          <section className="rounded-2xl bg-white p-7 md:p-10">
            <div className="mb-8">
              <h2 className="font-serif text-2xl text-[#2f2a26]">
                Personal information
              </h2>

              <p className="mt-2 text-sm text-[#81766d]">
                Update your personal details below.
              </p>
            </div>

            <form className="space-y-6">

              <div className="grid gap-5 md:grid-cols-2">

                {/* FIRST NAME */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-sm font-medium text-[#403832]"
                  >
                    First name
                  </label>

                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    defaultValue="John"
                    className="w-full rounded-lg border border-[#ded6ce] bg-[#fcfaf8] px-4 py-3.5 text-sm text-[#2f2a26] outline-none transition focus:border-[#8b7355] focus:bg-white"
                  />
                </div>

                {/* LAST NAME */}
                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-2 block text-sm font-medium text-[#403832]"
                  >
                    Last name
                  </label>

                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    defaultValue="Doe"
                    className="w-full rounded-lg border border-[#ded6ce] bg-[#fcfaf8] px-4 py-3.5 text-sm text-[#2f2a26] outline-none transition focus:border-[#8b7355] focus:bg-white"
                  />
                </div>

              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[#403832]"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  defaultValue="john@example.com"
                  className="w-full rounded-lg border border-[#ded6ce] bg-[#fcfaf8] px-4 py-3.5 text-sm text-[#2f2a26] outline-none transition focus:border-[#8b7355] focus:bg-white"
                />
              </div>

              {/* PHONE */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-[#403832]"
                >
                  Phone number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+977 98XXXXXXXX"
                  className="w-full rounded-lg border border-[#ded6ce] bg-[#fcfaf8] px-4 py-3.5 text-sm text-[#2f2a26] outline-none transition placeholder:text-[#aaa19a] focus:border-[#8b7355] focus:bg-white"
                />
              </div>

              {/* ADDRESS */}
              <div>
                <label
                  htmlFor="address"
                  className="mb-2 block text-sm font-medium text-[#403832]"
                >
                  Address
                </label>

                <input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Your address"
                  className="w-full rounded-lg border border-[#ded6ce] bg-[#fcfaf8] px-4 py-3.5 text-sm text-[#2f2a26] outline-none transition placeholder:text-[#aaa19a] focus:border-[#8b7355] focus:bg-white"
                />
              </div>

              <div className="flex justify-end border-t border-[#eee8e2] pt-6">
                <button
                  type="submit"
                  className="rounded-lg bg-[#2f2a26] px-7 py-3.5 text-sm font-medium text-white transition duration-300 hover:bg-[#8b7355]"
                >
                  Save changes
                </button>
              </div>

            </form>
          </section>

        </div>
      </div>
    </main>
  );
}