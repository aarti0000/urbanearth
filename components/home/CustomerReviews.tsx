"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useRef } from "react";

const reviews = [
  ["Excellent quality flooring and professional installation. Highly recommended!", "Sabin K."],
  ["Wide variety of products. Found the perfect carpet for our living room.", "Anusha M."],
  ["Very good customer service and on-time delivery across Nepal.", "Rajan P."],
  ["Urban Earth made our office look brand new. Amazing experience!", "Bishal T."],
  ["The team helped us choose the right flooring and the finish looks beautiful.", "Prakriti S."],
];

export default function CustomerReviews() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const move = (direction: number) => {
    const slider = sliderRef.current;
    if (!slider) return;
    slider.scrollBy({ left: direction * slider.clientWidth, behavior: "smooth" });
  };

  return (
    <section className="mx-auto max-w-[1440px] px-5 pb-7 sm:px-8 lg:px-10">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="text-lg font-extrabold uppercase text-[#063f82] sm:text-xl">What our customers say</h2>
        <div className="flex items-center gap-2">
          <Link href="/contact" className="mr-2 hidden text-[10px] font-bold text-[#ff6600] sm:block">View all reviews →</Link>
          <button type="button" onClick={() => move(-1)} aria-label="Previous reviews" className="grid h-8 w-8 place-items-center rounded-full border border-[#dbe2e9] bg-white text-[#063f82] transition hover:border-[#ff6600] hover:text-[#ff6600]"><ChevronLeft size={16} /></button>
          <button type="button" onClick={() => move(1)} aria-label="Next reviews" className="grid h-8 w-8 place-items-center rounded-full border border-[#dbe2e9] bg-white text-[#063f82] transition hover:border-[#ff6600] hover:text-[#ff6600]"><ChevronRight size={16} /></button>
        </div>
      </div>

      <div ref={sliderRef} className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {reviews.map(([quote, author]) => (
          <figure key={author} className="w-full flex-none snap-start rounded-md border border-[#e0e5ea] p-4 shadow-[0_4px_12px_rgba(6,63,130,.035)] sm:w-[calc((100%-0.75rem)/2)] lg:w-[calc((100%-1.5rem)/3)]">
            <div className="flex text-[#ff6600]">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={11} fill="currentColor" />)}</div>
            <blockquote className="mt-2.5 text-[11px] leading-[18px] text-[#424b55]">“{quote}”</blockquote>
            <figcaption className="mt-3 text-[11px] font-bold text-[#1f2b37]">— {author}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
