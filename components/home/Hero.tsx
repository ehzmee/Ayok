'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-amber-50">
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg?auto=compress&cs=tinysrgb&w=1920")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }}
      />
      
      <div className="container mx-auto px-4 py-12 z-10 max-w-7xl">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-amber-900 font-sans"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Schön By Purple Box
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 text-gray-700 max-w-2xl font-serif"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <Button asChild className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-6 rounded-md">
              <Link href="/inventory">
                Explore Collection
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-amber-800 text-amber-800 hover:bg-amber-50 px-8 py-6 rounded-md">
              <Link href="#about">
                Our Story
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}