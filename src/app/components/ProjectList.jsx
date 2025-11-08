import React from "react";
import ProjectListStyle from "../styles/projectList";
import Link from "next/link";
import Card from "./Card";

const ProjectList = ({ projects }) => {
    return (
        <ProjectListStyle>
            <ul className="projects">
                {projects.map((project, index) => (
                    <li key={index}>
                        <Link href={`/projects/${project.slug}`}>
                            <Card {...project} />
                        </Link>
                    </li>
                ))}
            </ul>
        </ProjectListStyle>
    );
};

export default ProjectList;
