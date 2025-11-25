import personal from "./aboutme";

const faq = [
    {
        id: 1,
        category: "About Me",
        question: "Who is Ashish Yadav?",
        answer: `I'm a passionate Full Stack Developer with over ${personal.totalExperience} years of experience specializing in React, Next.js, and modern web technologies. Currently working as a Software Engineer at BOLD Technology Systems, I focus on building high-performance web applications with clean code and exceptional user experiences. I'm based in Noida, India, and have a strong background in both frontend and backend development.`,
        tags: ["introduction", "background", "experience"],
        priority: 1,
    },
    {
        id: 2,
        category: "Education",
        question: "What is your educational background?",
        answer: "I graduated with a Bachelor of Technology in Computer Science & Engineering from Feroze Gandhi Institute of Engineering and Technology, Raebareli (2016-2020). During my studies, I specialized in software development and web technologies, which laid the foundation for my career in full-stack development.",
        tags: ["education", "degree", "computer science"],
        priority: 2,
    },
    {
        id: 3,
        category: "Experience",
        question: "What is your professional experience?",
        answer: `I have ${personal.totalExperience} of professional experience in software development. Currently, I'm a Software Engineer at BOLD Technology Systems (2022-Present), where I've improved web performance by 30%, achieved 100% W3C HTML validation, and increased conversion rates by 18%. Previously, I worked as a Frontend Developer at TutorBin (2021-2022), where I enhanced website performance by 35% and boosted SEO rankings by 25%.`,
        tags: ["experience", "career", "achievements"],
        priority: 1,
    },
    {
        id: 4,
        category: "Technical Skills",
        question: "What technologies do you specialize in?",
        answer: "I specialize in modern web technologies including React (95%), Next.js (90%), JavaScript (95%), TypeScript (85%), HTML5 (98%), and CSS3 (92%). For backend development, I work with Node.js (88%), Express.js (85%), and REST APIs (90%). I'm also experienced with databases like MongoDB (85%), tools like Git (90%), Docker (80%), and cloud platforms like AWS (78%) and Vercel (85%).",
        tags: ["skills", "frontend", "backend", "technologies"],
        priority: 1,
    },
    {
        id: 5,
        category: "Projects",
        question: "What kind of projects have you worked on?",
        answer: "I've worked on various projects including student and tutor dashboards for TutorBin's online tutoring platform, resume builder platforms like Zety, and modern portfolio websites. My projects focus on creating responsive, high-performance web applications with excellent user experience, SEO optimization, and clean code architecture. You can explore my portfolio to see detailed case studies of my work.",
        tags: ["projects", "portfolio", "web applications"],
        priority: 2,
    },
    {
        id: 6,
        category: "Working Style",
        question: "What is your approach to web development?",
        answer: "I follow a performance-first approach, focusing on Core Web Vitals, accessibility (WCAG 2.1 AA standards), and SEO optimization. I believe in writing clean, maintainable code using modern best practices. My process includes responsive design, cross-browser compatibility, thorough testing, and continuous optimization. I also emphasize user experience and conversion rate optimization through A/B testing and data-driven decisions.",
        tags: ["methodology", "best practices", "performance"],
        priority: 2,
    },
    {
        id: 7,
        category: "Services",
        question: "What services do you offer?",
        answer: "I offer comprehensive web development services including frontend development with React/Next.js, backend API development, full-stack web applications, website performance optimization, SEO optimization, responsive design, and AI integration. I also provide consultation on web architecture, technology stack selection, and development best practices.",
        tags: ["services", "consulting", "development"],
        priority: 2,
    },
    {
        id: 8,
        category: "Contact",
        question: "How can I get in touch with you?",
        answer: "You can reach me through multiple channels: email at ashishyadav.works@gmail.com, or connect with me on LinkedIn (ashishyadavcs), GitHub (ashishyadavcs), or Twitter (@ashishyadav_cs). I'm always open to discussing new opportunities, collaborations, or answering any questions about web development.",
        tags: ["contact", "communication", "collaboration"],
        priority: 1,
    },
    {
        id: 9,
        category: "Career Goals",
        question: "What are your career goals and interests?",
        answer: "I'm passionate about staying at the forefront of web technology trends, continuously learning new frameworks and tools. My goal is to build innovative, scalable web solutions that solve real-world problems. I'm particularly interested in performance optimization, user experience design, and emerging technologies like AI integration in web applications.",
        tags: ["goals", "growth", "innovation"],
        priority: 3,
    },
    {
        id: 10,
        category: "Technical Expertise",
        question: "Do you work with modern development tools and practices?",
        answer: "Yes, I'm proficient with modern development tools including Git for version control, Docker for containerization, AWS and Vercel for deployment, and various testing frameworks. I follow industry best practices like CI/CD pipelines, code reviews, responsive design principles, and agile development methodologies. I also stay updated with the latest in web performance, security, and accessibility standards.",
        tags: ["tools", "devops", "practices"],
        priority: 3,
    },
    {
        id: 11,
        category: "Collaboration",
        question: "Do you work well in teams and with clients?",
        answer: "Absolutely! I have strong communication skills and experience working in collaborative environments. At BOLD Technology Systems and TutorBin, I've successfully worked with cross-functional teams including designers, product managers, and backend developers. I believe in clear communication, regular updates, and delivering results that exceed expectations.",
        tags: ["teamwork", "communication", "collaboration"],
        priority: 3,
    },
    {
        id: 12,
        category: "Availability",
        question: "Are you available for freelance projects or full-time opportunities?",
        answer: "I'm always interested in discussing exciting opportunities, whether they're freelance projects, consulting work, or full-time positions. Feel free to reach out to discuss your specific needs, timeline, and how I can contribute to your project's success. I'm committed to delivering high-quality work and building long-term professional relationships.",
        tags: ["availability", "opportunities", "freelance"],
        priority: 2,
    },
];

// Helper function to get FAQs by category
export const getFAQsByCategory = category => {
    return faq.filter(item => item.category.toLowerCase() === category.toLowerCase());
};

// Helper function to get FAQs by priority
export const getFAQsByPriority = priority => {
    return faq.filter(item => item.priority === priority).sort((a, b) => a.id - b.id);
};

// Helper function to search FAQs
export const searchFAQs = searchTerm => {
    const term = searchTerm.toLowerCase();
    return faq.filter(
        item =>
            item.question.toLowerCase().includes(term) ||
            item.answer.toLowerCase().includes(term) ||
            item.tags.some(tag => tag.toLowerCase().includes(term))
    );
};

// Helper function to get all unique categories
export const getFAQCategories = () => {
    return [...new Set(faq.map(item => item.category))];
};

// Helper function to get featured FAQs (priority 1)
export const getFeaturedFAQs = () => {
    return getFAQsByPriority(1);
};

export default faq;
