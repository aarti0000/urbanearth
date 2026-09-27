import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BedDouble, DoorOpen, Grid2X2, Layers3, Leaf, PanelsTopLeft, RectangleHorizontal, Rows3 } from "lucide-react";
import styles from "./home.module.css";
import HomeCollections from "@/components/home/HomeCollections";
import HomeMotion from "@/components/home/HomeMotion";

const categories = [
  { name: "Carpets", image: "carpet.jpg", icon: Grid2X2 },
  { name: "Laminate Flooring", image: "laminate.jpg", icon: Rows3 },
  { name: "Parquet", image: "parquet.jpg", icon: PanelsTopLeft },
  { name: "SPC Flooring", image: "spc.jpg", icon: Layers3 },
  { name: "Rugs", image: "rugs.jpg", icon: RectangleHorizontal },
  { name: "Doormats", image: "doormats.jpg", icon: DoorOpen },
  { name: "Mattresses", image: "mattresses.jpg", icon: BedDouble },
  { name: "Artificial Grass", image: "artificial-grass.jpg", icon: Leaf },
];
const categoryHref = (name: string) => `/products?category=${encodeURIComponent(name)}`;

export default function HomePage() {
  return (
    <HomeMotion>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroImage}><Image src="/images/urbanw.png" alt="Elegant bedroom with a upholstered bed, warm wooden flooring and floor-to-ceiling windows" fill preload sizes="100vw" className={styles.cover} /></div>
        <div className={styles.heroContent}>
          <p className={`${styles.eyebrow} ${styles.heroLabel}`}>Urban Earth <span aria-hidden="true" /></p>
          <h1 id="hero-title">The Art of<br />Exceptional<br />Sleep &amp; Living</h1>
          <p className={styles.heroDescription}>Refined comfort. Thoughtful interiors.<br />Premium mattresses and flooring to elevate the way you live.</p>
          <div className={styles.heroActions}>
            <Link href="/products" className={styles.button}>Explore collection <ArrowRight size={17} /></Link>
            <Link href="/contact" className={`${styles.button} ${styles.outlineButton}`}>Visit showroom</Link>
          </div>
          <nav className={styles.heroCategories} aria-label="Shop by category">
            {[categories[6], categories[1], categories[2], categories[3], categories[0], categories[4], categories[5], categories[7]].map(({ name, icon: Icon }) => <Link key={name} href={categoryHref(name)}><Icon size={34} strokeWidth={1.1} aria-hidden="true" /><span>{name}</span></Link>)}
          </nav>
          <a href="#collections" className={styles.scrollLink}><span aria-hidden="true" />Scroll to discover</a>
        </div>
      </section>
      <HomeCollections />
    </HomeMotion>
  );
}
