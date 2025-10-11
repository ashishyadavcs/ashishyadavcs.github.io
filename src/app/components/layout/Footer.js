"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import { contacts, footerLinks } from "public/data/aboutme";
import {
    StyledFooter,
    FooterContent,
    FooterSection,
    FooterTitle,
    FooterLink,
    SocialLinks,
    SocialIcon,
    Copyright,
} from "../../styles/layout/Footer.styles";

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
