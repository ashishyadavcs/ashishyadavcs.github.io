const contacts = {
    name: "Ashish Yadav",
    email: "ashishyadav.works@gmail.com",
    phone: "+917068513356",
    showPhone: false, // Set to true to display phone contact
    address: "Noida, India",
    totalExperience: (() => {
        const startDate = new Date("2021-03-01");
        const currentDate = new Date();
        const diffInMonths =
            (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
            (currentDate.getMonth() - startDate.getMonth());
        const years = (diffInMonths / 12).toFixed(1);
        return `${years} Year${years !== "1.0" ? "s" : ""}`;
    })(),
    socialMedia: {
        linkedin: "https://www.linkedin.com/in/ashishyadavcs",
        github: "https://github.com/ashishyadavcs",
        twitter: "https://x.com/ashishyadav_cs",
    },
};

const education = [
    {
        date: "2016 - 2020",
        degree: "Bachelor of Technology",
        institution: "Feroze Gandhi Institute of Engineering and Technology, Raebareli",
        website: "http://fgiet.ac.in/",
        field: "Computer Science & Engineering",
        description: "Specialized in software development, web technologies.",
        grade: " 7.5 CGPA",
    },
    // {
    //     degree: "Intermediate",
    //     institution: "Shaheed Naresh Inermediate College, Khamaria Bhadohi, UP",
    //     field: "UP Board",
    //     website: "#",
    //     grade: "86%",
    // },
    // {
    //     degree: "High School",
    //     institution: "Shaheed Naresh Inermediate College, Khamaria Bhadohi, UP",
    //     field: "UP Board",
    //     website: "#",
    //     grade: "87%",
    // },
];

const personal = {
    ...contacts,
    title: "Frontend Developer",
    description: `I build fast, modern web applications with React and Next.js. With ${contacts.totalExperience} of experience, I turn complex ideas into clean, user-friendly interfaces that drive real business results.`,
    image: "/images/ashish-profile.jpeg",
    resume: "https://drive.google.com/file/d/1-CVbKT9I4BEX7tTLpp5RRdlToU7isTJq/view?usp=sharing",
    education,
    typingTexts: [
        "Frontend Developer",
        "React.js Expert",
        "Next.js Specialist",
        "UI/UX Engineer",
        "Problem Solver",
    ],
    aboutme: `
    I specialize in building high-performance web applications that users love. My expertise in React, Next.js, and modern JavaScript helps businesses create digital experiences that convert visitors into customers.
    
    I focus on clean code, fast loading times, and responsive design. Every project I build is optimized for search engines, accessibility, and mobile devices.
    `,
};
export default personal;
