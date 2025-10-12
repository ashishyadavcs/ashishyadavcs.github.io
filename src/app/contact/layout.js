import { SITE_METADATA } from "@/app/constants";

// Generate comprehensive metadata for Contact page
export const metadata = {
    title: "Contact Me",
    description:
        "Get in touch with Ashish Yadav for web development projects, collaborations, or job opportunities. Let's discuss how we can work together to build amazing digital experiences.",
    keywords: [
        ...SITE_METADATA.keywords,
        "Contact Ashish Yadav",
        "Hire Developer",
        "Web Development Services",
        "Project Collaboration",
        "Job Opportunities",
        "Freelance Developer",
        "Contact Information",
        "Business Inquiry",
        "Professional Services",
    ],
    authors: [{ name: "Ashish Yadav" }],
    creator: "Ashish Yadav",
    publisher: "Ashish Yadav",
    category: "business",
    openGraph: {
        title: "Contact Me | Ashish Yadav - Full Stack Developer",
        description:
            "Get in touch with Ashish Yadav for web development projects, collaborations, or job opportunities. Let's discuss how we can work together to build amazing digital experiences.",
        url: "/contact",
        siteName: "Ashish Yadav Portfolio",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/images/contact-og.jpg",
                secureUrl: `${SITE_METADATA.metadataBase.origin}/images/contact-og.jpg`,
                width: 1200,
                height: 630,
                alt: "Contact Ashish Yadav - Full Stack Developer",
                type: "image/jpeg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Me | Ashish Yadav - Full Stack Developer",
        description:
            "Get in touch with Ashish Yadav for web development projects, collaborations, or job opportunities.",
        creator: "@ashishyadav",
        images: ["/images/contact-og.jpg"],
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
        canonical: `${SITE_METADATA.metadataBase.origin}/contact`,
    },
};

export default function ContactLayout({ children }) {
    return children;
}
