import { SITE_METADATA } from "@/app/constants";

export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/private/", "/admin/"],
        },
        sitemap: `${SITE_METADATA.metadataBase}/sitemap.xml`,
        host: SITE_METADATA.metadataBase,
    };
}
