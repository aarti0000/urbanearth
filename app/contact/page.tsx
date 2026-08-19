import ContactHero from "@/components/ContactHero";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";


export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#faf7f2]">
      <ContactHero />
      <ContactInfo />
       <ContactForm />
    </main>
  );
}