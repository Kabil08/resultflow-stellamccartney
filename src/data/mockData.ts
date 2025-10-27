import { Product } from "../types/chat";

export const products = {
  animalTextures: [
    {
      id: "1",
      name: "Ryder Suede Shoulder Bag",
      price: 1250.0,
      description: "Crafted with innovative plant-based suede",
      image:
        "https://res.cloudinary.com/dbtapyfau/image/upload/v1761568083/processed-a9802cdbe1ac5e0085ea058dbeada7cfca92194564c686272f0953def1a53c7f-1747744618538_pdusgm.jpg",
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
  greeting: `Welcome to Stella McCartney—where luxury meets sustainability! 👋

Would you like to explore our collections?

• Cruelty-Free Animal Textures - Innovative alternatives to leather and exotic skins
• Winter Warmers Collection - Cosy, responsibly sourced materials
• The Cosy Edit - Sustainable winter essentials

How can I assist you today?`,

  productDetails: {
    animalTextures: `Our Cruelty-Free Animal Textures showcase revolutionary sustainable materials:

• Mycelium-based snakeskin - A groundbreaking alternative to exotic leather
• Plant-based suede - Luxuriously soft and environmentally conscious
• Innovative vegan leather - Crafted without harming any creatures

Select items to view:`,

    winterWarmers: `Experience warmth with conscience in our Winter Warmers collection:

• Responsibly sourced wool scarves
• Recycled cashmere blends
• Organic cotton accessories

Each piece combines luxury with our commitment to sustainability.

Available items:`,

    cosyEdit: `The Cosy Edit: Where comfort meets conscious luxury:

• Sustainable puffer coats with cruelty-free insulation
• Organic cotton knitwear
• Recycled material fleeces

Browse our selection:`,
  },

  sustainability: `At Stella McCartney, we're revolutionizing luxury fashion through innovation and ethics:

• Zero use of leather, fur, or animal skins
• Pioneering sustainable materials
• Ethical manufacturing practices
• Commitment to circular fashion

Would you like to explore our collections or learn more about our sustainability journey?`,

  collections: {
    winter:
      "Our Winter 2025 Collection features sustainable warmth and style, from cruelty-free wool coats to organic cotton knitwear.",
    accessories:
      "Discover our conscious accessories, from vegan leather belts to recycled material scarves.",
  },
};
