import styled from "styled-components";
import { motion } from "framer-motion";

export const CardContainer = styled(motion.div)`
    background-color: var(--card-bg);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 10px var(--shadow);
    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
    img {
        object-fit: cover;
    }
`;

export const CardImage = styled.div`
    object-fit: cover;
    transition: transform 0.5s ease;
`;

export const CardContent = styled.div`
    padding: 1.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const CardTitle = styled.h3`
    margin-bottom: 0.5rem;
    color: var(--text);
    font-size: 1.25rem;
`;

export const CardDescription = styled.p`
    color: var(--text);
    opacity: 0.8;
    margin-bottom: 1rem;
    flex: 1;
`;

export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
`;

export const Tag = styled.span`
    background-color: var(--accent);
    color: var(--text);
    padding: 0.25rem 0.75rem;
    border-radius: 30px;
    font-size: 0.8rem;
    font-weight: 500;
`;

export const CardLinks = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: auto;
`;

export const CardLink = styled.a`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--primary);
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover {
        opacity: 0.8;
        text-decoration: none;
    }
`;
