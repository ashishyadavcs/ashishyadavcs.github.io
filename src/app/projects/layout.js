import { SITE_METADATA } from "@/app/constants";

// Generate comprehensive metadata for Projects page
export const metadata = {
    title: "Projects Portfolio",
    description:
        "Explore Ashish Yadav's portfolio of web development projects. From React applications to full-stack solutions, discover innovative projects built with modern technologies and best practices.",
    keywords: [
        ...SITE_METADATA.keywords,
        "Projects Portfolio",
        "Web Development Projects",
        "React Projects",
        "Next.js Applications",
        "Full Stack Projects",
        "JavaScript Projects",
        "Node.js Applications",
        "Portfolio Showcase",
        "Code Examples",
        "Live Demos",
        "GitHub Projects",
    ],
    authors: [{ name: "Ashish Yadav" }],
    creator: "Ashish Yadav",
    publisher: "Ashish Yadav",
    category: "technology",
    openGraph: {
        title: "Projects Portfolio | Ashish Yadav - Full Stack Developer",
        description:
            "Explore Ashish Yadav's portfolio of web development projects. From React applications to full-stack solutions, discover innovative projects built with modern technologies.",
        url: "/projects",
        siteName: "Ashish Yadav Portfolio",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/images/projects-og.jpg",
                secureUrl: `${SITE_METADATA.metadataBase.origin}/images/projects-og.jpg`,
                width: 1200,
                height: 630,
                alt: "Ashish Yadav Projects Portfolio",
                type: "image/jpeg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Projects Portfolio | Ashish Yadav - Full Stack Developer",
        description:
            "Explore Ashish Yadav's portfolio of web development projects. From React applications to full-stack solutions, discover innovative projects built with modern technologies.",
        creator: "@ashishyadav",
        images: ["/images/projects-og.jpg"],
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
        canonical: `${SITE_METADATA.metadataBase.origin}/projects`,
    },
};

export default function ProjectsLayout({ children }) {
    return children;
}
