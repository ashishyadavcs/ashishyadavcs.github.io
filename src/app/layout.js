import { Geist, Geist_Mono } from "next/font/google";
import StyledComponentsRegistry from "./components/Registry";
import Layout from "./components/layout";
import GlobalCSS from "./styles/globals.js";
import config from "public/config";

const { seo } = config;

export const metadata = {
    title: {
        default: seo.title,
        template: `%s | ${seo.siteName}`,
    },
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: seo.author.name, url: seo.url }],
    creator: seo.author.name,
    publisher: seo.author.name,
    robots: seo.robots,
    openGraph: seo.openGraph,
    twitter: seo.twitter,
    verification: seo.verification,
    metadataBase: new URL(seo.url),
    alternates: {
        canonical: seo.url,
    },
    other: {
        "google-site-verification": "6g2dD6ZYcYfD3YBYpGU0O2cSRZlSrufZqXcL7D_shzk",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(seo.structuredData),
                    }}
                />
            </head>
            <body>
                <StyledComponentsRegistry>
                    <GlobalCSS />
                    <Layout>{children}</Layout>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
