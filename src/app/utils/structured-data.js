import { SITE_METADATA } from "@/app/constants";
import config from "../../../public/data/index.js";

/**
 * Generate comprehensive JSON-LD structured data for SEO
 * @param {string} type - Type of structured data to generate
 * @param {object} data - Additional data for the structured data
 * @returns {object} Structured data object
 */
export function generateStructuredData(type, data = {}) {
    const baseUrl = SITE_METADATA.metadataBase.origin;

    const baseStructuredData = {
        "@context": "https://schema.org",
        "@graph": [],
    };

    // Always include Person and Organization schema
    baseStructuredData["@graph"].push(
        generatePersonSchema(baseUrl),
        generateOrganizationSchema(baseUrl),
        generateWebSiteSchema(baseUrl)
    );

    // Add type-specific schemas
    switch (type) {
        case "home":
            baseStructuredData["@graph"].push(
                generateWebPageSchema(
                    baseUrl,
                    "HomePage",
                    "Home",
                    "Portfolio homepage of Ashish Yadav, Full Stack Developer"
                ),
                generateBreadcrumbSchema(baseUrl, [{ name: "Home", url: baseUrl }])
            );
            break;

        case "about":
            baseStructuredData["@graph"].push(
                generateWebPageSchema(
                    baseUrl,
                    "AboutPage",
                    "About",
                    "About Ashish Yadav - Full Stack Developer"
                ),
                generateBreadcrumbSchema(baseUrl, [
                    { name: "Home", url: baseUrl },
                    { name: "About", url: `${baseUrl}/about` },
                ])
            );
            break;

        case "projects":
            baseStructuredData["@graph"].push(
                generateWebPageSchema(
                    baseUrl,
                    "CollectionPage",
                    "Projects",
                    "Portfolio projects by Ashish Yadav"
                ),
                generateBreadcrumbSchema(baseUrl, [
                    { name: "Home", url: baseUrl },
                    { name: "Projects", url: `${baseUrl}/projects` },
                ])
            );
            break;

        case "project":
            if (data.project) {
                baseStructuredData["@graph"].push(
                    generateCreativeWorkSchema(baseUrl, data.project),
                    generateWebPageSchema(
                        baseUrl,
                        "ItemPage",
                        data.project.title,
                        data.project.description
                    ),
                    generateBreadcrumbSchema(baseUrl, [
                        { name: "Home", url: baseUrl },
                        { name: "Projects", url: `${baseUrl}/projects` },
                        {
                            name: data.project.title,
                            url: `${baseUrl}/projects/${data.project.slug}`,
                        },
                    ])
                );
            }
            break;

        case "contact":
            baseStructuredData["@graph"].push(
                generateWebPageSchema(
                    baseUrl,
                    "ContactPage",
                    "Contact",
                    "Contact Ashish Yadav for web development projects"
                ),
                generateBreadcrumbSchema(baseUrl, [
                    { name: "Home", url: baseUrl },
                    { name: "Contact", url: `${baseUrl}/contact` },
                ])
            );
            break;
    }

    return baseStructuredData;
}

function generatePersonSchema(baseUrl) {
    return {
        "@type": "Person",
        "@id": `${baseUrl}/#person`,
        name: config.personal.contacts.name,
        givenName: "Ashish",
        familyName: "Yadav",
        jobTitle: "Full Stack Developer",
        description:
            "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
        url: baseUrl,
        image: {
            "@type": "ImageObject",
            url: `${baseUrl}${config.personal.image}`,
            width: 400,
            height: 400,
            caption: "Ashish Yadav - Full Stack Developer",
        },
        sameAs: [
            config.personal.contacts.socialMedia.github,
            config.personal.contacts.socialMedia.linkedin,
            config.personal.contacts.socialMedia.twitter,
        ],
        address: {
            "@type": "PostalAddress",
            addressLocality: "Noida",
            addressRegion: "Uttar Pradesh",
            addressCountry: "IN",
        },
        email: config.personal.contacts.email,
        telephone: config.personal.contacts.phone,
        worksFor: {
            "@id": `${baseUrl}/#organization`,
        },
        knowsAbout: [
            "React",
            "Next.js",
            "Node.js",
            "JavaScript",
            "TypeScript",
            "Full Stack Development",
            "Web Development",
            "Software Engineering",
        ],
        alumniOf: {
            "@type": "EducationalOrganization",
            name: "Educational Institution", // Replace with actual institution
        },
    };
}

function generateOrganizationSchema(baseUrl) {
    return {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: "Ashish Yadav - Freelance Developer",
        url: baseUrl,
        logo: {
            "@type": "ImageObject",
            url: `${baseUrl}/images/logo.png`,
            width: 200,
            height: 200,
        },
        founder: {
            "@id": `${baseUrl}/#person`,
        },
        foundingDate: "2020", // Replace with actual date
        address: {
            "@type": "PostalAddress",
            addressLocality: "Noida",
            addressRegion: "Uttar Pradesh",
            addressCountry: "IN",
        },
        contactPoint: {
            "@type": "ContactPoint",
            telephone: config.personal.contacts.phone,
            contactType: "Customer Service",
            email: config.personal.contacts.email,
        },
    };
}

function generateWebSiteSchema(baseUrl) {
    return {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "Ashish Yadav Portfolio",
        description: SITE_METADATA.description,
        publisher: {
            "@id": `${baseUrl}/#person`,
        },
        inLanguage: "en-US",
        potentialAction: [
            {
                "@type": "SearchAction",
                target: {
                    "@type": "EntryPoint",
                    urlTemplate: `${baseUrl}/search?q={search_term_string}`,
                },
                "query-input": "required name=search_term_string",
            },
        ],
    };
}

function generateWebPageSchema(baseUrl, pageType, name, description) {
    return {
        "@type": pageType,
        "@id": `${baseUrl}/#webpage`,
        url: baseUrl,
        name: name,
        description: description,
        isPartOf: {
            "@id": `${baseUrl}/#website`,
        },
        about: {
            "@id": `${baseUrl}/#person`,
        },
        inLanguage: "en-US",
        datePublished: new Date().toISOString(),
        dateModified: new Date().toISOString(),
    };
}

function generateCreativeWorkSchema(baseUrl, project) {
    return {
        "@type": "CreativeWork",
        "@id": `${baseUrl}/projects/${project.slug}#creativework`,
        name: project.title,
        description: project.description,
        url: `${baseUrl}/projects/${project.slug}`,
        image: `${baseUrl}${project.image}`,
        creator: {
            "@id": `${baseUrl}/#person`,
        },
        author: {
            "@id": `${baseUrl}/#person`,
        },
        publisher: {
            "@id": `${baseUrl}/#person`,
        },
        dateCreated: new Date().toISOString(),
        datePublished: new Date().toISOString(),
        keywords: project.tags,
        genre: "Web Development",
        inLanguage: "en-US",
        isAccessibleForFree: true,
        license: "MIT", // Adjust based on your license
        copyrightHolder: {
            "@id": `${baseUrl}/#person`,
        },
    };
}

function generateBreadcrumbSchema(baseUrl, breadcrumbs) {
    return {
        "@type": "BreadcrumbList",
        "@id": `${baseUrl}/#breadcrumb`,
        itemListElement: breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: crumb.name,
            item: crumb.url,
        })),
    };
}
