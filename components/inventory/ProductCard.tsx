'use client';

import { Product } from '@/types/product';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type ProductCardProps = {
  product: Product;
  onProductClick: (product: Product) => void;
};

export default function ProductCard({ product, onProductClick }: ProductCardProps) {
  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      whileHover={{ y: -5 }}
      onClick={() => onProductClick(product)}
    >
      <div className="relative h-64 w-full">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          loading="lazy"
        />
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-gray-800 font-sans line-clamp-1">{product.name}</h3>
          <span className={cn(
            "px-2 py-1 text-xs rounded-full font-medium",
            product.category === 'chairs' && "bg-amber-100 text-amber-800",
            product.category === 'artworks' && "bg-blue-100 text-blue-800",
            product.category === 'bags' && "bg-green-100 text-green-800"
          )}>
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2 font-serif">{product.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="font-bold text-amber-900">${product.price.toFixed(2)}</span>
          <span className="text-xs text-gray-500">SKU: {product.sku}</span>
        </div>
      </div>
    </motion.div>
  );
}