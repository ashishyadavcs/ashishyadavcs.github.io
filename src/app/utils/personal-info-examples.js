/**
 * Example usage of personal information constants and utilities
 * This file demonstrates how to use the centralized personal information
 */

import { PERSONAL_INFO, SITE_METADATA } from "@/app/constants";

import {
    getContactInfo,
    getSocialLinks,
    getFormattedPhone,
    getProfessionalHeadline,
    getVCardData,
    getStructuredData,
} from "@/app/utils/personal-info";

// Example 1: Basic usage of constants
console.log("Name:", PERSONAL_INFO.NAME);
console.log("Email:", PERSONAL_INFO.EMAIL);
console.log("LinkedIn:", PERSONAL_INFO.SOCIAL_MEDIA.LINKEDIN);

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
        title: `${PERSONAL_INFO.NAME} - ${PERSONAL_INFO.TITLE}`,
        description: PERSONAL_INFO.BIO,
        openGraph: {
            title: `${PERSONAL_INFO.NAME} - Portfolio`,
            description: PERSONAL_INFO.BIO,
            images: [PERSONAL_INFO.IMAGE],
        },
        structuredData: getStructuredData(),
    };
};

// Example 5: Contact form default values
export const getContactFormDefaults = () => ({
    to: PERSONAL_INFO.EMAIL,
    subject: `Contact from ${SITE_METADATA.title}`,
    responseTime: PERSONAL_INFO.CONTACT.RESPONSE_TIME,
});

// Example 6: Download vCard functionality
export const downloadVCard = () => {
    const vCardData = getVCardData();
    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${PERSONAL_INFO.NAME.replace(" ", "_")}.vcf`;
    link.click();
    window.URL.revokeObjectURL(url);
};
