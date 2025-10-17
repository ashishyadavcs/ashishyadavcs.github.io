/**
 * SEO utility functions for generating page-specific metadata
 */

import { SITE_METADATA } from "@/app/constants";
import config from "../../../public/data/index.js";

/**
 * Generate metadata for a specific page
 * @param {Object} options - Page metadata options
 * @param {string} options.title - Page title
 * @param {string} options.description - Page description
 * @param {string} options.keywords - Additional keywords for the page
 * @param {string} options.path - Page path (without domain)
 * @param {string} options.image - Custom image for the page
 * @param {Object} options.openGraph - Custom Open Graph data
 * @param {Object} options.twitter - Custom Twitter data
 * @returns {Object} Complete metadata object for Next.js
 */
export function generatePageMetadata(options = {}) {
    const {
        title,
        description,
        keywords = "",
        path = "",
        image,
        openGraph = {},
        twitter = {},
    } = options;

    const pageUrl = `${SITE_METADATA.siteUrl}${path}`;
    const pageTitle = title ? `${title} | ${config.personal.contacts.name}` : SITE_METADATA.title;
    const pageDescription = description || SITE_METADATA.description;
    const pageKeywords = keywords
        ? `${SITE_METADATA.keywords}, ${keywords}`
        : SITE_METADATA.keywords;
    const pageImage = image || SITE_METADATA.openGraph.images[0].url;

    return {
        title: pageTitle,
        description: pageDescription,
        keywords: pageKeywords,
        author: SITE_METADATA.author,
        creator: SITE_METADATA.creator,
        publisher: SITE_METADATA.publisher,

        // Open Graph
        openGraph: {
            ...SITE_METADATA.openGraph,
            title: pageTitle,
            description: pageDescription,
            url: pageUrl,
            images: [
                {
                    url: pageImage,
                    width: 1200,
                    height: 630,
                    alt: pageTitle,
                },
            ],
            ...openGraph,
        },

        // Twitter
        twitter: {
            ...SITE_METADATA.twitter,
            title: pageTitle,
            description: pageDescription,
            images: [pageImage],
            ...twitter,
        },

        // Canonical URL
        alternates: {
            canonical: pageUrl,
        },

        // Robots
        robots: SITE_METADATA.robots,

        // Verification
        verification: SITE_METADATA.verification,

        // Other
        other: SITE_METADATA.other,
    };
}

/**
 * Generate structured data for a person (JSON-LD)
 * @returns {Object} Person structured data
 */
export function generatePersonStructuredData() {
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        name: config.personal.contacts.name,
        jobTitle: "Software Engineer",
        description: "A passionate full-stack developer with expertise in modern web technologies",
        email: config.personal.contacts.email,
        telephone: config.personal.contacts.phone,
        address: {
            "@type": "PostalAddress",
            addressLocality: config.personal.contacts.address.split(",")[0].trim(),
            addressCountry: "India",
        },
        url: SITE_METADATA.siteUrl,
        image: `${SITE_METADATA.siteUrl}${config.personal.image}`,
        sameAs: [
            config.personal.contacts.socialMedia.linkedin,
            config.personal.contacts.socialMedia.github,
            config.personal.contacts.socialMedia.twitter,
        ],
        knowsAbout: [
            "JavaScript",
            "React",
            "Next.js",
            "Node.js",
            "Full Stack Development",
            "Frontend Development",
            "Backend Development",
            "Web Development",
            "Software Engineering",
        ],
        alumniOf: {
            "@type": "EducationalOrganization",
            name: "Educational Institution", // This can be updated with actual education data
        },
        worksFor: {
            "@type": "Organization",
            name: "Freelance Developer",
        },
    };
}

/**
 * Generate structured data for a portfolio website (JSON-LD)
 * @returns {Object} Website structured data
 */
export function generateWebsiteStructuredData() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE_METADATA.title,
        description: SITE_METADATA.description,
        url: SITE_METADATA.siteUrl,
        author: {
            "@type": "Person",
            name: config.personal.contacts.name,
            email: config.personal.contacts.email,
        },
        publisher: {
            "@type": "Person",
            name: config.personal.contacts.name,
        },
        inLanguage: "en-US",
        copyrightYear: new Date().getFullYear(),
        genre: "Portfolio",
        keywords: SITE_METADATA.keywords,
    };
}

/**
 * Generate structured data for a project (JSON-LD)
 * @param {Object} project - Project data
 * @returns {Object} Creative work structured data
 */
export function generateProjectStructuredData(project) {
    return {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        author: {
            "@type": "Person",
            name: config.personal.contacts.name,
        },
        creator: {
            "@type": "Person",
            name: config.personal.contacts.name,
        },
        dateCreated: project.date || new Date().toISOString(),
        url: `${SITE_METADATA.siteUrl}/projects/${project.slug}`,
        image: project.image ? `${SITE_METADATA.siteUrl}${project.image}` : undefined,
        keywords: project.tags ? project.tags.join(", ") : undefined,
        genre: "Web Development Project",
        isAccessibleForFree: true,
        license: "All Rights Reserved",
    };
}

/**
 * Generate breadcrumb structured data (JSON-LD)
 * @param {Array} breadcrumbs - Array of breadcrumb items
 * @returns {Object} Breadcrumb list structured data
 */
export function generateBreadcrumbStructuredData(breadcrumbs) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((breadcrumb, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: breadcrumb.name,
            item: `${SITE_METADATA.siteUrl}${breadcrumb.path}`,
        })),
    };
}

/**
 * Common page metadata templates
 */
export const PAGE_METADATA = {
    home: {
        title: "Home",
        description:
            "Welcome to my portfolio. I'm a Full Stack Developer creating modern web applications with React, Next.js, and Node.js. Explore my projects and get in touch.",
        keywords: "home, portfolio, full stack developer, web developer, React developer",
        path: "/",
    },

    about: {
        title: "About Me",
        description:
            "Learn more about my journey as a Full Stack Developer. Discover my skills, experience, education, and passion for creating exceptional web applications.",
        keywords:
            "about, skills, experience, education, full stack developer, software engineer, biography",
        path: "/about",
    },

    projects: {
        title: "Projects",
        description:
            "Explore my portfolio of web development projects. From React applications to full-stack solutions, see how I solve real-world problems with code.",
        keywords:
            "projects, portfolio, web development, React projects, Next.js applications, full stack projects",
        path: "/projects",
    },

    contact: {
        title: "Contact Me",
        description:
            "Get in touch to discuss your next project. I'm available for freelance work, full-time opportunities, and collaboration on exciting web development projects.",
        keywords:
            "contact, hire developer, freelance, full-time, web development services, consultation",
        path: "/contact",
    },
};

/**
 * Generate project-specific metadata
 * @param {Object} project - Project data
 * @returns {Object} Project page metadata
 */
export function generateProjectMetadata(project) {
    const projectKeywords = project.tags
        ? `${project.tags.join(", ")}, project, case study, web development`
        : "project, case study, web development";

    return generatePageMetadata({
        title: project.title,
        description:
            project.description ||
            `Explore the ${project.title} project showcasing modern web development techniques and best practices.`,
        keywords: projectKeywords,
        path: `/projects/${project.slug}`,
        image: project.image ? `${SITE_METADATA.siteUrl}${project.image}` : undefined,
    });
}

/**
 * Utility to inject structured data script
 * @param {Object} structuredData - Structured data object
 * @returns {string} Script tag with structured data
 */
export function createStructuredDataScript(structuredData) {
    return {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
            __html: JSON.stringify(structuredData),
        },
    };
}
