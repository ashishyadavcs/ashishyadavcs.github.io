import FAQ from "@/app/components/FAQ";
import React from "react";
import config from "public/config";

export const metadata = {
    title: config.seo.pages.faqs.title,
    description: config.seo.pages.faqs.description,
    keywords: config.seo.pages.faqs.keywords,
    openGraph: {
        title: config.seo.pages.faqs.title,
        description: config.seo.pages.faqs.description,
        url: `${config.seo.url}/faqs`,
        type: "website",
        siteName: config.seo.siteName,
    },
    twitter: {
        card: "summary_large_image",
        title: config.seo.pages.faqs.title,
        description: config.seo.pages.faqs.description,
        creator: config.seo.author.twitter,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: `${config.seo.url}/faqs`,
    },
};

const Page = () => {
    return <FAQ />;
};

export default Page;
