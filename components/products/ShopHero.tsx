import Image from "next/image";
import styles from "./Catalog.module.css";

const banners: Record<string, string> = {
  "Carpets & Rugs": "rugs.jpg",
  Mattresses: "mattresses.jpg", Carpets: "carpet.jpg", Rugs: "rugs.jpg",
  "Artificial Grass": "artificial-grass.jpg", "Laminate Flooring": "laminate.jpg",
  Parquet: "parquet.jpg", "SPC Flooring": "spc.jpg", Doormats: "doormats.jpg",
};
export default function ShopHero({ category = "All" }: { category?: string }) {
  return <section className={styles.hero} aria-labelledby="shop-heading">
    <Image src={`/images/${banners[category] || "shop-hero.jpg"}`} alt="" fill preload sizes="100vw" className={styles.heroImage} />
    <div className={styles.heroContent}><h1 id="shop-heading">{category === "All" ? "All products" : category}</h1><p>{category === "All" ? "Considered essentials for beautiful everyday spaces" : `Explore our ${category.toLowerCase()} collection`}</p></div>
  </section>;
}
