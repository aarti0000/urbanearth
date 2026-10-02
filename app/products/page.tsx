import ProductsSection from "@/components/products/ProductsSection";
import { Suspense } from "react";

export default function ProductsPage() {
  return <main className="min-h-screen bg-white"><Suspense fallback={<div className="min-h-[60vh] bg-white" />}><ProductsSection /></Suspense></main>;
}
