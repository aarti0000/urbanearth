"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import products from "@/data/products.json";
import styles from "./MattressCarousel.module.css";

const flooring = products.filter((product) => /^\/images\/f\d+\.jpg$/.test(product.image));
const collectionHref = "/products?category=Laminate%20Flooring";

export default function FlooringCarousel() {
  const track = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const update = () => setEdges({
      start: element.scrollLeft <= 2,
      end: element.scrollLeft + element.clientWidth >= element.scrollWidth - 2,
    });
    update();
    element.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => {
      element.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, []);

  const move = (direction: number) => {
    const element = track.current;
    const card = element?.firstElementChild;
    if (!element || !card) return;
    const gap = parseFloat(getComputedStyle(element).columnGap) || 0;
    element.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  };

  return (
    <section className={styles.carousel} aria-label="Explore flooring" aria-roledescription="carousel">
      <div className={styles.layout}>
        <button className={styles.previous} type="button" aria-label="Previous flooring" aria-controls="flooring-slides" disabled={edges.start} onClick={() => move(-1)}><ChevronLeft size={25} strokeWidth={1.4} /></button>
        <div ref={track} id="flooring-slides" className={styles.track} tabIndex={0} aria-label="Flooring images; swipe or use arrow buttons to browse">
          {flooring.map((product, index) => (
            <Link key={product.id} href={`/product/${product.id}`} className={styles.card} aria-label={`View ${product.name}`}>
              <div className={styles.image}><Image src={product.image} alt={product.name} fill sizes="(max-width: 600px) 76vw, (max-width: 1000px) 40vw, 23vw" /></div>
              <div className={styles.copy}><span className={styles.number}>URBAN EARTH / {String(index + 1).padStart(2, "0")}</span><h3>{product.name}</h3><span className={styles.explore}>View product <ArrowRight size={14} aria-hidden="true" /></span></div>
            </Link>
          ))}
        </div>
        <button className={styles.next} type="button" aria-label="Next flooring" aria-controls="flooring-slides" disabled={edges.end} onClick={() => move(1)}><ChevronRight size={25} strokeWidth={1.4} /></button>
      </div>
      <Link href={collectionHref} className={styles.viewAll}>View all flooring <ArrowRight size={16} aria-hidden="true" /></Link>
    </section>
  );
}
