'use client';

import { useState, useEffect } from 'react';
import ProductGrid from '@/components/inventory/ProductGrid';
import FilterSystem from '@/components/inventory/FilterSystem';
import { Product } from '@/types/product';
import { getAllProducts } from '@/lib/productService';
import ProductModal from '@/components/inventory/ProductModal';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

export default function InventoryPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [sortOption, setSortOption] = useState<string>('newest');
  const [categories, setCategories] = useState<string[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getAllProducts();
      setProducts(allProducts);
      setFilteredProducts(allProducts);
      // Compute unique categories from products
      const uniqueCategories = Array.from(new Set(allProducts.map(p => p.category)));
      setCategories(uniqueCategories);
    };
    
    fetchProducts();
  }, []);

  useEffect(() => {
    let result = [...products];
    
    // Apply category filter
    if (categoryFilter !== 'all') {
      result = result.filter(product => product.category === categoryFilter);
    }
    
    // Apply sorting
    switch (sortOption) {
      case 'price-high-low':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'price-low-high':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'newest':
        result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      default:
        break;
    }
    
    setFilteredProducts(result);
  }, [products, categoryFilter, sortOption]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleAddToWishlist = (product: Product) => {
    toast({
      title: "Added to Wishlist",
      description: `${product.name} has been added to your wishlist.`,
      duration: 3000,
    });
  };

  const clearFilters = () => {
    setCategoryFilter('all');
    setSortOption('newest');
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <motion.h1 
        className="text-4xl md:text-5xl font-bold mb-6 text-center text-amber-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Artisan Collection
      </motion.h1>
      
      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <FilterSystem 
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          sortOption={sortOption}
          setSortOption={setSortOption}
          clearFilters={clearFilters}
          categories={categories}
        />
      </motion.div>
      
      <ProductGrid 
        products={filteredProducts} 
        onProductClick={handleProductClick} 
      />
      
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          isOpen={modalOpen} 
          onClose={handleCloseModal} 
          onAddToWishlist={handleAddToWishlist}
        />
      )}
      
      <Toaster />
    </div>
  );
}