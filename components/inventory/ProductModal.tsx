'use client';

import { Product } from '@/types/product';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Heart, X, ZoomIn } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type ProductModalProps = {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  onAddToWishlist: (product: Product) => void;
};

export default function ProductModal({ product, isOpen, onClose, onAddToWishlist }: ProductModalProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  
  const toggleZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsZoomed(!isZoomed);
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-3xl max-h-[70vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-2xl font-bold text-amber-900 font-sans">{product.name}</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
          <div className="relative">
            <div 
              className={`relative rounded-lg overflow-hidden cursor-pointer ${isZoomed ? 'h-[250px]' : 'h-[180px]'}`}
              onClick={toggleZoom}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ 
                  objectFit: isZoomed ? 'contain' : 'cover',
                  transition: 'all 0.3s ease'
                }}
                quality={90}
              />
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute bottom-2 right-2 bg-white/80 hover:bg-white/90 rounded-full"
                onClick={toggleZoom}
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col">
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-2xl font-bold text-amber-900">${product.price.toFixed(2)}</span>
                <span className="text-sm text-gray-500">SKU: {product.sku}</span>
              </div>
              
              <div className="mb-2">
                <span className="inline-block px-3 py-1 text-sm rounded-full font-medium bg-amber-100 text-amber-800">
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </span>
              </div>
            </div>
            
            <div className="prose prose-amber mb-6 font-serif">
              <p>{product.description}</p>
              {product.details && (
                <div className="mt-4">
                  <h4 className="text-lg font-medium mb-2 font-sans">Details</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {product.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            <div className="mt-auto">
              <Button 
                onClick={() => onAddToWishlist(product)}
                className="w-full bg-amber-800 hover:bg-amber-900 text-white"
              >
                <Heart className="h-4 w-4 mr-2" />
                Add to Wishlist
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}