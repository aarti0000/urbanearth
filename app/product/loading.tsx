export default function Loading() {
  return (
    <main className="min-h-screen bg-neutral-50 px-6 py-16">
      <div className="mx-auto max-w-7xl">

        {/* Heading Skeleton */}
        <div className="mb-12 text-center">

          <div className="mx-auto h-4 w-48 animate-pulse rounded bg-neutral-200" />

          <div className="mx-auto mt-5 h-10 w-80 animate-pulse rounded bg-neutral-200" />

          <div className="mx-auto mt-4 h-4 w-96 max-w-full animate-pulse rounded bg-neutral-200" />

        </div>

        {/* Category Skeleton */}
        <div className="mb-10 flex justify-center gap-3">

          <div className="h-10 w-24 animate-pulse rounded-full bg-neutral-200" />

          <div className="h-10 w-24 animate-pulse rounded-full bg-neutral-200" />

          <div className="h-10 w-24 animate-pulse rounded-full bg-neutral-200" />

          <div className="h-10 w-28 animate-pulse rounded-full bg-neutral-200" />

        </div>

        {/* Product Skeletons */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {Array.from({ length: 8 }).map((_, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-2xl bg-white shadow-sm"
            >

              {/* Image */}
              <div className="aspect-[4/3] animate-pulse bg-neutral-200" />

              {/* Product information */}
              <div className="space-y-4 p-5">

                {/* Name */}
                <div className="h-5 w-3/4 animate-pulse rounded bg-neutral-200" />

                {/* Rating */}
                <div className="h-4 w-24 animate-pulse rounded bg-neutral-200" />

                {/* Price */}
                <div className="h-5 w-28 animate-pulse rounded bg-neutral-200" />

                {/* Button */}
                <div className="h-10 w-full animate-pulse rounded-full bg-neutral-200" />

              </div>

            </div>

          ))}

        </div>

      </div>
    </main>
  );
}
