"use client";

import MyImage from "../MyImage";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import {
    CardContainer,
    ImageContainer,
    CardImage,
    CardContent,
    CardTitle,
    CardDescription,
    Tags,
    Tag,
    CardLinks,
    CardLink,
} from "@/app/styles/components/ProjectCard.styles";
import Link from "next/link";

const ProjectCard = ({ project }) => {
    const { title, description, image, tags, demoUrl, codeUrl, slug } = project;

    return (
        <CardContainer
            whileHover={{
                y: -5,
                boxShadow: "0 10px 20px var(--shadow)",
            }}
        >
            <Link href={`/projects/${slug}`} passHref style={{ textDecoration: "none" }}>
                <ImageContainer>
                    <MyImage
                        src={image}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority
                    />
                </ImageContainer>
            </Link>
            <CardContent>
                <Link href={`/projects/${slug}`} passHref style={{ textDecoration: "none" }}>
                    <CardTitle>{title}</CardTitle>
                </Link>

                <CardDescription>{description}</CardDescription>

                <Tags>
                    {tags.map(tag => (
                        <Tag key={tag}>{tag}</Tag>
                    ))}
                </Tags>

                <CardLinks>
                    {demoUrl && (
                        <CardLink href={demoUrl} target="_blank" rel="noopener noreferrer">
                            <FiExternalLink /> Live Demo
                        </CardLink>
                    )}

                    {codeUrl && (
                        <CardLink href={codeUrl} target="_blank" rel="noopener noreferrer">
                            <FiGithub /> Code
                        </CardLink>
                    )}
                </CardLinks>
            </CardContent>
        </CardContainer>
    );
};

export default ProjectCard;
