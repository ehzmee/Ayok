'use client';

import { Product } from '@/types/product';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';

type ProductGridProps = {
  products: Product[];
  onProductClick: (product: Product) => void;
};

export default function ProductGrid({ products, onProductClick }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No products found. Try adjusting your filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
        >
          <ProductCard 
            product={product} 
            onProductClick={onProductClick} 
          />
        </motion.div>
      ))}
    </div>
  );
}