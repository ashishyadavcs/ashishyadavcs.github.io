import config from "public/config";

export const metadata = {
    title: "Hire Freelance Web Developer | Ashish Yadav",
    description:
        "Hire Ashish Yadav for contract and freelance web development, high-converting landing pages, and web applications.",
    openGraph: {
        title: "Hire Freelance Web Developer | Ashish Yadav",
        description:
            "Hire Ashish Yadav for contract and freelance web development, high-converting landing pages, and web applications.",
        url: `${config.seo.url}/hire/freelance/`,
        type: "website",
    },
    alternates: {
        canonical: `${config.seo.url}/hire/freelance/`,
    },
};

export default function FreelanceLayout({ children }) {
    return <>{children}</>;
}
