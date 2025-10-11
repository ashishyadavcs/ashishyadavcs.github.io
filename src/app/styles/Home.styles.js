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
    font-size: 4rem;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;

    @media (max-width: 1024px) {
        font-size: 3.5rem;
    }

    @media (max-width: 768px) {
        font-size: 3rem;
    }

    @media (max-width: 480px) {
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
    gap: 3rem;
    align-items: center;

    @media (max-width: 968px) {
        gap: 2rem;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 2.5rem;
        text-align: center;
    }

    @media (max-width: 480px) {
        gap: 2rem;
        padding: 0 0.5rem;
    }
`;

export const AboutImage = styled.div`
    position: relative;
    height: 400px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px var(--shadow);

    @media (max-width: 968px) {
        height: 350px;
    }

    @media (max-width: 768px) {
        height: 280px;
        margin: 0 auto;
        max-width: 350px;
        width: 100%;
    }

    @media (max-width: 480px) {
        height: 250px;
        max-width: 280px;
        border-radius: 8px;
    }

    @media (max-width: 360px) {
        height: 220px;
        max-width: 250px;
    }
`;

export const AboutContent = styled.div`
    h2 {
        font-size: 2.5rem;
        font-weight: 600;
        line-height: 1.2;
        margin-bottom: 1.5rem;
        color: var(--text);

        @media (max-width: 1024px) {
            font-size: 2.25rem;
        }

        @media (max-width: 768px) {
            font-size: 2rem;
            text-align: center;
            margin-bottom: 1.25rem;
        }

        @media (max-width: 480px) {
            font-size: 1.75rem;
            margin-bottom: 1rem;
        }

        @media (max-width: 360px) {
            font-size: 1.5rem;
        }
    }

    p {
        font-size: 1.1rem;
        line-height: 1.7;
        color: var(--secondary);
        margin-bottom: 1.5rem;

        @media (max-width: 768px) {
            text-align: center;
            font-size: 1rem;
            margin-bottom: 1.25rem;
            padding: 0 1rem;
        }

        @media (max-width: 480px) {
            font-size: 0.95rem;
            line-height: 1.6;
            margin-bottom: 1rem;
            padding: 0 0.5rem;
        }

        @media (max-width: 360px) {
            font-size: 0.9rem;
            padding: 0;
        }
    }

    /* Center the button on mobile */
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 0 1rem;
    }

    @media (max-width: 480px) {
        padding: 0 0.5rem;
    }
`;

export const Stats = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-top: 2.5rem;

    @media (max-width: 768px) {
        gap: 1rem;
        margin-top: 2rem;
        padding: 0 1rem;
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
        gap: 1rem;
        max-width: 280px;
        margin: 2rem auto 0;
        padding: 0;
    }

    @media (max-width: 360px) {
        max-width: 250px;
        gap: 0.75rem;
    }
`;

export const StatItem = styled(motion.div)`
    padding: 1.5rem;
    background-color: var(--card-bg);
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 4px 10px var(--shadow);
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-2px);
    }

    @media (max-width: 768px) {
        padding: 1.25rem;
    }

    @media (max-width: 480px) {
        padding: 1rem;
        border-radius: 6px;
    }

    h3 {
        font-size: 2rem;
        color: var(--primary);
        margin-bottom: 0.5rem;
        font-weight: 700;

        @media (max-width: 768px) {
            font-size: 1.75rem;
        }

        @media (max-width: 480px) {
            font-size: 1.6rem;
            margin-bottom: 0.25rem;
        }

        @media (max-width: 360px) {
            font-size: 1.4rem;
        }
    }

    p {
        color: var(--text);
        font-size: 0.9rem;
        margin: 0;
        font-weight: 500;

        @media (max-width: 480px) {
            font-size: 0.85rem;
        }

        @media (max-width: 360px) {
            font-size: 0.8rem;
        }
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

export const ContactInfo = styled.div`
    h3 {
        font-size: 1.875rem;
        font-weight: 600;
        line-height: 1.3;
        margin-bottom: 1rem;
        color: var(--text);

        @media (max-width: 768px) {
            font-size: 1.625rem;
        }

        @media (max-width: 480px) {
            font-size: 1.5rem;
        }
    }

    p {
        font-size: 1.1rem;
        line-height: 1.6;
        color: var(--secondary);
        margin-bottom: 1rem;
    }
`;

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
