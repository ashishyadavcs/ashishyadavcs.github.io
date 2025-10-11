import styled from "styled-components";
import { motion } from "framer-motion";

export const HeroSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 80px);
    text-align: center;
    padding: 2rem;
    background: linear-gradient(180deg, var(--background) 0%, var(--accent) 100%);

    @media (max-width: 768px) {
        padding: 2rem 1rem;
    }
`;

export const HeroContent = styled(motion.div)`
    max-width: 800px;
    margin: 0 auto;
`;

export const HeroTitle = styled(motion.h1)`
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
    background: linear-gradient(to right, var(--primary), #4facfe);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
`;

export const HeroSubtitle = styled(motion.p)`
    font-size: 1.5rem;
    color: var(--secondary);
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

export const HeroDescription = styled(motion.p)`
    font-size: 1.1rem;
    color: var(--text);
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
`;

export const ButtonGroup = styled(motion.div)`
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 2rem;

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 250px;
        margin: 2rem auto 0;
    }
`;

export const SocialLinks = styled(motion.div)`
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
    justify-content: center;
`;

export const SocialLink = styled(motion.a)`
    color: var(--text);
    font-size: 1.5rem;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--card-bg);
    box-shadow: 0 2px 10px var(--shadow);

    &:hover {
        color: var(--primary);
        transform: translateY(-3px);
    }
`;

export const AboutPreview = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const AboutImage = styled.div`
    position: relative;
    height: 400px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px var(--shadow);

    @media (max-width: 768px) {
        height: 300px;
    }
`;

export const AboutContent = styled.div``;

export const Stats = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-top: 2rem;
`;

export const StatItem = styled(motion.div)`
    padding: 1.5rem;
    background-color: var(--card-bg);
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 4px 10px var(--shadow);

    h3 {
        font-size: 2rem;
        color: var(--primary);
        margin-bottom: 0.5rem;
    }

    p {
        color: var(--text);
        font-size: 0.9rem;
        margin: 0;
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

export const ContactContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const ContactInfo = styled.div``;

export const ContactForm = styled(motion.form)`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const Label = styled.label`
    font-weight: 500;
    color: var(--text);
`;

export const Input = styled.input`
    padding: 0.75rem;
    border-radius: 4px;
    border: 1px solid var(--card-border);
    background: var(--card-bg);
    color: var(--text);
    font-family: inherit;

    &:focus {
        outline: 2px solid var(--primary);
        border-color: var(--primary);
    }
`;

export const TextArea = styled.textarea`
    padding: 0.75rem;
    border-radius: 4px;
    border: 1px solid var(--card-border);
    background: var(--card-bg);
    color: var(--text);
    font-family: inherit;
    resize: vertical;
    min-height: 150px;

    &:focus {
        outline: 2px solid var(--primary);
        border-color: var(--primary);
    }
`;
