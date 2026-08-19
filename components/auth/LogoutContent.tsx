"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LogoutContent() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);

    // Later, connect your real logout logic here:
    // await signOut();
    // clear cookie/session
    // call logout API

    setTimeout(() => {
      router.push("/login");
      router.refresh();
    }, 500);
  };

  return (
    <main className="min-h-[calc(100vh-110px)] bg-[#faf7f2] flex items-center justify-center px-5 py-10">
      <div className="w-full max-w-md rounded-2xl bg-white px-8 py-12 text-center md:px-12">

        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8b7355]">
          HomeHaven
        </p>

        <h1 className="mt-5 font-serif text-3xl text-[#2f2a26]">
          Sign out?
        </h1>

        <p className="mt-4 text-sm leading-6 text-[#81766d]">
          Are you sure you want to sign out of your HomeHaven account?
        </p>

        <div className="mt-8 space-y-3">
          <button
            type="button"
            onClick={handleLogout}
            disabled={loading}
            className="w-full rounded-lg bg-[#2f2a26] py-3.5 text-sm font-medium text-white transition hover:bg-[#8b7355] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Signing out..." : "Yes, sign me out"}
          </button>

          <Link
            href="/profile"
            className="block w-full rounded-lg border border-[#ded6ce] bg-white py-3.5 text-sm font-medium text-[#403832] transition hover:bg-[#faf7f2]"
          >
            Cancel
          </Link>
        </div>

      </div>
    </main>
  );
}