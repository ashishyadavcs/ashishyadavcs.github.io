/**
 * Example usage of personal information constants and utilities
 * This file demonstrates how to use the centralized personal information
 */

import { SITE_METADATA } from "@/app/constants";
import config from "../../../public/data/index.js";

import {
    getContactInfo,
    getSocialLinks,
    getFormattedPhone,
    getProfessionalHeadline,
    getVCardData,
    getStructuredData,
} from "@/app/utils/personal-info";

// Example 1: Basic usage of constants
console.log("Name:", config.personal.contacts.name);
console.log("Email:", config.personal.contacts.email);
console.log("LinkedIn:", config.personal.contacts.socialMedia.linkedin);

// Example 2: Using utility functions
const contactInfo = getContactInfo();
console.log("Contact Info:", contactInfo);

const socialLinks = getSocialLinks();
console.log("Social Links:", socialLinks);

const formattedPhone = getFormattedPhone();
console.log("Formatted Phone:", formattedPhone); // +91 706 851 3356

const headline = getProfessionalHeadline();
console.log("Professional Headline:", headline);

// Example 3: Component usage
export const ContactCard = () => {
    const contact = getContactInfo();
    const social = getSocialLinks();

    return (
        <div className="contact-card">
            <img src={contact.image} alt={contact.name} />
            <h2>{contact.name}</h2>
            <p>{contact.title}</p>
            <p>{contact.bio}</p>

            <div className="contact-details">
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
                <a href={`tel:${contact.phone}`}>{getFormattedPhone()}</a>
                <p>{contact.location}</p>
            </div>

            <div className="social-links">
                <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
                <a href={social.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
                <a href={social.twitter} target="_blank" rel="noopener noreferrer">
                    Twitter
                </a>
            </div>
        </div>
    );
};

// Example 4: SEO usage
export const generatePersonSEO = () => {
    return {
        title: `${config.personal.contacts.name} - Software Engineer`,
        description: "A passionate full-stack developer with expertise in modern web technologies",
        openGraph: {
            title: `${config.personal.contacts.name} - Portfolio`,
            description:
                "A passionate full-stack developer with expertise in modern web technologies",
            images: [config.personal.image],
        },
        structuredData: getStructuredData(),
    };
};

// Example 5: Contact form default values
export const getContactFormDefaults = () => ({
    to: config.personal.contacts.email,
    subject: `Contact from ${SITE_METADATA.title}`,
    responseTime: "Usually responds within 24 hours",
});

// Example 6: Download vCard functionality
export const downloadVCard = () => {
    const vCardData = getVCardData();
    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${config.personal.contacts.name.replace(" ", "_")}.vcf`;
    link.click();
    window.URL.revokeObjectURL(url);
};
