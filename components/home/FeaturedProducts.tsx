'use client';

import { useEffect, useState } from 'react';
import ProductCard from '@/components/inventory/ProductCard';
import { Product } from '@/types/product';
import { getFeaturedProducts } from '@/lib/productService';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const productsToShow = 3;

  useEffect(() => {
    const fetchProducts = async () => {
      const featuredProducts = await getFeaturedProducts();
      setProducts(featuredProducts);
    };
    
    fetchProducts();
  }, []);

  const handlePrev = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? Math.max(0, products.length - productsToShow) : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => 
      prevIndex >= products.length - productsToShow ? 0 : prevIndex + 1
    );
  };

  const visibleProducts = products.slice(currentIndex, currentIndex + productsToShow);

  if (products.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4 font-sans">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-serif">
            Explore our handpicked selection of exceptional artisanal pieces, crafted with attention to detail and passion.
          </p>
        </motion.div>
        
        <div className="relative">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-medium text-gray-800 font-sans">Our Collection</h3>
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={handlePrev}
                className="border-amber-200 hover:bg-amber-100 text-amber-800"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={handleNext}
                className="border-amber-200 hover:bg-amber-100 text-amber-800"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {visibleProducts.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <ProductCard product={product} onProductClick={() => {}} />
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Button asChild className="bg-amber-800 hover:bg-amber-900 text-white">
              <Link href="/inventory">
                View All Products
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}