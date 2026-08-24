"use client";

export default function ErrorPage({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-50">

      <div className="text-center">

        <h1 className="text-4xl font-serif text-stone-900">
          Something went wrong 😢
        </h1>

        <p className="mt-4 text-stone-500">
          We couldn&apos;t load this page.
        </p>

        <button
          onClick={() => reset()}
          className="mt-6 rounded-full bg-stone-900 px-6 py-3 text-white"
        >
          Try Again
        </button>

      </div>

    </main>
  );
}
