import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import products from "@/data/products.json";

export default function BestSellerSpotlight() {
  const product = products.find((item) => item.id === 21);

  if (!product) return null;

  return (
    <section className="bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1360px] border border-[#ded7cc] bg-[#f4f0e9] p-3 sm:p-5 lg:p-6">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative min-h-[330px] overflow-hidden sm:min-h-[450px] lg:min-h-[570px]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

          <div className="absolute left-5 top-5 border border-white/50 bg-black/20 px-4 py-2.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md sm:left-7 sm:top-7">
            The signature collection
          </div>

          <p className="absolute bottom-5 left-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80 sm:bottom-7 sm:left-7">
            Natural finish · Selected by Urban Earth
          </p>
        </div>

        <div className="relative flex flex-col justify-center px-5 py-9 text-[#172b3a] sm:px-10 sm:py-12 lg:px-12 xl:px-16">
          <span className="absolute right-5 top-5 text-[10px] font-medium tracking-[0.2em] text-[#9b8d7e] sm:right-8 sm:top-8">
            01 / BEST SELLER
          </span>

          <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#c6531e] before:h-px before:w-8 before:bg-[#ff6600] sm:text-[11px]">
            Customer favourite
          </p>
          <h2 className="mt-5 max-w-md text-3xl font-medium tracking-[-0.045em] sm:text-4xl lg:text-[46px] lg:leading-[1.06]">
            {product.name}
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-[#716b63] sm:text-[15px]">
            A warm, natural oak finish created for busy modern interiors. Its
            durable surface, easy maintenance and timeless grain make it a
            dependable choice for living rooms, bedrooms and commercial spaces.
          </p>

          <div className="mt-7 grid gap-x-5 gap-y-3 border-y border-[#d8d0c5] py-5 text-xs text-[#514c46] min-[480px]:grid-cols-2 sm:text-sm">
            {["Durable everyday finish", "Easy to clean and maintain", "Natural oak appearance", "Suitable for busy spaces"].map((benefit) => (
              <span key={benefit} className="flex items-center gap-2.5">
                <Check size={14} strokeWidth={1.8} className="shrink-0 text-[#c6531e]" />
                {benefit}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-5 min-[480px]:flex-row min-[480px]:items-end min-[480px]:justify-between">
            <div>
              <p className="text-[9px] uppercase tracking-[0.2em] text-[#91887e]">Starting from</p>
              <p className="mt-1.5 text-2xl font-semibold text-[#063f82]">Rs. {product.price.toLocaleString()}</p>
            </div>

            <Link
              href={`/product/${product.id}`}
              className="group inline-flex min-h-12 items-center justify-center gap-4 bg-[#063f82] px-6 text-[10px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#ff6600]"
            >
              View product <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
