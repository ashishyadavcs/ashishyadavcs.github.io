export const SITE_METADATA = {
    metadataBase: new URL("https://ashishyadavcs.github.io"),
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
    authors: [{ name: "Ashish Yadav", url: "https://ashishyadavcs.github.io" }],
    creator: "Ashish Yadav",
    publisher: "Ashish Yadav",
    siteUrl: "https://ashishyadavcs.github.io",

    // Open Graph metadata
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://ashishyadavcs.github.io",
        title: "Ashish Yadav - Full Stack Developer Portfolio",
        description:
            "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Building high-performance web applications with clean code and exceptional user experiences.",
        siteName: "Ashish Yadav Portfolio",
        images: [
            {
                url: "/images/og-image.jpg",
                secureUrl: "https://ashishyadavcs.github.io/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Ashish Yadav - Full Stack Developer Portfolio",
                type: "image/jpeg",
            },
            {
                url: "/images/og-square.jpg",
                secureUrl: "https://ashishyadavcs.github.io/images/og-square.jpg",
                width: 800,
                height: 800,
                alt: "Ashish Yadav - Square Profile Image",
                type: "image/jpeg",
            },
        ],
        videos: [],
        audio: [],
        determiner: "",
        countryName: "India",
        ttl: 604800,
    },

    // Twitter metadata
    twitter: {
        card: "summary_large_image",
        title: "Ashish Yadav - Full Stack Developer Portfolio",
        description:
            "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
        creator: "@ashishyadav",
        creatorId: "123456789",
        site: "@ashishyadav",
        siteId: "123456789",
        images: [
            {
                url: "/images/og-image.jpg",
                alt: "Ashish Yadav - Full Stack Developer Portfolio",
            },
        ],
        app: {
            name: "Ashish Yadav Portfolio",
            id: {
                iphone: "ashish-portfolio-ios",
                ipad: "ashish-portfolio-ios",
                googleplay: "ashish.portfolio.android",
            },
            url: {
                iphone: "https://ashishyadavcs.github.io",
                ipad: "https://ashishyadavcs.github.io",
            },
        },
    },

    // Robots and indexing
    robots: {
        index: true,
        follow: true,
        noarchive: false,
        nosnippet: false,
        noimageindex: false,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    // Verification codes for search engines
    verification: {
        google: "your-google-site-verification",
        yandex: "your-yandex-verification",
        yahoo: "your-yahoo-verification",
        other: {
            me: ["https://github.com/ashishyadavcs", "mailto:ashishyadav.works@gmail.com"],
        },
    },

    // Canonical and alternate URLs
    alternates: {
        canonical: "https://ashishyadavcs.github.io",
        languages: {
            "en-US": "https://ashishyadavcs.github.io",
            "x-default": "https://ashishyadavcs.github.io",
        },
    },

    // App-specific metadata
    applicationName: "Ashish Yadav Portfolio",
    referrer: "origin-when-cross-origin",
    colorScheme: "dark light",
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#000000" },
    ],

    // Icons configuration
    icons: {
        icon: [
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        ],
        shortcut: "/favicon.ico",
        apple: [{ url: "/apple-icon-180x180.png", sizes: "180x180", type: "image/png" }],
        other: [
            {
                rel: "apple-touch-icon-precomposed",
                url: "/apple-touch-icon-precomposed.png",
            },
        ],
    },

    // App links and web app manifest
    manifest: "/manifest.json",

    // Viewport configuration
    viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 5,
        userScalable: true,
        themeColor: "#3b82f6",
    },

    // Archive and category information
    category: "technology",

    // Additional meta tags
    other: {
        "theme-color": "#3b82f6",
        "msapplication-TileColor": "#3b82f6",
        "apple-mobile-web-app-capable": "yes",
        "apple-mobile-web-app-status-bar-style": "default",
        "apple-mobile-web-app-title": "Ashish Yadav Portfolio",
        "application-name": "Ashish Yadav Portfolio",
        "mobile-web-app-capable": "yes",
    },
};
