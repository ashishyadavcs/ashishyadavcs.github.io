import React from "react";
import ProjectStyle from "../styles/projects";
import Container from "../components/layout/Container";
import projects from "public/config/projects";
import ProjectList from "../components/ProjectList";

const page = () => {
    return (
        <ProjectStyle>
            <Container>
                <h1 className="heading">Projects</h1>
                <ProjectList projects={projects} />
            </Container>
        </ProjectStyle>
    );
};

export default page;
