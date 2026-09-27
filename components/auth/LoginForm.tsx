"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  PackageCheck,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";

import { signIn } from "next-auth/react";

export default function LoginForm() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

    return () => {
      ctx.revert();
    };
  }, []);

  const handleLogin = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setError("");

    const formData = new FormData(event.currentTarget);

    const email = formData
      .get("email")
      ?.toString()
      .trim();

    const password = formData
      .get("password")
      ?.toString();

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);

      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid email or password.");
        return;
      }

      if (result?.ok) {
        window.location.href = "/";
        return;
      }

      setError("Unable to log in. Please try again.");
    } catch (error) {
      console.error("Login error:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      ref={containerRef}
      className="bg-[#fafafa]"
    >
      {/* =====================================================
          LOGIN SECTION
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
            <Image
              src="/images/login-room.jpg"
              alt="Urban Earth modern interior"
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover object-center"
            />

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
                Welcome Back
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
                Login to Your{" "}
                <span className="text-[#000000]">
                  Urban Earth
                </span>{" "}
                Account
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
                Login to access your profile, track orders,
                save addresses and enjoy a faster checkout
                experience.
              </p>

              <div
                className="
                  mt-10
                  grid
                  max-w-[440px]
                  gap-6
                  sm:mt-12
                "
              >
                <LoginBenefit
                  icon={
                    <ShieldCheck
                      size={23}
                      strokeWidth={1.7}
                    />
                  }
                  title="Secure & Safe"
                  description="Your information is always protected."
                />

                <LoginBenefit
                  icon={
                    <PackageCheck
                      size={23}
                      strokeWidth={1.7}
                    />
                  }
                  title="Track Your Orders"
                  description="View your order history and current status."
                />

                <LoginBenefit
                  icon={
                    <LockKeyhole
                      size={22}
                      strokeWidth={1.7}
                    />
                  }
                  title="Faster Checkout"
                  description="Save your details for a smoother experience."
                />
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT LOGIN FORM
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
                  Login
                </h2>

                <p className="mt-2 text-sm text-[#666]">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/register"
                    className="
                      font-semibold
                      text-[#000000]
                      transition-colors
                      hover:text-[#000000]
                    "
                  >
                    Create Account
                  </Link>
                </p>
              </div>

              <form
                className="mt-8 space-y-5"
                onSubmit={handleLogin}
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
                      required
                      autoComplete="email"
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

                {/* Password */}

                <div>
                  <div
                    className="
                      mb-2
                      flex
                      items-center
                      justify-between
                      gap-3
                    "
                  >
                    <label
                      htmlFor="password"
                      className="
                        text-sm
                        font-semibold
                        text-[#252525]
                      "
                    >
                      Password
                    </label>

                    <Link
                      href="/forgotpassword"
                      className="
                        text-xs
                        font-medium
                        text-[#000000]
                        transition-colors
                        hover:text-[#000000]
                        sm:text-[13px]
                      "
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <div className="relative">
                    <LockKeyhole
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
                      id="password"
                      name="password"
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      required
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      className="
                        h-13
                        w-full
                        rounded-lg
                        border
                        border-[#dedede]
                        bg-white
                        pl-12
                        pr-12
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

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(
                          (previous) => !previous
                        )
                      }
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
                      className="
                        absolute
                        right-4
                        top-1/2
                        -translate-y-1/2
                        text-[#888]
                        transition-colors
                        hover:text-[#000000]
                      "
                    >
                      {showPassword ? (
                        <EyeOff
                          size={19}
                          strokeWidth={1.7}
                        />
                      ) : (
                        <Eye
                          size={19}
                          strokeWidth={1.7}
                        />
                      )}
                    </button>
                  </div>
                </div>

                {/* Error */}

                {error && (
                  <div
                    className="
                      rounded-lg
                      bg-neutral-50
                      px-4
                      py-3
                      text-sm
                      text-black
                    "
                  >
                    {error}
                  </div>
                )}

                {/* Remember Me */}

                <label
                  className="
                    flex
                    cursor-pointer
                    items-center
                    gap-2.5
                    text-sm
                    text-[#444]
                  "
                >
                  <input
                    type="checkbox"
                    name="remember"
                    className="
                      h-4
                      w-4
                      cursor-pointer
                      accent-[#000000]
                    "
                  />

                  Remember me
                </label>

                {/* Login Button */}

                <button
                  type="submit"
                  disabled={loading}
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
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
              </form>

              {/* Divider */}

              <div
                className="
                  my-7
                  flex
                  items-center
                  gap-4
                "
              >
                <div className="h-px flex-1 bg-[#e5e5e5]" />

                <span
                  className="
                    whitespace-nowrap
                    text-xs
                    text-[#999]
                  "
                >
                  or continue with
                </span>

                <div className="h-px flex-1 bg-[#e5e5e5]" />
              </div>

              {/* Google */}

              <button
                type="button"
                onClick={() =>
                  signIn("google", {
                    callbackUrl: "/",
                  })
                }
                className="
                  flex
                  h-12
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-lg
                  border
                  border-[#dedede]
                  bg-white
                  text-sm
                  font-semibold
                  text-[#333]
                  transition-all
                  hover:border-[#bfbfbf]
                  hover:bg-[#fafafa]
                "
              >
                <GoogleIcon />
                Continue with Google
              </button>

              {/* Facebook */}

              <button
                type="button"
                onClick={() =>
                  signIn("facebook", {
                    callbackUrl: "/",
                  })
                }
                className="
                  mt-3
                  flex
                  h-12
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-lg
                  border
                  border-[#dedede]
                  bg-white
                  text-sm
                  font-semibold
                  text-[#333]
                  transition-all
                  hover:border-[#bfbfbf]
                  hover:bg-[#fafafa]
                "
              >
                <FacebookIcon />
                Continue with Facebook
              </button>

              {/* Terms */}

              <p
                className="
                  mt-7
                  text-center
                  text-[11px]
                  leading-5
                  text-[#777]
                  sm:text-xs
                "
              >
                By logging in, you agree to our{" "}
                <Link
                  href="/terms"
                  className="
                    font-medium
                    text-[#000000]
                    hover:underline
                  "
                >
                  Terms &amp; Conditions
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="
                    font-medium
                    text-[#000000]
                    hover:underline
                  "
                >
                  Privacy Policy
                </Link>
                .
              </p>
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
              <Truck
                size={28}
                strokeWidth={1.5}
              />
            }
            title="FREE DELIVERY"
            description="Across Nepal"
          />

          <StoreBenefit
            icon={
              <Wrench
                size={28}
                strokeWidth={1.5}
              />
            }
            title="EXPERT INSTALLATION"
            description="Professional & Reliable"
          />

          <StoreBenefit
            icon={
              <ShieldCheck
                size={28}
                strokeWidth={1.5}
              />
            }
            title="PREMIUM QUALITY"
            description="Built to Last"
          />

          <StoreBenefit
            icon={
              <PackageCheck
                size={28}
                strokeWidth={1.5}
              />
            }
            title="CUSTOMER SATISFACTION"
            description="Our Top Priority"
          />
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   LOGIN BENEFIT
========================================================= */

function LoginBenefit({
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
            max-w-[260px]
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

/* =========================================================
   GOOGLE ICON
========================================================= */

function GoogleIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill="#000000"
        d="M21.6 12.227c0-.709-.064-1.391-.182-2.045H12v3.868h5.382a4.6 4.6 0 0 1-1.995 3.018v2.509h3.232c1.891-1.741 2.981-4.305 2.981-7.35Z"
      />

      <path
        fill="#000000"
        d="M12 22c2.7 0 4.964-.895 6.619-2.423l-3.232-2.509c-.895.6-2.041.955-3.387.955-2.605 0-4.81-1.759-5.6-4.123H3.059v2.591A9.998 9.998 0 0 0 12 22Z"
      />

      <path
        fill="#000000"
        d="M6.4 13.9A6.012 6.012 0 0 1 6.086 12c0-.659.114-1.3.314-1.9V7.509H3.059A9.998 9.998 0 0 0 2 12c0 1.614.386 3.141 1.059 4.491L6.4 13.9Z"
      />

      <path
        fill="#000000"
        d="M12 5.977c1.468 0 2.786.505 3.823 1.495l2.868-2.868C16.959 2.99 14.695 2 12 2a9.998 9.998 0 0 0-8.941 5.509L6.4 10.1c.79-2.364 2.995-4.123 5.6-4.123Z"
      />
    </svg>
  );
}

/* =========================================================
   FACEBOOK ICON
========================================================= */

function FacebookIcon() {
  return (
    <div
      className="
        flex
        h-[19px]
        w-[19px]
        items-center
        justify-center
        rounded-full
        bg-[#000000]
        text-[14px]
        font-bold
        text-white
      "
    >
      f
    </div>
  );
}