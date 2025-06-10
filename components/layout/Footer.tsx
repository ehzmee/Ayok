import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white mt-16">
      <div className="container mx-auto px-4 py-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Address</h3>
            <p className="mb-4 text-amber-100">
             22 Waff Rd, off Independence Way, City Centre, Nasarawa 800283, Kaduna            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-amber-200 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://www.instagram.com/schon_bypurplebox?igsh=MW16M2xkbzQ3anBzZw==" className="text-white hover:text-amber-200 transition-colors duration-200">
              <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-amber-200 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-amber-100 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/inventory" className="text-amber-100 hover:text-white transition-colors duration-200">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-amber-100 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-amber-100">
              <p className="mt-2">Email: hello@artisantreasures.com</p>
              <p>Phone: +234 803 919 7920</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-amber-800 mt-8 pt-6 text-center text-amber-200">
          <p>&copy; {new Date().getFullYear()} Purple Box. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}