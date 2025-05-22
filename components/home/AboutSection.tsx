'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-amber-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden"
          >
            <Image
              src="https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1280"
              alt="Artisan at work"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6 font-sans">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-700 font-serif">
              <p className="mb-4">
                Ayok&apos;s accesories began as a small family business, founded by Mahlon&apos;s mother with a passion for preserving traditional craftsmanship in a world of mass production.
              </p>
              <p className="mb-4">
                Each piece in our collection is carefully handcrafted using time-honored techniques and the finest materials. From our signature chairs that blend comfort with artistic design, to our unique artworks that tell stories through color and texture, to our durable traveling bags that combine functionality with style – every item carries the distinct mark of its creator.
              </p>
              <p>
                We believe in the beauty of imperfection and the value of items made with care and intention. When you bring an Artisan Treasure into your home, you&apos;re not just buying a product – you&apos;re becoming part of a story that celebrates craftsmanship, sustainability, and the human touch.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}