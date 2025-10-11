import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectContainer = styled.div`
    padding-top: 2rem;
`;

export const HeroSection = styled.section`
    position: relative;
    padding: 6rem 2rem;
    background: linear-gradient(180deg, var(--background) 0%, var(--accent) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media (max-width: 768px) {
        padding: 4rem 1rem;
    }
`;

export const HeroContent = styled.div`
    max-width: 800px;
`;

export const HeroTitle = styled(motion.h1)`
    font-size: 3rem;
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
`;

export const Breadcrumb = styled.div`
    margin-bottom: 1.5rem;
    font-size: 1rem;

    a {
        color: var(--secondary);

        &:hover {
            color: var(--primary);
        }
    }

    span {
        color: var(--primary);
    }
`;

export const BackButton = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text);
    margin-top: 1.5rem;
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover {
        color: var(--primary);
        text-decoration: none;
    }
`;

export const ProjectSection = styled.section`
    padding: 5rem 2rem;

    @media (max-width: 768px) {
        padding: 3rem 1rem;
    }
`;

export const Container = styled.div`
    max-width: 1000px;
    margin: 0 auto;
`;

export const ProjectHeader = styled.div`
    margin-bottom: 3rem;
`;

export const ProjectTitle = styled(motion.h1)`
    font-size: 2.5rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

export const ProjectMeta = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 2rem;
`;

export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

export const Tag = styled.span`
    background-color: var(--accent);
    color: var(--text);
    padding: 0.25rem 0.75rem;
    border-radius: 30px;
    font-size: 0.8rem;
    font-weight: 500;
`;

export const ProjectLinks = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
`;

export const ProjectLink = styled.a`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
        text-decoration: none;
    }
`;

export const ProjectImageContainer = styled(motion.div)`
    position: relative;
    height: 500px;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 3rem;
    box-shadow: 0 5px 15px var(--shadow);

    @media (max-width: 768px) {
        height: 300px;
    }
`;

export const ProjectContent = styled.div`
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: var(--text);
    }

    p {
        margin-bottom: 1.5rem;
        color: var(--text);
        line-height: 1.7;
    }

    ul,
    ol {
        margin-bottom: 1.5rem;
        padding-left: 1.5rem;

        li {
            margin-bottom: 0.5rem;
        }
    }

    code {
        background-color: var(--accent);
        padding: 0.2rem 0.4rem;
        border-radius: 4px;
        font-family: var(--font-geist-mono);
        font-size: 0.9rem;
    }

    pre {
        background-color: var(--card-bg);
        border: 1px solid var(--card-border);
        border-radius: 8px;
        padding: 1rem;
        overflow-x: auto;
        margin-bottom: 1.5rem;

        code {
            background-color: transparent;
            padding: 0;
        }
    }
`;
