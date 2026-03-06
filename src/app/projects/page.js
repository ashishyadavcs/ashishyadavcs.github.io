import React from "react";
import ProjectStyle from "@/styles/projects";
import Container from "@/components/layout/Container";
import projects from "public/config/projects";
import ProjectList from "@/components/ProjectList";
import Button from "@/components/Button";
import config from "public/config";

export const metadata = {
    title: config.seo.pages.projects.title,
    description: config.seo.pages.projects.description,
    keywords: config.seo.pages.projects.keywords,
    openGraph: {
        title: config.seo.pages.projects.title,
        description: config.seo.pages.projects.description,
        url: `${config.seo.url}/projects`,
        type: "website",
    },
};

const page = () => {
    const totalProjects = projects.length;
    const allTags = [...new Set(projects.flatMap(p => p.tags || []))];

    return (
        <ProjectStyle>
            {/* Hero */}
            <div className="projects-hero">
                <Container>
                    <span className="hero-badge">
                        <span aria-hidden="true">🚀</span> Portfolio
                    </span>
                    <h1>Projects &amp; Case Studies</h1>
                    <p className="hero-subtitle">
                        A curated collection of {totalProjects}+ projects built with modern
                        technologies — from enterprise platforms to creative experiments.
                    </p>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">{totalProjects}+</span>
                            <span className="stat-label">Projects</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">{allTags.length}+</span>
                            <span className="stat-label">Technologies</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">5+</span>
                            <span className="stat-label">Years Exp.</span>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Projects Grid */}
            <ProjectList projects={projects} />

            {/* CTA */}
            <div className="projects-cta">
                <Container>
                    <h2>Have a project in mind?</h2>
                    <p>
                        Let&apos;s discuss how I can help bring your ideas to life with clean code
                        and modern design.
                    </p>
                    <div className="cta-buttons">
                        <Button href="/contact" arrow>
                            Start a Project
                        </Button>
                        <Button href="/hire" type="secondary">
                            Hire Me
                        </Button>
                    </div>
                </Container>
            </div>
        </ProjectStyle>
    );
};

export default page;
