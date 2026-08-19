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
    <section className="mx-auto max-w-7xl px-6">
      <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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