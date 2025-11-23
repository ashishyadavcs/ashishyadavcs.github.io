export const SITE_METADATA = {
    metadataBase: new URL("https://ashishyadavcs.vercel.app"),
    title: {
        default: "Ashish Yadav - Full Stack Developer & Software Engineer",
        template: "%s | Ashish Yadav",
    },
    description:
        "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Building high-performance web applications with clean code and exceptional user experiences.",
    keywords: [
        "Ashish Yadav",
        "Full Stack Developer",
        "Software Engineer",
        "React Developer",
        "Next.js Developer",
        "Node.js Developer",
        "JavaScript Developer",
        "Frontend Developer",
        "Backend Developer",
        "Web Developer",
        "Portfolio",
        "Noida Developer",
        "India Developer",
        "Modern Web Applications",
        "Responsive Design",
        "API Development",
        "Database Design",
        "UI/UX Implementation",
    ],
    authors: [{ name: "Ashish Yadav", url: "https://ashishyadavcs.vercel.app" }],
    creator: "Ashish Yadav",
    publisher: "Ashish Yadav",
    siteUrl: "https://ashishyadavcs.vercel.app",

    // Open Graph metadata
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://ashishyadavcs.vercel.app",
        title: "Ashish Yadav - Full Stack Developer Portfolio",
        description:
            "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Building high-performance web applications with clean code and exceptional user experiences.",
        siteName: "Ashish Yadav Portfolio",
        images: [
            {
                url: "/images/og-image.jpg",
                secureUrl: "https://ashishyadavcs.vercel.app/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Ashish Yadav - Full Stack Developer Portfolio",
                type: "image/jpeg",
            },
            {
                url: "/images/og-square.jpg",
                secureUrl: "https://ashishyadavcs.vercel.app/images/og-square.jpg",
                width: 1080,
                height: 1080,
                alt: "Ashish Yadav - Full Stack Developer",
                type: "image/jpeg",
            },
        ],
    },

    // Twitter metadata
    twitter: {
        card: "summary_large_image",
        site: "@ashishyadav_cs",
        creator: "@ashishyadav_cs",
        title: "Ashish Yadav - Full Stack Developer Portfolio",
        description:
            "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
        images: [
            {
                url: "/images/og-image.jpg",
                alt: "Ashish Yadav - Full Stack Developer Portfolio",
            },
        ],
    },

    // App specific metadata
    applicationName: "Ashish Yadav Portfolio",
    referrer: "origin-when-cross-origin",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },

    // Apple specific
    appleWebApp: {
        capable: true,
        title: "Ashish Yadav Portfolio",
        statusBarStyle: "default",
    },

    // App Links
    appLinks: {
        web: {
            url: "https://ashishyadavcs.vercel.app",
            should_fallback: true,
        },
        ios: {
            app_store_id: "123456789",
            url: "https://ashishyadavcs.vercel.app",
        },
        android: {
            package: "com.ashishyadavcs.portfolio",
            url: "https://ashishyadavcs.vercel.app",
        },
        windows_phone: {
            url: "https://ashishyadavcs.vercel.app",
        },
        windows: {
            url: "https://ashishyadavcs.vercel.app",
        },
        windows_universal: {
            url: "https://ashishyadavcs.vercel.app",
        },
        iphone: "https://ashishyadavcs.vercel.app",
        ipad: "https://ashishyadavcs.vercel.app",
    },

    // Other metadata
    generator: "Next.js",
    category: "technology",
    classification: "Portfolio",
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    // Verification
    verification: {
        google: "google-site-verification-code",
        yandex: "yandex-verification-code",
        yahoo: "yahoo-site-verification",
    },

    // Alternate languages and canonical
    alternates: {
        canonical: "https://ashishyadavcs.vercel.app",
        languages: {
            "en-US": "https://ashishyadavcs.vercel.app",
            "x-default": "https://ashishyadavcs.vercel.app",
        },
    },

    // Icons
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/icons/icon-192x192.png",
        other: {
            rel: "apple-touch-icon-precomposed",
            url: "/icons/icon-152x152.png",
        },
    },
};

// Contact information
export const CONTACT_INFO = {
    email: "ashishyadav.works@gmail.com",
    phone: "+917068513356",
    location: "Noida, India",
    linkedin: "https://www.linkedin.com/in/ashishyadavcs",
    github: "https://github.com/ashishyadavcs",
    twitter: "https://x.com/ashishyadav_cs",
};

// Navigation links
export const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
    { label: "Sitemap", href: "/sitemap" },
];

export default SITE_METADATA;
