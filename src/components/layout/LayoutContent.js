'use client';

import Header from './Header';
import Footer from './Footer';

export default function LayoutContent({ children }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
