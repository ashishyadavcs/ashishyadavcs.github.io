import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectContainer = styled.div`
    padding-top: 0;
    min-height: 100vh;
`;

export const HeroSection = styled.section`
    position: relative;
    padding: 8rem 2rem 6rem;
    background: linear-gradient(135deg, var(--background) 0%, var(--accent) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-height: 60vh;

    @media (max-width: 768px) {
        padding: 6rem 1rem 4rem;
        min-height: 50vh;
    }

    @media (max-width: 480px) {
        padding: 5rem 1rem 3rem;
    }
`;

export const HeroContent = styled.div`
    max-width: 800px;
`;

export const HeroTitle = styled(motion.h1)`
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 1024px) {
        font-size: 3rem;
    }

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }

    @media (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const Breadcrumb = styled.div`
    margin-bottom: 2rem;
    font-size: 0.95rem;
    color: var(--text-secondary);
    font-weight: 500;

    a {
        color: var(--text-secondary);
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
            color: var(--primary);
        }
    }

    span {
        color: var(--primary);
        font-weight: 600;
    }

    @media (max-width: 480px) {
        font-size: 0.9rem;
        margin-bottom: 1.5rem;
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
    text-align: center;

    @media (max-width: 768px) {
        margin-bottom: 2rem;
    }
`;

export const ProjectTitle = styled(motion.h1)`
    font-size: 3rem;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: var(--text);

    @media (max-width: 1024px) {
        font-size: 2.5rem;
    }

    @media (max-width: 768px) {
        font-size: 2.25rem;
    }

    @media (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ProjectMeta = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 3rem;

    @media (max-width: 768px) {
        gap: 1rem;
        margin-bottom: 2rem;
    }
`;

export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: center;

    @media (max-width: 480px) {
        gap: 0.5rem;
    }
`;

export const Tag = styled.span`
    background-color: var(--primary);
    color: var(--background);
    padding: 0.5rem 1rem;
    border-radius: 25px;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.3s ease;
    border: 2px solid var(--primary);

    &:hover {
        background-color: transparent;
        color: var(--primary);
    }

    @media (max-width: 480px) {
        padding: 0.375rem 0.75rem;
        font-size: 0.8rem;
    }
`;

export const ProjectLinks = styled.div`
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: 480px) {
        gap: 1rem;
    }
`;

export const ProjectLink = styled.a`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.875rem 1.75rem;
    background-color: transparent;
    color: var(--primary);
    text-decoration: none;
    border: 2px solid var(--primary);
    border-radius: 8px;
    font-weight: 500;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    white-space: nowrap;

    &:hover {
        background-color: var(--primary);
        color: var(--background);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(var(--primary-rgb), 0.3);
        text-decoration: none;
    }

    @media (max-width: 480px) {
        padding: 0.75rem 1.25rem;
        font-size: 0.85rem;
    }
`;

export const ProjectImageContainer = styled(motion.div)`
    position: relative;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 3rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
    border: 1px solid var(--card-border);

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    &:hover img {
        transform: scale(1.02);
    }

    @media (max-width: 1024px) {
        height: 350px;
    }

    @media (max-width: 768px) {
        height: 280px;
        margin-bottom: 2rem;
    }

    @media (max-width: 480px) {
        height: 220px;
        border-radius: 8px;
    }
`;

export const ProjectContent = styled.div`
    max-width: 100%;
    line-height: 1.8;

    h1 {
        font-size: 2.25rem;
        font-weight: 600;
        line-height: 1.2;
        margin-top: 2.5rem;
        margin-bottom: 1.5rem;
        color: var(--text);
        border-bottom: 2px solid var(--primary);
        padding-bottom: 0.5rem;

        @media (max-width: 768px) {
            font-size: 1.875rem;
        }

        @media (max-width: 480px) {
            font-size: 1.75rem;
        }
    }

    h2 {
        font-size: 2rem;
        font-weight: 600;
        line-height: 1.3;
        margin-top: 2.5rem;
        margin-bottom: 1.25rem;
        color: var(--text);

        @media (max-width: 768px) {
            font-size: 1.75rem;
        }
    }

    h3 {
        font-size: 1.75rem;
        font-weight: 500;
        line-height: 1.3;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: var(--text);

        @media (max-width: 768px) {
            font-size: 1.5rem;
        }
    }

    h4 {
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 1.4;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: var(--text);

        @media (max-width: 768px) {
            font-size: 1.25rem;
        }
    }

    h5 {
        font-size: 1.25rem;
        font-weight: 500;
        line-height: 1.4;
        margin-top: 1.5rem;
        margin-bottom: 0.75rem;
        color: var(--text);

        @media (max-width: 768px) {
            font-size: 1.125rem;
        }
    }

    h6 {
        font-size: 1.125rem;
        font-weight: 500;
        line-height: 1.4;
        margin-top: 1.5rem;
        margin-bottom: 0.75rem;
        color: var(--text);

        @media (max-width: 768px) {
            font-size: 1rem;
        }
    }

    p {
        margin-bottom: 1.5rem;
        color: var(--text);
        line-height: 1.8;
        font-size: 1.05rem;

        @media (max-width: 480px) {
            font-size: 1rem;
        }
    }

    ul,
    ol {
        margin-bottom: 1.5rem;
        padding-left: 2rem;

        li {
            margin-bottom: 0.75rem;
            color: var(--text);
            line-height: 1.7;

            @media (max-width: 480px) {
                margin-bottom: 0.5rem;
            }
        }
    }

    ul li {
        position: relative;

        &::marker {
            color: var(--primary);
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
