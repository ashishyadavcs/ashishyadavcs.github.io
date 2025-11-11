const contacts = {
    name: "Ashish Yadav",
    email: "ashishyadav.works@gmail.com",
    phone: "+917068513356",
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
        website: "https://fgiet.ac.in/",
        field: "Computer Science & Engineering",
        description: "Specialized in software development, web technologies.",
    },
];

const personal = {
    ...contacts,
    title: "Full-Stack Developer",
    description: `I build modern, responsive web applications with cutting-edge technologies. Passionate about creating seamless user experiences and robust backends.`,
    image: "/images/me/ashish.png",
    resume: "https://drive.google.com/file/d/1-CVbKT9I4BEX7tTLpp5RRdlToU7isTJq/view?usp=sharing",
    education,
    typingTexts: [
        "Full-Stack Developer",
        "React.js Expert",
        "Next.js Developer",
        "Node.js Developer",
        "AI Integration Specialist",
        "Problem Solver",
    ],
    aboutme: `
    I'm a passionate <strong>full-stack developer</strong> with <strong>${contacts.totalExperience}</strong> of experience in building high-performance web applications with modern technologies like React, Next.js, Node.js, and more. <br/> With a strong focus on clean code and user-centered design, I strive to create engaging and accessible web experiences. I love solving complex problems and continuously learning new technologies.
    `,
};
export default personal;
