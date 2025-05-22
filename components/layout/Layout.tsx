import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <div className="pt-16 min-h-screen">
        {children}
      </div>
      <Footer />
    </>
  );
}