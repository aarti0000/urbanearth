import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers, Square, Grid2X2, Waves, RectangleHorizontal, Sprout, BedDouble, Sofa } from "lucide-react";
import styles from "./ProductTheme.module.css";

const categories = [
  { name: "Carpets", icon: Sofa }, { name: "Laminate Flooring", icon: Layers },
  { name: "Parquet", icon: Grid2X2 }, { name: "SPC Flooring", icon: Square },
  { name: "Rugs", icon: RectangleHorizontal }, { name: "Doormats", icon: Waves },
  { name: "Artificial Grass", icon: Sprout }, { name: "Mattresses", icon: BedDouble },
];
export default function ShopHero() {
  return <section className={styles.hero} aria-labelledby="shop-heading">
    <Image src="/images/shop-hero.jpg" alt="Natural flooring and comfortable interiors" fill preload sizes="100vw" className={styles.heroImage} />
    <div className={styles.heroInner}>
      <p className={styles.eyebrow}>The Urban Earth collection <span aria-hidden="true" /></p>
      <h1 id="shop-heading">Beautiful Foundations.<br />Better Living.</h1>
      <p className={styles.heroDescription}>Explore flooring, mattresses and considered essentials<br />to make every space feel like home.</p>
      <a href="#product-collection" className={styles.heroButton}>Explore collection <ArrowRight size={17} aria-hidden="true" /></a>
      <nav className={styles.categories} aria-label="Product categories">{categories.map(({ name, icon: Icon }) => <Link key={name} href={`/products?category=${encodeURIComponent(name)}`}><Icon size={27} strokeWidth={1.2} aria-hidden="true" /><span>{name}</span></Link>)}</nav>
    </div>
  </section>;
}
