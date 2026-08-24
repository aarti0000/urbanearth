import Link from "next/link";
import { BedDouble, DoorOpen, Grid2X2, Layers3, Leaf, PanelsTopLeft, RectangleHorizontal, Rows3 } from "lucide-react";

const categories = [
  ["Carpets", "/products?category=Carpets", Grid2X2], ["Laminate Flooring", "/products?category=Laminate%20Flooring", Rows3],
  ["Parquet", "/products?category=Parquet", PanelsTopLeft], ["SPC Flooring", "/products?category=SPC%20Flooring", Layers3],
  ["Rugs", "/products?category=Rugs", RectangleHorizontal], ["Doormats", "/products?category=Doormats", DoorOpen],
  ["Mattresses", "/products?category=Mattresses", BedDouble], ["Artificial Grass", "/products?category=Artificial%20Grass", Leaf],
] as const;

export default function Categories() {
  return (
    <section id="categories" className="border-b border-[#e6ebf1] bg-white py-6 sm:py-8">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <h2 className="sr-only">Shop by category</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {categories.map(([name, href, Icon]) => (
            <Link key={name} href={href} className="group flex min-h-[132px] flex-col items-center justify-center rounded-lg border border-[#e3e8ee] px-2 py-4 text-center transition hover:-translate-y-0.5 hover:border-[#ff6600] hover:shadow-[0_10px_25px_rgba(6,63,130,.08)]">
              <Icon size={40} strokeWidth={1.45} className="text-[#063f82] transition group-hover:text-[#ff6600]" />
              <span className="mt-3 min-h-8 text-[11px] font-extrabold uppercase leading-4 text-[#062f64]">{name}</span>
              <span className="mt-1 text-[9px] font-medium text-[#7c8794]">Explore collection <b className="text-[#ff6600]">→</b></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
