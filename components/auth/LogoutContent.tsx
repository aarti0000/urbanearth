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
    <main className="min-h-[calc(100vh-110px)] bg-[#f7f7f7] flex items-center justify-center px-5 py-10">
      <div className="w-full max-w-md rounded-2xl bg-white px-8 py-12 text-center md:px-12">

        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#000000]">
          Urban Earth
        </p>

        <h1 className="mt-5 font-serif text-3xl text-[#000000]">
          Sign out?
        </h1>

        <p className="mt-4 text-sm leading-6 text-[#000000]">
          Are you sure you want to sign out of your Urban Earth account?
        </p>

        <div className="mt-8 space-y-3">
          <button
            type="button"
            onClick={handleLogout}
            disabled={loading}
            className="w-full rounded-lg bg-[#000000] py-3.5 text-sm font-medium text-white transition hover:bg-[#000000] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Signing out..." : "Yes, sign me out"}
          </button>

          <Link
            href="/profile"
            className="block w-full rounded-lg border border-[#e5e5e5] bg-white py-3.5 text-sm font-medium text-[#000000] transition hover:bg-[#f7f7f7]"
          >
            Cancel
          </Link>
        </div>

      </div>
    </main>
  );
}