"use client";

import { motion } from "framer-motion";
import MyImage from "../../components/MyImage";
import StructuredData from "../../components/StructuredData";
import Link from "next/link";
import { FiExternalLink, FiGithub, FiArrowLeft } from "react-icons/fi";
import Button from "@/app/components/common/Button";
import { fadeIn } from "@/app/utils/motion";
import {
    ProjectContainer,
    HeroSection,
    HeroContent,
    HeroTitle,
    Breadcrumb,
    BackButton,
    ProjectSection,
    Container,
    ProjectHeader,
    ProjectTitle,
    ProjectMeta,
    Tags,
    Tag,
    ProjectLinks,
    ProjectLink,
    ProjectImageContainer,
    ProjectContent,
} from "@/app/styles/ProjectDetail.styles";

export default function ProjectPageClient({ project }) {
    return (
        <ProjectContainer>
            <StructuredData page="project" data={{ project }} />
            <HeroSection>
                <HeroContent>
                    <Breadcrumb>
                        <Link href="/">Home</Link> / <Link href="/projects">Projects</Link> /{" "}
                        <span>{project.title}</span>
                    </Breadcrumb>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <HeroTitle>{project.title}</HeroTitle>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        style={{
                            fontSize: "1.25rem",
                            color: "var(--text-secondary)",
                            maxWidth: "600px",
                            margin: "0 auto",
                            lineHeight: "1.6",
                        }}
                    >
                        {project.description}
                    </motion.p>
                </HeroContent>
            </HeroSection>

            <ProjectSection>
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <ProjectHeader>
                            <ProjectMeta>
                                <Tags>
                                    {project.tags.map((tag, index) => (
                                        <Tag key={index}>{tag}</Tag>
                                    ))}
                                </Tags>
                                <ProjectLinks>
                                    {project.demoUrl && (
                                        <ProjectLink
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FiExternalLink /> Live Demo
                                        </ProjectLink>
                                    )}
                                    {project.codeUrl && (
                                        <ProjectLink
                                            href={project.codeUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FiGithub /> Source Code
                                        </ProjectLink>
                                    )}
                                </ProjectLinks>
                            </ProjectMeta>
                        </ProjectHeader>

                        <ProjectImageContainer
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <MyImage
                                src={project.image}
                                alt={project.title}
                                width={800}
                                height={400}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        </ProjectImageContainer>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <ProjectContent dangerouslySetInnerHTML={{ __html: project.content }} />
                        </motion.div>

                        <motion.div
                            style={{
                                display: "flex",
                                gap: "1rem",
                                marginTop: "3rem",
                                flexWrap: "wrap",
                                justifyContent: "center",
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            {project.demoUrl && (
                                <Button
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="primary"
                                >
                                    <FiExternalLink /> View Live Demo
                                </Button>
                            )}
                            {project.codeUrl && (
                                <Button
                                    href={project.codeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="secondary"
                                >
                                    <FiGithub /> View Source
                                </Button>
                            )}
                        </motion.div>

                        <motion.div
                            style={{
                                marginTop: "4rem",
                                display: "flex",
                                justifyContent: "center",
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            <Button href="/projects" variant="outline">
                                <FiArrowLeft /> Back to Projects
                            </Button>
                        </motion.div>
                    </motion.div>
                </Container>
            </ProjectSection>
        </ProjectContainer>
    );
}
