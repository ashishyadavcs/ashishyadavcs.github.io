import styled, { css } from "styled-components";
import { motion } from "framer-motion";

// Common button styles
const buttonStyles = css`
    background-color: ${props => (props.$secondary ? "transparent" : "var(--primary)")};
    color: ${props => (props.$secondary ? "var(--primary)" : "white")};
    border: 2px solid var(--primary);
    padding: ${props => (props.$small ? "0.5rem 1rem" : "0.75rem 1.5rem")};
    border-radius: 4px;
    font-weight: 600;
    font-size: ${props => (props.$small ? "0.9rem" : "1rem")};
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    text-decoration: none;
    min-height: 44px; /* Better touch target for mobile */

    @media (max-width: 480px) {
        padding: ${props => (props.$small ? "0.6rem 1.2rem" : "0.8rem 1.8rem")};
        font-size: ${props => (props.$small ? "0.85rem" : "0.95rem")};
        width: 100%;
        max-width: 200px;
        margin: 0 auto;
    }

    &:hover,
    &:focus {
        background-color: ${props => (props.$secondary ? "var(--primary)" : "var(--button-hover)")};
        color: white;
        border-color: ${props => (props.$secondary ? "var(--primary)" : "var(--button-hover)")};
        transform: translateY(-2px);
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
    }
`;

// Motion button for regular buttons
export const StyledButton = styled(motion.button)`
    ${buttonStyles}
`;

// Motion div styled as button for links
export const StyledLinkButton = styled(motion.div)`
    ${buttonStyles}
`;
