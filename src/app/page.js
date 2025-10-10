"use client";

import MyImage from "./components/MyImage";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";
import Link from "next/link";
import { fadeIn, slideIn, staggerContainer } from "@/app/utils/motion";
import Section from "@/app/components/common/Section";
import Button from "@/app/components/common/Button";
import ProjectCard from "@/app/components/common/ProjectCard";
import { projects } from "@/app/utils/data";
import { contacts, data } from "public/data/aboutme";

const HeroSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 80px);
    text-align: center;
    padding: 2rem;
    background: linear-gradient(180deg, var(--background) 0%, var(--accent) 100%);

    @media (max-width: 768px) {
        padding: 2rem 1rem;
    }
`;

const HeroContent = styled(motion.div)`
    max-width: 800px;
    margin: 0 auto;
`;

const HeroTitle = styled(motion.h1)`
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
    background: linear-gradient(to right, var(--primary), #4facfe);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
`;

const HeroSubtitle = styled(motion.p)`
    font-size: 1.5rem;
    color: var(--secondary);
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

const HeroDescription = styled(motion.p)`
    font-size: 1.1rem;
    color: var(--text);
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
`;

const ButtonGroup = styled(motion.div)`
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 2rem;

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 250px;
        margin: 2rem auto 0;
    }
`;

const SocialLinks = styled(motion.div)`
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
    justify-content: center;
`;

const SocialLink = styled(motion.a)`
    color: var(--text);
    font-size: 1.5rem;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--card-bg);
    box-shadow: 0 2px 10px var(--shadow);

    &:hover {
        color: var(--primary);
        transform: translateY(-3px);
    }
`;

const AboutPreview = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const AboutImage = styled.div`
    position: relative;
    height: 400px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px var(--shadow);

    @media (max-width: 768px) {
        height: 300px;
    }
`;

const AboutContent = styled.div``;

const Stats = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-top: 2rem;
`;

const StatItem = styled(motion.div)`
    padding: 1.5rem;
    background-color: var(--card-bg);
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 4px 10px var(--shadow);

    h3 {
        font-size: 2rem;
        color: var(--primary);
        margin-bottom: 0.5rem;
    }

    p {
        color: var(--text);
        font-size: 0.9rem;
        margin: 0;
    }
`;

const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const ContactContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const ContactInfo = styled.div``;

const ContactForm = styled(motion.form)`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const Label = styled.label`
    font-weight: 500;
    color: var(--text);
`;

const Input = styled.input`
    padding: 0.75rem;
    border-radius: 4px;
    border: 1px solid var(--card-border);
    background: var(--card-bg);
    color: var(--text);
    font-family: inherit;

    &:focus {
        outline: 2px solid var(--primary);
        border-color: var(--primary);
    }
`;

const TextArea = styled.textarea`
    padding: 0.75rem;
    border-radius: 4px;
    border: 1px solid var(--card-border);
    background: var(--card-bg);
    color: var(--text);
    font-family: inherit;
    resize: vertical;
    min-height: 150px;

    &:focus {
        outline: 2px solid var(--primary);
        border-color: var(--primary);
    }
`;

export default function Home() {
    return (
        <>
            <HeroSection>
                <motion.div
                    variants={staggerContainer(0.2, 0.3)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                >
                    <HeroContent>
                        <HeroTitle variants={fadeIn("up", 0.3)}>
                            Hi, I&apos;m{" "}
                            <span style={{ color: "var(--primary)" }}>{contacts.name}</span>
                        </HeroTitle>
                        <HeroSubtitle variants={fadeIn("up", 0.4)}>
                            Full-Stack Developer
                        </HeroSubtitle>
                        <HeroDescription variants={fadeIn("up", 0.5)}>
                            I build modern, responsive web applications with cutting-edge
                            technologies. Passionate about creating seamless user experiences and
                            robust backends.
                        </HeroDescription>

                        <ButtonGroup variants={fadeIn("up", 0.6)}>
                            <Button>
                                View My Work <FiArrowRight style={{ marginLeft: "0.5rem" }} />
                            </Button>
                            <Button secondary>
                                Download CV <FiDownload style={{ marginLeft: "0.5rem" }} />
                            </Button>
                        </ButtonGroup>

                        <SocialLinks variants={fadeIn("up", 0.7)}>
                            <SocialLink
                                href={contacts.socialMedia.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FiGithub />
                            </SocialLink>
                            <SocialLink
                                href={contacts.socialMedia.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FiLinkedin />
                            </SocialLink>
                        </SocialLinks>
                    </HeroContent>
                </motion.div>
            </HeroSection>

            <Section
                id="about-preview"
                title="About Me"
                subtitle="Get to know more about me and what I do"
            >
                <AboutPreview>
                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                    >
                        <AboutImage>
                            <MyImage
                                src={data.image}
                                alt="Profile picture"
                                fill
                                style={{ objectFit: "cover" }}
                                priority
                            />
                        </AboutImage>
                    </motion.div>

                    <AboutContent>
                        <motion.div
                            variants={fadeIn("left", 0.3)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                        >
                            <h2>Crafting Digital Experiences</h2>
                            <p style={{ marginBottom: "1.5rem" }}>
                                I&apos;m a passionate full-stack developer with experience in
                                building high-performance web applications with modern technologies
                                like React, Next.js, Node.js, and more.
                            </p>
                            <p>
                                With a strong focus on clean code and user-centered design, I strive
                                to create engaging and accessible web experiences. I love solving
                                complex problems and continuously learning new technologies.
                            </p>
                            <Link href="/about">
                                <Button style={{ marginTop: "1.5rem" }}>Learn More</Button>
                            </Link>
                        </motion.div>

                        <Stats>
                            <StatItem
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <h3>3+</h3>
                                <p>Years Experience</p>
                            </StatItem>
                            <StatItem
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <h3>30+</h3>
                                <p>Projects Completed</p>
                            </StatItem>
                            <StatItem
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <h3>20+</h3>
                                <p>Happy Clients</p>
                            </StatItem>
                        </Stats>
                    </AboutContent>
                </AboutPreview>
            </Section>

            <Section
                id="featured-projects"
                title="Featured Projects"
                subtitle="Check out some of my latest work"
                centered
                style={{ background: "var(--accent)" }}
            >
                <ProjectsGrid>
                    {projects.slice(0, 3).map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </ProjectsGrid>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    style={{ textAlign: "center", marginTop: "3rem" }}
                >
                    <Link href="/projects">
                        <Button>
                            View All Projects <FiArrowRight style={{ marginLeft: "0.5rem" }} />
                        </Button>
                    </Link>
                </motion.div>
            </Section>

            <Section
                id="contact-preview"
                title="Get In Touch"
                subtitle="Interested in working together? Feel free to contact me"
                centered
            >
                <ContactContainer>
                    <ContactInfo>
                        <motion.div
                            variants={fadeIn("right", 0.3)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                        >
                            <h3 style={{ marginBottom: "1.5rem" }}>
                                Let&apos;s discuss your project
                            </h3>
                            <p>
                                Whether you have a question about a project, a job opportunity, or
                                just want to say hi, feel free to reach out. I&apos;m always open to
                                discussing new projects, creative ideas or opportunities to be part
                                of your vision.
                            </p>
                            <p style={{ marginTop: "1.5rem" }}>
                                <strong>Email:</strong> {contacts.email}
                                <br />
                                <strong>Phone:</strong> {contacts.phone}
                                <br />
                                <strong>Based in:</strong> {contacts.address}
                            </p>
                        </motion.div>
                    </ContactInfo>

                    <ContactForm
                        variants={fadeIn("left", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                    >
                        <FormGroup>
                            <Label htmlFor="name">Name</Label>
                            <Input type="text" id="name" name="name" required />
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" id="email" name="email" required />
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="subject">Subject</Label>
                            <Input type="text" id="subject" name="subject" required />
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="message">Message</Label>
                            <TextArea id="message" name="message" required />
                        </FormGroup>

                        <Button type="submit" style={{ marginTop: "1rem" }}>
                            Send Message
                        </Button>
                    </ContactForm>
                </ContactContainer>
            </Section>
        </>
    );
}
