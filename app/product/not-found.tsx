import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-50 px-6">
      <div className="text-center">

        <div className="text-6xl">🔍</div>

        <h1 className="mt-6 text-4xl font-serif text-stone-900">
          Page Not Found
        </h1>

        <p className="mt-4 text-stone-500">
          Sorry, we couldn't find what you're looking for.
        </p>

        <Link
          href="/product"
          className="mt-8 inline-block rounded-full bg-stone-900 px-6 py-3 text-sm text-white hover:bg-stone-700"
        >
          View All Products
        </Link>

      </div>
    </main>
  );
}