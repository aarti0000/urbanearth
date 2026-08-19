import Link from "next/link";
import Image from "next/image";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  description?: string;
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard2({ product }: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">

      {/* Product image */}
      <Link href={`/product/${product.id}`}>
        <div className="relative h-72 w-full overflow-hidden bg-stone-100">

          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Category badge */}
          <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-stone-700 backdrop-blur-sm">
            {product.category}
          </div>
        </div>

        {/* Product information */}
        <div className="p-5">

          <h2 className="font-serif text-xl text-stone-900 transition-colors duration-300 group-hover:text-stone-600">
            {product.name}
          </h2>

          {/* Rating */}
          <div className="mt-2 flex items-center gap-2">
            <span className="text-sm tracking-wide text-amber-500">
              {"★".repeat(product.rating)}
            </span>

            <span className="text-xs text-stone-400">
              ({product.rating})
            </span>
          </div>

          {/* Price */}
          <p className="mt-3 text-lg font-semibold text-stone-900">
            Rs. {product.price.toLocaleString()}
          </p>

        </div>
      </Link>
    </div>
  );
}
