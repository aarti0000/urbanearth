"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import CategoryFilter from "@/components/CategoryFilter";
import ProductGrid from "@/components/ProductGrid";

function ProductsContent() {
  const searchParams = useSearchParams();
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");

    setCategory(categoryFromUrl || "All");
  }, [searchParams]);

  return (
    <>
      <CategoryFilter
        selectedCategory={category}
        onCategoryChange={setCategory}
      />

      <ProductGrid selectedCategory={category} />
    </>
  );
}

export default function ProductsSection() {
  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <ProductsContent />
    </Suspense>
  );
}