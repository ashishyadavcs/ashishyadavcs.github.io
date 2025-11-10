import projects from "public/config/projects";
import { SITE_METADATA } from "@/app/constants";

export function generateSitemap() {
    const baseUrl = SITE_METADATA.siteUrl;
    const currentDate = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format

    const staticPages = [
        {
            url: baseUrl,
            lastmod: currentDate,
            changefreq: "weekly",
            priority: "1.0",
        },
        {
            url: `${baseUrl}/about`,
            lastmod: currentDate,
            changefreq: "monthly",
            priority: "0.8",
        },
        {
            url: `${baseUrl}/projects`,
            lastmod: currentDate,
            changefreq: "weekly",
            priority: "0.9",
        },
        {
            url: `${baseUrl}/contact`,
            lastmod: currentDate,
            changefreq: "monthly",
            priority: "0.7",
        },
    ];

    const projectPages = projects.map(project => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastmod: currentDate,
        changefreq: "monthly",
        priority: "0.6",
    }));

    const allPages = [...staticPages, ...projectPages];

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allPages
    .map(
        page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join("\n")}
</urlset>`;

    return sitemapContent;
}

export function generateRobotsTxt() {
    const baseUrl = SITE_METADATA.siteUrl;

    return `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Allow access to static assets
Allow: /_next/static/
Allow: /images/
Allow: /icons/
Allow: /*.css$
Allow: /*.js$

# Disallow admin or private paths (if any)
# Disallow: /admin/
# Disallow: /private/

# Allow common crawlers
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: LinkedInBot
Allow: /

User-agent: TwitterBot
Allow: /`;
}

/**
 * SEO performance monitoring utilities
 */
export class SEOMonitor {
    static logPageView(path) {
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("config", "GA_MEASUREMENT_ID", {
                page_path: path,
            });
        }
    }

    static trackSEOEvent(eventName, parameters = {}) {
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", eventName, {
                event_category: "SEO",
                ...parameters,
            });
        }
    }
}

/**
 * Schema.org markup utilities
 */
export const SchemaMarkup = {
    /**
     * Generate FAQ schema for a page
     */
    generateFAQSchema(faqs) {
        return {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(faq => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                },
            })),
        };
    },

    /**
     * Generate article schema for blog posts or case studies
     */
    generateArticleSchema(article) {
        return {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.description,
            author: {
                "@type": "Person",
                name: SITE_METADATA.author,
            },
            publisher: {
                "@type": "Person",
                name: SITE_METADATA.author,
            },
            datePublished: article.publishDate,
            dateModified: article.modifiedDate || article.publishDate,
            image: article.image ? `${SITE_METADATA.siteUrl}${article.image}` : undefined,
            url: `${SITE_METADATA.siteUrl}${article.url}`,
        };
    },

    /**
     * Generate service schema for professional services
     */
    generateServiceSchema(service) {
        return {
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.name,
            description: service.description,
            provider: {
                "@type": "Person",
                name: SITE_METADATA.author,
            },
            areaServed: "Worldwide",
            hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Web Development Services",
                itemListElement: service.offerings?.map(offering => ({
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: offering.name,
                        description: offering.description,
                    },
                })),
            },
        };
    },
};

const SEOUtils = {
    generateSitemap,
    generateRobotsTxt,
    SEOMonitor,
    SchemaMarkup,
};

export default SEOUtils;
