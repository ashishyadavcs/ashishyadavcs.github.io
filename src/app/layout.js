import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "./components/Registry";
import Layout from "./components/layout";

// Configure fonts
const geistSans = Geist({
    subsets: ["latin"],
    variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
    subsets: ["latin"],
    variable: "--font-geist-mono",
});

export default function RootLayout({ children }) {
    const fontClasses = `${geistSans.variable} ${geistMono.variable}`;

    return (
        <html lang="en">
            <head>
                <meta
                    name="google-site-verification"
                    content="6g2dD6ZYcYfD3YBYpGU0O2cSRZlSrufZqXcL7D_shzk"
                />
            </head>
            <body className={fontClasses}>
                <StyledComponentsRegistry>
                    <Layout>{children}</Layout>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
