"use client";

import products from "@/data/products.json";

const categories = ["All", ...new Set(products.map((product) => product.category))];

type CategoryFilterProps = {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

export default function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`rounded-full border px-5 py-2.5 text-sm transition ${
              selectedCategory === category
                ? "border-neutral-900 bg-black text-white"
                : "border-neutral-300 bg-white text-black hover:border-neutral-900"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}
