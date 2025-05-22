import { Product } from '@/types/product';

// Mock data for products
const products: Product[] = [
  // Chairs
  {
    id: '1',
    name: 'Handcrafted Wooden Rocking Chair',
    description: 'A beautiful handcrafted rocking chair made from sustainably sourced oak wood. Each piece is carefully carved and assembled by our master craftsmen, providing both comfort and timeless style for your home.',
    price: 599.99,
    image: 'https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&w=1280',
    category: 'chairs',
    sku: 'CHR-001',
    createdAt: '2023-11-15T00:00:00.000Z',
    featured: true,
    details: [
      'Made from sustainable oak wood',
      'Hand-carved details',
      'Traditional joinery techniques',
      'Natural oil finish',
      'Dimensions: 42"H x 26"W x 34"D'
    ]
  },
  {
    id: '2',
    name: 'Woven Rattan Accent Chair',
    description: 'This stunning accent chair combines a sleek metal frame with intricately woven rattan. The result is a lightweight yet durable chair that adds texture and warmth to any space.',
    price: 349.99,
    image: 'https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=1280',
    category: 'chairs',
    sku: 'CHR-002',
    createdAt: '2023-12-01T00:00:00.000Z',
    details: [
      'Hand-woven natural rattan',
      'Powder-coated steel frame',
      'Indoor use recommended',
      'Includes seat cushion',
      'Dimensions: 32"H x 28"W x 30"D'
    ]
  },
  {
    id: '3',
    name: 'Artisan Leather Lounge Chair',
    description: 'Sink into luxury with our artisan leather lounge chair. Each chair features premium full-grain leather that develops a beautiful patina over time, paired with a hand-finished walnut frame.',
    price: 899.99,
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1280',
    category: 'chairs',
    sku: 'CHR-003',
    createdAt: '2024-01-10T00:00:00.000Z',
    featured: true,
    details: [
      'Full-grain premium leather',
      'Solid walnut wood frame',
      'High-density foam cushioning',
      'Traditional saddle stitching',
      'Dimensions: 33"H x 32"W x 34"D'
    ]
  },
  
  // Artworks
  {
    id: '4',
    name: 'Abstract Mixed Media Canvas',
    description: 'This original abstract artwork combines acrylic paint, ink, and collage elements on canvas. The vibrant colors and dynamic composition make it a statement piece for any contemporary space.',
    price: 450.00,
    image: 'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=1280',
    category: 'artworks',
    sku: 'ART-001',
    createdAt: '2023-10-20T00:00:00.000Z',
    details: [
      'Original one-of-a-kind artwork',
      'Mixed media on stretched canvas',
      'Signed by the artist',
      'Includes certificate of authenticity',
      'Dimensions: 36"H x 48"W x 1.5"D'
    ]
  },
  {
    id: '5',
    name: 'Hand-Carved Wooden Wall Sculpture',
    description: 'This intricate wall sculpture is hand-carved from a single piece of reclaimed teak wood. The organic patterns and natural wood grain create a mesmerizing focal point for your wall.',
    price: 675.00,
    image: 'https://images.pexels.com/photos/207353/pexels-photo-207353.jpeg?auto=compress&cs=tinysrgb&w=1280',
    category: 'artworks',
    sku: 'ART-002',
    createdAt: '2023-11-05T00:00:00.000Z',
    featured: true,
    details: [
      'Hand-carved from reclaimed teak',
      'Natural beeswax finish',
      'Ready to hang with included hardware',
      'Each piece is unique',
      'Dimensions: approximately 24"H x 36"W x 3"D'
    ]
  },
  {
    id: '6',
    name: 'Ceramic Wall Installation',
    description: 'A stunning installation of handmade ceramic pieces that can be arranged in countless patterns. Each porcelain piece is individually thrown, glazed, and fired using traditional techniques.',
    price: 525.00,
    image: 'https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=1280',
    category: 'artworks',
    sku: 'ART-003',
    createdAt: '2024-01-25T00:00:00.000Z',
    details: [
      'Set of 12 handmade ceramic pieces',
      'High-fired porcelain with custom glazes',
      'Mounting template included',
      'Indoor use only',
      'Various sizes, approximately 4-8" each'
    ]
  },
  
  // Bags
  {
    id: '7',
    name: 'Hand-Stitched Leather Weekender',
    description: 'Our signature weekender bag is crafted from full-grain vegetable-tanned leather and hand-stitched for exceptional durability. The spacious interior and thoughtful pockets make it perfect for short trips.',
    price: 495.00,
    image: 'https://images.pexels.com/photos/934673/pexels-photo-934673.jpeg?auto=compress&cs=tinysrgb&w=1280',
    category: 'bags',
    sku: 'BAG-001',
    createdAt: '2023-09-15T00:00:00.000Z',
    featured: true,
    details: [
      'Full-grain vegetable-tanned leather',
      'Solid brass hardware',
      'Cotton canvas lining',
      'Interior and exterior pockets',
      'Dimensions: 12"H x 20"W x 9"D'
    ]
  },
  {
    id: '8',
    name: 'Waxed Canvas and Leather Backpack',
    description: 'Combining rugged waxed canvas with premium leather trim, this backpack is built to last for years of adventure. The comfortable straps and padded laptop sleeve make it ideal for daily use.',
    price: 285.00,
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=1280',
    category: 'bags',
    sku: 'BAG-002',
    createdAt: '2023-10-10T00:00:00.000Z',
    details: [
      'Heavy-duty waxed canvas',
      'Full-grain leather trim and base',
      'Water-resistant',
      'Padded 15" laptop sleeve',
      'Dimensions: 18"H x 12"W x 6"D'
    ]
  },
  {
    id: '9',
    name: 'Handwoven Market Tote',
    description: 'Each of these beautiful market totes is handwoven by skilled artisans using sustainable jute fibers. The roomy interior and sturdy handles make it perfect for shopping, beach days, or as a stylish everyday bag.',
    price: 125.00,
    image: 'https://images.pexels.com/photos/5234573/pexels-photo-5234573.jpeg?auto=compress&cs=tinysrgb&w=1280',
    category: 'bags',
    sku: 'BAG-003',
    createdAt: '2024-02-01T00:00:00.000Z',
    details: [
      'Handwoven natural jute',
      'Leather handles',
      'Inner cotton pocket with zip closure',
      'Water-resistant lining',
      'Dimensions: 14"H x 18"W x 6"D'
    ]
  },
  // --- AUTO-GENERATED PRODUCTS FROM PUBLIC IMAGES ---
  {
    id: '10',
    name: 'Table',
    description: 'A beautifully crafted table, perfect for any modern or classic home.',
    price: 299.99,
    image: '/Table.jpg',
    category: 'tables',
    sku: 'TAB-001',
    createdAt: '2024-06-01T00:00:00.000Z',
    details: ['Solid wood construction', 'Elegant design', 'Durable finish']
  },
  {
    id: '11',
    name: 'Bag 20',
    description: 'A stylish and functional bag for everyday use.',
    price: 89.99,
    image: '/Bag_20.jpg',
    category: 'bags',
    sku: 'BAG-020',
    createdAt: '2024-06-01T00:00:00.000Z',
    details: ['Spacious interior', 'Durable material', 'Comfortable straps']
  },
  {
    id: '12',
    name: 'Art 10',
    description: 'A unique piece of art to add character to your space.',
    price: 150.00,
    image: '/Art_10.jpg',
    category: 'artworks',
    sku: 'ART-010',
    createdAt: '2024-06-01T00:00:00.000Z',
    details: ['Original artwork', 'Vibrant colors', 'Ready to hang']
  },
  {
    id: '13',
    name: 'Art 9',
    description: 'A unique piece of art to add character to your space.',
    price: 140.00,
    image: '/Art_9.jpg',
    category: 'artworks',
    sku: 'ART-009',
    createdAt: '2024-06-01T00:00:00.000Z',
    details: ['Original artwork', 'Vibrant colors', 'Ready to hang']
  },
  {
    id: '14',
    name: 'Art 8',
    description: 'A unique piece of art to add character to your space.',
    price: 135.00,
    image: '/Art_8.jpg',
    category: 'artworks',
    sku: 'ART-008',
    createdAt: '2024-06-01T00:00:00.000Z',
    details: ['Original artwork', 'Vibrant colors', 'Ready to hang']
  },
  {
    id: '15',
    name: 'Art 7',
    description: 'A unique piece of art to add character to your space.',
    price: 130.00,
    image: '/Art_7.jpg',
    category: 'artworks',
    sku: 'ART-007',
    createdAt: '2024-06-01T00:00:00.000Z',
    details: ['Original artwork', 'Vibrant colors', 'Ready to hang']
  },
  {
    id: '16',
    name: 'Art 6',
    description: 'A unique piece of art to add character to your space.',
    price: 125.00,
    image: '/Art_6.jpg',
    category: 'artworks',
    sku: 'ART-006',
    createdAt: '2024-06-01T00:00:00.000Z',
    details: ['Original artwork', 'Vibrant colors', 'Ready to hang']
  },
  {
    id: '17',
    name: 'Art 5',
    description: 'A unique piece of art to add character to your space.',
    price: 120.00,
    image: '/Art_5.jpg',
    category: 'artworks',
    sku: 'ART-005',
    createdAt: '2024-06-01T00:00:00.000Z',
    details: ['Original artwork', 'Vibrant colors', 'Ready to hang']
  },
  {
    id: '18',
    name: 'Art 4',
    description: 'A unique piece of art to add character to your space.',
    price: 115.00,
    image: '/Art_4.jpg',
    category: 'artworks',
    sku: 'ART-004',
    createdAt: '2024-06-01T00:00:00.000Z',
    details: ['Original artwork', 'Vibrant colors', 'Ready to hang']
  },
  {
    id: '19',
    name: 'Art 3',
    description: 'A unique piece of art to add character to your space.',
    price: 110.00,
    image: '/Art_3.jpg',
    category: 'artworks',
    sku: 'ART-003B',
    createdAt: '2024-06-01T00:00:00.000Z',
    details: ['Original artwork', 'Vibrant colors', 'Ready to hang']
  },
  {
    id: '20',
    name: 'Art 2',
    description: 'A unique piece of art to add character to your space.',
    price: 105.00,
    image: '/Art_2.jpg',
    category: 'artworks',
    sku: 'ART-002B',
    createdAt: '2024-06-01T00:00:00.000Z',
    details: ['Original artwork', 'Vibrant colors', 'Ready to hang']
  },
  {
    id: '21',
    name: 'Art 1',
    description: 'A unique piece of art to add character to your space.',
    price: 100.00,
    image: '/Art_1.jpg',
    category: 'artworks',
    sku: 'ART-001B',
    createdAt: '2024-06-01T00:00:00.000Z',
    details: ['Original artwork', 'Vibrant colors', 'Ready to hang']
  },
  {
    id: '22',
    name: 'Vase 2',
    description: 'A decorative vase, perfect for flowers or as a standalone piece.',
    price: 45.00,
    image: '/Vase_2.jpg',
    category: 'vases',
    sku: 'VAS-002',
    createdAt: '2024-06-01T00:00:00.000Z',
    details: ['Handcrafted', 'Elegant design', 'Durable material']
  },
  {
    id: '23',
    name: 'Lamp 2',
    description: 'A stylish lamp to brighten up your room.',
    price: 60.00,
    image: '/Lamp_2.jpg',
    category: 'lamps',
    sku: 'LMP-002',
    createdAt: '2024-06-01T00:00:00.000Z',
    details: ['Modern design', 'Energy efficient', 'Warm lighting']
  },
  {
    id: '24',
    name: 'Vase 1',
    description: 'A decorative vase, perfect for flowers or as a standalone piece.',
    price: 40.00,
    image: '/Vase_1.jpg',
    category: 'vases',
    sku: 'VAS-001',
    createdAt: '2024-06-01T00:00:00.000Z',
    details: ['Handcrafted', 'Elegant design', 'Durable material']
  },
  {
    id: '25',
    name: 'Lamp 1',
    description: 'A stylish lamp to brighten up your room.',
    price: 55.00,
    image: '/Lamp_1.jpg',
    category: 'lamps',
    sku: 'LMP-001',
    createdAt: '2024-06-01T00:00:00.000Z',
    details: ['Modern design', 'Energy efficient', 'Warm lighting']
  },
  {
    id: '26',
    name: 'Table 1',
    description: 'A beautifully crafted table, perfect for any modern or classic home.',
    price: 320.00,
    image: '/Table_1.jpg',
    category: 'tables',
    sku: 'TAB-002',
    createdAt: '2024-06-01T00:00:00.000Z',
    details: ['Solid wood construction', 'Elegant design', 'Durable finish']
  },
  {
    id: '27',
    name: 'Clock 4',
    description: 'A unique clock to add style and function to your space.',
    price: 35.00,
    image: '/Clock_4.jpg',
    category: 'clocks',
    sku: 'CLK-004',
    createdAt: '2024-06-01T00:00:00.000Z',
    details: ['Accurate timekeeping', 'Decorative design', 'Easy to hang']
  },
  {
    id: '28',
    name: 'Clock 3',
    description: 'A unique clock to add style and function to your space.',
    price: 32.00,
    image: '/Clock_3.jpg',
    category: 'clocks',
    sku: 'CLK-003',
    createdAt: '2024-06-01T00:00:00.000Z',
    details: ['Accurate timekeeping', 'Decorative design', 'Easy to hang']
  },
  {
    id: '29',
    name: 'Clock @',
    description: 'A unique clock to add style and function to your space.',
    price: 30.00,
    image: '/Clock_@.jpg',
    category: 'clocks',
    sku: 'CLK-002',
    createdAt: '2024-06-01T00:00:00.000Z',
    details: ['Accurate timekeeping', 'Decorative design', 'Easy to hang']
  },
  {
    id: '30',
    name: 'Mirror 1',
    description: 'A decorative mirror to enhance your room.',
    price: 70.00,
    image: '/Mirror_1.jpg',
    category: 'mirrors',
    sku: 'MIR-001',
    createdAt: '2024-06-01T00:00:00.000Z',
    details: ['Elegant frame', 'High-quality glass', 'Easy to mount']
  },
  {
    id: '31',
    name: 'Clock Art 1',
    description: 'A unique clock to add style and function to your space.',
    price: 38.00,
    image: '/Clock_Art_1.jpg',
    category: 'clocks',
    sku: 'CLK-005',
    createdAt: '2024-06-01T00:00:00.000Z',
    details: ['Accurate timekeeping', 'Decorative design', 'Easy to hang']
  },
  {
    id: '32',
    name: 'Light 1',
    description: 'A modern light fixture to brighten your home.',
    price: 80.00,
    image: '/Light_1.jpg',
    category: 'lights',
    sku: 'LGT-001',
    createdAt: '2024-06-01T00:00:00.000Z',
    details: ['Energy efficient', 'Bright illumination', 'Sleek design']
  },
  // ... (continue for all other images in the public directory) ...
];

// Get all products
export const getAllProducts = async (): Promise<Product[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return products;
};

// Get featured products
export const getFeaturedProducts = async (): Promise<Product[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return products.filter(product => product.featured);
};

// Get product by ID
export const getProductById = async (id: string): Promise<Product | undefined> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 300));
  return products.find(product => product.id === id);
};

// Get products by category
export const getProductsByCategory = async (category: string): Promise<Product[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 400));
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};