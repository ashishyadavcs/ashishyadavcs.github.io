"use client";

import styled from "styled-components";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";
import { contacts, footerLinks } from "public/data/aboutme";
const StyledFooter = styled.footer`
    background-color: var(--footer-bg);
    padding: 3rem 0;
    color: var(--text);
`;

const FooterContent = styled.div`
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

const FooterSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const FooterTitle = styled.h3`
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: var(--text);
`;

const FooterLink = styled.span`
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

const SocialLinks = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;
`;

const SocialIcon = styled(motion.a)`
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

const Copyright = styled.div`
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

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <StyledFooter>
            <FooterContent>
                <FooterSection>
                    <FooterTitle>Portfolio</FooterTitle>
                    <div dangerouslySetInnerHTML={{ __html: contacts.description }} />
                    <SocialLinks>
                        <SocialIcon
                            href={contacts.socialMedia.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FiGithub />
                        </SocialIcon>
                        <SocialIcon
                            href={contacts.socialMedia.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FiLinkedin />
                        </SocialIcon>
                        <SocialIcon
                            href={contacts.socialMedia.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FiTwitter />
                        </SocialIcon>
                        <SocialIcon
                            href={`mailto:${contacts.email}`}
                            aria-label="Email"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FiMail />
                        </SocialIcon>
                    </SocialLinks>
                </FooterSection>

                <FooterSection>
                    <FooterTitle>Quick Links</FooterTitle>
                    {footerLinks.map(link => (
                        <Link key={link.label} href={link.href}>
                            <FooterLink>{link.label}</FooterLink>
                        </Link>
                    ))}
                </FooterSection>

                <FooterSection>
                    <FooterTitle>Contact</FooterTitle>
                    <p>{contacts.email}</p>
                    <p>{contacts.phone}</p>
                    <p>{contacts.address}</p>
                </FooterSection>
            </FooterContent>

            <Copyright>&copy; {currentYear} Portfolio. All rights reserved.</Copyright>
        </StyledFooter>
    );
};

export default Footer;
