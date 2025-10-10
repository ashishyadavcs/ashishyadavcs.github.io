import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/app/styles/registry";
import ClientLayout from "@/app/ClientLayout";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Ashish Yadav - Portfolio",
    description: "A portfolio showcasing my projects and skills",
    keywords: "portfolio, developer, web design, frontend, backend, full-stack",
};

export default function RootLayout({ children }) {
    // After mounting, we have access to the window
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <StyledComponentsRegistry>
                    <ClientLayout>{children}</ClientLayout>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
