'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Heart, Menu, X, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white shadow-md py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <ShoppingBag className={cn(
            "h-8 w-8 mr-2 transition-colors duration-300",
            isScrolled ? "text-amber-900" : "text-amber-800"
          )} />
          <span className={cn(
            "font-bold text-xl md:text-2xl transition-colors duration-300",
            isScrolled ? "text-amber-900" : "text-amber-800"
          )}>
            Ayok's accesories
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className={cn(
            "font-medium hover:text-amber-700 transition-colors duration-200",
            isScrolled ? "text-gray-800" : "text-gray-800"
          )}>
            Home
          </Link>
          <Link href="/inventory" className={cn(
            "font-medium hover:text-amber-700 transition-colors duration-200",
            isScrolled ? "text-gray-800" : "text-gray-800"
          )}>
            Shop
          </Link>
          <Link href="/#about" className={cn(
            "font-medium hover:text-amber-700 transition-colors duration-200",
            isScrolled ? "text-gray-800" : "text-gray-800"
          )}>
            About
          </Link>
          <Button variant="ghost" size="icon" aria-label="Wishlist">
            <Heart className="h-5 w-5 text-amber-900" />
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Menu">
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-amber-900" />
            ) : (
              <Menu className="h-6 w-6 text-amber-900" />
            )}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link 
                href="/" 
                className="font-medium text-gray-800 hover:text-amber-700 py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/inventory" 
                className="font-medium text-gray-800 hover:text-amber-700 py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                href="/#about" 
                className="font-medium text-gray-800 hover:text-amber-700 py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <div className="flex items-center py-2">
                <Button variant="ghost" size="sm" className="text-amber-900 font-medium">
                  <Heart className="h-5 w-5 mr-2" />
                  Wishlist
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}