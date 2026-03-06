import config from "public/config";

const { personal, skills, experience } = config;

// Build a knowledge base from the portfolio config
const knowledgeBase = {
    greetings: {
        keywords: [
            "hi",
            "hello",
            "hey",
            "howdy",
            "greetings",
            "sup",
            "yo",
            "good morning",
            "good evening",
            "good afternoon",
            "what's up",
            "whats up",
        ],
        response: `Hey there! 👋 I'm Ashish's portfolio assistant. I can tell you about his skills, experience, projects, services, or how to get in touch. What would you like to know?`,
    },
    about: {
        keywords: [
            "about",
            "who",
            "tell me about",
            "yourself",
            "ashish",
            "introduce",
            "introduction",
            "background",
            "bio",
        ],
        response: `${personal.name} is a ${personal.title} with ${personal.totalExperience} of professional experience. ${personal.aboutme.trim()}\n\n📍 Based in ${personal.address}\n📧 ${personal.email}`,
    },
    skills: {
        keywords: [
            "skills",
            "your skills",
            "what are your skills",
            "technologies",
            "tech stack",
            "what can you do",
            "expertise",
            "proficient",
            "languages",
            "frameworks",
            "tools",
        ],
        response: (() => {
            const allSkills = skills.technical
                .map(cat => `**${cat.category}:** ${cat.skills.map(s => s.name).join(", ")}`)
                .join("\n");
            return `Here are Ashish's technical skills:\n\n${allSkills}\n\nWant to know more about a specific area?`;
        })(),
    },
    experience: {
        keywords: [
            "experience",
            "work",
            "job",
            "career",
            "company",
            "companies",
            "professional",
            "employment",
            "bold",
            "tutorbin",
        ],
        response: (() => {
            const exp = experience
                .map(e => `**${e.title}** at [${e.company}](${e.website}) (${e.date})`)
                .join("\n\n");
            return `Here's Ashish's professional journey:\n\n${exp}\n\nTotal experience: ${personal.totalExperience}. Want details about a specific role?`;
        })(),
    },
    education: {
        keywords: [
            "education",
            "degree",
            "university",
            "college",
            "study",
            "studied",
            "school",
            "qualification",
            "academic",
        ],
        response: (() => {
            const edu = personal.education
                .map(
                    e =>
                        `🎓 **${e.degree}** in ${e.field}\n   ${e.institution} (${e.date})\n   Grade: ${e.grade}`
                )
                .join("\n\n");
            return `Ashish's educational background:\n\n${edu}`;
        })(),
    },
    contact: {
        keywords: [
            "contact",
            "email",
            "reach",
            "hire",
            "connect",
            "get in touch",
            "message",
            "phone",
            "social",
            "linkedin",
            "github",
            "twitter",
        ],
        response: `You can reach Ashish through:\n\n📧 **Email:** ${personal.email}\n🔗 **LinkedIn:** [ashishyadavcs](${personal.socialMedia.linkedin})\n🐙 **GitHub:** [ashishyadavcs](${personal.socialMedia.github})\n🐦 **Twitter:** [@ashishyadav_cs](${personal.socialMedia.twitter})\n\nOr use the [Contact Page](/contact) to send a message directly!`,
    },
    projects: {
        keywords: [
            "projects",
            "portfolio",
            "work samples",
            "built",
            "created",
            "developed",
            "case studies",
            "samples",
        ],
        response: `Ashish has worked on several impressive projects! Here are a few highlights:\n\n🎓 **TutorBin** — Student learning platform with real-time chat & analytics\n📝 **Zety** — Resume builder with premium templates\n🌐 **Portfolio Website** — This very site, built with Next.js!\n\n👉 Check out the full list at [/projects](/projects)`,
    },
    services: {
        keywords: [
            "services",
            "offer",
            "help",
            "provide",
            "freelance",
            "consulting",
            "available",
            "hire",
            "pricing",
            "cost",
            "rate",
        ],
        response: `Ashish offers these professional services:\n\n🌐 **Web Development** — Fast, modern websites (from $500)\n🎨 **Frontend Development** — Beautiful UIs (from $300)\n⚙️ **Backend Development** — Scalable APIs (from $400)\n🔗 **API Development** — Custom integrations (from $250)\n🤖 **AI Integration** — Intelligent features (from $500)\n\n👉 View all details on the [Services Page](/services)\n\nInterested? [Contact Ashish](/contact) to get started!`,
    },
    resume: {
        keywords: ["resume", "cv", "download", "pdf"],
        response: `You can view or download Ashish's resume here:\n\n📄 [View Resume](${personal.resume})\n\nIt includes details about his experience, skills, and education.`,
    },
    frontend: {
        keywords: [
            "react",
            "next.js",
            "nextjs",
            "javascript",
            "typescript",
            "css",
            "html",
            "frontend",
            "front-end",
            "tailwind",
            "styled-components",
        ],
        response: `Ashish is a frontend expert! His top frontend skills:\n\n⚛️ React — 95% proficiency\n🚀 Next.js — 90%\n💛 JavaScript — 95%\n📘 TypeScript — 85%\n🏗️ HTML5 — 98%\n🎨 CSS3 — 92%\n💨 Tailwind CSS — 88%\n💅 Styled Components — 85%\n\nHe's currently working with React & Next.js at BOLD Technology Systems.`,
    },
    backend: {
        keywords: [
            "node",
            "express",
            "backend",
            "back-end",
            "server",
            "api",
            "database",
            "mongodb",
            "mysql",
            "rest",
        ],
        response: `Ashish also has solid backend skills:\n\n🟢 Node.js — 88% proficiency\n🚂 Express.js — 85%\n🔗 REST APIs — 90%\n🍃 MongoDB — 85%\n🗄️ MySQL — 82%\n🔄 WebSocket — 80%\n⚡ Redis — 75%\n\nHe builds full-stack applications with the MERN stack.`,
    },
    payment: {
        keywords: ["payment", "stripe", "paypal", "razorpay", "juspay", "payu", "integration"],
        response: `Ashish has experience with multiple payment gateways:\n\n💳 Stripe — 85%\n💰 PayPal — 80%\n💸 Razorpay — 82%\n💵 Juspay — 78%\n💶 PayU — 75%\n\nHe can integrate secure payment processing into your application.`,
    },
    location: {
        keywords: ["where", "location", "based", "city", "country", "live", "remote"],
        response: `Ashish is based in **${personal.address}** 📍\n\nHe's open to both remote and on-site opportunities.`,
    },
    thanks: {
        keywords: ["thanks", "thank you", "appreciate", "helpful", "great", "awesome", "cool"],
        response: `You're welcome! 😊 Feel free to ask anything else about Ashish or reach out directly via the [Contact Page](/contact). Have a great day!`,
    },
    bye: {
        keywords: ["bye", "goodbye", "see you", "later", "farewell", "cya"],
        response: `Goodbye! 👋 Thanks for visiting Ashish's portfolio. Feel free to come back anytime or reach out at ${personal.email}. Have a wonderful day!`,
    },
};

// Score how well a user message matches a topic
function scoreMatch(input, topic) {
    const inputLower = input.toLowerCase().replace(/[^a-z0-9\s]/g, "");
    const words = inputLower.split(/\s+/).filter(Boolean);
    let score = 0;

    for (const keyword of topic.keywords) {
        const kw = keyword.toLowerCase().replace(/[^a-z0-9\s]/g, "");
        // Exact phrase match (highest weight)
        if (inputLower.includes(kw)) {
            score += kw.split(/\s+/).length * 3;
        }
        // Individual word match
        for (const word of words) {
            if (word === kw) {
                score += 2;
            } else if (kw.length >= 4 && (word.includes(kw) || kw.includes(word))) {
                // Only count partial matches for keywords 4+ chars to avoid false positives
                score += 1;
            }
        }
    }
    return score;
}

// Main function: get a chatbot response
export function getChatResponse(userMessage) {
    if (!userMessage || !userMessage.trim()) {
        return "Please type a message so I can help you! 😊";
    }

    const input = userMessage.trim();

    // Score all topics
    const scores = Object.entries(knowledgeBase).map(([topic, data]) => ({
        topic,
        score: scoreMatch(input, data),
        response: data.response,
    }));

    // Sort by score descending
    scores.sort((a, b) => b.score - a.score);

    // Return the best match if score is above threshold
    if (scores[0].score >= 2) {
        return scores[0].response;
    }

    // Fallback response
    const fallbacks = [
        `I'm not sure I understand that, but I'd love to help! Try asking about Ashish's **skills**, **experience**, **projects**, **services**, or **contact info**. 😊`,
        `Hmm, I don't have info on that. You can ask me about:\n\n• 🛠️ Skills & Technologies\n• 💼 Work Experience\n• 📂 Projects\n• 📞 Contact Info\n• 📄 Resume\n• 💰 Services & Pricing`,
        `I couldn't find a great answer for that. Try asking something like "What are Ashish's skills?" or "How can I contact Ashish?" — I'm here to help! 🚀`,
    ];

    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
}

// Quick reply suggestions
export const quickReplies = [
    { label: "👋 About Ashish", message: "Tell me about Ashish" },
    { label: "🛠️ Skills", message: "What are your skills?" },
    { label: "💼 Experience", message: "Work experience" },
    { label: "📂 Projects", message: "Show me projects" },
    { label: "📞 Contact", message: "How to contact?" },
    { label: "💰 Services", message: "What services do you offer?" },
];
