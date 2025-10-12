import { projects } from "@/app/utils/data";
import { SITE_METADATA } from "@/app/constants";

// Generate comprehensive dynamic metadata for project pages
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = projects.find(p => p.slug === slug);

    if (!project) {
        return {
            title: "Project Not Found",
            description: "The requested project could not be found.",
            robots: {
                index: false,
                follow: false,
            },
        };
    }

    const projectTitle = `${project.title} | Ashish Yadav`;
    const projectDescription = project.description;
    const projectUrl = `/projects/${project.slug}`;

    return {
        title: project.title,
        description: projectDescription,
        keywords: [
            ...SITE_METADATA.keywords,
            ...project.tags,
            `${project.title}`,
            "Project Details",
            "Case Study",
            "Live Demo",
            "Source Code",
            "Web Development",
            "Portfolio Project",
        ],
        authors: [{ name: "Ashish Yadav" }],
        creator: "Ashish Yadav",
        publisher: "Ashish Yadav",
        category: "technology",
        classification: "Portfolio Project",
        openGraph: {
            title: projectTitle,
            description: projectDescription,
            url: projectUrl,
            siteName: "Ashish Yadav Portfolio",
            type: "article",
            locale: "en_US",
            publishedTime: new Date().toISOString(),
            modifiedTime: new Date().toISOString(),
            section: "Projects",
            tags: project.tags,
            images: [
                {
                    url: project.image,
                    secureUrl: `${SITE_METADATA.metadataBase.origin}${project.image}`,
                    width: 1200,
                    height: 630,
                    alt: `${project.title} - Project by Ashish Yadav`,
                    type: "image/jpeg",
                },
            ],
            article: {
                author: ["Ashish Yadav"],
                tags: project.tags,
                section: "Projects",
                publishedTime: new Date().toISOString(),
                modifiedTime: new Date().toISOString(),
            },
        },
        twitter: {
            card: "summary_large_image",
            title: projectTitle,
            description: projectDescription,
            creator: "@ashishyadav",
            site: "@ashishyadav",
            images: [
                {
                    url: project.image,
                    alt: `${project.title} - Project by Ashish Yadav`,
                },
            ],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
            },
        },
        alternates: {
            canonical: `${SITE_METADATA.metadataBase.origin}${projectUrl}`,
        },
    };
}

export default function ProjectLayout({ children }) {
    return children;
}
