import { SITE_METADATA } from "@/app/constants";
import projects from "../../public/config/projects";

// Required for static export
export const dynamic = "force-static";

export default function sitemap() {
    const baseUrl = SITE_METADATA.siteUrl;
    const currentDate = new Date();

    // Static pages
    const staticPages = [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: currentDate,
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/sitemap`,
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
    ];

    // Dynamic project pages
    const projectPages = projects.map(project => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: currentDate,
        changeFrequency: "monthly",
        priority: 0.6,
    }));

    return [...staticPages, ...projectPages];
}
