import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import HomeStorySections from "@/components/HomeStorySections";

export default function HomePage() {
  return <main className="bg-white"><Hero /><Categories /><FeaturedProducts /><HomeStorySections /></main>;
}
