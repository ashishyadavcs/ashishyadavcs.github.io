'use client';

import { useState, useEffect } from 'react';
import GlobalStyles from '@/app/styles/GlobalStyles';
import { ThemeProvider } from '@/app/hooks/useTheme';
import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';

export default function ClientLayout({ children }) {
  // Client-side state
  const [mounted, setMounted] = useState(false);

  // After mounting, we have access to the window
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ThemeProvider>
      <GlobalStyles />
      <Navbar />
      <main style={{ minHeight: '100vh', paddingTop: '80px' }}>
        {mounted && children}
      </main>
      <Footer />
    </ThemeProvider>
  );
}