import ContactHero from "@/components/ui/ContactHero";
import ContactInfo from "@/components/ui/ContactInfo";
import ContactForm from "@/components/ui/ContactForm";


export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </main>
  );
}
