import { SITE_METADATA } from "@/app/constants";

// Generate comprehensive metadata for About page
export const metadata = {
    title: "About Me",
    description:
        "Learn about Ashish Yadav's journey as a Full Stack Developer. Discover my skills, experience, and passion for creating innovative web solutions with modern technologies like React, Next.js, and Node.js.",
    keywords: [
        ...SITE_METADATA.keywords,
        "About Ashish Yadav",
        "Developer Biography",
        "Professional Experience",
        "Technical Skills",
        "Education Background",
        "Career Journey",
        "Software Engineering",
        "Web Development Experience",
    ],
    authors: [{ name: "Ashish Yadav" }],
    creator: "Ashish Yadav",
    publisher: "Ashish Yadav",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: "About Me | Ashish Yadav - Full Stack Developer",
        description:
            "Learn about Ashish Yadav's journey as a Full Stack Developer. Discover my skills, experience, and passion for creating innovative web solutions.",
        url: "/about",
        siteName: "Ashish Yadav Portfolio",
        type: "profile",
        locale: "en_US",
        images: [
            {
                url: "/images/about-og.jpg",
                secureUrl: `${SITE_METADATA.metadataBase.origin}/images/about-og.jpg`,
                width: 1200,
                height: 630,
                alt: "About Ashish Yadav - Full Stack Developer",
                type: "image/jpeg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "About Me | Ashish Yadav - Full Stack Developer",
        description:
            "Learn about Ashish Yadav's journey as a Full Stack Developer. Discover my skills, experience, and passion for creating innovative web solutions.",
        creator: "@ashishyadav",
        images: ["/images/about-og.jpg"],
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
        canonical: `${SITE_METADATA.metadataBase.origin}/about`,
    },
};

export default function AboutLayout({ children }) {
    return children;
}
