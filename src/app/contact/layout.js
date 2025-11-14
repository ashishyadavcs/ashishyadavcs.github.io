import config from "public/config";

export const metadata = {
    title: config.seo.pages.contact.title,
    description: config.seo.pages.contact.description,
    keywords: config.seo.pages.contact.keywords,
    openGraph: {
        title: config.seo.pages.contact.title,
        description: config.seo.pages.contact.description,
        url: `${config.seo.url}/contact`,
        type: "website",
    },
};
