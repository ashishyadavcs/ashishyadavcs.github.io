import React from "react";
import ProjectStyle from "../styles/projects";
import Container from "../components/layout/Container";
import projects from "public/config/projects";
import ProjectList from "../components/ProjectList";

const page = () => {
    return (
        <ProjectStyle>
            <Container>
                <h1 className="heading">🚀 Projects Done</h1>
                <p>
                    Complete collection of my development work across different domains and
                    technologies
                </p>
                <ProjectList projects={projects} />
            </Container>
        </ProjectStyle>
    );
};

export default page;
