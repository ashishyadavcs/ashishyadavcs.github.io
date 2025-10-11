/**
 * Personal information utilities
 * Provides easy access to personal details and contact information
 */

import { PERSONAL_INFO } from "@/app/constants";

/**
 * Get full contact information
 * @returns {Object} Complete contact details
 */
export const getContactInfo = () => ({
    name: PERSONAL_INFO.NAME,
    email: PERSONAL_INFO.EMAIL,
    phone: PERSONAL_INFO.PHONE,
    location: PERSONAL_INFO.LOCATION,
    image: PERSONAL_INFO.IMAGE,
    title: PERSONAL_INFO.TITLE,
    bio: PERSONAL_INFO.BIO,
});

/**
 * Get social media links
 * @returns {Object} Social media URLs
 */
export const getSocialLinks = () => ({
    linkedin: PERSONAL_INFO.SOCIAL_MEDIA.LINKEDIN,
    github: PERSONAL_INFO.SOCIAL_MEDIA.GITHUB,
    twitter: PERSONAL_INFO.SOCIAL_MEDIA.TWITTER,
    email: `mailto:${PERSONAL_INFO.EMAIL}`,
});

/**
 * Get contact preferences
 * @returns {Object} Contact preferences and availability
 */
export const getContactPreferences = () => PERSONAL_INFO.CONTACT;

/**
 * Format phone number for display
 * @returns {string} Formatted phone number
 */
export const getFormattedPhone = () => {
    const phone = PERSONAL_INFO.PHONE;
    // Format as +91 706 851 3356
    return phone.replace(/(\+91)(\d{3})(\d{3})(\d{4})/, "$1 $2 $3 $4");
};

/**
 * Get professional headline
 * @returns {string} Professional title and bio
 */
export const getProfessionalHeadline = () => `${PERSONAL_INFO.TITLE} - ${PERSONAL_INFO.BIO}`;

/**
 * Get contact CTA (Call to Action) text
 * @returns {string} Encouraging contact message
 */
export const getContactCTA = () =>
    `${PERSONAL_INFO.CONTACT.AVAILABILITY}. ${PERSONAL_INFO.CONTACT.RESPONSE_TIME}.`;

/**
 * Check if a social media link is available
 * @param {string} platform - Social media platform name
 * @returns {boolean} True if link exists
 */
export const hasSocialLink = platform => {
    const links = getSocialLinks();
    return !!(links[platform] && links[platform] !== "#");
};

/**
 * Get all available social media platforms
 * @returns {Array} Array of available social media platforms
 */
export const getAvailableSocialPlatforms = () => {
    const links = getSocialLinks();
    return Object.keys(links).filter(platform => hasSocialLink(platform) && platform !== "email");
};

/**
 * Create vCard data for contact download
 * @returns {string} vCard formatted contact data
 */
export const getVCardData = () => {
    const contact = getContactInfo();
    const social = getSocialLinks();

    return `BEGIN:VCARD
VERSION:3.0
FN:${contact.name}
TITLE:${contact.title}
EMAIL:${contact.email}
TEL:${contact.phone}
ADR:;;${contact.location};;;;
URL:${social.linkedin}
NOTE:${contact.bio}
END:VCARD`;
};

/**
 * Get structured data for SEO (JSON-LD)
 * @returns {Object} Structured data object
 */
export const getStructuredData = () => {
    const contact = getContactInfo();
    const social = getSocialLinks();

    return {
        "@context": "https://schema.org",
        "@type": "Person",
        name: contact.name,
        jobTitle: contact.title,
        description: contact.bio,
        email: contact.email,
        telephone: contact.phone,
        address: {
            "@type": "PostalAddress",
            addressLocality: contact.location,
        },
        sameAs: [social.linkedin, social.github, social.twitter],
        image: contact.image,
    };
};
