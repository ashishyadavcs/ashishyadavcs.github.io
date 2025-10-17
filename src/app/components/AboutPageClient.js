"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useMemo, useEffect } from "react";
import MyImage from "./MyImage";
import StructuredData from "./StructuredData";
import {
    FiBriefcase,
    FiCode,
    FiDatabase,
    FiGlobe,
    FiServer,
    FiSmartphone,
    FiCpu,
    FiBookOpen,
} from "react-icons/fi";
import Section from "@/app/components/common/Section";
import { fadeIn } from "@/app/utils/motion";
import { fadeInVariants } from "@/app/utils/animation-variants";
import Button from "@/app/components/common/Button";
import { personal, experience } from "@/app/utils/data";
import { SITE_METADATA } from "@/app/constants";
import config from "../../../public/data/index.js";
import {
    generatePersonStructuredData,
    generateBreadcrumbStructuredData,
    createStructuredDataScript,
    PAGE_METADATA,
} from "@/app/utils/seo";
import {
    AboutContainer,
    HeroSection,
    HeroContent,
    HeroTitle,
    Breadcrumb,
    BioSection,
    BioImage,
    BioContent,
    BioDetails,
    SkillsContainer,
    SkillCard,
    SkillIcon,
    SkillTitle,
    SkillList,
    ExperienceContainer,
    TimelineContainer,
    TimelineItem,
    TimelineDot,
    TimelineDate,
    TimelineTitle,
    TimelineCompany,
    TimelineDescription,
} from "@/app/styles/About.styles";

/**
 * About page client component with all interactive features
 * @returns {JSX.Element} About page client component
 */
export default function AboutPageClient() {
    // Add structured data for About page
    useEffect(() => {
        // Remove existing structured data
        const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
        existingScripts.forEach(script => script.remove());

        // Add person structured data
        const personData = generatePersonStructuredData();
        const personScript = document.createElement("script");
        Object.assign(personScript, createStructuredDataScript(personData));
        document.head.appendChild(personScript);

        // Add breadcrumb structured data
        const breadcrumbData = generateBreadcrumbStructuredData([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
        ]);
        const breadcrumbScript = document.createElement("script");
        Object.assign(breadcrumbScript, createStructuredDataScript(breadcrumbData));
        document.head.appendChild(breadcrumbScript);

        // Update page title and meta description
        document.title = `${PAGE_METADATA.about.title} | ${SITE_METADATA.author}`;

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.content = PAGE_METADATA.about.description;
        }

        // Cleanup function
        return () => {
            const scriptsToRemove = document.querySelectorAll('script[type="application/ld+json"]');
            scriptsToRemove.forEach(script => script.remove());
        };
    }, []);

    // Skills data organized by category
    const skills = useMemo(
        () => [
            {
                title: "Frontend Development",
                icon: <FiCode />,
                items: [
                    "React",
                    "Next.js",
                    "TypeScript",
                    "HTML/CSS/JS",
                    "Redux",
                    "Styled Components",
                ],
            },
            {
                title: "Backend Development",
                icon: <FiServer />,
                items: ["Node.js", "Express", "RESTful APIs"],
            },
            {
                title: "Database",
                icon: <FiDatabase />,
                items: ["MongoDB"],
            },
            {
                title: "Mobile Development",
                icon: <FiSmartphone />,
                items: ["React Native", "Responsive Design", "Progressive Web Apps"],
            },
            {
                title: "DevOps & Tools",
                icon: <FiBriefcase />,
                items: [
                    "Git",
                    //  "Docker","AWS",
                    "CI/CD",
                    "Vercel",
                    "Testing",
                ],
            },
            {
                title: "AI Tools",
                icon: <FiCpu />,
                items: ["Github Copilot", "OpenAI APIs"],
            },
            {
                title: "Other Skills",
                icon: <FiGlobe />,
                items: [
                    "UI/UX Design",
                    "Agile Methodology",
                    "Team Leadership",
                    "Technical Writing",
                ],
            },
        ],
        []
    );

    // Professional experience timeline
    const experiences = useMemo(
        () => [
            {
                date: "2022 - Present",
                title: "Software Engineer",
                company: "BOLD Technology systems",
                description:
                    "Lead the frontend development team in building scalable web applications using React and Next.js. Improved site performance by 40% and implemented CI/CD pipelines.",
            },
            {
                date: "2021 - 2022",
                title: "Frontend Developer",
                company: "Tutorbin",
                description:
                    "Developed full-stack web applications using the MERN stack. Created RESTful APIs and worked on database design and optimization.",
            },
        ],
        []
    );

    return (
        <AboutContainer>
            <StructuredData page="about" />
            <HeroSection>
                <HeroContent>
                    <Breadcrumb>
                        <Link href={config.navigation.footerLinks[0].href}>
                            {config.navigation.footerLinks[0].label}
                        </Link>{" "}
                        /<span>{config.navigation.footerLinks[1].label}</span>
                    </Breadcrumb>
                    <HeroTitle
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        About Me
                    </HeroTitle>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Learn more about my journey, skills, and experiences
                    </motion.p>
                </HeroContent>
            </HeroSection>

            <Section id="bio">
                <BioSection>
                    <BioImage
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                    >
                        <MyImage
                            src={personal.image}
                            alt="Professional headshot"
                            fill
                            style={{
                                objectFit: "cover",
                                objectPosition: "center top",
                            }}
                            priority
                        />
                    </BioImage>

                    <BioContent
                        variants={fadeIn("left", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                    >
                        <h2>I&apos;m {personal.contacts.name}, a Full-Stack Developer</h2>
                        <p style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}>
                            I&apos;m a passionate full-stack developer with over{" "}
                            <strong style={{ color: "var(--primary)" }}>5 years</strong> of
                            experience in building web applications. I specialize in creating
                            responsive, user-friendly websites and applications using modern
                            technologies.
                        </p>
                        <p style={{ marginBottom: "1.5rem" }}>
                            My journey in web development began during college where I built my
                            first website for a local business. Since then, I&apos;ve worked with
                            startups, agencies, and established companies to create digital
                            solutions that solve real-world problems.
                        </p>
                        <p>
                            When I&apos;m not coding, you can find me hiking, reading tech blogs, or
                            experimenting with new frameworks and libraries. I&apos;m always eager
                            to learn and stay updated with the latest industry trends.
                        </p>

                        <BioDetails>
                            <div>
                                <p>Name</p>
                                <p>{personal.contacts.name}</p>
                            </div>
                            <div>
                                <p>Email</p>
                                <p>{personal.contacts.email}</p>
                            </div>
                            <div>
                                <p>Phone</p>
                                <p>{personal.contacts.phone}</p>
                            </div>
                            <div>
                                <p>Location</p>
                                <p>{personal.contacts.address}</p>
                            </div>
                            <div>
                                <p>Availability</p>
                                <p>Freelance / Full-time</p>
                            </div>
                            <div>
                                <p>Experience</p>
                                <p>4.6+ Years</p>
                            </div>
                        </BioDetails>

                        <Button href={personal.resume} style={{ marginTop: "2rem" }}>
                            Download Resume
                        </Button>
                    </BioContent>
                </BioSection>
            </Section>

            <Section
                id="skills"
                title="My Skills"
                subtitle="Technologies and tools I work with"
                style={{ background: "var(--accent)" }}
            >
                <SkillsContainer>
                    {skills.map((skill, index) => (
                        <SkillCard
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true, amount: 0.1 }}
                        >
                            <SkillIcon>{skill.icon}</SkillIcon>
                            <SkillTitle>{skill.title}</SkillTitle>
                            <SkillList>
                                {skill.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </SkillList>
                        </SkillCard>
                    ))}
                </SkillsContainer>
            </Section>

            <Section id="experience" title="Work Experience" subtitle="My professional journey">
                <ExperienceContainer>
                    <TimelineContainer>
                        {experiences.map((exp, index) => (
                            <TimelineItem
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2 }}
                                viewport={{ once: true, amount: 0.1 }}
                            >
                                <TimelineDot />
                                <TimelineDate>{exp.date}</TimelineDate>
                                <TimelineTitle>{exp.title}</TimelineTitle>
                                <TimelineCompany>{exp.company}</TimelineCompany>
                                <TimelineDescription>{exp.description}</TimelineDescription>
                            </TimelineItem>
                        ))}
                    </TimelineContainer>
                </ExperienceContainer>
            </Section>

            <Section id="education" title="Education" subtitle="My academic background">
                <ExperienceContainer>
                    <TimelineContainer>
                        {personal.education.map((edu, index) => (
                            <TimelineItem
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2 }}
                                viewport={{ once: true, amount: 0.1 }}
                            >
                                <TimelineDot />
                                <TimelineDate>{edu.date}</TimelineDate>
                                <TimelineTitle>{edu.degree}</TimelineTitle>
                                <TimelineCompany>{edu.institution}</TimelineCompany>
                                <TimelineDescription>
                                    <strong>{edu.field}</strong>
                                    <br />
                                    {edu.description}
                                </TimelineDescription>
                            </TimelineItem>
                        ))}
                    </TimelineContainer>
                </ExperienceContainer>
            </Section>
        </AboutContainer>
    );
}
