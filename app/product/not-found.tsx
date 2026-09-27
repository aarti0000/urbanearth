import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-50 px-6">
      <div className="text-center">

        <div className="text-6xl">🔍</div>

        <h1 className="mt-6 text-4xl font-serif text-black">
          Page Not Found
        </h1>

        <p className="mt-4 text-black">
          Sorry, we couldn&apos;t find what you&apos;re looking for.
        </p>

        <Link
          href="/product"
          className="mt-8 inline-block rounded-full bg-black px-6 py-3 text-sm text-white hover:bg-black"
        >
          View All Products
        </Link>

      </div>
    </main>
  );
}
