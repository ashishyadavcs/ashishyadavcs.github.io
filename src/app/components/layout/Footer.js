"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import { NAVIGATION, SITE_METADATA, PERSONAL_INFO } from "@/app/constants";
import { hoverVariants } from "@/app/utils/animation-variants";
import { getContactInfo, getSocialLinks } from "@/app/utils/personal-info";
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

/**
 * Footer component with social links, quick navigation, and contact information
 * @returns {JSX.Element} Footer component
 */
const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Social media icons mapping
    const socialIcons = {
        github: FiGithub,
        linkedin: FiLinkedin,
        twitter: FiTwitter,
        email: FiMail,
    };

    // Get personal information using utilities
    const contactInfo = getContactInfo();
    const socialLinks = getSocialLinks();

    // Social media data
    const socialMedia = [
        {
            name: "github",
            url: socialLinks.github,
            label: "GitHub",
        },
        {
            name: "linkedin",
            url: socialLinks.linkedin,
            label: "LinkedIn",
        },
        {
            name: "twitter",
            url: socialLinks.twitter,
            label: "Twitter",
        },
        {
            name: "email",
            url: socialLinks.email,
            label: "Email",
        },
    ];

    return (
        <StyledFooter>
            <FooterContent>
                <FooterSection>
                    <FooterTitle>Portfolio</FooterTitle>
                    <p>{contactInfo.bio}</p>
                    <SocialLinks>
                        {socialMedia.map(social => {
                            const IconComponent = socialIcons[social.name];
                            const isExternal = social.name !== "email";

                            return (
                                <SocialIcon
                                    key={social.name}
                                    href={social.url}
                                    target={isExternal ? "_blank" : undefined}
                                    rel={isExternal ? "noopener noreferrer" : undefined}
                                    aria-label={social.label}
                                    {...hoverVariants.scale}
                                >
                                    <IconComponent />
                                </SocialIcon>
                            );
                        })}
                    </SocialLinks>
                </FooterSection>

                <FooterSection>
                    <FooterTitle>Quick Links</FooterTitle>
                    {NAVIGATION.LINKS.map(link => (
                        <Link key={link.href} href={link.href}>
                            <FooterLink>{link.label}</FooterLink>
                        </Link>
                    ))}
                </FooterSection>

                <FooterSection>
                    <FooterTitle>Contact</FooterTitle>
                    <p>{contactInfo.email}</p>
                    <p>{contactInfo.phone}</p>
                    <p>{contactInfo.location}</p>
                </FooterSection>
            </FooterContent>

            <Copyright>
                &copy; {currentYear} {SITE_METADATA.TITLE}. All rights reserved.
            </Copyright>
        </StyledFooter>
    );
};

export default Footer;
