import config from "public/config";

export const metadata = {
    title: "Hire Ashish Yadav | Frontend & Full Stack Developer",
    description:
        "Hire Ashish Yadav for full-time software engineering roles or freelance web development projects.",
    openGraph: {
        title: "Hire Ashish Yadav | Frontend & Full Stack Developer",
        description:
            "Hire Ashish Yadav for full-time software engineering roles or freelance web development projects.",
        url: `${config.seo.url}/hire/`,
        type: "website",
    },
    alternates: {
        canonical: `${config.seo.url}/hire/`,
    },
};

export default function HireLayout({ children }) {
    return <>{children}</>;
}
