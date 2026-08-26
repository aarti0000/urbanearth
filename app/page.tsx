import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import HomeStorySections from "@/components/home/HomeStorySections";

export default function HomePage() {
  return <main className="bg-white"><Hero /><Categories /><FeaturedProducts /><HomeStorySections /></main>;
}
