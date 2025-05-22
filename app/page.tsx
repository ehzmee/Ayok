'use client';

import { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import AboutSection from '@/components/home/AboutSection';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  useEffect(() => {
    // Smooth scroll to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <FeaturedProducts />
      <AboutSection />
      <Toaster />
    </main>
  );
}