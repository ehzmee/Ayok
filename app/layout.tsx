import './globals.css';
import type { Metadata } from 'next';
import { Inter, Montserrat, Merriweather } from 'next/font/google';
import Layout from '@/components/layout/Layout';
import { ThemeProvider } from '@/components/theme/ThemeProvider';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const merriweather = Merriweather({ 
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-merriweather',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ayok\'s accesories | Handcrafted Furniture and Decor',
  description: 'Discover unique handcrafted chairs, artworks, and traveling bags made with passion and artisanal quality.',
  keywords: 'artisan, handcrafted, chairs, artwork, bags, handmade, furniture, decor',
  openGraph: {
    title: 'Ayok\'s accesories | Handcrafted Furniture and Decor',
    description: 'Discover unique handcrafted chairs, artworks, and traveling bags made with passion and artisanal quality.',
    url: 'https://artisantreasures.com',
    siteName: 'Ayok\'s accesories',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${merriweather.variable} font-serif`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Layout>
            {children}
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}