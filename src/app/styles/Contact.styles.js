import styled from "styled-components";
import { motion } from "framer-motion";

export const ContactContainer = styled.div`
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

    @media (max-width: 768px) {
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

export const ContactSection = styled.section`
    padding: 5rem 2rem;

    @media (max-width: 768px) {
        padding: 3rem 1rem;
    }
`;

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

export const ContactGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 3rem;

    @media (max-width: 992px) {
        grid-template-columns: 1fr;
    }
`;

export const ContactInfo = styled(motion.div)``;

export const ContactItem = styled.div`
    margin-bottom: 2.5rem;
    display: flex;
    align-items: flex-start;
    gap: 1rem;
`;

export const IconContainer = styled.div`
    background-color: var(--accent);
    width: 50px;
    height: 50px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    color: var(--primary);
    flex-shrink: 0;
`;

export const ContactDetails = styled.div``;

export const ContactTitle = styled.h3`
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 0.5rem;
    color: var(--text);

    @media (max-width: 768px) {
        font-size: 1.125rem;
    }
`;

export const ContactText = styled.p`
    color: var(--secondary);
    line-height: 1.6;
`;

export const ContactForm = styled(motion.form)`
    background-color: var(--card-bg);
    border-radius: 10px;
    box-shadow: 0 4px 15px var(--shadow);
    padding: 2.5rem;

    @media (max-width: 768px) {
        padding: 1.5rem;
    }
`;

export const FormTitle = styled.h2`
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 1.5rem;
    color: var(--text);

    @media (max-width: 768px) {
        font-size: 1.75rem;
    }
`;

export const FormRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const FormGroup = styled.div`
    margin-bottom: 1.5rem;
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: var(--text);
`;

export const Input = styled.input`
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 5px;
    border: 1px solid var(--card-border);
    background-color: var(--background);
    color: var(--text);
    font-family: inherit;
    transition: all 0.3s ease;

    &:focus {
        outline: none;
        border-color: var(--primary);
        box-shadow: 0 0 0 2px rgba(0, 112, 243, 0.2);
    }
`;

export const TextArea = styled.textarea`
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 5px;
    border: 1px solid var(--card-border);
    background-color: var(--background);
    color: var(--text);
    font-family: inherit;
    resize: vertical;
    min-height: 150px;
    transition: all 0.3s ease;

    &:focus {
        outline: none;
        border-color: var(--primary);
        box-shadow: 0 0 0 2px rgba(0, 112, 243, 0.2);
    }
`;
