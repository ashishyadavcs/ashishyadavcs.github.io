/**
 * Typography utilities for consistent text styling across the application
 */

import { TYPOGRAPHY } from "@/app/constants";

/**
 * Get heading styles by level
 * @param {number} level - Heading level (1-6)
 * @returns {Object} CSS styles object
 */
export const getHeadingStyles = (level = 1) => {
    const headingMap = {
        1: TYPOGRAPHY.FONT_SIZE.H1,
        2: TYPOGRAPHY.FONT_SIZE.H2,
        3: TYPOGRAPHY.FONT_SIZE.H3,
        4: TYPOGRAPHY.FONT_SIZE.H4,
        5: TYPOGRAPHY.FONT_SIZE.H5,
        6: TYPOGRAPHY.FONT_SIZE.H6,
    };

    const sizes = headingMap[level] || TYPOGRAPHY.FONT_SIZE.H1;

    return {
        fontSize: sizes.DESKTOP,
        fontWeight: level <= 2 ? TYPOGRAPHY.FONT_WEIGHT.BOLD : TYPOGRAPHY.FONT_WEIGHT.SEMIBOLD,
        lineHeight: level <= 2 ? TYPOGRAPHY.LINE_HEIGHT.TIGHT : TYPOGRAPHY.LINE_HEIGHT.NORMAL,
        color: "var(--text)",

        "@media (max-width: 1024px)": {
            fontSize: sizes.TABLET,
        },

        "@media (max-width: 768px)": {
            fontSize: sizes.MOBILE,
        },
    };
};

/**
 * Get hero heading styles with gradient
 * @returns {Object} CSS styles for hero headings
 */
export const getHeroHeadingStyles = () => ({
    fontSize: TYPOGRAPHY.FONT_SIZE.H1.DESKTOP,
    fontWeight: TYPOGRAPHY.FONT_WEIGHT.BOLD,
    lineHeight: TYPOGRAPHY.LINE_HEIGHT.TIGHT,
    background: "linear-gradient(135deg, var(--primary), var(--secondary))",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",

    "@media (max-width: 1024px)": {
        fontSize: TYPOGRAPHY.FONT_SIZE.H1.TABLET,
    },

    "@media (max-width: 768px)": {
        fontSize: TYPOGRAPHY.FONT_SIZE.H1.MOBILE,
    },
});

/**
 * Get body text styles by size
 * @param {'large'|'normal'|'small'|'caption'} size - Text size variant
 * @returns {Object} CSS styles object
 */
export const getBodyStyles = (size = "normal") => {
    const sizeMap = {
        large: TYPOGRAPHY.FONT_SIZE.BODY_LARGE,
        normal: TYPOGRAPHY.FONT_SIZE.BODY,
        small: TYPOGRAPHY.FONT_SIZE.BODY_SMALL,
        caption: TYPOGRAPHY.FONT_SIZE.CAPTION,
    };

    return {
        fontSize: sizeMap[size] || TYPOGRAPHY.FONT_SIZE.BODY,
        fontWeight: TYPOGRAPHY.FONT_WEIGHT.NORMAL,
        lineHeight: TYPOGRAPHY.LINE_HEIGHT.NORMAL,
        color: "var(--text)",
    };
};

/**
 * Get responsive font size CSS for styled-components
 * @param {Object} sizes - Size object with DESKTOP, TABLET, MOBILE properties
 * @returns {string} CSS string with media queries
 */
export const getResponsiveFontSize = sizes => `
    font-size: ${sizes.DESKTOP};
    
    @media (max-width: 1024px) {
        font-size: ${sizes.TABLET};
    }
    
    @media (max-width: 768px) {
        font-size: ${sizes.MOBILE};
    }
`;

/**
 * Get gradient text styles
 * @returns {string} CSS string for gradient text
 */
export const getGradientTextStyles = () => `
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

/**
 * Typography mixins for styled-components
 */
export const typography = {
    // Heading mixins
    h1: `
        ${getResponsiveFontSize(TYPOGRAPHY.FONT_SIZE.H1)}
        font-weight: ${TYPOGRAPHY.FONT_WEIGHT.BOLD};
        line-height: ${TYPOGRAPHY.LINE_HEIGHT.TIGHT};
    `,

    h2: `
        ${getResponsiveFontSize(TYPOGRAPHY.FONT_SIZE.H2)}
        font-weight: ${TYPOGRAPHY.FONT_WEIGHT.BOLD};
        line-height: ${TYPOGRAPHY.LINE_HEIGHT.TIGHT};
    `,

    h3: `
        ${getResponsiveFontSize(TYPOGRAPHY.FONT_SIZE.H3)}
        font-weight: ${TYPOGRAPHY.FONT_WEIGHT.SEMIBOLD};
        line-height: ${TYPOGRAPHY.LINE_HEIGHT.NORMAL};
    `,

    h4: `
        ${getResponsiveFontSize(TYPOGRAPHY.FONT_SIZE.H4)}
        font-weight: ${TYPOGRAPHY.FONT_WEIGHT.SEMIBOLD};
        line-height: ${TYPOGRAPHY.LINE_HEIGHT.NORMAL};
    `,

    h5: `
        ${getResponsiveFontSize(TYPOGRAPHY.FONT_SIZE.H5)}
        font-weight: ${TYPOGRAPHY.FONT_WEIGHT.MEDIUM};
        line-height: ${TYPOGRAPHY.LINE_HEIGHT.NORMAL};
    `,

    h6: `
        ${getResponsiveFontSize(TYPOGRAPHY.FONT_SIZE.H6)}
        font-weight: ${TYPOGRAPHY.FONT_WEIGHT.MEDIUM};
        line-height: ${TYPOGRAPHY.LINE_HEIGHT.NORMAL};
    `,

    // Hero heading with gradient
    hero: `
        ${getResponsiveFontSize(TYPOGRAPHY.FONT_SIZE.H1)}
        font-weight: ${TYPOGRAPHY.FONT_WEIGHT.BOLD};
        line-height: ${TYPOGRAPHY.LINE_HEIGHT.TIGHT};
        ${getGradientTextStyles()}
    `,

    // Body text mixins
    bodyLarge: `
        font-size: ${TYPOGRAPHY.FONT_SIZE.BODY_LARGE};
        font-weight: ${TYPOGRAPHY.FONT_WEIGHT.NORMAL};
        line-height: ${TYPOGRAPHY.LINE_HEIGHT.NORMAL};
    `,

    body: `
        font-size: ${TYPOGRAPHY.FONT_SIZE.BODY};
        font-weight: ${TYPOGRAPHY.FONT_WEIGHT.NORMAL};
        line-height: ${TYPOGRAPHY.LINE_HEIGHT.NORMAL};
    `,

    bodySmall: `
        font-size: ${TYPOGRAPHY.FONT_SIZE.BODY_SMALL};
        font-weight: ${TYPOGRAPHY.FONT_WEIGHT.NORMAL};
        line-height: ${TYPOGRAPHY.LINE_HEIGHT.NORMAL};
    `,

    caption: `
        font-size: ${TYPOGRAPHY.FONT_SIZE.CAPTION};
        font-weight: ${TYPOGRAPHY.FONT_WEIGHT.NORMAL};
        line-height: ${TYPOGRAPHY.LINE_HEIGHT.NORMAL};
    `,
};

/**
 * Truncate text with ellipsis
 * @param {number} lines - Number of lines to show
 * @returns {string} CSS string for text truncation
 */
export const truncateText = (lines = 1) => {
    if (lines === 1) {
        return `
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        `;
    }

    return `
        display: -webkit-box;
        -webkit-line-clamp: ${lines};
        -webkit-box-orient: vertical;
        overflow: hidden;
    `;
};
