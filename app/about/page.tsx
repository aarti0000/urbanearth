import AboutHero from "@/components/AboutHero";
import AboutStory from "@/components/AboutStory";
import AboutValues from "@/components/AboutValues";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#faf7f2]">
      <AboutHero />
      <AboutStory />
       <AboutValues />
    </main>
  );
}