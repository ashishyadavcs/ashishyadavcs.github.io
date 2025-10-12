import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/app/styles/registry";
import ClientLayout from "@/app/ClientLayout";
import { SITE_METADATA } from "@/app/constants";

// Configure fonts
const geistSans = Geist({
    subsets: ["latin"],
    variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
    subsets: ["latin"],
    variable: "--font-geist-mono",
});

// Export metadata for SEO
export const metadata = SITE_METADATA;

/**
 * Root layout component for the application
 * Handles font configuration, theme initialization, and global providers
 */
export default function RootLayout({ children }) {
    const fontClasses = `${geistSans.variable} ${geistMono.variable}`;

    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#3b82f6" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-title" content="Ashish Yadav Portfolio" />
                <meta name="application-name" content="Ashish Yadav Portfolio" />
                <meta name="msapplication-TileColor" content="#3b82f6" />
                <meta name="format-detection" content="telephone=no" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="canonical" href={SITE_METADATA.siteUrl} />
                <meta
                    name="google-site-verification"
                    content="6g2dD6ZYcYfD3YBYpGU0O2cSRZlSrufZqXcL7D_shzk"
                />
            </head>
            <body className={fontClasses}>
                <StyledComponentsRegistry>
                    <ClientLayout>{children}</ClientLayout>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
