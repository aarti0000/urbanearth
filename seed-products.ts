
import "dotenv/config";
import postgres from "postgres";

const sql = postgres(process.env.DATABASE_URL!);

const products = [
  // =========================
  // LAMINATE FLOORING
  // =========================
  {
    name: "Natural Oak Laminate",
    slug: "natural-oak-laminate",
    category: "Laminate Flooring",
    price: 4850,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Warm Walnut Laminate",
    slug: "warm-walnut-laminate",
    category: "Laminate Flooring",
    price: 5250,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "White Ash Laminate",
    slug: "white-ash-laminate",
    category: "Laminate Flooring",
    price: 4950,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Classic Honey Oak Laminate",
    slug: "classic-honey-oak-laminate",
    category: "Laminate Flooring",
    price: 4650,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Dark Walnut Laminate",
    slug: "dark-walnut-laminate",
    category: "Laminate Flooring",
    price: 5650,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Nordic Grey Laminate",
    slug: "nordic-grey-laminate",
    category: "Laminate Flooring",
    price: 4750,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",
  },

  // =========================
  // PARQUET
  // =========================
  {
    name: "Herringbone Oak Parquet",
    slug: "herringbone-oak-parquet",
    category: "Parquet",
    price: 7250,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Chevron Natural Parquet",
    slug: "chevron-natural-parquet",
    category: "Parquet",
    price: 8350,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Classic Oak Parquet",
    slug: "classic-oak-parquet",
    category: "Parquet",
    price: 6950,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Smoked Oak Parquet",
    slug: "smoked-oak-parquet",
    category: "Parquet",
    price: 7850,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Natural Chevron Parquet",
    slug: "natural-chevron-parquet",
    category: "Parquet",
    price: 8650,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
  },

  // =========================
  // SPC FLOORING
  // =========================
  {
    name: "Stone Grey SPC Flooring",
    slug: "stone-grey-spc-flooring",
    category: "SPC Flooring",
    price: 5650,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Concrete Grey SPC Plank",
    slug: "concrete-grey-spc-plank",
    category: "SPC Flooring",
    price: 5950,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Natural Oak SPC",
    slug: "natural-oak-spc",
    category: "SPC Flooring",
    price: 5750,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Warm Beige SPC Plank",
    slug: "warm-beige-spc-plank",
    category: "SPC Flooring",
    price: 5550,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Dark Oak SPC Flooring",
    slug: "dark-oak-spc-flooring",
    category: "SPC Flooring",
    price: 6250,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
  },

  // =========================
  // CARPETS
  // =========================
  {
    name: "Soft Loop Pile Carpet",
    slug: "soft-loop-pile-carpet",
    category: "Carpets",
    price: 3950,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Ivory Textured Carpet",
    slug: "ivory-textured-carpet",
    category: "Carpets",
    price: 4150,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Comfort Bedroom Carpet",
    slug: "comfort-bedroom-carpet",
    category: "Carpets",
    price: 4650,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Luxury Beige Carpet",
    slug: "luxury-beige-carpet",
    category: "Carpets",
    price: 5250,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Modern Charcoal Carpet",
    slug: "modern-charcoal-carpet",
    category: "Carpets",
    price: 4450,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=900&q=85",
  },

  // =========================
  // RUGS
  // =========================
  {
    name: "Handwoven Heritage Rug",
    slug: "handwoven-heritage-rug",
    category: "Rugs",
    price: 12500,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Natural Jute Area Rug",
    slug: "natural-jute-area-rug",
    category: "Rugs",
    price: 9850,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Modern Geometric Rug",
    slug: "modern-geometric-rug",
    category: "Rugs",
    price: 8750,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Beige Minimal Area Rug",
    slug: "beige-minimal-area-rug",
    category: "Rugs",
    price: 7950,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
  },

  // =========================
  // DOORMATS
  // =========================
  {
    name: "Premium Entrance Doormat",
    slug: "premium-entrance-doormat",
    category: "Doormats",
    price: 1850,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Natural Coir Doormat",
    slug: "natural-coir-doormat",
    category: "Doormats",
    price: 1650,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Modern Pattern Doormat",
    slug: "modern-pattern-doormat",
    category: "Doormats",
    price: 1950,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=900&q=85",
  },

  // =========================
  // ARTIFICIAL GRASS
  // =========================
  {
    name: "Landscape Artificial Grass",
    slug: "landscape-artificial-grass",
    category: "Artificial Grass",
    price: 2750,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Premium Garden Artificial Grass",
    slug: "premium-garden-artificial-grass",
    category: "Artificial Grass",
    price: 3250,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Soft Green Artificial Turf",
    slug: "soft-green-artificial-turf",
    category: "Artificial Grass",
    price: 2950,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=900&q=85",
  },

  // =========================
  // ENGINEERED FLOORING
  // =========================
  {
    name: "Smoked Oak Engineered Flooring",
    slug: "smoked-oak-engineered-flooring",
    category: "Engineered Flooring",
    price: 7950,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Natural Oak Engineered Flooring",
    slug: "natural-oak-engineered-flooring",
    category: "Engineered Flooring",
    price: 7450,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Classic Walnut Engineered Floor",
    slug: "classic-walnut-engineered-floor",
    category: "Engineered Flooring",
    price: 8250,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",
  },

  // =========================
  // VINYL FLOORING
  // =========================
  {
    name: "Sandstone Luxury Vinyl",
    slug: "sandstone-luxury-vinyl",
    category: "Vinyl Flooring",
    price: 4450,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Natural Wood Vinyl Plank",
    slug: "natural-wood-vinyl-plank",
    category: "Vinyl Flooring",
    price: 4250,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Modern Grey Vinyl Flooring",
    slug: "modern-grey-vinyl-flooring",
    category: "Vinyl Flooring",
    price: 4350,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85",
  },

  // =========================
  // MATTRESSES
  // =========================
  {
    name: "Urban Comfort Mattress",
    slug: "urban-comfort-mattress",
    category: "Mattresses",
    price: 18500,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Premium Memory Foam Mattress",
    slug: "premium-memory-foam-mattress",
    category: "Mattresses",
    price: 22500,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Luxury Orthopedic Mattress",
    slug: "luxury-orthopedic-mattress",
    category: "Mattresses",
    price: 26500,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=85",
  },
];

async function main() {
  console.log("Clearing existing products...");

  await sql`TRUNCATE TABLE product RESTART IDENTITY CASCADE`;

  console.log(`Inserting ${products.length} Urban Earth products...`);

  for (const product of products) {
    await sql`
      INSERT INTO product (
        name,
        slug,
        category,
        price,
        rating,
        image
      )
      VALUES (
        ${product.name},
        ${product.slug},
        ${product.category},
        ${product.price},
        ${product.rating},
        ${product.image}
      )
    `;
  }

  console.log(
    `Successfully inserted ${products.length} Urban Earth products.`
  );

  await sql.end();
}

main().catch(async (error) => {
  console.error(error);
  await sql.end();
  process.exit(1);
});

