export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'chairs' | 'artworks' | 'bags' | 'tables' | 'vases' | 'lamps' | 'clocks' | 'mirrors' | 'lights';
  sku: string;
  createdAt: string;
  featured?: boolean;
  details?: string[];
};