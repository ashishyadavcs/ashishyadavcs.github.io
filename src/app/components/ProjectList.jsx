import React from "react";
import ProjectListStyle from "../styles/projectList";
import Link from "next/link";
import Card from "./Card";

const ProjectList = ({ projects, title }) => {
    return (
        <ProjectListStyle>
            <h2>{title}</h2>
            <ul className="projects">
                {projects.map((project, index) => (
                    <li key={index}>
                        <Link href={`/projects/${project.slug}`} title={project.title}>
                            <Card {...project} />
                        </Link>
                    </li>
                ))}
            </ul>
        </ProjectListStyle>
    );
};

export default ProjectList;
