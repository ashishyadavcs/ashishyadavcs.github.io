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
    title: "Full-Stack Developer",
    description: `Frontend Developer with ${contacts.totalExperience} years of experience specializing in React, Next.js, JavaScript, and modern UI engineering. I build fast, maintainable, and SEO-optimized applications with strong focus on performance, accessibility, and clean architecture. `,
    image: "/images/ashish-profile.jpeg",
    resume: "https://drive.google.com/file/d/1-CVbKT9I4BEX7tTLpp5RRdlToU7isTJq/view?usp=sharing",
    education,
    typingTexts: [
        "Full-Stack Developer",
        "React.js Expert",
        "Next.js Developer",
        "Node.js Developer",
        "Problem Solver",
    ],
    aboutme: `
    I craft high-performance, responsive web applications using modern technologies like React, Next.js, and Node.js. My focus is on building clean, scalable, and visually stunning interfaces that deliver real business results. Whether it’s improving performance, refining UX, or integrating complex backend systems — I turn ideas into smooth digital experiences.
    `,
};
export default personal;
