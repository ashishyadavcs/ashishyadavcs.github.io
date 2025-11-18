import React from "react";
import ProjectStyle from "@/styles/projects";
import Container from "@/components/layout/Container";
import projects from "public/config/projects";
import ProjectList from "@/components/ProjectList";
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
    return (
        <ProjectStyle>
            <Container>
                <h1 className="heading">🚀 Projects Done</h1>
                <p>
                    Complete collection of my development work across different domains and
                    technologies
                </p>
            </Container>
            <ProjectList projects={projects} />
        </ProjectStyle>
    );
};

export default page;
