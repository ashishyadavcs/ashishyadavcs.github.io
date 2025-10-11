"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/app/utils/data";
import ProjectCard from "@/app/components/common/ProjectCard";
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

export default function Projects() {
    // Extract all unique tags from projects
    const allTags = [...new Set(projects.flatMap(project => project.tags))];
    const [activeFilter, setActiveFilter] = useState("All");

    const handleFilterClick = filter => {
        setActiveFilter(filter);
    };

    const filteredProjects =
        activeFilter === "All"
            ? projects
            : projects.filter(project => project.tags.includes(activeFilter));

    return (
        <ProjectsContainer>
            <HeroSection>
                <HeroContent>
                    <Breadcrumb>
                        <Link href="/">Home</Link> / <span>Projects</span>
                    </Breadcrumb>
                    <HeroTitle
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        My Projects
                    </HeroTitle>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Explore my recent work and creative solutions
                    </motion.p>
                </HeroContent>
            </HeroSection>

            <ProjectsSection>
                <Container>
                    <FiltersContainer>
                        <FilterButton
                            $active={activeFilter === "All"}
                            onClick={() => handleFilterClick("All")}
                        >
                            All
                        </FilterButton>
                        {allTags.map((tag, index) => (
                            <FilterButton
                                key={index}
                                $active={activeFilter === tag}
                                onClick={() => handleFilterClick(tag)}
                            >
                                {tag}
                            </FilterButton>
                        ))}
                    </FiltersContainer>

                    <ProjectsGrid>
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                variants={fadeIn("up", 0.1 * index)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.1 }}
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </ProjectsGrid>
                </Container>
            </ProjectsSection>
        </ProjectsContainer>
    );
}
