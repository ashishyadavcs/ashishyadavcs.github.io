import StyledFooter from "@/app/styles/footer";
import config from "public/config";
import React from "react";
import Container from "@/components/layout/Container";
import { FaGithub } from "react-icons/fa";
import personal from "public/config/aboutme";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import Link from "next/link";
const Footer = () => {
    const { navigation } = config;
    const footersections = navigation.footersections || [];
    const socials = [
        {
            icon: <FaGithub />,
            url: personal.socialMedia.github,
        },
        {
            icon: <FaTwitter />,
            url: personal.socialMedia.twitter,
        },
        {
            icon: <FaLinkedinIn />,
            url: personal.socialMedia.linkedin,
        },
    ];
    return (
        <StyledFooter>
            <Container>
                {footersections.map((section, index) => (
                    <div className="section" key={index}>
                        <h3 className="title">{section.heading}</h3>
                        {section.description && <p>{section.description}</p>}
                        {section.contact && (
                            <div className="socials">
                                {socials.map((social, socialIndex) => (
                                    <div className="social" key={socialIndex}>
                                        <Link
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {social.icon}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        )}
                        <ul>
                            {section.links?.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                    <Link href={link.href}>{link.label}</Link>
                                </li>
                            ))}
                            {section.socialLinks?.map((social, socialIndex) => (
                                <li key={`social-${socialIndex}`}>
                                    <Link
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {social.platform}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </Container>
            <div className="sub-footer">
                <Container>
                    <p>© {new Date().getFullYear()} Ashish Yadav. All rights reserved.</p>
                </Container>
            </div>
        </StyledFooter>
    );
};

export default Footer;
