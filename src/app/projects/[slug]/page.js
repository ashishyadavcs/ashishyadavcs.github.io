"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import MyImage from "../../components/MyImage";
import Link from "next/link";
import { FiExternalLink, FiGithub, FiArrowLeft } from "react-icons/fi";
import { projects } from "@/app/utils/data";
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

export default function ProjectPage({ params }) {
    const router = useRouter();
    const [project, setProject] = useState(null);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        if (params.slug) {
            const foundProject = projects.find(p => p.slug === params.slug);
            if (foundProject) {
                setProject(foundProject);
            } else {
                setNotFound(true);
            }
        }
    }, [params.slug]);

    if (notFound) {
        return (
            <Container style={{ paddingTop: "150px", textAlign: "center" }}>
                <h1>Project not found</h1>
                <p>The project you are looking for does not exist.</p>
                <BackButton href="/projects">
                    <FiArrowLeft /> Back to Projects
                </BackButton>
            </Container>
        );
    }

    if (!project) {
        return (
            <Container style={{ paddingTop: "150px", textAlign: "center" }}>
                <p>Loading...</p>
            </Container>
        );
    }

    return (
        <ProjectContainer>
            <HeroSection>
                <HeroContent>
                    <Breadcrumb>
                        <Link href="/">Home</Link> / <Link href="/projects">Projects</Link> /{" "}
                        <span>{project.title}</span>
                    </Breadcrumb>
                    <HeroTitle
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {project.title}
                    </HeroTitle>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Tags>
                            {project.tags.map((tag, index) => (
                                <Tag key={index}>{tag}</Tag>
                            ))}
                        </Tags>
                    </motion.div>
                    <BackButton href="/projects">
                        <FiArrowLeft /> Back to Projects
                    </BackButton>
                </HeroContent>
            </HeroSection>

            <ProjectSection>
                <Container>
                    <ProjectImageContainer
                        variants={fadeIn("up", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                    >
                        <MyImage
                            src={project.image}
                            alt={project.title}
                            fill
                            style={{ objectFit: "cover" }}
                            priority
                        />
                    </ProjectImageContainer>

                    <ProjectHeader>
                        <ProjectTitle
                            variants={fadeIn("up", 0.4)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                        >
                            {project.title}
                        </ProjectTitle>
                        <motion.p
                            variants={fadeIn("up", 0.5)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                        >
                            {project.description}
                        </motion.p>

                        <ProjectLinks>
                            {project.demoUrl && (
                                <Button
                                    as="a"
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Live Demo <FiExternalLink style={{ marginLeft: "0.5rem" }} />
                                </Button>
                            )}

                            {project.codeUrl && (
                                <Button
                                    secondary
                                    as="a"
                                    href={project.codeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Code <FiGithub style={{ marginLeft: "0.5rem" }} />
                                </Button>
                            )}
                        </ProjectLinks>
                    </ProjectHeader>

                    <ProjectContent dangerouslySetInnerHTML={{ __html: project.content }} />
                </Container>
            </ProjectSection>
        </ProjectContainer>
    );
}
