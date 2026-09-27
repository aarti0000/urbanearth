import ProductsSection from "@/components/products/ProductsSection";
import ShopHero from "@/components/products/ShopHero";
import { Suspense } from "react";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Urban Earth Shop Hero */}
      <ShopHero />

      {/* Products Listing */}
      <Suspense
        fallback={
          <div className="min-h-[60vh] bg-white" />
        }
      >
        <ProductsSection />
      </Suspense>

    </main>
  );
}