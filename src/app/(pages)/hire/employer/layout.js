import config from "public/config";

export const metadata = {
    title: "Hire Full-Time Software Engineer | Ashish Yadav",
    description:
        "Looking for an experienced React, Next.js, and Full Stack Engineer for your team? Review experience, skills, and portfolio.",
    openGraph: {
        title: "Hire Full-Time Software Engineer | Ashish Yadav",
        description:
            "Looking for an experienced React, Next.js, and Full Stack Engineer for your team? Review experience, skills, and portfolio.",
        url: `${config.seo.url}/hire/employer/`,
        type: "website",
    },
    alternates: {
        canonical: `${config.seo.url}/hire/employer/`,
    },
};

export default function EmployerLayout({ children }) {
    return <>{children}</>;
}
