/**
 * Application-wide constants
 */

// Theme constants
export const THEME = Object.freeze({
    STORAGE_KEY: "theme",
    ATTRIBUTE: "data-theme",
    VALUES: Object.freeze({
        LIGHT: "light",
        DARK: "dark",
    }),
});

// Font configuration for Next.js Google Fonts
export const FONTS = Object.freeze({
    SANS: Object.freeze({
        subsets: ["latin"],
        variable: "--font-geist-sans",
    }),
    MONO: Object.freeze({
        subsets: ["latin"],
        variable: "--font-geist-mono",
    }),
});

// Typography constants
export const TYPOGRAPHY = Object.freeze({
    FONT_SIZE: Object.freeze({
        // Heading sizes
        H1: Object.freeze({
            DESKTOP: "4rem", // 64px - Main hero headings
            TABLET: "3.5rem", // 56px
            MOBILE: "3rem", // 48px
        }),
        H2: Object.freeze({
            DESKTOP: "3rem", // 48px - Section headings
            TABLET: "2.5rem", // 40px
            MOBILE: "2rem", // 32px
        }),
        H3: Object.freeze({
            DESKTOP: "2.25rem", // 36px - Subsection headings
            TABLET: "2rem", // 32px
            MOBILE: "1.75rem", // 28px
        }),
        H4: Object.freeze({
            DESKTOP: "1.875rem", // 30px - Card titles
            TABLET: "1.75rem", // 28px
            MOBILE: "1.5rem", // 24px
        }),
        H5: Object.freeze({
            DESKTOP: "1.5rem", // 24px - Small headings
            TABLET: "1.375rem", // 22px
            MOBILE: "1.25rem", // 20px
        }),
        H6: Object.freeze({
            DESKTOP: "1.25rem", // 20px - Smallest headings
            TABLET: "1.125rem", // 18px
            MOBILE: "1rem", // 16px
        }),
        // Body text sizes
        BODY_LARGE: "1.125rem", // 18px
        BODY: "1rem", // 16px
        BODY_SMALL: "0.875rem", // 14px
        CAPTION: "0.75rem", // 12px
    }),

    FONT_WEIGHT: Object.freeze({
        LIGHT: 300,
        NORMAL: 400,
        MEDIUM: 500,
        SEMIBOLD: 600,
        BOLD: 700,
        EXTRA_BOLD: 800,
    }),

    LINE_HEIGHT: Object.freeze({
        TIGHT: 1.1,
        NORMAL: 1.5,
        RELAXED: 1.6,
        LOOSE: 1.8,
    }),
});

// SEO metadata (optimized for Next.js 15 Metadata API)
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

/**
 * Personal information constants
 */
export const PERSONAL_INFO = Object.freeze({
    NAME: "Ashish Yadav",
    EMAIL: "ashishyadav.works@gmail.com",
    PHONE: "+917068513356",
    LOCATION: "Noida, India",
    IMAGE: "/images/me/ashish.png",

    // Social media links
    SOCIAL_MEDIA: Object.freeze({
        LINKEDIN: "https://www.linkedin.com/in/ashishyadavcs",
        GITHUB: "https://github.com/ashishyadavcs",
        TWITTER: "https://twitter.com/ashishyadav",
    }),

    // Professional details
    TITLE: "Software Engineer",
    BIO: "A passionate full-stack developer with expertise in modern web technologies",

    // Contact preferences
    CONTACT: Object.freeze({
        PREFERRED_METHOD: "email",
        AVAILABILITY: "Available for freelance and full-time opportunities",
        RESPONSE_TIME: "Usually responds within 24 hours",
    }),
});

// Animation constants
export const ANIMATIONS = Object.freeze({
    DURATION: Object.freeze({
        FAST: 0.2,
        NORMAL: 0.3,
        SLOW: 0.6,
    }),
    EASING: Object.freeze({
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
        BOUNCE: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    }),
    SPRING: Object.freeze({
        STIFFNESS: 300,
        DAMPING: 30,
    }),
    STAGGER: Object.freeze({
        DELAY: 0.1,
        CHILDREN_DELAY: 0.1,
    }),
});

/**
 * Navigation configuration
 */
export const NAVIGATION = Object.freeze({
    BRAND_NAME: "Ashish Yadav",
    LINKS: Object.freeze([
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/projects", label: "Projects" },
        { href: "/contact", label: "Contact" },
    ]),
});

// Layout constants
export const LAYOUT = Object.freeze({
    HEADER_HEIGHT: "80px",
    MIN_HEIGHT: "100vh",
    MAX_WIDTH: "1200px",
    CONTAINER_PADDING: "0 2rem",
    SECTION_PADDING: "4rem 0",
    SPACING: {
        XS: "0.25rem",
        SM: "0.5rem",
        MD: "1rem",
        LG: "1.5rem",
        XL: "2rem",
        XXL: "3rem",
    },
});
