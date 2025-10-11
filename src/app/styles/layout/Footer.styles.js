import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledFooter = styled.footer`
    background-color: var(--footer-bg);
    padding: 3rem 0;
    color: var(--text);
`;

export const FooterContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    padding: 0 2rem;

    @media (max-width: 768px) {
        padding: 0 1rem;
        grid-template-columns: 1fr;
    }
`;

export const FooterSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const FooterTitle = styled.h3`
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: var(--text);
`;

export const FooterLink = styled.span`
    color: var(--text);
    opacity: 0.8;
    transition: all 0.3s ease;
    cursor: pointer;
    display: block;

    &:hover {
        opacity: 1;
        color: var(--primary);
        text-decoration: none;
    }
`;

export const SocialLinks = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;
`;

export const SocialIcon = styled(motion.a)`
    color: var(--text);
    font-size: 1.5rem;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        color: var(--primary);
        transform: translateY(-3px);
    }
`;

export const Copyright = styled.div`
    text-align: center;
    padding-top: 2rem;
    margin-top: 2rem;
    border-top: 1px solid var(--card-border);
    color: var(--text);
    opacity: 0.7;
    font-size: 0.9rem;
    max-width: 1200px;
    margin: 2rem auto 0;
    padding: 2rem 2rem 0;
`;
