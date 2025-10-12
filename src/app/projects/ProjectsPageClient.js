"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ProjectCard from "@/app/components/common/ProjectCard";
import StructuredData from "@/app/components/StructuredData";
import { fadeIn } from "@/app/utils/motion";
import {
    ProjectsContainer,
    HeroSection,
    HeroContent,
    HeroTitle,
    Breadcrumb,
    ProjectsSection,
    Container,
    FiltersContainer,
    FilterButton,
    ProjectsGrid,
} from "@/app/styles/Projects.styles";

export default function ProjectsPageClient({ projects }) {
    const [activeFilter, setActiveFilter] = useState("All");

    // Get unique tags from all projects
    const allTags = ["All", ...new Set(projects.flatMap(project => project.tags))];

    // Filter projects based on active filter
    const filteredProjects =
        activeFilter === "All"
            ? projects
            : projects.filter(project => project.tags.includes(activeFilter));

    return (
        <ProjectsContainer>
            <StructuredData page="projects" />
            <HeroSection>
                <HeroContent>
                    <Breadcrumb>
                        <Link href="/">Home</Link> / <span>Projects</span>
                    </Breadcrumb>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <HeroTitle>My Projects</HeroTitle>
                    </motion.div>
                </HeroContent>
            </HeroSection>

            <ProjectsSection>
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <FiltersContainer>
                            {allTags.map(tag => (
                                <FilterButton
                                    key={tag}
                                    $active={activeFilter === tag}
                                    onClick={() => setActiveFilter(tag)}
                                >
                                    {tag}
                                </FilterButton>
                            ))}
                        </FiltersContainer>

                        <ProjectsGrid>
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    variants={fadeIn("up", index * 0.1)}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                >
                                    <ProjectCard project={project} />
                                </motion.div>
                            ))}
                        </ProjectsGrid>
                    </motion.div>
                </Container>
            </ProjectsSection>
        </ProjectsContainer>
    );
}
