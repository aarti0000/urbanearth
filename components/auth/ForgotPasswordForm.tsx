"use client";

import { useLayoutEffect, useRef } from "react";

import Image from "next/image";
import Link from "next/link";

import { Mail, ShieldCheck, LockKeyhole, UserRound } from "lucide-react";

import gsap from "gsap";

export default function ForgotPasswordForm() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        imageRef.current,
        {
          x: -50,
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
          duration: 0.75,
          ease: "power3.out",
          clearProps: "transform",
        },
        "-=0.45"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className="bg-[#fafafa]"
    >
      {/* =====================================================
          FORGOT PASSWORD SECTION
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-gradient-to-r
          from-[#f7f7f7]
          via-white
          to-white
        "
      >
        <div
          className="
            mx-auto
            grid
            min-h-[650px]
            max-w-[1440px]
            lg:grid-cols-[0.95fr_1.05fr]
          "
        >
          {/* =================================================
              LEFT SIDE
          ================================================== */}

          <div
            ref={imageRef}
            className="
              relative
              min-h-[500px]
              overflow-hidden
              opacity-100
              sm:min-h-[560px]
              lg:min-h-[700px]
            "
          >
            {/* Background Image */}

            <Image
              src="/images/login-room.jpg"
              alt="Urban Earth modern interior"
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover object-center"
            />

            {/* Main gradient */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-[#f7f7f7]
                via-[#f7f7f7]/90
                to-[#f7f7f7]/15
                lg:via-[#f7f7f7]/80
              "
            />

            {/* Bottom gradient */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#f7f7f7]/80
                via-transparent
                to-transparent
              "
            />

            {/* Content */}

            <div
              className="
                relative
                z-10
                flex
                min-h-[500px]
                max-w-[600px]
                flex-col
                justify-center
                px-6
                py-16
                sm:min-h-[560px]
                sm:px-10
                md:px-14
                lg:min-h-[700px]
                lg:px-16
                xl:px-20
              "
            >
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#000000]
                  sm:text-sm
                "
              >
                Account Recovery
              </p>

              <h1
                className="
                  mt-5
                  max-w-[520px]
                  text-[38px]
                  font-bold
                  leading-[1.08]
                  tracking-[-0.03em]
                  text-[#171717]
                  sm:text-[48px]
                  lg:text-[54px]
                "
              >
                Forgot Your{" "}
                <span className="text-[#000000]">
                  Urban Earth
                </span>{" "}
                Password?
              </h1>

              <div className="mt-6 h-[2px] w-14 bg-[#000000]" />

              <p
                className="
                  mt-7
                  max-w-[470px]
                  text-sm
                  leading-7
                  text-[#494949]
                  sm:text-[15px]
                "
              >
                No worries. Enter the email address
                associated with your Urban Earth account
                and we&apos;ll help you get back in.
              </p>

              {/* Benefits */}

              <div
                className="
                  mt-10
                  grid
                  max-w-[440px]
                  gap-6
                  sm:mt-12
                "
              >
                <RecoveryBenefit
                  icon={
                    <Mail
                      size={23}
                      strokeWidth={1.7}
                    />
                  }
                  title="Enter Your Email"
                  description="Use the email address connected to your account."
                />

                <RecoveryBenefit
                  icon={
                    <ShieldCheck
                      size={23}
                      strokeWidth={1.7}
                    />
                  }
                  title="Secure Recovery"
                  description="Your account recovery process is kept secure."
                />

                <RecoveryBenefit
                  icon={
                    <LockKeyhole
                      size={22}
                      strokeWidth={1.7}
                    />
                  }
                  title="Reset Your Password"
                  description="Follow the instructions to create a new password."
                />
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT SIDE
          ================================================== */}

          <div
            ref={contentRef}
            className="
              flex
              items-center
              justify-center
              bg-[#fafafa]
              px-4
              py-12
              opacity-100
              sm:px-8
              sm:py-16
              lg:bg-white
              lg:px-12
              xl:px-20
            "
          >
            <div
              className="
                w-full
                max-w-[540px]
                rounded-2xl
                border
                border-[#e8e8e8]
                bg-white
                p-6
                shadow-[0_15px_50px_rgba(0,0,0,0.06)]
                sm:p-8
                md:p-10
              "
            >
              {/* Header */}

              <div>
                <h2
                  className="
                    text-2xl
                    font-bold
                    tracking-[-0.02em]
                    text-[#171717]
                    sm:text-[28px]
                  "
                >
                  Forgot Password?
                </h2>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-[#666]
                  "
                >
                  Enter your email and we&apos;ll send you
                  instructions to reset your password.
                </p>
              </div>

              {/* Form */}

              <form
                className="mt-8 space-y-5"
              >
                {/* Email */}

                <div>
                  <label
                    htmlFor="email"
                    className="
                      mb-2
                      block
                      text-sm
                      font-semibold
                      text-[#252525]
                    "
                  >
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail
                      size={19}
                      strokeWidth={1.7}
                      className="
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-[#8b8b8b]
                      "
                    />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="Enter your email"
                      className="
                        h-13
                        w-full
                        rounded-lg
                        border
                        border-[#dedede]
                        bg-white
                        pl-12
                        pr-4
                        text-sm
                        text-[#222]
                        outline-none
                        transition-all
                        placeholder:text-[#aaa]
                        focus:border-[#000000]
                        focus:ring-2
                        focus:ring-[#000000]/10
                      "
                    />
                  </div>
                </div>

                {/* Submit */}

                <button
                  type="submit"
                  className="
                    flex
                    h-13
                    w-full
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#000000]
                    px-6
                    text-sm
                    font-bold
                    text-white
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:bg-[#000000]
                    hover:shadow-lg
                    active:translate-y-0
                  "
                >
                  Send Reset Link
                </button>
              </form>

              {/* Back to Login */}

              <div
                className="
                  mt-8
                  border-t
                  border-[#eeeeee]
                  pt-7
                  text-center
                "
              >
                <Link
                  href="/login"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-[#000000]
                    transition-colors
                    hover:text-[#000000]
                  "
                >
                  <span>←</span>
                  Back to Login
                </Link>
              </div>

              {/* Small Security Note */}

              <div
                className="
                  mt-6
                  flex
                  items-center
                  justify-center
                  gap-2
                  text-center
                  text-xs
                  text-[#888]
                "
              >
                <ShieldCheck
                  size={15}
                  strokeWidth={1.7}
                />

                <span>
                  Your account information is secure
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BENEFITS STRIP
      ====================================================== */}

      <section
        className="
          border-y
          border-[#e8e8e8]
          bg-[#f7f7f7]
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-[1440px]
            grid-cols-2
            gap-y-6
            px-4
            py-7
            sm:px-6
            lg:grid-cols-4
            lg:gap-0
            lg:px-8
          "
        >
          <StoreBenefit
            icon={
              <ShieldCheck
                size={28}
                strokeWidth={1.5}
              />
            }
            title="SECURE ACCOUNT"
            description="Your information is protected"
          />

          <StoreBenefit
            icon={
              <Mail
                size={28}
                strokeWidth={1.5}
              />
            }
            title="EASY RECOVERY"
            description="Reset your password easily"
          />

          <StoreBenefit
            icon={
              <LockKeyhole
                size={28}
                strokeWidth={1.5}
              />
            }
            title="PRIVATE & SAFE"
            description="Secure account access"
          />

          <StoreBenefit
            icon={
              <UserRound
                size={28}
                strokeWidth={1.5}
              />
            }
            title="ACCOUNT SUPPORT"
            description="We're here to help"
          />
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   RECOVERY BENEFIT
========================================================= */

function RecoveryBenefit({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div
        className="
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-white
          text-[#000000]
          shadow-[0_5px_20px_rgba(0,0,0,0.08)]
        "
      >
        {icon}
      </div>

      <div>
        <p className="text-sm font-bold text-[#222]">
          {title}
        </p>

        <p
          className="
            mt-1
            max-w-[280px]
            text-xs
            leading-5
            text-[#666]
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   STORE BENEFIT
========================================================= */

function StoreBenefit({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        flex
        items-center
        justify-center
        gap-3
        px-3
        lg:border-r
        lg:border-[#dedede]
        lg:last:border-r-0
      "
    >
      <div className="shrink-0 text-[#000000]">
        {icon}
      </div>

      <div>
        <p
          className="
            text-[11px]
            font-bold
            text-[#222]
            sm:text-xs
          "
        >
          {title}
        </p>

        <p
          className="
            mt-0.5
            text-[11px]
            text-[#555]
            sm:text-xs
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}