import config from "public/config";

export const metadata = {
    title: "Services & Solutions | Ashish Yadav - Frontend & Full Stack Developer",
    description:
        "High-performance web development, frontend engineering, backend development, and AI integration services by Ashish Yadav.",
    keywords: [
        "web development services",
        "hire frontend developer",
        "react developer services",
        "nextjs development",
        "full stack engineering",
        "Ashish Yadav",
    ],
    openGraph: {
        title: "Services & Solutions | Ashish Yadav",
        description:
            "High-performance web development, frontend engineering, backend development, and AI integration services by Ashish Yadav.",
        url: `${config.seo.url}/services/`,
        type: "website",
    },
    alternates: {
        canonical: `${config.seo.url}/services/`,
    },
};

export default function ServicesLayout({ children }) {
    return <>{children}</>;
}
