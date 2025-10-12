/**
 * SEO Component for managing page-specific SEO metadata and structured data
 * This component handles meta tags, structured data, and social media optimization
 */

"use client";

import { useEffect } from "react";
import { generatePageMetadata, createStructuredDataScript } from "@/app/utils/seo";
import { SITE_METADATA } from "@/app/constants";

const SEO = ({
    title,
    description,
    keywords,
    path,
    image,
    structuredData = [],
    noindex = false,
    nofollow = false,
    canonical,
}) => {
    useEffect(() => {
        // Generate metadata
        const metadata = generatePageMetadata({
            title,
            description,
            keywords,
            path,
            image,
        });

        // Update document title
        document.title = metadata.title;

        // Function to update or create meta tag
        const updateMetaTag = (selector, content) => {
            let tag = document.querySelector(selector);
            if (!tag) {
                tag = document.createElement("meta");
                const [property, value] = selector.split('="');
                const attr = property.includes("property") ? "property" : "name";
                tag.setAttribute(attr, value.replace('"]', ""));
                document.head.appendChild(tag);
            }
            tag.content = content;
        };

        // Function to update or create link tag
        const updateLinkTag = (rel, href) => {
            let link = document.querySelector(`link[rel="${rel}"]`);
            if (!link) {
                link = document.createElement("link");
                link.rel = rel;
                document.head.appendChild(link);
            }
            link.href = href;
        };

        // Update basic meta tags
        updateMetaTag('meta[name="description"]', metadata.description);
        updateMetaTag('meta[name="keywords"]', metadata.keywords);
        updateMetaTag('meta[name="author"]', metadata.author);

        // Update robots meta tag
        const robotsContent = [];
        if (noindex) robotsContent.push("noindex");
        else robotsContent.push("index");

        if (nofollow) robotsContent.push("nofollow");
        else robotsContent.push("follow");

        updateMetaTag('meta[name="robots"]', robotsContent.join(", "));

        // Update Open Graph tags
        updateMetaTag('meta[property="og:title"]', metadata.openGraph.title);
        updateMetaTag('meta[property="og:description"]', metadata.openGraph.description);
        updateMetaTag('meta[property="og:url"]', metadata.openGraph.url);
        updateMetaTag('meta[property="og:type"]', metadata.openGraph.type);
        updateMetaTag('meta[property="og:locale"]', metadata.openGraph.locale);
        updateMetaTag('meta[property="og:site_name"]', metadata.openGraph.siteName);

        if (metadata.openGraph.images?.[0]) {
            updateMetaTag('meta[property="og:image"]', metadata.openGraph.images[0].url);
            updateMetaTag(
                'meta[property="og:image:width"]',
                metadata.openGraph.images[0].width?.toString() || "1200"
            );
            updateMetaTag(
                'meta[property="og:image:height"]',
                metadata.openGraph.images[0].height?.toString() || "630"
            );
            updateMetaTag(
                'meta[property="og:image:alt"]',
                metadata.openGraph.images[0].alt || metadata.title
            );
        }

        // Update Twitter tags
        updateMetaTag('meta[name="twitter:card"]', metadata.twitter.card);
        updateMetaTag('meta[name="twitter:title"]', metadata.twitter.title);
        updateMetaTag('meta[name="twitter:description"]', metadata.twitter.description);
        updateMetaTag('meta[name="twitter:creator"]', metadata.twitter.creator);

        if (metadata.twitter.images?.[0]) {
            updateMetaTag('meta[name="twitter:image"]', metadata.twitter.images[0]);
        }

        // Update canonical URL
        const canonicalUrl = canonical || metadata.alternates.canonical;
        updateLinkTag("canonical", canonicalUrl);

        // Remove existing structured data
        const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
        existingScripts.forEach(script => script.remove());

        // Add new structured data
        structuredData.forEach(data => {
            const script = document.createElement("script");
            Object.assign(script, createStructuredDataScript(data));
            document.head.appendChild(script);
        });

        // Cleanup function
        return () => {
            const scriptsToRemove = document.querySelectorAll('script[type="application/ld+json"]');
            scriptsToRemove.forEach(script => script.remove());
        };
    }, [title, description, keywords, path, image, structuredData, noindex, nofollow, canonical]);

    // This component doesn't render anything
    return null;
};

export default SEO;
