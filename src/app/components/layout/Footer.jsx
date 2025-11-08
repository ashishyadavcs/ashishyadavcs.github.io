import StyledFooter from "@/app/styles/footer";
import config from "public/data";
import React from "react";
import Container from "./Container";

const Footer = () => {
    const { navigation } = config;
    const footersections = navigation.footersections || [];
    return (
        <StyledFooter>
            <Container>
                {footersections.map((section, index) => (
                    <div className="section" key={index}>
                        <h3 className="title">{section.heading}</h3>
                        {section.description && <p>{section.description}</p>}
                        {section.contact && (
                            <div className="contact-info">
                                {section.contact.email && (
                                    <span>Email: {section.contact.email}</span>
                                )}
                                {section.contact.phone && (
                                    <span>Phone: {section.contact.phone}</span>
                                )}
                                {section.contact.location && (
                                    <span>Location: {section.contact.location}</span>
                                )}
                            </div>
                        )}
                        <ul>
                            {section.links?.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                    <a href={link.href}>{link.label}</a>
                                </li>
                            ))}
                            {section.socialLinks?.map((social, socialIndex) => (
                                <li key={`social-${socialIndex}`}>
                                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                                        {social.platform}
                                    </a>
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
