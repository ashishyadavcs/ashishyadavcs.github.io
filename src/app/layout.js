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
            <body className={fontClasses}>
                <StyledComponentsRegistry>
                    <ClientLayout>{children}</ClientLayout>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
