"use client";

export default function ErrorPage({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-50">

      <div className="text-center">

        <h1 className="text-4xl font-serif text-black">
          Something went wrong 😢
        </h1>

        <p className="mt-4 text-black">
          We couldn&apos;t load this page.
        </p>

        <button
          onClick={() => reset()}
          className="mt-6 rounded-full bg-black px-6 py-3 text-white"
        >
          Try Again
        </button>

      </div>

    </main>
  );
}
