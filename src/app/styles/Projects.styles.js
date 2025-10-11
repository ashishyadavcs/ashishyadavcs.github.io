import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectsContainer = styled.div`
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

export const ProjectsSection = styled.section`
    padding: 5rem 2rem;

    @media (max-width: 768px) {
        padding: 3rem 1rem;
    }
`;

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

export const FiltersContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 3rem;
`;

export const FilterButton = styled.button`
    background: ${props => (props.$active ? "var(--primary)" : "var(--card-bg)")};
    color: ${props => (props.$active ? "white" : "var(--text)")};
    border: ${props => (props.$active ? "none" : "1px solid var(--card-border)")};
    padding: 0.75rem 1.5rem;
    border-radius: 30px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover {
        background: ${props => (props.$active ? "var(--primary)" : "var(--accent)")};
    }
`;

export const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;
