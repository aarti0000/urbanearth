import products from "@/data/products.json";
import ProductCard2 from "./ProductCard2";

type ProductGridProps = {
  selectedCategory: string;
};

export default function ProductGrid({
  selectedCategory,
}: ProductGridProps) {
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <section className="mx-auto max-w-[1440px] px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
      <div className="mb-7 flex items-center justify-between border-b border-[#dfe5ec] pb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#063f82]">
          {selectedCategory === "All" ? "All products" : selectedCategory}
        </p>
        <p className="text-sm text-[#718096]">
          {filteredProducts.length} {filteredProducts.length === 1 ? "item" : "items"}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-3 gap-y-7 sm:gap-x-5 sm:gap-y-9 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-5">
        {filteredProducts.map((product) => (
          <ProductCard2
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}
