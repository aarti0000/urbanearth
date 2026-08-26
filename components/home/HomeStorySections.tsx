import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CustomerReviews from "@/components/home/CustomerReviews";

export default function HomeStorySections() {
  return (
    <>
      <section className="mx-auto max-w-[1440px] px-5 pb-9 sm:px-8 lg:px-10">
        <div className="grid overflow-hidden rounded-lg border border-[#dbe4ee] bg-white shadow-[0_12px_34px_rgba(6,63,130,.08)] lg:grid-cols-2">
          <div className="relative min-h-[300px] sm:min-h-[390px] lg:min-h-[430px]">
            <Image
              src="/images/why-laminate-flooring.jpg"
              alt="Warm wood-look laminate flooring in a bright kitchen"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center bg-[#f2f3f5] p-7 sm:p-10 lg:p-12">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[.08em] text-[#ff6600]">The Urban Earth Guide</p>
              <h2 className="mt-2 text-3xl font-extrabold leading-[1.05] tracking-[-.035em] text-[#063f82] sm:text-4xl">Why Choose Laminate Flooring?</h2>
              <div className="mt-4 max-w-xl text-sm leading-6 text-[#4f5965]">
                <p>Laminate flooring brings the warmth and natural character of timber into your space through beautifully detailed grains and carefully selected finishes. It creates an inviting foundation that works effortlessly across kitchens, living rooms, bedrooms and professional interiors.</p>
                <p className="mt-4">Designed for the way modern homes are lived in, laminate offers dependable durability while remaining simple to clean and maintain. It is a considered choice for anyone who wants lasting style, everyday comfort and premium quality at a practical value.</p>
              </div>

              <Link href="/products?category=Laminate%20Flooring" className="mt-6 inline-flex w-fit items-center gap-2 rounded bg-[#063f82] px-5 py-3 text-[10px] font-bold uppercase text-white transition hover:bg-[#ff6600]">Explore laminate flooring <ArrowRight size={14} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 pb-9 sm:px-8 lg:px-10">
        <div className="grid overflow-hidden rounded-lg bg-[#f2f3f5] lg:grid-cols-[.78fr_1.22fr]">
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <p className="text-[10px] font-extrabold uppercase tracking-[.08em] text-[#ff6600]">About Urban Earth</p>
            <h2 className="mt-2 text-3xl font-extrabold leading-[1.05] tracking-[-.035em] text-[#063f82] sm:text-4xl">Transforming Spaces Across Nepal</h2>
            <p className="mt-4 text-sm leading-6 text-[#4f5965]">Urban Earth brings premium flooring and interior surface solutions to homes, offices, and commercial spaces across Nepal. From carpets and laminate flooring to SPC, parquet, rugs and more, we combine quality products with expert installation.</p>
            <Link href="/about" className="mt-6 inline-flex w-fit items-center gap-2 rounded bg-[#063f82] px-5 py-3 text-[10px] font-bold uppercase text-white transition hover:bg-[#ff6600]">Learn more about us <ArrowRight size={14} /></Link>
          </div>
          <div className="relative min-h-[300px] sm:min-h-[380px]"><Image src="/images/about-us.jpg" alt="Urban Earth premium interior showroom" fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" /></div>
        </div>
      </section>

      <CustomerReviews />

      <section className="mx-auto max-w-[1440px] px-5 pb-10 sm:px-8 lg:px-10">
        <div className="relative isolate overflow-hidden rounded-xl bg-[#052c5f] px-7 py-9 text-white sm:px-10">
          <Image src="/images/banner21.jpg" alt="" fill sizes="100vw" className="-z-10 object-cover opacity-30" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#052c5f] via-[#052c5f]/90 to-[#052c5f]/35" />
          <h2 className="text-2xl font-extrabold tracking-[-.03em] sm:text-3xl">Ready to Transform Your Space?</h2>
          <p className="mt-1 text-sm text-white/80">Explore our premium collection or visit our showroom.</p>
          <div className="mt-5 flex flex-wrap gap-3"><Link href="/products" className="inline-flex items-center gap-2 rounded bg-[#ff6600] px-5 py-3 text-[10px] font-bold uppercase hover:bg-[#e65c00]">Shop now <ArrowRight size={14} /></Link><Link href="/contact" className="rounded border border-white/70 px-5 py-3 text-[10px] font-bold uppercase hover:bg-white hover:text-[#063f82]">Visit showroom</Link></div>
        </div>
      </section>
    </>
  );
}
