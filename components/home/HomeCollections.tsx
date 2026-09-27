import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Diamond, Layers3, House, ShieldCheck } from "lucide-react";
import UpdatesSignup from "./UpdatesSignup";
import styles from "./HomeCollections.module.css";

const collections = [
  { name: "Mattresses", category: "Mattresses", image: "mattresses.jpg", description: "Considered comfort and support for a more restful night." },
  { name: "Flooring", category: "Laminate Flooring", image: "urban-earth-hero-generated.png", description: "Durable. Stylish. Modern foundations for every space." },
  { name: "Carpets & Rugs", category: "Rugs", image: "timeless-style.jpg", description: "Warmth, texture and character for your interiors." },
  { name: "Artificial Grass", category: "Artificial Grass", image: "artificial-grass1.jpg", description: "Green spaces, beautifully redefined." },
];
const href = (category: string) => `/products?category=${encodeURIComponent(category)}`;
const benefits = [
  { icon: Layers3, title: "Premium Quality", detail: "Carefully selected materials for lasting beauty." },
  { icon: Diamond, title: "Durable Design", detail: "Made for everyday living." },
  { icon: House, title: "For Every Space", detail: "Homes & commercial interiors." },
  { icon: ShieldCheck, title: "Expert Guidance", detail: "From selection to installation." },
];
function TextLink({ to, children }: { to: string; children: React.ReactNode }) {
  return <Link href={to} className={styles.textLink}>{children}<ArrowRight size={17} aria-hidden="true" /></Link>;
}

export default function HomeCollections() {
  return <div className={styles.sections}>
    <section id="collections" className={styles.collections} aria-labelledby="collections-heading">
      <div className={styles.container}>
        <div className={styles.intro}>
          <div><p className={styles.eyebrow}>Explore our collections</p><h2 id="collections-heading">Complete Surfaces for a<br />Better Living Experience</h2></div>
          <p className={styles.description}>From restful sleep to refined interiors, Urban Earth offers mattresses, flooring, carpets and artificial grass for modern homes and commercial spaces.</p>
        </div>
        <div className={styles.cards}>{collections.map((item) => <Link key={item.name} href={href(item.category)} className={styles.card}>
          <div className={styles.cardImage}><Image src={`/images/${item.image}`} alt={item.name} fill sizes="(max-width: 700px) 45vw, 24vw" /></div>
          <div className={styles.cardCopy}><h3>{item.name}</h3><p>{item.description}</p><span>Explore <ArrowRight size={15} aria-hidden="true" /></span></div>
        </Link>)}</div>
      </div>
    </section>

    <section className={styles.feature} aria-labelledby="mattress-heading">
      <div className={styles.featureImage}><Image src="/images/mattresses.jpg" alt="Detailed mattress upholstery and cushioning" fill sizes="(max-width: 700px) 100vw, 65vw" /></div>
      <div className={styles.featureCopy}><p className={styles.eyebrow}>Mattresses</p><h2 id="mattress-heading">Restful Sleep<br />for a Better Tomorrow</h2><p className={styles.description}>Discover thoughtfully selected mattresses that bring lasting comfort and support to your nightly routine.</p><TextLink to={href("Mattresses")}>View mattresses</TextLink></div>
    </section>

    <section className={`${styles.feature} ${styles.reverse}`} aria-labelledby="flooring-heading">
      <div className={styles.featureImage}><Image src="/images/urban-earth-hero-generated.png" alt="Natural wood flooring in a contemporary living room" fill sizes="(max-width: 700px) 100vw, 65vw" /></div>
      <div className={styles.featureCopy}><p className={styles.eyebrow}>Flooring</p><h2 id="flooring-heading">Elegant Surfaces<br />for Modern Spaces</h2><p className={styles.description}>Explore Everclick Laminate, Urban AquaSafe and Urban SPC. Find a finish that brings your space together.</p><TextLink to={href("Laminate Flooring")}>View flooring</TextLink></div>
    </section>

    <section className={styles.benefits} aria-labelledby="benefits-heading">
      <Image src="/images/urban-earth-hero-generated.png" alt="" fill sizes="100vw" className={styles.benefitsBackdrop} />
      <div className={styles.benefitsPanel}>
        <div className={styles.benefitsLayout}>
          <div className={styles.benefitsIntro}>
            <p className={styles.eyebrow}>Why choose Urban Earth</p>
            <h2 id="benefits-heading">Designed for<br /><span>Every Space</span></h2>
            <p className={styles.description}>Quality, design and practical comfort come together to create interiors you will love to live in.</p>
            <span className={styles.benefitsRule} aria-hidden="true" />
          </div>
          <div className={styles.benefitGrid}>{benefits.map(({ icon: Icon, title, detail }) => <div key={title}>
            <span className={styles.benefitIcon}><Icon size={34} strokeWidth={1.3} aria-hidden="true" /></span>
            <h3>{title}</h3><p>{detail}</p>
          </div>)}</div>
        </div>
      </div>
    </section>
    <div className={styles.paired}>
      <section className={`${styles.feature} ${styles.smallFeature}`} aria-labelledby="rugs-heading"><div className={styles.featureImage}><Image src="/images/timeless-style.jpg" alt="Textured rug in a light-filled living room" fill sizes="(max-width: 700px) 100vw, 50vw" /></div><div className={styles.featureCopy}><p className={styles.eyebrow}>Carpets &amp; rugs</p><h2 id="rugs-heading">Add Warmth<br />and Character</h2><p className={styles.description}>Beautiful textures and considered designs to complete your interiors.</p><TextLink to={href("Rugs")}>View carpets &amp; rugs</TextLink></div></section>
      <section className={`${styles.feature} ${styles.smallFeature}`} aria-labelledby="grass-heading"><div className={styles.featureImage}><Image src="/images/artificial-grass1.jpg" alt="Close-up of soft artificial grass" fill sizes="(max-width: 700px) 100vw, 50vw" /></div><div className={styles.featureCopy}><p className={styles.eyebrow}>Artificial grass</p><h2 id="grass-heading">Green Spaces<br />All Year Round</h2><p className={styles.description}>Low-maintenance, natural-looking grass for your indoor and outdoor spaces.</p><TextLink to={href("Artificial Grass")}>View artificial grass</TextLink></div></section>
    </div>

    <section className={styles.updates} aria-labelledby="updates-heading"><div className={styles.container}><div><p className={styles.eyebrow}>Stay updated</p><h2 id="updates-heading">Design Ideas, New Arrivals<br />and Special Offers</h2></div><UpdatesSignup /></div></section>
  </div>;
}
