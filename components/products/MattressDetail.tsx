"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Check, ChevronLeft, ChevronRight, Expand, Layers, Wind, ShieldCheck, ShoppingCart, Truck, Wrench, LockKeyhole, Ruler, Star, X } from "lucide-react";
import { useCart } from "@/components/cart/CartContext";
import catalog from "@/data/mattresses.json";
import styles from "./MattressDetail.module.css";
type Product = { id: number; name: string; category: string; price: number; rating: number; image: string; collection?: string; ratePerSquareFoot?: number };
const money = (value: number) => `Rs. ${value.toLocaleString("en-IN")}`;
const conditions = [
  ["Price Changes", "This price list supersedes earlier lists. Prices are subject to change without prior notice."],
  ["Taxes and Duties", "Catalogue prices include all taxes and duties."],
  ["Custom Size Pricing", "The next higher listed size price applies to custom mattresses. If no higher size is listed, pro-rata pricing plus 5% applies."],
  ["Dimensional Tolerance", "Length or width: ±12 mm. Thickness: +12 mm / −6 mm."],
  ["Guarantee Terms", "Guarantee is considered on a pro-rata basis as per the guarantee card or bill."]
];
const tabs = ["Overview", "Mattress Specifications", "Layer Construction", "Care & Maintenance", "Guarantee", "Delivery & Installation"];
export default function MattressDetail({ product }: { product: Product }) {
  const spec = catalog[String(product.id) as keyof typeof catalog];
  const [selected, setSelected] = useState(6);
  const [quantity, setQuantity] = useState(1);
  const [imageIndex, setImageIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [added, setAdded] = useState(false);
  const [tab, setTab] = useState("Overview");
  const { addToCart } = useCart();
  const router = useRouter();
  const size = spec.sizes[selected];
  const gallery = [{ src: product.image, label: "Mattress", zoom: 1 }, { src: product.image, label: "Quilt detail", zoom: 1.5 }, ...(spec.constructionImage ? [{ src: spec.constructionImage, label: "Layer construction", zoom: 1 }] : [])];
  function add() {
    // Each dimension gets a distinct cart ID so different sizes remain separate.
    const variant = { ...product, id: product.id * 100 + selected, productId: product.id, size: `${size.width} × ${size.length} inches`, taxIncluded: true, name: `${product.name} — ${size.width} × ${size.length} inches`, price: size.price };
    for (let i = 0; i < quantity; i++) addToCart(variant);
    setAdded(true);
  }
  const specifications = <dl className={styles.specs}><Ruler /><div><dt>Height</dt><dd>{spec.height}</dd></div><Layers /><div><dt>Series</dt><dd>{product.collection}</dd></div><ShieldCheck /><div><dt>Guarantee</dt><dd>{spec.guarantee} Years</dd></div><Ruler /><div><dt>Rate</dt><dd>{money(product.ratePerSquareFoot || 0)} / sq. ft.</dd></div></dl>;
  const construction = spec.constructionImage ? <Image src={spec.constructionImage} alt={`${product.name} mattress layer construction`} width={650} height={450} className={styles.construction} /> : <p>The Viceroy features an 8-inch core with a 2-inch Euro top. Contact us for the detailed layer diagram.</p>;
  return <main className={styles.page}>
    <nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><ChevronRight size={12}/><Link href="/products">Shop</Link><ChevronRight size={12}/><Link href="/products?category=Mattresses">Mattresses</Link><ChevronRight size={12}/><span>{product.name}</span></nav>
    <div className={styles.hero}>
      <section className={styles.gallery} aria-label="Product gallery">
        <div className={styles.thumbnails}>{gallery.map((entry, i) => <button key={entry.label} aria-label={`View ${entry.label}`} aria-pressed={i === imageIndex} onClick={() => setImageIndex(i)}><Image src={entry.src} alt={entry.label} fill sizes="80px" style={{objectFit:i===2?'contain':'cover',transform:`scale(${entry.zoom})`}}/></button>)}</div>
        <div className={styles.mainImage}><Image src={gallery[imageIndex].src} alt={`${product.name} ${gallery[imageIndex].label}`} fill priority sizes="(max-width: 700px) 90vw, 42vw" style={{objectFit:imageIndex===2?'contain':'cover',transform:`scale(${gallery[imageIndex].zoom})`}}/><button className={styles.expand} aria-label="Expand image" onClick={() => setExpanded(true)}><Expand size={18}/></button><button className={styles.previous} aria-label="Previous image" onClick={() => setImageIndex((imageIndex+gallery.length-1)%gallery.length)}><ChevronLeft/></button><button className={styles.next} aria-label="Next image" onClick={() => setImageIndex((imageIndex+1)%gallery.length)}><ChevronRight/></button></div>
      </section>
      <section className={styles.copy}><span className={styles.series}>{product.collection} series</span><h1>{product.name}</h1><p className={styles.subtitle}>{product.name} · {spec.height} <span>|</span> Premium Mattress</p><p className={styles.description}>{spec.description}</p><div className={styles.rating}><span>{Array.from({length:5},(_,i)=><Star size={15} key={i}/>)}</span> 0 (0 reviews) <span className={styles.sku}>SKU: UE-{product.id}</span></div><p className={styles.stock}><i/> {size.readyStock ? "In Stock" : "Made to Order"}</p>
        <div className={styles.benefits}>{[{icon:Ruler,label:"Supportive Design"},{icon:Layers,label:"Premium Comfort"},{icon:Wind,label:"Breathable Design"},{icon:ShieldCheck,label:"Lasting Quality"}].map(({icon:Icon,label})=><div key={label}><Icon size={28}/><span>{label}</span></div>)}</div>
        <h2 className={styles.choose}>Choose Your Size</h2><div className={styles.sizes}>{spec.sizes.map((option,i)=><button key={i} aria-pressed={i===selected} className={i===selected?styles.selected:""} onClick={()=>{setSelected(i);setAdded(false)}}><strong>{option.width} × {option.length}</strong>{i===selected&&<Check size={16} className={styles.check}/>}<small>{option.area} sq. ft.</small><b>{money(option.price)}</b><span className={option.readyStock?styles.ready:styles.order}>{option.readyStock?"Ready Stock":"Made to Order"}</span></button>)}</div>
        <Link className={styles.quote} href={`/contact?product=${encodeURIComponent(product.name)}`}><Ruler size={24}/><span><b>Need a custom size?</b> We can make a mattress to fit your space.</span><strong>Request a quote <ArrowRight size={15}/></strong></Link>
      </section>
      <aside className={styles.purchase}><div aria-live="polite"><strong className={styles.price}>{money(size.price)}</strong> / piece<p>{size.area} sq. ft. ({size.width} × {size.length} inches)</p></div><div className={styles.rate}><b>Rate: {money(product.ratePerSquareFoot || 0)} / sq. ft.</b><small>Catalogue MRP for the selected size.<br/>Taxes included.</small></div><div className={styles.availability}><b>Availability</b><span className={styles.stock}><i/>{size.readyStock?"Ready Stock":"Made to Order"}</span></div><div className={styles.quantity}><b>Quantity</b><div><button aria-label="Decrease quantity" disabled={quantity===1} onClick={()=>{setQuantity(quantity-1);setAdded(false)}}>−</button><span>{quantity}</span><button aria-label="Increase quantity" onClick={()=>{setQuantity(quantity+1);setAdded(false)}}>+</button></div></div><button className={styles.add} onClick={add}><ShoppingCart size={20}/>{added?"Added to cart":"Add to cart"}</button><button className={styles.buy} onClick={()=>{add();router.push('/checkout')}}>Buy now</button><div className={styles.services}>{[{icon:Truck,title:"Nationwide Delivery Across Nepal",detail:size.readyStock?"Ready stock available for dispatch":"Crafted to order; contact us for lead time"},{icon:Wrench,title:"Expert Installation Available",detail:"Contact us to arrange your service"},{icon:ShieldCheck,title:`${spec.guarantee} Years Guarantee`,detail:"Pro-rata coverage as per guarantee card"},{icon:LockKeyhole,title:"Secure Payment",detail:"Secure and protected checkout"}].map(({icon:Icon,title,detail})=><div key={title}><Icon size={26}/><span><b>{title}</b><small>{detail}</small></span></div>)}</div><Link className={styles.help} href="/contact">Need help? <span>Contact Urban Earth <ArrowRight size={14}/></span></Link></aside>
    </div>
    <div className={styles.tabs} role="tablist" aria-label="Mattress details">{tabs.map(label=><button key={label} role="tab" id={`tab-${tabs.indexOf(label)}`} aria-controls="mattress-panel" aria-selected={tab===label} onClick={()=>setTab(label)}>{label}</button>)}</div>
    <section id="mattress-panel" role="tabpanel" aria-labelledby={`tab-${tabs.indexOf(tab)}`} className={tab==="Overview"?styles.overview:styles.panel}>
      {tab==="Overview"?<><div><small className={styles.eyebrow}>Overview</small><h2>Where Comfort<br/>Meets Lasting Quality.</h2><p>{spec.description}</p><Link className={styles.collection} href={`/products?category=Mattresses&collection=${product.collection}`}>Explore the collection <ArrowRight size={16}/></Link></div><div><small className={styles.eyebrow}>Mattress Specifications</small>{specifications}</div><div><small className={styles.eyebrow}>Mattress Layer Construction</small>{construction}</div><div><small className={styles.eyebrow}>Standard Conditions</small>{conditions.map(([label,text])=><details key={label}><summary>{label}</summary><p>{text}</p></details>)}</div></>:tab==="Mattress Specifications"?<>{specifications}<p>Selected dimensions: {size.width} × {size.length} inches · {size.area} sq. ft.</p></>:tab==="Layer Construction"?construction:tab==="Care & Maintenance"?<><h2>Care for lasting comfort</h2><p>Use a mattress protector and a supportive, level bed base. Keep the mattress dry and follow the care instructions supplied with your mattress. Contact Urban Earth for model-specific rotation and cleaning guidance.</p></>:tab==="Guarantee"?<><h2>{spec.guarantee} Years Guarantee</h2><p>Coverage is considered on a pro-rata basis according to your guarantee card or bill. Retain your purchase documents and contact us for claim assistance.</p></>:<><h2>Delivery & Installation</h2><p>60 × 78 and 72 × 78 inch mattresses are listed as ready stock. All other catalog sizes are made to order. Contact us to confirm delivery timing and installation arrangements for your location.</p><Link href="/contact">Arrange delivery <ArrowRight size={16}/></Link></>}
    </section>
    {expanded&&<div className={styles.modal} role="dialog" aria-modal="true" aria-label={`${product.name} enlarged image`} onClick={()=>setExpanded(false)} onKeyDown={event=>{if(event.key==='Escape')setExpanded(false)}}><button autoFocus aria-label="Close enlarged image" onClick={()=>setExpanded(false)}><X/></button><Image src={gallery[imageIndex].src} alt={product.name} fill sizes="95vw" style={{objectFit:'contain'}}/></div>}
  </main>;
}
