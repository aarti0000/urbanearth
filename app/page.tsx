import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./home.module.css";
import HomeCollections from "@/components/home/HomeCollections";
import HomeMotion from "@/components/home/HomeMotion";


export default function HomePage() {
  return (
    <HomeMotion>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroImage}><Image src="/images/urbanw.png" alt="Elegant bedroom with a upholstered bed, warm wooden flooring and floor-to-ceiling windows" fill preload sizes="100vw" className={styles.cover} /></div>
        <div className={styles.heroContent}>
          <h1 id="hero-title" className={styles.heroTitle}>
            <span className={styles.heroTitleIntro}>THE ART OF EXCEPTIONAL</span>{" "}
            <span className={styles.heroTitleMain}>SLEEP &amp; LIVING</span>
          </h1>
          <p className={styles.heroDescription}>Refined comfort. Thoughtful interiors.<br />Premium mattresses and flooring to elevate the way you live.</p>
          <div className={styles.heroActions}>
            <Link href="#collections" className={styles.button}>Explore collection <ArrowRight size={17} /></Link>
            <Link href="/contact" className={`${styles.button} ${styles.outlineButton}`}>Visit showroom</Link>
          </div>
        </div>
      </section>
      <HomeCollections />
    </HomeMotion>
  );
}
