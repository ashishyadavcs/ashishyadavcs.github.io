import { SITE_METADATA } from "@/app/constants";

// Required for static export
export const dynamic = "force-static";

export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/private/", "/admin/"],
        },
        sitemap: `${SITE_METADATA.siteUrl}/sitemap.xml`,
        host: SITE_METADATA.siteUrl,
    };
}
