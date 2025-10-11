import styled from "styled-components";
import { motion } from "framer-motion";
import { media } from "@/app/config/media";

export const AboutContainer = styled.div`
    padding-top: 2rem;
    width: 100%;
    min-width: 0;
`;

export const HeroSection = styled.section`
    position: relative;
    padding: 6rem 2rem;
    background: linear-gradient(180deg, var(--background) 0%, var(--accent) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    ${media.sm} {
        padding: 4rem 1rem;
    }
`;

export const HeroContent = styled.div`
    max-width: 800px;
`;

export const HeroTitle = styled(motion.h1)`
    font-size: 4rem;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 1024px) {
        font-size: 3.5rem;
    }

    ${media.sm} {
        font-size: 3rem;
    }

    @media (max-width: 480px) {
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

export const BioSection = styled.div`
    display: grid;
    grid-template-columns: 2fr 3fr;
    gap: 3rem;
    align-items: center;
    width: 100%;
    min-width: 0;

    ${media.sm} {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    @media (max-width: 480px) {
        gap: 1rem;
    }
`;

export const BioImage = styled(motion.div)`
    position: relative;
    height: 500px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px var(--shadow);

    ${media.sm} {
        height: 400px;
        margin: 0 auto;
        max-width: 400px;
    }

    ${media.xs} {
        height: 300px;
        max-width: 300px;
    }
`;

export const BioContent = styled(motion.div)`
    min-width: 0; /* Prevents flex items from overflowing */
    overflow-wrap: break-word;

    h2 {
        word-wrap: break-word;
        overflow-wrap: break-word;
    }

    p {
        word-wrap: break-word;
        overflow-wrap: break-word;
        hyphens: auto;
    }
`;

export const BioDetails = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    margin-top: 1.5rem;
    width: 100%;

    ${media.sm} {
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    @media (max-width: 480px) {
        gap: 0.8rem;
        margin-top: 1rem;
    }

    div {
        min-width: 0;
        width: 100%;

        p:first-child {
            font-weight: 700;
            margin-bottom: 0.25rem;
            color: var(--text);
            font-size: 0.9rem;

            @media (max-width: 480px) {
                font-size: 0.85rem;
            }
        }

        p:last-child {
            color: var(--secondary);
            word-wrap: break-word;
            overflow-wrap: break-word;
            word-break: break-all;
            hyphens: auto;
            font-size: 0.9rem;
            line-height: 1.4;

            @media (max-width: 480px) {
                font-size: 0.8rem;
                line-height: 1.3;
            }
        }
    }
`;

export const SkillsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    ${media.sm} {
        grid-template-columns: repeat(2, 1fr);
    }

    ${media.xs} {
        grid-template-columns: 1fr;
    }
`;

export const SkillCard = styled(motion.div)`
    background: var(--card-bg);
    border-radius: 10px;
    padding: 2rem;
    box-shadow: 0 4px 10px var(--shadow);
    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px var(--shadow);
    }
`;

export const SkillIcon = styled.div`
    font-size: 2.5rem;
    color: var(--primary);
    margin-bottom: 1.5rem;
`;

export const SkillTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 1rem;
    color: var(--text);

    @media (max-width: 768px) {
        font-size: 1.25rem;
    }
`;

export const SkillList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;

    li {
        margin-bottom: 0.5rem;
        display: flex;
        align-items: center;

        &:before {
            content: "•";
            color: var(--primary);
            margin-right: 0.5rem;
        }
    }
`;

export const ExperienceContainer = styled.div``;

export const TimelineContainer = styled.div`
    position: relative;
    margin: 2rem 0;

    &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 2px;
        background-color: var(--card-border);

        ${media.sm} {
            left: 8px;
        }
    }
`;

export const TimelineItem = styled(motion.div)`
    position: relative;
    padding-left: 3rem;
    padding-bottom: 2.5rem;

    &:last-child {
        padding-bottom: 0;
    }

    ${media.sm} {
        padding-left: 2rem;
    }
`;

export const TimelineDot = styled.div`
    position: absolute;
    left: -6px;
    top: 0;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: var(--primary);

    ${media.sm} {
        left: 2px;
    }
`;

export const TimelineDate = styled.div`
    display: inline-block;
    padding: 0.25rem 0.75rem;
    background-color: var(--accent);
    border-radius: 4px;
    margin-bottom: 0.75rem;
    font-weight: 500;
`;

export const TimelineTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 0.5rem;
    color: var(--text);

    @media (max-width: 768px) {
        font-size: 1.25rem;
    }
`;

export const TimelineCompany = styled.div`
    font-weight: 500;
    color: var(--primary);
    margin-bottom: 1rem;
`;

export const TimelineDescription = styled.p`
    color: var(--secondary);
`;
