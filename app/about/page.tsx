import AboutHero from "@/components/ui/AboutHero";
import AboutStory from "@/components/ui/AboutStory";
import AboutValues from "@/components/ui/AboutValues";
import AboutCTA from "@/components/ui/AboutCTA";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutCTA />
    </main>
  );
}
