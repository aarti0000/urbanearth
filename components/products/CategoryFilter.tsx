"use client";

const categories = [
  "All",
  "Vases",
  "Lighting",
  "Wall Decor",
  "Decor",
];

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
                ? "border-stone-900 bg-stone-900 text-white"
                : "border-stone-300 bg-white text-stone-700 hover:border-stone-900"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}