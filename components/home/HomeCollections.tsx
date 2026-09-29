import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BedDouble, Diamond, DoorOpen, Grid2X2, Layers3, Leaf, House, PanelsTopLeft, RectangleHorizontal, Rows3, ShieldCheck } from "lucide-react";
import UpdatesSignup from "./UpdatesSignup";
import MattressCarousel from "./MattressCarousel";
import FlooringCarousel from "./FlooringCarousel";
import styles from "./HomeCollections.module.css";

const href = (category: string) => `/products?category=${encodeURIComponent(category)}`;
const categories = [
  { name: "Mattresses", icon: BedDouble },
  { name: "Laminate Flooring", icon: Rows3 },
  { name: "Parquet", icon: PanelsTopLeft },
  { name: "SPC Flooring", icon: Layers3 },
  { name: "Carpets", icon: Grid2X2 },
  { name: "Rugs", icon: RectangleHorizontal },
  { name: "Doormats", icon: DoorOpen },
  { name: "Artificial Grass", icon: Leaf },
];
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
          <div><p className={styles.eyebrow}>Considered comfort. Timeless interiors.</p><h2 id="collections-heading">Explore Our <em>Collection</em></h2></div>
          <p className={styles.description}>Beautiful textures. Restful nights. Spaces that feel like home. Discover thoughtfully selected essentials for the way you live.</p>
        </div>
        <nav className={styles.categoryNav} aria-label="Shop by category">
          {categories.map(({ name, icon: Icon }) => (
            <Link key={name} href={href(name)}>
              <Icon size={44} strokeWidth={1.1} aria-hidden="true" />
              <span>{name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </section>

    <section className={styles.feature} aria-labelledby="mattress-heading">
      <Link href={href("Mattresses")} className={styles.featureImage} aria-label="Shop mattresses"><Image src="/images/mattresses.jpg" alt="Detailed mattress upholstery and cushioning" fill sizes="(max-width: 700px) 100vw, 65vw" /></Link>
      <div className={styles.featureCopy}><p className={styles.eyebrow}>Mattresses</p><h2 id="mattress-heading" className={styles.mattressHeading}><Link href={href("Mattresses")}>RESTFUL SLEEP<br />FOR A BETTER TOMORROW</Link></h2><p className={styles.description}>Discover thoughtfully selected mattresses that bring lasting comfort and support to your nightly routine.</p><TextLink to={href("Mattresses")}>View all mattresses</TextLink></div>
    </section>
    <MattressCarousel />

    <section className={`${styles.feature} ${styles.reverse}`} aria-labelledby="flooring-heading">
      <Link href={href("Laminate Flooring")} className={styles.featureImage} aria-label="Shop laminate flooring"><Image src="/images/urban-earth-hero-generated.png" alt="Natural wood flooring in a contemporary living room" fill sizes="(max-width: 700px) 100vw, 65vw" /></Link>
      <div className={styles.featureCopy}><p className={styles.eyebrow}>Flooring</p><h2 id="flooring-heading"><Link href={href("Laminate Flooring")}>ELEGANT SURFACES<br />FOR MODERN SPACES</Link></h2><p className={styles.description}>Explore Everclick Laminate, Urban AquaSafe and Urban SPC. Find a finish that brings your space together.</p><TextLink to={href("Laminate Flooring")}>View flooring</TextLink></div>
    </section>

    <FlooringCarousel />

    <section className={styles.benefits} aria-labelledby="benefits-heading">
      <Image src="/images/urban-earth-hero-generated.png" alt="" fill sizes="100vw" className={styles.benefitsBackdrop} />
      <div className={styles.benefitsPanel}>
        <div className={styles.benefitsLayout}>
          <div className={styles.benefitsIntro}>
            <p className={styles.eyebrow}>Why choose Urban Earth</p>
            <h2 id="benefits-heading">DESIGNED FOR<br /><span>EVERY SPACE</span></h2>
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
      <section className={`${styles.feature} ${styles.smallFeature}`} aria-labelledby="rugs-heading"><div className={styles.featureImage}><Image src="/images/timeless-style.jpg" alt="Textured rug in a light-filled living room" fill sizes="(max-width: 700px) 100vw, 50vw" /></div><div className={styles.featureCopy}><p className={styles.eyebrow}>Carpets &amp; rugs</p><h2 id="rugs-heading">ADD WARMTH<br />AND CHARACTER</h2><p className={styles.description}>Beautiful textures and considered designs to complete your interiors.</p><TextLink to={href("Rugs")}>View carpets &amp; rugs</TextLink></div></section>
      <section className={`${styles.feature} ${styles.smallFeature}`} aria-labelledby="grass-heading"><div className={styles.featureImage}><Image src="/images/artificial-grass1.jpg" alt="Close-up of soft artificial grass" fill sizes="(max-width: 700px) 100vw, 50vw" /></div><div className={styles.featureCopy}><p className={styles.eyebrow}>Artificial grass</p><h2 id="grass-heading">GREEN SPACES<br />ALL YEAR ROUND</h2><p className={styles.description}>Low-maintenance, natural-looking grass for your indoor and outdoor spaces.</p><TextLink to={href("Artificial Grass")}>View artificial grass</TextLink></div></section>
    </div>

    <section className={styles.updates} aria-labelledby="updates-heading"><div className={styles.container}><div><p className={styles.eyebrow}>Stay updated</p><h2 id="updates-heading">Design Ideas, New Arrivals<br />and Special Offers</h2></div><UpdatesSignup /></div></section>
  </div>;
}
