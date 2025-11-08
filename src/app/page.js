import React from "react";
import Container from "./components/layout/Container";
import ProjectList from "./components/ProjectList";
import projects from "public/data/projects";
import HomeStyle from "./styles/home";

const page = () => {
    return (
        <HomeStyle>
            <Container>
                <h1 className="heading">Ashish Yadav</h1>
                <ProjectList projects={projects} />
            </Container>
        </HomeStyle>
    );
};

export default page;
