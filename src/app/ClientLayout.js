"use client";

import { useState, useEffect } from "react";
import GlobalStyles from "@/app/styles/GlobalStyles";
import { ThemeProvider } from "@/app/hooks/useTheme";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import { LAYOUT } from "@/app/constants";

/**
 * Main layout styles using constants
 */
const mainStyles = {
    minHeight: LAYOUT.MIN_HEIGHT,
    paddingTop: LAYOUT.HEADER_HEIGHT,
};

/**
 * Client-side layout component that provides theme context and global styling
 * Handles hydration mismatch by showing content only after mounting
 */
export default function ClientLayout({ children }) {
    const [mounted, setMounted] = useState(false);

    // Ensure client-side hydration is complete before rendering children
    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <ThemeProvider>
            <GlobalStyles />
            <Header />
            <main style={mainStyles}>{mounted ? children : null}</main>
            <Footer />
        </ThemeProvider>
    );
}
