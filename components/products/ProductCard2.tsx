import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  description?: string;
};

type ProductCardProps = { product: Product };

export default function ProductCard2({ product }: ProductCardProps) {
  return (
    <article className="group min-w-0 overflow-hidden rounded-lg border border-[#dfe5ec] bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ff8a3d] hover:shadow-[0_12px_28px_rgba(6,63,130,0.10)]">
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/4.6] w-full overflow-hidden bg-[#f1f3f4]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <span className="absolute left-2 top-2 rounded bg-white/95 px-2 py-1 text-[8px] font-bold uppercase tracking-[0.14em] text-[#063f82] shadow-sm backdrop-blur-sm sm:left-3 sm:top-3">
            {product.category}
          </span>
        </div>

        <div className="p-3 sm:p-4">
          <div className="mb-1.5 flex items-center gap-1 text-[10px] text-[#6f7f91] sm:text-[11px]">
            <Star size={11} className="fill-[#ff6600] text-[#ff6600]" />
            <span className="font-semibold text-[#36485b]">{product.rating}.0</span>
            <span>rating</span>
          </div>

          <h2 className="line-clamp-1 text-sm font-semibold tracking-[-0.015em] text-[#202020] transition-colors duration-300 group-hover:text-[#063f82] sm:text-[15px]">
            {product.name}
          </h2>

          <div className="mt-3 flex items-center justify-between gap-2 border-t border-[#edf0f3] pt-3">
            <p className="text-xs font-bold tracking-[-0.01em] text-[#063f82] sm:text-sm">
              Rs. {product.price.toLocaleString()}
            </p>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#fff2e9] text-[#ff6600] transition-colors group-hover:bg-[#ff6600] group-hover:text-white sm:h-8 sm:w-8">
              <ArrowUpRight size={15} strokeWidth={1.8} />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
