import StyledComponentsRegistry from "./components/Registry";
import Layout from "./components/layout";
import GlobalCSS from "./styles/globals.js";
import config from "public/config";
import SITE_METADATA from "./constants";

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
    icons: {
        icon: [
            { url: SITE_METADATA.logo, sizes: "32x32", type: "image/png" },
            { url: SITE_METADATA.logo, sizes: "16x16", type: "image/png" },
        ],
        apple: [{ url: SITE_METADATA.logo, sizes: "180x180", type: "image/png" }],
        shortcut: [SITE_METADATA.logo],
    },
    alternates: {
        canonical: seo.url,
    },
    other: {
        "google-site-verification": "Do2LFMpDl6plWQ28iz1tDXeMC1VlPZBLyXBYhAYUVaM",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="preload"
                    href="/images/bg.jpg"
                    as="image"
                    type="image/jpeg"
                    fetchPriority="high"
                />
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
