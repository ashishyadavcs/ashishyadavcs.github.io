import personal from "./aboutme";

const funnel = {
    // ─── Main Landing ───────────────────────────────────────────
    hero: {
        badge: "Open to Opportunities",
        headline: "Let's Build Something Exceptional Together",
        subheadline: `Full-stack developer with ${personal.totalExperience} of experience delivering high-impact web solutions. Whether you need a dedicated team member or a freelance expert — I'm ready.`,
        stats: [
            { number: "50+", label: "Projects Delivered" },
            { number: `${personal.totalExperience}`, label: "Experience" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "24h", label: "Response Time" },
        ],
    },

    // ─── Two Tracks ─────────────────────────────────────────────
    tracks: [
        {
            id: "employer",
            slug: "employer",
            title: "Hire as Full-Time Employee",
            shortDescription:
                "Looking for a dedicated developer to join your team? I bring deep expertise, reliability, and a growth mindset.",
            highlights: [
                "Full-time dedication & availability",
                "Team collaboration & mentorship",
                "Long-term growth & ownership",
            ],
            cta: "Explore Full-Time",
            href: "/hire/employer",
        },
        {
            id: "freelance",
            slug: "freelance",
            title: "Hire as Freelancer",
            shortDescription:
                "Need a project built fast and right? I deliver production-ready solutions on time and on budget.",
            highlights: [
                "Flexible project-based engagement",
                "Rapid delivery & deployment",
                "Cost-effective expert solutions",
            ],
            cta: "Explore Freelance",
            href: "/hire/freelance",
        },
    ],

    // ─── Employer Track Detail ──────────────────────────────────
    employer: {
        hero: {
            badge: "Full-Time Opportunities",
            headline: "A Developer Who Delivers Real Business Impact",
            subheadline:
                "I don't just write code — I solve problems, mentor teammates, and drive products forward. Here's what I bring to your engineering team.",
        },
        valueProps: [
            {
                icon: "⚡",
                title: "Ship Faster",
                description:
                    "I ramp up quickly and start contributing from week one. My experience across the full stack means fewer blockers and faster delivery.",
            },
            {
                icon: "🧠",
                title: "Technical Depth",
                description:
                    "Deep expertise in React, Next.js, Node.js, and modern JavaScript. I write clean, testable, and maintainable code that scales.",
            },
            {
                icon: "🤝",
                title: "Team Player",
                description:
                    "Strong communicator who thrives in cross-functional teams. I mentor juniors, participate in code reviews, and champion best practices.",
            },
            {
                icon: "📈",
                title: "Growth Mindset",
                description:
                    "Continuously learning new technologies and approaches. I stay current with industry trends and bring fresh ideas to the table.",
            },
            {
                icon: "🎯",
                title: "Product Thinking",
                description:
                    "I think beyond tickets — understanding user needs, business goals, and how technical decisions impact the bottom line.",
            },
            {
                icon: "🔧",
                title: "DevOps Aware",
                description:
                    "Comfortable with CI/CD, Docker, cloud deployments, and monitoring. I build software that's easy to deploy and maintain.",
            },
        ],
        techStack: [
            { name: "React.js", level: "Expert" },
            { name: "Next.js", level: "Expert" },
            { name: "Node.js", level: "Advanced" },
            { name: "TypeScript", level: "Advanced" },
            { name: "MongoDB", level: "Advanced" },
            { name: "PostgreSQL", level: "Intermediate" },
            { name: "Docker", level: "Intermediate" },
            { name: "AWS", level: "Intermediate" },
            { name: "Git & GitHub", level: "Expert" },
            { name: "REST APIs", level: "Expert" },
        ],
        process: [
            {
                step: 1,
                title: "Introduction Call",
                description:
                    "Let's discuss the role, team, and tech stack. I'll share my experience and we'll see if there's a mutual fit.",
                duration: "30 min",
            },
            {
                step: 2,
                title: "Technical Assessment",
                description:
                    "I'm happy to complete a coding challenge, pair programming session, or system design discussion.",
                duration: "1-2 hours",
            },
            {
                step: 3,
                title: "Team & Culture Fit",
                description:
                    "Meet the team, understand the product vision, and align on working style and expectations.",
                duration: "45 min",
            },
            {
                step: 4,
                title: "Offer & Onboarding",
                description:
                    "Finalize terms and hit the ground running. I'm known for fast ramp-up and immediate contributions.",
                duration: "1-2 weeks",
            },
        ],
        idealRole: {
            title: "What I'm Looking For",
            items: [
                "Remote or hybrid role with a collaborative team",
                "Product-focused company building meaningful software",
                "Modern tech stack (React/Next.js/Node.js ecosystem)",
                "Opportunities for growth and technical leadership",
                "Culture that values quality, code reviews, and continuous learning",
                "Competitive compensation with equity or growth potential",
            ],
        },
        cta: {
            headline: "Ready to Add a High-Impact Developer to Your Team?",
            subheadline:
                "Let's schedule a call to discuss how I can contribute to your engineering team and business goals.",
            primaryButton: { label: "Schedule Interview", href: "/schedule-meeting" },
            secondaryButton: { label: "Download Resume", href: personal.resume },
        },
    },

    // ─── Freelance Track Detail ─────────────────────────────────
    freelance: {
        hero: {
            badge: "Freelance Services",
            headline: "Your Project, Delivered — Fast, Clean & Scalable",
            subheadline:
                "From MVPs to enterprise features, I deliver production-ready code that meets deadlines and exceeds expectations. No hand-holding required.",
        },
        valueProps: [
            {
                icon: "🚀",
                title: "Fast Turnaround",
                description:
                    "I understand urgency. Most projects kick off within 48 hours and I deliver milestones on a predictable schedule.",
            },
            {
                icon: "💎",
                title: "Production-Quality Code",
                description:
                    "Clean, documented, and tested code that your team can maintain long after the project ends. No technical debt surprises.",
            },
            {
                icon: "🔒",
                title: "Transparent Process",
                description:
                    "Daily standups, weekly demos, and clear communication. You'll always know exactly where your project stands.",
            },
            {
                icon: "💰",
                title: "Fixed-Price or Hourly",
                description:
                    "Choose the engagement model that works for your budget. Clear scope, no hidden fees, and no surprise invoices.",
            },
            {
                icon: "🛡️",
                title: "Post-Launch Support",
                description:
                    "I don't disappear after deployment. Every project includes 2 weeks of free bug-fix support and documentation.",
            },
            {
                icon: "📱",
                title: "Full-Stack Capability",
                description:
                    "Frontend, backend, APIs, databases — I handle the complete stack so you deal with one developer, not five.",
            },
        ],
        packages: [
            {
                name: "Starter",
                price: "From $500",
                duration: "1-2 weeks",
                description: "Perfect for landing pages, small features, or bug fixes",
                features: [
                    "Single page or feature development",
                    "Responsive design",
                    "Basic SEO optimization",
                    "1 revision round",
                    "Source code delivery",
                    "1 week post-launch support",
                ],
                highlighted: false,
            },
            {
                name: "Professional",
                price: "From $2,000",
                duration: "3-6 weeks",
                description: "Ideal for MVPs, web apps, and multi-page websites",
                features: [
                    "Full website or web application",
                    "Custom UI/UX design implementation",
                    "API development & integration",
                    "Database setup & optimization",
                    "3 revision rounds",
                    "2 weeks post-launch support",
                    "Performance optimization",
                    "SEO best practices",
                ],
                highlighted: true,
            },
            {
                name: "Enterprise",
                price: "Custom Quote",
                duration: "6+ weeks",
                description: "For complex applications and ongoing partnerships",
                features: [
                    "Complex web application development",
                    "System architecture & design",
                    "Third-party integrations",
                    "Authentication & authorization",
                    "CI/CD pipeline setup",
                    "Unlimited revisions",
                    "4 weeks post-launch support",
                    "Priority communication channel",
                    "Technical documentation",
                ],
                highlighted: false,
            },
        ],
        process: [
            {
                step: 1,
                title: "Discovery Call",
                description:
                    "We discuss your project requirements, goals, timeline, and budget. I'll ask the right questions to understand the full picture.",
                duration: "30 min",
            },
            {
                step: 2,
                title: "Proposal & Scope",
                description:
                    "I deliver a detailed proposal with timelines, milestones, tech stack recommendation, and transparent pricing.",
                duration: "24-48 hours",
            },
            {
                step: 3,
                title: "Development Sprints",
                description:
                    "Agile development with weekly demos. You see progress in real-time and can provide feedback at every milestone.",
                duration: "Varies",
            },
            {
                step: 4,
                title: "Launch & Support",
                description:
                    "Thorough testing, deployment, and handover. Includes documentation and free post-launch bug-fix support.",
                duration: "2-3 days",
            },
        ],
        engagementModels: [
            {
                title: "Fixed Price",
                description:
                    "Best for well-defined projects. You get a clear scope, timeline, and price upfront. No surprises.",
                bestFor: "Landing pages, MVPs, defined features",
            },
            {
                title: "Hourly Rate",
                description:
                    "Ideal for ongoing work or evolving requirements. Pay only for the hours worked with weekly time reports.",
                bestFor: "Maintenance, iterative projects, consulting",
            },
            {
                title: "Monthly Retainer",
                description:
                    "Reserve dedicated hours each month at a discounted rate. Priority access and guaranteed availability.",
                bestFor: "Ongoing development, long-term partnerships",
            },
        ],
        cta: {
            headline: "Ready to Bring Your Project to Life?",
            subheadline:
                "Let's discuss your project requirements. I respond within 24 hours with a clear plan of action.",
            primaryButton: { label: "Start a Project", href: "/contact" },
            secondaryButton: { label: "Schedule a Call", href: "/schedule-meeting" },
        },
    },

    // ─── Shared Social Proof ────────────────────────────────────
    socialProof: {
        title: "Trusted by Teams & Clients Worldwide",
        metrics: [
            { number: "50+", label: "Projects Completed" },
            { number: "30+", label: "Happy Clients" },
            { number: "99%", label: "On-Time Delivery" },
            { number: "5★", label: "Average Rating" },
        ],
    },

    // ─── Homepage CTA Banner ────────────────────────────────────
    ctaBanner: {
        headline: "Looking to Hire a Developer?",
        subheadline:
            "Whether you need a full-time team member or a freelance expert, let's talk about how I can help.",
        primaryButton: { label: "Hire Me", href: "/hire" },
        secondaryButton: { label: "View Services", href: "/services" },
    },
};

export default funnel;
