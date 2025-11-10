const navigation = {
    footersections: [
        {
            heading: "About Me",
            type: "about",
            description:
                "Full-stack developer passionate about creating innovative web solutions. Specialized in React, Next.js, and modern web technologies.",
            contact: {
                email: "ashishyadav.works@gmail.com",
                phone: "+917068513356",
                location: "Noida, India",
            },
        },
        {
            heading: "Quick Links",
            type: "navigation",
            links: [
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Projects", href: "/projects" },
                { label: "Contact", href: "/contact" },
            ],
        },
        {
            heading: "Services",
            type: "services",
            links: [
                { label: "Web Development", href: "/services/web-development" },
                { label: "Frontend Development", href: "/services/frontend" },
                { label: "Backend Development", href: "/services/backend" },
                { label: "API Development", href: "/services/api" },
                { label: "AI Integration", href: "/services/ai" },
            ],
        },
        {
            heading: "Connect",
            type: "social",
            socialLinks: [
                {
                    platform: "LinkedIn",
                    url: "https://www.linkedin.com/in/ashishyadavcs",
                    icon: "in",
                },
                {
                    platform: "GitHub",
                    url: "https://github.com/ashishyadavcs",
                    icon: "gh",
                },
                {
                    platform: "Twitter",
                    url: "https://x.com/ashishyadav_cs",
                    icon: "tw",
                },
                {
                    platform: "Email",
                    url: "mailto:ashishyadav.works@gmail.com",
                    icon: "@",
                },
            ],
        },
    ],
    navbar: [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "About",
            href: "/about",
        },
        {
            label: "Projects",
            href: "/projects",
        },
        {
            label: "Contact",
            href: "/contact",
        },
    ],
};
export default navigation;
