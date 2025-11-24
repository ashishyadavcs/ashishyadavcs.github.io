import personal from "./aboutme";

const description = `Experienced Full Stack Developer specializing in React, Node.js, and modern web technologies. Creating digital solutions with ${personal.totalExperience} years of professional experience.`;
const seo = {
    title: "Ashish Yadav - Full Stack Developer & UI/UX Designer",
    url: "https://ashishyadavcs.vercel.app",
    siteName: "Ashish Yadav Portfolio",
    description,
    author: {
        name: "Ashish Yadav",
        email: "ashishyadav.works@gmail.com",
        twitter: "@ashishyadav_cs",
        linkedin: "https://www.linkedin.com/in/ashishyadavcs",
        github: "https://github.com/ashishyadavcs",
    },

    keywords: [
        "Ashish Yadav",
        "Full Stack Developer",
        "React Developer",
        "Node.js Developer",
        "JavaScript Developer",
        "Frontend Developer",
        "Backend Developer",
        "UI/UX Designer",
        "Web Developer",
        "Software Engineer",
        "MERN Stack",
        "Next.js",
        "MongoDB",
        "Express.js",
        "Portfolio",
        "Noida Developer",
        "India Developer",
        "React Native",
        "TypeScript",
        "HTML",
        "CSS",
        "Responsive Design",
        "API Development",
        "Database Design",
    ],

    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://ashishyadavcs.vercel.app",
        title: "Ashish Yadav - Full Stack Developer & UI/UX Designer",
        description: description,
        siteName: "Ashish Yadav Portfolio",
        images: [
            {
                url: "https://ashishyadavcs.vercel.app/images/ashish.png",
                width: 1200,
                height: 630,
                alt: "Ashish Yadav - Full Stack Developer",
            },
        ],
    },

    // Twitter Card
    twitter: {
        card: "summary_large_image",
        title: "Ashish Yadav - Full Stack Developer & UI/UX Designer",
        description: description,
        creator: "@ashishyadav_cs",
        site: "@ashishyadav_cs",
        images: ["https://ashishyadavcs.vercel.app/images/ashish.png"],
    },

    // JSON-LD Structured Data
    structuredData: {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Ashish Yadav",
        jobTitle: "Full Stack Developer",
        description: description,
        url: "https://ashishyadavcs.vercel.app",
        sameAs: [
            "https://www.linkedin.com/in/ashishyadavcs",
            "https://github.com/ashishyadavcs",
            "https://x.com/ashishyadav_cs",
        ],
        address: {
            "@type": "PostalAddress",
            addressLocality: "Noida",
            addressCountry: "India",
        },
        email: "ashishyadav.works@gmail.com",
        telephone: "+917068513356",
        knowsAbout: [
            "JavaScript",
            "React.js",
            "Node.js",
            "MongoDB",
            "Express.js",
            "Next.js",
            "TypeScript",
            "HTML",
            "CSS",
            "UI/UX Design",
            "Full Stack Development",
            "Web Development",
        ],
        alumniOf: {
            "@type": "EducationalOrganization",
            name: "Feroze Gandhi Institute of Engineering and Technology",
        },
    },

    // Page-specific SEO configurations
    pages: {
        home: {
            title: "Ashish Yadav - Full Stack Developer Portfolio",
            description: `Welcome to Ashish Yadav's portfolio. Full Stack Developer with ${personal.totalExperience} experience in React, Node.js, MongoDB, and modern web technologies.`,
            keywords: [
                "portfolio",
                "full stack developer",
                "react developer",
                "nodejs",
                "web developer",
            ],
        },

        about: {
            title: "About Ashish Yadav - Full Stack Developer & Designer",
            description: `Learn about Ashish Yadav's journey as a Full Stack Developer. ${personal.totalExperience} of experience in web development, UI/UX design, and modern technologies.`,
            keywords: ["about", "experience", "skills", "education", "full stack developer"],
        },

        projects: {
            title: "Projects by Ashish Yadav - Full Stack Development Portfolio",
            description:
                "Explore Ashish Yadav's development projects including React applications, Node.js backends, and full-stack solutions.",
            keywords: [
                "projects",
                "portfolio",
                "react projects",
                "nodejs",
                "full stack",
                "web applications",
            ],
        },

        contact: {
            title: "Contact Ashish Yadav - Full Stack Developer",
            description:
                "Get in touch with Ashish Yadav for web development projects, collaborations, or job opportunities. Available for freelance and full-time roles.",
            keywords: [
                "contact",
                "hire developer",
                "freelance",
                "collaboration",
                "web development services",
            ],
        },

        faqs: {
            title: "FAQs - Ashish Yadav Full Stack Developer",
            description: `Frequently asked questions about Ashish Yadav's ${personal.totalExperience} experience in full stack development, technical skills, projects, and services. Get answers about React, Next.js, and web development expertise.`,
            keywords: [
                "faqs",
                "frequently asked questions",
                "full stack developer questions",
                "react developer",
                "web development services",
                "technical skills",
                "experience",
                "portfolio questions",
                "hiring developer",
                "ashish yadav faq",
            ],
        },
    },

    // Additional SEO settings
    robots: {
        index: true,
        follow: true,
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
        google: "", // Add Google Search Console verification code
        bing: "", // Add Bing Webmaster verification code
        yandex: "", // Add Yandex verification code
        baidu: "", // Add Baidu verification code
    },

    // Additional meta tags
    additionalMetaTags: [
        {
            name: "application-name",
            content: "Ashish Yadav Portfolio",
        },
        {
            name: "apple-mobile-web-app-capable",
            content: "yes",
        },
        {
            name: "apple-mobile-web-app-status-bar-style",
            content: "default",
        },
        {
            name: "apple-mobile-web-app-title",
            content: "Ashish Yadav",
        },
        {
            name: "format-detection",
            content: "telephone=no",
        },
        {
            name: "mobile-web-app-capable",
            content: "yes",
        },
        {
            name: "theme-color",
            content: "#ff0080",
        },
    ],

    // Additional link tags
    additionalLinkTags: [
        {
            rel: "icon",
            href: "/favicon.ico",
        },
        {
            rel: "apple-touch-icon",
            href: "/icons/apple-touch-icon.png",
        },
        {
            rel: "manifest",
            href: "/manifest.json",
        },
    ],
};

export default seo;
