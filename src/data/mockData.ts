export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export const products: Record<string, Product[]> = {
  animalTextures: [
    {
      id: "1",
      name: "Ryder Suede Shoulder Bag",
      price: 1250.0,
      description: "Crafted with innovative plant-based suede",
      image:
        "https://res.cloudinary.com/dbtapyfau/image/upload/v1761585504/ca71ac8152b658a523ff63f2792de0733f931e0c_7B0138WP05545742_X_nstaz3.jpg",
    },
    {
      id: "2",
      name: "Limited-Edition Elyse Snake Platforms",
      price: 750.0,
      description: "Featuring mycelium-based snakeskin texture",
      image:
        "https://res.cloudinary.com/dbtapyfau/image/upload/v1761568053/762594cd06d787f4e161602c98ea2141d4cb236b_810479APAEK02007_X_k6zdnw.jpg",
    },
  ],
  winterWarmers: [
    {
      id: "3",
      name: "Sustainable Wool Scarf",
      price: 225.0,
      description: "Made from responsibly sourced wool",
      image:
        "https://res.cloudinary.com/dbtapyfau/image/upload/v1761568119/stella-mccartney-kids-boys-black-green-knitted-scarf-with-stella-logo-605469-9b88831321a8c9ca9d486df2c0f7f381_qmqpyt.jpg",
    },
    {
      id: "4",
      name: "Recycled Cashmere Blend Snood",
      price: 295.0,
      description: "Luxuriously soft recycled cashmere blend",
      image:
        "https://res.cloudinary.com/dbtapyfau/image/upload/v1761568144/w2000_q60_fh2f6w.jpg",
    },
  ],
  cosyEdit: [
    {
      id: "5",
      name: "Sustainable Puffer Coat",
      price: 1295.0,
      description: "Cruelty-free insulation for winter warmth",
      image:
        "https://res.cloudinary.com/dbtapyfau/image/upload/v1761568585/stella-mccartney-kids-boys-black-green-tartan-reversible-puffer-jacket-605467-fdc437057b618a1802628869c1cae34d_huptzo.jpg",
    },
    {
      id: "6",
      name: "Organic Cotton Sweater",
      price: 595.0,
      description: "Sustainably crafted knitwear",
      image:
        "https://res.cloudinary.com/dbtapyfau/image/upload/v1761568227/w2000_q60_paccnd.jpg",
    },
  ],
};

export const chatResponses = {
  greeting:
    "Welcome to Stella McCartney—where luxury meets sustainability! 👋\n\nAre you exploring cruelty-free fashion for the first time? Would you like to learn about our animal-free materials and ethical commitments?",
  sustainability:
    "We never use animal leather or fur—instead, our textures are crafted from innovative, sustainable sources like mycelium-based snakeskin and plant-based suede.\n\nWould you like to see how our collections are made, or browse testimonials from shoppers passionate about ethical style?",
  shopping:
    "What are you shopping for today—cozy winter wear, handbags, or accessories?\n\nIf you have preferences (vegan leather, organic wool), I can recommend matching products.",
  materials:
    "✨ Our Innovative Materials:\n• Mycelium-based snakeskin\n• Plant-based suede\n• Organic cotton\n• Recycled polyester\n• Sustainable viscose",
  productDetails: {
    animalTextures:
      "Discover our innovative cruelty-free textures:\n\n• Mycelium-based snakeskin - A groundbreaking alternative to exotic leather\n• Plant-based suede - Luxuriously soft and environmentally conscious",
    winterWarmers:
      "Experience warmth with conscience:\n\n• Responsibly sourced wool scarves\n• Recycled cashmere blends\n• Organic cotton accessories",
    cosyEdit:
      "Sustainable comfort for the season:\n\n• Cruelty-free puffer coats\n• Organic cotton knitwear\n• Recycled material fleeces",
  },
  collections: {
    winter:
      "Our Winter 2025 Collection features sustainable warmth and style, from cruelty-free wool coats to organic cotton knitwear.",
    accessories:
      "Discover our conscious accessories, from vegan leather belts to recycled material scarves.",
  },
};
