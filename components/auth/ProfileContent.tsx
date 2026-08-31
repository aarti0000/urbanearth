"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import {
  Bell,
  CalendarDays,
  CreditCard,
  Crown,
  Heart,
  KeyRound,
  LogOut,
  Mail,
  MapPin,
  Package,
  Phone,
  UserRound,
} from "lucide-react";

export default function ProfileContent() {
  const pathname = usePathname();

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  /*
   * Temporary user data.
   * Later replace this with data from your authentication/session.
   */
  const user = {
    name: "John Doe",
    email: "john@example.com",
    phone: "+977 9841234567",
    birthDate: "1998-05-12",
    address: "Kathmandu, Nepal",
    gender: "male",
    bio: "I love minimal interiors and natural materials.",
    memberSince: "15 March 2024",
    totalOrders: 8,
    wishlistItems: 24,
  };

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
          clearProps: "transform",
        }
      );
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-[#f8f9fa]"
    >
      <div
        ref={contentRef}
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-4
          py-8
          opacity-100

          sm:px-6
          sm:py-10

          lg:px-8
          lg:py-12
        "
      >
        {/* =====================================================
            MAIN LAYOUT
        ====================================================== */}

        <div
          className="
            grid
            gap-6

            lg:grid-cols-[260px_1fr]

            xl:grid-cols-[280px_1fr]
          "
        >
          {/* ===================================================
              LEFT SIDEBAR
          ==================================================== */}

          <aside
            className="
              h-fit
              overflow-hidden
              rounded-2xl
              border
              border-[#e8e8e8]
              bg-white
              shadow-[0_8px_30px_rgba(0,0,0,0.04)]
            "
          >
            {/* User */}

            <div
              className="
                border-b
                border-[#eeeeee]
                px-5
                py-6
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#eef2f7]
                    text-[#063f82]
                  "
                >
                  <UserRound
                    size={30}
                    strokeWidth={1.6}
                  />
                </div>

                <div className="min-w-0">
                  <h2
                    className="
                      truncate
                      text-base
                      font-bold
                      text-[#171717]
                    "
                  >
                    Hello, {user.name.split(" ")[0]}
                  </h2>

                  <p
                    className="
                      mt-1
                      truncate
                      text-xs
                      text-[#777]
                    "
                  >
                    {user.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}

            <nav className="p-3">
              <SidebarLink
                href="/profile"
                label="My Profile"
                icon={<UserRound size={20} />}
                active={pathname === "/profile"}
              />

              <SidebarLink
                href="/orders"
                label="My Orders"
                icon={<Package size={20} />}
                active={pathname.startsWith("/orders")}
              />

              <SidebarLink
                href="/addresses"
                label="My Addresses"
                icon={<MapPin size={20} />}
                active={pathname.startsWith("/addresses")}
              />

              <SidebarLink
                href="/wishlist"
                label="Wishlist"
                icon={<Heart size={20} />}
                active={pathname.startsWith("/wishlist")}
              />

              <SidebarLink
                href="/payment-methods"
                label="Payment Methods"
                icon={<CreditCard size={20} />}
                active={pathname.startsWith(
                  "/payment-methods"
                )}
              />

              <SidebarLink
                href="/notifications"
                label="Notifications"
                icon={<Bell size={20} />}
                active={pathname.startsWith(
                  "/notifications"
                )}
              />

              <SidebarLink
                href="/change-password"
                label="Change Password"
                icon={<KeyRound size={20} />}
                active={pathname.startsWith(
                  "/change-password"
                )}
              />

              <div
                className="
                  my-3
                  h-px
                  bg-[#eeeeee]
                "
              />

              <button
                type="button"
                onClick={() => {
                  /*
                   * Connect your real logout function later.
                   */
                  console.log("Sign out");
                }}
                className="
                  flex
                  w-full
                  items-center
                  gap-3
                  rounded-xl
                  px-4
                  py-3
                  text-left
                  text-sm
                  font-medium
                  text-[#333]
                  transition-colors

                  hover:bg-[#fff3eb]
                  hover:text-[#ff6600]
                "
              >
                <LogOut
                  size={20}
                  strokeWidth={1.7}
                />

                Sign Out
              </button>
            </nav>
          </aside>

          {/* ===================================================
              RIGHT SIDE
          ==================================================== */}

          <div className="min-w-0">
            {/* ===============================================
                PROFILE HEADER
            ================================================ */}

            <section
              className="
                relative
                mb-6
                overflow-hidden
                rounded-2xl
                border
                border-[#e8e8e8]
                bg-white
                px-6
                py-8

                sm:px-8

                md:min-h-[160px]

                lg:px-10
              "
            >
              {/* Background image */}

              <div
                className="
                  absolute
                  right-0
                  top-0
                  hidden
                  h-full
                  w-[45%]

                  md:block
                "
              >
                <Image
                  src="/images/login-room.jpg"
                  alt="Urban Earth interior"
                  fill
                  sizes="40vw"
                  className="object-cover object-center"
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-white
                    via-white/65
                    to-white/10
                  "
                />
              </div>

              <div className="relative z-10">
                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-[#ff6600]
                  "
                >
                  My Account
                </p>

                <h1
                  className="
                    mt-2
                    text-3xl
                    font-bold
                    tracking-[-0.03em]
                    text-[#152033]

                    sm:text-4xl
                  "
                >
                  My Profile
                </h1>

                <p
                  className="
                    mt-3
                    max-w-xl
                    text-sm
                    leading-6
                    text-[#555]
                  "
                >
                  Manage your personal information and
                  account details.
                </p>
              </div>
            </section>

            {/* ===============================================
                PROFILE INFORMATION CARD
            ================================================ */}

            <section
              className="
                overflow-hidden
                rounded-2xl
                border
                border-[#e8e8e8]
                bg-white
                shadow-[0_8px_30px_rgba(0,0,0,0.03)]
              "
            >
              <div
                className="
                  grid

                  xl:grid-cols-[1fr_320px]
                "
              >
                {/* ===========================================
                    FORM
                ============================================ */}

                <div
                  className="
                    p-5

                    sm:p-7

                    lg:p-8

                    xl:p-9
                  "
                >
                  <div className="mb-7">
                    <h2
                      className="
                        text-xl
                        font-bold
                        text-[#152033]

                        sm:text-2xl
                      "
                    >
                      Personal Information
                    </h2>

                    <p
                      className="
                        mt-2
                        text-sm
                        text-[#777]
                      "
                    >
                      Update your personal details below.
                    </p>
                  </div>

                  <form
                    className="space-y-5"
                    onSubmit={(event) => {
                      event.preventDefault();

                      /*
                       * Connect profile update API here.
                       */
                    }}
                  >
                    {/* =====================================
                        NAME + EMAIL
                    ====================================== */}

                    <div
                      className="
                        grid
                        gap-5

                        md:grid-cols-2
                      "
                    >
                      {/* Full Name */}

                      <ProfileInput
                        label="Full Name"
                        id="name"
                        name="name"
                        type="text"
                        defaultValue={user.name}
                        icon={
                          <UserRound
                            size={18}
                            strokeWidth={1.7}
                          />
                        }
                      />

                      {/* Email */}

                      <ProfileInput
                        label="Email Address"
                        id="email"
                        name="email"
                        type="email"
                        defaultValue={user.email}
                        icon={
                          <Mail
                            size={18}
                            strokeWidth={1.7}
                          />
                        }
                      />
                    </div>

                    {/* =====================================
                        PHONE + DATE
                    ====================================== */}

                    <div
                      className="
                        grid
                        gap-5

                        md:grid-cols-2
                      "
                    >
                      <ProfileInput
                        label="Phone Number"
                        id="phone"
                        name="phone"
                        type="tel"
                        defaultValue={user.phone}
                        icon={
                          <Phone
                            size={18}
                            strokeWidth={1.7}
                          />
                        }
                      />

                      <ProfileInput
                        label="Date of Birth"
                        id="birthDate"
                        name="birthDate"
                        type="date"
                        defaultValue={user.birthDate}
                        icon={
                          <CalendarDays
                            size={18}
                            strokeWidth={1.7}
                          />
                        }
                      />
                    </div>

                    {/* =====================================
                        ADDRESS
                    ====================================== */}

                    <ProfileInput
                      label="Address"
                      id="address"
                      name="address"
                      type="text"
                      defaultValue={user.address}
                      icon={
                        <MapPin
                          size={18}
                          strokeWidth={1.7}
                        />
                      }
                    />

                    {/* =====================================
                        GENDER
                    ====================================== */}

                    <div>
                      <label
                        className="
                          mb-2
                          block
                          text-sm
                          font-semibold
                          text-[#222]
                        "
                      >
                        Gender
                      </label>

                      <div
                        className="
                          grid
                          gap-3

                          sm:grid-cols-3
                        "
                      >
                        <GenderOption
                          value="male"
                          label="Male"
                          defaultChecked={
                            user.gender === "male"
                          }
                        />

                        <GenderOption
                          value="female"
                          label="Female"
                          defaultChecked={
                            user.gender === "female"
                          }
                        />

                        <GenderOption
                          value="other"
                          label="Other"
                          defaultChecked={
                            user.gender === "other"
                          }
                        />
                      </div>
                    </div>

                    {/* =====================================
                        BIO
                    ====================================== */}

                    <div>
                      <label
                        htmlFor="bio"
                        className="
                          mb-2
                          block
                          text-sm
                          font-semibold
                          text-[#222]
                        "
                      >
                        Bio{" "}
                        <span
                          className="
                            font-normal
                            text-[#888]
                          "
                        >
                          (Optional)
                        </span>
                      </label>

                      <textarea
                        id="bio"
                        name="bio"
                        rows={4}
                        defaultValue={user.bio}
                        placeholder="Tell us a little about yourself"
                        className="
                          w-full
                          resize-none
                          rounded-lg
                          border
                          border-[#dedede]
                          bg-white
                          px-4
                          py-3.5
                          text-sm
                          leading-6
                          text-[#222]
                          outline-none
                          transition-all

                          placeholder:text-[#aaa]

                          focus:border-[#063f82]
                          focus:ring-2
                          focus:ring-[#063f82]/10
                        "
                      />
                    </div>

                    {/* =====================================
                        BUTTON
                    ====================================== */}

                    <div
                      className="
                        border-t
                        border-[#eeeeee]
                        pt-6
                      "
                    >
                      <button
                        type="submit"
                        className="
                          rounded-lg
                          bg-[#ff6600]
                          px-7
                          py-3.5
                          text-sm
                          font-bold
                          text-white
                          transition-all
                          duration-200

                          hover:-translate-y-0.5
                          hover:bg-[#e85d00]
                          hover:shadow-lg

                          active:translate-y-0
                        "
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>

                {/* ===========================================
                    ACCOUNT SUMMARY
                ============================================ */}

                <aside
                  className="
                    border-t
                    border-[#eeeeee]
                    bg-[#fcfcfc]
                    p-5

                    sm:p-7

                    xl:border-l
                    xl:border-t-0
                    xl:p-8
                  "
                >
                  <h2
                    className="
                      text-lg
                      font-bold
                      text-[#152033]
                    "
                  >
                    Account Summary
                  </h2>

                  <div
                    className="
                      mt-6
                      space-y-5
                    "
                  >
                    <SummaryItem
                      icon={
                        <CalendarDays
                          size={19}
                          strokeWidth={1.7}
                        />
                      }
                      label="Member Since"
                      value={user.memberSince}
                    />

                    <SummaryItem
                      icon={
                        <Package
                          size={19}
                          strokeWidth={1.7}
                        />
                      }
                      label="Total Orders"
                      value={`${user.totalOrders} Orders`}
                    />

                    <SummaryItem
                      icon={
                        <Heart
                          size={19}
                          strokeWidth={1.7}
                        />
                      }
                      label="Wishlist Items"
                      value={`${user.wishlistItems} Items`}
                    />

                    <SummaryItem
                      icon={
                        <MapPin
                          size={19}
                          strokeWidth={1.7}
                        />
                      }
                      label="Default Address"
                      value={user.address}
                    />
                  </div>

                  {/* =========================================
                      MEMBER CARD
                  ========================================== */}

                  <div
                    className="
                      mt-8
                      rounded-xl
                      bg-[#fff3eb]
                      p-5
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        gap-3
                      "
                    >
                      <Crown
                        size={24}
                        strokeWidth={1.7}
                        className="text-[#ff6600]"
                      />

                      <p
                        className="
                          font-bold
                          text-[#222]
                        "
                      >
                        Urban Earth Member
                      </p>
                    </div>

                    <p
                      className="
                        mt-3
                        text-sm
                        leading-6
                        text-[#666]
                      "
                    >
                      You are a valued member. Keep
                      shopping to unlock more rewards
                      and benefits.
                    </p>

                    <Link
                      href="/rewards"
                      className="
                        mt-5
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        font-bold
                        text-[#ff6600]

                        hover:underline
                      "
                    >
                      View Benefits
                      <span>→</span>
                    </Link>
                  </div>
                </aside>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

/* =========================================================
   SIDEBAR LINK
========================================================= */

function SidebarLink({
  href,
  label,
  icon,
  active,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`
        flex
        items-center
        gap-3
        rounded-xl
        px-4
        py-3
        text-sm
        font-medium
        transition-colors

        ${
          active
            ? "bg-[#fff3eb] text-[#ff6600]"
            : "text-[#263247] hover:bg-[#f5f7fa] hover:text-[#063f82]"
        }
      `}
    >
      <span className="shrink-0">
        {icon}
      </span>

      <span>{label}</span>
    </Link>
  );
}

/* =========================================================
   PROFILE INPUT
========================================================= */

function ProfileInput({
  label,
  id,
  name,
  type,
  defaultValue,
  icon,
}: {
  label: string;
  id: string;
  name: string;
  type: string;
  defaultValue?: string;
  icon: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="
          mb-2
          block
          text-sm
          font-semibold
          text-[#222]
        "
      >
        {label}
      </label>

      <div className="relative">
        <div
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-[#8b8b8b]
          "
        >
          {icon}
        </div>

        <input
          id={id}
          name={name}
          type={type}
          defaultValue={defaultValue}
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

            focus:border-[#063f82]
            focus:ring-2
            focus:ring-[#063f82]/10
          "
        />
      </div>
    </div>
  );
}

/* =========================================================
   GENDER OPTION
========================================================= */

function GenderOption({
  value,
  label,
  defaultChecked,
}: {
  value: string;
  label: string;
  defaultChecked?: boolean;
}) {
  return (
    <label
      className="
        flex
        cursor-pointer
        items-center
        gap-3
        rounded-lg
        border
        border-[#dedede]
        px-4
        py-3
        text-sm
        font-medium
        text-[#333]
        transition-colors

        hover:border-[#ff6600]
        hover:bg-[#fffaf7]
      "
    >
      <input
        type="radio"
        name="gender"
        value={value}
        defaultChecked={defaultChecked}
        className="
          h-4
          w-4
          accent-[#ff6600]
        "
      />

      {label}
    </label>
  );
}

/* =========================================================
   SUMMARY ITEM
========================================================= */

function SummaryItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div
      className="
        flex
        items-start
        gap-3
      "
    >
      <div
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#eef2f7]
          text-[#063f82]
        "
      >
        {icon}
      </div>

      <div>
        <p
          className="
            text-sm
            font-bold
            text-[#222]
          "
        >
          {label}
        </p>

        <p
          className="
            mt-1
            text-sm
            text-[#667085]
          "
        >
          {value}
        </p>
      </div>
    </div>
  );
}